(function() {
  tinymce.PluginManager.add('iasr_prism_button', function(editor, url) {

    editor.addButton( 'iasr_prism_button', {
      text: 'Syntax',
      icon: false,
      type: 'menubutton',
      menu: [
        {
          text: 'CSS',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-css">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'Git',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-git">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'JavaScript',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-javascript">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'MarkDown',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-markdown">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'Markup',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-markup">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'PHP',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-php">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        },
        {
          text: 'Sass',
          onclick: function() {
            var selectedText = editor.selection.getContent(),
                  returnText = '';

            returnText = '<pre><code class="language-sass">' + selectedText + '</code></pre>';
            editor.execCommand('mceInsertContent', 0, returnText);
          }
        }
      ]
    });
  });
})();
