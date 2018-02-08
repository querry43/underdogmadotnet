import 'dart:html';
import 'package:test/test.dart';
import '../lib/underdogma.dart';

void main() {
  group('getColumns', () {
    DivElement parent;

    setUp(() {
      parent = new DivElement();
      addColumns(parent);
    });

    test('adds 3 columns', () {
      expect(parent.children, hasLength(3));
    });
    test('sets class', () {
      expect(parent.children.map((i) => i.classes.elementAt(0)),
          everyElement(equals('column')));
      expect(parent.children.map((i) => i.classes.elementAt(1)),
          equals(['col0', 'col1', 'col2']));
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

    test('adds 1 element', () {
      expect(parent.children, hasLength(1));
    });
    test('sets class', () {
      expect(firstChild.classes.contains('date'), isTrue);
    });
    test('formats date string', () {
      expect(firstChild.text, equals('August 8, 2013'));
    });
  });

  group('addOriginallySharedElement', () {
    DivElement parent;
    Map activity;
    Element firstElement, secondElement;

    setUp(() {
      activity = {
        'reshared': true,
        'reshared_source': 'Adafruit Industries',
      };
      parent = new DivElement();
      addOriginallySharedElement(parent, activity);
      firstElement = parent.children[0];
      secondElement = parent.children[1];
    });

    test('adds 2 elements', () {
      expect(parent.children, hasLength(2));
    });

    test('sets text', () {
      expect(firstElement.text,
          equals('Originally shared by Adafruit Industries'));
    });
    test('sets child class', () {
      expect(firstElement.children.first.classes.contains('originally-shared'),
          isTrue);
    });
    test('sets child text', () {
      expect(firstElement.children.first.text, equals('Adafruit Industries'));
    });

    test('adds hr', () {
      expect(secondElement is HRElement, isTrue);
    });

    test('only adds element when reshared', () {
      activity['reshared'] = false;
      parent = new DivElement();
      addOriginallySharedElement(parent, activity);
      expect(parent.children, hasLength(0));
    });
  });

  group('addArticleAttachmentElement', () {
    DivElement parent;
    Map attachment;
    Element firstElement;
    AnchorElement secondElement;

    setUp(() {
      attachment = {
        'displayName': 'Crochet Locutus',
        'url': 'http://www.instructables.com/id/Crochet-Locutus/',
        'fullImage': {
          'url':
              'http://www.instructables.com/files/deriv/FI3/XZ5N/HJW8WH4K/FI3XZ5NHJW8WH4K.SQUARE3.jpg',
          'type': 'image/jpeg'
        }
      };

      parent = new DivElement();
      addArticleAttachmentElement(parent, attachment);
      firstElement = parent.children[0];
      secondElement = parent.children[1];
    });

    test('adds 2 elements', () {
      expect(parent.children, hasLength(2));
    });

    test('adds name', () {
      expect(firstElement.text, equals('Crochet Locutus'));
    });
    test('sets name class', () {
      expect(firstElement.classes.contains('name'), isTrue);
    });

    test('adds anchor', () {
      expect(secondElement.href,
          equals('http://www.instructables.com/id/Crochet-Locutus/'));
    });
    test('adds image', () {
      expect(
          (secondElement.children.first as ImageElement).src,
          equals(
              'http://www.instructables.com/files/deriv/FI3/XZ5N/HJW8WH4K/FI3XZ5NHJW8WH4K.SQUARE3.jpg'));
    });

    test('omits image when absent', () {
      attachment.remove('fullImage');

      parent = new DivElement();
      addArticleAttachmentElement(parent, attachment);
      expect(parent.children, hasLength(1));
    });
  });

  group('addPhotoAttachmentElement', () {
    DivElement parent;
    Map attachment;
    AnchorElement firstElement;

    setUp(() {
      attachment = {
        'url': 'http://page-url/',
        'image': {'url': 'http://image-url/'}
      };

      parent = new DivElement();
      addPhotoAttachmentElement(parent, attachment);
      firstElement = parent.children.first;
    });

    test('adds 1 element', () {
      expect(parent.children, hasLength(1));
    });
    test('sets href', () {
      expect(firstElement.href, equals('http://page-url/'));
    });
    test('sets image src', () {
      expect((firstElement.children.first as ImageElement).src,
          equals('http://image-url/'));
    });

    test('handles videos', () {
      attachment = {
        'url': 'http://youtube/some-video',
        'image': {
          'url': 'http://youtube/some-video-image',
        },
      };

      parent = new DivElement();
      addPhotoAttachmentElement(parent, attachment);

      expect(parent.children, hasLength(1));
    });
  });

  group('addAlbumAttachmentElement', () {
    DivElement parent;
    Map attachment;
    AnchorElement firstElement;

    setUp(() {
      attachment = {
        'url': 'http://page-url/',
        'thumbnails': [
          {
            'image': {'url': 'http://site/1.png', 'width': 100, 'height': 100}
          },
          {
            'image': {'url': 'http://site/2.png', 'width': 240, 'height': 100}
          },
          {
            'image': {'url': 'http://site/3.png', 'width': 120, 'height': 240}
          },
          {
            'image': {'url': 'http://site/4.png'}
          },
        ],
      };

      parent = new DivElement();
      addAlbumAttachmentElement(parent, attachment);
      firstElement = parent.children.first;
    });

    test('adds 1 element', () {
      expect(parent.children, hasLength(1));
    });
    test('sets href', () {
      expect(firstElement.href, equals('http://page-url/'));
    });
    test('scales div height', () {
      expect(firstElement.children.first.style.height, equals('480px'));
    });

    test('displays first three images', () {
      List<Element> images = firstElement.children.first.children;
      expect(images, hasLength(3));
      expect(
          images.map((i) => i.src),
          equals(
              ['http://site/1.png', 'http://site/2.png', 'http://site/3.png']));
    });

    test('displays stub image if fewer than three images', () {
      [3, 2, 1].forEach((i) => attachment['thumbnails'].removeAt(i));
      parent = new DivElement();
      addAlbumAttachmentElement(parent, attachment);
      firstElement = parent.children.first;

      List<Element> images = firstElement.children.first.children;
      expect(images, hasLength(3));
      expect(images.map((i) => i.src.split('/').last),
          equals(['1.png', 'missing.gif', 'missing.gif']));
    });
  });

  group('addEntryElement', () {
    test('does not die when no attachments', () {
      Map activity = {
        'date': '2013-08-08T14:59:23.795Z',
        'content': 'somecontent',
        'attachments': [],
      };

      DivElement parent = new DivElement();
      addEntryElement(parent, activity);
    });
  });
}
