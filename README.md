# Music Boat - DB

This is an additional program you can run along side [mb-api](https://github.com/ourpalace/mb-api) which saves songs and their lyrics to a mongodb instance, this can be later used for fetching lyrics faster and without making as many requests to third party websites.

## Specs

I wrote this at night so its not the greatest, its running a fastify server and can handle around 75k req/sec, this can be rewritten into go using [fiber](https://gofiber.io/) and will be able to handle around 300k req/sec.