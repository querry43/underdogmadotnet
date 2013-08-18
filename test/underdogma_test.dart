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
}
