import 'dart:html';
import 'dart:json';

const apiUrl = 'https://www.googleapis.com/plus/v1';
const userId = '104268957202871548605';
const key = 'AIzaSyDjt9V66sWPDzuxoHhFZEZQGZR-0qySclI';

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
  //print(activity);

  var activityBox = new DivElement();
  activityBox.classes.add('activity');

  var date = new ParagraphElement();
  date.classes.add('date');
  date.text = activity['published'];
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
        iframe.width = attachment['image']['width'].toString();
        iframe.height = attachment['image']['height'].toString();
        iframe.src = attachment['embed']['url'];
        iframe.attributes['allowFullScreen'] = '';
        activityBox.append(iframe);
        break;

      case 'album':
        var imageElement = new ImageElement();
        imageElement.src = attachment['thumbnails'][0]['image']['url'];
        activityBox.append(imageElement);
        break;

      default:
        print(attachment);
    }
  }

  query('#activities').append(activityBox);
}

/*
{
  kind: plus#activity,
  etag: "IvoOG8kWYW4qgwO0sQ5WhoG33pY/BrH54R2XWg_NUnaiM7hkfM2tWtQ",
  title: http://youtu.be/dAOZqxoyLMQ,
  published: 2013-07-28T03:58:50.101Z,
  updated: 2013-07-28T03:58:50.101Z,
  id: z13zf1mgklbscl05a04ce3szpwngyfyqihs,
  url: https://plus.google.com/104268957202871548605/posts/UmQxzPLBkhb,
  actor: {
    id: 104268957202871548605,
    displayName: Matt Harrington,
    url: https://plus.google.com/104268957202871548605,
    image: {
      url: https://lh6.googleusercontent.com/-ZTpUwCo5rgI/AAAAAAAAAAI/AAAAAAAACuI/Cf4mhLwAFX0/photo.jpg?sz=50
    }
  },
  verb: share,
  object: {
    objectType: activity,
    id: z12nslsgrkjrfl25204cfbioaojwilrwiww0k,
    actor: {
      id: 112526208786662512291,
      displayName: Adafruit Industries,
      url: https://plus.google.com/112526208786662512291,
      image: {
        url: https://lh5.googleusercontent.com/-R5LcGpdqijA/AAAAAAAAAAI/AAAAAAAAWP0/MKtr6mPqElQ/photo.jpg?sz=50
      }
    },
    content: <a href="http://youtu.be/dAOZqxoyLMQ" class="ot-anchor" rel="nofollow">http://youtu.be/dAOZqxoyLMQ</a>,
    url: https://plus.google.com/112526208786662512291/posts/U7F6CdxoZKt,
    replies: {
      totalItems: 0,
      selfLink: https://www.googleapis.com/plus/v1/activities/z13zf1mgklbscl05a04ce3szpwngyfyqihs/comments
    },
    plusoners: {
      totalItems: 0,
      selfLink: https://www.googleapis.com/plus/v1/activities/z13zf1mgklbscl05a04ce3szpwngyfyqihs/people/plusoners
    },
    resharers: {
      totalItems: 0,
      selfLink: https://www.googleapis.com/plus/v1/activities/z13zf1mgklbscl05a04ce3szpwngyfyqihs/people/resharers
    },
    attachments: [
      {
        objectType: video,
        displayName: Bubble Wrap Bike,
        content: Bubble Wrap Bike,
        url: http://youtu.be/dAOZqxoyLMQ,
        image: {
          url: https://lh6.googleusercontent.com/proxy/gNlg4kxcFvvSMY_Bb4Hq0yIC1wdDbH3Z8pY…ZPSeKdJk_6aXf3VysUBFEGI126dmnbErYUpzRJnBk1uXy7MM75Jm_UDyMC9Ene=w379-h379-n,
          type: image/jpeg,
          height: 379,
          width: 379
        },
        embed: {
          url: http://www.youtube.com/v/dAOZqxoyLMQ?autohide=1&version=3,
          type: application/x-shockwave-flash
        }
      }
    ]
  },
  provider: {title: Reshared Post},
  access: {
    kind: plus#acl,
    description: Public,
    items: [{type: public}]
  }
},
*/
