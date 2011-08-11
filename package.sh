#!/bin/bash
# huyz 2011-07-14
# Package files for distribution as CRX and for Chrome Web Store

### Config

SOURCES="gpme.js background.js fancy-settings/source/settings.js"

### End config

if [ ! -d dist ]; then
  mkdir dist || exit 1
fi
cd dist || exit 1
rm -rf google-plus-me

mkdir google-plus-me || exit 1
cd google-plus-me || exit 1

cp -a ../../{*.{html,js,css,json},icons,images,_locales,fancy-settings} .

version=$(sed -n 's/.*"version" *: *"\([0-9\.][0-9\.]*\)".*/\1/p' manifest.json)
[ -n "$version" ] || exit 2

# Web store regular
echo "== Web Store =="
perl -pi -e 's/^(var DEBUG =).*/$1 false;/' $SOURCES
perl -pi -e 's/^(var PARANOID =).*/$1 false;/' $SOURCES
rm -f ../google-plus-me-$version.zip
zip -r ../google-plus-me-$version.zip *

# Paranoid edition
echo "== Paranoid edition =="
perl -pi -e 's/^(var DEBUG =).*/$1 false;/' $SOURCES
perl -pi -e 's/^(var PARANOID =).*/$1 true;/' $SOURCES
rm -rf _locales
cp -a ../../{manifest.json,_locales} .
perl -pi -e '
    s/G\+me\b/G+me (PARANOID Edition)/;
    s/^,\s*"tabs"//;
  ' manifest.json
perl -pi -e 's/("message": "G\+me for Google Plus™)"/$1 (PARANOID Edition)"/g' _locales/*/messages.json
rm -f ../google-plus-me-$version-paranoid.zip
zip -r ../google-plus-me-$version-paranoid.zip *

# Web Store beta (only kept for records as it matches the huyz.us beta)
echo "== Web Store beta =="
perl -pi -e 's/^(var DEBUG =).*/$1 true;/' $SOURCES
perl -pi -e 's/^(var PARANOID =).*/$1 false;/' $SOURCES
rm -rf _locales
cp -a ../../{manifest.json,_locales} .
perl -pi -e '
    s/G\+me\b/G+me (BETA)/;
  ' manifest.json
perl -pi -e 's/("message": "G\+me for Google Plus™)"/$1 (BETA)"/g' _locales/*/messages.json
rm -f ../google-plus-me-$version-beta.zip
zip -r ../google-plus-me-$version-beta.zip *

# huyz.us beta
# NOTE: this must run right after the "Web Store beta" is packaged
echo "== Independent beta (crx file) =="
perl -pi -e 's#"homepage_url"#"update_url": "http://huyz.us/gpme-beta-updates.xml",\n  $&#; ' manifest.json
