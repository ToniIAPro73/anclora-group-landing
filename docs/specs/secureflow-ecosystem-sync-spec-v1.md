# SecureFlow ecosystem synchronization — Landing spec v1

Status: draft

The public landing adds the shared `secureflow` line and the four canonical
SecureFlow products (`filestudio`, `purgedoc`, `tableextract`, `cleansheet`).
Brand names, descriptions, and local logos come from the SecureFlow source and
the Anclora product dossiers. Every supported locale must provide explicit line
and product copy. This change does not alter navigation, layout contracts, SEO,
or deployment configuration.

Acceptance criteria:

- the line is present exactly once;
- the four products are grouped under `secureflow`;
- no FileStudio duplicate exists;
- canonical local logos are reused;
- all six supported locales have line and product translations;
- existing product statuses and CTA behavior remain intact;
- focused data/i18n tests, lint, build, diff check, and desktop/mobile visual QA pass.
