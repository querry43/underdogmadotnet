import 'dart:html';
import 'dart:json';
import 'package:intl/intl.dart';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';
const videoWidth = 240;
const numColumns = 3;
const maxResults = 12; // should be a multiple of numColumns

main() {
  loadGooglePlusData();
}

void loadGooglePlusData() {
  String url = '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=${maxResults}';
  HttpRequest.getString(url).then(onActivityDataLoaded);
}

void onActivityDataLoaded(String req) {
  Map data = parse(req);
  List activities = data['items'];

  int column = 0;
  for (Map activity in data['items']) {
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
        IFrameElement iframe = new IFrameElement();
        iframe.title = "YouTube video player";
        iframe.classes.add('youtube-player');
        iframe.src = attachment['embed']['url'];
        iframe.attributes['allowFullScreen'] = '';

        var width = attachment['image']['width'];
        var height = attachment['image']['height'];
        var scaleFactor = width / videoWidth;
        iframe.width = (width / scaleFactor).toString();
        iframe.height = (height / scaleFactor).toString();

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
