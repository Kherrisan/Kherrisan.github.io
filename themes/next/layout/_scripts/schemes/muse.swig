{%
  set scripts = [
    'src/schemes/muse.js'
  ]
%}

{% for script in scripts %}
  <script src="{{ url_for(theme.js) }}/{{ script }}?v={{ version }}&_inline=true"></script>
{% endfor %}
