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

int numTabs = 0;
int numLoadedTabs = 0;

load() {
  addTabs();
  setValidatorURL();
  loadInterests();
  loadProjects();
}

void loadInterests() {
  String url =
    isDebug()
    ? '../test/sample-gplus-stream.json'
    : '${apiUrl}/people/${userId}/activities/public?key=${key}&maxResults=${maxResults}';

  HttpRequest.getString(url).then(
    (String data) { loadTab(googlePlusJSONToEntries(data), '#interests_container'); }
  );
}

void loadProjects() {
  context['processData'] = (JsObject data) {
    loadTab(googleSitesAtomToEntries(data.toString()), '#projects_container');
  };

  ScriptElement script = new ScriptElement();
  script.src =
    isDebug()
    ? '../test/sample-sites-stream'
    : 'https://sites.google.com/feeds/content/underdogma.net/wiki/?ancestor=620825043256417770&kind=announcement&callback=processData';
  document.body.children.add(script);
}

void addTabs() {
  UListElement menu = querySelector('#navbar');
  Element tabContainer = querySelector('#tabContainer');

  addTab(menu, tabContainer, 'interests', 'Interests', true);
  addTab(menu, tabContainer, 'projects', 'Projects');

  for (AnchorElement link in menu.querySelectorAll('a')) {
    link.onClick.listen(
      (event) {
        for (AnchorElement link in menu.querySelectorAll('a'))
          link.classes.remove('selected');

        for (DivElement div in tabContainer.querySelectorAll('.tabContainer'))
          div.style.display = 'none';

        link.classes.add('selected');
        tabContainer.querySelector('#'+link.attributes['rel']+'_container').style.display = 'initial';
      }
    );
  }
}

void addTab(Element menu, Element tabContainer, String name, String text, [bool def = false]) {
  AnchorElement link = new AnchorElement(href: '#' + name);
  link.attributes['rel'] = name;
  link.text = text;

  LIElement li = new LIElement();
  li.append(link);

  menu.append(li);

  DivElement div = new DivElement();
  div.id = name + '_container';
  div.style.display = 'none';
  div.classes.add('tabContainer');
  tabContainer.append(div);

  if (window.location.hash == '#'+name || (window.location.hash == '' && def)) {
    link.classes.add('selected');
    div.style.display = 'initial';
  }

  numTabs++;
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

void loadTab(List<Map> entries, String tab) {
  Element tabElement = querySelector(tab);

  if (++numLoadedTabs == numTabs)
    stopLoadingBar();

  addColumns(tabElement);

  int column = 0;
  for (Map entry in entries) {
    addEntryElement(tabElement.querySelector('.col${column}'), entry);
    column++;
    column %= numColumns;
  }
}

List<Map> googleSitesAtomToEntries(String atom) {
  Document data = new DomParser().parseFromString(atom, 'text/xml');
  List<Map> activities = new List<Map>();

  List<Node> nodes = data.querySelectorAll('entry');

  for (HtmlElement entry in data.querySelectorAll('entry')) {
    Map entryDescription = new Map();

    String url = entry.querySelector('link[rel="alternate"]').attributes['href'];
    String content = entry.querySelector('content').text;

    if (content.length > 200)
        content = content.substring(0, 200) + '...';

    entryDescription['date'] = entry.querySelector('published').text;
    entryDescription['content'] = content;
    entryDescription['attachments'] = new List<Map>();

    ImageElement img = entry.querySelector('img');
    IFrameElement video = entry.querySelector('iframe.youtube-player');

    if (video != null) {
      String embedUrl = video.attributes['src'];
      int index = embedUrl.indexOf('embed/') + 6;
      String videoId = embedUrl.substring(index, index + 11);
      String imageUrl = '//img.youtube.com/vi/'+videoId+'/1.jpg';

      Map attachment = new Map();
      attachment['objectType'] = 'video';
      attachment['image'] = new Map();
      attachment['image']['url'] = imageUrl;
      attachment['url'] = url;
      entryDescription['attachments'].add(attachment);
    }

    if (img != null) {
      Map attachment = new Map();
      attachment['objectType'] = 'photo';
      attachment['image'] = new Map();
      attachment['image']['url'] = img.src;
      attachment['url'] = url;
      entryDescription['attachments'].add(attachment);
    }

    activities.add(entryDescription);
  }

  return activities;
}

List<Map> googlePlusJSONToEntries(String json) {
  Map data = JSON.decode(json);
  List<Map> activities = new List<Map>();

  for (Map entry in data['items']) {
    Map entryDescription = new Map();
    entryDescription['date'] = entry['published'];
    entryDescription['content'] = entry['object']['content'];
    if (entry['verb'] == 'share') {
      entryDescription['reshared'] = true;
      entryDescription['reshared_source'] = entry['object']['actor']['displayName'];
    }
    entryDescription['attachments'] = new List<Map>();
    if (entry['object']['attachments'] != null)
      entryDescription['attachments'] = entry['object']['attachments'];

    activities.add(entryDescription);
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

void addEntryElement(Element parent, Map entry) {
  DivElement element = new DivElement();
  element.classes.add('entry');

  addDateElement(element, entry['date']);
  addOriginallySharedElement(element, entry);
  addContent(element, entry['content']);
  addAttachmentElements(element, entry['attachments']);

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

void addOriginallySharedElement(Element parent, Map entry) {
  if (entry['reshared']) {
    ParagraphElement element = new ParagraphElement();
    element.text = 'Originally shared by ';

    SpanElement name = new SpanElement();
    name.text = entry['reshared_source'];
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
