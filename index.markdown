---
layout: default
title: Walter Cruz - github
---

{% for post in site.posts %} 

[{{ post.title }}](.{{post.url}}) - {{ post.date | date_to_string }}
---

{{ post.content }}

---

{% endfor %}

