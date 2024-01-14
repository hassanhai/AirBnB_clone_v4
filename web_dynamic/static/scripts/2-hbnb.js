{"payload":{"allShortcutsEnabled":false,"fileTree":{"web_dynamic/static/scripts":{"items":[{"name":"1-hbnb.js","path":"web_dynamic/static/scripts/1-hbnb.js","contentType":"file"},{"name":"100-hbnb.js","path":"web_dynamic/static/scripts/100-hbnb.js","contentType":"file"},{"name":"2-hbnb.js","path":"web_dynamic/static/scripts/2-hbnb.js","contentType":"file"},{"name":"3-hbnb.js","path":"web_dynamic/static/scripts/3-hbnb.js","contentType":"file"},{"name":"4-hbnb.js","path":"web_dynamic/static/scripts/4-hbnb.js","contentType":"file"}],"totalCount":5},"web_dynamic/static":{"items":[{"name":"images","path":"web_dynamic/static/images","contentType":"directory"},{"name":"scripts","path":"web_dynamic/static/scripts","contentType":"directory"},{"name":"styles","path":"web_dynamic/static/styles","contentType":"directory"}],"totalCount":3},"web_dynamic":{"items":[{"name":"static","path":"web_dynamic/static","contentType":"directory"},{"name":"templates","path":"web_dynamic/templates","contentType":"directory"},{"name":"0-hbnb.py","path":"web_dynamic/0-hbnb.py","contentType":"file"},{"name":"1-hbnb.py","path":"web_dynamic/1-hbnb.py","contentType":"file"},{"name":"2-hbnb.py","path":"web_dynamic/2-hbnb.py","contentType":"file"},{"name":"3-hbnb.py","path":"web_dynamic/3-hbnb.py","contentType":"file"},{"name":"4-hbnb.py","path":"web_dynamic/4-hbnb.py","contentType":"file"},{"name":"README.md","path":"web_dynamic/README.md","contentType":"file"},{"name":"__init__.py","path":"web_dynamic/__init__.py","contentType":"file"}],"totalCount":9},"":{"items":[{"name":"api","path":"api","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"tests","path":"tests","contentType":"directory"},{"name":"web_dynamic","path":"web_dynamic","contentType":"directory"},{"name":"web_flask","path":"web_flask","contentType":"directory"},{"name":"web_static","path":"web_static","contentType":"directory"},{"name":"0-setup_web_static.sh","path":"0-setup_web_static.sh","contentType":"file"},{"name":"1-pack_web_static.py","path":"1-pack_web_static.py","contentType":"file"},{"name":"2-do_deploy_web_static.py","path":"2-do_deploy_web_static.py","contentType":"file"},{"name":"3-deploy_web_static.py","path":"3-deploy_web_static.py","contentType":"file"},{"name":"AUTHORS","path":"AUTHORS","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"code_review.txt","path":"code_review.txt","contentType":"file"},{"name":"console.py","path":"console.py","contentType":"file"},{"name":"setup_mysql_dev.sql","path":"setup_mysql_dev.sql","contentType":"file"},{"name":"setup_mysql_test.sql","path":"setup_mysql_test.sql","contentType":"file"}],"totalCount":16}},"fileTreeProcessingTime":7.926874000000001,"foldersToFetch":[],"reducedMotionEnabled":null,"repo":{"id":714640895,"defaultBranch":"master","name":"AirBnB_clone_v4","ownerLogin":"LailaTabourit","currentUserCanPush":false,"isFork":true,"isEmpty":false,"createdAt":"2023-11-05T13:27:13.000Z","ownerAvatar":"https://avatars.githubusercontent.com/u/79404170?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"master","listCacheKey":"v0:1699226451.0","canEdit":false,"refType":"branch","currentOid":"d0f761852be2a8b71d7f3d822c51e9e14f56e7e8"},"path":"web_dynamic/static/scripts/2-hbnb.js","currentUser":null,"blob":{"rawLines":["$('document').ready(function () {","  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';","  $.get(url, function (response) {","    if (response.status === 'OK') {","      $('DIV#api_status').addClass('available');","    } else {","      $('DIV#api_status').removeClass('available');","    }","  });","","  let amenities = {};","  $('INPUT[type=\"checkbox\"]').change(function () {","    if ($(this).is(':checked')) {","      amenities[$(this).attr('data-id')] = $(this).attr('data-name');","    } else {","      delete amenities[$(this).attr('data-id')];","    }","    if (Object.values(amenities).length === 0) {","      $('.amenities H4').html('&nbsp;');","    } else {","      $('.amenities H4').text(Object.values(amenities).join(', '));","    }","  });","});"],"stylingDirectives":[[{"start":0,"end":1,"cssClass":"pl-en"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":28,"cssClass":"pl-k"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":23,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":32,"cssClass":"pl-smi"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":75,"cssClass":"pl-s"},{"start":75,"end":76,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-s1"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":21,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-c1"},{"start":24,"end":27,"cssClass":"pl-c1"},{"start":28,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-en"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":45,"cssClass":"pl-k"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-smi"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":6,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-smi"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-en"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":49,"cssClass":"pl-smi"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":67,"cssClass":"pl-s"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-k"},{"start":13,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-smi"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":14,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-c1"},{"start":40,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":23,"cssClass":"pl-s"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":23,"cssClass":"pl-s"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-v"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":59,"cssClass":"pl-en"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":64,"cssClass":"pl-s"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/LailaTabourit/AirBnB_clone_v4/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":null,"repoAlertsPath":"/LailaTabourit/AirBnB_clone_v4/security/dependabot","repoSecurityAndAnalysisPath":"/LailaTabourit/AirBnB_clone_v4/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"2-hbnb.js","displayUrl":"https://github.com/LailaTabourit/AirBnB_clone_v4/blob/master/web_dynamic/static/scripts/2-hbnb.js?raw=true","headerInfo":{"blobSize":"741 Bytes","deleteInfo":{"deleteTooltip":"You must be signed in to make or propose changes"},"editInfo":{"editTooltip":"You must be signed in to make or propose changes"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"bab8f25","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FLailaTabourit%2FAirBnB_clone_v4%2Fblob%2Fmaster%2Fweb_dynamic%2Fstatic%2Fscripts%2F2-hbnb.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"24","truncatedSloc":"23"},"mode":"executable file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":false,"newDiscussionPath":"/LailaTabourit/AirBnB_clone_v4/discussions/new","newIssuePath":"/LailaTabourit/AirBnB_clone_v4/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/LailaTabourit/AirBnB_clone_v4/blob/master/web_dynamic/static/scripts/2-hbnb.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/LailaTabourit/AirBnB_clone_v4/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/LailaTabourit/AirBnB_clone_v4/raw/master/web_dynamic/static/scripts/2-hbnb.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"LailaTabourit","repoName":"AirBnB_clone_v4","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[]}},"copilotInfo":null,"copilotAccessAllowed":false,"csrf_tokens":{"/LailaTabourit/AirBnB_clone_v4/branches":{"post":"yUa7tulKOIeItYeNawEqlPG4vZUsJXSepa9B_kCTKmcDGCwKr3JiJlhyqOwF317K4Hj8fGNSPwIC944ThNeVkQ"},"/repos/preferences":{"post":"Et4YcBqBU1Okt8k8pxqR45ZCXNcUEO-HashPJiBCWONs1738OWQxKAwxz6RR3Dv1yiNw4HdvdysovgeFmmFYBg"}}},"title":"AirBnB_clone_v4/web_dynamic/static/scripts/2-hbnb.js at master · LailaTabourit/AirBnB_clone_v4"}