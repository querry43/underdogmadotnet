library underdogma;

import 'dart:convert';
import 'dart:html';
import 'dart:js';
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

  // String url =
  //   isDebug()
  //   ? '../test/sample-stream.json'
  //   : '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=${maxResults}';

  // HttpRequest.getString(url).then(populate);


  context['processData'] = (JsObject data) {
    print('processData');
    populate(data.toString());
  };

  // make the call
  ScriptElement script = new ScriptElement();
  script.src = 'https://sites.google.com/feeds/content/underdogma.net/wiki/?ancestor=620825043256417770&kind=announcement&callback=processData';
  document.body.children.add(script);
}

bool isDebug() {
  List<String> request = document.window.location.toString().split('?');

  if (request.length != 2)
    return false;

  return request.last.contains('debug');
}

void setValidatorURL() {
  (querySelector('#compliance') as AnchorElement).href = "http://validator.w3.org/check?uri=${Uri.encodeComponent(document.window.location.toString())}";
}

void stopLoadingBar() {
  querySelector('#loading').remove();
}

void populate(String json) {
  Element container = querySelector('#activities');

  stopLoadingBar();

  addColumns(container);

  int column = 0;
  for (Map activity in googleSitesAtomToActivities(json)) {
  //for (Map activity in googlePlusJSONToActivities(json)) {
    addActivityElement(container.querySelector('.col${column}'), activity);
    column++;
    column %= numColumns;
  }
}

List<Map> googleSitesAtomToActivities(String atom) {
  Document data = new DomParser().parseFromString(atom, 'text/xml');
  List<Map> activities = new List<Map>();

  List<Node> nodes = data.querySelectorAll('entry');
  print(nodes.length);

  for (HtmlElement activity in data.querySelectorAll('entry')) {
    Map activityDescription = new Map();

    String url = activity.querySelector('link[rel="alternate"]').attributes['href'];
    String content = activity.querySelector('content').text;

    if (content.length > 200)
        content = content.substring(0, 200) + '...';

    activityDescription['date'] = activity.querySelector('published').text;
    activityDescription['content'] = content;
    activityDescription['attachments'] = new List<Map>();

    ImageElement img = activity.querySelector('img');
    if (img != null) {
      Map attachment = new Map();
      attachment['objectType'] = 'photo';
      attachment['image'] = new Map();
      attachment['image']['url'] = img.src;
      attachment['url'] = url;
      activityDescription['attachments'].add(attachment);
    }

    activities.add(activityDescription);
  }

  return activities;
}

List<Map> googlePlusJSONToActivities(String json) {
  Map data = JSON.decode(json);
  List<Map> activities = new List<Map>();

  for (Map activity in data['items']) {
    Map activityDescription = new Map();
    activityDescription['date'] = activity['published'];
    activityDescription['content'] = activity['object']['content'];
    if (activity['verb'] == 'share') {
      activityDescription['reshared'] = true;
      activityDescription['reshared_source'] = activity['object']['actor']['displayName'];
    }
    activityDescription['attachments'] = new List<Map>();
    if (activity['object']['attachments'] != null)
      activityDescription['attachments'] = activity['object']['attachments'];

    activities.add(activityDescription);
  }

  return activities;
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

  addDateElement(element, activity['date']);
  addOriginallySharedElement(element, activity);
  addContent(element, activity['content']);
  addAttachmentElements(element, activity['attachments']);

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
  if (activity['reshared']) {
    ParagraphElement element = new ParagraphElement();
    element.text = 'Originally shared by ';

    SpanElement name = new SpanElement();
    name.text = activity['reshared_source'];
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
