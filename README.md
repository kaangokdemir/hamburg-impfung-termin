# Hamburg Impfung Termin

This is a Node.js script which warns you when there is an empty vaccination slot at Hamburg. It makes a request to vaccination center's endpoint per one second to warn you when there is a free spot. You still need a 12 digits "Vermittlungscode" to run this script and get a token from there to use.

| VARIABLE | DESCRIPTON                                                                                                                       | DEFAULT VALUE |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| TOKEN    | Token which you receive with your Vermittlungscode                                                                               | -             |
| POSTCODE | Post Code of your preffered vaccination center. Check the list from <https://353-iz.impfterminservice.de/impftermine> (Optional) | 20357         |

- For receive that `token`, first you need to visit `https://353-iz.impfterminservice.de/impftermine/suche/{VERMITTLUNGSCODE}/{POTSTCODE}/`

- Inspect the page and find your `token` from Authorization part. it would look like `Authorization: Basic OkZNVVQtMkRDUi1Babcd` and you need to get `OkZNVVQtMkRDUi1Babcd` as your token.

- Then run `node index.js token=OkZNVVQtMkRDUi1abcd plz=20538` or `node index.js token=OkZNVVQtMkRDUi1abcd` for default Hamburg Impfung Center.

- Now you'll see your some numbers in your console would be ticking, don't close your terminal and do your daily stuff. When there is an empty slot, you'll hear warnings and in your console, you'll also see when there is an empty slot. Directly go <https://353-iz.impfterminservice.de/impftermine/suche/{VERMITTLUNGSCODE}/{POTSTCODE}/> again and confirm your appointment.
