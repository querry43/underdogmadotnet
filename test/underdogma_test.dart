import 'dart:html';
import 'package:unittest/html_enhanced_config.dart';
import 'package:unittest/unittest.dart';
import '../lib/underdogma.dart';

void main() {
  useHtmlEnhancedConfiguration();
 
  group('getColumns', () {
    DivElement parent;

    setUp(() {
      parent = new DivElement();
      addColumns(parent);
    });

    test('adds 3 columns', () { expect(parent.children, hasLength(3)); });
    test('sets class', () {
      expect(parent.children.map((i) => i.classes.elementAt(0)), everyElement(equals('column')));
      expect(parent.children.map((i) => i.classes.elementAt(1)), equals(['col0', 'col1', 'col2']));
    });
  });

  group('addDateElement', () {
    DivElement parent;
    Element firstChild;

    setUp(() {
      parent = new DivElement();
      addDateElement(parent, '2013-08-08T14:59:23.795Z');
      firstChild = parent.children.first;
    });

    test('adds 1 element', () { expect(parent.children, hasLength(1)); });
    test('sets class', () { expect(firstChild.classes.contains('date'), isTrue); });
    test('formatts date string', () { expect(firstChild.text, equals('August 8, 2013')); });
  });

  group('addOriginallySharedElement', () {
    DivElement parent;
    Map activity;
    Element firstElement, secondElement;

    setUp(() {
      activity = {
        'verb': 'share',
        'object': { 'actor': { 'displayName': 'Adafruit Industries' } },
      };
      parent = new DivElement();
      addOriginallySharedElement(parent, activity);
      firstElement = parent.children[0];
      secondElement = parent.children[1];
    });

    test('adds 2 elements', () { expect(parent.children, hasLength(2)); });

    test('sets text', () { expect(firstElement.text, equals('Originally shared by Adafruit Industries')); });
    test('sets child class', () { expect(firstElement.children.first.classes.contains('originally-shared'), isTrue); });
    test('sets child text', () { expect(firstElement.children.first.text, equals('Adafruit Industries')); });

    test('adds hr', () { expect(secondElement is HrElement, isTrue); });

    test('only adds element when verb = share', () {
      activity['verb'] = 'post';
      parent = new DivElement();
      addOriginallySharedElement(parent, activity);
      expect(parent.children, hasLength(0));
    });
  });

  group('addArticleAttachmentElement', () {
    DivElement parent;
    Map attachment;
    Element firstElement, secondElement;

    setUp(() {
      attachment = {
        'displayName': 'Crochet Locutus',
        'url': 'http://www.instructables.com/id/Crochet-Locutus/',
        'fullImage': {
          'url': 'http://www.instructables.com/files/deriv/FI3/XZ5N/HJW8WH4K/FI3XZ5NHJW8WH4K.SQUARE3.jpg',
          'type': 'image/jpeg'
        }
      };

      parent = new DivElement();
      addArticleAttachmentElement(parent, attachment);
      firstElement = parent.children[0];
      secondElement = parent.children[1];
    });

    test('adds 2 elements', () { expect(parent.children, hasLength(2)); });

    test('adds name', () { expect(firstElement.text, equals('Crochet Locutus')); });
    test('sets name class', () { expect(firstElement.classes.contains('name'), isTrue); });

    test('adds anchor', () { expect(secondElement.href, equals('http://www.instructables.com/id/Crochet-Locutus/')); });
    test('adds image', () { expect(secondElement.children.first.src, equals('http://www.instructables.com/files/deriv/FI3/XZ5N/HJW8WH4K/FI3XZ5NHJW8WH4K.SQUARE3.jpg')); });
  });

  group('addVideoAttachmentElement', () {
    DivElement parent;
    Element firstElement;
    Map attachment;

    setUp(() {
      attachment = {
        'image': {
          'height': 350,
          'width': 300,
        },
        'embed': {
          'url': 'http://www.youtube.com/v/J4LhdU3a1KM?version=3&autohide=1',
        },
      };

      parent = new DivElement();
      addVideoAttachmentElement(parent, attachment);
      firstElement = parent.children.first;
    });

    test('adds 1 element', () { expect(parent.children, hasLength(1)); });
    test('sets src', () { expect(firstElement.src, equals('http://www.youtube.com/v/J4LhdU3a1KM?version=3&autohide=1')); });

    test('scales height and width', () {
      String width = 240.toString();
      String height = (350 * (240 / 300)).toInt().toString();
      expect(firstElement.width, equals(width));
      expect(firstElement.height, equals(height));
    });

    test('limits minimum height', () {
      attachment['image']['height'] = 100;
      parent = new DivElement();
      addVideoAttachmentElement(parent, attachment);
      firstElement = parent.children.first;

      expect(firstElement.height, equals(200.toString()));
    });
  });
}
