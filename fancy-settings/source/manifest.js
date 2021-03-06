this.manifest = {
  "name": "G+me",
  "icon": "../../icons/icon48.png",
  "settings": [
    /*
     * Pages
     */
    {
      "tab"   : chrome.i18n.getMessage("options_nav_pages_label"),
      "group" : chrome.i18n.getMessage("options_nav_global_label"),
      "name"  : "nav_global_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_global_desc")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_pages_label"),
      "group" : chrome.i18n.getMessage("options_nav_global_label"),
      "name"  : "nav_global_postsDefaultMode",
      "type"  : "radioButtons",
      "label" : chrome.i18n.getMessage("options_nav_global_postsDefaultMode"),
      "options": [
        ["expanded", chrome.i18n.getMessage("options_nav_global_postsDefaultMode_expanded")],
        ["list", chrome.i18n.getMessage("options_nav_global_postsDefaultMode_list")]
      ]
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_pages_label"),
      "group" : chrome.i18n.getMessage("options_nav_global_label"),
      "name"  : "nav_global_commentsDefaultCollapsed",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_global_commentsDefaultCollapsed")
    },

    /*
     * General
     */
    // Collapse summary
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_summary_label"),
      "name"  : "nav_summaryLines",
      "type"  : "popupButton",
      "label" : chrome.i18n.getMessage("options_nav_summaryLines"),
      "options": [
        ["1", "1"],
        ["2", "2"],
        ["3", "3"]
      ]
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_summary_label"),
      "name"  : "nav_summaryIncludeThumbnails",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_summaryIncludeThumbnails")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_summary_label"),
      "name"  : "nav_summaryIncludeTime",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_summaryIncludeTime")
    },
    // Preview
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_preview_label"),
      "name"  : "nav_previewEnableInExpanded",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_previewEnableInExpanded")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_preview_label"),
      "name"  : "nav_previewEnableInList",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_previewEnableInList")
    },
    // Collapse bar
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_postStyle_label"),
      "name"  : "nav_showTopCollapseBarWhen",
      "type"  : "popupButton",
      "label" : chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen"),
      "options": [
        ["always", chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen_always")],
        ["hover", chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen_hover")],
        ["never", chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen_never")]
      ]
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_postStyle_label"),
      "name"  : "nav_showBottomCollapseBarWhen",
      "type"  : "popupButton",
      "label" : chrome.i18n.getMessage("options_nav_showBottomCollapseBarWhen"),
      "options": [
        ["always", chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen_always")],
        ["hover", chrome.i18n.getMessage("options_nav_showBottomCollapseBarWhen_hover")],
        ["never", chrome.i18n.getMessage("options_nav_showTopCollapseBarWhen_never")]
      ]
    },
    // Browser action
    {
      "tab"   : chrome.i18n.getMessage("options_nav_general_label"),
      "group" : chrome.i18n.getMessage("options_nav_browserAction_label"),
      "name"  : "nav_browserActionOpensNewTab",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_browserActionOpensNewTab")
    },

    /*
     * Compatibility
     */
    
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : "",
      "name"  : "nav_compat_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_compat_desc")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : chrome.i18n.getMessage("options_nav_compatSgp_label"),
      "name"  : "nav_compatSgp_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_compatSgp_desc", "http://goo.gl/NFCRE")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : chrome.i18n.getMessage("options_nav_compatSgp_label"),
      "name"  : "nav_compatSgp",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_compatSgp")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : chrome.i18n.getMessage("options_nav_compatSgp_label"),
      "name"  : "nav_compatSgpComments",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_compatSgpComments")
    },
/*
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : chrome.i18n.getMessage("options_nav_compatSgp_label"),
      "name"  : "nav_compatSgpCache",
      "type"  : "checkbox",
      "label" : chrome.i18n.getMessage("options_nav_compatSgpCache")
    },
*/
/*
    {
      "tab"   : chrome.i18n.getMessage("options_nav_compat_label"),
      "group" : chrome.i18n.getMessage("options_nav_compatSgp_label"),
      "name"  : "nav_compatSgpUsage_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_compatSgpUsage_desc")
    },
*/
    /*
     * Questions
     */
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_faq_label"),
      "name"  : "nav_faq_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_faq_desc")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_problems_label"),
      "name"  : "nav_problemsTroubleshoot_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_problemsTroubleshoot")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_problems_label"),
      "name"  : "nav_problemsFeedback_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_problemsFeedback")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_reset_label"),
      "name"  : "nav_resetSettings",
      "type"  : "button",
      "label" : chrome.i18n.getMessage("options_nav_resetSettings_label"),
      "text"  : chrome.i18n.getMessage("options_nav_resetSettings")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_reset_label"),
      "name"  : "nav_resetAll",
      "type"  : "button",
      "label" : chrome.i18n.getMessage("options_nav_resetAll_label"),
      "text"  : chrome.i18n.getMessage("options_nav_resetAll")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_questions_label"),
      "group" : chrome.i18n.getMessage("options_nav_reset_label"),
      "name"  : "nav_reset_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_reset_desc")
    },

    /*
     * Information
     */
    {
      "tab"   : chrome.i18n.getMessage("options_nav_info_label"),
      "group" : chrome.i18n.getMessage("options_nav_links_label"),
      "name"  : "nav_links_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_links_desc")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_info_label"),
      "group" : chrome.i18n.getMessage("options_nav_translators_label"),
      "name"  : "nav_translators_desc",
      "type"  : "description",
      "text"  : chrome.i18n.getMessage("options_nav_translators_desc")
    },
    {
      "tab"   : chrome.i18n.getMessage("options_nav_info_label"),
      "group" : chrome.i18n.getMessage("options_nav_translators_label"),
      "name"  : "nav_translatorsList",
      "type"  : "description",
      "text"  : "\
<table>\
<tr><td style=\"width: 35%\">中文 (繁體) - Chinese (Traditional)</td>\
<td><a href=\"https://plus.google.com/111120240496403650720\" target=_blank>陳彥廷</a></td></tr>\
<tr><td>日本語 - Japanese</td>\
<td><a href=\"https://plus.google.com/104214201726373605313\" target=_blank>Toshitsugu Miyoshi</a></td></tr>\
<tr><td>Bahasa Indonesia</td>\
<td><a href=\"https://plus.google.com/104214201726373605313\" target=_blank>Teddy Yuliustanto</a></td></tr>\
<tr><td>Deutsch - German</td>\
<td><a href=\"https://plus.google.com/111611377225917333080\" target=_blank>Nick Rock</a></td></tr>\
<tr><td>Español (Latinoamérica) - Spanish</td>\
<td><a href=\"https://plus.google.com/103470335401117697610\" target=_blank>Andrés D Bevilacqua (aka PaiSand)</a></td></tr>\
<tr><td>Français - French</td>\
<td><a href=\"https://plus.google.com/107140639929094144668\" target=_blank>Olivier de Broqueville</a>, <a href=\"https://plus.google.com/100633553439138235276\" target=_blank>Eddy Deligne</a></td></tr>\
<tr><td>Italiano</td>\
<td><a href=\"https://plus.google.com/108442963639756243080\" target=_blank>Marco Mililotti</a></td></tr>\
<tr><td>Magyar - Hungarian</td>\
<td><a href=\"https://plus.google.com/108092012091902688220\" target=_blank>Zsolt Dollenstein</a></td></tr>\
<tr><td>Nederlands - Dutch</td>\
<td><a href=\"https://plus.google.com/105310358762146417461\" target=_blank>Peter Klein</a></td></tr>\
<tr><td>Português (Brasil)</td>\
<td><a href=\"https://plus.google.com/117755969537089366397\" target=_blank>Cesar JB</a></td></tr>\
<tr><td>Português (Portugal)</td>\
<td><a href=\"https://plus.google.com/102936041566944563648\" target=_blank>Pedro Ricardo</a></td></tr>\
<tr><td>Svenska (Swedish)</td>\
<td><a href=\"https://plus.google.com/114288788001946097645\" target=_blank>Joakim Saettem</a></td></tr>\
</table>\
        "
    }
  ],
  "alignment": [
    [
      "nav_resetSettings",
      "nav_resetAll"
    ]
  ],
};
