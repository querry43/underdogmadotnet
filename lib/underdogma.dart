library underdogma;

import 'dart:html';
import 'dart:json';
import 'dart:math';
import 'package:intl/intl.dart';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';
const columnWidth = 240;
const numColumns = 3;
const maxResults = numColumns * 4;

load() {
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

void stopLoadingBar() {
  query('#circularG').remove();
}

void populate(String json) {
  Map data = parse(json);
  Element container = query('#activities');

  stopLoadingBar();

  addColumns(container);
  //addActivities(activities);

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

  addAttachmentElements(element, activity['object']['attachments']);

  parent.append(element);
}

void addAttachmentElements(Element parent, List<Map> attachments) {
  for (Map attachment in attachments) {
    switch(attachment['objectType']) {
      case 'video':
        addVideoAttachmentElement(parent, attachment);
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

void addVideoAttachmentElement(Element parent, Map attachment) {
  ImageElement image = new ImageElement();
  image.src = attachment['image']['url'];

  AnchorElement anchor = new AnchorElement();
  anchor.href = attachment['url'];
  anchor.append(image);

  parent.append(anchor);
}

void addAlbumAttachmentElement(Element parent, Map attachment) {
  var width = attachment['thumbnails'][0]['image']['width'];
  var scaleFactor = width / columnWidth;
  var height = attachment['thumbnails'][0]['image']['height'] ~/ scaleFactor;

  DivElement div = new DivElement();
  div.classes.add('album');
  div.style.height = "${height.toString()}px";

  ImageElement image = new ImageElement();
  image.src = attachment['thumbnails'][0]['image']['url'];
  image.style.zIndex = '10';
  image.style.top = '0px';
  image.style.left = '0px';
  div.append(image);

  image = new ImageElement();
  image.src = attachment['thumbnails'][1]['image']['url'];
  image.style.zIndex = '9';
  image.style.top = '10px';
  image.style.left = '10px';
  div.append(image);

  image = new ImageElement();
  image.src = attachment['thumbnails'][2]['image']['url'];
  image.style.zIndex = '8';
  image.style.top = '20px';
  image.style.left = '20px';
  div.append(image);

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

  ImageElement image = new ImageElement();
  image.src = attachment['fullImage']['url'];

  AnchorElement anchor = new AnchorElement();
  anchor.href = attachment['url'];
  anchor.append(image);

  parent.append(name);
  parent.append(anchor);
}
