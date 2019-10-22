{% if theme.disqus.enable %}
  {% include 'disqus.swig' %}
{% elif theme.changyan.enable and theme.changyan.appid and theme.changyan.appkey %}
  {% include 'changyan.swig' %}
{% elif theme.valine.enable and theme.valine.appid and theme.valine.appkey %}
  {% include 'valine.swig' %}
{% elif theme.commento.enable %}
  <script defer src="http://47.96.224.246:8200/js/commento.js?__inline=true"></script>
{% endif %}

{% if page.comments %}
  {% if theme.livere_uid %}
    {% include 'livere.swig' %}
  {% elif theme.gitment.enable and theme.gitment.client_id %}
    {% include 'gitment.swig' %}
  {% elif theme.gitalk.enable %}
    {% include 'gitalk.swig' %}
  {% endif %}
{% endif %}