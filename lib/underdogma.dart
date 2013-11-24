library underdogma;

import 'dart:html';
import 'dart:convert';
import 'dart:math';
import 'package:intl/intl.dart';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';
const columnWidth = 240;
const numColumns = 3;
const maxResults = numColumns * 6;

load() {
  setValidatorURL();

  String url =
    isDebug()
    ? '../test/sample-stream.json'
    : '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=${maxResults}';

  HttpRequest.getString(url).then(populate);
}

bool isDebug() {
  List<String> request = document.window.location.toString().split('?');

  if (request.length != 2)
    return false;

  return request.last.contains('debug');
}

void setValidatorURL() {
  (query('#compliance') as AnchorElement).href = "http://validator.w3.org/check?uri=${Uri.encodeComponent(document.window.location.toString())}";
}

void stopLoadingBar() {
  query('#loading').remove();
}

void populate(String json) {
  Map data = JSON.decode(json);
  Element container = query('#activities');

  stopLoadingBar();

  addColumns(container);

  int column = 0;
  for (Map activity in data['items']) {
    addActivityElement(container.query('.col${column}'), activity);
    column++;
    column %= numColumns;
  }
}

void addColumns(Element parent) {
  for (int column = 0; column < numColumns; column++) {
    DivElement columnDiv = new DivElement();
    columnDiv.classes.add('column');
    columnDiv.classes.add('col${column}');

    parent.append(columnDiv);
  }
}

void addActivityElement(Element parent, Map activity) {
  DivElement element = new DivElement();
  element.classes.add('activity');

  addDateElement(element, activity['published']);
  addOriginallySharedElement(element, activity);
  addContent(element, activity['object']['content']);

  if (activity['object']['attachments'] != null)
    addAttachmentElements(element, activity['object']['attachments']);

  parent.append(element);
}

void addAttachmentElements(Element parent, List<Map> attachments) {
  for (Map attachment in attachments) {
    switch(attachment['objectType']) {
      case 'video':
        addPhotoAttachmentElement(parent, attachment);
        break;

      case 'album':
        addAlbumAttachmentElement(parent, attachment);
        break;

      case 'photo':
        addPhotoAttachmentElement(parent, attachment);
        break;

      case 'article':
        addArticleAttachmentElement(parent, attachment);
        break;

      default:
        print(attachment);
    }
  }
}

void addDateElement(Element parent, String date) {
  ParagraphElement element = new ParagraphElement();
  element.classes.add('date');
  element.text = new DateFormat.yMMMMd().format(DateTime.parse(date));
  parent.append(element);
}

void addOriginallySharedElement(Element parent, Map activity) {
  if (activity['verb'] == 'share') {
    ParagraphElement element = new ParagraphElement();
    element.text = 'Originally shared by ';

    SpanElement name = new SpanElement();
    name.text = activity['object']['actor']['displayName'];
    name.classes.add('originally-shared');
    element.append(name);

    parent.append(element);
    parent.append(new HRElement());
  }
}

void addContent(Element parent, String body) {
  ParagraphElement element = new ParagraphElement();
  element.appendHtml(body);
  parent.append(element);
}

void addAlbumAttachmentElement(Element parent, Map attachment) {

  DivElement div = new DivElement();
  div.classes.add('album');

  ImageElement image;

  int maxHeight = 0;

  [0, 1, 2].forEach((i) {
    image = new ImageElement();

    if (attachment['thumbnails'].length > i) {
      image.src = attachment['thumbnails'][i]['image']['url'];

      var width = attachment['thumbnails'][i]['image']['width'];
      var scaleFactor = width / columnWidth;
      var height = attachment['thumbnails'][i]['image']['height'] ~/ scaleFactor;
      maxHeight = max(maxHeight, height);
    } else {
      image.src = 'missing.gif';
    }

    image.style.zIndex = (10 - i).toString();
    image.style.top = '${(i)*10}px';
    image.style.left = '${(i)*10}px';
    div.append(image);
  });

  div.style.height = "${maxHeight}px";

  AnchorElement anchor = new AnchorElement();
  anchor.href = attachment['url'];
  anchor.append(div);

  parent.append(anchor);
}

void addPhotoAttachmentElement(Element parent, Map attachment) {
  ImageElement image = new ImageElement();
  image.src = attachment['image']['url'];

  AnchorElement anchor = new AnchorElement();
  anchor.href = attachment['url'];
  anchor.append(image);

  parent.append(anchor);
}

void addArticleAttachmentElement(Element parent, Map attachment) {
  ParagraphElement name = new ParagraphElement();
  name.text = attachment['displayName'];
  name.classes.add('name');
  parent.append(name);

  if (attachment['fullImage'] != null) {
    ImageElement image = new ImageElement();
    image.src = attachment['fullImage']['url'];

    AnchorElement anchor = new AnchorElement();
    anchor.href = attachment['url'];
    anchor.append(image);

    parent.append(anchor);
  }
}
