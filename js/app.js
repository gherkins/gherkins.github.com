function greetings() {
    return "commands: cv, email, github, twitter\n\nready\n";
}

$(function () {


    $('#term').html('').terminal(

        function (command, term) {

            command = command.toLowerCase();

            //log
            if (command.trim() != '') {
                try {
                    _gaq.push(['_trackEvent', 'Command', command]);
                } catch (err) {
                }
            }

            switch (command) {

                case 'email':
                    term.echo("maxgirkens@gmail.com");
                    break;

                case 'github':
                    term.echo("https://github.com/gherkins");
                    break;

                case 'twitter':
                    term.echo("https://twitter.com/mgherkins");
                    break;

                case 'run':
                    term.clear();
                    var interval = 10;
                    for (var i = 0; i <= 16; i++) {
                        setTimeout(function(){
                            term.echo('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
                        }, interval);
                        interval += 200;
                    }
                    setTimeout(function(){
                        term.clear();
                        term.echo(greetings());
                    }, 10000);
                    break;

                case 'cv':
                    term.echo("http://stackoverflow.com/cv/max-girkens");
                    break;

                case 'clear':
                    term.clear();
                    term.echo(greetings());
                    break;

                default:
                    if (command.trim() == '') {
                        term.echo();
                    }
                    else {
                        term.echo("\n?syntax error\n");
                    }
                    break;

            }

        },

        {
            checkArity: false,
            processArguments: true,
            prompt: '>',
            clear: false,
            greetings: greetings(),
            tabcompletion: true,
            completion: function (terminal, string, callback) {
                callback(['email', 'github', 'twitter', 'cv', 'clear', 'run']);
            }
        });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38888541-4']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();