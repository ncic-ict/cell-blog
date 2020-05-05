/**
 * @Name: index.css
 * @Description: 博客首页js
 * @Author: 李瑞豪
 * @Update: 2020-5-1 20:54
 */

$(function () {
    // back-to-top 功能
    $(this).scrollTop() == 0 ? $('.back-to-top').addClass('d-none') : $('.back-to-top').removeClass('d-none');
    $(window).scroll(function () {
        $(this).scrollTop() == 0 ? $('.back-to-top').addClass('d-none') : $('.back-to-top').removeClass('d-none');
    });
    $('.back-to-top').click(function () {
        $('html,body').animate({scrollTop: '0'}, 'slow')
    });

    $('[data-toggle="tooltip"]').tooltip();
    crashCheat();

    console.log("\n`              @@#``@@@@@@@@@@@@@@@@@@##,`   \n`              @@#`;@@@@@@@@@@@@@@@@@@@':'   \n`              @@#`@@@@@@@@@@@@@@@@@@@#+#;`  \n`              @@#`@@@@@@@@@@@@@@@@@@###@'.  \n`              @@+.@@@@@@@@@@@@@@@@@@@@@##,  \n`              @@#,@@@@@@@@@@@@@@@@@@@@@@#,  \n`              #@#:@@@@@@@@@@@@@@@@@@@@@@@,  \n`              #@#'@@@@@@@@@@@@@@@@@@@@@@@.  \n`              +@#;@@@@@@@@@@@@@@@@@@@@@@#   \n`          `;: ;@#'@@@@@@@@@@@@@@@@@@+'+@'   \n`    `,,;';'+';'@@+:@@@@@@@@@@@@##@#',.:#;   \n,, ``    ``..,:;@@#'@@@@@@@@#####@@@@#:`:.   \n`       `````:++@@@@@@@@@@@@@###@@@@#+,..    \n        ``````.#@@@@@@@@@@@@@@#@@@#++#'``    \n`    ```.,,:,.`:@@@@@@@@@@@@@###@@@##'.`     \n``..`````..,::;+@@@@@@@@@@@@#+`::+##'`.      \n`      ````.```,@@@@@@@@@@@##;``.,';` `      \n``.;@@@@@@@@@@@@@@@@@@@@@@###;``..``````     \n#@@@@@@@@@@@@@@@@@@@@@@@@##@#;``,``,.``      \n@@@@@@@@@@@@@@@@@@@.`````..``.. +` `:`       \n@+''++#####@@#`.@@@``````` ` `,```  ``       \n';;;;'+##+'+.`;+@@@,..```` `` :,.            \n;::,,:;+#++``,,#@@@'..``````` ,`.``          \n;,,,,...'#.,,..#@@@#,,.`````` .````          \n:,,,,....`,::;''+#@#;,..`````````.``         \n:,,,.....'##++''';:+':,.`..,,...`            \n:,,,...#####+'+#@@@'.';+:.  ` ``             \n;,,.`'####'#,`.`+@@@+'``` `.`                \n;,.`#@@@#+:'+++##+@##@,,,,`                  \n',.#@@###'''';:,.```,+#.                     \n+,#@@@####;,,..```````````````         `.:,::\n+@@@@###+;,,..``````````````````          `.,\n#@@@##+',,,........``````````````            \n@@@@#+:,,,,`........``````````               \n@@@#+:,,,,.`````.....``````````           `` \n@@##':,......`````....```  `````          ```\n@@@#':,....,..``````..````    ```         ```\n@@@#',....,,,..```````````     ```         ..\n@@@#,.....,,,,.``  ````````   ``````         \n@@@+....,,,,,..`````````````   ``````````    \n@@@:....,,,,.LiRuihao````````  ```````````` \n#@@,....,,,,.Always Be Yourself !````````````\n,##,,...,::,.````````````..``````   `......``\n,'#,,..,,:::.`````````........``````   `.,,..\n");
    console.log("%c Cell-Blog | QQ:1074627678 %c https://lruihao.cn %c \n\n您好！\n欢迎来到李瑞豪的个人博客，\n如有问题请多多指教。\n", "color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;", "background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;","");
});

function crashCheat() {
    let oldTitle = document.title;
    let titleTime; //標題恢復計時器
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', '/images/icons/crash.png');
            document.title = "網站崩潰了！";
            clearTimeout(titleTime);
        } else {
            document.title = '其實並沒有！';
            $('[rel="icon"]').attr('href', '/favicon.ico');
            titleTime = setTimeout(function () {
                document.title = oldTitle;
            }, 1000);
        }
    });
}