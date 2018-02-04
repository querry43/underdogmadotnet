PUB=/usr/lib/dart/bin/pub

.SUFFIXES: .js .dart

all: build/web/main.dart.js

build/web/main.dart.js: pubspec.yaml lib/underdogma.dart
	$(PUB) get
	$(PUB) build

test:
	QT_QPA_PLATFORM=offscreen $(PUB) run test -p phantomjs test/underdogma_test.dart

clean:
	rm -rf build

distclean: clean
	rm -rf packages */packages

.PHONY: test clean distclean
