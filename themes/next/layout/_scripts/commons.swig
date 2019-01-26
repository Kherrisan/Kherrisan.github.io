{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js'
  ]
%}

{% for common in js_commons %}
  <script src="{{ url_for(theme.js) }}/{{ common }}?v={{ version }}&__inline=true"></script>
{% endfor %}
