import 'dart:html';
import 'dart:json';
import 'package:intl/intl.dart';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';
const videoWidth = 240;

main() {
  loadGooglePlusData();
}

void loadGooglePlusData() {
  var url = '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=10';
  HttpRequest.getString(url).then(onActivityDataLoaded);
}

void onActivityDataLoaded(String req) {
  Map data = parse(req);
  List activities = data['items'];
  activities.forEach(addActivity);
}

void addActivity(Map activity) {
  var activityBox = new DivElement();
  activityBox.classes.add('activity');

  var date = new ParagraphElement();
  date.classes.add('date');
  date.text = new DateFormat.yMMMMd().format(DateTime.parse(activity['published']));
  activityBox.append(date);

  if (activity['verb'] == 'share') {
    var originallyShared = new ParagraphElement();
    originallyShared.text = 'Originally shared by ';
    originallyShared.appendHtml('<span class="originally-shared">${activity['object']['actor']['displayName']}</span>');
    activityBox.append(originallyShared);
    activityBox.append(new HRElement());
  }

  var body = new ParagraphElement();
  body.appendHtml(activity['object']['content']);
  activityBox.append(body);

  for (var attachment in activity['object']['attachments']) {
    switch(attachment['objectType']) {
      case 'video':
        var iframe = new IFrameElement();
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
        var imageElement = new ImageElement();
        imageElement.src = attachment['thumbnails'][0]['image']['url'];
        activityBox.append(imageElement);
        break;

      case 'photo':
        var imageElement = new ImageElement();
        imageElement.src = attachment['image']['url'];
        activityBox.append(imageElement);
        break;

      case 'article':
        var imageElement = new ImageElement();
        imageElement.src = attachment['fullImage']['url'];
        activityBox.append(imageElement);
        break;

      default:
        print(attachment);
    }
  }

  query('#activities').append(activityBox);
}
