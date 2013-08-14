library underdogma;

import 'dart:html';
import 'dart:json';
import 'dart:math';
import 'package:intl/intl.dart';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';
const videoWidth = 240;
const numColumns = 3;
const maxResults = numColumns * 4;

load() {
  String url =
    debug()
    ? 'test/debug.json'
    : '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=${maxResults}';

  HttpRequest.getString(url).then(populate);
}

bool debug() {
  List<String> request = document.window.location.toString().split('?');

  if (request.length != 2)
    return false;

  return request[1].contains('debug');
}

void stopLoadingBar() {
  query('#circularG').remove();
}

void populate(String json) {
  Map data = parse(json);

  stopLoadingBar();
  addColumns();
  populateColumns(data['items']);
}

void addColumns() {
  for (int column = 0; column < numColumns; column++) {
    DivElement columnDiv = new DivElement();
    columnDiv.classes.add('column');
    columnDiv.classes.add('col${column}');
    query('#activities').append(columnDiv);
  }
}

void populateColumns(List activities) {
  int column = 0;
  for (Map activity in activities) {
    query('#activities').query('.col${column}').append(activityToElement(activity));
    column++;
    column %= numColumns;
  }
}

DivElement activityToElement(Map activity) {
  DivElement activityBox = new DivElement();
  activityBox.classes.add('activity');

  ParagraphElement date = new ParagraphElement();
  date.classes.add('date');
  date.text = new DateFormat.yMMMMd().format(DateTime.parse(activity['published']));
  activityBox.append(date);

  if (activity['verb'] == 'share') {
    ParagraphElement originallyShared = new ParagraphElement();
    originallyShared.text = 'Originally shared by ';
    originallyShared.appendHtml('<span class="originally-shared">${activity['object']['actor']['displayName']}</span>');
    activityBox.append(originallyShared);
    activityBox.append(new HRElement());
  }

  ParagraphElement body = new ParagraphElement();
  body.appendHtml(activity['object']['content']);
  activityBox.append(body);

  for (Map attachment in activity['object']['attachments']) {
    switch(attachment['objectType']) {
      case 'video':
        var width = attachment['image']['width'];
        var height = attachment['image']['height'];
        var scaleFactor = width / videoWidth;

        IFrameElement iframe = new IFrameElement();
        iframe.id = 'ytplayer';
        iframe.width = (width / scaleFactor).toString();
        iframe.height = max(200, height / scaleFactor).toString();
        iframe.src = attachment['embed']['url'];
        iframe.attributes['frameborder'] = '0';
        activityBox.append(iframe);

        break;

      case 'album':
        ImageElement imageElement = new ImageElement();
        imageElement.src = attachment['thumbnails'][0]['image']['url'];
        activityBox.append(imageElement);
        break;

      case 'photo':
        ImageElement imageElement = new ImageElement();
        imageElement.src = attachment['image']['url'];
        activityBox.append(imageElement);
        break;

      case 'article':
        ImageElement imageElement = new ImageElement();
        imageElement.src = attachment['fullImage']['url'];
        activityBox.append(imageElement);
        break;

      default:
        print(attachment);
    }
  }

  return activityBox;
}
