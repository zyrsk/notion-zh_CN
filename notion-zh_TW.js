// ==UserScript==
// @name         Notion-zh_TW notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      2.4.14
// @description  notion的100%汉化脚本，基于官方中文+机器翻译韩文，支持app版本以及网页油猴，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @match        *://*.notion.site/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";
  var lang = "zh-TW";
  var isSafari =
    navigator.userAgent.includes("Safari/") &&
    !navigator.userAgent.includes("Chrome/");
  var isElectron = "undefined" != typeof global || window.__isElectron;

  const scriptList = document.querySelectorAll("script[defer]");
  const scriptSrcList = Array.from(scriptList).map((v) => v.src);
  if (isSafari) {
    scriptList.forEach((v) => v.remove());
    document.getElementById("notion-app").remove();
  }

  const script = document.createElement("script");
  script.id = "messages";
  script.type = "application/json";
  script.setAttribute("data-locale", lang);
  script.text = JSON.stringify({
    "AIWaitlist.demoButton.label.web": "觀看 1 分鐘展示",
    "AIWaitlist.invite.copiedText.label.web": "已複製",
    "AIWaitlist.invite.copyButton.label.web": "複製",
    "AIWaitlist.invite.subtitle.label.web":
      "你已排入 Beta 版等候清單！邀請朋友以便更快輪到你。",
    "AIWaitlist.invite.subtitle.label2.web": "邀請朋友以便更快輪到你。",
    "AIWaitlist.invite.title.label.web": "你排在第 {positionInString} 個",
    "AIWaitlist.join.subtitle.label.web":
      "利用 Notion 任一頁面中的 AI 功能。讓工作加倍聰明、思考加倍清晰，並且完成加倍的作業。就像魔術一樣。",
    "AIWaitlist.join.subtitle.label2.web":
      "讓寫作加倍快速、思考加倍廣泛，並且完成加倍的作業。",
    "AIWaitlist.join.title.label.web": "認識你全新的思考夥伴。",
    "AIWaitlist.joinButton.label.web": "加入等候清單",
    "AIWaitlist.joinLegalText.label.web": "加入等候清單不保證能存取該功能。",
    "AIWaitlist.joinedLegalText.label.web":
      "如果你被授予存取權限，則工作區擁有者必須接受其他法律條款才能開啟該功能。",
    "AIWaitlist.toast.notification.label.web":
      "我們傳送的電子郵件中包含可讓你查看順位的連結： <referrallink>referralUrl</referrallink>",
    "Activity.author.unknown": "未知",
    "AddOnDiscountPopup.description":
      "工作更快速、寫作更優質、思考更廣泛。立即加入 Notion AI，以便存取這項專屬你工作區的特別優惠。",
    "AddOnDiscountPopup.header": "獲得 Notion AI 的 {percentage} 折扣",
    "AddOnDiscountPopup.purchase.button": "購買 Notion AI",
    "AiIntroModal.doneMessage": "知道了",
    "AiIntroModal.enable.caption":
      "開啟即表示你同意<inlinelink>這些條款</inlinelink>。",
    "AiIntroModal.enable.caption.waitlist":
      "只有離開<inlinelink>等候清單</inlinelink>的使用者才可以存取。",
    "AiIntroModal.enable.title": "開啟 {name} 的 AI。",
    "AiIntroModal.enable.title.anonymous": "開啟此工作區的 AI。",
    "AiIntroModal.intro.continue.label": "繼續",
    "AiIntroModal.intro.demoButton": "實際查看",
    "AiIntroModal.intro.done.label": "完成",
    "AiIntroModal.intro.feature1.description.desktop":
      "只要在新的一行或頁面上按下 {spaceKey} 即可。讓 AI 處理你的第一份草稿。",
    "AiIntroModal.intro.feature1.description.mobile":
      "在編輯頁面時輕觸 {sparklesIcon} 按鈕。讓 AI 處理你的第一份草稿。",
    "AiIntroModal.intro.feature1.title": "詢問 AI 任何事情",
    "AiIntroModal.intro.feature2.description":
      "詢問 AI 以修正拼寫、文法、變更語氣、翻譯等更多動作。",
    "AiIntroModal.intro.feature2.title": "改善你的寫作內容",
    "AiIntroModal.intro.feature3.description":
      "在 30 秒內尋找重點和後續步驟，而不是 30 分鐘。",
    "AiIntroModal.intro.feature3.title": "產生摘要和待辦事項",
    "AiIntroModal.intro.learnMoreLink": "進一步了解 Notion AI",
    "AiIntroModal.intro.skip.label": "略過",
    "AiIntroModal.intro.spaceKey": "‘space’",
    "AiIntroModal.intro.termsLinks":
      "Notion 已更新<termsLink>其條款</termsLink>。使用 AI 時適用<aiTermsLink>附加條款</aiTermsLink>。<faqLink>請參閱常見問題</faqLink>",
    "AiIntroModal.intro.title": "<purpleText>Notion AI</purpleText> 簡介",
    "AiIntroModal.intro.tryAiNow.label": "立即試用",
    "AiIntroModal.learnMoreUrl": "了解更多：{url}",
    "AiIntroModal.mobileDoneMessage": "知道了",
    "AiIntroModal.nextMessage": "下一個",
    "AiIntroModal.skipMessage": "略過導覽",
    "AiIntroModal.subtitle": "你已受邀試用",
    "AiIntroModal.tab1.subtitle":
      "再也不用盯著空白頁面發呆。產生任何種類的內容，或是你要求的任何內容。",
    "AiIntroModal.tab1.title": "撰寫更快速。讓 AI 處理你的第一份草稿。",
    "AiIntroModal.tab2.subtitle":
      "選擇文字或區塊，然後要求 AI 以你喜歡的方式編輯內容。",
    "AiIntroModal.tab2.title": "你身邊的創意合作夥伴和編輯。",
    "AiIntroModal.tab3.subtitle":
      "要求 AI 根據你的頁面內容插入摘要、尋找待辦事項及更多內容。",
    "AiIntroModal.tab3.title": "AI 摘要、待辦事項、從你的頁面內容進行更新。",
    "AiIntroModal.tips.feature1.description":
      "你的內容和 AI 對話未用於訓練 AI。",
    "AiIntroModal.tips.feature1.title": "專為你的隱私權而設計",
    "AiIntroModal.tips.feature2.description":
      "檢閱及查核所有 AI 回應。如未達到標準，請輕觸 {thumbsdown} 按鈕讓我們知道。",
    "AiIntroModal.tips.feature2.title": "AI 可能會提供不準確的回應",
    "AiIntroModal.tips.feature3.description":
      "你可以試用 20 種 AI 回應。無限 AI 回應的附加元件可在稍後加入到你的方案中。",
    "AiIntroModal.tips.feature3.title": "免費試用 Notion AI",
    "AiIntroModal.tips.title": "提示讓你快速入門",
    "AiIntroModal.title": "撰寫和編輯專用的 Notion AI",
    "AiIntroModal.title.mobile": "Notion AI",
    "AiOnboardingTooltips.askAiAnything.content":
      "直接告訴 AI 要做的事情：越詳細越好。你也可以從功能表中的範例開始。",
    "AiOnboardingTooltips.askAiAnything.header": "詢問 AI 任何事情",
    "AiOnboardingTooltips.refineAiResponse.content":
      "狀況如何？向 AI 進一步說明以改善撰寫內容，或是在完成時點擊「已完成」。",
    "AiOnboardingTooltips.refineAiResponse.header": "告訴 AI 後續動作",
    "AiOnboardingTooltips.spaceForAi.content":
      "在新的一行或頁面上，按下鍵盤上的「空格鍵」開啟 AI 以產生或編輯頁面。立即試用！",
    "AiOnboardingTooltips.spaceForAi.header": "按下「空白鍵」開啟 AI",
    "AiWaitlistSpaceEnrolledEmail.closingText": "謝謝你。{br}Notion 團隊　敬上",
    "AlphaBadgeComponent.label": "Alpha",
    "AlternativeCommandPalette.buttonLabel.edit": "編輯",
    "AlternativeCommandPalette.buttonLabel.generate": "生成",
    "AlternativeCommandPalette.cancelButtonLabel": "取消",
    "AlternativeCommandPalette.cancelKeyboardShortcut": "Esc",
    "AlternativeCommandPalette.followUp.inputPlaceholder":
      "告訴 AI 下一步該做什麼……",
    "AlternativeCompletionsPopupContent.cancel.label": "取消",
    "AlternativeCompletionsPopupContent.discard.label": "放棄",
    "AlternativeCompletionsPopupContent.discard.shortcut": "esc",
    "AlternativeCompletionsPopupContent.startOver.label": "重來",
    "AlternativeCompletionsPopupContent.startOver.shortcut": "r",
    "AlternativeCompletionsPopupContent.stop.label": "停止",
    "AlternativeCompletionsPopupContent.stop.shortcut": "esc",
    "AlternativeCompletionsPopupContent.tryAgain.label": "再試一次",
    "AlternativeCompletionsPopupContent.writing": "AI 正在撰寫…",
    "AsanaImportLogs.brokenLinksLogHeader": "中斷的連結",
    "AsanaImportLogs.debuggingInformationHeader":
      "除錯資訊（針對 Notion 使用情況）",
    "AsanaImportLogs.failedProjectsLogHeader": "匯入中失敗專案的列表",
    "AsanaImportLogs.failedTasksLogHeader": "匯入中失敗任務的列表",
    "AsanaImportLogs.importSummary":
      "{successfulProjectCount}/{totalNumberOfProjects} 項專案和 {successfulTaskCount}/{totalNumerOfTasks} 項任務已成功自你的 Asana 帳戶匯入。{failedProjectCount} 項專案和 {failedTaskCount} 項任務匯入失敗（你可以在下方找到詳細資料）。",
    "AsanaImportLogs.warningsLogHeader": "⚠️警告",
    "AuditLogCSV.exportConfirmationDialog.label": "匯出",
    "AuditLogSettings.copyAuditLogEvent": "拷貝行",
    "AutomationActionSelectButton.actionSection.addAction": "添加任务",
    "AutomationActionSelectMenu.actionTitle.slackNotification":
      "发送Slack通知的位置",
    "AutomationCollectionSelectMenu.collection.caption":
      "{collectionName} 中的任何頁面",
    "AutomationCollectionSelectMenu.collectionView.captionDifferentParent":
      "<emphasis>在 {parentBlockName} 中配置的視圖</emphasis>",
    "AutomationCollectionSelectMenu.collectionView.captionWithFilters":
      "{ruleCount, plural, other {{ruleCount} 個篩選條件}}",
    "AutomationCollectionSelectMenu.collectionView.captionWithNoFilters":
      "視圖中的任何頁面",
    "AutomationCollectionSelectMenu.collectionView.deletedView":
      "<emphasis>找不到視圖。</emphasis>",
    "AutomationCollectionSelectMenu.collectionView.unsupportedView": "不受支援",
    "AutomationCollectionSelectMenu.tooltip.incompatibleFiltersWarning.default":
      "某些屬性不受支援",
    "AutomationCollectionSelectMenu.tooltip.incompatibleFiltersWarning.specific":
      "{propertyTypeName} 屬性不受支援",
    "BlockPropertyValueOverlay.bulkAiAutofillButton.countAndDescription":
      "填寫 {numPages} 個空白頁面",
    "BlockPropertyValueOverlay.bulkAiAutofillButton.title":
      "透過 AI 填寫「{propertyName}」",
    "CollectionFilterMenuFilterOperatorValue.verificationFilterSelect.commaSeparator":
      "，",
    "CollectionFilterMenuFilterOperatorValue.verificationFilterSelect.placeholder":
      "選擇一項",
    "CollectionSettingsCreateConnectedRelationPagePicker.fetchingData":
      "取得資料中...",
    "CollectionSettingsCreateConnectedRelationPagePicker.notMatched.help":
      "URL 不符合 {integration}。嘗試不同的 URL",
    "CollectionSettingsDefaultPersonPicker.default.title": "預設",
    "CollectionSettingsDefaultPersonPicker.options.creator": "建立者",
    "CollectionSettingsDefaultPersonPicker.options.noDefault": "沒有預設",
    "CollectionSettingsSyncedContentShare.continueButton": "繼續",
    "CollectionSettingsSyncedContentShare.header": "分享同步內容給",
    "CollectionSettingsSyncedContentShare.option.restrict.caption":
      "你必須與其他使用分享功能表的人員分享",
    "CollectionSettingsSyncedContentShare.option.restrict.title": "只有你",
    "CollectionSettingsSyncedContentShare.option.share.caption.accessToIntegration":
      "將取得自 {integrationName} 同步之內容的存取權限",
    "CollectionSettingsSyncedContentShare.option.share.caption.sharedWithPublic":
      "以及具有連結的內容",
    "CollectionSettingsSyncedContentShare.option.share.caption.usersWithGuests":
      "{numberOfUsers} 位人員（包括你 {numberOfGuests, plural, one {和 {numberOfGuests} 位來賓} other {及 {numberOfGuests} 位來賓}}）",
    "CollectionSettingsSyncedContentShare.option.share.caption.usersWithoutGuests":
      "{numberOfUsers} 位人員（包括你）",
    "CollectionSettingsSyncedContentShare.option.share.title":
      "此頁面上的任何人",
    "CollectionSettingsViewMain.editSettings": "編輯 {databaseName} 設定",
    "CollectionViewActionMenu.editSettings": "編輯 {databaseName} 設定",
    "CollectionsBulkActionsToolbar.deleteButton.tooltip": "刪除",
    "ConnectedRelationNavigateToPicker.navigate":
      "{databaseNameWithIcon} 中的<medium>全新頁面</medium>",
    "ContextualInvite.addToWorkspace.button": "加入到工作區",
    "ContextualInvite.permissions_invites.button.cancel": "取消",
    "ContextualInvite.permissions_invites.guest.tooltip":
      "{email} 將以來賓身分受到邀請",
    "ContextualInvite.permissions_invites.messageLengthWarning":
      "{characters} / {maxCharacters} 個字元",
    "ContextualInvite.permissions_invites.removeLinkWarning":
      "訊息中的連結將會省略",
    "ContextualInvite.request_invite_workspace.subtitle2":
      "傳送請求給管理員以工作區成員身分進行邀請。",
    "ContextualInvite.request_invite_workspace.title": "請求邀請加入工作區",
    "ContextualInvite.sendRequest.button": "傳送請求",
    "ContextualInvite.send_guest_invite.button": "邀請",
    "ContextualInvite.send_guest_invite.subtitle":
      "{firstEmail}，其他 {numOfEmails} 封",
    "ContextualInvite.send_guest_invite.title": "邀請至頁面或工作區？",
    "ContextualInvite.send_guest_invite.what_to_share.title": "分享內容",
    "ContextualInvite.send_guest_page_invite.button": "已完成",
    "ContextualInvite.share_this_page.subtitle2":
      "他們將僅受邀至此頁面，且系統不會向其收取費用。",
    "ContextualInvite.share_this_page.title": "僅邀請至頁面",
    "ContextualInvite.share_this_workspace.subtitle2":
      "他們將受邀至 {workspaceName}，且系統會向其收取完整成員身分的費用。",
    "ContextualInvite.share_this_workspace.title": "邀請至工作區",
    "ContextualInviteEmail.pageInviteCTA.title": "按一下這裡查看",
    "ContextualInviteEmail.pageInviteMessage": "{name} 邀請你加入 {pageName}",
    "ContextualInviteEmail.workspaceInviteMessage":
      "{name} 邀請你加入 {workspaceName}",
    "ContextualInviteEmail.workspaceInviteMessageFromBot":
      "你已受邀加入 {workspaceName}",
    "ContextualInviteEmail.workspacePreview.numberOfMembers":
      "{numberOfMembers} 位成員",
    "ContexualInvites.inviteUserModal.searchInput.placeholder":
      "加入電子郵件、人員、整合...",
    "ContexualInvites.inviteUserModal.searchInput.placeholderWithTeams":
      "新增電子郵件、人員、團隊空間...",
    "ContexualInvites.inviteUserModal.searchInput.placeholderWithoutBots":
      "新增電子郵件或人員",
    "CreateTeamspaceMenu.closedTeamspace.caption":
      "任何人都可以查看此團隊空間，但無法加入",
    "CreateTeamspaceMenu.defaultTeamspace.caption":
      "{spaceName} 的所有人都必須是成員",
    "CreateTeamspaceMenu.openTeamspace.caption":
      "任何人都可以查看並加入此團隊空間",
    "CreateTeamspaceMenu.privateTeamspace.caption":
      "只有成員可以看到此團隊空間存在",
    "Edit.renderCollectionPropertyChangedDiff.addedProperty": "已加入",
    "Edit.renderCollectionPropertyChangedDiff.editedProperty": "已編輯",
    "Edit.renderCollectionPropertyChangedDiff.removedProperty": "已移除",
    "FeatureIntroPopup.backButton": "返回",
    "FeatureIntroPopup.closeButton.ariaLabel": "關閉",
    "FeatureIntroPopup.dismissButton.text": "關閉",
    "FeatureIntroPopup.learnMore.text": "了解更多",
    "FeatureIntroPopup.nextButton": "下一步",
    "FeatureIntroPopup.tryItOut.button": "歡迎試用",
    "FormulaAutocompleteMenu.noResults.message": "沒有結果",
    "GuestMembershipRequestModal.cancel.button": "取消",
    "GuestMembershipRequestModal.message.placeholder": "理由（選填）",
    "GuestMembershipRequestModal.sendRequest.button": "送出請求",
    "GuestMembershipRequestModal.title": "請求成為工作區成員。",
    "ItemMultiSelectToolbar.deleteButton.tooltip": "刪除",
    "LearnMoreLink.learnMore": "了解更多",
    "LuxonDatePropertyMenu.clearButton.label": "清除",
    "LuxonDatePropertyMenu.dateFormatDropdownButton.label": "日期格式",
    "LuxonDatePropertyMenu.formatMenu.emptyButton.label": "空白",
    "LuxonDatePropertyMenu.invalidDateError.tooltip": "無效日期",
    "LuxonDatePropertyMenu.invalidDateOrTimeRangeError.tooltip": "無效範圍",
    "LuxonDatePropertyMenu.invalidTimeError.tooltip": "無效時間",
    "LuxonDatePropertyMenu.learnMore.helpButton.label": "了解提醒",
    "LuxonDatePropertyMenu.menuItem.endDate.label": "結束日期",
    "LuxonDatePropertyMenu.menuItem.format.label": "日期格式",
    "LuxonDatePropertyMenu.menuItem.formatAndTimezone.label": "日期格式和時區",
    "LuxonDatePropertyMenu.menuItem.includeTime.label": "包含時間",
    "LuxonDatePropertyMenu.menuItem.remind.label": "提醒",
    "LuxonDatePropertyMenu.menuItem.select.title": "選取時區",
    "LuxonDatePropertyMenu.menuItem.time.label": "時區",
    "LuxonDatePropertyMenu.menuItem.timeFormat.label": "時間格式",
    "LuxonDatePropertyMenu.mobileDate.title": "日期",
    "LuxonDatePropertyMenu.mobileDateFormatModal.title": "日期格式",
    "LuxonDatePropertyMenu.mobileDoneButton.label": "完成",
    "LuxonDatePropertyMenu.mobileDoneReminderButton.label": "完成",
    "LuxonDatePropertyMenu.mobileRemindModal.title": "提醒",
    "LuxonDatePropertyMenu.mobileTimezoneMenu.title": "時區",
    "LuxonDatePropertyMenu.timeFormatMenu.emptyButton.label": "空白",
    "LuxonDatePropertyMenu.timeFormatMenu.title": "時間格式",
    "LuxonDatePropertyMenu.timeSearch.placeholder": "搜尋時區…",
    "LuxonDatePropertyMenu.timezoneMenu.noResults": "沒有結果",
    "LuxonDatePropertyMenu.timezoneMenu.select.placeholder": "選擇時區",
    "ManageTeamsSecurityOverridesFilter.showAllOption": "全部顯示",
    "ManageTeamsSecurityOverridesFilter.showAllPlaceholder": "安全性",
    "ManageTeamsSecurityOverridesFilter.showTeamsWithSecurityOverrides":
      "有覆寫",
    "NotificationRulesViewMain.slackChannel.notificationsPaused": "已暫停 •",
    "OnboardingPersonaSurvey.backButton.label": "返回",
    "OnboardingPersonaSurveyStage.continueButton.label": "繼續",
    "OnboardingPersonaSurveyStage.functionUndefinedError.message":
      "請選擇你工作中所在的團隊。",
    "OnboardingPersonaSurveyStage.role.label": "你的角色是什麼？",
    "OnboardingPersonaSurveyStage.role.placeholder": "選擇角色...",
    "OnboardingPersonaSurveyStage.role.popuplabel": "選擇角色...",
    "OnboardingPersonaSurveyStage.roleUndefinedError.message":
      "請選擇你的角色。",
    "OnboardingPersonaSurveyStage.step.subtitle":
      "我們會根據你的答案個人化你的團隊空間",
    "OnboardingPersonaSurveyStage.step.title":
      "向我們多介紹一下你在 {companyName} 的角色",
    "OnboardingPersonaSurveyStage.step.titleSchool": "向我們多介紹一下你自己",
    "OnboardingPersonaSurveyStage.takeMeToNotionButton.label": "帶我到 Notion",
    "OnboardingPersonaSurveyStage.useCases.label":
      "你打算將 Notion 用於什麼內容？",
    "OnboardingPersonaSurveyStage.useCasesUndefinedError.message":
      "請選擇你規劃使用 Notion 的用途。",
    "OnboardingPersonaSurveyStageSchool.function.label":
      "哪一個最能說明你的情況？",
    "OnboardingPersonaSurveyStageSchool.function.popuplabel": "選擇...",
    "OnboardingPersonaSurveyStageSchool.functionUndefinedError.message":
      "請選擇一個選項。",
    "OnboardingPersonaSurveyStageWork.function.label": "你的團隊是什麼？",
    "OnboardingPersonaSurveyStageWork.function.placeholder": "選擇團隊...",
    "OnboardingPersonaSurveyStageWork.function.popuplabel": "選擇團隊...",
    "OnboardingSurvery.useCase.question.docs": "與其他人在文件中協作",
    "OnboardingSurvery.useCase.question.goals": "追蹤公司目標和 OKR",
    "OnboardingSurvery.useCase.question.other": "其他",
    "OnboardingSurvery.useCase.question.project": "管理專案",
    "OnboardingSurvery.useCase.question.wikis": "建立知識庫",
    "OnboardingSurvery.usecase.question.docs": "文件編輯與共享",
    "OnboardingSurvey.companySize.question.1000_5000": "1,000-5,000 人",
    "OnboardingSurvey.companySize.question.100_299": "100-299 人",
    "OnboardingSurvey.companySize.question.1_49": "1-49 人",
    "OnboardingSurvey.companySize.question.300_999": "300-999 人",
    "OnboardingSurvey.companySize.question.5000+": "5,000 人以上",
    "OnboardingSurvey.companySize.question.50_99": "50-99 人",
    "OnboardingSurvey.useCase.question.ai": "透過 AI 撰寫",
    "OnboardingSurvey.useCase.question.notes": "撰寫筆記",
    "OnboardingSurvey.usecase.question.ai": "透過 AI 撰寫",
    "OnboardingSurvey.usecase.question.notes": "撰寫筆記",
    "PermissionsInviteSearchRequest.userTooltip.admin":
      "按一下即可邀請 {userNameAndEmail}",
    "PermissionsInviteSearchRequest.userTooltip.invited_page":
      "{userNameAndEmail} 已受邀加入此頁面",
    "PermissionsInviteSearchRequest.userTooltip.invited_space":
      "{userNameAndEmail} 已受邀加入此工作區",
    "PermissionsInviteSearchRequest.userTooltip.invited_team":
      "{userNameAndEmail} 已受邀加入此團隊",
    "PersonaCollectionModal.initial.1000PlusLabel": "超過 1,001 人",
    "PersonaCollectionModal.initial.101_1000Label": "101 到 1,000 人",
    "PersonaCollectionModal.initial.1_100Label": "1 到 100 人",
    "PersonaCollectionModal.initial.caption":
      "我們想了解更多關於你的資訊，這樣我們才能透過產品為你提供更好的服務",
    "PersonaCollectionModal.initial.companySizeLabel": "公司規模",
    "PersonaCollectionModal.initial.header": "向我們多介紹一下你自己",
    "PersonaCollectionModal.initial.questionLabel":
      "你打算將 Notion 用於什麼內容？",
    "PersonaCollectionModal.initial.roleLabel": "你的角色是什麼？",
    "PersonaCollectionModal.initial.sendLabel": "提交",
    "PersonaCollectionModal.initial.workLabel": "你從事什麼類型的工作？",
    "PersonaCollectionModal.prompt.caption":
      "我們想更多地了解你，這樣我們才能透過產品為你提供更好的服務",
    "PersonaCollectionModal.prompt.header": "向我們多介紹一下你自己",
    "PersonaCollectionModal.prompt.skipLabel": "略過",
    "PersonaCollectionModal.prompt.survey": "進行 20 秒的問卷調查",
    "PersonaCollectionModal.selectQuestion.companySize.placeholder":
      "選擇數字…",
    "PersonaCollectionModal.selectQuestion.label": "選擇回應",
    "PersonaCollectionModal.thanks.caption":
      "謝謝你！請在<textlink>模版庫</textlink>中找到使用 Notion 的新方法",
    "PersonaCollectionModalQuestionSelect.question.product": "產品管理",
    "PersonaCollectionModalQuestionSelect.question.roleLabel": "角色",
    "PersonaCollectionModalQuestionSelect.question.useLabel": "使用",
    "PersonaCollectionModalQuestionSelect.question.workLabel": "工作",
    "PersonaCollectionModalQuestionSelect.roleQuestion.business_owner":
      "公司負責人",
    "PersonaCollectionModalQuestionSelect.roleQuestion.dept_lead": "部門主管",
    "PersonaCollectionModalQuestionSelect.roleQuestion.director": "導演",
    "PersonaCollectionModalQuestionSelect.roleQuestion.exec":
      "管理階層（高層/副總裁）",
    "PersonaCollectionModalQuestionSelect.roleQuestion.freelancer":
      "自由工作者",
    "PersonaCollectionModalQuestionSelect.roleQuestion.ic": "個人貢獻者",
    "PersonaCollectionModalQuestionSelect.roleQuestion.member": "團隊成員",
    "PersonaCollectionModalQuestionSelect.roleQuestion.other": "其他",
    "PersonaCollectionModalQuestionSelect.roleQuestion.personal":
      "只為我個人使用 Notion",
    "PersonaCollectionModalQuestionSelect.roleQuestion.solo":
      "個人企業家/自由工作者",
    "PersonaCollectionModalQuestionSelect.roleQuestion.teamManager": "經理",
    "PersonaCollectionModalQuestionSelect.roleQuestion.team_manager":
      "團隊經理",
    "PersonaCollectionModalQuestionSelect.schoolQuestion.educator":
      "教育工作者",
    "PersonaCollectionModalQuestionSelect.schoolQuestion.other": "其他",
    "PersonaCollectionModalQuestionSelect.schoolQuestion.student": "學生",
    "PersonaCollectionModalQuestionSelect.useQuestion.docs": "編輯與共用文件",
    "PersonaCollectionModalQuestionSelect.useQuestion.goals":
      "追蹤公司目標和 OKR",
    "PersonaCollectionModalQuestionSelect.useQuestion.notes": "撰寫筆記",
    "PersonaCollectionModalQuestionSelect.useQuestion.other": "其他",
    "PersonaCollectionModalQuestionSelect.useQuestion.project": "管理專案",
    "PersonaCollectionModalQuestionSelect.useQuestion.question.ai":
      "透過 AI 撰寫",
    "PersonaCollectionModalQuestionSelect.useQuestion.wikis": "建立知識庫",
    "PersonaCollectionModalQuestionSelect.workQuestion.creative": "創意工作",
    "PersonaCollectionModalQuestionSelect.workQuestion.educator": "教育家",
    "PersonaCollectionModalQuestionSelect.workQuestion.eng": "工程",
    "PersonaCollectionModalQuestionSelect.workQuestion.finance": "金融",
    "PersonaCollectionModalQuestionSelect.workQuestion.founderCeo":
      "創辦人/執行長",
    "PersonaCollectionModalQuestionSelect.workQuestion.hr": "人力資源",
    "PersonaCollectionModalQuestionSelect.workQuestion.internalCommunication":
      "內部通訊",
    "PersonaCollectionModalQuestionSelect.workQuestion.itAdmin": "IT 管理員",
    "PersonaCollectionModalQuestionSelect.workQuestion.knowledgeManagement":
      "知識管理",
    "PersonaCollectionModalQuestionSelect.workQuestion.marketing": "行銷",
    "PersonaCollectionModalQuestionSelect.workQuestion.operations": "營運",
    "PersonaCollectionModalQuestionSelect.workQuestion.other": "其他",
    "PersonaCollectionModalQuestionSelect.workQuestion.productDesign":
      "產品設計",
    "PersonaCollectionModalQuestionSelect.workQuestion.projectProgramMgmt":
      "專案/計劃管理",
    "PersonaCollectionModalQuestionSelect.workQuestion.sales": "銷售人員",
    "PersonaCollectionModalQuestionSelect.workQuestion.student": "學生",
    "PersonaCollectionModalQuestionSelect.workQuestion.support": "客戶服務",
    "ReactionBar.emojiModalMenu.title": "反應",
    "ReactionBar.hoverTooltip.text":
      "{numberOfNames, plural, one {{nameOrNames} <medium>對</medium> {icon} 做出了反應} other {{nameOrNames} <medium>對</medium> {icon} 做出了反應}}",
    "RelationPropertyPageSection.button.addPage": "{propertyName} 的新頁面",
    "RelationPropertyPageSection.button.replacePage":
      "替換 {propertyName} 的連結頁面",
    "RelationPropertyPageSection.show.manyMinimalRelations":
      "{numberOfRelations} {propertyName}",
    "RelationPropertyPageSection.show.oneMinimalRelation":
      "1 個 {propertyName}",
    "RelationPropertyPageSection.show.zeroMinimalRelations":
      "新增 {propertyName}",
    "RequestMembersModal.caption": "管理員會核准或拒絕你的要求。",
    "RequestMembersModal.reason.placeholder": "加入理由（選填）",
    "SearchBadResultsForm.additionalInformation.placeholder":
      "任何其他的評論或內容（例如...）",
    "SearchBadResultsForm.cancelButton.label": "取消",
    "SearchBadResultsForm.reportButton.label": "提交",
    "SearchBadResultsForm.title": "檢舉不良搜尋",
    "SearchBadResultsForm.url.placeholder": "連結至你想要的頁面",
    "SearchResultsFooter.helpText.resultCount":
      "{resultCount, plural, other {<resultwrapper>{resultCount}</resultwrapper> 個結果}}",
    "SearchResultsFooter.helpText.resultCountApproximate":
      "{resultCount, plural, other {<resultwrapper>{resultCount}+</resultwrapper> 個結果}}",
    "SelectedItemCountWidget.numItemsSelected": "已選擇 {itemsSelectedCount}",
    "SimpleTableActionBar.action.rowHeader.title": "表頭欄",
    "SinglePlayerShareWorkspaceModal.cancel.button": "取消",
    "SinglePlayerShareWorkspaceModal.sendInvites.button": "傳送邀請",
    "SinglePlayerShareWorkspaceModal.subtitle1":
      "為其命名並提供圖示以便工作區的人員搜尋。",
    "SinglePlayerShareWorkspaceModal.subtitle2":
      "你的其他頁面仍對你保留私人狀態。",
    "SinglePlayerShareWorkspaceModal.title": "加入新的團隊空間",
    "SlackNotificationsPersonalSettingsAccountPicker.accountDropdown.selectPlaceholder":
      "關閉",
    "SpaceSubscriptionBilling.subscriptionSettingsSection.removeFromPlan.label":
      "自方案移除",
    "SpaceSubscriptionBilling.subscriptionSettingsSection.resubscribe.label":
      "重新訂閱",
    "SpaceSubscriptionPlans.activeMembers.title":
      "{activeMemberCount, plural, other {{activeMemberCount} 位活躍成員}}",
    "SpaceSubscriptionPlans.addToPlan.label": "加入到方案",
    "SpaceSubscriptionPlans.addedToPlan.label": "已加入到方案",
    "SpaceSubscriptionPlans.aiAddedToPlan.description":
      "允許你工作區的成員使用 Notion AI",
    "SpaceSubscriptionPlans.aiCredits.description":
      "增加您的 AI 點數額度，請將額外的 AI 加入您目前的方案或升級目前的方案。",
    "SpaceSubscriptionPlans.aiCredits.title": "使用 AI 點數",
    "SpaceSubscriptionPlans.aiUsageFraction": "（{used}/{total} 個點數）",
    "SpaceSubscriptionPlans.billingIntervalMessage":
      "{billingInterval，select，year{年结算}other{月度结算}}",
    "SpaceSubscriptionPlans.blockUsageFraction": "（{used}/{total} 個區塊）",
    "SpaceSubscriptionPlans.blocksUsed.description":
      "升級您的方案以獲得團隊無限區塊。",
    "SpaceSubscriptionPlans.blocksUsed.title": "團隊使用區塊",
    "SpaceSubscriptionPlans.everythingInBusiness.title": "业务计划的所有功能+",
    "SpaceSubscriptionPlans.everythingInFree.title": "免费套餐的所有功能+",
    "SpaceSubscriptionPlans.everythingInPlus.title": "加套餐的所有功能+",
    "SpaceSubscriptionPlans.includes.advancedSecurityControls": "進階安全控制",
    "SpaceSubscriptionPlans.includes.aiCredits": "10 個免費 AI 點數",
    "SpaceSubscriptionPlans.includes.auditLog": "稽核日誌檔",
    "SpaceSubscriptionPlans.includes.bulkPdfExport": "批量 PDF 匯出",
    "SpaceSubscriptionPlans.includes.collaborativeWorkspaces": "協作工作區",
    "SpaceSubscriptionPlans.includes.customerSuccessManager": "客戶成功經理",
    "SpaceSubscriptionPlans.includes.guests.10": "邀請最多 10 位訪客",
    "SpaceSubscriptionPlans.includes.guests.100": "邀請最多 100 位訪客",
    "SpaceSubscriptionPlans.includes.guests.250": "邀請最多 250 位訪客",
    "SpaceSubscriptionPlans.includes.guests.custom": "自訂",
    "SpaceSubscriptionPlans.includes.integrations": "Slack、Github 及更多整合",
    "SpaceSubscriptionPlans.includes.pageHistory.30": "30 天頁面歷史",
    "SpaceSubscriptionPlans.includes.pageHistory.7": "7 天頁面歷史",
    "SpaceSubscriptionPlans.includes.pageHistory.90": "90 天頁面歷史",
    "SpaceSubscriptionPlans.includes.pageHistory.unlimited": "無限頁面歷史",
    "SpaceSubscriptionPlans.includes.privateTeamspaces": "私人團隊空間",
    "SpaceSubscriptionPlans.includes.saml.sso": "SAML 單一登入",
    "SpaceSubscriptionPlans.includes.scim": "使用者管理分配 (SCIM)",
    "SpaceSubscriptionPlans.includes.title": "包括",
    "SpaceSubscriptionPlans.includes.unlimitedBlocksForIndividuals":
      "個人無限區塊",
    "SpaceSubscriptionPlans.includes.unlimitedBlocksForTeams": "團隊無限區塊",
    "SpaceSubscriptionPlans.includes.unlimitedFileUploads": "無限檔案上傳",
    "SpaceSubscriptionPlans.manageUsage.title": "管理使用情況",
    "SpaceSubscriptionPlans.membersPerMonth.title":
      "<bold>{monthlyPrice}</bold> / 成員 / 月",
    "SpaceSubscriptionPlans.purchaseAI.label": "AI采购",
    "SpaceSubscriptionPlans.purchaseCredits.label": "購買點數",
    "SpaceSubscriptionPlans.recommendedPlanDescription": "根據您的使用情況推薦",
    "SpaceSubscriptionPlans.recommendedPlanForYou": "為您推薦的方案",
    "SpaceSubscriptionPlans.removeFromPlan.label": "自方案移除",
    "SpaceSubscriptionPlans.resubscribe.label": "重新訂閱",
    "SpaceSubscriptionPlans.seeAllPlans": "查看所有计划",
    "SpaceSubscriptionPlans.upgrade.button.label": "升级",
    "SpaceSubscriptionPlans.upgradeToPlus.button.label": "升級到加值版",
    "SpaceSubscriptionPlans.upgradeToPlus.description":
      "升级至Plus套餐，获得无限组块、无限文件上传、30天页面记录等服务。",
    "SpaceSubscriptionPlans.usagePercent": "<bold>{percent}%</bold>",
    "SpaceSubscriptionPlans.viewPlans.title": "查看所有方案",
    "SpaceSubscriptionPlans.whatYouHaveNow.title": "您現在擁有的加上...",
    "SpaceSubscriptionPlansAndAddOns.currentPlan.label": "目前方案",
    "SpecificTeamMemberToAddRow.addMemberButton.text": "加入",
    "SpecificTeamMemberToAddRow.team_invite_failure":
      "無法加入 {userOrGroupName}",
    "TeamAccessLevelSwitcher.closeOrPrivateTeamspace.disabledTooltipOnlyDefaultTeam":
      "此為工作區中唯一的預設團隊空間。添加另一個預設團隊空間以更改團隊空間權限。",
    "TeamAccessLevelSwitcher.closedTeamSpace.title": "封閉式團隊空間",
    "TeamAccessLevelSwitcher.defaultTeamSpace.title": "預設值",
    "TeamAccessLevelSwitcher.defaultTeamspace.disabledTooltipNonAdmin":
      "你不是工作區管理員，無法變更此設定",
    "TeamAccessLevelSwitcher.openTeamspace.defaultPill": "預設",
    "TeamAccessLevelSwitcher.openTeamspace.defaultTooltip":
      "所有工作區成員都是此團隊空間的成員",
    "TeamAccessLevelSwitcher.openTeamspace.title": "開放式團隊空間",
    "TeamAccessLevelSwitcher.privateTeamSpace.title": "私人",
    "TeamAccessLevelSwitcher.privateTeamspaceUpsellBusiness.tooltip":
      "升級到商業版以啟用私人團隊空間",
    "TeamAccessLevelSwitcher.privateTeamspaceUpsellEnterprise.tooltip":
      "升級到企業版以啟用私人團隊空間",
    "TeamBreadcrumbPopup.morePages": "其他 {numberOfMorePages} 頁…",
    "TeamInviteLinkJoinModal.confirmDialog.description":
      "你是否要加入 {teamName}？",
    "TeamInviteLinkJoinModal.noButton.label": "否",
    "TeamInviteLinkJoinModal.yesButton.label": "是",
    "TeamInviteLinkPageError.backToMyContentButton.label": "返回我的內容",
    "TeamInviteLinkPageError.noAccess.message":
      "如果有任何問題，請聯絡您的工作空間擁有者。",
    "TeamInviteLinkPageError.noAccess.title": "糟糕，你沒有此內容的存取權限。",
    "TeamMemberOwnerSelect.guestLabel": "團隊空間訪客",
    "TeamMemberOwnerSelect.memberItem.disableDowngradeToGuestTooltip":
      "若要將此使用者變更為團隊空間訪客，請先將他們自工作區移除。",
    "TeamMemberOwnerSelect.memberItem.disableOwnerForGroupsTooltip":
      "群組不可以是團隊空間擁有者",
    "TeamMemberOwnerSelect.memberItem.disableTeamGuestForGroupsTooltip":
      "群組不可以是團隊空間訪客",
    "TeamMemberOwnerSelect.memberItem.disableWithOnlyOneOwnerTooltip":
      "添加另一個團隊空間所有者以將自己降級為成員",
    "TeamMemberOwnerSelect.memberLabel": "團隊空間成員",
    "TeamMemberOwnerSelect.permissionsOverride": "自訂權限",
    "TeamMemberOwnerSelect.remove": "移除",
    "TeamMemberOwnerSelect.remove.disabledTooltip.cannotRemoveFromDefault":
      "成員無法自預設團隊空間中移除。",
    "TeamMemberOwnerSelect.roleName.comment_only": "可以評論",
    "TeamMemberOwnerSelect.roleName.content_only_editor": "可以編輯內容",
    "TeamMemberOwnerSelect.roleName.custom": "自訂",
    "TeamMemberOwnerSelect.roleName.editor": "完整存取權限",
    "TeamMemberOwnerSelect.roleName.none": "沒有存取權限",
    "TeamMemberOwnerSelect.roleName.read_and_write": "可以編輯",
    "TeamMemberOwnerSelect.roleName.reader": "可以查看",
    "TeamMembersTopSection.permissionItem.defaultAccessSpaceName":
      "{spaceName} 中的其他所有人",
    "TeamMembersTopSection.permissionItem.defaultAccessTeamSpaceName":
      "團隊空間成員",
    "TeamMembersTopSection.permissionItem.defaultAccessWithoutSpaceName":
      "工作區中的其他人",
    "TeamMembersTopSection.permissionItem.defaultAccessWithoutTeamspaceName":
      "團隊空間成員",
    "TeamMembersTopSection.permissionItem.guest.defaultAccessTeamSpaceName":
      "團隊空間訪客",
    "TeamMembersTopSection.permissionItem.guest.defaultAccessWithoutTeamspaceName":
      "團隊空間訪客",
    "TeamOwnersPermissionRow.permissionItem.teamspaceOwnersAccessToggleName":
      "團隊空間擁有者",
    "TeamOwnersPermissionRow.permissionItem.teamspaceOwnersAccessToggleNameWithoutTeamName":
      "團隊空間擁有者",
    "TeamOwnersPermissionRow.teamspaceOwnersRowTooltip":
      "團隊空間擁有者預設擁有團隊空間頁面完整存取權限",
    "TeamPermissionsInviteOverlay.inviteMembersFailure.message": "無法傳送邀請",
    "TeamPermissionsInviteOverlay.membersTitle.label": "將成員加入",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipPlural.subtitle":
      "<b>{numberOfOtherEmails, plural, one {{firstGuest} 和 {secondGuest}} other {{firstGuest} 及其他 {numberOfOtherEmails} 個}}</b> 將以記帳工作區成員身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipPlural.teamGuest.subtitle":
      "<b>{numberOfOtherEmails, plural, one {{firstGuest} 和 {secondGuest}} other {{firstGuest} 及其他 {numberOfOtherEmails} 個}}</b>將以計費團隊空間訪客身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipPluralOwners.subtitle":
      "<b>{numberOfOtherEmails, plural, one {{firstGuest} 和 {secondGuest}} other {{firstGuest} 及其他 {numberOfOtherEmails} 個}}</b> 將以工作區擁有者身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipSingular.subtitle":
      "<b>{guestEmail}</b> 將以記帳工作區成員身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipSingular.teamGuest.subtitle":
      "<b>{guestEmail}</b> 將以計費團隊空間訪客身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.addSpaceMembershipSingularOwner.subtitle":
      "<b>{guestEmail}</b> 將以工作區擁有者身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.learnMore.text": "進一步了解團隊空間",
    "TeamPermissionsInviteOverlayV2.membersTitle.label": "邀請人員至",
    "TeamPermissionsInviteOverlayV2.requestSpaceMembershipDisabled.subtitle":
      "你無法將工作區訪客加入團隊空間。要求你的管理員先將其以工作區成員身分加入。",
    "TeamPermissionsInviteOverlayV2.requestSpaceMembershipPlural.subtitle":
      "系統將要求傳送給你的管理員，並將 <b>{numberOfOtherEmails, plural, one {{firstGuest} 和 {secondGuest}} other {{firstGuest} 及其他 {numberOfOtherEmails} 個}}</b> 以成員身分加入 {workspaceName}。",
    "TeamPermissionsInviteOverlayV2.requestSpaceMembershipSingular.subtitle":
      "系統將要求傳送給你的管理員，並將 <b>{guestEmail}</b> 以成員身分加入 {workspaceName}。",
    "TeamPermissionsList.search.inThisTeam": "在此團隊中",
    "TeamPermissionsList.search.notInTeam": "不在團隊中",
    "TeamPermissionsList.search.zeroState": "找不到成員或群組",
    "TeamPermissionsListHeader.nameColumn": "名稱",
    "TeamPermissionsListHeader.roleColumn": "角色",
    "TeamRoleSelect.memberType.disableAddingGuestForNonSpaceAdmins":
      "你必須是工作區擁有者才能加入團隊空間訪客",
    "TeamRoleSelect.memberType.disableAddingGuestForNonSpaceAdminsOrNonTeamOwners":
      "你必須同時是工作區擁有者和團隊空間擁有者才能加入團隊空間訪客",
    "TeamRoleSelect.memberType.disableAddingGuestForNonTeamOwners":
      "你必須是團隊空間擁有者才能加入團隊空間訪客",
    "TeamRoleSelect.memberType.disableAddingGuestsInDefaultTeam":
      "預設團隊不可以包含團隊空間訪客",
    "TeamRoleSelect.memberType.disableAddingOwnerForMembers":
      "團隊空間成員不可以加入擁有者",
    "TeamSettings.groups.removeGroupModal.confirmationButton": "移除群組",
    "TeamSettings.groups.removeGroupModal.description":
      "此群組的 {numGroupMembers} {numGroupMembers, plural, one {位成員} other {位成員}} 將自此團隊空間移除。",
    "TeamSettings.groups.removeGroupModal.title": "確定要移除 {groupName} 嗎？",
    "TeamSettings.groups.removeGroupModal.title.noGroupName":
      "確定要移除此群組嗎？",
    "TeamSettingsGeneral.generalSettings.description.title": "說明",
    "TeamSettingsGeneral.generalSettings.details": "詳細資訊",
    "TeamSettingsGeneral.generalSettings.iconAndName.title": "圖示和名稱",
    "TeamSettingsGeneral.generalSettings.noDescription": "沒有說明",
    "TeamSettingsGeneral.generalSettings.permissions": "權限",
    "TeamSettingsGeneral.generalSettings.spacePermissionsComment":
      "{showTeam, select, true {其他人} other {{spaceName} 中的每個人}} 可以評論",
    "TeamSettingsGeneral.generalSettings.spacePermissionsEdit":
      "{showTeam, select, true {其他人} other {{spaceName} 中的每個人}} 可以編輯",
    "TeamSettingsGeneral.generalSettings.spacePermissionsFull":
      "{showTeam, select, true {其他人} other {{spaceName} 中的每個人}} 有完整存取權限",
    "TeamSettingsGeneral.generalSettings.spacePermissionsNone":
      "{showTeam, select, true {其他人} other {{spaceName} 中的每個人}} 沒有存取權限",
    "TeamSettingsGeneral.generalSettings.spacePermissionsView":
      "{showTeam, select, true {其他人} other {{spaceName} 中的每個人}} 可以查看",
    "TeamSettingsGeneral.generalSettings.subtitle":
      "編輯團隊名稱、說明或圖示。",
    "TeamSettingsGeneral.generalSettings.teamPermissionsComment":
      "團隊空間成員可以評論",
    "TeamSettingsGeneral.generalSettings.teamPermissionsEdit":
      "團隊空間成員可以編輯",
    "TeamSettingsGeneral.generalSettings.teamPermissionsFull":
      "團隊空間成員有完整存取權限",
    "TeamSettingsGeneral.generalSettings.teamPermissionsView":
      "團隊空間成員可以查看",
    "TeamSettingsGeneral.settingsChanged": "更新的團隊空間詳細資訊",
    "TeamSettingsMembers.memberSettings.membersTitle": "成員",
    "TeamSettingsMembers.memberSettings.permissionsTitle": "權限",
    "TeamSettingsPermissions.settingSelect.whoCanEditTeamPages.teamMemberPermissionTooltip":
      "將成員權限變更為「可以編輯」或「全部權限」以允許團隊空間成員編輯側邊欄",
    "TeamSettingsPermissions.settingSelect.whoCanEditTeamPages.upgradeToBusinessTooltip":
      "升級到商業版以變更此設定",
    "TeamSettingsPermissions.settingSelect.whoCanEditTeamPages.upgradeToEnterpriseTooltip":
      "升級到企業版以變更此設定",
    "TeamSettingsPermissions.whoCanEditTeamPages.caption":
      "加入、移除或重新排序側邊欄頁面",
    "TeamSettingsPermissions.whoCanEditTeamPages.teamMembersAndOwners.title":
      "任何團隊空間成員",
    "TeamSettingsPermissions.whoCanEditTeamPages.teamOwners.title":
      "只有團隊空間擁有者",
    "TeamSettingsPermissions.whoCanEditTeamPages.title":
      "可編輯團隊空間側邊欄的成員",
    "TeamSettingsPermissions.whoCanInviteTeamMembers.teamOwners.title":
      "只有團隊空間擁有者",
    "TeamSettingsPermissions.whoCanInviteTeamMembers.title":
      "誰可以邀請團隊空間成員",
    "TeamSettingsPermissions.whoCanInviteTeamMembersDisabled.caption":
      "將存取層級變更至封閉式或私人，以便限制可邀請團隊空間成員的成員",
    "TeamSettingsPermissions.whoCanInviteTeamspaceMembers.teamMembersAndOwners.title":
      "任何團隊空間成員",
    "TeamSettingsPermissions.whoCanInviteTeamspaceMembersDisabled.caption":
      "將存取層級變更至封閉式或私人，以便限制可邀請團隊空間成員的成員",
    "TeamSettingsSecurity.pageSettingsTitle": "頁面安全性",
    "TeamSettingsSecurity.teamspaceSettingsTitle": "團隊空間安全性",
    "TeamsecuritySection.inviteLink.description":
      "只有可邀請成員的使用者可以查看邀請連結",
    "TeamsecuritySection.inviteLink.label": "邀請連結",
    "TemplateDetail.TeamItem.addButton": "加入",
    "TemplateDetail.TeamItem.goButton": "Go",
    "TemplateDetail.TeamItem.teamMemberCount":
      "{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
    "TemporarySignUpEmail.signUpLink.continuedBody":
      "附註：此為你的專屬連結，在你使用上方的按鈕或連結後就會到期，因此請勿與任何人分享！",
    "TemporarySignUpEmail.signUpLink.linkAlternative":
      "按鈕無法使用嗎？如要完成註冊，你也可將此網址貼到瀏覽器：",
    "TemporarySignUpEmail.signUpLink.subjectLine": "完成 Notion 註冊",
    "TemporarySignUpEmail.signUpLink.titleOfEmail": "你快要完成了！",
    "TemporarySignUpEmail.signUpLink.titleOfEmail.actionLink":
      "繼續前往 Notion",
    "TemporarySignUpEmail.signUpLink.titleOfEmail.text":
      "你的新 Notion 帳號快要建立完成了，請按一下下方按鈕繼續操作：",
    "TopbarPageAnalyticsOptOutMenu.heading": "隱私權設定",
    "TransferSpaceToUserCompletedEmail.body.successfulTransfer":
      "你的個人工作區 <b>{workspaceName}</b> 已從 {initialEmail} 成功轉移至 {finalEmail}。",
    "TransferSpaceToUserCompletedEmail.body.updateBillingInfo":
      "請確保你個人工作區 <b>{workspaceName}</b> 的帳單資訊正確無誤。若要變更你的帳單資訊，請依照<linktohelpcenter>此處指示</linktohelpcenter>操作。",
    "TransferSpaceToUserCompletedEmail.body.visitWorkspace":
      "在<linktoworkspace>此處</linktoworkspace>查看工作區。",
    "TransferSpaceToUserCompletedEmail.closingText":
      "謝謝你。{br} ──來自 Notion 團隊",
    "TransferSpaceToUserCompletedEmail.greetingWithName":
      "{customerName}，你好：",
    "TransferSpaceToUserCompletedEmail.greetingWithoutName": "你好：",
    "TransferSpaceToUserCompletedEmail.subjectLine":
      "已完成 {workspaceName} 轉移至非企業電子郵件帳號的作業",
    "TutorialTooltip.backButton": "返回",
    "TutorialTooltip.doneButton": "完成",
    "TutorialTooltip.nextButton": "下一步",
    "UpsellNotice.label": "所有免費的 AI 回應已用於工作區。",
    "UpsellNotice.link.label": "解除限制",
    "UpsellNotice.link.label.mobile": "升級",
    "VerificationExpiryMenu.done": "完成",
    "VerificationExpiryMenu.pickSpecificDate.placeholder": "或是選擇特定日期",
    "VerificationExpiryMenu.preset.subtitle": "直到 {date}",
    "VerificationExpiryMenu.preset.title": "持續 {numDays} 天",
    "VerificationExpiryMenu.title": "驗證日期：",
    "VerificationExpiryPicker.option.customDate": "選擇日期",
    "VerificationExpiryPicker.option.indefinitely": "無限期",
    "VerificationExpiryPicker.reverify.header": "重新驗證頁面",
    "VerificationExpiryPicker.verify.header": "驗證頁面",
    "VerificationMetadata.lastVerified": "上次驗證者：{user}",
    "VerificationPropertyButton.empty": "空白",
    "VerificationPropertyButton.expired": "已過期 {timeFromMoment}",
    "VerificationPropertyButton.hoverText": "按一下以加入",
    "VerificationPropertyButton.none": "無",
    "VerificationPropertyButton.tooltip.clickToEdit": "按一下以編輯",
    "VerificationPropertyButton.tooltip.editRestrictedToOwner":
      "只有頁面擁有者可以編輯驗證",
    "VerificationPropertyButton.tooltip.editRestrictedToVerifier":
      "只有 {verifierPropertyName} 的人員可以編輯驗證",
    "VerificationPropertyButton.verifiedIndefinitely": "已驗證",
    "VerificationPropertyButton.verifiedUntil": "直到 {date}",
    "VerificationPropertyButton.verifyPage": "驗證頁面",
    "VerificationPropertyOverlay.editVerificationTitle": "編輯驗證",
    "VerificationPropertyOverlay.verifyPageTitle": "驗證頁面",
    "VerificationPropertyOverlayMenu.fixedExpiryDate.customAmount": "自訂日期",
    "VerificationPropertyOverlayMenu.fixedExpiryDate.presetAmount":
      "持續 {days} 天",
    "VerificationPropertyOverlayMenu.fixedExpiryDate.subtitle": "直到 {date}",
    "VerificationPropertyOverlayMenu.indefinitely.subtitle": "直到頁面未驗證",
    "VerificationPropertyOverlayMenu.indefinitely.title": "無限期",
    "VerificationPropertyOverlayMenu.removeVerificationButton": "移除驗證",
    "VerificationPropertyOverlayMenu.updateVerificationButton": "更新驗證",
    "VerificationPropertyOverlayMenu.verifyPage.button": "驗證頁面",
    "VerificationSummary.verificationExpired":
      "上次驗證者：{user}，自 {dateTimeRange}",
    "VerificationSummary.verified": "上次驗證者：{user}，自 {dateTimeRange}",
    "VerificationSummary.verifiedIndefinitely": "由 {user} 於 {date} 驗證",
    "WikiHomeOnboardingTooltip.content":
      "查看者的閱讀體驗跟之前相同，但編輯者可以使用全新功能讓內容保持最新狀態",
    "WikiHomeOnboardingTooltip.header": "歡迎使用你的全新知識庫！",
    "WikiPromoPopup.description":
      "你現在可以使用<bold>頁面驗證</bold>和<bold>頁面擁有者</bold>讓資訊保持{br}最新狀態",
    "WikiPromoPopup.header": "Notion 中更好的知識庫",
    "WikiPromoPopup.owner.subtitle":
      "追蹤你負責的頁面，以及它們上一次更新的時間",
    "WikiPromoPopup.owner.title": "尋找需要更新的頁面",
    "WikiPromoPopup.tags.subtitle":
      "使用標籤及其他資料庫屬性讓你的知識庫井然有序",
    "WikiPromoPopup.tags.title": "使用標籤整理你的頁面",
    "WikiPromoPopup.upgrade.subtitle":
      "將驗證、擁有者及標籤加入到此頁面（你可以稍後再復原此動作）",
    "WikiPromoPopup.upgrade.title": "準備好升級了嗎？",
    "WikiPromoPopup.verification.subtitle":
      "你可以將<bold>擁有者</bold>指派到頁面。擁有者可以驗證頁面是否具有正確、可靠的資訊",
    "WikiPromoPopup.verification.title": "驗證頁面",
    "WikiPropertiesOnboardingTooltip.content.ownerProperty":
      "擁有者負責讓頁面保持最新狀態。擁有者依預設是頁面建立者",
    "WikiPropertiesOnboardingTooltip.content.tagsProperty":
      "使用標籤或其他資料庫屬性自訂你的知識庫",
    "WikiPropertiesOnboardingTooltip.content.verificationProperty":
      "頁面擁有者可以將頁面標記為「已驗證」或「已過期」，以便協助查看者了解他們是否可以相信該內容",
    "WikiPropertiesOnboardingTooltip.header.ownerProperty": "擁有者",
    "WikiPropertiesOnboardingTooltip.header.tagsProperty": "加入標籤等更多內容",
    "WikiPropertiesOnboardingTooltip.header.verificationProperty": "驗證",
    "WikiPropertiesOnboardingTooltip.learnMore": "了解更多",
    "WikiViewsOnboardingTooltip.content":
      "「<bold>所有頁面</bold>」和「<bold>我擁有的頁面</bold>」視圖會為你提供知識庫中頁面的概觀",
    "WikiViewsOnboardingTooltip.header": "全新視圖",
    "[DO NOT TRANSLATE].search.filterMenu.notInPageFilter.label":
      "[dev] 不在頁面",
    "[DO NOT TRANSLATE].search.filterMenu.notInTeamFilter.label":
      "[dev] 不在團隊空間",
    "abstractBlock.embeds.button.label": "嵌入 Abstract",
    "abstractBlock.embeds.caption": "適用於啟用了公開存取的 Abstract 連結",
    "abstractBlock.placeholder": "嵌入 Abstract",
    "accountActions.deletingAccount.loadingMessage": "正在刪除你的帳號…",
    "accountActions.deletingAccount.noUserToDeleteMessage":
      "沒有要刪除的帳號。",
    "action.addtoFavorites.name": "加入最愛",
    "action.alignment.center.name": "置中",
    "action.alignment.left.name": "靠左",
    "action.alignment.name": "對齊",
    "action.alignment.right.name": "靠右",
    "action.backgroundColor.blue.fuzzySearchKeyword": "藍色背景 Bluebackground",
    "action.backgroundColor.blue.name": "藍色背景",
    "action.backgroundColor.brown.fuzzySearchKeyword":
      "棕色背景 Brownbackground",
    "action.backgroundColor.brown.name": "棕色背景",
    "action.backgroundColor.default.fuzzySearchKeyword":
      "Default Black White 默认 moren mo'ren 黑 hei 白 bai",
    "action.backgroundColor.default.name": "預設背景",
    "action.backgroundColor.gray.fuzzySearchKeyword":
      "Grey Gray background 灰色 huise hui'se 背景 beijing bei'jing",
    "action.backgroundColor.gray.name": "灰色背景",
    "action.backgroundColor.green.name": "綠色背景",
    "action.backgroundColor.orange.fuzzySearchKeyword":
      "橘色背景 Orangebackground",
    "action.backgroundColor.orange.name": "橘色背景",
    "action.backgroundColor.pink.fuzzySearchKeyword":
      "粉紅色背景 Pinkbackground",
    "action.backgroundColor.pink.name": "粉色背景",
    "action.backgroundColor.purple.fuzzySearchKeyword":
      "紫色背景 Purplebackground",
    "action.backgroundColor.purple.name": "紫色背景",
    "action.backgroundColor.red.fuzzySearchKeyword": "紅色背景 Redbackground",
    "action.backgroundColor.red.name": "紅色背景",
    "action.backgroundColor.teal.fuzzySearchKeyword":
      "藍綠色背景 Tealbackground Greenbackground",
    "action.backgroundColor.yellow.fuzzySearchKeyword":
      "黃色背景 Yellowbackground",
    "action.backgroundColor.yellow.name": "黃色背景",
    "action.backtoNotion.name": "回到 Notion",
    "action.blockSelectionCompletionName.name": "AI 輔助",
    "action.bold.name": "粗體",
    "action.calendarBy.name": "行事曆顯示",
    "action.caption.name": "標題",
    "action.clearContents.title": "清除內容",
    "action.clearDate.name": "清除日期",
    "action.codePreviewSection.name": "在區塊中顯示",
    "action.color.name": "顏色",
    "action.columnHeader.title": "表頭列",
    "action.commandPalette.addLink": "加入連結",
    "action.commandPalette.pageActions": "頁面動作",
    "action.commandPalette.styleActions": "樣式",
    "action.commandPalette.toggleBold": "切換粗體",
    "action.commandPalette.toggleCode": "切換代碼",
    "action.commandPalette.toggleStrikethrough": "切換刪除線",
    "action.comment.name": "評論",
    "action.commentPage.name": "評論",
    "action.configure.name": "區塊設定",
    "action.copiedApiObjectToClipboard.snackBarMessage":
      "已將 API 物件複製到剪貼簿",
    "action.copiedCodeToClipboard.snackBarMessage": "已將代碼複製到剪貼簿",
    "action.copiedLinkToClipboard.snackBarMessage": "已將連結複製到剪貼簿",
    "action.copiedLinksToClipboard.snackBarMessage": "已將連結拷貝到剪貼簿",
    "action.copiedPropertyToClipboard.snackBarMessage": "已將屬性複製到剪貼簿",
    "action.copiedToClipboard.snackBarMessage": "已複製到剪貼簿",
    "action.copiedTokenToClipboard.snackBarMessage": "已將權杖拷貝到剪貼簿",
    "action.copyDirectLink.name": "拷貝原始連結",
    "action.copyFormattedLinkNavigableType.name": "複製已連結標題",
    "action.copyLink.name": "複製區塊連結",
    "action.copyLinkNavigableType.name": "拷貝連結",
    "action.copyLinkToCurrentPage.snackBarMessage":
      "目前頁面的連結已拷貝到剪貼簿",
    "action.copyLinks.name": "拷貝全部連結",
    "action.copyLinktoView.name": "複製視圖連結",
    "action.copyPublicApiObject": "[Dev] Copy API object",
    "action.createEquation.name": "建立方程式",
    "action.createLink.name": "建立連結",
    "action.createNotionPage.name": "建立自己的 Notion 頁面",
    "action.createTeamFromPage.caption": "供團隊自訂權限及協作的空間",
    "action.createTeamFromPage.fullName": "轉換成團隊空間",
    "action.createTeamFromPage.name": "團隊空間",
    "action.customizePage.label": "自訂頁面",
    "action.darkMode.name": "深色模式",
    "action.databaseLock.label": "鎖定資料庫",
    "action.dateOrReminder.description": "於文字中插入日期或提醒。",
    "action.dateOrReminder.title": "日期或提醒",
    "action.delete.name": "刪除",
    "action.deletePages.snackBarMessage": "已移至垃圾桶",
    "action.doNotHavePermissionToMoveBlock": "你沒有權限移動此頁面。",
    "action.download.name": "下載",
    "action.duplicate.name": "建立複本",
    "action.duplicatePage.name": "建立複本頁面",
    "action.duplicateTo.name": "儲存複本到",
    "action.duplicateToPrivate.name": "複製到私人",
    "action.edit.name": "編輯",
    "action.editIcon.name": "圖示",
    "action.editPage.name": "編輯",
    "action.editProperty.name": "編輯屬性",
    "action.enter.name": "輸入",
    "action.export.caption": "PDF、HTML、Markdown",
    "action.export.name": "匯出",
    "action.filter.name": "篩選",
    "action.fixLegacyTransclusion.name": "修復舊版嵌入",
    "action.fontSmallText.fuzzySearchKeywords":
      "Font Small Text 字体 ziti zi'ti 字号 zihao zi'hao 小字 xiaozi xiao'zi",
    "action.fontSmallText.label": "小字型",
    "action.foregroundColor.blue.fuzzySearchKeyword": "藍色",
    "action.foregroundColor.blue.name": "藍色",
    "action.foregroundColor.brown.fuzzySearchKeyword": "棕色",
    "action.foregroundColor.brown.name": "棕色",
    "action.foregroundColor.default.name": "預設",
    "action.foregroundColor.gray.fuzzySearchKeyword":
      "Grey Gray 灰色 huise hui'se",
    "action.foregroundColor.gray.name": "灰色",
    "action.foregroundColor.green.name": "綠色",
    "action.foregroundColor.orange.fuzzySearchKeyword": "橘色",
    "action.foregroundColor.orange.name": "橘色",
    "action.foregroundColor.pink.fuzzySearchKeyword": "粉红色",
    "action.foregroundColor.pink.name": "粉色",
    "action.foregroundColor.purple.fuzzySearchKeyword": "紫色",
    "action.foregroundColor.purple.name": "紫色",
    "action.foregroundColor.red.fuzzySearchKeyword": "紅色",
    "action.foregroundColor.red.name": "紅色",
    "action.foregroundColor.teal.fuzzySearchKeyword": "藍綠色",
    "action.foregroundColor.yellow.fuzzySearchKeyword": "黃色",
    "action.foregroundColor.yellow.name": "黃色",
    "action.fullScreen.name": "全螢幕",
    "action.fullWidth.label": "全寬",
    "action.groupBy.name": "群組",
    "action.highlight.name": "高亮",
    "action.import.name": "匯入",
    "action.insertBelow.name": "在下面插入",
    "action.insertColumnLeft.title": "在左方插入",
    "action.insertColumnRight.title": "在右方插入",
    "action.insertEmoji.description": "於文字中搜尋表情符號。",
    "action.insertEmoji.title": "表情符號",
    "action.insertInlineEquation.description": "於文字中插入數學符號。",
    "action.insertInlineEquation.fuzzySearchKeyword":
      "LaTeX Math Inline Equation $ TeX LaTex 方程式 fangchengshi fang'cheng'shi 数学 shuxue shu'xue 行内 hangnei hang'nei 公式 gongshi gong'shi",
    "action.insertInlineEquation.title": "行內方程式",
    "action.insertRowAbove.title": "在上方插入",
    "action.insertRowBelow.title": "在下方插入",
    "action.isLockedTopLevelTeamPage": "這是已封鎖的團隊空間頁面且無法移動。",
    "action.italic.name": "斜體",
    "action.languageMode.abap": "ABAP",
    "action.languageMode.agda": "Agda",
    "action.languageMode.arduino": "Arduino",
    "action.languageMode.bash": "Bash",
    "action.languageMode.basic": "Basic",
    "action.languageMode.bnf": "BNF",
    "action.languageMode.c": "C",
    "action.languageMode.clojure": "Clojure",
    "action.languageMode.coffeescript": "CoffeeScript",
    "action.languageMode.coq": "Coq",
    "action.languageMode.cplusplus": "C++",
    "action.languageMode.csharp": "C#",
    "action.languageMode.css": "CSS",
    "action.languageMode.cstyle": "Java/C/C++/C#",
    "action.languageMode.dart": "Dart",
    "action.languageMode.dhall": "Dhall",
    "action.languageMode.diff": "Diff",
    "action.languageMode.docker": "Docker",
    "action.languageMode.ebnf": "EBNF",
    "action.languageMode.elixir": "Elixir",
    "action.languageMode.elm": "Elm",
    "action.languageMode.erlang": "Erlang",
    "action.languageMode.flow": "Flow",
    "action.languageMode.fortran": "Fortran",
    "action.languageMode.fsharp": "F#",
    "action.languageMode.gherkin": "Gherkin",
    "action.languageMode.glsl": "GLSL",
    "action.languageMode.go": "Go",
    "action.languageMode.graphql": "Graphql",
    "action.languageMode.groovy": "Groovy",
    "action.languageMode.haskell": "Haskell",
    "action.languageMode.html": "HTML",
    "action.languageMode.idris": "Idris",
    "action.languageMode.java": "Java",
    "action.languageMode.javascript": "JavaScript",
    "action.languageMode.json": "JSON",
    "action.languageMode.julia": "Julia",
    "action.languageMode.kotlin": "Kotlin",
    "action.languageMode.latex": "LaTeX",
    "action.languageMode.less": "LESS",
    "action.languageMode.lisp": "Lisp",
    "action.languageMode.livescript": "LiveScript",
    "action.languageMode.llvm": "LLVM IR",
    "action.languageMode.lua": "Lua",
    "action.languageMode.makefile": "Makefile",
    "action.languageMode.markdown": "Markdown",
    "action.languageMode.markup": "標記",
    "action.languageMode.mathematica": "Mathematica",
    "action.languageMode.matlab": "MATLAB",
    "action.languageMode.mermaid": "Mermaid",
    "action.languageMode.name": "設定語言",
    "action.languageMode.nasm": "Assembly",
    "action.languageMode.nix": "Nix",
    "action.languageMode.objectiveC": "Objective-C",
    "action.languageMode.ocaml": "OCaml",
    "action.languageMode.pascal": "Pascal",
    "action.languageMode.perl": "Perl",
    "action.languageMode.php": "PHP",
    "action.languageMode.plaintext": "純文字",
    "action.languageMode.powershell": "Powershell",
    "action.languageMode.prolog": "Prolog",
    "action.languageMode.protobuf": "Protobuf",
    "action.languageMode.purescript": "PureScript",
    "action.languageMode.python": "Python",
    "action.languageMode.r": "R",
    "action.languageMode.racket": "Racket",
    "action.languageMode.reason": "Reason",
    "action.languageMode.ruby": "Ruby",
    "action.languageMode.rust": "Rust",
    "action.languageMode.sass": "Sass",
    "action.languageMode.scala": "Scala",
    "action.languageMode.scheme": "Scheme",
    "action.languageMode.scss": "SCSS",
    "action.languageMode.shell": "Shell",
    "action.languageMode.solidity": "堅固性",
    "action.languageMode.sql": "SQL",
    "action.languageMode.swift": "Swift",
    "action.languageMode.toml": "TOML",
    "action.languageMode.typescript": "TypeScript",
    "action.languageMode.vbdotnet": "VB.Net",
    "action.languageMode.verilog": "Verilog",
    "action.languageMode.vhdl": "VHDL",
    "action.languageMode.visualbasic": "Visual Basic",
    "action.languageMode.webassembly": "WebAssembly",
    "action.languageMode.xml": "XML",
    "action.languageMode.yaml": "YAML",
    "action.lastUsedHighlight.fuzzySearchKeywords":
      "Color last used 上次使用的颜色 shangcishiyongdeyanse shang'ci'shi'yong'de'yan'se 上次 shangci shang'ci 使用 shiyong shi'yong 颜色 yanse yan'se",
    "action.lastUsedHighlight.title": "上次使用",
    "action.leave.name": "離開",
    "action.legacyGroupBy.name": "分組方式",
    "action.listFormat.circle.name": "圓形",
    "action.listFormat.disc.name": "碟形",
    "action.listFormat.letters.default": "預設",
    "action.listFormat.letters.name": "字母",
    "action.listFormat.letters.roman": "羅馬數字",
    "action.listFormat.name": "清單格式",
    "action.listFormat.numbers.name": "數字",
    "action.listFormat.sectionName": "清單格式",
    "action.listFormat.square.name": "正方形",
    "action.lockDatabaseName.name": "鎖定資料庫",
    "action.lockDatabaseViewsName.name": "鎖定視圖",
    "action.lockKnowledgeBaseName.name": "鎖定知識庫",
    "action.lockPage.name": "鎖定頁面",
    "action.lockWikiName.name": "鎖定知識庫",
    "action.logIn.name": "登入",
    "action.mentionPage.description": "於文字中提及頁面並連結。",
    "action.mentionPage.title": "提及頁面",
    "action.mentionPerson.description": "提及某人並向他們發送通知。",
    "action.mentionPerson.title": "提及人員",
    "action.mergewithCSV.name": "與 CSV 合併",
    "action.moveDown.name": "向下移動",
    "action.moveTo.name": "移動到",
    "action.moveUp.name": "向上移動",
    "action.navigation.openInFullPage": "打开整个页面",
    "action.navigation.openInSidePeek": "使用侧视图打开",
    "action.newPageIn.name": "轉換成頁面到",
    "action.noDate.name": "無日期",
    "action.openAllToggles.name": "展開所有折疊列表",
    "action.openAsPage.name": "以全頁面打開",
    "action.openInNewTab.name": "在新分頁開啟",
    "action.openInNewWindow.name": "在新視窗開啟",
    "action.openasPage.name": "以全頁面打開",
    "action.openinAndroidApp.name": "在 Android 應用中打開",
    "action.openinMacApp.name": "在 Mac 應用中打開",
    "action.openinWindowsApp.name": "在 Windows 應用中打開",
    "action.openiniOSApp.name": "在 iOS 應用中打開",
    "action.pageAnalytics.name": "頁面分析",
    "action.pageHistory.name": "頁面歷史記錄",
    "action.pageUpdates.title": "頁面更新",
    "action.paste.name": "貼上",
    "action.privacySettings.name": "隱私權設定",
    "action.properties.name": "屬性",
    "action.propertyVisibility.label": "切換屬性可視性",
    "action.quickFind.name": "快速尋找",
    "action.quoteSize.default": "預設",
    "action.quoteSize.large": "大",
    "action.quoteSize.name": "引文大小",
    "action.redo.name": "重做",
    "action.reloadPreview": "重新載入預覽",
    "action.reloadSyncedPage": "同步頁面",
    "action.removefromFavorites.name": "從最愛中移除",
    "action.rename.name": "重新命名",
    "action.replace.name": "替換",
    "action.reportPage.name": "檢舉頁面",
    "action.resetZoom.name": "重置縮放",
    "action.resyncPage.name": "刷新離線資料",
    "action.rowHeader.title": "表頭欄",
    "action.search.name": "搜尋",
    "action.search.noResults": "沒有結果",
    "action.section.actions": "動作",
    "action.section.advancedBlocks": "進階區塊",
    "action.section.aiBlocks": "AI 區塊",
    "action.section.background": "背景",
    "action.section.background.fuzzySearchKeywords":
      "Color Background 颜色 yanse yan'se 背景 beijing bei'jing",
    "action.section.backgroundColor": "背景顏色",
    "action.section.basicBlocks": "基本區塊",
    "action.section.color": "顏色",
    "action.section.database": "資料庫",
    "action.section.embeds": "嵌入區塊",
    "action.section.fontStyle": "風格",
    "action.section.inline": "行內",
    "action.section.media": "媒體",
    "action.section.quoteSize": "引文大小",
    "action.section.simpleTableColumn": "欄",
    "action.section.syncedDatabases": "同步的資料庫",
    "action.section.textColor": "文字顏色",
    "action.section.turnInto": "轉換成",
    "action.setPageFont.default.caption": "預設",
    "action.setPageFont.default.fuzzySearchKeywords":
      "Font Default 字体 ziti zi'ti 默认 moren mo'ren",
    "action.setPageFont.default.tooltip": "適合任何場景的無襯線體",
    "action.setPageFont.mono.caption": "等寬體",
    "action.setPageFont.mono.fuzzySearchKeywords":
      "Font Mono 字体 ziti zi'ti 等宽体 dengkuanti deng'kuan'ti",
    "action.setPageFont.mono.tooltip": "適合草稿和筆記",
    "action.setPageFont.serif.caption": "襯線體",
    "action.setPageFont.serif.fuzzySearchKeywords":
      "Font Serif 字体 ziti zi'ti 衬线体 chenxianti chen'xian'ti",
    "action.setPageFont.serif.tooltip": "適合發表長文章",
    "action.shareLink.name": "分享連結",
    "action.showCodePreviewFormat.name": "預覽",
    "action.showDeletedPages.name": "顯示已刪除的頁面",
    "action.showOnlyCodeFormat.name": "代碼",
    "action.showSplitViewFormat.name": "分割",
    "action.signUpOrlogIn.name": "註冊或登入",
    "action.sort.name": "排序",
    "action.startPublicEditDialog.continueLabel": "繼續",
    "action.startPublicEditDialog.message":
      "當你開始編輯時，頁面所有者將可以看到你的姓名，電子郵件地址和頭像。",
    "action.strikeThrough.name": "刪除線",
    "action.subGroupBy.name": "子群組",
    "action.syncPage.name": "儲存到離線",
    "action.templates.name": "模版",
    "action.timelineBy.name": "時程表依據",
    "action.toggleRecordingInputLatency.name": "摺疊記錄輸入延遲",
    "action.turnInto.name": "轉換成",
    "action.turnIntoCollection.title": "轉換成資料庫",
    "action.turnPageIntoWiki.caption":
      "建立廣泛的頁面視圖，並依擁有者、標籤、驗證等更多項目整理內容",
    "action.turnPageIntoWiki.fullName": "轉換成知識庫",
    "action.turnPageIntoWiki.name": "轉換為知識庫",
    "action.turnPreviewIntoMention": "轉換成提及",
    "action.turnintoInline.name": "轉換成內嵌",
    "action.turnintoPage.name": "轉換成頁面",
    "action.turnintoSimpleTable.name": "轉換成簡單的表格",
    "action.underline.name": "底線",
    "action.undo.name": "還原",
    "action.undoTurnIntoWiki.description":
      "這會從你的頁面中移除擁有者和驗證等屬性",
    "action.undoTurnIntoWiki.message":
      "確定要將 <bold>{pageName}</bold> 轉換回正常頁面嗎？",
    "action.undoTurnPageIntoWiki.name": "復原知識庫轉換",
    "action.unlockDatabaseName.name": "解鎖資料庫",
    "action.unlockDatabaseViews.name": "解鎖視圖",
    "action.unlockKnowledgeBaseName.name": "解鎖知識庫",
    "action.unlockPageName.name": "解鎖頁面",
    "action.unlockWikiName.name": "解鎖知識庫",
    "action.unpin.name": "從側邊欄移除",
    "action.unsyncPage.name": "從離線中移除",
    "action.unsyncTransclusionContainer.fuzzySearchKeywords":
      "取消同步所有取消群組",
    "action.unsyncTransclusionContainerName.name": "全部取消同步",
    "action.unsyncTransclusionReference.fuzzySearchKeywords":
      "取消同步取消群組",
    "action.unsyncTransclusionReference.name": "取消同步",
    "action.urlTurnedBookmark.snackBarMessage":
      "貼上的 URL 不可內嵌，但可轉換為書籤！",
    "action.viewAnalytics.name": "查看分析",
    "action.viewOriginal.name": "查看原始內容",
    "action.whatIsNotion.name": "什麼是 Notion？",
    "action.workAtNotion.name": "在 Notion 就職",
    "action.wrapAllColumns.name": "所有資料欄換行",
    "action.wrapCode.fuzzySearchKeywords":
      "Wrap Code 代码 daima dai'ma 换行 huanhang huan'hang",
    "action.wrapCode.label": "程式換行",
    "action.zoomIn.name": "放大",
    "action.zoomOut.name": "縮小",
    "activateReferral.dialogError.cannotInviteSelf.errorMessage":
      "你不能邀請自己",
    "activateReferral.dialogError.emailNotEligible.errorMessage":
      "此電子郵件地址不符合引薦計劃的使用條例。如果你認為這是個錯誤，請與支援人員聯絡。",
    "activateReferral.dialogError.invitationCreditAlreadyApplied.errorMessage":
      "你已經用了邀請點數。",
    "activateReferral.dialogError.noValidReferral.errorMessage":
      "找不到有效的推薦。",
    "activateReferral.dialogError.referralAlreadyActivated.errorMessage":
      "推薦已被啟用。",
    "activateReferral.dialogError.referringUserNotFound.errorMessage":
      "找不到推薦使用者。",
    "activateReferral.dialogError.userAlreadySignedUp.errorMessage":
      "使用者已經註冊",
    "activeImports.status.inProgress": "進行中",
    "activity.accessRequested.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 要求存取 {pageName}}}",
    "activity.accessRequested.messageLabel": "來自{author}的訊息",
    "activity.accessRequestedMembership.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已申請 {invitee} 成為工作區成員}}",
    "activity.accessRequestedMembershipFromGuest.header":
      "{invitee} 要求成為工作區成員",
    "activity.actions.unarchiveButton.label": "取消歸檔",
    "activity.blockEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {pageTitle}}}",
    "activity.collectionCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 建立了 {collectionTitle}}}",
    "activity.collectionEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {collectionTitle}}}",
    "activity.collectionPropertyCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中建立了屬性 {collectionPropertyTitle}}}",
    "activity.collectionPropertyDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了屬性 {collectionPropertyTitle}}}",
    "activity.collectionPropertyEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中編輯了屬性 {collectionPropertyTitle}}}",
    "activity.collectionRowCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 建立了 {pageTitle}}}",
    "activity.collectionRowDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了 {pageTitle}}}",
    "activity.collectionViewCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中建立了視圖 {collectionViewTitle}}}",
    "activity.collectionViewDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了視圖 {collectionViewTitle}}}",
    "activity.collectionViewEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中編輯了 {collectionViewTitle}}}",
    "activity.commentActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 評論了 {blockName}}}",
    "activity.deletedGroup.placeholder": "已刪除的群組",
    "activity.emailEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 將電子郵件從 {oldEmail} 變更為 {newEmail}}}",
    "activity.groupMentionActivity.header":
      "{authorOrAuthors} 在 {pageName} 提到了 {groupName}",
    "activity.mentionActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {pageName} 中提及了你}}",
    "activity.pageLocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 鎖定了 {blockTitle}}}",
    "activity.pageUnlocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 解鎖了 {blockTitle}}}",
    "activity.permissionGroupTitles.deletedGroup": "已刪除的群組",
    "activity.permissionGroupTitles.untitledGroup": "無標題群組",
    "activity.permissionsActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 加入了 {pageOrSpaceName}}}",
    "activity.privateContentTransferred.header":
      "{authorPhrase} 已傳輸來自 {fromUserName} 的私人內容給你： {pageName}",
    "activity.reminderInActivity.header": "{pageTitle}中的提醒",
    "activity.replyButton.label": "回覆",
    "activity.restorePermissionsForActivity.header":
      "{numberOfAuthors, plural, one {{authorOrAuthors} {inSudoMode, select, true {使用系統管理員權限} other {}}恢復了 {pageOrSpaceName} 其繼承的存取權限；} other {{authorOrAuthors} 恢復了 {pageOrSpaceName} 其繼承的存取權限}}",
    "activity.restrictPermissionsForActivity.header":
      "{activity.restrictPermissionsForActivity.header, plural, other {{numberOfAuthors, plural, one {{authorOrAuthors} {inSudoMode, select, true {使用系統管理員權限} other {}} 限制了 {pageOrSpaceName} 的存取權限；} other {{authorOrAuthors} 限制了 {pageOrSpaceName} 的存取權限}}}}",
    "activity.teamAccessRequest.header": "{user} 要求成為 {teamName} 成員",
    "activity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 建立了私人頁面 {pageTitle}}}",
    "activity.topLevelBlockPrivateDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了私人頁面 {pageTitle}}}",
    "activity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 建立了工作區頁面 {pageTitle}}}",
    "activity.topLevelBlockWorkspaceDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了工作區頁面 {pageTitle}}}",
    "activity.untitledGroup.placeholder": "無標題的群組",
    "activity.untitledPlaceholder": "無標題",
    "activity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 建立了 {groupName} 群組}}",
    "activity.updatedPermissionGroupDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了 {groupName} 群組}}",
    "activity.updatedPermissionGroupEdit.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {groupName} 群組}}",
    "activity.updatedPermissionGroupEditedDefault.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {groupName} 群組}}",
    "activity.updatedPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 更新了 {pageOrSpaceName} 的權限}}",
    "activity.updatedPermissionsForActivityInSudoMode.header":
      "{numberOfAuthors, plural, one {{authorOrAuthors} 已使用系統管理員權限更新 {pageOrSpaceName}} other {{authorOrAuthors} 和 {pageOrSpaceName}}} 的權限",
    "activity.userInvitedActivityGroupId.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 將你加入了 {groupName} 群組}}",
    "activity.userInvitedActivityGroupIdByBot.header":
      "你已被加入到 {groupName} 群組",
    "activity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你加入 {blockName}}}",
    "activity.userInvitedActivityNavigableBlockByBot.header":
      "你已受邀加入 {blockName}",
    "activity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你加入 {spaceName}}}",
    "activity.userInvitedActivityOtherInviteByBot.header":
      "你已被邀請加入{spaceName}",
    "activity.userInvitedToTeamActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你加入 {teamName} 團隊空間}}",
    "activity.verificationExpired.contentWithTimestamp":
      "上次驗證者：{person}，從 {startDate} 至 {endDate}",
    "activity.verificationExpired.contentWithoutTimestamp":
      "上次驗證者：{person}",
    "activity.verificationExpired.header":
      "<boldtext>{pageTitle}</boldtext> 的驗證已過期",
    "activity.viewMoreButton.label": "查看其餘 {moreCount} 則",
    "activitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>及其他 {numberOfOtherAuthors} 位}}",
    "activitySection.authorPhrase.forMoreThanTwoAuthorsCurrentUser.label":
      "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>、你及其他 {numberOfOtherAuthors} 位作者}}",
    "activitySection.authorPhrase.forNoAuthors.label": "某人",
    "activitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "activitySection.authorPhrase.forOneAuthorCurrentUser.label": "你",
    "activitySection.authorPhrase.forTwoAuthors.label":
      "<b>{firstAuthor}</b>和<b>{secondAuthor}</b>",
    "activitySection.authorPhrase.forTwoAuthorsCurrentUser.label":
      "<b>{firstAuthor}</b> 和你",
    "activitySection.viewVersionForUpdate.tooltip": "查看本次更新後的版本",
    "activityUpdate.unknownErrorLoadingActivities.message": "出了些問題。",
    "activityUpdates.clearFilters": "清除",
    "activityUpdates.filterMenu.byDate": "日期範圍",
    "activityUpdates.filterMenu.byType.addItemLabel": "加入活動類型",
    "activityUpdates.filterMenu.byType.resultSectionTitle": "活動類型",
    "activityUpdates.filterMenu.byType.search": "搜尋類型",
    "activityUpdates.filterMenu.byType.title": "活動類型",
    "activityUpdates.offlineMessage": "請連接網路後查看動態。",
    "actorHelpers.anonymousPlaceholder": "匿名的",
    "actorHelpers.userFullName": "{lastName} {firstName}",
    "addMembersModal.caption": "這些電子郵件將以記帳成員身分加入到你的工作區。",
    "addMembersModal.info": "瞭解加入的成員",
    "addMembersModal.inviteFail.toast": "無法將 {users} 邀請至工作區。",
    "addMembersModal.inviteSuccess.toast": "成功將 {users} 邀請至工作區。",
    "addMembersModal.requestInvitesButton.label": "邀請",
    "addMembersModal.title": "將成員加入到工作區。",
    "addOn.additionalFeatures.title": "其它功能",
    "addOn.ai.title": "附加元件",
    "addOnLimitUsage.description.approachingLimit.admins":
      "{spaceName} 已使用提供給此工作區的 {usageLimit} 個免費回應的 {spaceUsage}。",
    "addOnLimitUsage.description.usedAllFreeResponses.admins":
      "{spaceName} 已用光他們所有的免費 AI 回應。",
    "addOnUpgrade.confirmation.costSection.annual.twentyPercentDiscountMessage":
      "<bold>年度折扣 (20%)</bold>",
    "addOnUpgrade.confirmation.costSection.currentPlanCost":
      "目前的 <bold>{plan}</bold> 費用",
    "addOnUpgrade.confirmation.costSection.currentPlanCostWithMembers":
      "（{memberCount, plural, one {{memberCount} 位成為} other {{memberCount} 位成員}} x 每月價格為 {price}）",
    "addOnUpgrade.confirmation.costSection.interval.label":
      "{interval, select, month {每月} other {每年}}",
    "addOnUpgrade.confirmation.costSection.perMonth.label": "每月",
    "addOnUpgrade.confirmation.costSection.specialDiscount":
      "<bold>特別折扣 ({percentage})</bold>",
    "addOnUpgrade.confirmation.costSection.specialDiscount.annualMessage":
      "適用於你的年度期限",
    "addOnUpgrade.confirmation.costSection.specialDiscount.annualPlanMessage":
      "適用於年度方案",
    "addOnUpgrade.confirmation.costSection.specialDiscount.threeMonthsMessage":
      "適用於未來 3 個月",
    "addOnUpgrade.confirmation.costSection.specialDiscounts.fiftyPercent":
      "50%",
    "addOnUpgrade.confirmation.costSection.specialDiscounts.fortyPercent":
      "40%",
    "addOnUpgrade.confirmation.costSection.specialDiscounts.sixtyPercent":
      "60%",
    "addOnUpgrade.confirmation.costSection.specialDiscounts.thirtyPercent":
      "30%",
    "addOnUpgrade.confirmation.costSection.specialDiscounts.twentyPercent":
      "20%",
    "addOnUpgrade.confirmation.costSection.taxes": "稅金：",
    "addOnUpgrade.confirmation.costSection.total": "總計",
    "addOnUpgrade.confirmation.costSection.unlimitedAI":
      "<bold>Notion AI</bold> 費用",
    "addOnUpgrade.confirmation.costSection.unlimitedAI.memberInfo":
      "（{memberCount, plural, one {{memberCount} 位成為} other {{memberCount} 位成員}} x 每月價格為 {price}）",
    "addOnUpgrade.confirmation.description.admins":
      "使用 Notion AI 為 {spaceName} 的所有成員解除限制。",
    "addOnUpgrade.confirmation.lastFour":
      "末碼為 {lastFourDigits} 的 {cardBrand}",
    "addOnUpgrade.confirmation.monthlyCost.title": "新費用",
    "addOnUpgrade.confirmation.paymentMethod.title": "付款方式",
    "addOnUpgrade.confirmation.prorated.description":
      "性能須遵守<fairUsePolicies>公平使用政策</fairUsePolicies>。{br}按一下「確認購買」即表示你同意「<terms>Notion AI 補充條款</terms>」。",
    "addOnUpgrade.description.admins":
      "你的一次性促銷活動已用完。若要繼續使用 AI 功能，請為工作區購買更多 AI 使用權限",
    "addOnUpgrade.description.nonAdmins":
      "你工作區的一次性 Notion AI 促銷活動已結束。聯絡工作區管理員以購買無限 AI 供你的團隊使用。",
    "addOnUpgrade.title": "你的工作區已用完其 Notion AI 促銷活動",
    "addOnUpgrade.title.admin": "取得更多 Notion AI",
    "addOnUpgrade.title.nonAdmin": "你的工作區已用完其 Notion AI 促銷活動",
    addOnUpgradeModal: "確定要將 Notion AI 自你的方案移除嗎？",
    "addOnUpgradeModal.cancellation.description":
      "這會在你的帳單週期結束時移除。你可以隨時重新加入。",
    "addOnUpgradeModal.cancellation.title":
      "確定要將 Notion AI 自你的方案移除嗎？",
    "addOnUpgradeModal.confirmPurchase.button.label": "確認購買",
    "addOnUpgradeModal.coupon.fiftyPercent.label": "50% 折扣",
    "addOnUpgradeModal.coupon.fortyPercent.label": "40% 折扣",
    "addOnUpgradeModal.coupon.sixtyPercent.label": "60% 折扣",
    "addOnUpgradeModal.coupon.thirtyPercent.label": "30% 折扣",
    "addOnUpgradeModal.coupon.twentyPercent.label": "20% 折扣",
    "addOnUpgradeModal.errorMessage.notAdmin":
      "你無權將此工作區升級至附加元件。如果你認為這是個錯誤，請與系統管理員聯絡。",
    "addOnUpgradeModal.errorMessage.switchPlanFromInAppPurchase":
      "你目前透過 Apple 的程式內購買完成訂閱。若要更換方案，請先取消 Apple 的訂閱。",
    "addOnUpgradeModal.gotIt.button.label": "知道了",
    "addOnUpgradeModal.immediateCancellation.description":
      "這會立即自你的方案中移除。你可以隨時重新加入。",
    "addOnUpgradeModal.mobileMessage.button.label":
      "使用網頁或桌面應用程式將 Notion AI 加入到你的方案，然後解除限制。",
    "addOnUpgradeModal.mobileMessage.ios.button.label":
      "你沒有免費的 AI 可用了。",
    "addOnUpgradeModal.noButton.label": "取消",
    "addOnUpgradeModal.purchase.button.label": "購買",
    "addOnUpgradeModal.yesButton.label": "自方案移除",
    "adminAPIRequest.loadingMessage": "載入中…",
    "adminConnectionsSettings.autoApproveBuiltByNotion.caption":
      "將此切換至啟用，核准所有工作區成員可安裝<helpcenterlink>由 Notion 建置</helpcenterlink>連線。",
    "adminConnectionsSettings.autoApproveBuiltByNotion.title":
      "自動核准<builtbynotion>由 Notion 建置</builtbynotion>連線",
    "adminConnectionsSettings.connectionRestrictions.allowList.caption":
      "工作區成員僅能安裝由管理員預先核准的連線。",
    "adminConnectionsSettings.connectionRestrictions.info.title":
      "管理員隨時可以安裝和核准新連線。",
    "adminConnectionsSettings.connectionRestrictions.off.caption":
      "工作區成員可安裝任何連線。",
    "adminConnectionsSettings.requireApprovalSetting.allowList.workspaceOwner.caption":
      "工作區成員僅能安裝由工作區擁有者預先批准的連線。",
    "adminConnectionsSettings.requireApprovalSetting.off.caption":
      "工作區成員可安裝任何新連線。",
    "adminConnectionsSettings.requireApprovalSetting.title": "限制成員安裝連線",
    "adminConnectionsSettings.search.button.label":
      "{plusIcon}&nbsp; 新增已核准連線",
    "adminConnectionsSettings.search.input.placeholder": "依姓名或整合 ID 新增",
    "adminConnectionsSettings.table.allowIntegrations.title":
      "已核准的連線 {numberOfIntegrations}",
    "adminConnectionsSettings.table.default.title":
      "所有連線 {numberOfIntegrations}",
    "adminConnectionsSettings.table.securityAndCompliance.title": "安全与合规",
    "adminConnectionsSettingsAddComplianceMenu.search.button.label":
      "{plusIcon}&nbsp；添加连接",
    "adminContentSearchTab.description":
      "使用篩選器在工作區中搜尋任何頁面，包括私人頁面。只有工作區擁有者可以使用內容搜尋。",
    "adminContentSearchTab.export": "匯出結果",
    "adminContentSearchTab.offline.message": "請連接網路後存取內容搜尋。",
    "adminContentSearchTab.pagesTable.acknowledgement.confirm": "認可",
    "adminContentSearchTab.pagesTable.acknowledgement.disclaimer":
      "身為工作區擁有者，你可以使用內容搜尋尋找沒有存取權限的頁面，包括其他工作區成員的私人頁面。請諮詢貴組織的法務部門，了解如何使用此功能。稽核日誌檔會記錄在此採取的行動。",
    "adminContentSearchTab.pagesTable.acknowledgement.disclaimerTitle":
      "使用此功能前",
    "adminContentSearchTab.pagesTable.acknowledgement.learnMore": "了解更多",
    "adminContentSearchTab.pagesTable.audience.name": "受眾",
    "adminContentSearchTab.pagesTable.audienceCell.private": "私人",
    "adminContentSearchTab.pagesTable.audienceCell.publishedToWeb":
      "已發佈到網路",
    "adminContentSearchTab.pagesTable.audienceCell.sharedExternally":
      "已於外部分享",
    "adminContentSearchTab.pagesTable.audienceCell.sharedInternally":
      "已於內部分享",
    "adminContentSearchTab.pagesTable.createdBy.name": "建立者",
    "adminContentSearchTab.pagesTable.createdTime.name": "建立時間",
    "adminContentSearchTab.pagesTable.empty": "你的查詢找不到頁面。",
    "adminContentSearchTab.pagesTable.error.confirm": "重試",
    "adminContentSearchTab.pagesTable.error.description":
      "我們在載入結果時出現問題。嘗試再次執行搜尋。",
    "adminContentSearchTab.pagesTable.error.title": "出了些問題",
    "adminContentSearchTab.pagesTable.filters.audience.caption.external":
      "與其他工作區成員和訪客分享的頁面。",
    "adminContentSearchTab.pagesTable.filters.audience.caption.internal":
      "與其他工作區成員分享的頁面。",
    "adminContentSearchTab.pagesTable.filters.audience.caption.private":
      "只有一位工作區成員可以存取的頁面。",
    "adminContentSearchTab.pagesTable.filters.audience.caption.publishedToWeb":
      "任何人都可以在網路上看到的頁面",
    "adminContentSearchTab.pagesTable.filters.audience.clearButton": "清除",
    "adminContentSearchTab.pagesTable.filters.audience.doneButton": "完成",
    "adminContentSearchTab.pagesTable.filters.audience.label.external":
      "已於外部分享",
    "adminContentSearchTab.pagesTable.filters.audience.label.internal":
      "已於內部分享",
    "adminContentSearchTab.pagesTable.filters.audience.label.private":
      "已於私下分享",
    "adminContentSearchTab.pagesTable.filters.audience.label.publishedToWeb":
      "已發佈到網路",
    "adminContentSearchTab.pagesTable.filters.audience.title": "受眾",
    "adminContentSearchTab.pagesTable.filters.createdBy.title": "建立者",
    "adminContentSearchTab.pagesTable.filters.createdOn.option": "建立時間",
    "adminContentSearchTab.pagesTable.filters.createdOn.title": "建立時間",
    "adminContentSearchTab.pagesTable.filters.createdOn.titleWithDateRange":
      "建立時間：{dateRangeString}",
    "adminContentSearchTab.pagesTable.filters.lastEditedOn.option":
      "上次編輯時間",
    "adminContentSearchTab.pagesTable.filters.lastEditedOn.title":
      "上次編輯時間",
    "adminContentSearchTab.pagesTable.filters.lastEditedOn.titleWithDateRange":
      "上次編輯時間：{dateRangeString}",
    "adminContentSearchTab.pagesTable.filters.query.placeholder":
      "依頁面 ID 或標題搜尋",
    "adminContentSearchTab.pagesTable.filters.query.searchButton": "搜尋",
    "adminContentSearchTab.pagesTable.filters.sharedWith.title": "分享對象",
    "adminContentSearchTab.pagesTable.filters.teams.caption.closed": "封閉式",
    "adminContentSearchTab.pagesTable.filters.teams.caption.default": "預設式",
    "adminContentSearchTab.pagesTable.filters.teams.caption.open": "開放式",
    "adminContentSearchTab.pagesTable.filters.teams.caption.private": "私人式",
    "adminContentSearchTab.pagesTable.filters.teams.clearButton": "清除",
    "adminContentSearchTab.pagesTable.filters.teams.doneButton": "完成",
    "adminContentSearchTab.pagesTable.filters.teams.noResultsMessage":
      "找不到結果。",
    "adminContentSearchTab.pagesTable.filters.teams.placeholder":
      "搜尋團隊空間...",
    "adminContentSearchTab.pagesTable.filters.teams.title": "團隊空間",
    "adminContentSearchTab.pagesTable.filters.users.clearButton": "清除",
    "adminContentSearchTab.pagesTable.filters.users.doneButton": "完成",
    "adminContentSearchTab.pagesTable.filters.users.groupCaption": "群組",
    "adminContentSearchTab.pagesTable.filters.users.guestCaption": "訪客",
    "adminContentSearchTab.pagesTable.filters.users.memberCaption": "成員",
    "adminContentSearchTab.pagesTable.filters.users.noResultsMessage":
      "找不到結果。",
    "adminContentSearchTab.pagesTable.filters.users.placeholder":
      "搜尋使用者...",
    "adminContentSearchTab.pagesTable.filters.users.usersAndGroupsPlaceholder":
      "搜尋使用者和群組...",
    "adminContentSearchTab.pagesTable.filters.users.usersPlaceholder":
      "搜尋使用者...",
    "adminContentSearchTab.pagesTable.lastEditedBy.name": "上次編輯者",
    "adminContentSearchTab.pagesTable.lastEditedTime.name": "上次編輯時間",
    "adminContentSearchTab.pagesTable.location.name": "位置",
    "adminContentSearchTab.pagesTable.locationCell.private": "私人",
    "adminContentSearchTab.pagesTable.locationCell.shared": "已分享",
    "adminContentSearchTab.pagesTable.page.actions.changePermissions":
      "變更權限",
    "adminContentSearchTab.pagesTable.page.actions.copyLink": "複製連結到頁面",
    "adminContentSearchTab.pagesTable.page.actions.openLink": "在新分頁開啟",
    "adminContentSearchTab.pagesTable.page.name": "頁面",
    "adminContentSearchTab.pagesTable.sharedWith.name": "分享對象",
    "adminContentSearchTab.pagesTable.sharedWithCell.botMenuItem.createdBy":
      "由 {creatorName} 建立",
    "adminContentSearchTab.pagesTable.sharedWithCell.group": "群組",
    "adminContentSearchTab.pagesTable.sharedWithCell.guest": "訪客",
    "adminContentSearchTab.pagesTable.sharedWithCell.member": "成員",
    "adminContentSearchTab.pagesTable.sharedWithCell.message":
      "{groupsCount, plural, one {{groupsCount} 個群組} other {{groupsCount} 個群組}}, {peopleCount, plural, one {{peopleCount} 位人員} other {{peopleCount} 位人員}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.multipleGroups":
      "{numGroups, plural, other {{numGroups} 個群組}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.multipleGuests":
      "{numGuests, plural, other {{numGuests} 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.multipleUsers":
      "{numMembers, plural, other {{numMembers} 位成員}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.multipleUsersAndGuests":
      "{numMembers, plural, one {1 位成員} other {{numMembers} 位成員}}, {numGuests, plural, one {1 位訪客} other {{numGuests} 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.orphanedPage": "沒有人",
    "adminContentSearchTab.pagesTable.sharedWithCell.orphanedPage.tooltip":
      "沒有任何人員、群組或團隊空間可以存取此頁面。",
    "adminContentSearchTab.pagesTable.sharedWithCell.separator": "，",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithBots":
      "{numBots, plural, other {# 個連線}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithGroups":
      "{numGroups, plural, other {# 個群組}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithGuests":
      "{numGuests, plural, other {# 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithMembers":
      "{numMembers, plural, other {# 位成員}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithTeamMembers":
      "團隊成員",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithTeamMembersAndGuests":
      "團隊成員，{numGuests, plural, one {1 位訪客} other {{numGuests} 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithTeamOwners":
      "團隊擁有者",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithTeamOwnersAndGuests":
      "團隊擁有者，{numGuests, plural, one {1 位訪客} other {{numGuests} 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithWeb":
      "已發佈到網路",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithWorkspaceMembers":
      "工作區成員",
    "adminContentSearchTab.pagesTable.sharedWithCell.sharedWithWorkspaceMembersAndGuests":
      "工作區成員，{numGuests, plural, one {1 位訪客} other {{numGuests} 位訪客}}",
    "adminContentSearchTab.pagesTable.sharedWithCell.spaceMembers":
      "{spaceName} 的成員",
    "adminContentSearchTab.pagesTable.sharedWithCell.teamMembers":
      "{teamTitle} 的成員",
    "adminContentSearchTab.pagesTable.sharedWithCell.teamOwners":
      "{teamTitle} 的擁有者",
    "adminContentSearchTab.pagesTable.sharedWithCell.unknown": "部分使用者",
    "adminContentSearchTab.pagesTable.sharedWithCell.unknownTeamName":
      "私人團隊空間",
    "adminContentSearchTab.pagesTable.sharedWithCell.untitledPage": "無標題",
    "adminContentSearchTab.pagesTable.suggestions.description":
      "使用篩選器尋找具有特定分享和權限設定的頁面，例如：",
    "adminContentSearchTab.pagesTable.suggestions.sharedToWeb":
      "搜尋頁面 <filter></filter>",
    "adminContentSearchTab.pagesTable.suggestions.title":
      "在你的工作區中搜尋頁面",
    "adminContentSearchTab.sharedWith.permissions.commentOnly": "可以評論",
    "adminContentSearchTab.sharedWith.permissions.editor": "全部存取權限",
    "adminContentSearchTab.sharedWith.permissions.none": "無",
    "adminContentSearchTab.sharedWith.permissions.readAndWrite": "可以編輯",
    "adminContentSearchTab.sharedWith.permissions.reader": "可以查看",
    "adminContentSearchTab.title": "內容搜尋",
    "adminIntegrationSettings.integrationRestrictions.allowList.title":
      "僅限核准清單",
    "adminIntegrationSettings.integrationRestrictions.off.title": "沒有限制",
    "adminIntegrationSettings.search.label.noResults": "沒有結果",
    "adminIntegrationSettings.search.subtitle.notionBuilt": "由 Notion 開發",
    "adminIntegrationSettings.search.title.popularIntegrations": "熱門整合",
    "adminIntegrationSettings.table.default.title":
      "所有整合數：{numberOfIntegrations}",
    "adminLoginAsUser.loggingInAs.loadingMessage": "以 {userEmail} 登入",
    "ai.placeholder":
      "輸入<spaceKey>空格</spaceKey>開啟<sparkles> AI</sparkles>，或 <slashKey>/</slashKey> 打開指令選單…",
    "ai.placeholder.compact":
      "輸入<spaceKey>空格</spaceKey>開啟<sparkles> AI </sparkles>，或 <slashKey> /</slashKey> 打開指令選單…",
    "aiBlock.conclusion": "結論",
    "aiBlock.findActionItems": "使用 AI 尋找待辦事項",
    "aiBlock.generate.label": "產生",
    "aiBlock.generate.loading.label": "產生中…",
    "aiBlock.generated": "由 AI 產生",
    "aiBlock.helpMeWrite": "透過 AI 的協助，我想要…",
    "aiBlock.intent": "此頁面的摘要",
    "aiBlock.summarize": "使用 AI 摘要此文件",
    "aiBlock.summarized": "由 AI 摘要",
    "aiBlockBlock.update": "更新",
    "aiBlockBlock.update.loading": "更新中…",
    "aiWaitlist.stubbed.title": "給我 AI 功能",
    "aiWaitlistEnrolled.body.cta": "讓寫作加倍快速、思考加倍廣泛",
    "aiWaitlistEnrolled.body.imagePreview":
      "Notion 工作區擁有者啟用 Notion AI 後，你在下一次登入時應該會看到確認公告：",
    "aiWaitlistEnrolled.body.label1": "{name}，你好！",
    "aiWaitlistEnrolled.body.label2":
      "好消息：你已受邀試用 Notion AI 的私人 Alpha 版！只需要兩個步驟流程，即可開始使用：",
    "aiWaitlistEnrolled.body.label2.workspaceOwners":
      "好消息：你已受邀試用 Notion AI 的私人 Alpha 版！下次登入帳戶時，你就會看到看到公告。請務必在此<strong>開啟 AI</strong>：",
    "aiWaitlistEnrolled.body.label3":
      "前往「設定與成員」→「成員」以尋找工作區擁有者",
    "aiWaitlistEnrolled.body.label4":
      "如果你不確定你的工作區擁有者是誰，請前往「設定與成員」→「成員」。",
    "aiWaitlistEnrolled.body.label5":
      "啟用 AI 後，你就可以立即開始使用，以便協助你對想法腦力激盪，並從會議記錄產生摘要和待辦事項；甚至是撰寫新資料的草稿。若要深入了解 Notion AI 的功能和限制，請閱讀<guidelink>此指南</guidelink>",
    "aiWaitlistEnrolled.body.label5a":
      "既然現在啟用了 Notion AI，你就能夠立即開始用於對想法進行腦力激盪、從會議記錄產生摘要和待辦事項，甚至是草擬新的資料。<guidelink>檢閱此指南</guidelink>並立即探索你可以使用 Notion AI 的所有方式。",
    "aiWaitlistEnrolled.body.label5b":
      "接著，你可以立即用於對想法進行腦力激盪、從會議記錄產生摘要和待辦事項 — 甚至是草擬新的資料。<guidelink>檢閱此指南</guidelink>並立即探索你可以使用 Notion AI 的所有方式。",
    "aiWaitlistEnrolled.body.label6":
      "很高興你跟我們一起加入這趟旅程，我們等不及要看看你的創作內容了。",
    "aiWaitlistEnrolled.body.labelHint.workspaceOwners":
      "你可以從 Notion 桌面版應用程式或你最愛的網頁瀏覽器，前往<strong>「設定和成員」→「工作區設定」</strong>，然後啟用 Notion AI。",
    "aiWaitlistEnrolled.body.noteToOwner": "給你工作區擁有者的附註",
    "aiWaitlistEnrolled.body.noteToOwnerText1":
      "你好！Notion 團隊給了我 <link>Notion AI</link> 私人 Alpha 版的存取權限。因為我不是工作區擁有者，所以需要你協助啟用該功能。",
    "aiWaitlistEnrolled.body.noteToOwnerText2":
      "你會在<em>「設定和成員」→「工作區設定」</em>中找到摺疊列表。請注意，此設定只在你從 Notion 桌面版應用程式或網頁瀏覽器登入時可用。",
    "aiWaitlistEnrolled.body.noteToOwnerText3":
      "請注意：啟用 Notion AI 時，該功能只會開放給 Alpha 版等候清單排除人員，而非整個工作區。",
    "aiWaitlistEnrolled.body.noteToOwnerText4": "感謝你的協助！",
    "aiWaitlistEnrolled.closingText": "謝謝你。{br} Notion 團隊　敬上",
    "aiWaitlistEnrolled.text.label": "讓寫作加倍快速、思考加倍廣泛",
    "aiWaitlistEnrolled.titleOfEmail": "歡迎使用 Notion AI！",
    "aiWaitlistEnrolledEmail.emailToWorkspaceOwner.body":
      "你好！Notion 剛給了我 Notion AI 私人 Alpha 版的存取權限 (https://notion.so/product/ai)。因為我不是工作區擁有者，所以需要你協助啟用該功能。- 請前往「設定和成員」→「工作區設定」。你需要桌上型電腦才能操作，而不是行動裝置。- 當你按一下摺疊列表時，則該功能只會針對等候清單排除人員開啟。",
    "aiWaitlistEnrolledEmail.emailToWorkspaceOwner.subject": "啟用 Notion AI",
    "aiWaitlistEnrolledEmail.subject.label":
      "你離開了等候清單！試用 Notion AI 的時候到了",
    "aiWaitlistReferralLinkEmail.body.cta":
      "你可以將推薦連結傳送給朋友，以便更快輪到你！",
    "aiWaitlistReferralLinkEmail.body.label":
      "感謝加入 Notion AI 的等候清單。你目前是等候清單的第 {position} 個使用權限順位。",
    "aiWaitlistReferralLinkEmail.body.position":
      "隨著時間推移，我們將逐步傳送邀請，然後你可以在下方分享推薦連結，以便更快輪到你。",
    "aiWaitlistReferralLinkEmail.body.waitlistPageUrl":
      "如需查看你的順位，請造訪 <link>{waitlistPageUrl}</link>",
    "aiWaitlistReferralLinkEmail.subject.label":
      "你加入了 Notion AI 的等候清單！",
    "aiWaitlistReferralLinkEmail.text.label":
      "Notion AI 是你的第二顆腦袋，想問什麼都可以。",
    "aiWaitlistReferralLinkEmail.titleOfEmail": "Notion AI 即將推出",
    "aiWaitlistSpaceEnrolledEmail.body.cta":
      "讓寫作加倍快速、思考加倍廣泛，並且提升你的創造力。",
    "aiWaitlistSpaceEnrolledEmail.body.label":
      "好消息：我們開啟了 Notion AI 等候清單並邀請了你的團隊。",
    "aiWaitlistSpaceEnrolledEmail.body.label1": "{name}，你好！",
    "aiWaitlistSpaceEnrolledEmail.body.label2":
      "身為工作區擁有者，你可以開啟 Notion AI 並前往「設定與成員」→「工作區設定」，為工作區中的每個人啟用功能。",
    "aiWaitlistSpaceEnrolledEmail.body.label3":
      "啟用 AI 後，你和你同事就可以立即開始使用，以便協助對想法腦力激盪，並從你的會議記錄產生摘要和待辦事項；甚至是為你撰寫新資料的草稿。若要深入了解 Notion AI 的功能和限制，請閱讀<guideLink>此指南</guideLink>。",
    "aiWaitlistSpaceEnrolledEmail.body.label4":
      "很高興你的團隊跟我們一起加入這趟旅程，我們等不及要看看你的創作內容了。",
    "aiWaitlistSpaceEnrolledEmail.subject.label":
      "我們開啟了 Notion AI 等候清單 / 為你的團隊啟用了 AI",
    "aiWaitlistSpaceEnrolledEmail.text.label":
      "Notion AI 是你的第二顆腦袋，想問什麼都可以。",
    "aiWaitlistSpaceEnrolledEmail.titleOfEmail": "歡迎使用 Notion AI！",
    "aliasBlock.comment.noAccess.subtitle": "你無權查看此頁面及其評論",
    "aliasBlock.comment.noAccess.title": "無法存取頁面評論",
    "allTimeZones.Africa/Abidjan": "非洲/阿必尚",
    "allTimeZones.Africa/Accra": "非洲/阿克拉",
    "allTimeZones.Africa/Addis_Ababa": "非洲/阿迪斯阿貝巴",
    "allTimeZones.Africa/Algiers": "非洲/阿爾及爾",
    "allTimeZones.Africa/Asmara": "非洲/阿斯馬拉",
    "allTimeZones.Africa/Asmera": "非洲/阿斯馬拉",
    "allTimeZones.Africa/Bamako": "非洲/巴馬科",
    "allTimeZones.Africa/Bangui": "非洲/班基",
    "allTimeZones.Africa/Banjul": "非洲/班竹",
    "allTimeZones.Africa/Bissau": "非洲/比索",
    "allTimeZones.Africa/Blantyre": "非洲/布藍泰爾",
    "allTimeZones.Africa/Brazzaville": "非洲/布拉薩市",
    "allTimeZones.Africa/Bujumbura": "非洲/布松布拉",
    "allTimeZones.Africa/Cairo": "非洲/開羅",
    "allTimeZones.Africa/Casablanca": "非洲/卡薩布蘭卡",
    "allTimeZones.Africa/Ceuta": "非洲/休達",
    "allTimeZones.Africa/Conakry": "非洲/科納克里",
    "allTimeZones.Africa/Dakar": "非洲/達卡",
    "allTimeZones.Africa/Dar_es_Salaam": "非洲/達萊撒蘭",
    "allTimeZones.Africa/Djibouti": "非洲/吉布地",
    "allTimeZones.Africa/Douala": "非洲/杜阿拉",
    "allTimeZones.Africa/El_Aaiun": "非洲/阿尤恩",
    "allTimeZones.Africa/Freetown": "非洲/自由城",
    "allTimeZones.Africa/Gaborone": "非洲/嘉柏隆里",
    "allTimeZones.Africa/Harare": "非洲/哈拉雷",
    "allTimeZones.Africa/Johannesburg": "非洲/約翰尼斯堡",
    "allTimeZones.Africa/Juba": "非洲/朱巴",
    "allTimeZones.Africa/Kampala": "非洲/坎帕拉",
    "allTimeZones.Africa/Khartoum": "非洲/喀土穆",
    "allTimeZones.Africa/Kigali": "非洲/吉佳利",
    "allTimeZones.Africa/Kinshasa": "非洲/金夏沙",
    "allTimeZones.Africa/Lagos": "非洲/拉哥斯",
    "allTimeZones.Africa/Libreville": "非洲/自由市",
    "allTimeZones.Africa/Lome": "非洲/洛梅",
    "allTimeZones.Africa/Luanda": "非洲/魯安達",
    "allTimeZones.Africa/Lubumbashi": "非洲/羅彭巴布",
    "allTimeZones.Africa/Lusaka": "非洲/路沙卡",
    "allTimeZones.Africa/Malabo": "非洲/馬拉博",
    "allTimeZones.Africa/Maputo": "非洲/馬布多",
    "allTimeZones.Africa/Maseru": "非洲/馬塞盧",
    "allTimeZones.Africa/Mbabane": "非洲/墨巴本",
    "allTimeZones.Africa/Mogadishu": "非洲/摩加迪休",
    "allTimeZones.Africa/Monrovia": "非洲/蒙羅維亞",
    "allTimeZones.Africa/Nairobi": "非洲/奈洛比",
    "allTimeZones.Africa/Ndjamena": "非洲/恩加美納",
    "allTimeZones.Africa/Niamey": "非洲/尼阿美",
    "allTimeZones.Africa/Nouakchott": "非洲/諾克少",
    "allTimeZones.Africa/Ouagadougou": "非洲/瓦加杜古",
    "allTimeZones.Africa/Porto-Novo": "非洲/新港",
    "allTimeZones.Africa/Sao_Tome": "非洲/聖多美",
    "allTimeZones.Africa/Timbuktu": "非洲/廷巴克圖",
    "allTimeZones.Africa/Tripoli": "非洲/的黎波里",
    "allTimeZones.Africa/Tunis": "非洲/突尼斯",
    "allTimeZones.Africa/Windhoek": "非洲/溫吐克",
    "allTimeZones.America/Adak": "美洲/埃達克",
    "allTimeZones.America/Anchorage": "美洲/安克拉治",
    "allTimeZones.America/Anguilla": "美洲/安圭拉",
    "allTimeZones.America/Antigua": "美洲/安地卡",
    "allTimeZones.America/Araguaina": "美洲/阿拉瓜伊納",
    "allTimeZones.America/Argentina/Buenos_Aires": "美洲/阿根廷/布宜諾斯艾利斯",
    "allTimeZones.America/Argentina/Catamarca": "美洲/阿根廷/卡達馬卡",
    "allTimeZones.America/Argentina/ComodRivadavia":
      "美洲/阿根廷/里瓦達維亞海軍准將城",
    "allTimeZones.America/Argentina/Cordoba": "美洲/阿根廷/科多瓦",
    "allTimeZones.America/Argentina/Jujuy": "美洲/阿根廷/胡偉",
    "allTimeZones.America/Argentina/La_Rioja": "美洲/阿根廷/拉里奧哈",
    "allTimeZones.America/Argentina/Mendoza": "美洲/阿根廷/門多薩",
    "allTimeZones.America/Argentina/Rio_Gallegos": "美洲/阿根廷/里奧加耶戈斯",
    "allTimeZones.America/Argentina/Salta": "美洲/阿根廷/薩爾塔",
    "allTimeZones.America/Argentina/San_Juan": "美洲/阿根廷/聖胡安",
    "allTimeZones.America/Argentina/San_Luis": "美洲/阿根廷/聖路易斯",
    "allTimeZones.America/Argentina/Tucuman": "美洲/阿根廷/圖庫曼",
    "allTimeZones.America/Argentina/Ushuaia": "美洲/阿根廷/烏斯懷亞",
    "allTimeZones.America/Aruba": "美洲/阿魯巴",
    "allTimeZones.America/Asuncion": "美洲/亞松森",
    "allTimeZones.America/Atikokan": "美洲/阿蒂科肯",
    "allTimeZones.America/Atka": "美洲/阿特卡",
    "allTimeZones.America/Bahia": "美洲/巴伊亞",
    "allTimeZones.America/Bahia_Banderas": "美洲/班德拉斯灣",
    "allTimeZones.America/Barbados": "美洲/巴貝多",
    "allTimeZones.America/Belem": "美洲/貝倫",
    "allTimeZones.America/Belize": "美洲/貝里斯",
    "allTimeZones.America/Blanc-Sablon": "美洲/布朗薩布隆",
    "allTimeZones.America/Boa_Vista": "美洲/博阿維斯塔島",
    "allTimeZones.America/Bogota": "美洲/波哥大",
    "allTimeZones.America/Boise": "美洲/博伊西",
    "allTimeZones.America/Buenos_Aires": "美洲/布宜諾斯艾利斯",
    "allTimeZones.America/Cambridge_Bay": "美洲/劍橋灣",
    "allTimeZones.America/Campo_Grande": "美洲/格蘭德營",
    "allTimeZones.America/Cancun": "美洲/坎昆",
    "allTimeZones.America/Caracas": "美洲/卡拉卡斯",
    "allTimeZones.America/Catamarca": "美洲/卡達馬卡",
    "allTimeZones.America/Cayenne": "美洲/卡宴",
    "allTimeZones.America/Cayman": "美洲/開曼群島",
    "allTimeZones.America/Chicago": "美洲/芝加哥",
    "allTimeZones.America/Chihuahua": "美洲/赤瓦瓦",
    "allTimeZones.America/Coral_Harbour": "美洲/珍珠港",
    "allTimeZones.America/Cordoba": "美洲/科多瓦",
    "allTimeZones.America/Costa_Rica": "美洲/哥斯大黎加",
    "allTimeZones.America/Creston": "美洲/克雷斯頓",
    "allTimeZones.America/Cuiaba": "美洲/古雅巴",
    "allTimeZones.America/Curacao": "美洲/古拉果",
    "allTimeZones.America/Danmarkshavn": "美洲/格陵蘭",
    "allTimeZones.America/Dawson": "美洲/道森",
    "allTimeZones.America/Dawson_Creek": "美洲/道森河市",
    "allTimeZones.America/Denver": "美洲/丹佛",
    "allTimeZones.America/Detroit": "美洲/底特律",
    "allTimeZones.America/Dominica": "美洲/多明尼加",
    "allTimeZones.America/Edmonton": "美洲/艾德蒙頓",
    "allTimeZones.America/Eirunepe": "美洲/埃魯內佩",
    "allTimeZones.America/El_Salvador": "美洲/薩爾瓦多",
    "allTimeZones.America/Ensenada": "美洲/恩瑟納達",
    "allTimeZones.America/Fort_Nelson": "美洲/納爾遜堡",
    "allTimeZones.America/Fort_Wayne": "美洲/韋恩堡",
    "allTimeZones.America/Fortaleza": "美洲/福塔力沙",
    "allTimeZones.America/Glace_Bay": "美洲/格萊斯貝",
    "allTimeZones.America/Godthab": "美洲/哥特哈布",
    "allTimeZones.America/Goose_Bay": "美洲/古斯貝",
    "allTimeZones.America/Grand_Turk": "美洲/格蘭土克",
    "allTimeZones.America/Grenada": "美洲/格林納達",
    "allTimeZones.America/Guadeloupe": "美洲/哥德洛普",
    "allTimeZones.America/Guatemala": "美洲/瓜地馬拉",
    "allTimeZones.America/Guayaquil": "美洲/圭亞基爾",
    "allTimeZones.America/Guyana": "美洲/蓋亞納",
    "allTimeZones.America/Halifax": "美洲/哈利法克斯",
    "allTimeZones.America/Havana": "美洲/哈瓦那",
    "allTimeZones.America/Hermosillo": "美洲/埃莫西約",
    "allTimeZones.America/Indiana/Indianapolis":
      "美洲/印第安納州/印第安納波利斯",
    "allTimeZones.America/Indiana/Knox": "美洲/印第安納州/諾克斯",
    "allTimeZones.America/Indiana/Marengo": "美洲/印第安納州/馬倫戈",
    "allTimeZones.America/Indiana/Petersburg": "美洲/印第安納州/聖彼得堡",
    "allTimeZones.America/Indiana/Tell_City": "美洲/印第安納州/特爾城",
    "allTimeZones.America/Indiana/Vevay": "美洲/印第安納州/韋韋",
    "allTimeZones.America/Indiana/Vincennes": "美洲/印第安納州/湯森斯",
    "allTimeZones.America/Indiana/Winamac": "美洲/印第安納州/威納馬克",
    "allTimeZones.America/Indianapolis": "美洲/印第安納波利斯",
    "allTimeZones.America/Inuvik": "美洲/因紐維克",
    "allTimeZones.America/Iqaluit": "美洲/伊魁特",
    "allTimeZones.America/Jamaica": "美洲/牙買加",
    "allTimeZones.America/Jujuy": "美洲/胡偉",
    "allTimeZones.America/Juneau": "美洲/朱諾",
    "allTimeZones.America/Kentucky/Louisville": "美洲/肯塔基州/路易斯維爾",
    "allTimeZones.America/Kentucky/Monticello": "美洲/肯塔基州/蒙蒂塞洛",
    "allTimeZones.America/Knox_IN": "美洲/印第安納州諾克斯",
    "allTimeZones.America/Kralendijk": "美洲/卡拉蘭迪克",
    "allTimeZones.America/La_Paz": "美洲/拉帕茲",
    "allTimeZones.America/Lima": "美洲/利馬",
    "allTimeZones.America/Los_Angeles": "美洲/洛杉磯",
    "allTimeZones.America/Louisville": "美洲/路易斯維爾",
    "allTimeZones.America/Lower_Princes": "美洲/下太子區",
    "allTimeZones.America/Maceio": "美洲/馬瑟歐",
    "allTimeZones.America/Managua": "美洲/馬納瓜",
    "allTimeZones.America/Manaus": "美洲/瑪瑙斯",
    "allTimeZones.America/Marigot": "美洲/馬利格",
    "allTimeZones.America/Martinique": "美洲/馬丁尼克",
    "allTimeZones.America/Matamoros": "美洲/馬塔莫羅斯",
    "allTimeZones.America/Mazatlan": "美洲/馬札特蘭",
    "allTimeZones.America/Mendoza": "美洲/門多薩",
    "allTimeZones.America/Menominee": "美洲/梅諾米尼",
    "allTimeZones.America/Merida": "美洲/梅里達",
    "allTimeZones.America/Metlakatla": "美洲/梅特拉卡特拉",
    "allTimeZones.America/Mexico_City": "美洲/墨西哥城",
    "allTimeZones.America/Miquelon": "美洲/密克隆群島",
    "allTimeZones.America/Moncton": "美洲/蒙克頓",
    "allTimeZones.America/Monterrey": "美洲/蒙特利",
    "allTimeZones.America/Montevideo": "美洲/蒙特維多",
    "allTimeZones.America/Montreal": "美洲/蒙特婁",
    "allTimeZones.America/Montserrat": "美洲/蒙特色拉特島",
    "allTimeZones.America/Nassau": "美洲/拿索",
    "allTimeZones.America/New_York": "美洲/紐約",
    "allTimeZones.America/Nipigon": "美洲/尼皮貢",
    "allTimeZones.America/Nome": "美洲/諾姆",
    "allTimeZones.America/Noronha": "美洲/諾拉哈",
    "allTimeZones.America/North_Dakota/Beulah": "美洲/北達科他州/比尤拉",
    "allTimeZones.America/North_Dakota/Center": "美洲/北達科他州/中部",
    "allTimeZones.America/North_Dakota/New_Salem": "美洲/北達科他州/新薩勒姆",
    "allTimeZones.America/Ojinaga": "美洲/奧希納加",
    "allTimeZones.America/Panama": "美洲/巴拿馬",
    "allTimeZones.America/Pangnirtung": "美洲/皮納唐",
    "allTimeZones.America/Paramaribo": "美洲/巴拉馬利波",
    "allTimeZones.America/Phoenix": "美洲/鳳凰城",
    "allTimeZones.America/Port-au-Prince": "美洲/太子港",
    "allTimeZones.America/Port_of_Spain": "美洲/西班牙港",
    "allTimeZones.America/Porto_Acre": "美洲/亞克港",
    "allTimeZones.America/Porto_Velho": "美洲/韋柳港",
    "allTimeZones.America/Puerto_Rico": "美洲/波多黎各",
    "allTimeZones.America/Punta_Arenas": "美洲/蓬塔阿雷納斯",
    "allTimeZones.America/Rainy_River": "美洲/雷尼河區",
    "allTimeZones.America/Rankin_Inlet": "美洲/蘭金音萊特",
    "allTimeZones.America/Recife": "美洲/累西腓",
    "allTimeZones.America/Regina": "美洲/雷吉納",
    "allTimeZones.America/Resolute": "美洲/努納武特",
    "allTimeZones.America/Rio_Branco": "美洲/里約布蘭科",
    "allTimeZones.America/Rosario": "美洲/羅沙略",
    "allTimeZones.America/Santa_Isabel": "美洲/聖伊薩貝爾",
    "allTimeZones.America/Santarem": "美洲/聖塔倫",
    "allTimeZones.America/Santiago": "美洲/聖地牙哥",
    "allTimeZones.America/Santo_Domingo": "美洲/聖多明哥",
    "allTimeZones.America/Sao_Paulo": "美洲/聖保羅",
    "allTimeZones.America/Scoresbysund": "美洲/斯可比",
    "allTimeZones.America/Shiprock": "美洲/希普羅克峰",
    "allTimeZones.America/Sitka": "美洲/矽地卡",
    "allTimeZones.America/St_Barthelemy": "美洲/聖巴泰勒米",
    "allTimeZones.America/St_Johns": "美洲/聖約翰",
    "allTimeZones.America/St_Kitts": "美洲/聖克里斯多福",
    "allTimeZones.America/St_Lucia": "美洲/聖露西亞",
    "allTimeZones.America/St_Thomas": "美洲/聖湯瑪士",
    "allTimeZones.America/St_Vincent": "美洲/聖文森",
    "allTimeZones.America/Swift_Current": "美洲/斯威夫特卡倫特",
    "allTimeZones.America/Tegucigalpa": "美洲/德古西加巴",
    "allTimeZones.America/Thule": "美洲/土里島",
    "allTimeZones.America/Thunder_Bay": "美洲/桑德灣",
    "allTimeZones.America/Tijuana": "美洲/提華納",
    "allTimeZones.America/Toronto": "美洲/多倫多",
    "allTimeZones.America/Tortola": "美洲/托托拉",
    "allTimeZones.America/Vancouver": "美洲/溫哥華",
    "allTimeZones.America/Virgin": "美洲/維京",
    "allTimeZones.America/Whitehorse": "美洲/白馬鎮",
    "allTimeZones.America/Winnipeg": "美洲/温尼柏",
    "allTimeZones.America/Yakutat": "美洲/亞庫塔特",
    "allTimeZones.America/Yellowknife": "美洲/黃刀鎮",
    "allTimeZones.Antarctica/Casey": "南極洲/開西",
    "allTimeZones.Antarctica/Davis": "南極洲/戴維斯",
    "allTimeZones.Antarctica/DumontDUrville": "南極洲/迪蒙迪維爾站",
    "allTimeZones.Antarctica/Macquarie": "南極洲/麥加利島",
    "allTimeZones.Antarctica/Mawson": "南極洲/茂遜",
    "allTimeZones.Antarctica/McMurdo": "南極洲/麥克馬多",
    "allTimeZones.Antarctica/Palmer": "南極洲/帕麥",
    "allTimeZones.Antarctica/Rothera": "南極洲/羅瑟拉",
    "allTimeZones.Antarctica/South_Pole": "南極洲/南極",
    "allTimeZones.Antarctica/Syowa": "南極洲/昭和基地",
    "allTimeZones.Antarctica/Troll": "南極洲/特羅爾站",
    "allTimeZones.Antarctica/Vostok": "南極洲/弗斯托克",
    "allTimeZones.Arctic/Longyearbyen": "北極/龍宜爾比恩",
    "allTimeZones.Asia/Aden": "亞洲/亞頓",
    "allTimeZones.Asia/Almaty": "亞洲/阿馬提",
    "allTimeZones.Asia/Amman": "亞洲/安曼",
    "allTimeZones.Asia/Anadyr": "亞洲/阿納底",
    "allTimeZones.Asia/Aqtau": "亞洲/阿克陶",
    "allTimeZones.Asia/Aqtobe": "亞洲/阿克托比",
    "allTimeZones.Asia/Ashgabat": "亞洲/阿什哈巴德",
    "allTimeZones.Asia/Ashkhabad": "亞洲/阿什哈巴德",
    "allTimeZones.Asia/Atyrau": "亞洲/阿特勞",
    "allTimeZones.Asia/Baghdad": "亞洲/巴格達",
    "allTimeZones.Asia/Bahrain": "亞洲/巴林",
    "allTimeZones.Asia/Baku": "亞洲/巴庫",
    "allTimeZones.Asia/Bangkok": "亞洲/曼谷",
    "allTimeZones.Asia/Barnaul": "亞洲/巴爾瑙爾",
    "allTimeZones.Asia/Beirut": "亞洲/貝魯特",
    "allTimeZones.Asia/Bishkek": "亞洲/比斯凱克",
    "allTimeZones.Asia/Brunei": "亞洲/汶萊",
    "allTimeZones.Asia/Calcutta": "亞洲/加爾各答",
    "allTimeZones.Asia/Chita": "亞洲/赤塔",
    "allTimeZones.Asia/Choibalsan": "亞洲/喬巴山",
    "allTimeZones.Asia/Chongqing": "亞洲/重慶",
    "allTimeZones.Asia/Chungking": "亞洲/重慶",
    "allTimeZones.Asia/Colombo": "亞洲/可倫坡",
    "allTimeZones.Asia/Dacca": "亞洲/達卡",
    "allTimeZones.Asia/Damascus": "亞洲/大馬士革",
    "allTimeZones.Asia/Dhaka": "亞洲/達卡",
    "allTimeZones.Asia/Dili": "亞洲/帝利",
    "allTimeZones.Asia/Dubai": "亞洲/杜拜",
    "allTimeZones.Asia/Dushanbe": "亞洲/杜尚貝",
    "allTimeZones.Asia/Famagusta": "亞洲/法馬古斯塔",
    "allTimeZones.Asia/Gaza": "亞洲/加薩",
    "allTimeZones.Asia/Harbin": "亞洲/哈爾濱",
    "allTimeZones.Asia/Hebron": "亞洲/希伯侖",
    "allTimeZones.Asia/Ho_Chi_Minh": "亞洲/胡志明市",
    "allTimeZones.Asia/Hong_Kong": "亞洲/香港",
    "allTimeZones.Asia/Hovd": "亞洲/科布多城",
    "allTimeZones.Asia/Irkutsk": "亞洲/伊爾庫茨克",
    "allTimeZones.Asia/Istanbul": "亞洲/伊斯坦堡",
    "allTimeZones.Asia/Jakarta": "亞洲/雅加達",
    "allTimeZones.Asia/Jayapura": "亞洲/嘉雅浦拉",
    "allTimeZones.Asia/Jerusalem": "亞洲/耶路撒冷",
    "allTimeZones.Asia/Kabul": "亞洲/喀布爾",
    "allTimeZones.Asia/Kamchatka": "亞洲/堪察加",
    "allTimeZones.Asia/Karachi": "亞洲/喀拉蚩",
    "allTimeZones.Asia/Kashgar": "亞洲/喀什市",
    "allTimeZones.Asia/Kathmandu": "亞洲/加德滿都",
    "allTimeZones.Asia/Katmandu": "亞洲/加德滿都",
    "allTimeZones.Asia/Khandyga": "亞洲/漢德加",
    "allTimeZones.Asia/Kolkata": "亞洲/加爾各答",
    "allTimeZones.Asia/Krasnoyarsk": "亞洲/克拉斯諾亞爾斯克",
    "allTimeZones.Asia/Kuala_Lumpur": "亞洲/吉隆坡",
    "allTimeZones.Asia/Kuching": "亞洲/古晉",
    "allTimeZones.Asia/Kuwait": "亞洲/科威特",
    "allTimeZones.Asia/Macao": "亞洲/澳門",
    "allTimeZones.Asia/Macau": "亞洲/澳門",
    "allTimeZones.Asia/Magadan": "亞洲/馬加丹",
    "allTimeZones.Asia/Makassar": "亞洲/瑪加沙",
    "allTimeZones.Asia/Manila": "亞洲/馬尼拉",
    "allTimeZones.Asia/Muscat": "亞洲/馬斯喀特",
    "allTimeZones.Asia/Nicosia": "亞洲/尼古西亞",
    "allTimeZones.Asia/Novokuznetsk": "亞洲/新庫茲涅茨克",
    "allTimeZones.Asia/Novosibirsk": "亞洲/新西伯利亞",
    "allTimeZones.Asia/Omsk": "亞洲/鄂木斯克",
    "allTimeZones.Asia/Oral": "亞洲/烏拉爾",
    "allTimeZones.Asia/Phnom_Penh": "亞洲/金邊",
    "allTimeZones.Asia/Pontianak": "亞洲/坤甸",
    "allTimeZones.Asia/Pyongyang": "亞洲/平壤",
    "allTimeZones.Asia/Qatar": "亞洲/卡達",
    "allTimeZones.Asia/Qostanay": "亞洲/庫斯塔奈",
    "allTimeZones.Asia/Qyzylorda": "亞洲/克孜勒奧爾達",
    "allTimeZones.Asia/Rangoon": "亞洲/仰光",
    "allTimeZones.Asia/Riyadh": "亞洲/利雅德",
    "allTimeZones.Asia/Saigon": "亞洲/西貢",
    "allTimeZones.Asia/Sakhalin": "亞洲/庫頁島",
    "allTimeZones.Asia/Samarkand": "亞洲/撒馬爾罕",
    "allTimeZones.Asia/Seoul": "亞洲/首爾",
    "allTimeZones.Asia/Shanghai": "亞洲/上海",
    "allTimeZones.Asia/Singapore": "亞洲/新加坡",
    "allTimeZones.Asia/Srednekolymsk": "亞洲/中科雷姆斯克",
    "allTimeZones.Asia/Taipei": "亞洲/台北",
    "allTimeZones.Asia/Tashkent": "亞洲/塔什干",
    "allTimeZones.Asia/Tbilisi": "亞洲/第比利斯",
    "allTimeZones.Asia/Tehran": "亞洲/德黑蘭",
    "allTimeZones.Asia/Tel_Aviv": "亞洲/特拉維夫",
    "allTimeZones.Asia/Thimbu": "亞洲/廷布",
    "allTimeZones.Asia/Thimphu": "亞洲/廷布",
    "allTimeZones.Asia/Tokyo": "亞洲/東京",
    "allTimeZones.Asia/Tomsk": "亞洲/托木斯克",
    "allTimeZones.Asia/Ujung_Pandang": "亞洲/錫江",
    "allTimeZones.Asia/Ulaanbaatar": "亞洲/烏蘭巴托",
    "allTimeZones.Asia/Ulan_Bator": "亞洲/烏蘭巴托",
    "allTimeZones.Asia/Urumqi": "亞洲/烏魯木齊",
    "allTimeZones.Asia/Ust-Nera": "亞洲/烏斯季涅拉",
    "allTimeZones.Asia/Vientiane": "亞洲/永珍",
    "allTimeZones.Asia/Vladivostok": "亞洲/海參崴",
    "allTimeZones.Asia/Yakutsk": "亞洲/雅庫茨克",
    "allTimeZones.Asia/Yangon": "亞洲/仰光",
    "allTimeZones.Asia/Yekaterinburg": "亞洲/葉卡捷琳堡",
    "allTimeZones.Asia/Yerevan": "亞洲/葉里溫",
    "allTimeZones.Atlantic/Azores": "大西洋/亞述群島",
    "allTimeZones.Atlantic/Bermuda": "大西洋/百慕達",
    "allTimeZones.Atlantic/Canary": "大西洋/加那利群島",
    "allTimeZones.Atlantic/Cape_Verde": "大西洋/維德角",
    "allTimeZones.Atlantic/Faeroe": "大西洋/法羅群島",
    "allTimeZones.Atlantic/Faroe": "大西洋/法羅群島",
    "allTimeZones.Atlantic/Jan_Mayen": "大西洋/央棉",
    "allTimeZones.Atlantic/Madeira": "大西洋/馬迪拉群島",
    "allTimeZones.Atlantic/Reykjavik": "大西洋/雷克雅維克",
    "allTimeZones.Atlantic/South_Georgia": "大西洋/南喬治亞",
    "allTimeZones.Atlantic/St_Helena": "大西洋/聖赫勒拿",
    "allTimeZones.Atlantic/Stanley": "大西洋/史坦萊",
    "allTimeZones.Australia/ACT": "澳大利亞/ACT",
    "allTimeZones.Australia/Adelaide": "澳大利亞/阿得雷德",
    "allTimeZones.Australia/Brisbane": "澳大利亞/布里斯班",
    "allTimeZones.Australia/Broken_Hill": "澳大利亞/斷山",
    "allTimeZones.Australia/Canberra": "澳大利亞/坎培拉",
    "allTimeZones.Australia/Currie": "澳大利亞/柯里",
    "allTimeZones.Australia/Darwin": "澳大利亞/達爾文",
    "allTimeZones.Australia/Eucla": "澳大利亞/尤克拉",
    "allTimeZones.Australia/Hobart": "澳大利亞/霍巴特",
    "allTimeZones.Australia/LHI": "澳大利亞/LHI",
    "allTimeZones.Australia/Lindeman": "澳大利亞/林德曼",
    "allTimeZones.Australia/Lord_Howe": "澳大利亞/羅豪",
    "allTimeZones.Australia/Melbourne": "澳大利亞/墨爾本",
    "allTimeZones.Australia/NSW": "澳大利亞/新南威爾斯",
    "allTimeZones.Australia/North": "澳大利亞/北部",
    "allTimeZones.Australia/Perth": "澳大利亞/伯斯",
    "allTimeZones.Australia/Queensland": "澳大利亞/昆士蘭",
    "allTimeZones.Australia/South": "澳大利亞/南部",
    "allTimeZones.Australia/Sydney": "澳大利亞/雪梨",
    "allTimeZones.Australia/Tasmania": "澳大利亞/塔斯馬尼亞",
    "allTimeZones.Australia/Victoria": "澳大利亞/維多利亞",
    "allTimeZones.Australia/West": "澳大利亞/西部",
    "allTimeZones.Australia/Yancowinna": "澳大利亞/揚科溫納",
    "allTimeZones.Brazil/Acre": "巴西/阿克里",
    "allTimeZones.Brazil/DeNoronha": "巴西/迪諾羅尼亞",
    "allTimeZones.Brazil/East": "巴西/東部",
    "allTimeZones.Brazil/West": "巴西/西部",
    "allTimeZones.CET": "CET",
    "allTimeZones.CST6CDT": "CST6CDT",
    "allTimeZones.Canada/Atlantic": "加拿大/大西洋",
    "allTimeZones.Canada/Central": "加拿大/中部",
    "allTimeZones.Canada/Eastern": "加拿大/東部",
    "allTimeZones.Canada/Mountain": "加拿大/山區",
    "allTimeZones.Canada/Newfoundland": "加拿大/紐芬蘭",
    "allTimeZones.Canada/Pacific": "加拿大/太平洋",
    "allTimeZones.Canada/Saskatchewan": "加拿大/薩克其萬省",
    "allTimeZones.Canada/Yukon": "加拿大/育空",
    "allTimeZones.Chile/Continental": "智利/大陸",
    "allTimeZones.Chile/EasterIsland": "智利/復活節島",
    "allTimeZones.Cuba": "古巴",
    "allTimeZones.EET": "EET",
    "allTimeZones.EST": "EST",
    "allTimeZones.EST5EDT": "EST5EDT",
    "allTimeZones.Egypt": "埃及",
    "allTimeZones.Eire": "Eire",
    "allTimeZones.Etc/GMT": "Etc/GMT",
    "allTimeZones.Etc/GMT+0": "Etc/GMT+0",
    "allTimeZones.Etc/GMT+1": "Etc/GMT+1",
    "allTimeZones.Etc/GMT+10": "Etc/GMT+10",
    "allTimeZones.Etc/GMT+11": "Etc/GMT+11",
    "allTimeZones.Etc/GMT+12": "Etc/GMT+12",
    "allTimeZones.Etc/GMT+2": "Etc/GMT+2",
    "allTimeZones.Etc/GMT+3": "Etc/GMT+3",
    "allTimeZones.Etc/GMT+4": "Etc/GMT+4",
    "allTimeZones.Etc/GMT+5": "Etc/GMT+5",
    "allTimeZones.Etc/GMT+6": "Etc/GMT+6",
    "allTimeZones.Etc/GMT+7": "Etc/GMT+7",
    "allTimeZones.Etc/GMT+8": "Etc/GMT+8",
    "allTimeZones.Etc/GMT+9": "Etc/GMT+9",
    "allTimeZones.Etc/GMT-0": "Etc/GMT-0",
    "allTimeZones.Etc/GMT-1": "Etc/GMT-1",
    "allTimeZones.Etc/GMT-10": "Etc/GMT-10",
    "allTimeZones.Etc/GMT-11": "Etc/GMT-11",
    "allTimeZones.Etc/GMT-12": "Etc/GMT-12",
    "allTimeZones.Etc/GMT-13": "Etc/GMT-13",
    "allTimeZones.Etc/GMT-14": "Etc/GMT-14",
    "allTimeZones.Etc/GMT-2": "Etc/GMT-2",
    "allTimeZones.Etc/GMT-3": "Etc/GMT-3",
    "allTimeZones.Etc/GMT-4": "Etc/GMT-4",
    "allTimeZones.Etc/GMT-5": "Etc/GMT-5",
    "allTimeZones.Etc/GMT-6": "Etc/GMT-6",
    "allTimeZones.Etc/GMT-7": "Etc/GMT-7",
    "allTimeZones.Etc/GMT-8": "Etc/GMT-8",
    "allTimeZones.Etc/GMT-9": "Etc/GMT-9",
    "allTimeZones.Etc/GMT0": "Etc/GMT0",
    "allTimeZones.Etc/Greenwich": "Etc/格林威治",
    "allTimeZones.Etc/UCT": "Etc/UCT",
    "allTimeZones.Etc/UTC": "Etc/UTC",
    "allTimeZones.Etc/Universal": "Etc/通用",
    "allTimeZones.Etc/Zulu": "Etc/祖魯",
    "allTimeZones.Europe/Amsterdam": "歐洲/阿姆斯特丹",
    "allTimeZones.Europe/Andorra": "歐洲/安道爾",
    "allTimeZones.Europe/Astrakhan": "歐洲/阿斯特拉罕",
    "allTimeZones.Europe/Athens": "歐洲/雅典",
    "allTimeZones.Europe/Belfast": "歐洲/貝爾法斯特",
    "allTimeZones.Europe/Belgrade": "歐洲/貝爾格勒",
    "allTimeZones.Europe/Berlin": "歐洲/柏林",
    "allTimeZones.Europe/Bratislava": "歐洲/布拉提斯拉瓦",
    "allTimeZones.Europe/Brussels": "歐洲/布魯塞爾",
    "allTimeZones.Europe/Bucharest": "歐洲/布加勒斯特",
    "allTimeZones.Europe/Budapest": "歐洲/布達佩斯",
    "allTimeZones.Europe/Busingen": "歐洲/布辛根",
    "allTimeZones.Europe/Chisinau": "歐洲/奇西瑙",
    "allTimeZones.Europe/Copenhagen": "歐洲/哥本哈根",
    "allTimeZones.Europe/Dublin": "歐洲/都柏林",
    "allTimeZones.Europe/Gibraltar": "歐洲/直布羅陀",
    "allTimeZones.Europe/Guernsey": "歐洲/根息",
    "allTimeZones.Europe/Helsinki": "歐洲/赫爾辛基",
    "allTimeZones.Europe/Isle_of_Man": "歐洲/曼島",
    "allTimeZones.Europe/Istanbul": "歐洲/伊斯坦堡",
    "allTimeZones.Europe/Jersey": "歐洲/澤西島",
    "allTimeZones.Europe/Kaliningrad": "歐洲/卡里寧格勒",
    "allTimeZones.Europe/Kirov": "歐洲/基洛夫",
    "allTimeZones.Europe/Kyiv": "歐洲/基輔",
    "allTimeZones.Europe/Lisbon": "歐洲/里斯本",
    "allTimeZones.Europe/Ljubljana": "歐洲/盧布亞納",
    "allTimeZones.Europe/London": "歐洲/倫敦",
    "allTimeZones.Europe/Luxembourg": "歐洲/盧森堡",
    "allTimeZones.Europe/Madrid": "歐洲/馬德里",
    "allTimeZones.Europe/Malta": "歐洲/馬爾他",
    "allTimeZones.Europe/Mariehamn": "歐洲/瑪麗港",
    "allTimeZones.Europe/Minsk": "歐洲/明斯克",
    "allTimeZones.Europe/Monaco": "歐洲/摩納哥",
    "allTimeZones.Europe/Moscow": "歐洲/莫斯科",
    "allTimeZones.Europe/Nicosia": "歐洲/尼古西亞",
    "allTimeZones.Europe/Oslo": "歐洲/奧斯陸",
    "allTimeZones.Europe/Paris": "歐洲/巴黎",
    "allTimeZones.Europe/Podgorica": "歐洲/波德戈里察",
    "allTimeZones.Europe/Prague": "歐洲/布拉格",
    "allTimeZones.Europe/Riga": "歐洲/里加",
    "allTimeZones.Europe/Rome": "歐洲/羅馬",
    "allTimeZones.Europe/Samara": "歐洲/薩馬拉",
    "allTimeZones.Europe/San_Marino": "歐洲/聖馬利諾",
    "allTimeZones.Europe/Sarajevo": "歐洲/塞拉耶佛",
    "allTimeZones.Europe/Saratov": "歐洲/薩拉托夫",
    "allTimeZones.Europe/Simferopol": "歐洲/欣佛洛普",
    "allTimeZones.Europe/Skopje": "歐洲/斯高彼亞",
    "allTimeZones.Europe/Sofia": "歐洲/索非亞",
    "allTimeZones.Europe/Stockholm": "歐洲/斯德哥爾摩",
    "allTimeZones.Europe/Tallinn": "歐洲/塔林",
    "allTimeZones.Europe/Tirane": "歐洲/地拉那",
    "allTimeZones.Europe/Tiraspol": "歐洲/提拉斯浦",
    "allTimeZones.Europe/Ulyanovsk": "歐洲/烏里揚諾夫斯克",
    "allTimeZones.Europe/Uzhgorod": "歐洲/烏日霍羅德",
    "allTimeZones.Europe/Vaduz": "歐洲/瓦都茲",
    "allTimeZones.Europe/Vatican": "歐洲/梵蒂岡",
    "allTimeZones.Europe/Vienna": "歐洲/維也納",
    "allTimeZones.Europe/Vilnius": "歐洲/維爾紐斯",
    "allTimeZones.Europe/Volgograd": "歐洲/伏爾加格勒",
    "allTimeZones.Europe/Warsaw": "歐洲/華沙",
    "allTimeZones.Europe/Zagreb": "歐洲/札格雷布",
    "allTimeZones.Europe/Zaporozhye": "歐洲/札波羅結",
    "allTimeZones.Europe/Zurich": "歐洲/蘇黎世",
    "allTimeZones.GB": "GB",
    "allTimeZones.GB-Eire": "GB-Eire",
    "allTimeZones.GMT": "GMT",
    "allTimeZones.GMT+0": "GMT+0",
    "allTimeZones.GMT-0": "GMT-0",
    "allTimeZones.GMT0": "GMT0",
    "allTimeZones.Greenwich": "格林威治",
    "allTimeZones.HST": "HST",
    "allTimeZones.Hongkong": "香港",
    "allTimeZones.Iceland": "冰島",
    "allTimeZones.Indian/Antananarivo": "印度洋/安塔那那利佛",
    "allTimeZones.Indian/Chagos": "印度洋/查哥斯",
    "allTimeZones.Indian/Christmas": "印度洋/聖誕島",
    "allTimeZones.Indian/Cocos": "印度洋/可可斯群島",
    "allTimeZones.Indian/Comoro": "印度洋/葛摩",
    "allTimeZones.Indian/Kerguelen": "印度洋/凱爾蓋朗群島",
    "allTimeZones.Indian/Mahe": "印度洋/馬赫",
    "allTimeZones.Indian/Maldives": "印度洋/馬爾地夫",
    "allTimeZones.Indian/Mauritius": "印度洋/模里西斯",
    "allTimeZones.Indian/Mayotte": "印度洋/馬約特島",
    "allTimeZones.Indian/Reunion": "印度洋/留尼旺",
    "allTimeZones.Iran": "伊朗",
    "allTimeZones.Israel": "以色列",
    "allTimeZones.Jamaica": "牙買加",
    "allTimeZones.Japan": "日本",
    "allTimeZones.Kwajalein": "瓜加林島",
    "allTimeZones.Libya": "利比亞",
    "allTimeZones.MET": "MET",
    "allTimeZones.MST": "MST",
    "allTimeZones.MST7MDT": "MST7MDT",
    "allTimeZones.Mexico/BajaNorte": "墨西哥/巴哈諾特",
    "allTimeZones.Mexico/BajaSur": "墨西哥/巴哈蘇爾",
    "allTimeZones.Mexico/General": "墨西哥/泛稱",
    "allTimeZones.NZ": "紐西蘭",
    "allTimeZones.NZ-CHAT": "NZ-CHAT",
    "allTimeZones.Navajo": "納瓦荷",
    "allTimeZones.PRC": "中華人民共和國",
    "allTimeZones.PST8PDT": "PST8PDT",
    "allTimeZones.Pacific/Apia": "太平洋/亞庇",
    "allTimeZones.Pacific/Auckland": "太平洋/奧克蘭",
    "allTimeZones.Pacific/Bougainville": "太平洋/布干維爾",
    "allTimeZones.Pacific/Chatham": "太平洋/查塔姆群島",
    "allTimeZones.Pacific/Chuuk": "太平洋/楚克",
    "allTimeZones.Pacific/Easter": "太平洋/復活節島",
    "allTimeZones.Pacific/Efate": "太平洋/愛發提",
    "allTimeZones.Pacific/Enderbury": "太平洋/恩德伯里",
    "allTimeZones.Pacific/Fakaofo": "太平洋/法克奧佛",
    "allTimeZones.Pacific/Fiji": "太平洋/斐濟",
    "allTimeZones.Pacific/Funafuti": "太平洋/富納富提",
    "allTimeZones.Pacific/Galapagos": "太平洋/加拉巴哥",
    "allTimeZones.Pacific/Gambier": "太平洋/甘比爾",
    "allTimeZones.Pacific/Guadalcanal": "太平洋/瓜達卡那島",
    "allTimeZones.Pacific/Guam": "太平洋/關島",
    "allTimeZones.Pacific/Honolulu": "太平洋/檀香山",
    "allTimeZones.Pacific/Johnston": "太平洋/詹斯頓島",
    "allTimeZones.Pacific/Kiritimati": "太平洋/刻里提瑪斯",
    "allTimeZones.Pacific/Kosrae": "太平洋/科瑟爾",
    "allTimeZones.Pacific/Kwajalein": "太平洋/瓜加林島",
    "allTimeZones.Pacific/Majuro": "太平洋/麥哲魯",
    "allTimeZones.Pacific/Marquesas": "太平洋/馬克沙斯",
    "allTimeZones.Pacific/Midway": "太平洋/中途島",
    "allTimeZones.Pacific/Nauru": "太平洋/諾魯",
    "allTimeZones.Pacific/Niue": "太平洋/紐威島",
    "allTimeZones.Pacific/Norfolk": "太平洋/諾福克",
    "allTimeZones.Pacific/Noumea": "太平洋/諾米亞",
    "allTimeZones.Pacific/Pago_Pago": "太平洋/帕果帕果",
    "allTimeZones.Pacific/Palau": "太平洋/帛琉",
    "allTimeZones.Pacific/Pitcairn": "太平洋/皮特康",
    "allTimeZones.Pacific/Pohnpei": "太平洋/波納佩島",
    "allTimeZones.Pacific/Ponape": "太平洋/波納佩島",
    "allTimeZones.Pacific/Port_Moresby": "太平洋/莫爾斯貝港",
    "allTimeZones.Pacific/Rarotonga": "太平洋/拉洛東加島",
    "allTimeZones.Pacific/Saipan": "太平洋/塞班島",
    "allTimeZones.Pacific/Samoa": "太平洋/薩摩亞",
    "allTimeZones.Pacific/Tahiti": "太平洋/大溪地",
    "allTimeZones.Pacific/Tarawa": "太平洋/塔拉瓦",
    "allTimeZones.Pacific/Tongatapu": "太平洋/東加塔普",
    "allTimeZones.Pacific/Truk": "太平洋/楚克",
    "allTimeZones.Pacific/Wake": "太平洋/威克",
    "allTimeZones.Pacific/Wallis": "太平洋/瓦利斯",
    "allTimeZones.Pacific/Yap": "太平洋/雅浦島",
    "allTimeZones.Poland": "波蘭",
    "allTimeZones.Portugal": "葡萄牙",
    "allTimeZones.ROC": "中華民國",
    "allTimeZones.ROK": "大韓民國",
    "allTimeZones.Singapore": "新加坡",
    "allTimeZones.Turkey": "土耳其",
    "allTimeZones.UCT": "UCT",
    "allTimeZones.US/Alaska": "美國/阿拉斯加州",
    "allTimeZones.US/Aleutian": "美國/阿留申群島",
    "allTimeZones.US/Arizona": "美國/亞利桑那州",
    "allTimeZones.US/Central": "美國/中部",
    "allTimeZones.US/East-Indiana": "美國/印第安納州東部",
    "allTimeZones.US/Eastern": "美國/東部",
    "allTimeZones.US/Hawaii": "美國/夏威夷",
    "allTimeZones.US/Indiana-Starke": "美國/印第安納州-斯塔克郡",
    "allTimeZones.US/Michigan": "美國/密西根州",
    "allTimeZones.US/Mountain": "美國/山區",
    "allTimeZones.US/Pacific": "美國/太平洋",
    "allTimeZones.US/Pacific-New": "美國/太平洋-新",
    "allTimeZones.US/Samoa": "美國/薩摩亞",
    "allTimeZones.UTC": "UTC",
    "allTimeZones.Universal": "通用",
    "allTimeZones.W-SU": "W-SU",
    "allTimeZones.WET": "WET",
    "allTimeZones.Zulu": "祖魯文",
    "appTemplate.docs.newBrainstormTitle": "全新腦力激盪",
    "appTemplate.docs.newPrdTitle": "新產品規格 (PRD)",
    "appTemplate.docs.newTechSpecTitle": "新技術規格",
    "appTemplateActions.initializeAppTemplateError.message":
      "建立模版複本失敗。",
    "appTemplateHelpers.bundledPropertyDelete.description":
      "由於這些相關實體共同運作，因此也會一併刪除。",
    "appTemplateHelpers.bundledPropertyDelete.message":
      "在 {databaseName} 上為每個人刪除 {property} 屬性？",
    "appTemplateHelpers.multiDBDeleteAlert.allLabel": "刪除{appName}",
    "appTemplateHelpers.multiDBDeleteAlert.cancelLabel": "取消",
    "appTemplateHelpers.multiDBDeleteAlert.description":
      "{appName}緊密連動。你可以一起刪除它們，分別刪除可能會遇到問題。",
    "appTemplateHelpers.multiDBDeleteAlert.message": "確定要刪除{dbName}嗎？",
    "appTemplateHelpers.multiDBDeleteAlert.oneLabel": "僅刪除{dbName}",
    "appTemplateHelpers.multiDBMoveAlert.allLabel": "一起移動",
    "appTemplateHelpers.multiDBMoveAlert.cancelLabel": "取消",
    "appTemplateHelpers.multiDBMoveAlert.description":
      "{appName}緊密連動。你可以一起移動它們，否則可能會在分開後遇到問題。",
    "appTemplateHelpers.multiDBMoveAlert.message": "確定要移動{dbName}嗎？",
    "appTemplateHelpers.multiDBMoveAlert.oneLabel": "只移動{dbName}",
    "appTemplateUpgradeActions.upgradeConfirmationDialog.cancelUpgrade.label":
      "不升级",
    "appTemplateUpgradeActions.upgradeConfirmationDialog.upgrade.label": "升级",
    "appTemplates.docs.byCategoryTableViewDescription":
      "按文件類別分組的文件表格",
    "appTemplates.docs.byCategoryTableViewName": "依類別",
    "appTemplates.docs.createdByProperty": "建立者",
    "appTemplates.docs.createdTimePropertyTitle": "建立時間",
    "appTemplates.docs.docTypeFeature": "檔案類型",
    "appTemplates.docs.docTypeFeatureDescription":
      "文件類型：文書資料、產品規格、工程設計文件、行銷簡介等項",
    "appTemplates.docs.docsCollectionEmptyButtonTitle": "新文件",
    "appTemplates.docs.docsCollectionEmptyDescription":
      "Docs 協助你的團隊整理並協作團隊文件。",
    "appTemplates.docs.docsCollectionEmptyTitle": "新增你的第一個文件",
    "appTemplates.docs.docsCollectionName": "Docs",
    "appTemplates.docs.docsCreatedTimeProperty": "建立時間",
    "appTemplates.docs.docsListViewName": "清單",
    "appTemplates.docs.docsTableViewDescription": "所有文件的表格",
    "appTemplates.docs.docsTableViewName": "所有文件",
    "appTemplates.docs.docsTitleProperty": "標題",
    "appTemplates.docs.docsWelcomeSubtitle":
      "簡單的 Docs 範本，具有單一 Docs 資料庫。",
    "appTemplates.docs.docsWelcomeTitle": "歡迎使用 Docs",
    "appTemplates.docs.documentation": "文書資料",
    "appTemplates.docs.engDesignDoc": "工程設計文件",
    "appTemplates.docs.gettingStartedWithDocs": "Docs 入門指南",
    "appTemplates.docs.lastEditedByProperty": "上次編輯者",
    "appTemplates.docs.lastEditedTimeProperty": "上次編輯時間",
    "appTemplates.docs.marketingBrief": "行銷簡介",
    "appTemplates.docs.myDocsFeatureDescription": "由我建立的文件清單視圖。",
    "appTemplates.docs.myDocsListViewDescription": "由我建立的文件清單",
    "appTemplates.docs.myDocsListViewName": "我的文件",
    "appTemplates.docs.paragraph1": "👋 歡迎使用 Docs！",
    "appTemplates.docs.paragraph2":
      "使用此範本整理文項，像是技術規格、架構概觀及專案啟動筆記等項。",
    "appTemplates.docs.preview1Description": "此模版預覽影像的部分說明...",
    "appTemplates.docs.preview2Description": "此模版預覽影片的部分說明...",
    "appTemplates.docs.productSpec": "產品規格",
    "appTemplates.docs.recentlyEditedFeatureDescription":
      "以上次編輯時間排序的文件清單視圖。",
    "appTemplates.docs.recentlyEditedViewDescription":
      "按最近編輯排序的文件清單",
    "appTemplates.docs.recentlyEditedViewName": "最近編輯",
    "appTemplates.docs.simpleDocsFeatureDescription":
      "具有建立時間、建立者、上次建立時間、上次建立者等屬性的文件資料庫。",
    "appTemplates.docs.simpleDocsPresetDescription":
      "在同一處整理並協作團隊文件",
    "appTemplates.docs.simpleDocsPresetName": "Docs",
    "appTemplates.docs.simpleDocsPresetShortName": "Docs",
    "appTemplates.docs.statusApproved": "已核准",
    "appTemplates.docs.statusArchived": "已歸檔",
    "appTemplates.docs.statusDraft": "草稿",
    "appTemplates.docs.statusFeatureDescription":
      "草稿、全新、審核中、已核准、已歸檔。",
    "appTemplates.docs.statusInReview": "審核中",
    "appTemplates.docs.statusNew": "全新功能",
    "appTemplates.docs.statusProperty": "狀態",
    "appTemplates.docs.tagsProperty": "標籤",
    "appTemplates.docs.tagsProperty.engineering": "工程",
    "appTemplates.docs.tagsProperty.guides": "指南",
    "appTemplates.docs.tagsProperty.product": "產品",
    "appTemplates.featureBundleDelete.properties":
      "{count, plural, other {{count} 個屬性}}",
    "appTemplates.featureBundleDelete.views":
      "{count, plural, other {{count} 個視圖}}",
    "appTemplates.meetings.allMeetingsViewDescription": "所有會議的表格",
    "appTemplates.meetings.allMeetingsViewFeatureDescription":
      "所有會議的視圖。",
    "appTemplates.meetings.allMeetingsViewName": "全部顯示",
    "appTemplates.meetings.brainstorm": "腦力激盪",
    "appTemplates.meetings.byTypeViewDescription": "按類型分組的會議清單",
    "appTemplates.meetings.byTypeViewFeature": "依類型列出會議",
    "appTemplates.meetings.byTypeViewFeatureDescription":
      "依會議類型分類會議的視圖。",
    "appTemplates.meetings.byTypeViewName": "類型清單",
    "appTemplates.meetings.calendarViewDescription": "會議行事曆",
    "appTemplates.meetings.calendarViewFeature": "行事曆視圖",
    "appTemplates.meetings.calendarViewFeatureDescription":
      "在行事曆視圖中顯示會議。",
    "appTemplates.meetings.calendarViewName": "行事曆",
    "appTemplates.meetings.createdByAndTimeFeature": "建立者/建立時間",
    "appTemplates.meetings.createdByAndTimeFeatureDescription":
      "建立會議記錄的時間與人員。",
    "appTemplates.meetings.createdByProperty": "建立者",
    "appTemplates.meetings.createdTimePropertyTitle": "建立時間",
    "appTemplates.meetings.gettingStartedWith1on1s": "一對一會議入門指南",
    "appTemplates.meetings.gettingStartedWithDocs": "Docs 入門指南",
    "appTemplates.meetings.gettingStartedWithMeetings": "會議記錄入門指南",
    "appTemplates.meetings.lastEditedByAndTimeFeature": "上次編輯時間與人員",
    "appTemplates.meetings.lastEditedByAndTimeFeatureDescription":
      "上次編輯會議記錄的時間與人員",
    "appTemplates.meetings.lastEditedByProperty": "上次編輯者",
    "appTemplates.meetings.lastEditedTimeProperty": "上次編輯時間與人員",
    "appTemplates.meetings.meetingAttendeesProperty": "與會者",
    "appTemplates.meetings.meetingTimeProperty": "事件時間",
    "appTemplates.meetings.meetingTypeFeatureDescription":
      "會議類型：站立會議、腦力激盪、每週團隊會議等",
    "appTemplates.meetings.meetingTypeProperty": "會議類型",
    "appTemplates.meetings.meetingsAndNotesPresetDescription":
      "透過議程、會議記錄及行事曆視圖，集中組織團隊會議。",
    "appTemplates.meetings.meetingsCollectionName": "會議",
    "appTemplates.meetings.meetingsPresetDescription":
      "透過議程、會議記錄及行事曆視圖，集中組織團隊會議。",
    "appTemplates.meetings.meetingsPresetName": "會議",
    "appTemplates.meetings.meetingsPresetShortName": "會議",
    "appTemplates.meetings.meetingsTitleProperty": "名稱",
    "appTemplates.meetings.meetingsViewDescription": "所有會議清單",
    "appTemplates.meetings.meetingsWelcomeSubtitle":
      "捕獲會議記錄、創建待辦事項，並將您的行事曆事件與 Notion 中的所有其他內容連接起來。",
    "appTemplates.meetings.meetingsWelcomeTitle": "歡迎使用會議記錄",
    "appTemplates.meetings.myMeetingViewDescription": "我的會議清單",
    "appTemplates.meetings.myMeetingViewFeatureDescription":
      "由我建立或參加之所有會議的視圖",
    "appTemplates.meetings.myMeetingViewName": "我的會議",
    "appTemplates.meetings.newStandupTemplateTitle": "新晨會",
    "appTemplates.meetings.newWeeklyTemplateTitle": "每週新會議",
    "appTemplates.meetings.oneOnOnePresetDescription":
      "保留你在一對一會議與不同人員的長時間歷史記錄。",
    "appTemplates.meetings.oneOnOneparagraph2":
      "使用此模版以組織並製作一對一會議中的會議記錄",
    "appTemplates.meetings.oneOnOneparagraph3":
      "若要開始使用，請與團隊成員分享此模版，並用於製作下一場一對一會議的會議記錄！",
    "appTemplates.meetings.paragraph1": "👋 歡迎使用會議記錄！",
    "appTemplates.meetings.paragraph2":
      "使用此模版以組織會議、分享議程並製作會議記錄。",
    "appTemplates.meetings.preview1Description": "此模版預覽影像的部分說明...",
    "appTemplates.meetings.preview2Description": "此模版預覽影片的部分說明...",
    "appTemplates.meetings.standup": "晨會",
    "appTemplates.meetings.tagProperty": "標籤",
    "appTemplates.meetings.teamStandupPageName": "團隊晨會",
    "appTemplates.meetings.teamWeekly": "每週團隊會議",
    "appTemplates.meetings.teamWeeklyPageName": "每週團隊會議",
    "appTemplates.meetings.training": "訓練",
    "appTemplates.mettings.meetingsCollectionEmptyButtonTitle": "新會議",
    "appTemplates.mettings.meetingsCollectionEmptyDescription":
      "會議協助你的團隊組織會議、分享議程並製作會議記錄。",
    "appTemplates.mettings.meetingsCollectionEmptyTitle": "沒有會議",
    "appTemplates.namePropertyTitle": "名稱",
    "appTemplates.projectManagement.projectsCollectionName": "專案",
    "appTemplates.projectManagement.sprintsCollectionName": "Sprint",
    "appTemplates.projectManagement.tasksCollectionName": "任務",
    "appTemplates.projects.aboutThisProject": "關於此專案",
    "appTemplates.projects.advancedTaskFeatureDescription": "任務的看板視圖。",
    "appTemplates.projects.advancedTaskProjectStatus.name":
      "未開始、進行中、已完成、已歸檔",
    "appTemplates.projects.agilePresetName": "專案、任務、Sprints",
    "appTemplates.projects.agilePresetShortName": "專案、任務及 Sprint",
    "appTemplates.projects.allProjectsViewName": "全部顯示",
    "appTemplates.projects.archived": "已歸檔",
    "appTemplates.projects.backlog": "待辦需求",
    "appTemplates.projects.bug": "Bug",
    "appTemplates.projects.cancelled": "已取消",
    "appTemplates.projects.completed": "完成",
    "appTemplates.projects.completionRollupDescription":
      "視覺化每個專案的任務完成進度。",
    "appTemplates.projects.completionRollupName": "完成",
    "appTemplates.projects.description": "敘述",
    "appTemplates.projects.doing": "進行中",
    "appTemplates.projects.done": "已完成",
    "appTemplates.projects.dueDateProperty": "到期時間",
    "appTemplates.projects.endDateProperty": "結束日期",
    "appTemplates.projects.estimateProperty": "估計",
    "appTemplates.projects.estimatesFeatureDescription":
      "使用熱門方式與自訂選項為你的任務調整大小。",
    "appTemplates.projects.feature": "功能",
    "appTemplates.projects.id": "任務 ID",
    "appTemplates.projects.inProgress": "進行中",
    "appTemplates.projects.markAsDuplicate": "標記為重複",
    "appTemplates.projects.markAsDuplicateFeatureDescription":
      "將任務標記為其他任務的複本。",
    "appTemplates.projects.myProjectsViewDescription": "我的專案看板",
    "appTemplates.projects.notStarted": "未開始",
    "appTemplates.projects.parentTasksName": "父任務",
    "appTemplates.projects.paused": "已暫停",
    "appTemplates.projects.planned": "規劃",
    "appTemplates.projects.pointsEstimates": "點",
    "appTemplates.projects.priorityProperty": "優先級",
    "appTemplates.projects.projectCalendarFeature": "專案行事曆",
    "appTemplates.projects.projectMembers": "成員",
    "appTemplates.projects.projectPeople": "人員",
    "appTemplates.projects.projectPriorityFeatureDescription":
      "標記優先執行的專案。",
    "appTemplates.projects.projectStatus": "專案狀態",
    "appTemplates.projects.projectTasks": "專案任務",
    "appTemplates.projects.projectTemplate": "專案模版",
    "appTemplates.projects.projectTimelineFeature": "產品路線圖",
    "appTemplates.projects.projectTimelineFeatureDescription":
      "帶著你的團隊跟上高層級專案產品路線圖的腳步。",
    "appTemplates.projects.projectsAndTasksAppName": "專案",
    "appTemplates.projects.projectsAndTasksPresetName": "專案與任務",
    "appTemplates.projects.projectsAndTasksPresetShortName": "專案",
    "appTemplates.projects.projectsBoardViewDescription": "專案看板",
    "appTemplates.projects.projectsBoardViewName": "看板",
    "appTemplates.projects.projectsCollectionEmptyButtonTitle": "新專案",
    "appTemplates.projects.projectsCollectionEmptyDescription":
      "專案協助你的團隊組織任務並檢視全面的資訊。",
    "appTemplates.projects.projectsCollectionEmptyTitle": "沒有專案",
    "appTemplates.projects.projectsCollectionName": "專案",
    "appTemplates.projects.projectsOwnersAndMembers": "專案擁有者和成員",
    "appTemplates.projects.projectsTableViewName": "全部顯示",
    "appTemplates.projects.simpleTaskFeatureDescription":
      "精細工作的資料庫，例如問題、任務或 bug。",
    "appTemplates.projects.simpleTaskProjectStatus.name": "待辦事項，已完成",
    "appTemplates.projects.simpleTasksPresetName": "待辦事項",
    "appTemplates.projects.simpleTasksPresetShortName": "任務",
    "appTemplates.projects.sprintsCollectionEmptyButtonTitle": "新的 Sprint",
    "appTemplates.projects.sprintsCollectionEmptyDescription":
      "Sprints 定義一段時間，可供你在其中組織任務和專案看板。",
    "appTemplates.projects.sprintsCollectionEmptyTitle": "沒有 Sprint",
    "appTemplates.projects.sprintsName": "Sprint",
    "appTemplates.projects.startDateProperty": "開始日期",
    "appTemplates.projects.status": "狀態",
    "appTemplates.projects.statusFeatureDescription": "追蹤任務/專案的狀態。",
    "appTemplates.projects.subTaskFeatureDescription":
      "將任務分解成較小的子任務並追蹤進度。",
    "appTemplates.projects.subTaskFeatureShortDescription": "大型任务细分",
    "appTemplates.projects.subTasksName": "子任務",
    "appTemplates.projects.summary": "摘要",
    "appTemplates.projects.summaryDescription": "透過 Notion AI 自動摘要專案",
    "appTemplates.projects.summaryProperty": "摘要",
    "appTemplates.projects.tableViewName": "表格",
    "appTemplates.projects.tags": "標籤",
    "appTemplates.projects.taskBlockedByName": "封鎖者",
    "appTemplates.projects.taskBlockingName": "封鎖中",
    "appTemplates.projects.taskDependenciesFeatureDescription":
      "將任務標記為已被其他任務封鎖。",
    "appTemplates.projects.taskDependenciesName": "相依性",
    "appTemplates.projects.taskDueDateFeature": "任務到期日期",
    "appTemplates.projects.taskDueDateFeatureDescription":
      "為任務新增到期日期。",
    "appTemplates.projects.taskDuplicatesName": "重複項",
    "appTemplates.projects.taskGithubPrDisabledFeatureDescription":
      "要求工作區管理員設定 GitHub 應用程式以使用此功能。",
    "appTemplates.projects.taskGithubPrFeatureDescription":
      "根據 PR 狀態變更自動更新任務狀態",
    "appTemplates.projects.taskGithubPrFeatureShortDescription":
      "PR连接和任务状态同步",
    "appTemplates.projects.taskGithubPrRelationName": "GitHub 提取要求",
    "appTemplates.projects.taskIsDuplicateOfName": "重複項目",
    "appTemplates.projects.taskPriorityFeatureDescription":
      "標記優先執行的任務。",
    "appTemplates.projects.taskProjectRelationDependencyName": "專案 <-> 任務",
    "appTemplates.projects.taskProjectRelationName": "專案",
    "appTemplates.projects.taskReporter": "報告者",
    "appTemplates.projects.taskStatus": "任務狀態",
    "appTemplates.projects.taskType": "任務類型",
    "appTemplates.projects.taskTypeFeatureDescription":
      "使用模版建立不同類型的任務。",
    "appTemplates.projects.tasksBoardFeatureName": "任務看板",
    "appTemplates.projects.tasksCollectionEmptyButtonTitle": "新任務",
    "appTemplates.projects.tasksCollectionEmptyDescription":
      "任務追蹤精細且單一的工作。",
    "appTemplates.projects.tasksCollectionEmptyTitle": "沒有任務",
    "appTemplates.projects.tasksCollectionName": "任務",
    "appTemplates.projects.tasksCurrentSprintV2ViewName": "目前 Sprint",
    "appTemplates.projects.tasksCurrentSprintV2ViewNamePrefix": "目前",
    "appTemplates.projects.tasksCurrentSprintViewDescription":
      "目前 Sprint 任務的看板",
    "appTemplates.projects.tasksCurrentSprintViewName": "這項 Sprint",
    "appTemplates.projects.tasksFeatureDescription":
      "更精細工作的資料庫。將任務加入到專案，以便持續追蹤需要完成的工作。",
    "appTemplates.projects.tasksViewName": "所有任務",
    "appTemplates.projects.tasksWithSprintsFeatureDescription":
      "每幾週將你的團隊聚焦於一組任務上。",
    "appTemplates.projects.tasksWithSprintsFeatureShortDescription":
      "将团队任务保存到时间框",
    "appTemplates.projects.timelineProperty": "日期",
    "appTemplates.projects.todo": "待辦事項",
    "appTemplates.projects.tshirtSizeEstimates": "T 恤大小",
    "appTemplates.projects.welcomeSubtitle":
      "追蹤待辦事項和團隊專案。從挑選下方模版開始。",
    "appTemplates.projects.welcomeTitle": "專案",
    "appTemplates.sprints.allTasksViewName": "全部顯示",
    "appTemplates.sprints.isCurrentSprintProperty": "是目前的 Sprint",
    "appTemplates.sprints.newSprint": "新的 Sprint",
    "appTemplates.sprints.sprint1": "Sprint 1",
    "appTemplates.sprints.sprint2": "Sprint 2",
    "appTemplates.sprints.sprint3": "Sprint 3",
    "appTemplates.sprints.sprintStatus": "Sprint 狀態",
    "appTemplates.sprints.sprintStatusDescription": "Sprint 的狀態",
    "appTemplates.sprints.sprintsCollectionName": "Sprint",
    "appTemplates.sprints.sprintsTimelineView": "時間軸",
    "appTemplates.sprints.tasksCollectionName": "任務",
    "appTemplates.sprints.tasksFeatureDescription":
      "更精細工作的資料庫。追蹤每個 Sprint 的任務。",
    "appTemplates.sprints.timelineProperty": "日期",
    "appTemplates.tasks.activeProjectsGalleryFeature": "有效專案圖庫",
    "appTemplates.tasks.activeProjectsGalleryFeatureDescription":
      "進行中專案的圖庫視圖",
    "appTemplates.tasks.activeProjectsView": "有效",
    "appTemplates.tasks.activeProjectsViewDescription": "進行中專案的看板",
    "appTemplates.tasks.agilePresetDescription":
      "適用於工程團隊的專案和問題追蹤。透過具有時間限制的 Sprint 組織任務和專案。",
    "appTemplates.tasks.allProjectsViewDescription": "所有專案的表格",
    "appTemplates.tasks.allSprintsViewDescription": "所有 Sprint 的表格",
    "appTemplates.tasks.allTasksViewDescription": "所有任務的表格",
    "appTemplates.tasks.allTasksViewName": "全部顯示",
    "appTemplates.tasks.archived": "已歸檔",
    "appTemplates.tasks.assignProperty": "指派",
    "appTemplates.tasks.boardViewName": "看板",
    "appTemplates.tasks.completed": "完成",
    "appTemplates.tasks.description": "說明",
    "appTemplates.tasks.done": "完成",
    "appTemplates.tasks.downloadProjectTemplate": "下載專案模版",
    "appTemplates.tasks.downloadTaskTemplate": "下載任務模版",
    "appTemplates.tasks.hmlPriority": "高、中、低",
    "appTemplates.tasks.inProgress": "進行中",
    "appTemplates.tasks.isCurrentSprintProperty": "是目前的 Sprint",
    "appTemplates.tasks.myProjectsFeature": "我的專案",
    "appTemplates.tasks.myProjectsFeatureDescription": "與我相關的專案視圖",
    "appTemplates.tasks.myProjectsView": "我的任務",
    "appTemplates.tasks.myTasks": "我的任務",
    "appTemplates.tasks.myTasksFeature": "我的任務",
    "appTemplates.tasks.myTasksFeatureDescription": "指派給我之任務的表格視圖",
    "appTemplates.tasks.myTasksViewDescription": "我的任務表格",
    "appTemplates.tasks.notStarted": "未開始",
    "appTemplates.tasks.preview1Description": "此模版預覽影像的部分說明...",
    "appTemplates.tasks.preview2Description":
      "將專案細分為任務、將高層措施整理為個別任務",
    "appTemplates.tasks.priorityHigh": "高",
    "appTemplates.tasks.priorityLow": "低",
    "appTemplates.tasks.priorityMedium": "中",
    "appTemplates.tasks.priorityProperty": "優先級",
    "appTemplates.tasks.projectCalendarFeature": "行事曆",
    "appTemplates.tasks.projectCalendarFeatureDescription":
      "專案時程表行事曆視圖",
    "appTemplates.tasks.projectTitleProperty": "專案名稱",
    "appTemplates.tasks.projectsAndTasksPresetDescription":
      "適用於團隊的專案管理。依專案組織任務，並追蹤整個團隊的進度。",
    "appTemplates.tasks.projectsBoardFeature": "專案看板",
    "appTemplates.tasks.projectsBoardFeatureDescription": "專案看板視圖",
    "appTemplates.tasks.projectsCollectionName": "專案",
    "appTemplates.tasks.projectsFeatureDescription":
      "大型工作的資料庫，且可以是任務集合。",
    "appTemplates.tasks.projectsTimelineView": "時程表",
    "appTemplates.tasks.projectsTimelineViewDescription":
      "依狀態分組的專案時間軸",
    "appTemplates.tasks.simpleTasksPresetDescription":
      "簡易任務管理 — 建立、組織及追蹤你的任務。",
    "appTemplates.tasks.sprintStatus": "Sprint 狀態",
    "appTemplates.tasks.sprintTitleProperty": "Sprint 名稱",
    "appTemplates.tasks.sprintsCollectionName": "Sprint",
    "appTemplates.tasks.sprintsTimelineViewDescription": "Sprint 時間軸",
    "appTemplates.tasks.taskByDueDateFeature": "任務表格",
    "appTemplates.tasks.taskByDueDateFeatureDescription":
      "依不同到期日期範圍分組的任務表格視圖",
    "appTemplates.tasks.taskByPersonFeatureDescription":
      "依受託人分組的任務看板視圖。",
    "appTemplates.tasks.taskByPersonFeatureName": "依人員顯示的任務",
    "appTemplates.tasks.taskByPersonViewName": "人員",
    "appTemplates.tasks.taskByProjectFeatureDescription":
      "依專案分組的任務看板視圖",
    "appTemplates.tasks.taskByProjectFeatureName": "依專案顯示的任務",
    "appTemplates.tasks.taskByProjectViewDescription": "依專案分組的任務表格",
    "appTemplates.tasks.taskByProjectViewName": "所有專案與任務",
    "appTemplates.tasks.taskTitleProperty": "任務名稱",
    "appTemplates.tasks.tasksBoardByAssigneeDescription":
      "依受託人分組的任務看板",
    "appTemplates.tasks.tasksBoardByAssigneeViewName": "依人員分組的看板",
    "appTemplates.tasks.tasksBoardFeatureDescription": "視覺化看板上的工作。",
    "appTemplates.tasks.tasksBoardViewDescription": "任務看板",
    "appTemplates.tasks.tasksByDueDateDescription": "依到期日期分組的任務表格",
    "appTemplates.tasks.tasksByDueDateViewName": "下一個",
    "appTemplates.tasks.tasksByPersonViewDescription": "依受託人分組的任務表格",
    "appTemplates.tasks.tasksCollectionName": "任務",
    "appTemplates.tasks.tasksWithNoSprintViewDescription":
      "Sprint 任務和未來任務的表格",
    "appTemplates.tasks.todo": "待辦事項",
    "appTemplates.wiki.companyHomeWikiDescription":
      "一處集中公司資訊的地點，比如公司政策和重要公告。",
    "appTemplates.wiki.engineeringWikiDescription":
      "為工程團隊構建的知識庫，包括工程流程和設置指南。",
    "appTemplates.wiki.preview1Description": "此模版預覽影像的部分說明...",
    "appTemplates.wiki.preview2Description": "此模版預覽影片的部分說明...",
    "appTemplates.wiki.productWikiDescription":
      "為產品團隊構建的知識庫，包括啟動流程和團隊 OKR。",
    "appTemplates.wiki.salesWikiDescription":
      "為銷售團隊構建的知識庫，包括宣傳材料和銷售流程。",
    "appTemplates.wiki.wikiAppName": "知識庫",
    "appTemplates.wiki.wikiWelcomeSubtitle":
      "在同一個位置分享你團隊所有的重要資訊。從挑選下方模版開始。",
    "appTemplates.wiki.wikiWelcomeTitle": "團隊知識庫",
    "appTemplatesHelpers.bundledPropertyDelete.deleteMessage":
      "{count, plural, other {全部刪除}}",
    "appTemplatesNewSprints.projectManagement.projectsCollectionName": "專案",
    "appTemplatesNewSprints.projectManagement.sprintsCollectionName": "Sprints",
    "appTemplatesNewSprints.projectManagement.tasksCollectionName": "任務",
    "appTemplatesNewSprints.projects.advancedTaskFeatureDescription":
      "任務的看板視圖。",
    "appTemplatesNewSprints.projects.advancedTaskProjectStatus.name":
      "未開始、進行中、已完成、已歸檔",
    "appTemplatesNewSprints.projects.agilePresetName": "專案、任務、Sprints",
    "appTemplatesNewSprints.projects.agilePresetShortName": "專案",
    "appTemplatesNewSprints.projects.backlog": "待辦需求",
    "appTemplatesNewSprints.projects.bug": "錯誤",
    "appTemplatesNewSprints.projects.completed": "完成",
    "appTemplatesNewSprints.projects.completionRollupDescription":
      "視覺化每個專案的任務完成進度。",
    "appTemplatesNewSprints.projects.completionRollupName": "完成",
    "appTemplatesNewSprints.projects.doing": "進行中",
    "appTemplatesNewSprints.projects.dueDateProperty": "到期時間",
    "appTemplatesNewSprints.projects.endDateProperty": "結束日期",
    "appTemplatesNewSprints.projects.estimateProperty": "估計",
    "appTemplatesNewSprints.projects.estimatesFeatureDescription":
      "使用熱門方式和自訂選項為你的任務調整大小。",
    "appTemplatesNewSprints.projects.feature": "功能",
    "appTemplatesNewSprints.projects.markAsDuplicate": "標記為重複",
    "appTemplatesNewSprints.projects.markAsDuplicateFeatureDescription":
      "將任務標記為另一項任務的複本。",
    "appTemplatesNewSprints.projects.notStarted": "未開始",
    "appTemplatesNewSprints.projects.parentTasksName": "父任務",
    "appTemplatesNewSprints.projects.pointsEstimates": "點",
    "appTemplatesNewSprints.projects.projectStatus": "專案狀態",
    "appTemplatesNewSprints.projects.projectsAndTasksAppName": "專案",
    "appTemplatesNewSprints.projects.projectsAndTasksPresetName": "專案和任務",
    "appTemplatesNewSprints.projects.projectsAndTasksPresetShortName": "專案",
    "appTemplatesNewSprints.projects.simpleTaskFeatureDescription":
      "精細工作的資料庫，例如問題、任務或錯誤。",
    "appTemplatesNewSprints.projects.simpleTaskProjectStatus.name":
      "待辦事項，已完成",
    "appTemplatesNewSprints.projects.simpleTasksPresetName": "待辦清單",
    "appTemplatesNewSprints.projects.simpleTasksPresetShortName": "任務",
    "appTemplatesNewSprints.projects.sprintsCollectionEmptyButtonTitle":
      "新的 Sprint",
    "appTemplatesNewSprints.projects.sprintsCollectionEmptyDescription":
      "Sprint 定義一段時間，可供你在其中組織任務和專案。",
    "appTemplatesNewSprints.projects.sprintsCollectionEmptyTitle":
      "沒有 Sprint",
    "appTemplatesNewSprints.projects.sprintsName": "Sprint",
    "appTemplatesNewSprints.projects.startDateProperty": "開始日期",
    "appTemplatesNewSprints.projects.statusFeatureDescription":
      "追蹤任務/專案的狀態。",
    "appTemplatesNewSprints.projects.subTaskFeatureDescription":
      "將任務分解成較小的子任務並追蹤進度。",
    "appTemplatesNewSprints.projects.subTasksName": "子任務",
    "appTemplatesNewSprints.projects.tableViewName": "表格",
    "appTemplatesNewSprints.projects.tags": "標籤",
    "appTemplatesNewSprints.projects.taskBlockedByName": "封鎖者",
    "appTemplatesNewSprints.projects.taskBlockingName": "封鎖中",
    "appTemplatesNewSprints.projects.taskDependenciesFeatureDescription":
      "將任務標記為已被其他任務封鎖。",
    "appTemplatesNewSprints.projects.taskDependenciesName": "相依性",
    "appTemplatesNewSprints.projects.taskDueDateFeature": "任務到期日期",
    "appTemplatesNewSprints.projects.taskDueDateFeatureDescription":
      "為任務新增到期日期。",
    "appTemplatesNewSprints.projects.taskDuplicatesName": "重複項",
    "appTemplatesNewSprints.projects.taskGithubPrDisabledFeatureDescription":
      "要求工作區管理員設定 GitHub 應用程式以使用此功能。",
    "appTemplatesNewSprints.projects.taskGithubPrFeatureDescription":
      "根據 PR 狀態變更自動更新任務狀態",
    "appTemplatesNewSprints.projects.taskGithubPrRelationName":
      "GitHub 提取請求",
    "appTemplatesNewSprints.projects.taskIsDuplicateOfName": "重複項目",
    "appTemplatesNewSprints.projects.taskPriorityFeatureDescription":
      "標記優先執行的任務。",
    "appTemplatesNewSprints.projects.taskProjectRelationDependencyName":
      "專案 <-> 任務",
    "appTemplatesNewSprints.projects.taskProjectRelationName": "專案",
    "appTemplatesNewSprints.projects.taskReporter": "報告者",
    "appTemplatesNewSprints.projects.taskStatus": "任務狀態",
    "appTemplatesNewSprints.projects.taskType": "任務類型",
    "appTemplatesNewSprints.projects.taskTypeFeatureDescription":
      "使用模版建立不同類型的任務。",
    "appTemplatesNewSprints.projects.tasksBacklogSprintViewName": "待辦需求",
    "appTemplatesNewSprints.projects.tasksBoardFeatureName": "任務看板",
    "appTemplatesNewSprints.projects.tasksCollectionEmptyButtonTitle": "新任務",
    "appTemplatesNewSprints.projects.tasksCollectionEmptyDescription":
      "任務追蹤精細且單一的工作。",
    "appTemplatesNewSprints.projects.tasksCollectionEmptyTitle": "沒有任務",
    "appTemplatesNewSprints.projects.tasksCurrentKanbanSprintViewDescription":
      "目前 Sprint 任務的看板視圖",
    "appTemplatesNewSprints.projects.tasksCurrentSprintKanbanViewName":
      "目前 Sprint 看板",
    "appTemplatesNewSprints.projects.tasksCurrentSprintOwnerViewDescription":
      "依擁有者劃分目前 Sprint 任務的表格",
    "appTemplatesNewSprints.projects.tasksCurrentSprintOwnerViewName":
      "依擁有者劃分的目前 Sprint",
    "appTemplatesNewSprints.projects.tasksCurrentSprintViewDescription":
      "目前 Sprint 任務的看板",
    "appTemplatesNewSprints.projects.tasksCurrentSprintViewName": "這項 Sprint",
    "appTemplatesNewSprints.projects.tasksNextSprintViewDescription":
      "下一個 Sprint 任務的表格",
    "appTemplatesNewSprints.projects.tasksNextSprintViewName": "下一個 Sprint",
    "appTemplatesNewSprints.projects.tasksViewName": "所有任務",
    "appTemplatesNewSprints.projects.tasksWithSprintsFeatureDescription":
      "每幾週將你的團隊聚焦於一組任務上。",
    "appTemplatesNewSprints.projects.totalTasksCompletedInSprint": "任務總計",
    "appTemplatesNewSprints.projects.tshirtSizeEstimates": "T 恤大小",
    "appTemplatesNewSprints.projects.welcomeSubtitle":
      "追蹤待辦事項和團隊專案。從挑選下方模版開始。",
    "appTemplatesNewSprints.projects.welcomeTitle": "專案",
    "appTemplatesNewSprints.sprints.allTasksViewName": "所有的 Sprint",
    "appTemplatesNewSprints.sprints.current": "目前",
    "appTemplatesNewSprints.sprints.future": "未來",
    "appTemplatesNewSprints.sprints.last": "上一個",
    "appTemplatesNewSprints.sprints.newSprint": "新的 Sprint",
    "appTemplatesNewSprints.sprints.next": "下一個",
    "appTemplatesNewSprints.sprints.past": "過去",
    "appTemplatesNewSprints.sprints.sprint1": "Sprint 1",
    "appTemplatesNewSprints.sprints.sprint2": "Sprint 2",
    "appTemplatesNewSprints.sprints.sprint3": "Sprint 3",
    "appTemplatesNewSprints.sprints.sprintStatus": "Sprint 狀態",
    "appTemplatesNewSprints.sprints.sprintStatusDescription": "Sprint 的狀態",
    "appTemplatesNewSprints.sprints.sprintsCollectionName": "新的 Sprint",
    "appTemplatesNewSprints.sprints.sprintsTimelineView": "時間軸",
    "appTemplatesNewSprints.sprints.timelineProperty": "日期",
    "appTemplatesNewSprints.sprints.uniqueIdProperty": "Sprint ID",
    "appTemplatesNewSprints.tasks.agilePresetDescription":
      "適用於工程團隊的專案和問題追蹤。透過具有時間限制的 Sprint 組織任務和專案。",
    "appTemplatesNewSprints.tasks.allSprintsViewDescription":
      "所有 Sprint 的表格",
    "appTemplatesNewSprints.tasks.allTasksViewDescription": "所有任務的表格",
    "appTemplatesNewSprints.tasks.allTasksViewName": "全部顯示",
    "appTemplatesNewSprints.tasks.archived": "已歸檔",
    "appTemplatesNewSprints.tasks.assignProperty": "指派",
    "appTemplatesNewSprints.tasks.boardViewName": "看板",
    "appTemplatesNewSprints.tasks.completed": "完成",
    "appTemplatesNewSprints.tasks.description": "說明",
    "appTemplatesNewSprints.tasks.done": "完成",
    "appTemplatesNewSprints.tasks.hmlPriority": "高、中、低",
    "appTemplatesNewSprints.tasks.inProgress": "進行中",
    "appTemplatesNewSprints.tasks.isCurrentSprintProperty": "是目前的 Sprint",
    "appTemplatesNewSprints.tasks.myTasks": "我的任務",
    "appTemplatesNewSprints.tasks.myTasksFeature": "我的任務",
    "appTemplatesNewSprints.tasks.myTasksFeatureDescription":
      "指派給我的任務表格視圖",
    "appTemplatesNewSprints.tasks.myTasksViewDescription": "我的任務表格",
    "appTemplatesNewSprints.tasks.notStarted": "未開始",
    "appTemplatesNewSprints.tasks.preview1Description":
      "此模版預覽影像的部分說明...",
    "appTemplatesNewSprints.tasks.preview2Description":
      "將專案細分為任務、將高層措施的工作組織為個別任務。",
    "appTemplatesNewSprints.tasks.priorityHigh": "高",
    "appTemplatesNewSprints.tasks.priorityLow": "低",
    "appTemplatesNewSprints.tasks.priorityMedium": "中",
    "appTemplatesNewSprints.tasks.priorityProperty": "優先級",
    "appTemplatesNewSprints.tasks.projectsAndTasksPresetDescription":
      "適用於團隊的專案管理。依專案組織任務，並追蹤整個團隊的進度。",
    "appTemplatesNewSprints.tasks.projectsCollectionName": "專案",
    "appTemplatesNewSprints.tasks.projectsFeatureDescription":
      "大型工作的資料庫，且可以是任務集合。",
    "appTemplatesNewSprints.tasks.simpleTasksPresetDescription":
      "簡易任務管理：建立、組織及追蹤你的任務。",
    "appTemplatesNewSprints.tasks.sprintStatus": "Sprint 狀態",
    "appTemplatesNewSprints.tasks.sprintStatusRollupName": "Sprint 狀態",
    "appTemplatesNewSprints.tasks.sprintTitleProperty": "Sprint 名稱",
    "appTemplatesNewSprints.tasks.sprintsCollectionName": "Sprints2",
    "appTemplatesNewSprints.tasks.sprintsTimelineViewDescription":
      "Sprint 時間軸",
    "appTemplatesNewSprints.tasks.taskByDueDateFeature": "任務表格",
    "appTemplatesNewSprints.tasks.taskByDueDateFeatureDescription":
      "依不同到期日期範圍分組的任務表格視圖。",
    "appTemplatesNewSprints.tasks.taskByPersonFeatureDescription":
      "依受託人分組的任務表格視圖。",
    "appTemplatesNewSprints.tasks.taskByPersonFeatureName": "依人員顯示的任務",
    "appTemplatesNewSprints.tasks.taskByPersonViewName": "人員",
    "appTemplatesNewSprints.tasks.taskByProjectFeatureDescription":
      "依專案分組的任務看板視圖",
    "appTemplatesNewSprints.tasks.taskByProjectFeatureName": "依專案顯示的任務",
    "appTemplatesNewSprints.tasks.taskByProjectViewDescription":
      "依專案分組的任務表格",
    "appTemplatesNewSprints.tasks.taskByProjectViewName": "依專案",
    "appTemplatesNewSprints.tasks.taskTitleProperty": "任務名稱",
    "appTemplatesNewSprints.tasks.tasksBoardByAssigneeDescription":
      "依受託人分組的任務看板",
    "appTemplatesNewSprints.tasks.tasksBoardByAssigneeViewName":
      "依人員分組的看板",
    "appTemplatesNewSprints.tasks.tasksBoardFeatureDescription":
      "視覺化看板上的工作。",
    "appTemplatesNewSprints.tasks.tasksBoardViewDescription": "任務看板",
    "appTemplatesNewSprints.tasks.tasksByDueDateDescription":
      "依到期日期分組的任務表格",
    "appTemplatesNewSprints.tasks.tasksByDueDateViewName": "下一個",
    "appTemplatesNewSprints.tasks.tasksByPersonViewDescription":
      "依受託人分組的任務表格",
    "appTemplatesNewSprints.tasks.tasksCollectionName": "新任務",
    "appTemplatesNewSprints.tasks.tasksInCurrentNextBacklogGroupsDescription":
      "Sprint 任務和未來任務的表格",
    "appTemplatesNewSprints.tasks.tasksWithNoSprintViewDescription":
      "Sprint 任務和未來任務的表格",
    "appTemplatesNewSprints.tasks.todo": "待辦事項",
    "appTemplatesSprintsV2.projects.backlog": "待辦需求",
    "appTemplatesSprintsV2.projects.completed": "完成",
    "appTemplatesSprintsV2.projects.notStarted": "未開始",
    "appTemplatesSprintsV2.projects.tasksCompletedInSprint": "已完成的任務",
    "appTemplatesSprintsV2.projects.tasksCurrentKanbanSprintViewDescription":
      "目前 Sprint 任務的看板視圖",
    "appTemplatesSprintsV2.projects.tasksCurrentSprintKanbanViewName":
      "目前 Sprint 看板",
    "appTemplatesSprintsV2.projects.tasksCurrentSprintOwnerViewDescription":
      "依擁有者劃分目前 Sprint 任務的表格",
    "appTemplatesSprintsV2.projects.tasksCurrentSprintOwnerViewName":
      "依擁有者劃分的目前 Sprint",
    "appTemplatesSprintsV2.projects.tasksNextSprintViewDescription":
      "下一個 Sprint 任務的表格",
    "appTemplatesSprintsV2.projects.tasksNextSprintViewName": "下一個 Sprint",
    "appTemplatesSprintsV2.projects.totalTasksCompletedInSprint": "任務總計",
    "appTemplatesSprintsV2.projects.totalTasksInSprint": "任務總計",
    "appTemplatesSprintsV2.sprints.current": "目前",
    "appTemplatesSprintsV2.sprints.future": "未來",
    "appTemplatesSprintsV2.sprints.next": "下一步",
    "appTemplatesSprintsV2.sprints.past": "過去",
    "appTemplatesSprintsV2.sprints.sprintStatus": "Sprint 狀態",
    "appTemplatesSprintsV2.sprints.uniqueIdProperty": "Sprint ID",
    "appTemplatesSprintsV2.tasks.tasksInCurrentNextBacklogGroupsDescription":
      "Sprint 任務和未來任務的看板",
    "appTemplatesSprintsV2.tasks.tasksSprintPlanningDescription":
      "冲刺任务和后续任务板",
    "appTemplatesSprintsV2.tasks.tasksSprintPlanningName": "冲刺计划",
    "appUpdateListener.mobileAppNotSupported.android": "Android",
    "appUpdateListener.mobileAppNotSupported.ios": "iOS",
    "appUpdateListener.mobileAppNotSupported.message":
      "不再支援此應用程式版本。{br}請<upgradelink>升級你的 {androidOrIOSApp} 應用</upgradelink>。",
    "appUpdateListener.mobilePlatformNotSupported.message":
      "不再支援此作業系統。{br}請<upgradelink>升級到{supportedPlatformVersion}或更高版本。</upgradelink>",
    "appUpdateListener.reinstallDesktopApp.message":
      "<textlink>下載並重新安裝</textlink>你的電腦版程式，以便取得最新功能。",
    "appVersionMenuItem.desktopVersion.menuItem":
      "桌面版 {desktopVersionFormatted}",
    "appVersionMenuItem.downloadingUpdate.message":
      "正在下載 {version}，進度為 {percentComplete}",
    "appVersionMenuItem.lastUpdatedReactNativeVersion.menuItem":
      "行動版 {reactNativeVersionFormatted}",
    "appVersionMenuItem.lastUpdatedTime.menuItem": "更新於 {lastUpdatedTime}",
    "appVersionMenuItem.mobile.clearCache.message": "清除快取",
    "appVersionMenuItem.noUpdatesForApp.message": "無更新 {timeFromNow}",
    "appVersionMenuItem.updateReady.message": "更新就緒 {version}",
    "appVersionMenuItem.updateStateForApp.checking.message": "正在檢查更新…",
    "appVersionMenuItem.waitingForAppJsUpdate.message": "App.js - 等待中…",
    "appVersionMenuitem.updateError.message": "更新錯誤 {errorMessage}",
    "appearanceSetting.dark.label": "深色",
    "appearanceSetting.light.label": "淺色",
    "appearanceSetting.system.label": "使用系統設定",
    "appearanceSettings.description.message": "自訂 Notion 在裝置上的外觀。",
    "appearanceSettings.modal.done": "完成",
    "appearanceSettings.title": "外觀",
    "appleErrors.api.missingAccessTokenError": "Apple 無法授權登入。",
    "appleErrors.api.missingBetaAppReviewSubmission":
      "找不到 betaAppReviewSubmission 條目。",
    "appleErrors.api.missingIdError": "在從 Apple 取得使用者資訊時出現問題。",
    "appleErrors.api.missingPreReleaseVersion":
      "找不到 preReleaseVersion 條目。",
    "appleErrors.api.statusError": "Apple 服務出現問題。",
    "appleErrors.api.tokenError": "在與 Apple 驗證你的身份時出現問題。",
    "applyCoupon.error.invalidCoupon": "無法將優惠券套用到你的帳戶。",
    "applyCreditToggle.applyCredit.amount": "套用 {creditAmount} 點",
    "approveAccessActivityAction.approveButton.label": "核准",
    "approveSpaceMembershipActivityAction.approveButton.label": "核准",
    "approveSpaceMembershipActivityAction.declineButton.label": "拒絕",
    "approveSpaceMembershipActivityAction.disabed.disabledMessage":
      "若要核准此要求，請<textlink>在設定中啟用成員資格要求</textlink>",
    "approveSpaceMembershipActivityAction.disabled.disabledMessageMobile":
      "若要核准此要求，請在桌面上啟用成員資格要求",
    "approveSpaceMembershipActivityAction.ignoreButton.label": "拒絕",
    "approveSpaceMembershipActivityAction.requestApproved.title":
      "由 {grantedBy} 核准",
    "approveSpaceMembershipActivityAction.requestDeclined.title":
      "被 {grantedBy} 拒絕",
    "approveSpaceMembershipActivityAction.viewAllRequests.label":
      "查看所有要求",
    "approveTeamMembershipActivityButton.approveButton.label": "核准",
    "approveTeamMembershipActivityButton.declineButton.label": "拒絕",
    "approveTeamMembershipActivityButton.requestApproved.title":
      "由 {grantedBy} 核准",
    "approveTeamMembershipActivityButton.requestDeclined.title":
      "被 {grantedBy} 拒絕",
    "apps.AppInitializationOverlay.startButton": "立即開始",
    "apps.AppInitializationOverlay.welcomeTitle.default": "歡迎使用 {appName}",
    "apps.emptyAppOverlay.actionButton.label": "新增 {entity}",
    "apps.emptyAppOverlay.emptyMessage.label": "沒有 {entity}",
    "apps.workspacesetup.button.continueWithChosenApps":
      "{num, plural, one {繼續使用 1 個模版} other {繼續使用 {num} 個模版}}",
    "apps.workspacesetup.button.continueWithoutChoosingApps":
      "我稍後會新增模版",
    "apps.workspacesetup.header.description":
      "將模版加入你的工作區，並透過幾個簡單的步驟自訂內容。",
    "apps.workspacesetup.header.title": "讓你的團隊開始使用 Notion",
    "asanaActions.authenticatingWithAsana.loadingMessage": "Asana 授權中…",
    "asanaActions.loginWithAsanaPopupModal.title": "Asana 登入",
    "asanaImport.delinkAsanaAccount": "移除 Asana 帳戶中...",
    "asanaImport.getStarted.next": "下一步",
    "asanaImport.gettingAsanaConnections": "擷取 Asana 連線中...",
    "asanaImport.importingData.failed.problemsOccured":
      "从Asana工作空间导入数据时出现问题。",
    "asanaImport.importingData.feelFreeToLeave": "你可以离开这个窗口。",
    "asanaImport.importingData.sendEmail":
      "如果导入完成或出现问题，我们将发送电子邮件。",
    "asanaImport.importsTab.confirm.subtitle": "下列資料已成功匯入。",
    "asanaImport.importsTab.confirm.tabTitle": "確認",
    "asanaImport.importsTab.confirm.title": "確認資料",
    "asanaImport.importsTab.getStarted.description":
      "你可以使用逐步匯入工具自 Asana 輕鬆匯入專案。我們會要求你提供驗證詳細資料，以便我們存取其 API。",
    "asanaImport.importsTab.getStarted.tabTitle": "立即開始",
    "asanaImport.importsTab.getStarted.title": "立即開始",
    "asanaImport.importsTab.importingData.importFailed": "导入失败",
    "asanaImport.importsTab.importingData.secondaryTitle": "匯入專案中...",
    "asanaImport.importsTab.importingData.subtitle":
      "根據你的專案大小，這可能需要幾分鐘。你可以離開此視窗。我們會在匯入完成時向你傳送電子郵件。",
    "asanaImport.importsTab.importingData.tabTitle": "匯入資料中",
    "asanaImport.importsTab.importingData.title": "匯入資料中",
    "asanaImport.importsTab.selectData.completedHelperText": "（已完成）",
    "asanaImport.importsTab.selectData.importInto": "匯入",
    "asanaImport.importsTab.selectData.importedInto": "已匯入",
    "asanaImport.importsTab.selectData.loadMoreProjects": "載入更多專案中...",
    "asanaImport.importsTab.selectData.loadingMoreProjects":
      "載入更多專案中...",
    "asanaImport.importsTab.selectData.loadingProjectsHelperText":
      "載入工作區專案中...",
    "asanaImport.importsTab.selectData.newTeamspace": "新團隊空間",
    "asanaImport.importsTab.selectData.privateSpaceTitle": "私人",
    "asanaImport.importsTab.selectData.searchTeamspacePlaceholder":
      "搜尋團隊空間",
    "asanaImport.importsTab.selectData.selectATeamspace": "選擇團隊空間",
    "asanaImport.importsTab.selectData.selectProjects": "選擇專案",
    "asanaImport.importsTab.selectData.tabTitle": "選擇 Asana 工作區",
    "asanaImport.importsTab.selectData.tasksHelperText": "任務",
    "asanaImport.importsTab.selectData.title": "選擇資料",
    "asanaImport.importsTab.selectData.workspaceChoiceHelperText":
      "一次只能匯入一個工作區。",
    "asanaImport.linkingAsanaAccount": "Asana 授權中...",
    "asanaImport.selectData.backButtonText": "返回",
    "asanaImportOption.actionsMenu.connectAnotherAccount": "連接另一個帳號",
    "asanaImportOption.actionsMenu.import": "匯入",
    "asanaImportOption.actionsMenu.removeIntegration": "移除",
    "asanaImportOption.asanaButton.accountDelinkingInProgress":
      "正在删除帐户...",
    "asanaImportOption.asanaButton.accountLinkingInProgress": "正在验证...",
    "asanaImportOption.asanaButton.ariaLabel": "自 Asana 按鈕匯入",
    "asanaImportOption.asanaButton.title": "Asana",
    "asanaImportOption.search.noResultsPlaceholder": "沒有專案",
    "asanaImportOption.search.placeholder": "搜尋專案…",
    "asanaImportStatus.importSuccessful": "項目匯入成功。",
    "asanaImportStatus.userRatelimited":
      "由於匯入的項目數量太多，可能需要 {timeOfDelay} 才能匯入。您可以免費使用 Notion。",
    "asanaImporter.selectData.selectWorkspacePlaceholder": "選擇工作區",
    "attributionSetting.description.message":
      "在團隊成員建立或編輯的區塊左方查看他們的姓名首字母。",
    "attributionSetting.title": "區塊歸屬",
    "audioBlock.embed.caption": "適用於 .mp3、.wav 和 .ogg 等格式",
    "audioBlock.embedAudio.button.label": "嵌入音訊",
    "audioBlock.placeholder": "加入音訊檔案",
    "auditLog.actionNames.eventColumn.loginWithCityStateAndCountry":
      "已在 {geolocation} 於 {platform} 登入",
    "auditLog.actionNames.eventColumn.loginWithPlatform": "已登入 {platform}",
    "auditLog.actionNames.eventColumn.private_content_transferred":
      "私人內容已從 {fromUserName} 傳輸至 {toUserName}",
    "auditLog.bannerText.pageAudienceNotification":
      "你現在可以查看目標頁面的受眾（或可視性層級），以便了解之後的頁面事件。<a>了解更多→</a>",
    "auditLog.dateTimeRangeMenu.endingDatePlaceholder": "結束",
    "auditLog.dateTimeRangeMenu.startingDatePlaceholder": "開始",
    "auditLog.dateTimeRangeMenu.timePlaceholderInNumber": "上午 12:00",
    "auditLogCSV.menu.30days": "過去 30 天",
    "auditLogCSV.menu.365days": "過去 1 年",
    "auditLogCSV.menu.365days.prompt":
      "確定要匯出一年的 CSV 嗎？當有背景處理作業時，你無法重複此動作。",
    "auditLogCSV.menu.60days": "過去 60 天",
    "auditLogCSV.menu.90days": "過去 90 天",
    "auditLogCSV.menu.export": "匯出",
    "auditLogCSV.popup.tooltip": "按一下要以 CSV 表單匯出稽核日誌檔的選項",
    "auditLogColumnEvent.tooltip.audienceMessage": "頁面受眾：{audience}",
    "auditLogColumnEvent.tooltip.pageAudience.private": "私人",
    "auditLogColumnEvent.tooltip.pageAudience.sharedExternally": "已於外部分享",
    "auditLogColumnEvent.tooltip.pageAudience.sharedInternally": "已於內部分享",
    "auditLogColumnEvent.tooltip.pageAudience.sharedToWeb": "已分享到網路",
    "auditLogEntry.adminContentSearch.audience": '受眾="{audience}"',
    "auditLogEntry.adminContentSearch.createdBy": '建立者="{createdBy}"',
    "auditLogEntry.adminContentSearch.createdTime": '建立時間="{createdTime}"',
    "auditLogEntry.adminContentSearch.lastEditedTime":
      '上次編輯時間="{lastEditedTime}"',
    "auditLogEntry.adminContentSearch.predicateSplit": ",",
    "auditLogEntry.adminContentSearch.query": '查詢="{query}"',
    "auditLogEntry.adminContentSearch.sharedWith": '分享對象="{sharedWith}"',
    "auditLogEntry.adminContentSearch.teamspace":
      '{teamspaceCount, plural, other {團隊空間="{teamspaces}"}}',
    "auditLogEntry.changes.page_moved.new_parent": "至 {newParentName}",
    "auditLogEntry.changes.page_moved.old_parent": "從 {oldParentName}",
    "auditLogEntry.changes.space_transfer_status_changed.space_name":
      "適用於 {spaceName}",
    "auditLogEntry.changes.workspaceCreation.afterSetting":
      "至 {afterWorkspaceCreationSetting}",
    "auditLogEntry.changes.workspaceCreation.beforeSetting":
      "從 {prevWorkspaceCreationSetting}",
    "auditLogEntry.user.noName": "使用者",
    "auditLogEventFilter.actionNames.admin_content_search_queried":
      "查詢的管理員內容搜尋",
    "auditLogEventFilter.actionNames.ai_admin_legal_acceptance_toggled":
      "已切換工作區的 Notion AI。",
    "auditLogEventFilter.actionNames.automation_created": "已建立自動化",
    "auditLogEventFilter.actionNames.automation_edited": "已編輯自動化",
    "auditLogEventFilter.actionNames.private_content_transferred":
      "私人內容已傳輸",
    "auditLogEventFilter.actionNames.workspace_analytics_toggled":
      "已切換工作區分析追蹤",
    "auditLogPaginatedTable.copiedText.noEmail": "不適用",
    "auditLogPaginatedTable.copiedText.noRole": "不適用",
    "auditLogPaginatedTable.copiedText.notionAdmin": "notion_admin",
    "auditLogSettings.metadata.cityAndCountry": "{countryCode} {city}",
    "auditLogSettings.metadata.cityStateAndCountry":
      "{countryCode}，{state}，{city}",
    "auditLogSettings.metadata.ipAddress": "IP 位址：{ip}",
    "auditLogSettings.timeTooltip.utcTime": "UTC：{time}",
    "auditLogSpaceRoleMessages.admin": "管理員",
    "auditLogSpaceRoleMessages.guest": "訪客",
    "auditLogSpaceRoleMessages.member": "成員",
    "auditLogSpaceRoleMessages.membershipAdmin": "成員資格管理員",
    "auditLogSpaceRoleMessages.noAccess": "沒有存取權限",
    "auditLogSpaceRoleMessages.pageGuest": "頁面訪客",
    "auditLogSpaceRoleMessages.teamGuest": "團隊空間訪客",
    "auditLogSpaceRoleMessages.workspaceOwner": "工作區擁有者",
    "auditlog.actionNames.allowed_support_access":
      "已授予 {name} 在 {date} 前的支援存取權限",
    "auditlog.actionNames.automatic_account_creation_disabled":
      "已禁用登入時自動建立帳戶",
    "auditlog.actionNames.automatic_account_creation_enabled":
      "已啟用登入時自動建立帳戶",
    "auditlog.actionNames.eventColumn.a_file": "檔案",
    "auditlog.actionNames.eventColumn.a_file_with_extension":
      "{extension} 檔案",
    "auditlog.actionNames.eventColumn.ai_admin_legal_acceptance_toggled":
      "{enabled} 工作區的 Notion AI。",
    "auditlog.actionNames.eventColumn.ai_admin_legal_acceptance_toggled.disabled":
      "已啟用",
    "auditlog.actionNames.eventColumn.ai_admin_legal_acceptance_toggled.enabled":
      "已停用",
    "auditlog.actionNames.eventColumn.allowed_email_domain_added":
      "已將「{addedValue}」新增到允許的電子郵件網域",
    "auditlog.actionNames.eventColumn.allowed_email_domain_removed":
      "已將「{removedValue}」自允許的電子郵件網域中移除",
    "auditlog.actionNames.eventColumn.automation_created":
      "已於 {pageTitle} 建立 {automationType}",
    "auditlog.actionNames.eventColumn.automation_edited":
      "已於 {pageTitle} 編輯 {automationType}",
    "auditlog.actionNames.eventColumn.automation_type.automation": "自動化",
    "auditlog.actionNames.eventColumn.automation_type.recurrence":
      "重複的自動化",
    "auditlog.actionNames.eventColumn.disable_guests_toggled": "訪客",
    "auditlog.actionNames.eventColumn.disable_team_guests_toggled":
      "團隊空間訪客",
    "auditlog.actionNames.eventColumn.email_changed":
      "已將電子郵件由 {oldEmail} 變更為 {newEmail}",
    "auditlog.actionNames.eventColumn.export_toggled": "匯出",
    "auditlog.actionNames.eventColumn.file_downloaded":
      "已從 {pageName} 下載 {fileName}",
    "auditlog.actionNames.eventColumn.file_uploaded": "已上傳一個檔案",
    "auditlog.actionNames.eventColumn.file_uploaded_public":
      "已將檔案上傳到 {pageName}",
    "auditlog.actionNames.eventColumn.for_private_team": "針對私人團隊空間",
    "auditlog.actionNames.eventColumn.for_team_name": "針對 {teamName}",
    "auditlog.actionNames.eventColumn.from_old_team_name_to_new_team_name":
      "從「{oldTeamName}」變更為「{newTeamName}」",
    "auditlog.actionNames.eventColumn.from_unknown_team_name_to_new_team_name":
      "從某個團隊空間名稱變更為「{newTeamName}」",
    "auditlog.actionNames.eventColumn.group": "群組",
    "auditlog.actionNames.eventColumn.group_added_to_team":
      "已將 {groupName} 以團隊空間成員邀請至 {teamName}",
    "auditlog.actionNames.eventColumn.group_removed_from_team":
      "已將 {groupName} 自 {teamName} 移除",
    "auditlog.actionNames.eventColumn.guest_membership_requests_toggled":
      "{enabled} 允許頁面訪客要求以成員身分加入到工作區",
    "auditlog.actionNames.eventColumn.guest_membership_requests_toggled.disabled":
      "已停用",
    "auditlog.actionNames.eventColumn.guest_membership_requests_toggled.enabled":
      "已啟用",
    "auditlog.actionNames.eventColumn.guest_removed":
      "已將訪客 {guestNameAndEmail} 自工作區移除",
    "auditlog.actionNames.eventColumn.idp_metadata_url_set":
      "將 IDP 詮釋資料 URL 設定為「{newValue}」",
    "auditlog.actionNames.eventColumn.idp_metadata_url_updated":
      "已將 IDP 詮釋資料 URL 從「{oldValue}」變更為「{newValue}」",
    "auditlog.actionNames.eventColumn.idp_metadata_xml_removed":
      "已移除 IDP 詮釋資料 XML",
    "auditlog.actionNames.eventColumn.idp_metadata_xml_updated":
      "已更新 IDP 詮釋資料 XML",
    "auditlog.actionNames.eventColumn.inviteLink.disabled": "已禁用邀請連結",
    "auditlog.actionNames.eventColumn.inviteLink.enabled": "已啟用邀請連結",
    "auditlog.actionNames.eventColumn.invite_link_reset": "重設邀請連結",
    "auditlog.actionNames.eventColumn.logged_in_platform": "在 {platform} 平台",
    "auditlog.actionNames.eventColumn.logout": "已登出",
    "auditlog.actionNames.eventColumn.member_added_to_group":
      "已將 {memberNameAndEmail} 加入 {groupName}",
    "auditlog.actionNames.eventColumn.member_added_to_team":
      "已將 {memberNameAndEmail} 以 {teamRole} 邀請至 {teamName}",
    "auditlog.actionNames.eventColumn.member_invited":
      "已邀請 {memberNameAndEmail} 以 {newRole} 加入工作區",
    "auditlog.actionNames.eventColumn.member_joined": "已加入工作區",
    "auditlog.actionNames.eventColumn.member_joined_team":
      "以 {teamRole} 加入 {teamName}",
    "auditlog.actionNames.eventColumn.member_left": "離開工作區",
    "auditlog.actionNames.eventColumn.member_left_team": "已離開 {teamName}",
    "auditlog.actionNames.eventColumn.member_removed":
      "已將 {memberNameAndEmail} 自工作區移除",
    "auditlog.actionNames.eventColumn.member_removed_from_group":
      "已將 {memberNameAndEmail} 自 {groupName} 移除",
    "auditlog.actionNames.eventColumn.member_removed_from_team":
      "已將 {memberNameAndEmail} 自 {teamName} 移除",
    "auditlog.actionNames.eventColumn.member_role_updated":
      "已將成員 {memberNameAndEmail} 從 {oldRole} 更新至 {newRole}",
    "auditlog.actionNames.eventColumn.member_team_role_updated":
      "已將 {memberNameAndEmail} 從 {oldTeamRole} 更新為 {teamName} 中的 {newTeamRole}",
    "auditlog.actionNames.eventColumn.membership_request_resolved":
      "{status} 要求將 {email} 以成員身分加入到工作區",
    "auditlog.actionNames.eventColumn.membership_request_resolved.approved":
      "已核准",
    "auditlog.actionNames.eventColumn.membership_request_resolved.declined":
      "已拒絕",
    "auditlog.actionNames.eventColumn.membership_requests_toggled":
      "{enabled} 允許成員要求加入新的成員",
    "auditlog.actionNames.eventColumn.membership_requests_toggled.disabled":
      "已停用",
    "auditlog.actionNames.eventColumn.membership_requests_toggled.enabled":
      "已啟用",
    "auditlog.actionNames.eventColumn.old_domain": "自「{oldDomain}」",
    "auditlog.actionNames.eventColumn.otherWorkspace": "另一個工作區",
    "auditlog.actionNames.eventColumn.page_access_requests_toggled":
      "來自非成員的頁面存取權限要求",
    "auditlog.actionNames.eventColumn.page_created_general": "已建立頁面",
    "auditlog.actionNames.eventColumn.page_created_private": "已建立私人頁面",
    "auditlog.actionNames.eventColumn.page_created_team":
      "已在 {teamName} 下方建立頁面",
    "auditlog.actionNames.eventColumn.page_created_under":
      "已用 {parentPageName} 建立頁面",
    "auditlog.actionNames.eventColumn.page_created_workspace":
      "已在工作區建立頁面",
    "auditlog.actionNames.eventColumn.page_deleted": "{pageName} 已刪除",
    "auditlog.actionNames.eventColumn.page_exported": "已匯出 {pageName}",
    "auditlog.actionNames.eventColumn.page_moved":
      "已 {inSudoMode, select, true {使用系統管理員權限} other {}}，將 {pageName} 從 {oldParentName} 移動到 {newParentName}",
    "auditlog.actionNames.eventColumn.page_moved_team":
      "已 {inSudoMode, select, true {使用系統管理員權限} other {}}，將 {pageName} 從 {oldTeamAndPage} 移動到 {newTeamAndPage}",
    "auditlog.actionNames.eventColumn.page_permanently_deleted":
      "永久刪除 {pageName}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_team":
      "已{inSudoMode, select, true {使用系統管理員權限} other {}}，將 {teamName} 的 {pageName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_bot":
      "已{inSudoMode, select, true {使用系統管理員權限} other {}}，將 {botName} 的 {pageName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_default":
      "已{inSudoMode, select, true {使用系統管理員權限} other {}}，將 {memberNameAndEmail} 的 {pageName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_group":
      "已將群組 {groupName} 的 {pageName} 存取權限由 {oldRole} 更新至 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_guest":
      "已{inSudoMode, select, true {使用系統管理員權限} other {}}，將訪客 {guestNameAndEmail} 的 {pageName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.page_permissions_updated_workspace_space":
      "已{inSudoMode, select, true {使用系統管理員權限} other {}}，將工作區每個成員的 {pageName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.page_restored": "已恢復 {pageName}",
    "auditlog.actionNames.eventColumn.page_shared_to_web.disabled":
      "已 {inSudoMode, select, true {使用系統管理員權限} other {}}，停用 {pageName} 的網頁分享",
    "auditlog.actionNames.eventColumn.page_shared_to_web.enabled":
      "已 {inSudoMode, select, true {使用系統管理員權限} other {}}，啟用 {pageName} 的網頁分享",
    "auditlog.actionNames.eventColumn.page_viewed_under": "已查看 {pageName}",
    "auditlog.actionNames.eventColumn.pages_to_other_workspaces_toggled":
      "移動頁面或儲存複本到其他工作區",
    "auditlog.actionNames.eventColumn.password_changed": "已變更登密碼",
    "auditlog.actionNames.eventColumn.password_cleared": "已清除登入密碼",
    "auditlog.actionNames.eventColumn.password_set": "建立登入密碼",
    "auditlog.actionNames.eventColumn.picture_changed": "已變更個人檔案圖片",
    "auditlog.actionNames.eventColumn.preferred_name_changed":
      "已將名稱從「{oldValue}」變更為「{newValue}」",
    "auditlog.actionNames.eventColumn.preferred_name_changed_from_value":
      "已移除「{oldValue}」",
    "auditlog.actionNames.eventColumn.preferred_name_changed_generic":
      "已變更名稱",
    "auditlog.actionNames.eventColumn.preferred_name_changed_to_value":
      "將名稱設定為「{newValue}」",
    "auditlog.actionNames.eventColumn.private": "私人",
    "auditlog.actionNames.eventColumn.private_page": "私人頁面",
    "auditlog.actionNames.eventColumn.private_team": "私人團隊空間",
    "auditlog.actionNames.eventColumn.public_page_changed":
      "已將公用首頁從「{oldPage}」變更為「{newPage}」",
    "auditlog.actionNames.eventColumn.public_page_set":
      "將「{newPage}」設為公用首頁",
    "auditlog.actionNames.eventColumn.public_page_sharing_toggled":
      "公開分享頁面的成員",
    "auditlog.actionNames.eventColumn.space_claim_deletion.deleted":
      "已使用網域管理刪除工作區 {spaceName}",
    "auditlog.actionNames.eventColumn.space_claim_deletion.status_cleared":
      "已使用網域管理恢復工作區 {spaceName}",
    "auditlog.actionNames.eventColumn.space_claim_deletion_status_changed.fallback_message":
      "{spaceName} 的可宣告工作區刪除狀態變更",
    "auditlog.actionNames.eventColumn.space_claim_upgrade_requested":
      "已傳送宣告並升級 {workspaceName} 的要求。",
    "auditlog.actionNames.eventColumn.space_claim_upgrade_status_changed.fallback_message":
      "{workspaceName} 的工作區宣告狀態變更",
    "auditlog.actionNames.eventColumn.space_claim_upgrade_status_cleared":
      "待處理的 {workspaceName} 工作區宣告已從 {oldStatus} 清除",
    "auditlog.actionNames.eventColumn.space_claim_upgrade_status_completed":
      "已宣告 {workspaceName} 並升級至企業版",
    "auditlog.actionNames.eventColumn.space_transfer_status_changed.fallback_message":
      "工作區轉移狀態已變更{spaceNameMessage}",
    "auditlog.actionNames.eventColumn.space_transfer_status_changed.newStatus":
      "{newStatus, select, requested {工作區轉移要求已啟動{spaceNameMessage}。} started {工作區轉移已開始{spaceNameMessage}} completed {工作區轉移已完成{spaceNameMessage}} other {工作區轉移狀態變更至 {newStatus}{spaceNameMessage}}}",
    "auditlog.actionNames.eventColumn.space_transfer_status_cleared":
      "工作區轉移要求已將 {spaceNameMessage} 從 {oldStatus} 的先前狀態清除",
    "auditlog.actionNames.eventColumn.team": "團隊空間",
    "auditlog.actionNames.eventColumn.team_access_level_types.team_members":
      "任何團隊空間成員",
    "auditlog.actionNames.eventColumn.team_access_level_types.team_owners":
      "只有團隊空間擁有者",
    "auditlog.actionNames.eventColumn.team_access_level_types.unknown": "未知",
    "auditlog.actionNames.eventColumn.team_and_page": "團隊空間和頁面",
    "auditlog.actionNames.eventColumn.team_archived": "已歸檔 {teamName}",
    "auditlog.actionNames.eventColumn.team_created": "已建立 {teamName}",
    "auditlog.actionNames.eventColumn.team_creation_admins_setting_disabled":
      "已停用成員建立團隊空間",
    "auditlog.actionNames.eventColumn.team_creation_admins_setting_enabled":
      "已啟用成員建立團隊空間",
    "auditlog.actionNames.eventColumn.team_default_disabled":
      "已將 {teamName} 自預設團隊空間清單移除。工作區成員將不再自動新增至團隊空間",
    "auditlog.actionNames.eventColumn.team_default_enabled":
      "將{teamName}添加到默認團隊空間列表。工作區成員將自動新增至團隊空間",
    "auditlog.actionNames.eventColumn.team_description_changed":
      "已變更 {teamName} 的說明",
    "auditlog.actionNames.eventColumn.team_export_disabled":
      "已停用 {teamName} 的匯出",
    "auditlog.actionNames.eventColumn.team_export_enabled":
      "已啟用 {teamName} 的匯出",
    "auditlog.actionNames.eventColumn.team_group_permission_updated":
      "已將 {teamName} 的 {groupName} 自訂權限從 {oldPermission} 更新為 {newPermission}。",
    "auditlog.actionNames.eventColumn.team_guest_default_permission_updated":
      "已將 {teamName} 中團隊空間訪客的預設頁面權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.team_guests_toggled.team_space_equal":
      ". 這與目前的工作區設定相同",
    "auditlog.actionNames.eventColumn.team_guests_toggled.team_space_less_restrictive":
      ". 這比起目前的工作區設定更不具有限制",
    "auditlog.actionNames.eventColumn.team_guests_toggled.team_space_more_restrictive":
      ". 這比起目前的工作區設定更具有限制",
    "auditlog.actionNames.eventColumn.team_guests_toggled_disabled":
      "已停用 {teamName} 的訪客",
    "auditlog.actionNames.eventColumn.team_guests_toggled_enabled":
      "已啟用 {teamName} 的訪客",
    "auditlog.actionNames.eventColumn.team_icon_changed":
      "已變更 {teamName} 的圖示",
    "auditlog.actionNames.eventColumn.team_invite_access_changed":
      "已變更可以邀請團隊成員到 {newType} 之 {teamName} 的人員",
    "auditlog.actionNames.eventColumn.team_level_guest": "團隊空間訪客",
    "auditlog.actionNames.eventColumn.team_member": "團隊空間成員",
    "auditlog.actionNames.eventColumn.team_member_default_permission_updated":
      "已將 {teamName} 中團隊空間成員的預設頁面權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.team_name_changed":
      "已變更團隊空間名稱 {oldTeamNameToNewTeamName}",
    "auditlog.actionNames.eventColumn.team_owner": "團隊空間擁有者",
    "auditlog.actionNames.eventColumn.team_parent_page":
      "{teamName} 頁面 {parentPage}",
    "auditlog.actionNames.eventColumn.team_privacy_type_changed":
      "已將{teamName}的團隊空間隱私類型從{oldType}更改為{newType}",
    "auditlog.actionNames.eventColumn.team_privacy_types.closed": "封閉式團隊",
    "auditlog.actionNames.eventColumn.team_privacy_types.default": "預設值",
    "auditlog.actionNames.eventColumn.team_privacy_types.open": "開放式團隊",
    "auditlog.actionNames.eventColumn.team_privacy_types.private": "私人",
    "auditlog.actionNames.eventColumn.team_privacy_types.unknown":
      "未知的私人狀態",
    "auditlog.actionNames.eventColumn.team_public_page_sharing_disabled":
      "已停用成員在 {teamName} 下方公開分享頁面",
    "auditlog.actionNames.eventColumn.team_public_page_sharing_enabled":
      "已啟用成員在 {teamName} 下方公開分享頁面",
    "auditlog.actionNames.eventColumn.team_restored": "已恢復 {teamName}",
    "auditlog.actionNames.eventColumn.team_sidebar_editing_disabled":
      "已停用成員變更 {teamName} 的側邊欄區段",
    "auditlog.actionNames.eventColumn.team_sidebar_editing_enabled":
      "已啟用成員變更 {teamName} 的側邊欄區段",
    "auditlog.actionNames.eventColumn.team_user_permission_updated":
      "已將 {teamName} 的 {userNameOrEmail} 自訂權限從 {oldPermission} 更新為 {newPermission}。",
    "auditlog.actionNames.eventColumn.team_workspace_default_permission_updated":
      "已為工作區中其他成員將 {teamName} 權限從 {oldRole} 更新為 {newRole}",
    "auditlog.actionNames.eventColumn.teams_enabled_for_space":
      "已啟用 {workspaceName} 的團隊空間",
    "auditlog.actionNames.eventColumn.thisWorkspace": "此工作區",
    "auditlog.actionNames.eventColumn.toggleEvent.disabled":
      "已禁用 {workspaceSetting}",
    "auditlog.actionNames.eventColumn.toggleEvent.enabled":
      "已啟用 {workspaceSetting}",
    "auditlog.actionNames.eventColumn.untitled_page": "無標題的頁面",
    "auditlog.actionNames.eventColumn.user_deleted": "使用者已刪除",
    "auditlog.actionNames.eventColumn.workspaceLevel": "工作區等級",
    "auditlog.actionNames.eventColumn.workspace_creation_set_for_email_domain":
      "已變更工作區建立作業設定 {before}{after}。",
    "auditlog.actionNames.eventColumn.workspace_creation_set_for_email_domain.fallback_message":
      "已變更工作區建立作業設定",
    "auditlog.actionNames.eventColumn.workspace_domain_changed":
      "已將工作區網域 {oldValue} 變更為「{newValue}」",
    "auditlog.actionNames.eventColumn.workspace_exported":
      "已匯出所有工作區內容",
    "auditlog.actionNames.eventColumn.workspace_icon_changed":
      "已變更工作區圖示",
    "auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.approved_only":
      "已禁用成員安裝整合",
    "auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.disabled_built_by_notion.from_approved_or_built_by_notion":
      "已禁用 Built-By-Notion 整合的自動批准",
    "auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.enabled_built_by_notion":
      "已啟用 Built By Notion 整合的自動批准",
    "auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.fallback_message":
      "已變更工作區整合限制",
    "auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.no_restrictions":
      "已啟用成員安裝整合",
    "auditlog.actionNames.eventColumn.workspace_name_changed":
      "已將工作區名稱從「{oldValue}」變更為「{newValue}」",
    "auditlog.actionNames.eventColumn.workspace_sidebar_editing_toggled":
      "變更工作區部分的成員",
    "auditlog.actionNames.revoked_support_access":
      "已撤銷 {name} 的支援存取權限",
    "auditlog.actionNames.saml_disabled": "已禁用 SAML",
    "auditlog.actionNames.saml_enabled": "已啟用 SAML",
    "auditlog.actionNames.saml_enforced": "已啟用強制使用 SAML",
    "auditlog.actionNames.saml_unenforced": "已禁用強制使用 SAML",
    "auditlog.actionNames.scim_token_generated": "產生的 API SCIM 權杖",
    "auditlog.actionNames.scim_token_revoked": "撤銷的 API SCIM 權杖",
    "auditlog.actionNames.workspace_analytics_disabled":
      "已停用工作區分析的頁面視圖追蹤",
    "auditlog.actionNames.workspace_analytics_enabled":
      "已啟用工作區分析的頁面視圖追蹤",
    "auditlog.error.loadCurrentAuditLogError": "無法載入稽核日誌",
    "auditlog.logTable.dateColumn.header": "日期",
    "auditlog.logTable.eventColumn.header": "事件",
    "auditlog.logTable.nextPage": "下一個",
    "auditlog.logTable.noResults": "沒有結果",
    "auditlog.logTable.noResultsHelpText":
      "請嘗試不同的篩選器。可能需要一段時間才會顯示日誌檔。",
    "auditlog.logTable.previousPage": "上一個",
    "auditlog.logTable.userColumn.header": "使用者",
    "auditlog.title": "稽核日誌檔",
    "auditlogActorFilter.removed_user": "已移除",
    "auditlogActorFilter.searchActor.placeholder": "搜尋使用者",
    "auditlogActorFilter.searchActor.resultsTitle": "選取使用者",
    "auditlogActorFilter.title": "使用者",
    "auditlogDateFilter.quickFilters.lastMonth": "過去 30 天",
    "auditlogDateFilter.quickFilters.lastWeek": "過去 7 天",
    "auditlogDateFilter.quickFilters.today": "今天",
    "auditlogDateFilter.quickFilters.yesterday": "昨天",
    "auditlogDateFilter.timeToggle": "使用時間",
    "auditlogDateFilter.title": "日期",
    "auditlogEventFilter.actionName.email_changed": "電子郵件已變更",
    "auditlogEventFilter.actionName.file_downloaded": "已下載的檔案",
    "auditlogEventFilter.actionName.file_uploaded": "檔案已上傳",
    "auditlogEventFilter.actionName.guest_removed": "訪客已移除",
    "auditlogEventFilter.actionName.invite_link_toggled": "已切換邀請連結",
    "auditlogEventFilter.actionName.login": "登入",
    "auditlogEventFilter.actionName.logout": "登出",
    "auditlogEventFilter.actionName.member_invited": "成員已邀請",
    "auditlogEventFilter.actionName.member_joined": "成員已加入",
    "auditlogEventFilter.actionName.member_removed": "成員已移除",
    "auditlogEventFilter.actionName.member_role_updated": "成員角色已更新",
    "auditlogEventFilter.actionName.page_created": "頁面已建立",
    "auditlogEventFilter.actionName.page_deleted": "頁面已刪除",
    "auditlogEventFilter.actionName.page_exported": "頁面已匯出",
    "auditlogEventFilter.actionName.page_moved": "頁面已移動",
    "auditlogEventFilter.actionName.page_permission_updated": "頁面權限已更新",
    "auditlogEventFilter.actionName.page_restored": "頁面已恢復",
    "auditlogEventFilter.actionName.page_shared_to_web": "頁面已分享到網路",
    "auditlogEventFilter.actionName.page_viewed": "頁面已查看",
    "auditlogEventFilter.actionName.password_changed": "密碼已變更",
    "auditlogEventFilter.actionName.password_cleared": "密碼已清除",
    "auditlogEventFilter.actionName.password_set": "密碼已設定",
    "auditlogEventFilter.actionName.picture_changed": "圖片已變更",
    "auditlogEventFilter.actionName.preferred_name_changed": "已變更名稱",
    "auditlogEventFilter.actionName.user_deleted": "使用者已刪除",
    "auditlogEventFilter.actionNames.allowed_email_domain_added":
      "已新增允許的電子郵件網域",
    "auditlogEventFilter.actionNames.allowed_email_domain_removed":
      "已移除允許的電子郵件網域",
    "auditlogEventFilter.actionNames.allowed_support_access":
      "已授予支援存取權限",
    "auditlogEventFilter.actionNames.audit_log_exported": "已匯出稽核記錄",
    "auditlogEventFilter.actionNames.automatic_account_creation_toggled":
      "已切換至登入時自動建立帳戶",
    "auditlogEventFilter.actionNames.content_analytics_exported":
      "已匯出內容分析",
    "auditlogEventFilter.actionNames.disable_guests_toggled": "已切換停用訪客",
    "auditlogEventFilter.actionNames.disable_team_guests_toggled":
      "已切換停用團隊空間訪客",
    "auditlogEventFilter.actionNames.export_toggled": "已切換匯出",
    "auditlogEventFilter.actionNames.group_added_to_team":
      "已將群組加入團隊空間",
    "auditlogEventFilter.actionNames.group_removed_from_team":
      "已將群組自團隊空間移除",
    "auditlogEventFilter.actionNames.guest_membership_requests_toggled":
      "已切換訪客成員資格要求",
    "auditlogEventFilter.actionNames.idp_metadata_url_updated":
      "IDP 詮釋資料 URL 已更新",
    "auditlogEventFilter.actionNames.idp_metadata_xml_removed":
      "IDP 詮釋資料 XML 已移除",
    "auditlogEventFilter.actionNames.idp_metadata_xml_updated":
      "IDP 詮釋資料 XML 已更新",
    "auditlogEventFilter.actionNames.invite_link_reset": "邀請連結重設",
    "auditlogEventFilter.actionNames.member_added_to_group": "已將成員加入群組",
    "auditlogEventFilter.actionNames.member_added_to_team":
      "成員已添加至團隊空間",
    "auditlogEventFilter.actionNames.member_joined_team": "成員已加入團隊空間",
    "auditlogEventFilter.actionNames.member_left_team": "成員已離開團隊空間",
    "auditlogEventFilter.actionNames.member_removed_from_group":
      "已將成員自群組移除",
    "auditlogEventFilter.actionNames.member_removed_from_team":
      "已將成員自團隊空間移除",
    "auditlogEventFilter.actionNames.member_team_role_updated":
      "已更新團隊空間的成員角色",
    "auditlogEventFilter.actionNames.membership_request_resolved":
      "已解決成員資格要求",
    "auditlogEventFilter.actionNames.membership_requests_toggled":
      "已切換成員資格要求",
    "auditlogEventFilter.actionNames.page_access_requests_toggled":
      "已切換頁面存取權限要求",
    "auditlogEventFilter.actionNames.pages_to_other_workspaces_toggled":
      "已切換頁面移到其他工作區",
    "auditlogEventFilter.actionNames.public_page_cleared": "已清除公用首頁連結",
    "auditlogEventFilter.actionNames.public_page_set": "公用首頁設定",
    "auditlogEventFilter.actionNames.public_page_sharing_toggled":
      "已切換公用頁面共享",
    "auditlogEventFilter.actionNames.revoked_support_access":
      "已撤銷支援存取權限",
    "auditlogEventFilter.actionNames.saml_enforce_toggled":
      "已切換至強制使用 SAML",
    "auditlogEventFilter.actionNames.saml_toggled": "已切換至啟用 SAML",
    "auditlogEventFilter.actionNames.scim_token_generated": "已產生 SCIM 權杖",
    "auditlogEventFilter.actionNames.scim_token_revoked": "已撤銷 SCIM 權杖",
    "auditlogEventFilter.actionNames.space_claim_and_upgrade_status_changed":
      "工作區宣告狀態變更",
    "auditlogEventFilter.actionNames.space_claim_deletion_status_changed":
      "可宣告工作區刪除狀態變更",
    "auditlogEventFilter.actionNames.space_transfer_status_changed":
      "工作區轉移狀態變更",
    "auditlogEventFilter.actionNames.team_archived": "已歸檔團隊空間",
    "auditlogEventFilter.actionNames.team_created": "已建立團隊空間",
    "auditlogEventFilter.actionNames.team_creation_admins_setting_toggled":
      "對管理員的團隊空間創建限制已更改",
    "auditlogEventFilter.actionNames.team_default_toggled":
      "已切換團隊空間預設狀態",
    "auditlogEventFilter.actionNames.team_description_changed":
      "已變更團隊空間說明",
    "auditlogEventFilter.actionNames.team_export_toggled": "已切換團隊空間匯出",
    "auditlogEventFilter.actionNames.team_group_permission_updated":
      "已更新團隊空間群組的自訂權限",
    "auditlogEventFilter.actionNames.team_guest_default_permission_updated":
      "已更新團隊空間訪客預設權限",
    "auditlogEventFilter.actionNames.team_guests_toggled": "已切換團隊停用訪客",
    "auditlogEventFilter.actionNames.team_icon_changed": "已變更團隊空間圖示",
    "auditlogEventFilter.actionNames.team_invite_access_changed":
      "已變更團隊空間邀請存取權限",
    "auditlogEventFilter.actionNames.team_member_default_permission_updated":
      "已更新團隊空間成員預設權限",
    "auditlogEventFilter.actionNames.team_name_changed": "已變更團隊空間名稱",
    "auditlogEventFilter.actionNames.team_privacy_type_changed":
      "已變更團隊空間隱私類型",
    "auditlogEventFilter.actionNames.team_public_page_sharing_toggled":
      "已切換團隊空間公用頁面共享",
    "auditlogEventFilter.actionNames.team_restored": "已恢復團隊空間",
    "auditlogEventFilter.actionNames.team_sidebar_editing_toggled":
      "已切換團隊空間側邊欄編輯",
    "auditlogEventFilter.actionNames.team_user_permission_updated":
      "已更新團隊空間成員的自訂權限",
    "auditlogEventFilter.actionNames.team_workspace_default_permission_updated":
      "已更新團隊空間的工作區域設權限",
    "auditlogEventFilter.actionNames.teams_enabled_for_space":
      "已更新工作區以啟用團隊空間",
    "auditlogEventFilter.actionNames.user_analytics_exported": "已匯出成員分析",
    "auditlogEventFilter.actionNames.workspace_creation_set_for_email_domain":
      "已更新工作區建立作業設定",
    "auditlogEventFilter.actionNames.workspace_domain_changed": "已變更網域",
    "auditlogEventFilter.actionNames.workspace_exported": "已匯出內容",
    "auditlogEventFilter.actionNames.workspace_icon_changed": "已變更圖示",
    "auditlogEventFilter.actionNames.workspace_integration_restriction_changed":
      "已切換整合安裝",
    "auditlogEventFilter.actionNames.workspace_name_changed": "已變更名稱",
    "auditlogEventFilter.actionNames.workspace_sidebar_editing_toggled":
      "已切換工作區側邊欄編輯",
    "auditlogEventFilter.applyButton": "套用",
    "auditlogEventFilter.categoryName.account": "帳號",
    "auditlogEventFilter.categoryName.page": "頁面",
    "auditlogEventFilter.categoryName.team": "團隊空間",
    "auditlogEventFilter.categoryName.workspace": "工作區",
    "auditlogEventFilter.clearButton": "清除",
    "auditlogEventFilter.eventColumn.admin_content_search_queried":
      "使用下列條件執行內容搜尋：{searchCriteria}",
    "auditlogEventFilter.eventColumn.admin_content_search_queried.no_filters":
      "執行內容搜尋時無套用篩選",
    "auditlogEventFilter.eventColumn.audit_log_exported":
      "已匯出最後 {duration} 天的稽核記錄",
    "auditlogEventFilter.eventColumn.content_analytics_exported":
      "匯出的 {daysFilterString} 內容分析",
    "auditlogEventFilter.eventColumn.user_analytics_exported":
      "匯出的 {daysFilterString} 成員分析",
    "auditlogEventFilter.title": "事件",
    "authAction.authorize.popupBlocked":
      "您的瀏覽器目前似乎正在阻止彈出視窗。請允許彈出視窗以繼續",
    "authErrors.alreadyVerifiedPhoneNumber.message": "你已驗證此電話號碼。",
    "authErrors.badFriendlyName": "驗證器名稱無法使用",
    "authErrors.duplicateFriendlyName": "驗證器名稱已在使用中",
    "authErrors.emptyFriendlyName": "驗證器名稱不可空白",
    "authErrors.genericMfaError.message": "出了些問題。",
    "authErrors.invalidCountryCode.message": "國碼/地區碼無效",
    "authErrors.invalidMfaCode.message": "提供的代碼不正確，請再試一次",
    "authErrors.invalidPhoneNumber.message": "電話號碼無效。",
    "authErrors.maxMethods.message": "你已達到指定類型的 MFA 方法數量上限。",
    "authErrors.noPasswordVerification.message":
      "Notion 必須驗證你的密碼才能繼續，離開此互動視窗後再試一次",
    "authErrors.passwordLoginRequired": "您必须使用密码登录。",
    "authErrors.phoneNumberLimitReached.message":
      "此電話號碼再也無法用於設定新的雙步驟驗證方式。",
    "authErrors.reusedMfaCode.message": "提供的代碼已在使用中。請再試一次。",
    "authErrors.twilioCannotFetchPhoneNumber.message":
      "沒有此電話號碼的記錄，請檢查號碼後再試一次",
    "authErrors.twilioCannotVerifyPhoneNumber.message":
      "我們無法驗證你的電話號碼，請檢查號碼後再試一次",
    "authErrors.twilioGenericError.message": "出現錯誤，請聯絡客戶支援",
    "automationEventTriggerMenu.anyPropertyEdited.title": "所有属性",
    "automationEventTriggerMenu.pageAdded.title": "完成页面添加",
    "automationEventTriggerMenu.pagePropertiesEditedSection.title":
      "完成页面属性编辑",
    "automationEventTriggerMenu.searchInputPlaceholder.label": "搜索条件",
    "automationStore.slackAutomation.defaultName":
      "{hasCreatorName，select，true{{creatorName}您的Slack通知}other{Slack通知}}",
    "automationTriggerList.anyPagePropertyEdited.title": "编辑页面属性",
    "automationTriggerList.pageAdded.title": "添加页面",
    "automationTriggerList.propertyChangesToAny.title":
      "编辑{propertyName}属性",
    "automations.AutomationActionSetPropertiesSection.appendAction.label":
      "附加",
    "automations.AutomationActionSetPropertiesSection.property.label": "屬性",
    "automations.AutomationActionSetPropertiesSection.removeAction.label":
      "移除",
    "automations.AutomationActionSetPropertiesSection.replaceAction.label":
      "替換",
    "automations.AutomationActionSetPropertiesSection.titlePlaceholder":
      "無標題",
    "automations.AutomationCombinatorFilterPopup.deleteFilter.label":
      "刪除篩選器",
    "automations.AutomationPagePicker.noResults.label": "沒有結果",
    "automations.AutomationPagePicker.pages.inputPlaceholder":
      "選擇要更新的頁面…",
    "automations.AutomationPagePicker.pages.label": "頁面",
    "automations.AutomationPagePicker.pagesDropdown.label": "選擇頁面",
    "automations.AutomationPagePicker.showMore.label": "顯示其餘 {showMore} 個",
    "automations.AutomationPagePicker.variables.label": "此自動化的數值",
    "automations.AutomationSummaryCard.MoreActionsButton.ariaLabel": "更多",
    "automations.AutomationSummaryCard.MoreActionsMenu.Delete.title": "刪除",
    "automations.AutomationSummaryCard.MoreActionsMenu.Disable.title": "停用",
    "automations.AutomationSummaryCard.MoreActionsMenu.Duplicate.title":
      "建立複本",
    "automations.AutomationSummaryCard.MoreActionsMenu.Edit.title": "編輯",
    "automations.AutomationSummaryCard.MoreButton.ariaLabel": "更多",
    "automations.AutomationSummaryCard.MoreMenu.Delete.title": "刪除",
    "automations.AutomationSummaryCard.MoreMenu.Disable.title": "停用",
    "automations.AutomationSummaryCard.MoreMenu.Duplicate.title": "建立複本",
    "automations.AutomationSummaryCard.MoreMenu.Edit.title": "編輯",
    "automations.AutomationVariableToken.actionFromStepIndex":
      "步驟 {index} 的 {name}",
    "automations.BaseModalAction.cancelButtonHint": "停止工作流程",
    "automations.BaseModalAction.confirmationPlaceholder":
      "撰寫訊息讓使用者看到…",
    "automations.BaseModalAction.continueButtonHint": "繼續工作流程",
    "automations.BaseModalAction.messagePlaceholder": "撰寫訊息讓使用者看到…",
    "automations.ConfirmationDialog.ariaLabel": "確認",
    "automations.CreatePageAction.header": "在後述項目中建立頁面：",
    "automations.DuplicateBlocksAction.aboveButtonLabel": "按鈕上方",
    "automations.DuplicateBlocksAction.belowButtonLabel": "按鈕下方",
    "automations.DuplicateBlocksAction.emptyPlaceholder":
      "點選即可編輯或拖動區塊到這裡…",
    "automations.DuplicateBlocksAction.header": "插入區塊",
    "automations.OpenPageAction.header": "開啟",
    "automations.OpenPageAction.openPageIn.label": "開啟頁面位置",
    "automations.OpenPageAction.page.label": "頁面",
    "automations.QueryCollectionAction.addSortLimitButton.addLimit": "加入限制",
    "automations.QueryCollectionAction.addSortLimitButton.addSort": "加入排序",
    "automations.QueryCollectionAction.addSortLimitButton.addSortLimit":
      "加入排序、限制",
    "automations.QueryCollectionAction.database.label": "資料庫",
    "automations.QueryCollectionAction.filter.label": "篩選器",
    "automations.QueryCollectionAction.filterRuleCount.label":
      "{ruleCount, plural, other {{ruleCount} 個規則}}",
    "automations.QueryCollectionAction.filterRuleCount.noFilters.label":
      "返回所有頁面",
    "automations.QueryCollectionAction.limit.label": "限制",
    "automations.QueryCollectionAction.limitPopup.limitDescription":
      "{numberOfPages, plural, other {{numberOfPages} 個頁面}}",
    "automations.QueryCollectionAction.limitPopup.unlimitedDescription": "無限",
    "automations.QueryCollectionAction.noSorts.title": "無",
    "automations.QueryCollectionAction.oneOrMoreSorts.title":
      "{numberOfSorts, plural, other {{numberOfSorts} 個排序}}",
    "automations.QueryCollectionAction.sort.label": "排序",
    "automations.QueryCollectionAction.title": "取得後述項目的頁面：",
    "automations.SimpleFormulaValuePicker.back": "返回",
    "automations.SimpleFormulaValuePicker.block.searchPlaceholder":
      "搜尋一或多個頁面...",
    "automations.SimpleFormulaValuePicker.checkbox.checked": "已勾選",
    "automations.SimpleFormulaValuePicker.checkbox.unchecked": "未勾選",
    "automations.SimpleFormulaValuePicker.checkboxOptionsSectionHeader":
      "核取方塊選項",
    "automations.SimpleFormulaValuePicker.chooseAValue": "選擇數值",
    "automations.SimpleFormulaValuePicker.clear": "清除",
    "automations.SimpleFormulaValuePicker.customFormula": "自訂公式",
    "automations.SimpleFormulaValuePicker.insertAFormula": "輸入 = 以插入公式",
    "automations.SimpleFormulaValuePicker.pagesSectionHeader": "頁面",
    "automations.SimpleFormulaValuePicker.people.searchPlaceholder":
      "搜尋一或多位人員...",
    "automations.SimpleFormulaValuePicker.peopleSectionHeader": "人員",
    "automations.SimpleFormulaValuePicker.pickADate": "選擇日期",
    "automations.SimpleFormulaValuePicker.select.searchPlaceholder":
      "選擇一或多個選項...",
    "automations.SimpleFormulaValuePicker.selectOptionsSectionHeader": "選項",
    "automations.SimpleFormulaValuePicker.useAFormula": "輸入 = 以使用公式",
    "automations.SimpleFormulaValuePicker.valuesFromThisAutomation":
      "此自動化的數值",
    "automations.UpdatePagesAction.filter.label": "篩選器",
    "automations.UpdatePagesAction.filterRuleCount.noFilters.fallbackLabel":
      "資料庫中的所有頁面",
    "automations.UpdatePagesAction.filterRuleCount.noFilters.label":
      "更新所有頁面",
    "automations.UpdatePagesAction.header": "編輯後述項目的屬性：",
    "automations.UpdatePagesAction.noResults.label": "沒有結果",
    "automations.UpdatePagesAction.pages.inputPlaceholder": "選擇要更新的頁面…",
    "automations.UpdatePagesAction.pages.label": "頁面",
    "automations.UpdatePagesAction.pagesDropdown.label": "選擇要更新的頁面",
    "automations.UpdatePagesAction.pagesInDatabase.label": "資料庫中的頁面",
    "automations.UpdatePagesAction.showMore.label": "顯示其餘 {showMore} 個",
    "automations.UpdatePagesAction.singularHeader": "編輯",
    "automations.UpdatePagesAction.values.label": "此自動化的數值",
    "automations.UpdatePagesAction.variables.label": "此自動化的數值",
    "automations.actions.createPage": "建立頁面",
    "automations.actions.createPageDefaultVariableName": "頁面已建立",
    "automations.actions.createPageDescription":
      "在資料庫中建立新頁面，並選擇性地設定一些屬性。",
    "automations.actions.createPagePage": "步驟 {stepNumber} 的頁面",
    "automations.actions.createPageVariableNameWithDatabase":
      "在 {databaseName} 中建立的頁面",
    "automations.actions.createPageVariableNameWithDatabaseAndStepNumber":
      "自步驟 {stepNumber} 起在 {databaseName} 中建立的頁面",
    "automations.actions.duplicateBlocks": "插入區塊",
    "automations.actions.duplicateBlocksDescription":
      "在此按鈕後插入文字或其他區塊。",
    "automations.actions.modalConfirmation": "顯示確認對話方塊",
    "automations.actions.modalConfirmationDescription":
      "繼續前，向使用者顯示確認對話方塊。",
    "automations.actions.modalMessage": "顯示訊息",
    "automations.actions.modalMessageDescription":
      "執行後續步驟前，向使用者顯示訊息。",
    "automations.actions.openPage": "開啟頁面",
    "automations.actions.openPageDescription":
      "開啟先前步驟的頁面，或是明確指定的頁面。",
    "automations.actions.queryCollection": "取得頁面",
    "automations.actions.queryCollectionDescription":
      "使用可選用的篩選器和排序取得資料庫的頁面清單，以便用於隨後的自動化步驟。",
    "automations.actions.queryCollectionPages": "頁面",
    "automations.actions.updatePages": "更新頁面",
    "automations.actions.updatePagesDescription":
      "編輯資料庫頁面、先前步驟的頁面，或是明確指定頁面的屬性。",
    "automations.addActionButton.empty.label": "加入動作",
    "automations.addActionButton.label": "新動作",
    "automations.addActionButton.nonEmpty.label": "加入另一個動作",
    "automations.addStepAboveButton.label": "在上方加入步驟",
    "automations.addStepBelowButton.label": "在下方加入步驟",
    "automations.automationStatusPropertyTrigger.multiProperties":
      "{propertyName} 設為任何 {propertyValues}",
    "automations.automationStatusPropertyTrigger.singleProperty":
      "{propertyName} 設為 {propertyValues}",
    "automations.buttonTrigger.createdAndUpdatedPages":
      "已建立 {numPagesCreated, plural, one {1 個頁面} other {{numPagesCreated} 個頁面}} 並已編輯 {numPagesEdited, plural, one {1 個頁面} other {{numPagesEdited} 個頁面}}",
    "automations.buttonTrigger.createdBlocks":
      "已在頁面上建立 {numBlocksDuplicated, plural, one {1 個區塊} other {{numBlocksDuplicated} 個區塊}}",
    "automations.buttonTrigger.createdPageMessage":
      "已在 {collection} 中建立頁面",
    "automations.buttonTrigger.createdPages":
      "已建立 {numPagesCreated, plural, one {1 個頁面} other {{numPagesCreated} 個頁面}}",
    "automations.buttonTrigger.defaultConfirmationWorkflowText": "你確定嗎？",
    "automations.buttonTrigger.defaultContinueWorkflowMessage": "繼續",
    "automations.buttonTrigger.defaultStopWorkflowMessage": "取消",
    "automations.buttonTrigger.errorQueryCollectionTooManyPages":
      "按鈕影響太多頁面",
    "automations.buttonTrigger.errorUserCancelled": "按鈕已取消",
    "automations.buttonTrigger.genericErrorMessage":
      "自動化執行失敗：{message}",
    "automations.buttonTrigger.genericSuccessMessage": "按鈕執行成功",
    "automations.buttonTrigger.open": "開啟",
    "automations.buttonTrigger.openDatabase": "開啟資料庫",
    "automations.buttonTrigger.openPage": "開啟頁面",
    "automations.buttonTrigger.snackbar.label": "自動化執行成功",
    "automations.buttonTrigger.undo": "還原",
    "automations.buttonTrigger.updatePagesConfirm": "更新 {numPages} 個頁面",
    "automations.buttonTrigger.updatePagesDialog":
      "此動作即將更新 {numPages} 個頁面。確定要繼續嗎？",
    "automations.buttonTrigger.updatedPages":
      "已編輯 {numPagesEdited, plural, one {1 個頁面} other {{numPagesEdited} 個頁面}}",
    "automations.buttonTrigger.updatedPagesMessage":
      "{numPages, plural, other {在 {collection} 更新 {numPages} 個頁面}}",
    "automations.createPageAction.database.label": "加入到",
    "automations.databasePicker.automationInputPlaceholder": "選擇資料庫…",
    "automations.databasePicker.buttonPlaceholder": "選擇資料庫",
    "automations.databasePicker.inputPlaceholder": "選擇資料庫…",
    "automations.deleteActionButton.label": "刪除",
    "automations.duplicateActionButton.label": "複製",
    "automations.duplicateBelowActionButton.label": "在下方建立複本",
    "automations.duplicatingActionButton.label": "建立複本中...",
    "automations.moveDownButton.label": "向下移動",
    "automations.moveUpButton.label": "向上移動",
    "automations.propertyPicker.buttonPlaceholder": "設定屬性",
    "automations.propertyPicker.buttonPlaceholderAlreadyHaveProperties":
      "編輯另一個屬性",
    "automations.propertyPicker.inputPlaceolder": "搜尋屬性…",
    "automations.simpleValuePicker.pages.noResults.message": "沒有結果",
    "automations.simpleValuePicker.pages.searchPage.errorMessage":
      "出了些問題。",
    "automations.simpleValuePicker.pages.searchPerson.errorMessage":
      "出了些問題。",
    "automations.simpleValuePicker.select.noResults.message": "沒有結果",
    "automations.triggers.button.page.label": "從按鈕建立頁面",
    "automations.triggers.currentUser.label": "目前使用者",
    "automations.triggers.now.label": "現在",
    "automations.triggers.today.label": "今天",
    "automations.updateDatePropertyAction.singleProperty":
      "将{propertyName}属性设置为{propertyValue}值",
    "automations.updateMultiSelectPropertyAction.multiProperties":
      "将{propertyName}属性设置为所有{propertyValues}值",
    "automations.updateMultiSelectPropertyAction.singleProperty":
      "将{propertyName}属性设置为{propertyValues}值",
    "automations.updatePersonPropertyAction.multiProperties":
      "将{propertyName}属性设置为所有{propertyValues}值",
    "automations.updatePersonPropertyAction.singleProperty":
      "将{propertyName}属性设置为{propertyValue}值",
    "automations.updateSelectPropertyAction.singleProperty":
      "将{propertyName}属性设置为{propertyValue}值",
    "automations.updateStatusPropertyAction.multiProperties":
      "将{propertyName}属性设置为所有{propertyValues}值",
    "automations.updateStatusPropertyAction.singleProperty":
      "将{propertyName}属性设置为{propertyValues}值",
    "automatonStore.automation.defaultName":
      "{hasCreatorName，select，true{{creatorName}的自动化}other{自动化}}",
    "backlink.currentPageTokenLabel": "此頁面",
    "backlink.originalTokenLabel": "原始",
    "banner.education.message":
      "您的方案有 1 位成員限制。您可以切換方案，但會失去折扣價格。",
    "banner.education.switchPlanFromInAppPurchase":
      "您透過應用程式內 Apple 購買訂閱。若要切換方案，請取消 Apple 的訂閱。",
    "banner.singlePlayer.message":
      "您的方案有 1 位成員限制。您可以切換方案，但會失去折扣價格。",
    "baseTable.pageCell.privateTeamspace": "私人團隊空間",
    "baseTable.pageCell.untitledPage": "無標題",
    "baseTable.pageCell.untitledPath": "無標題",
    "baseTable.teamCell.hiddenTeam": "隱藏",
    "baseTable.usersCell.userName":
      "{remainingCount, plural, other {{firstUser}<gray>+{remainingCount}</gray>}}",
    "betaBadgeComponent.label": "測試版",
    "block.imageCaption.placeholder": "寫一個標題…",
    "block.propertyTypeName.caption": "標題",
    "block.propertyTypeName.checked": "已勾選",
    "block.propertyTypeName.description": "說明",
    "block.propertyTypeName.language": "語言",
    "block.propertyTypeName.link": "連結",
    "block.propertyTypeName.size": "大小",
    "block.propertyTypeName.source": "來源",
    "block.propertyTypeName.title": "標題",
    "block.selectableAddMenu.tooltip.addAbove":
      "按住 Option 鍵並點選<mediumcolor>以在上方加入區塊</mediumcolor>",
    "block.selectableAddMenu.tooltip.addAbove.windows":
      "按住 Alt 鍵並點選滑鼠<mediumcolor>以在上方加入區塊</mediumcolor>",
    "block.selectableAddMenu.tooltip.addBlockBelow":
      "按一下<mediumcolor>以在下方加入區塊</mediumcolor>",
    "block.selectableAddMenu.tooltip.addRight":
      "按住 Option 鍵並點選<mediumcolor>以在右側新增區塊</mediumcolor>",
    "block.selectableAddMenu.tooltip.addRight.windows":
      "按住 Alt 鍵並點選滑鼠<mediumcolor>以在右側加入區塊</mediumcolor>",
    "blockAuthorInfo.label": "上次由{author}編輯",
    "blockAuthorInfo.restrictedBadge": "已受限",
    "blockAuthorInfo.restrictedBadge.clickText": "按一下查看存取權限",
    "blockAuthorInfo.restrictedBadge.infoText": "存取受限於父頁面",
    "blockDiscussionMenu.emptyState.noCommentsMessage": "無評論。",
    "blockDiscussionMenu.emptyState.noResolvedCommentsMessage":
      "沒有已解決的評論。",
    "blockDiscussionMenu.mobileMenu.title": "評論",
    "blockDiscussionMenu.openDiscussionsTab.title":
      "進行中 ({numberOfOpenDiscussions})",
    "blockDiscussionMenu.resolvedDiscussionsTab.title":
      "已解決 ({numberOfResolvedDiscussions})",
    "blockHelpers.abstractBlockType": "Abstract",
    "blockHelpers.audioBlockType": "音訊",
    "blockHelpers.codepenBlockType": "CodePen",
    "blockHelpers.deepnoteBlockType": "Deepnote",
    "blockHelpers.drawingBlockType": "绘图",
    "blockHelpers.driveBlockType": "Google 雲端硬碟",
    "blockHelpers.embedBlockType": "嵌入",
    "blockHelpers.excalidrawBlockType": "Excalidraw",
    "blockHelpers.figmaBlockType": "Figma",
    "blockHelpers.fileBlockType": "檔案",
    "blockHelpers.framerBlockType": "Framer",
    "blockHelpers.gistBlockType": "Gist",
    "blockHelpers.hexBlockType": "十六進位",
    "blockHelpers.imageBlockType": "圖片",
    "blockHelpers.invisionBlockType": "Invision",
    "blockHelpers.loomBlockType": "Loom",
    "blockHelpers.mapsBlockType": "地圖",
    "blockHelpers.miroBlockType": "Miro",
    "blockHelpers.pdfBlockType": "PDF",
    "blockHelpers.replitBlockType": "Replit",
    "blockHelpers.sketchBlockType": "Sketch",
    "blockHelpers.tweetBlockType": "推文",
    "blockHelpers.typeformBlockType": "Typeform",
    "blockHelpers.videoBlockType": "影片",
    "blockHelpers.whimsicalBlockType": "Whimsical",
    "blockMenu.actionButton.label": "動作",
    "blockMenu.filterForActions.placeholder": "搜尋動作…",
    "blockMenu.moveTo.disabled.fullAccess.reason":
      "要移动页面，需要页面“完全允许”权限。",
    "blockMenuItem.aiBadge": "AI",
    "blockMenuRestrictedMessage.adminRestoreAction.label": "恢復權限",
    "blockMenuRestrictedMessage.label": "你無權編輯此區塊，因為它受到限制。",
    "blockPasteMenu.actions.createTransclusion.title": "貼上並同步",
    "blockPasteMenu.actions.dismiss.title": "關閉",
    "blockPasteMenu.actions.linkToPage.title": "連結到頁面",
    "blockPermissionsSettings.confirmationDialog.private.message":
      "確定將當前頁面變為私有？<semibold>私有化後只有你可以存取它。</semibold>",
    "blockPermissionsSettings.confirmationDialog.privateButton.label":
      "移動到私人",
    "blockPermissionsSettings.confirmationDialog.workspace.message":
      "確定與工作區分享此頁面嗎？<semibold>所有 {memberCount} 位成員都將可以存取。</semibold>",
    "blockPermissionsSettings.confirmationDialog.workspaceButton.label":
      "移動到工作區",
    "blockPermissionsSettings.connectionsMoved.bannerMessage":
      "你的整合已移至 ••• 頁面選單。",
    "blockPermissionsSettings.copyLinkButton.label": "複製連結",
    "blockPermissionsSettings.groupPermission.label": "群組",
    "blockPermissionsSettings.groupPermission.none":
      "{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位群組成員}}",
    "blockPermissionsSettings.groupPermission.tooltip":
      "將此頁面顯示在{groupName}群組成員的<boldtext>共用</boldtext>側邊欄分組中。",
    "blockPermissionsSettings.groupPermissionUsers.tooltip":
      "其他 {countRemainingUsers} 位…",
    "blockPermissionsSettings.hiddenAccess.tooltip":
      "可能會經由你沒有存取權限的父頁面或團隊空間而與額外人員分享此頁面。",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.openSettingsCTA":
      "設定",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.setDomainForPublicLinks":
      "設定你的公用連結所在網域",
    "blockPermissionsSettings.learnAboutConnections.bannerMessage":
      "進一步了解<a>管理連線</a>。",
    "blockPermissionsSettings.learnAboutSharing.prompt": "了解共享",
    "blockPermissionsSettings.learnMore.prompt": "了解更多",
    "blockPermissionsSettings.mobileShareMenu.title": "分享",
    "blockPermissionsSettings.offline.prompt": "連接網路後便可發表並分享。",
    "blockPermissionsSettings.permissionItem.hiddenAccess":
      "更多人員可能擁有存取權限",
    "blockPermissionsSettings.permissionItem.linkSharing": "分享到網路",
    "blockPermissionsSettings.permissionItem.membersTeamName.hidden":
      "私人團隊空間的成員",
    "blockPermissionsSettings.permissionItem.teamAccess": "{teamName} 的成員",
    "blockPermissionsSettings.permissionItem.teamAccessV2": "團隊空間成員",
    "blockPermissionsSettings.permissionItem.teamGuestAccess":
      "{teamName} 的團隊空間訪客",
    "blockPermissionsSettings.permissionItem.teamGuestAccess.compact":
      "團隊空間訪客",
    "blockPermissionsSettings.permissionItem.teamName.hidden":
      "私人團隊空間的擁有者",
    "blockPermissionsSettings.permissionItem.teamOwnerAccess":
      "{teamName} 的擁有者",
    "blockPermissionsSettings.permissionItem.teamOwnerAccessV2":
      "團隊空間擁有者",
    "blockPermissionsSettings.permissionItem.teamspace.hidden":
      "私人團隊空間的所有人",
    "blockPermissionsSettings.permissionItem.teamspaceAccess":
      "{teamName} 中的所有人",
    "blockPermissionsSettings.permissionItem.teamspaceGuestsTeamName.hidden":
      "私人團隊空間的團隊空間訪客",
    "blockPermissionsSettings.permissionItem.workspaceAccessNew":
      "{workspaceName} 中的所有人",
    "blockPermissionsSettings.permissionsList.attribution": "從 {attribution}",
    "blockPermissionsSettings.permissionsList.expandButton":
      "其他 {count} 位人員",
    "blockPermissionsSettings.permissionsList.genericHeader":
      "有存取權限的人員",
    "blockPermissionsSettings.permissionsList.moreAttribution":
      "更多有存取權限的人員",
    "blockPermissionsSettings.privatePermissions.tooltip":
      "只有你可以存取此頁面，所以連結只對你有效。",
    "blockPermissionsSettings.publicLinkInfo.tooltip":
      "此頁面具有公開連結存取權限，所以擁有連結的任何人都可以查看頁面。",
    "blockPermissionsSettings.publicPermission.canComment":
      "任何有連結的人都可以發表評論",
    "blockPermissionsSettings.publicPermission.canEdit":
      "任何有連結的人都可以編輯和評論",
    "blockPermissionsSettings.publicPermission.canRead":
      "任何有連結的人都可以查看",
    "blockPermissionsSettings.publicPermission.none": "發佈並與任何人分享連結",
    "blockPermissionsSettings.publicPermission.tooltip":
      "知道連結的任何人都可以存取此頁面。",
    "blockPermissionsSettings.restrictedPermissions.tooltip":
      "存取權限基於{inlineIconAndName}。變更後將不再繼承父頁面的權限。",
    "blockPermissionsSettings.sentInvitation.message": "已傳送邀請",
    "blockPermissionsSettings.spacePermission.none":
      "{numberOfWorkspaceMembers, plural, other {{numberOfWorkspaceMembers} 位工作區成員}}",
    "blockPermissionsSettings.spacePermission.tooltip":
      "將此頁面顯示在工作區所有成員的<boldtext>工作區</boldtext>側邊欄分組中。",
    "blockPermissionsSettings.teamGuestPermission.tooltip":
      "套用到 {teamName} 的所有團隊空間訪客。",
    "blockPermissionsSettings.teamOwnerPermission.subtitle":
      "{teamOwnersCount, plural, other {{teamOwnersCount} 個團隊空間擁有者}}",
    "blockPermissionsSettings.teamOwnerPermission.tooltip":
      "套用到 {teamName} 中的所有擁有者。",
    "blockPermissionsSettings.teamPermission.subtitle":
      "{membersCount, plural, other {{membersCount} 位成員}}",
    "blockPermissionsSettings.teamPermission.tooltip":
      "套用到 {teamName} 中的所有擁有者與成員。",
    "blockPermissionsSettings.userPermissions.tooltip":
      "只有你和其他受邀成員和訪客才能查看連結。",
    "blockPermissionsSettings.workspaceOwner.canChangePermissionsMessage":
      "身為<b>工作區擁有者</b>，你可以變更此頁面的權限，加入你自己或其他人。任何變更都會出現在稽核日誌檔中。",
    "blockPermissionsSettings.workspaceOwner.canChangePermissionsMessageButton":
      "變更權限",
    "blockPermissionsSettings.workspaceOwner.canChangePermissionsNotice":
      "變更權限",
    "blockPermissionsSettings.workspaceOwner.isChangingPermissionsMessageButton":
      "變更權限",
    "blockPermissionsSettings.workspacePermissions.tooltip":
      "此頁面具有工作區存取權限，所以工作區中的任何人都可以查看連結。",
    "blockPropertyValue.filterForNumberFormats.placeholder": "篩選格式...",
    "blockTemplates.board.assignPropertyTitle": "指派",
    "blockTemplates.board.card1Title": "卡片 1",
    "blockTemplates.board.card2Title": "卡片 2",
    "blockTemplates.board.card3Title": "卡片 3",
    "blockTemplates.board.namePropertyTitle": "名稱",
    "blockTemplates.board.statusPropertyGreenOptionTitle": "已完成",
    "blockTemplates.board.statusPropertyRedOptionTitle": "未開始",
    "blockTemplates.board.statusPropertyTitle": "狀態",
    "blockTemplates.board.statusPropertyYellowOptionTitle": "進行中",
    "blockTemplates.board.viewTitle": "看板視圖",
    "blockTemplates.calendar.datePropertyTitle": "日期",
    "blockTemplates.calendar.namePropertyTitle": "名稱",
    "blockTemplates.calendar.tagsPropertyTitle": "標籤",
    "blockTemplates.calendar.viewTitle": "行事曆視圖",
    "blockTemplates.gallery.createdPropertyTitle": "建立時間",
    "blockTemplates.gallery.namePropertyTitle": "名稱",
    "blockTemplates.gallery.page1CompletedTodoTitle": "已完成的待辦事項",
    "blockTemplates.gallery.page1Title": "頁面 1",
    "blockTemplates.gallery.page1TodoTitle": "待辦事項",
    "blockTemplates.gallery.page2Title": "頁面 2",
    "blockTemplates.gallery.page3Title": "頁面 3",
    "blockTemplates.gallery.tagsPropertyTitle": "標籤",
    "blockTemplates.gallery.viewTitle": "圖庫視圖",
    "blockTemplates.list.createdPropertyTitle": "建立時間",
    "blockTemplates.list.namePropertyTitle": "名稱",
    "blockTemplates.list.page1Title": "頁面 1",
    "blockTemplates.list.page2Title": "頁面 2",
    "blockTemplates.list.page3Title": "頁面 3",
    "blockTemplates.list.tab1Title": "分頁 1",
    "blockTemplates.list.tab2Title": "分頁 2",
    "blockTemplates.list.tab3Title": "分頁 3",
    "blockTemplates.list.tagsPropertyTitle": "標籤",
    "blockTemplates.list.viewTitle": "列表視圖",
    "blockTemplates.table.namePropertyTitle": "名稱",
    "blockTemplates.table.tagsPropertyTitle": "標籤",
    "blockTemplates.templateButton.addNewTodoTitle": "加入待辦事項",
    "blockTemplates.timeline.datePropertyTitle": "日期",
    "blockTemplates.timeline.viewTitle": "時程表視圖",
    "blocks.blockMenu.collectionHelpButton": "了解資料庫",
    "blocks.hoverBlockMenu.collectionHelpButton": "了解資料庫",
    "boardHiddenGroup.searchPlaceholder": "搜尋頁面…",
    "bookmarkBlock.addWebBookmark.placeholder": "加入 Web 書籤",
    "bookmarkBlock.bookmark.title": "書籤",
    "bookmarkBlock.editBookmark.linkPlaceholder": "以 https://… 格式貼上",
    "bookmarkBlock.invalidLinkError.message": "請輸入有效的連結",
    "bookmarkBlock.loadWhileFetching.message": "取得預覽中",
    "bookmarkBlock.visualBookmark.create": "建立書籤",
    "bookmarkBlock.visualBookmark.prompt": "從連結建立視覺化書籤。",
    "bootupHelpers.iosErrorRequiresReinstall.errorMessage":
      "你好，我們發現你的 iOS 應用程式有問題。請刪除此應用程式，再從 App Store 重新安裝。",
    "botActions.duplicateTemplateAndShareWithBot.snackbar.failure":
      "無法建立模板複本到你的工作區中",
    "botActions.duplicatingTemplate.loadingMessage": "建立模板複本中...",
    "breadcrumb.mobileBreadcrumbMenu.title": "頁面路徑",
    "breadcrumb.moveTo.hasPermission.subtitle": "按一下以移動",
    "breadcrumb.moveTo.hasPermission.title": "只有你有存取權限",
    "breadcrumb.moveTo.privatePages": "私人",
    "breakingUpdateDialog.title": "我們剛剛推出了新功能！",
    "breakingUpdateDialog.updateButtonTitle": "更新並查看新功能",
    "bulletedListBlock.placeholder.label": "項目",
    "business.title": "商業版",
    "businessPlan.title": "商業版",
    "buttonBlock.actions": "動作",
    "buttonBlock.button.addIcon": "新增圖示",
    "buttonBlock.button.addIconButtonAriaLabel": "加入圖示",
    "buttonBlock.button.clickToEdit": "按一下以編輯按鈕",
    "buttonBlock.button.done": "完成",
    "buttonBlock.button.editButtonAriaLabel": "編輯按鈕",
    "buttonBlock.button.iconHeading": "圖示",
    "buttonBlock.button.insufficientPermissions": "你無權執行此按鈕",
    "buttonBlock.button.label": "標籤",
    "buttonBlock.button.moreActionsButtonAriaLabel": "更多動作",
    "buttonBlock.button.placeholder": "新按鈕",
    "buttonBlock.configureTemplate.button.label": "設定按鈕",
    "buttonBlock.moreActions.button.label": "更多動作…",
    "calendar.viewRanges.month": "月",
    "calendar.viewRanges.week": "週",
    "calendarItem.endsTime.message": "{endTime} 結束",
    "calendarSettings.startWeekOnMonday.label": "星期開始於週一",
    "calendarSettings.startWeekOnMonday.message":
      "這將變更你應用中所有行事曆的外觀。",
    "calloutBlock.inputPlaceholder": "輸入內容…",
    "capabilitiesTooltip.insertComment.disabled": "無法評論。",
    "capabilitiesTooltip.insertComment.enabled": "可以評論。",
    "capabilitiesTooltip.linkPreview.disabled": "無法預覽連結。",
    "capabilitiesTooltip.linkPreview.enabled": "可以預覽連結。",
    "capabilitiesTooltip.mixedAccess.readContent.enabled": "可以讀取內容。",
    "capabilitiesTooltip.mixedaccess.insertContent.disabled": "無法插入內容。",
    "capabilitiesTooltip.mixedaccess.insertContent.enabled": "可以插入內容。",
    "capabilitiesTooltip.mixedaccess.readContent.disabled": "無法讀取內容。",
    "capabilitiesTooltip.mixedaccess.updateContent.disabled": "無法更新內容。",
    "capabilitiesTooltip.mixedaccess.updateContent.enabled": "可以更新內容。",
    "capabilitiesTooltip.readComment.disabled": "無法閱讀評論。",
    "capabilitiesTooltip.readComment.enabled": "可以閱讀評論。",
    "capabilitiesTooltip.syncedDatabase.disabled": "無法同步資料庫。",
    "capabilitiesTooltip.syncedDatabase.enabled": "可以同步資料庫。",
    "capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled":
      "無法查看使用者電子郵件地址。",
    "capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled":
      "可以查看使用者電子郵件地址。",
    "capabilitiesTooltip.userAccess.readUsers.disabled": "無法查看使用者。",
    "capabilitiesTooltip.userAccess.readUsers.enabled": "可以查看使用者。",
    "chargeReminderEmail.billingLink.text":
      "<b> <billinglink>按一下這裡查看你的帳單設定</billinglink> </b>",
    "chargeReminderEmail.billingType.ACHOrWire.text": "ACH 或電匯",
    "chargeReminderEmail.billingType.creditCard.text":
      "末四碼為 <b>{last4Digits}</b> 的 <b>{brand}</b>卡",
    "chargeReminderEmail.closingText": "謝謝你。{br} ──來自 Notion 團隊",
    "chargeReminderEmail.greeting": "嗨，你好！",
    "chargeReminderEmail.reminderBody.text":
      "看起來你下個 Notion 付費週期的點數不足。温馨提醒：我們將於 {dateOfNextCharge}通過帳號上已設定的付款方式（ {paymentMethod}）向你收取<b> {amountToBeCharged}</b>。",
    "chargeReminderEmail.subjectLine.text":
      "Notion 提醒：你將於 7 天內被收取費用",
    "chatButton.source": "{count, plural, other {{count} 個來源}}",
    "churnSurvey.acceptedOfferConfirmation.description":
      "你更新後的定價會在 {periodEnd} 的下一期續訂日期生效。",
    "churnSurvey.businessMonthlyOffer.description":
      "只要保留方案，即可取得 3 個月的 10% 折扣。",
    "churnSurvey.businessYearlyOffer.description":
      "只要保留方案，即可取得 10% 折扣。",
    "churnSurvey.cancelButton.title": "取消",
    "churnSurvey.cancelSubscription.title": "取消訂閱",
    "churnSurvey.confirmation.description":
      "在 {periodEnd} 前，你還是能夠享受目前方案的功能。你可以隨時重新訂閱或切換至另一個方案。",
    "churnSurvey.continueButton.title": "繼續",
    "churnSurvey.downgrade.description":
      "在 {periodEnd} 前，你還是能夠享受目前方案的功能。你可以隨時重新訂閱或切換至另一個方案。",
    "churnSurvey.downgradeButton.title": "降級",
    "churnSurvey.downgradeSection.description":
      "方案切換至 {planMessage} 時會套用下列限制",
    "churnSurvey.downgradeSection.restrictions.blocks": "區塊",
    "churnSurvey.downgradeSection.restrictions.guests": "訪客",
    "churnSurvey.downgradeSection.restrictions.guests.limit": "5",
    "churnSurvey.downgradeSection.restrictions.guests.limit.oneHundred": "100",
    "churnSurvey.downgradeSection.restrictions.guests.limit.ten": "10",
    "churnSurvey.downgradeSection.restrictions.guests.limit.twoFifty": "250",
    "churnSurvey.downgradeSection.restrictions.included.title": "已包括",
    "churnSurvey.downgradeSection.restrictions.mbFileUpload": "MB 檔案上傳",
    "churnSurvey.downgradeSection.restrictions.noAdminTools.title":
      "沒有管理員工具",
    "churnSurvey.downgradeSection.restrictions.noAdvancedSecurity.title":
      "沒有進階安全和控制",
    "churnSurvey.downgradeSection.restrictions.noAuditLog.title":
      "沒有稽核日誌檔",
    "churnSurvey.downgradeSection.restrictions.noPermissionGroups.title":
      "沒有權限群組",
    "churnSurvey.downgradeSection.restrictions.noPrivateTeamspaces.title":
      "沒有私人團隊空間",
    "churnSurvey.downgradeSection.restrictions.noSCIM.title": "沒有 SCIM",
    "churnSurvey.downgradeSection.restrictions.noSamlSso.title":
      "沒有 SAML 單一登入",
    "churnSurvey.downgradeSection.restrictions.noTeamspaces.title":
      "沒有團隊空間",
    "churnSurvey.downgradeSection.restrictions.oneThousand": "1,000",
    "churnSurvey.downgradeSection.restrictions.unlimited": "無限",
    "churnSurvey.downgradeSection.restrictions.versionHistory.limit": "30 天",
    "churnSurvey.downgradeSection.restrictions.versionHistory.limit.ninety":
      "90 天",
    "churnSurvey.downgradeSection.restrictions.versionHistory.limit.seven":
      "7 天",
    "churnSurvey.downgradeSection.restrictions.versionHistory.title":
      "沒有版本歷史",
    "churnSurvey.enterpriseAnnualOffer.description":
      "只要保留方案，即可取得 10% 折扣。",
    "churnSurvey.enterpriseMonthlyOffer.description":
      "只要保留方案，即可取得 3 個月的 10% 折扣。",
    "churnSurvey.features.adminTools": "管理員工具",
    "churnSurvey.features.auditLog": "稽核日誌檔",
    "churnSurvey.features.collaborativeTeamspaces": "協作團隊空間",
    "churnSurvey.features.saml": "SAML 單一登入",
    "churnSurvey.features.securityAndControls": "進階安全和控制",
    "churnSurvey.features.sharingPermissions": "分享權限",
    "churnSurvey.features.versionHistory": "30 天的版本歷史",
    "churnSurvey.header.businessOffer.title": "我們的商業版提供 10% 折扣。",
    "churnSurvey.header.enterpriseOffer.title": "你的企業版享有 10% 折扣。",
    "churnSurvey.header.plusOfferAnnual.title":
      "我們為你的加值版提供 10% 折扣。",
    "churnSurvey.header.plusOfferMonthly.title":
      "我們為你的加值版提供 50% 折扣。",
    "churnSurvey.header.questionnaire.aiCancellation.title":
      "為什麼你想移除 AI？",
    "churnSurvey.header.questionnaire.cancellation.title": "為什麼你想取消？",
    "churnSurvey.header.questionnaire.title": "為什麼你想降級？",
    "churnSurvey.header.questionnaire.workspaceCancellation.title":
      "為什麼你想刪除工作區？",
    "churnSurvey.header.teamOfferAnnual.title":
      "我們為你的團隊版提供 10% 折扣。",
    "churnSurvey.header.teamOfferMonthly.title":
      "我們為你的團隊版提供 50% 折扣。",
    "churnSurvey.offer.continueDeletingWorkspace.title": "繼續刪除整個工作區",
    "churnSurvey.offer.continueDowngrading.title": "降級至 {planMessage}",
    "churnSurvey.offer.fiftyPercent": "取得 50% 折扣",
    "churnSurvey.offer.tenPercent": "取得 10% 折扣",
    "churnSurvey.offerSection.description": "你有機會保留",
    "churnSurvey.reasons.addedByMistake": "不小心加入了",
    "churnSurvey.reasons.consolidating_workspaces": "合併 Notion 工作區",
    "churnSurvey.reasons.dataSecurity": "資料安全性",
    "churnSurvey.reasons.description": "我們歡迎你提供意見，讓 Notion 變得更好",
    "churnSurvey.reasons.missingFeatures": "缺少功能",
    "churnSurvey.reasons.notUsingEnough": "沒有經常使用",
    "churnSurvey.reasons.other": "其他",
    "churnSurvey.reasons.qualityOfResults": "結果品質",
    "churnSurvey.reasons.reasonOtherPlaceholder": "請告訴我們更多…",
    "churnSurvey.reasons.switching": "切換至另一個工具",
    "churnSurvey.reasons.tooDifficult": "太難使用",
    "churnSurvey.reasons.tooExpensive": "成本（太昂貴或預算削減）",
    "churnSurvey.reasons.upgradedByMistake": "不小心升級了",
    "churnSurvey.reasons.usingAnotherAIService": "使用另一個 AI 服務",
    "churnSurvey.teamAnnualOffer.description":
      "只要保留方案，即可取得 10% 折扣。",
    "churnSurvey.teamMonthlyOffer.description":
      "只要保留方案，即可取得 3 個月的 50% 折扣。",
    "churnSurveyMenu.alternatives.googleDriveDocs": "Google 雲端硬碟 / 文件",
    "churnSurveyMenu.business.title": "商業版",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.free":
      "如果現在取消訂閱，你仍可繼續使用此付費方案的所有功能直到 {periodEnd}。你可以隨時重新訂閱或換到另一個付費方案。{br}在 {periodEnd} 後，此工作區將降級為免費版，包含以下限制：<li>個人使用</li><li>工作區的訪客限制為 5 個</li><li>上傳檔案每個最多 5MB</li><li>7 天的版本歷史記錄</li><li>沒有與團隊成員共用的工作區</li>",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.team":
      "如果你現在取消訂閱，你仍可繼續使用此付費方案的所有功能直到 {periodEnd}。你可以隨時重新訂閱或切換到另一個付費方案。{br}在 {periodEnd}後，此工作區將降級為團隊版的免費試用版，包含以下限制：<li>1000 個區塊限制</li><li>上傳檔案每個最大 5 MB</li><li>沒有版本歷史記錄</li><li>沒有批量匯出</li><li>沒有進階權限</li><li>沒有權限群組</li>",
    "churnSurveyMenu.free.title": "免費版",
    "churnSurveyMenu.header.free.title": "降級至免費版",
    "churnSurveyMenu.personal.title": "個人專業版",
    "churnSurveyMenu.plus.title": "加值版",
    "churnSurveyMenu.team.title": "團隊",
    "claimAnUpgrade.downgradeEmail.bulletList.item1":
      "你再也不是工作區 <b>{workspaceName}</b> 的工作區擁有者。你的角色已變更為成員。",
    "claimAnUpgrade.downgradeEmail.bulletList.item2":
      "企業電子郵件網域 <b>{claimedEmailDomain}</b> 的擁有者現在是工作區擁有者。",
    "claimAnUpgrade.downgradeEmail.reachOut":
      "如果你對擁有權轉移有任何疑問，請聯絡企業電子郵件網域 <b>{claimedEmailDomain}</b> 的擁有者。",
    "claimAndUpgrade.downgradeEmail.bulletHeading": "這對你來說代表什麼？",
    "claimAndUpgrade.downgradeEmail.closingText":
      "謝謝你。{br} ──來自 Notion 團隊",
    "claimAndUpgrade.downgradeEmail.greetingWithName": "{customerName}，你好：",
    "claimAndUpgrade.downgradeEmail.greetingWithoutName": "你好：",
    "claimAndUpgrade.downgradeEmail.noticeMessage":
      "我們的記錄顯示你的 Notion 工作區 <b>{workspaceName}</b> 是使用已驗證的企業電子郵件建立。企業電子郵件網域 <b>{claimedEmailDomain}</b> 的擁有者已宣告此工作區的擁有權。因為你被指定為此工作區擁有者，所以已向你傳送通知。",
    "claimAndUpgrade.downgradeEmail.subjectLine":
      "與 {workspaceName} 相關的擁有權通知",
    "claimAndUpgrade.email.closingText": "謝謝你。{br} ──來自 Notion 團隊",
    "claimAndUpgrade.email.explanation":
      "你現在是 <b>{workspaceName}</b> 的工作區擁有者，且所有現有的工作區擁有者已降級為成員。",
    "claimAndUpgrade.email.getHelp":
      "如需技術問題說明，你可以透過 <notionsupportemail>team@makenotion.com</notionsupportemail> 聯絡我們的支援團隊。",
    "claimAndUpgrade.email.greetingWithName": "{customerName}，你好：",
    "claimAndUpgrade.email.greetingWithoutName": "你好：",
    "claimAndUpgrade.email.subjectLine": "成功宣告 {workspaceName} 的擁有權",
    "claimAndUpgrade.email.successMessage":
      "你對工作區 <b>{workspaceName}</b> 宣告要求已成功完成。",
    "claimAndUpgrade.email.visitWorkspace":
      "<linktoworkspace>按一下此處造訪 {workspaceName}</linktoworkspace>。",
    "claimSpaceDeletionDelayEmail.bodyLine1":
      "使用網域管理刪除之工作區 <b>{targetSpaceName}</b> 的擁有者，已要求將他們工作區的恢復期延長至 <b>{date}</b>。",
    "claimSpaceDeletionDelayEmail.bodyLine3":
      "如果你想直接聯絡工作區擁有者，請在 <mailto>{targetSpaceAdminEmail}</mailto> 與他們聯絡。",
    "claimSpaceDeletionDelayEmail.bulletList.heading":
      "<b>這對你來說代表什麼？</b>",
    "claimSpaceDeletionDelayEmail.bulletList.item1":
      "工作區擁有者可聯絡你以要求恢復。",
    "claimSpaceDeletionDelayEmail.bulletList.item2":
      "如果不恢復工作區，系統即會在 {date} 排定永久刪除作業。",
    "claimSpaceDeletionDelayEmail.closingText":
      "謝謝你。{br} Notion 團隊　敬上",
    "claimSpaceDeletionDelayEmail.greetingWithName": "{customerName}你好：",
    "claimSpaceDeletionDelayEmail.greetingWithoutName": "你好：",
    "claimSpaceDeletionDelayEmail.subjectLine": "已延長刪除工作區的恢復期",
    "claimSpaceDeletionEmail.bodyLine1":
      "我們的記錄顯示你的工作區 <b>{spaceName}</b> 是使用已驗證的企業電子郵件地址 <b>{emailDomain}</b> 建立。企業電子郵件網域 {emailDomain} 的擁有者已開始刪除你的工作區 {spaceName}。",
    "claimSpaceDeletionEmail.bodyLine2":
      "如需此流程的更多資訊，請前往 <linktohelpcenter>Notion 說明中心</linktohelpcenter>。",
    "claimSpaceDeletionEmail.bodyLine3":
      "<b>如有任何其他疑問或需要恢復你的工作區，請聯絡電子郵件網域 <mailto>{contactEmail}</mailto> 的擁有者。</b>",
    "claimSpaceDeletionEmail.bulletList.heading": "<b>這對你來說代表什麼？</b>",
    "claimSpaceDeletionEmail.bulletList.item1": "你的工作區存取權限已被撤銷。",
    "claimSpaceDeletionEmail.bulletList.item2":
      "{daysRemaining, plural, other {在 {daysRemaining} 天內，系統會永久刪除你的工作區及其內容。}}",
    "claimSpaceDeletionEmail.closingText": "謝謝你。{br} Notion 團隊　敬上",
    "claimSpaceDeletionEmail.greetingWithName": "{customerName}，你好！",
    "claimSpaceDeletionEmail.greetingWithoutName": "你好：",
    "claimSpaceDeletionEmail.subjectLine":
      "你有 {daysRemaining} 天可恢復已刪除的工作區",
    "claimableWorkspaceEmail.bodyLine1":
      "我們的記錄顯示工作區 <b>{workspaceName}</b> 在建立時使用了組織透過 Notion 驗證的電子郵件網域 <b>{emailDomain}</b>。請注意此工作區可由組織管理。",
    "claimableWorkspaceEmail.bodyLine2":
      "如果有需要請聯絡系統管理員將此工作區轉移至個人 Notion 帳戶。",
    "claimableWorkspaceEmail.bulletList.heading": "<b>這對你來說代表什麼？</b>",
    "claimableWorkspaceEmail.bulletList.item1":
      "企業組織的擁有者可變成你工作區的工作區擁有者",
    "claimableWorkspaceEmail.bulletList.item2":
      "你在工作區中的存取權限層級可降級",
    "claimableWorkspaceEmail.bulletList.item3":
      "你的工作區內容受到企業組織的企業 MSA 所規範",
    "claimableWorkspaceEmail.closingText": "──來自 Notion 團隊",
    "claimableWorkspaceEmail.greetingWithName": "{customerName}，你好！",
    "claimableWorkspaceEmail.greetingWithoutName": "你好！",
    "claimableWorkspaceEmail.subjectLine": "你的工作區符合宣告資格",
    "clientAutomationHelpers.errorMessages.createPageButtonError":
      "「在資料庫中建立頁面」缺少目標",
    "clientAutomationHelpers.errorMessages.editPagesButtonError":
      "「在資料庫中編輯頁面」缺少目標",
    "clientAutomationHelpers.errorMessages.missingTarget": "缺少目標",
    "clientAutomationHelpers.errorMessages.missingTargetDatabase":
      "缺少目標資料庫",
    "clientAutomationHelpers.errorMessages.missingTargetPage": "缺少目標頁面",
    "clientAutomationHelpers.errorMessages.noActions":
      "此按鈕沒有步驟且不會執行任何動作",
    "clientAutomationHelpers.errorMessages.openPageButtonError":
      "「開啟頁面」缺少目標",
    "clientAutomationHelpers.errorMessages.selectDatabase":
      "選擇資料庫以修復此問題",
    "clientAutomationHelpers.errorMessages.selectPage": "選擇頁面以修復此問題",
    "clientAutomationHelpers.errorMessages.updatePagesButtonError":
      "「在資料庫中更新頁面」缺少目標",
    "clipboardActions.offlineError.message": "請連接網路後複製此區塊。",
    "clipboardActions.pasteFileIntoCommentError.message":
      "很抱歉，你無法將檔案貼入評論中。",
    "clipboardInputRenderer.copyLink.message": "按一下滑鼠右鍵並複製上面的連結",
    "codeBlock.caption.button": "標題",
    "codeBlock.copyToClipboard.button": "複製",
    "codeBlock.databaseEditGroupMenu.addGroupTitle": "加入群組",
    "codeBlock.databaseEditGroupMenu.cancelButton.label": "取消",
    "codeBlock.databaseEditGroupMenu.doneButton.label": "完成",
    "codeBlock.databaseEditGroupMenu.renameGroupTitle": "為群組重新命名",
    "codeBlock.mobileLanguageMenu.doneButton.label": "完成",
    "codeBlock.mobileLanguageMenu.title": "語言",
    "codeBlock.searchPrompt": "搜尋語言…",
    "codepenBlock.embed.caption": "適用於啟用了公開存取的 CodePen 連結",
    "codepenBlock.placeholder": "嵌入 CodePen",
    "collection.boardView.hiddenGroups.label": "隱藏群組",
    "collection.boardView.selectProperty.defaultName": "狀態",
    "collection.numberFormat.argentinePeso": "阿根廷批索",
    "collection.numberFormat.baht": "銖",
    "collection.numberFormat.brl": "巴西雷亞爾",
    "collection.numberFormat.canadianDollar": "加拿大元",
    "collection.numberFormat.chileanPeso": "智利批索",
    "collection.numberFormat.colombianPeso": "哥倫比亞批索",
    "collection.numberFormat.danishKrone": "丹麥克朗",
    "collection.numberFormat.dirham": "迪拉姆",
    "collection.numberFormat.dollar": "美元",
    "collection.numberFormat.euro": "歐元",
    "collection.numberFormat.forint": "福林",
    "collection.numberFormat.franc": "法郎",
    "collection.numberFormat.hongKongDollar": "港幣",
    "collection.numberFormat.idr": "印尼盾",
    "collection.numberFormat.koruna": "克朗",
    "collection.numberFormat.krona": "克朗",
    "collection.numberFormat.leu": "列伊",
    "collection.numberFormat.mexicanPeso": "墨西哥批索",
    "collection.numberFormat.newTaiwanDollar": "新台幣",
    "collection.numberFormat.newZealandDollar": "紐西蘭元",
    "collection.numberFormat.norwegianKrone": "挪威克朗",
    "collection.numberFormat.number": "數字",
    "collection.numberFormat.numberWithCommas": "帶千分位分隔符號的數字",
    "collection.numberFormat.percent": "百分比",
    "collection.numberFormat.philippinePeso": "菲律賓批索",
    "collection.numberFormat.pound": "英磅",
    "collection.numberFormat.rand": "蘭特",
    "collection.numberFormat.ringgit": "林吉特",
    "collection.numberFormat.riyal": "里亞爾",
    "collection.numberFormat.ruble": "盧布",
    "collection.numberFormat.rupee": "盧比",
    "collection.numberFormat.shekel": "錫客爾",
    "collection.numberFormat.singaporeDollar": "新加坡幣",
    "collection.numberFormat.try": "里拉",
    "collection.numberFormat.uruguayanPeso": "烏拉圭批索",
    "collection.numberFormat.won": "韓元",
    "collection.numberFormat.yen": "日元",
    "collection.numberFormat.yuan": "人民幣",
    "collection.numberFormat.zloty": "茲羅提",
    "collectionBoardItem.edit.tooltip": "編輯",
    "collectionCardItem.edit.tooltip": "編輯",
    "collectionFilterCombinatorGrid.filterOperator.and": "且",
    "collectionFilterCombinatorGrid.filterOperator.and.lowercase": "且",
    "collectionFilterCombinatorGrid.filterOperator.or": "或",
    "collectionFilterCombinatorGrid.filterOperator.or.lowercase": "或",
    "collectionFilterMenu.dateFilter.relativeDateFilter.description":
      "篩選條件將更新為目前日期",
    "collectionFilterMenu.dateRangeFilter.relativeDateRangeFilter.description":
      "篩選條件將更新為目前日期",
    "collectionFilterMenuFilter.filterOperators.checkbox.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.date.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.file.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.location.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.multi_select.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.number.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.person.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.relation.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.select.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.status.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.text.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.filterOperators.verification.order":
      "{operator}{operatorValue}",
    "collectionFilterMenuFilter.property.name": "屬性",
    "collectionFilterMenuFilterOperatorValue.date.exact.order":
      "{exact}{dateValue}",
    "collectionFilterMenuFilterOperatorValue.dateRange.exact.order": "空白",
    "collectionFilterMenuHelpers.checkbox.checked": "已勾選",
    "collectionFilterMenuHelpers.checkbox.unchecked": "未勾選",
    "collectionFilterMenuHelpers.combinatorOperators.and": "且",
    "collectionFilterMenuHelpers.combinatorOperators.or": "或",
    "collectionFilterMenuHelpers.operator.any": "任何",
    "collectionFilterMenuHelpers.operator.checkboxIs": "是",
    "collectionFilterMenuHelpers.operator.checkboxIsNot": "不是",
    "collectionFilterMenuHelpers.operator.dateIs": "是",
    "collectionFilterMenuHelpers.operator.dateIsAfter": "晚於",
    "collectionFilterMenuHelpers.operator.dateIsBefore": "早於",
    "collectionFilterMenuHelpers.operator.dateIsOnOrAfter": "是或晚於",
    "collectionFilterMenuHelpers.operator.dateIsOnOrBefore": "是或早於",
    "collectionFilterMenuHelpers.operator.dateIsRelativeTo": "相對於今天",
    "collectionFilterMenuHelpers.operator.dateIsWithin": "介於",
    "collectionFilterMenuHelpers.operator.enumContains": "包含",
    "collectionFilterMenuHelpers.operator.enumDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.enumIs": "是",
    "collectionFilterMenuHelpers.operator.enumIsNot": "不是",
    "collectionFilterMenuHelpers.operator.every": "每",
    "collectionFilterMenuHelpers.operator.isEmpty": "為空白",
    "collectionFilterMenuHelpers.operator.isNotEmpty": "不為空白",
    "collectionFilterMenuHelpers.operator.locationIs": "是",
    "collectionFilterMenuHelpers.operator.locationIsNot": "不是",
    "collectionFilterMenuHelpers.operator.none": "無",
    "collectionFilterMenuHelpers.operator.numberDoesNotEqual": "≠",
    "collectionFilterMenuHelpers.operator.numberEquals": "=",
    "collectionFilterMenuHelpers.operator.numberGreaterThan": ">",
    "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo": "≥",
    "collectionFilterMenuHelpers.operator.numberLessThan": "<",
    "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo": "≤",
    "collectionFilterMenuHelpers.operator.personContains": "包含",
    "collectionFilterMenuHelpers.operator.personDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.relationContains": "包含",
    "collectionFilterMenuHelpers.operator.relationDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.statusIs": "是",
    "collectionFilterMenuHelpers.operator.statusIsNot": "不是",
    "collectionFilterMenuHelpers.operator.stringContains": "包含",
    "collectionFilterMenuHelpers.operator.stringDoesNotContain": "不包含",
    "collectionFilterMenuHelpers.operator.stringEndsWith": "結尾是",
    "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix":
      "（未使用）",
    "collectionFilterMenuHelpers.operator.stringIs": "是",
    "collectionFilterMenuHelpers.operator.stringIsNot": "不是",
    "collectionFilterMenuHelpers.operator.stringStartsWith": "開頭是",
    "collectionFilterMenuHelpers.operator.verificationStateIs": "是",
    "collectionFilterMenuHelpers.operator.verificationStateIsNot": "不是",
    "collectionFilterMenuHelpers.relativeDates.customRange": "附近範圍",
    "collectionFilterMenuHelpers.relativeDates.day": "天",
    "collectionFilterMenuHelpers.relativeDates.days": "天",
    "collectionFilterMenuHelpers.relativeDates.direction": "方向",
    "collectionFilterMenuHelpers.relativeDates.exactDate": "自訂日期",
    "collectionFilterMenuHelpers.relativeDates.exactDateRange": "確切日期",
    "collectionFilterMenuHelpers.relativeDates.month": "個月",
    "collectionFilterMenuHelpers.relativeDates.months": "個月",
    "collectionFilterMenuHelpers.relativeDates.next": "未來",
    "collectionFilterMenuHelpers.relativeDates.oneMonthAgo": "一個月前",
    "collectionFilterMenuHelpers.relativeDates.oneMonthFromNow": "一個月後",
    "collectionFilterMenuHelpers.relativeDates.oneWeekAgo": "一週前",
    "collectionFilterMenuHelpers.relativeDates.oneWeekFromNow": "一週後",
    "collectionFilterMenuHelpers.relativeDates.past": "過去",
    "collectionFilterMenuHelpers.relativeDates.range": "相對範圍",
    "collectionFilterMenuHelpers.relativeDates.theNextMonth": "下月",
    "collectionFilterMenuHelpers.relativeDates.theNextWeek": "下週",
    "collectionFilterMenuHelpers.relativeDates.theNextYear": "明年",
    "collectionFilterMenuHelpers.relativeDates.thePastMonth": "上月",
    "collectionFilterMenuHelpers.relativeDates.thePastWeek": "上週",
    "collectionFilterMenuHelpers.relativeDates.thePastYear": "去年",
    "collectionFilterMenuHelpers.relativeDates.thisWeek": "本週",
    "collectionFilterMenuHelpers.relativeDates.today": "今天",
    "collectionFilterMenuHelpers.relativeDates.tomorrow": "明天",
    "collectionFilterMenuHelpers.relativeDates.unit": "單位",
    "collectionFilterMenuHelpers.relativeDates.week": "週",
    "collectionFilterMenuHelpers.relativeDates.weeks": "週",
    "collectionFilterMenuHelpers.relativeDates.year": "年",
    "collectionFilterMenuHelpers.relativeDates.years": "年",
    "collectionFilterMenuHelpers.relativeDates.yesterday": "昨天",
    "collectionFilterMenuHelpers.relativedates.this": "當",
    "collectionFilterValueMenu.privateLocationSection": "私人式",
    "collectionHelpers.board.caption": "看板視圖，適用於專案規劃以及錯誤追蹤",
    "collectionHelpers.board.displayName": "看板",
    "collectionHelpers.calendar.caption": "月視圖，可用於事件規劃和安排",
    "collectionHelpers.calendar.displayName": "行事曆",
    "collectionHelpers.gallery.caption":
      "卡片格線，可用於情緒板、索引卡片和食譜",
    "collectionHelpers.gallery.displayName": "圖庫",
    "collectionHelpers.list.caption": "簡化的頁面視圖，適用於書籤和筆記",
    "collectionHelpers.list.displayName": "列表",
    "collectionHelpers.page.caption":
      "用於依階層組織頁面的頁面視圖，最適用於文件和知識庫",
    "collectionHelpers.page.displayName": "頁面",
    "collectionHelpers.table.caption":
      "表格視圖，儲存和查看任何類型的結構化資料",
    "collectionHelpers.table.displayName": "表格",
    "collectionHelpers.timeline.caption": "時程表視圖，適用於專案排程和規劃",
    "collectionHelpers.timline.displayName": "時程表",
    "collectionHiddenGroupsButton.hiddenGroupsButton.text":
      "{numberOfHiddenGroups, plural, other {{numberOfHiddenGroups} 個隱藏群組}}",
    "collectionNoDateMenu.addResultToCalendar.prompt": "按一下加入到行事曆",
    "collectionNoDateMenu.addResultToTimeline.prompt": "按一下加入到時程表",
    "collectionNoDateMenu.loading.message": "載入中…",
    "collectionNoDateMenu.mobileMenuTitle": "沒有日期的頁面",
    "collectionNoDateMenu.noResults.title": "沒有結果",
    "collectionNoDateMenu.pagesWithNoDateInPrefix":
      "{noDateTotal, plural, other {{noDateTotal} 個頁面沒有日期・用於}}",
    "collectionNoDateMenu.searchPlaceholder": "搜尋頁面…",
    "collectionNoDateMenu.view.button.label": "視圖",
    "collectionPicker.searchBarFilter.text": "篩選…",
    "collectionSettings.createSlackAutomationView.title": "新的Slack通知",
    "collectionSettings.editAutomationView.actionSection.placeholder":
      "加入動作",
    "collectionSettings.editAutomationView.actionSection.title": "執行此動作",
    "collectionSettings.editAutomationView.addAction.iconButton": "添加任务",
    "collectionSettings.editAutomationView.addTrigger.iconButton": "添加条件",
    "collectionSettings.editAutomationView.createButton.label": "已创建",
    "collectionSettings.editAutomationView.delete": "刪除",
    "collectionSettings.editAutomationView.notifyForOption.title":
      "針對以下位置的頁面",
    "collectionSettings.editAutomationView.saveButton.label": "已保存",
    "collectionSettings.editAutomationView.saveButton.title": "儲存",
    "collectionSettings.editAutomationView.triggerSection.placeholder":
      "加入觸發程序",
    "collectionSettings.editAutomationView.triggerSection.title":
      "這裡的任一情況發生時",
    "collectionSettings.editSlackAutomationView.title": "Slack 通知",
    "collectionSettings.slackAutomationsView.create": "通知其他频道",
    "collectionSettings.slackAutomationsView.header": "Slack 通知",
    "collectionSettingsAccountPicker.addAccount": "連接另一個帳號",
    "collectionSettingsAccountPicker.title": "選擇帳戶",
    "collectionSettingsCreateConnectedRelationPagePicker.addPageButton.label":
      "新增頁面",
    "collectionSettingsCreateExternalViewPicker.authenticateBody.title":
      "連結你的 {integration} 帳戶，即可顯示更豐富的內容預覽和順利匯入。",
    "collectionSettingsCreateExternalViewPicker.authenticateButton.title":
      "連接到 {integration}",
    "collectionSettingsCreateExternalViewPicker.authenticateHeader.title":
      "連接到 {integration}",
    "collectionSettingsCreateExternalViewPicker.currentAccountSection.label":
      "連接到 {integration}",
    "collectionSettingsCreateExternalViewPicker.error.unknown": "出了些問題。",
    "collectionSettingsCreateExternalViewPicker.filters.Issues": "問題",
    "collectionSettingsCreateExternalViewPicker.filters.PullRequests":
      "提取請求",
    "collectionSettingsCreateExternalViewPicker.filters.all": "全部顯示",
    "collectionSettingsCreateExternalViewPicker.filters.boards": "看板",
    "collectionSettingsCreateExternalViewPicker.filters.issues": "問題",
    "collectionSettingsCreateExternalViewPicker.filters.projects": "專案",
    "collectionSettingsCreateExternalViewPicker.filters.pullRequests":
      "提取請求",
    "collectionSettingsCreateExternalViewPicker.filters.releases": "版本",
    "collectionSettingsCreateExternalViewPicker.loadingData":
      "載入可用資源中...",
    "collectionSettingsCreateExternalViewPicker.noResults.help":
      "嘗試不同的搜尋或貼上任何 {integration} URL",
    "collectionSettingsCreateExternalViewPicker.noResults.text": "沒有結果",
    "collectionSettingsCreateExternalViewPicker.settingUpSync": "設定同步中...",
    "collectionSettingsCreateExternalViewPicker.syncSourceButton.label":
      "同步來源",
    "collectionSettingsCreateExternalViewPicker.title":
      "從 {integration} 中選擇",
    "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.closeButton":
      "關閉",
    "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.copyDebuggingInformation":
      "複製除錯資訊",
    "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.title":
      "目前不支援此來源。請嘗試不同來源。",
    "collectionSettingsCreateExternalViewSource.authenticateBody.title":
      "連結你的 {integration} 帳戶，即可顯示更豐富的內容預覽和無縫匯入。",
    "collectionSettingsCreateExternalViewSource.authenticateButton.title":
      "連接到 {integration}",
    "collectionSettingsCreateExternalViewSource.authenticateHeader.title":
      "連接到 {integration}",
    "collectionSettingsCreateExternalViewSource.error.label":
      "無效的 {integration} 資料庫網址",
    "collectionSettingsCreateExternalViewSource.linkBody.title":
      "複製任何 {integration} 網址並在下方貼上以開始同步。",
    "collectionSettingsCreateExternalViewSource.linkHeader.title":
      "{integration}",
    "collectionSettingsCreateExternalViewSource.linkInput.label":
      "{integration} 網址",
    "collectionSettingsCreateExternalViewSource.nextButton.label": "下一個",
    "collectionSettingsGithubAutomationConfig.noAutomation": "無",
    "collectionSettingsGithubAutomationConfig.pullRequestApproved": "PR 已核准",
    "collectionSettingsGithubAutomationConfig.pullRequestMerged": "PR 已合併",
    "collectionSettingsGithubAutomationConfig.pullRequestOpened": "PR 已開啟",
    "collectionSettingsGithubAutomationConfig.pullRequestReviewRequested":
      "已要求 PR 審核",
    "collectionSettingsGithubAutomationConfig.removeStatusOption": "清除",
    "collectionSettingsGithubAutomationConfig.statusPicker.addStatusButton":
      "加入狀態屬性",
    "collectionSettingsGithubAutomationConfig.statusPicker.autoUpdate":
      "自動更新",
    "collectionSettingsGithubAutomationConfig.statusPicker.newStatusPropertyButton":
      "新狀態",
    "collectionSettingsGithubAutomationConfig.statusPicker.newStatusPropertyOrigin":
      "全新",
    "collectionSettingsGithubAutomationConfig.statusPicker.when": "時間點",
    "collectionSettingsNewDatabase.confirmDialog.affirmativeButton.label":
      "是，建立 {selectedType, select, custom { {type}} other { {type}}} 資料庫",
    "collectionSettingsNewDatabase.confirmDialog.cancel.label": "取消",
    "collectionSettingsNewDatabase.confirmDialog.prompt":
      "您想要繼續建立此資料庫嗎？",
    "collectionSettingsNotificationFilter.propertyFilters.header.title":
      "如果…",
    "collectionSettingsNotificationFilterMenuHelpers.operator.propertyChanged":
      "已變更",
    "collectionSettingsNotificationUpdate.channelName.header.placeholder":
      "your-slack-channel",
    "collectionSettingsNotificationUpdate.eventFilter.header.title": "當…",
    "collectionSettingsNotificationUpdate.notificationAccount.header.title":
      "通知…",
    "collectionSettingsNotifications.searchInput.placeholder": "搜尋...",
    "collectionSettingsNotificationsAccountPicker.accountDropdown.selectPlaceholder":
      "選擇工作區",
    "collectionSettingsNotificationsAccountPicker.workspacePicker.title":
      "工作區",
    "collectionSettingsNotificationsChannelPicker.channelDropdown.selectPlaceholder":
      "選擇頻道",
    "collectionSettingsNotificationsEventsPicker.eventsDropdown.selectPlaceholder":
      "選擇通知的時間點",
    "collectionSettingsNotificationsFilter.addFilter.label": "加入篩選器",
    "collectionSettingsNotificationsFilter.editableProperty.dropdownOption.changes":
      "完全變更",
    "collectionSettingsNotificationsFilter.editableProperty.dropdownOption.filter":
      "變更為特定值",
    "collectionSettingsNotificationsFilter.editableProperty.dropdownTitle.changes":
      "條件類型：完全變更",
    "collectionSettingsNotificationsFilter.editableProperty.dropdownTitle.filter":
      "條件類型：變更為特定值",
    "collectionSettingsNotificationsFilter.editableProperty.title":
      "{propertyName}：變更",
    "collectionSettingsNotificationsUpdate.header.creatorName":
      "由 {creatorName} 加入",
    "collectionSettingsNotificationsUpdate.heading.placeholder": "全新通知規則",
    "collectionSettingsNotificationsUpdates.remove.confirmation.message":
      "確定要移除此通知配置嗎？",
    "collectionSettingsSlackAutomationsView.automationTitle.defaultTitle":
      "{creator} 的 Slack 警訊",
    "collectionSortMenuRow.sortDirectionSelectMenu.ascending": "升序",
    "collectionSortMenuRow.sortDirectionSelectMenu.descending": "降序",
    "collectionSortMenuRow.sortDirectionSelectMenu.placeholder": "空",
    "collectionSortMenuRow.sortDirectionSelectMenu.title": "排序",
    "collectionTabBar.newViewPlaceholder.title": "新增視圖",
    "collectionTabBar.showMoreViews.title": "還有 {moreViewsCount} 個…",
    "collectionTabBar.viewTab.tooltip":
      "{viewType, select, Table {{collection} 的表格視圖} Board {{collection}的看板視圖} Timeline {{collection}的時間軸視圖} Calendar {{collection}的行事曆視圖} List {{collection}的列表視圖} Gallery {{collection}的圖庫視圖} other {集合}}",
    "collectionUniqueIdHelpers.prefixInvalidError":
      "前置詞必須以字母開頭，並接著一或多個（最多 6 個）英數字元或連字號。",
    "collectionUniqueIdHelpers.prefixTooShort": "只允許英數字元和虛線",
    "collectionUniqueIdHelpers.prefixTooShortError":
      "索引鍵必須介於 2 至 7 個字元之間",
    "collectionViewBlock.action.filter.title": "篩選器",
    "collectionViewBlock.action.newItem.nonTypedDatabaseTitle": "全新",
    "collectionViewBlock.action.newItem.typedDatabaseTitle":
      "全新 {singleItemName}",
    "collectionViewBlock.action.noDateButton.noProperty.label":
      "無日期 ({noDateTotal})",
    "collectionViewBlock.action.sort.title": "排序",
    "collectionViewBlock.actionBar.offlineTemplatePicker.message":
      "請連接網路以使用模版。",
    "collectionViewBlock.noPagePlaceholder.title": "沒有指定頁面",
    "collectionViewBlock.noSourcePlaceholder.title": "沒有資料來源",
    "collectionViewBlock.setExternalSource.title": "{integrationName}",
    "collectionViewBlock.setExternalSourceButton.title":
      "<button>連結到 {integrationName}</button> 以繼續",
    "collectionViewBlock.setSourceButton.title":
      "<button>選擇資料來源</button>以繼續",
    "collectionViewCardItem.action.cancel": "取消",
    "collectionViewCardItem.action.reposition": "調整位置",
    "collectionViewCardItem.action.savePosition": "儲存位置",
    "collectionViewCardItem.edit.tooltip": "編輯",
    "collectionViewCardItem.itemName.placeholder": "輸入名稱…",
    "collectionViewCardItem.repositionAction.tooltip":
      "重新命名、刪除、移動等…",
    "collectionViewCardItem.untitledBlock": "無標題",
    "collectionViewItem.edit.tooltip": "編輯",
    "collectionViewItemTitle.itemName.placeholder": "輸入名稱…",
    "collectionViewItemTitle.untitledBlock": "無標題",
    "collectionViewSelect.viewSearch.label": "搜尋視圖...",
    "collections.operatorValueSelect.placeholder": "選擇選項",
    "colors.select.blue": "藍色",
    "colors.select.brown": "棕色",
    "colors.select.gray": "灰色",
    "colors.select.green": "綠色",
    "colors.select.lightGray": "淺灰色",
    "colors.select.orange": "橙色",
    "colors.select.pink": "粉色",
    "colors.select.purple": "紫色",
    "colors.select.red": "紅色",
    "colors.select.yellow": "黃色",
    "commandPalette.recentActions.more": "更多",
    "commandPalette.recentActions.removeFromMenu": "從功能表中移除此動作",
    "commandPalette.recentActions.title": "最近動作",
    "comment.actions.addReaction.label": "加入反應",
    "comment.actions.moreActions.label": "更多動作",
    "comment.actions.reopenButton.label": "重新開啟",
    "comment.actions.resolveButton.label": "解決",
    "comment.confirmDialog.deleteComment.deleteButton.label": "刪除",
    "comment.confirmDialog.deleteComment.prompt": "你要刪除這則評論嗎？",
    "comment.confirmDialog.discardEdit.discardButton.label": "放棄",
    "comment.confirmDialog.discardEdit.prompt": "你要放棄這次編輯嗎？",
    "comment.copyLinkToDiscussion.button": "拷貝討論連結",
    "comment.deleteComment.button": "刪除評論",
    "comment.editComment.button": "編輯評論",
    "comment.editedAtTime.label": "{lastEditedTime}（已編輯）",
    "comment.embeddedFile.uploadInProgressMessage": "正在上傳檔案...",
    "comment.newIndicator.label": "新評論",
    "comment.reopenDiscussion.button": "重新開啟討論",
    "comment.resolveDiscussion.button": "解決評論",
    "comment.unfurl.attachments.title":
      "{numberOfAttachments, plural, other {{numberOfAttachments} 個附件}}",
    "comment.unfurl.resolvedStatus": "已解決",
    "comments.learn": "了解評論",
    "comments.showLessLabel": "顯示較少",
    "completeSprintAutomationButton.keepInThisSprintItem.title":
      "保留在此 Sprint 中",
    "completeSprintAutomationButton.label": "完整的 Sprint",
    "completeSprintAutomationButton.menuItemSectionHeader.incompleteTasks.title":
      "{numIncompleteTasks, plural, other {{numIncompleteTasks} 個未完成的任務}}",
    "completeSprintAutomationButton.menuItemSectionHeader.incompleteTasksPlaceholder.title":
      "選擇未完成任務的動作",
    "completeSprintAutomationButton.menuItemSectionHeader.keepInThisSprint.title":
      "選擇下一個 Sprint…",
    "completeSprintAutomationButton.moveToNextSprintItem.title":
      "移動到下一個 Sprint",
    "completeSprintAutomationButton.searchInputPlaceholder.title":
      "選擇 Sprint",
    "completionActions.genericError":
      "AI 暫時無法使用。請在幾分鐘內再試一次。({errorCode})",
    "completionActions.moderationError":
      "AI 不允許有害或非法的內容。請修訂你的輸入後再試一次。(451)",
    "completionActions.providerError":
      "我們遇到 AI 提供者的相關問題。請在幾分鐘內再試一次。({errorCode})",
    "completionActions.refreshCompletion.errorMessage":
      "出了些問題（錯誤碼 {errorCode}）。",
    "completionPopup.blogPost.prefilledValue": "撰寫關於後述內容的部落格",
    "completionPopup.brainStorm.prefilledValue": "關於後述內容的腦力激盪想法",
    "completionPopup.creativeStory.prefilledValue":
      "撰寫關於後述內容的創意故事",
    "completionPopup.essay.prefilledValue": "撰寫關於後述內容的短文",
    "completionPopup.jobDescription.prefilledValue":
      "撰寫關於後述內容的工作說明",
    "completionPopup.meetingAgenda.prefilledValue":
      "撰寫關於後述內容的會議議程",
    "completionPopup.outline.prefilledValue": "撰寫關於後述內容的大綱",
    "completionPopup.poem.prefilledValue": "撰寫關於後述內容的詩歌",
    "completionPopup.prefilledValue": "撰寫關於 {prefilledValue} 內容",
    "completionPopup.pressRelease.prefilledValue": "撰寫關於後述內容的新聞稿",
    "completionPopup.prosConsList.prefilledValue": "撰寫關於後述內容的利弊清單",
    "completionPopup.recruitingEmail.prefilledValue":
      "撰寫關於後述內容的招聘電子郵件",
    "completionPopup.salesEmail.prefilledValue":
      "撰寫關於後述內容的銷售電子郵件",
    "completionPopup.socialMediaPost.prefilledValue":
      "撰寫關於後述內容的社群媒體貼文",
    "completionPopup.todoList.prefilledValue": "撰寫關於後述內容的待辦事項清單",
    "completions.AiWarning.learnMore": "了解更多",
    "completions.AiWarning.warning": "AI 回應可能不準確或產生誤導。",
    "completions.CompletionMenuActionBar.aiDisclaimerTooltip":
      "AI 輸出可能不準確或產生誤導",
    "completions.CompletionMenuActionBar.aiDisclaimerTooltipLearnMore":
      "按一下了解更多",
    "completions.CompletionMenuActionBar.close": "關閉",
    "completions.CompletionMenuActionBar.delete": "放棄",
    "completions.CompletionMenuActionBar.done": "完成",
    "completions.CompletionMenuActionBar.feedbackTooltip": "與 Notion 分享回饋",
    "completions.CompletionMenuActionBar.insert": "插入",
    "completions.CompletionMenuActionBar.keep": "保留",
    "completions.CompletionMenuActionBar.replace": "取代",
    "completions.CompletionMenuActionBar.sendTooltip": "傳送到 AI",
    "completions.CompletionMenuActionBar.stop": "停止",
    "completions.CompletionMenuActionBar.tryAgain": "再試一次",
    "completions.CompletionMenuActionBar.tryAgain.clickToEditAndRetry":
      "单击以编辑提示并重试。",
    "completions.CompletionMenuActionBar.tryAgain.clickToRetry": "点击以重试。",
    "completions.CompletionMenuFooter.dataShareThanks":
      "感谢您帮助改善Notion！",
    "completions.CompletionMenuFooter.feedbackThanks": "感謝你提交回饋！",
    "completions.CompletionMenuFooter.showFeedbackThanksMessage":
      "感谢您的反馈！",
    "completions.CompletionMenuFooter.thumbsDown": "提交負面回饋",
    "completions.CompletionMenuFooter.thumbsUp": "提交正面回饋",
    "completions.CompletionMenuFooter.warning":
      "AI 輸出可能不準確並產生誤導。<inlinetextlink>了解更多</inlinetextlink>",
    "completions.CompletionMenuForm.rewrite": "重寫",
    "completions.CompletionMenuHeader.generate": "產生",
    "completions.CompletionMenuHeader.learnMore": "了解更多",
    "completions.CompletionMenuHeader.notionAI": "AI 輔助{colonPunctuation}",
    "completions.CompletionPopup.accept": "接受",
    "completions.CompletionPopup.aiAssist": "輔助",
    "completions.CompletionPopup.cancel": "取消",
    "completions.CompletionPopup.insert": "插入",
    "completions.CompletionPopup.promptHeader": "AI 提示 “{prompt}”",
    "completions.CompletionPopup.replace": "取代",
    "completions.CompletionPopup.retry": "重試",
    "completions.ExitConfirmationDialog.cancelExit": "取消",
    "completions.ExitConfirmationDialog.confirmExit": "關閉",
    "completions.ExitConfirmationDialog.question": "您想關閉 AI 對話嗎？",
    "completions.FeedbackPopup.shareWithNotion": "與 Notion 分享此 AI 工作階段",
    "completions.FeedbackPopup.submitButtonLabel": "提交回饋",
    "completions.FeedbackPopup.userCommentPlaceholder":
      "如何改善輸出？（選用）",
    "completions.OptInLearnMore.description":
      "为了提升AI质量，我们正在与Notion共享数据。<aiTerms>了解详情</aiTerms>",
    "completions.PromptMenu.alternativeUiEditInputPlaceholder":
      "要求 IA 編輯、查看或生成...",
    "completions.PromptMenu.alternativeUiWriteInputPlaceholder":
      "要求 AI 開始撰寫...",
    "completions.PromptMenu.inputPlaceholder":
      "輸入以呼叫輔助。你可以提出任何要求...",
    "completions.ShareDataPopup.alwaysShareButton": "始终共享",
    "completions.ShareDataPopup.description":
      "使用基于AI的功能自动共享数据，帮助Notion提高AI质量。{br}如果继续，则表示同意<aiTerms>AI数据共享条件</aiTerms>。",
    "completions.ShareDataPopup.notNowButton": "稍后",
    "completions.ShareDataPopup.title": "是否始终共享数据以改进Notion AI？",
    "completions.boldImportantWords.label": "加粗的重要字詞",
    "completions.brainstormIdeas.label": "腦力激盪",
    "completions.checkForInconsistencies.label": "檢查不一致處",
    "completions.completionActions.AIAssist": "AI 輔助",
    "completions.completionActions.aiActionItemsBlockDisplayName": "待辦事項",
    "completions.completionActions.aiFreePromptBlockDisplayName":
      "自訂 AI 區塊",
    "completions.completionActions.aiSummaryBlockDisplayName": "摘要",
    "completions.completionActions.alternativeUiString": "{text}",
    "completions.completionActions.dismiss": "關閉",
    "completions.completionActions.more": "更多",
    "completions.continueWriting.label": "繼續寫作",
    "completions.createAListOfKeyTakeAways.label": "建議要點清單",
    "completions.createASummary.label": "建立摘要",
    "completions.detectBias.label": "檢查偏差",
    "completions.draftAnOutline.label": "起草大綱",
    "completions.editing.label": "編輯",
    "completions.explainThis.label": "解釋這個",
    "completions.extractActionItems.label": "擷取代辦事項",
    "completions.factCheck.label": "事實查核",
    "completions.findMistakes.label": "尋找錯誤",
    "completions.fixSpellingGrammar.label": "修正拼字和文法錯誤",
    "completions.improveWritingStyle.label": "改善寫作風格",
    "completions.listPossibleObjections.label": "列出可能的反對意見",
    "completions.makeItSoundLikeJaneAusten.label":
      "讓作品聽起來像出自簡·奧斯汀的手筆",
    "completions.makeLonger.label": "加長",
    "completions.reasoning.label": "推理",
    "completions.shorten.label": "縮短",
    "completions.suggestAlternativeWordChoices.label": "建議其他替代用字",
    "completions.translateToSpanish.label": "翻譯成西班牙語",
    "completions.utilities.label": "公用事業",
    "completions.writeAConclusion.label": "撰寫結論",
    "completions.writeARhymingPoemAboutThisPage.label":
      "撰寫一篇關於此頁面的押韻詩",
    "completions.writing.label": "寫作",
    "configureNotificationRuleMenu.createNewSlackSection.sendToAnotherChannel.label":
      "傳送到另一個頻道",
    "configureNotificationRuleMenu.createNewSlackSection.setUpSlackNotifications.label":
      "設定 Slack 通知",
    "configureNotificationRuleMenu.existingSlackMenuList.expandItem.label":
      "其他 {value} 個…",
    "configureNotificationRuleMenu.follow.label": "關注",
    "configureNotificationRuleMenu.followingStateSection.labelWithTitle":
      "收到 {value} 的通知",
    "configureNotificationRuleMenu.followingStateSection.labelWithoutTitle":
      "收到通知",
    "configureNotificationRuleMenu.sendToSlack.existingRule.createPageEventCaption":
      "新的頁面",
    "configureNotificationRuleMenu.sendToSlack.existingRule.createPageEventCaptionWithView":
      "{hasViewName, select, true { in {collectionViewName}} other {} 中 } 的新頁面",
    "configureNotificationRuleMenu.sendToSlack.existingRule.createdAndUpdatedEventCaption":
      "新的頁面和編輯",
    "configureNotificationRuleMenu.sendToSlack.existingRule.createdAndUpdatedEventCaptionWithView":
      "{hasViewName, select, true { in {collectionViewName}} other {} 中 } 的新頁面和編輯",
    "configureNotificationRuleMenu.sendToSlack.existingRule.updatePageEventCaption":
      "屬性編輯",
    "configureNotificationRuleMenu.sendToSlack.existingRule.updatePageEventCaptionWithView":
      "{hasViewName, select, true { in {collectionViewName}} other {} 中 } 的屬性編輯",
    "configureNotificationRuleMenu.sendToSlackSection.title": "傳送到 Slack",
    "configureNotificationRuleMenu.unfollow.label": "取消關注",
    "confirmDialogInput.incorrectInputError.message":
      "請輸入「{requiredInputValue} 」以繼續",
    "confirmUnsubscribePage.confirmButton": "取消訂閱",
    "confirmUnsubscribePage.errorMessage": "無法取消訂閱。",
    "confirmUnsubscribePage.loadingMessage": "載入中…",
    "confirmationInputDialog.cancelButton.label": "取消",
    "confluenceAuthentication.APITokenMessage": "API 權杖：",
    "confluenceAuthentication.accountTypeDropdownCloudOption.label": "雲端",
    "confluenceAuthentication.accountTypeDropdownServerOption.label":
      "伺服器/內部部署",
    "confluenceAuthentication.apiTokenMessage": "API 權杖",
    "confluenceAuthentication.authenticateButton.label": "驗證",
    "confluenceAuthentication.authenticationButton": "驗證",
    "confluenceAuthentication.cancelButton.label": "取消",
    "confluenceAuthentication.confluenceVersion": "Confluence 版本",
    "confluenceAuthentication.confluenceVersionDropdownNewVersionOption.label":
      "7.9 版以上",
    "confluenceAuthentication.confluenceVersionDropdownOlderVersionOption.label":
      "7.9 版以下",
    "confluenceAuthentication.emailHelpText":
      "匯入資料的 Confluence 使用者的電子郵件地址",
    "confluenceAuthentication.emailMessage": "電子郵件：",
    "confluenceAuthentication.helpButton.caption": "了解匯入",
    "confluenceAuthentication.hostHelperText":
      "URL 中用於存取 Confluence 的主機",
    "confluenceAuthentication.hostMessage": "主持人：",
    "confluenceAuthentication.instanceHelperText":
      "在 Confluence 上，按一下「說明」（個人檔案旁的 (?)），然後按一下「關於 Confluence」，你就會知道這是伺服器、雲端，還是資料中心",
    "confluenceAuthentication.instanceMessage": "Confluence 執行個體：",
    "confluenceAuthentication.password": "密碼",
    "confluenceAuthentication.passwordHelpText":
      "匯入資料的 Confluence 使用者的密碼",
    "confluenceAuthentication.personalAccessTokenMessage": "個人存取權杖：",
    "confluenceAuthentication.portHelperText":
      "Confluence 執行的連接埠，這通常會出現在 URL 中或使用 http(80)/https(443) 的預設連接埠",
    "confluenceAuthentication.portMessage": "連接埠：",
    "confluenceAuthentication.siteHelperText":
      "用於存取 Confluence 的基底 URL。如果你在非標準連接埠上執行，請提供 host:port 格式的輸入",
    "confluenceAuthentication.siteMessage": "網站：",
    "confluenceAuthentication.stepsToGetConfluenceAccessToken.captions":
      "自 Confluence Cloud 取得存取權限權杖的步驟",
    "confluenceAuthentication.stepsToGetConfluencePAT.caption":
      "自 Confluence 伺服器取得個人驗證權杖的步驟",
    "confluenceAuthentication.stepsToGetConfluenceVersion.captions":
      "按一下以了解如何知道你正在執行中的 Confluence 版本",
    "confluenceAuthentication.titleMessage": "請提供你的有效驗證詳細資料",
    "confluenceAuthentication.username": "使用者名稱",
    "confluenceAuthentication.usernameHelpText":
      "匯入資料的 Confluence 使用者的使用者名稱",
    "confluenceImportErrors.apiError.message": "無法從 API 擷取資料",
    "confluenceImportErrors.attachmentNotFound.message":
      "在 ZIP 檔中找不到附件。",
    "confluenceImportErrors.attachmentUploadFailed.message":
      "無法從檔案上傳附件。",
    "confluenceImportErrors.bufferUploadFailed.message":
      "無法從緩衝區上傳附件。",
    "confluenceImportErrors.failedToBuildPage.message": "無法匯入頁面。",
    "confluenceImportErrors.failedToExtractZip.message": "無法解壓縮 ZIP 檔。",
    "confluenceImportErrors.failedToFindElement.message": "無法解析上傳內容。",
    "confluenceImportErrors.foundElementIsIncorrectType.message":
      "無法解析上傳內容。",
    "confluenceImportErrors.indexHtmlMissingAvailablePages.message":
      "無效的索引檔案：找不到可用頁面。",
    "confluenceImportErrors.noConfluenceIdInPageLink.message":
      "無法從檔案名中提取頁面 ID。",
    "confluenceImportErrors.noIndexHtmlFile.message":
      "在 ZIP 中找不到索引檔案。",
    "confluenceImportErrors.uploadFileSizeExceeded.message":
      "匯入檔不能超過 {maxSize}。",
    "confluenceImportHelpers.subpageHeader": "子頁面",
    "confluenceImportHelpers.untitledTableColumn.name": "行",
    "confluenceImportOption.actionsMenu.connectAnotherAccount":
      "連接另一個執行個體",
    "confluenceImportOption.actionsMenu.importViaApi": "透過 API 匯入",
    "confluenceImportOption.actionsMenu.importViaFile": "透過檔案匯入",
    "confluenceImportOption.actionsMenu.removeIntegration": "移除",
    "confluenceImportOption.search.noResultsPlaceholder": "沒有工作區",
    "confluenceImportOption.search.placeholder": "搜尋工作區",
    "confluenceImportOption.search.title": "選擇要匯入的空間",
    "confluenceImportOption.spacesProperty.defaultName": "工作區",
    "confluenceImportStatus.creatingIndex": "建立索引中…",
    "confluenceImportStatus.creatingPages": "正在建立頁面...",
    "confluenceImportStatus.downloadingFile": "驗證檔案中…",
    "confluenceImportStatus.fetchingPages": "正在擷取頁面...",
    "confluenceImportStatus.finishingUp": "完成中…",
    "confluenceImportStatus.importingPage":
      "匯入頁面中…（第{current}個，總共{total}個）",
    "confluenceImportStatus.importingPages": "匯入頁面中…",
    "confluenceImportStatus.indexingContent": "正在更新搜尋…",
    "confluenceImportStatus.savingTransactions": "正在儲存變更…",
    "confluenceImportStatus.uploadingAttachments": "附件上傳中…",
    "connectedAppSettings.deleteExternalAuthorization.confirmDelete.label":
      "是",
    "connectedAppSettings.deleteExternalAuthorization.withAccountName.confirmationMessage":
      "確定要撤銷 {accountName} 的存取權限嗎？",
    "connectedAppSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage":
      "確定要撤銷這個帳號的存取權限嗎？",
    "connectedAppSettingsDiscoverItem.connectButton.label": "連接",
    "connectedAppsSettings.asana.caption": "從看板和列表中匯入任務。",
    "connectedAppsSettings.confluence.caption": "從 Confluence 匯入工作區。",
    "connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label":
      "解除連接",
    "connectedAppsSettings.disconnectGoogleDriveModal.message":
      "解除連接會禁用所有工作區中嵌入的 Google 雲端硬碟檔案預覽。這不會從 Notion 中刪除你的嵌入區塊，因此你可以隨時重新連接。",
    "connectedAppsSettings.discoverNewAppSection.showAll.label": "全部顯示",
    "connectedAppsSettings.evernote.caption": "匯入筆記本。",
    "connectedAppsSettings.googleDrive.caption": "尋找並嵌入檔案。",
    "connectedAppsSettings.offline.message": "請連接網路後管理連接應用。",
    "connectedAppsSettings.trello.caption": "匯入你的看板。",
    "connectedAppsSettingsItem.connectAccountLink": "連接",
    "connectedAppsSettingsItem.connectAnotherAccountLink": "連接另一個帳號",
    "connectedAppsSettingsItem.disconnectLink": "解除連接",
    "connectedRelationPropertyMenuResults.addPageButton.label": "加入頁面",
    "connectedRelationPropertyMenuResults.askAdminToAuthenticateButton.title":
      "要求你的工作區管理員設定 GitHub",
    "connectedRelationPropertyMenuResults.authenticateButton.title":
      "連接到 {integration}",
    "connectedRelationPropertyMenuResults.authenticateHeader.title":
      "連接到 {integration}",
    "connectedRelationPropertyMenuResults.exactMatchAddPage.label":
      "找到完全相符的項目",
    "connectedRelationPropertyMenuResults.fetchingData": "取得資料中...",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.badIdError":
      "建立具有前置詞的 ID 屬性以複製頁面 ID。",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.copyId":
      "複製 ID",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.copyIdAria":
      "複製 ID 值。",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.description":
      "若要將你的 GitHub PR 連結到此頁面，請將 ID 加入到 PR 標題。",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.help":
      "透過將唯一的任務 ID 加入到 PR 標題，將 GitHub PR 連結至此任務",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.learnMore":
      "了解更多",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducation.learnMoreAria":
      "進一步了解 GitHub 提取要求功能。",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducationLinkPastingOn.description":
      "将ID复制并粘贴到GitHub PR标题中。",
    "connectedRelationPropertyMenuResults.githubPrRelationUserEducationPasteUrl.description":
      "要将GitHub PR链接到此页面，请粘贴URL。",
    "connectedRelationPropertyMenuResults.notMatched.help":
      "{integration} 中找不到結果。",
    "connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.closeButton":
      "關閉",
    "connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.copyDebuggingInformation":
      "複製除錯資訊",
    "connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.title":
      "目前不支援此來源。請嘗試不同來源。",
    "connectionErrorIndicator.details.debugInfo": "偵錯資訊：{debugInfo}",
    "connectionErrorIndicator.details.message":
      "從 {sinceSomeTimeAgo}，儲存你的變更時發生了錯誤，我們很快會再試一次。",
    "connectionErrorIndicator.label.retrying": "出了點問題，我們正在重試...",
    "connectionErrorIndicator.label.retryingInSeconds":
      "出了點問題，請於 {numberOfSeconds} 秒後重試…",
    "connectionErrorIndicator.label.shortMessage": "出了點問題。",
    "connectionState.errorIndicator.cannotMakeEdits.detailedMessage":
      "你無法繼續進行編輯：{errorMessage} {usageInfoMessage}",
    "connectionState.errorIndicator.cannotSaveChanges.message": "無法儲存變更…",
    "connectionState.errorIndicator.lowStorageOnDesktopApp.message":
      "磁碟空間不足",
    "connectionState.errorIndicator.lowStorageOnMobileApp.message":
      "應用程式儲存空間不足",
    "connectionState.errorIndicator.lowStorageOnWebApp.message":
      "瀏覽器儲存空間不足",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1":
      "Notion正在使用設備上可用儲存空間的{percentageOfStorageBytesUsed} （ {totalNumberOfBytes}中的{usedNumberOfBytes} ）。",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2":
      "你可能會遺失離線時所做的變更。嘗試關閉並重新打開應用，如果無法解決問題，請與支持人員聯絡。",
    "connectionState.offlineBadge.label": "離線",
    "connectionState.offlineBadge.tooltip":
      "{numberOfEdits, plural, other {下一次連接網路時，會自動同步 {numberOfEdits} 個變更。}}",
    "connectionState.savePercentangeIndicator.tooltip": "{percent} 完成。",
    "connectionState.saving.message": "儲存中…",
    "connectionsSettings.connectionsSection.title": "我的連線",
    "connectionsSettings.discoverNewConnectionsSection.title": "探索新連線",
    "connectionsSettingsLinks.connectionsGallery": "瀏覽圖庫中的連線",
    "connectionsSettingsLinks.helpCenter": "進一步了解連線",
    "connectionsSettingsLinks.manageConnections": "開發或管理整合",
    "contactModalQuestionSelect.question.setup_business_trial":
      "設定商業試用版",
    "contentAnalyticsHeaderMessages.columnHeader.allViews": "所有視圖",
    "contentAnalyticsHeaderMessages.columnHeader.audience": "受眾",
    "contentAnalyticsHeaderMessages.columnHeader.createdAt": "建立時間",
    "contentAnalyticsHeaderMessages.columnHeader.createdBy": "建立者",
    "contentAnalyticsHeaderMessages.columnHeader.lastEditedAt": "上次編輯時間",
    "contentAnalyticsHeaderMessages.columnHeader.lastEditedBy": "上次編輯者",
    "contentAnalyticsHeaderMessages.columnHeader.page": "頁面",
    "contentAnalyticsHeaderMessages.columnHeader.pageId": "頁面 ID",
    "contentAnalyticsHeaderMessages.columnHeader.teamspace": "團隊空間",
    "contentAnalyticsHeaderMessages.columnHeader.uniqueViews": "唯一視圖",
    "contextualInvite.addToWorkspace.subtitle":
      "你想要將 {emailCount, plural, one {此人員} other {這些人員}} 加入到工作區和頁面嗎？這是計費活動。",
    "contextualInvite.addToWorkspace.title": "加入到工作區",
    "contextualInvite.addToWorkspace.zeroTeams.subtitle":
      "{isFreeTier, select, free {此動作會將 1,000 個區塊的限制套用到你的團隊空間。} other {} }",
    "contextualInvite.addToWorkspace.zeroTeams.subtitle.blockLimit":
      "將它們加入為成員後會自動建立團隊空間，{isFreeTier, select, free {並將 1,000 個區塊的限制套用到你的團隊空間。} other {} }",
    "contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine1":
      "此工作區不允許訪客。",
    "contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine2":
      "移除訪客以繼續。",
    "contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine1":
      "此團隊空間不允許訪客。",
    "contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine2":
      "移除訪客以繼續。",
    "contextualInvite.requestToWorkspace.subtitle":
      "你想要向工作區管理員傳送請求，將 {emailCount, plural, one {此人員} other {這些人員}} 加入到工作區嗎？",
    "contextualInvite.requestToWorkspace.title": "請求加入到工作區",
    "contextualInvite.skip.button": "暫時略過",
    "contextualInvite.spaceCard.subtitle":
      "{numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位成員} other {{numberOfWorkspaceMembers} 位成員}} · {planType}",
    "contextualSharingPopup.shareButton.expanded.actionButton": "邀請",
    "contextualSharingPopup.shareButton.expanded.description":
      "與沒有存取權限的 <b>{attendeeCount} 位活動參加者</b>分享此頁面。",
    "contextualSharingPopup.shareButton.notExpanded": "與活動參加者分享",
    "contextualSharingPopup.shareSnackBarMessage.fail": "無法與參與者分享",
    "contextualSharingPopup.shareSnackBarMessage.success": "與參與者分享",
    "contextual_invite.contextual_invite_failure": "無法邀請 {users} 為成員",
    "contextual_invite.permission_invite_failure": "無法向 {users} 傳送邀請",
    "contextual_invite.permission_invite_success3": "成功向 {users} 傳送邀請",
    "contextual_invite.request_members_failure": "無法請求 {users} 成為會員",
    "convertGuestToMember.convertingGuest.updatingMessage": "更新中…",
    "convertGuestToMember.removeGuest.updatingMessage": "更新中…",
    "cookieConsent.acceptAllButton.label": "全都接受",
    "cookieConsent.bannerDisclaimer.message":
      "Notion 使用 Cookie 為你提供更好的體驗。如需詳細資訊，請參閱 <cookielink>Cookie 注意事項</cookielink>。",
    "cookieConsent.customizeCookies.header": "自訂 Cookie",
    "cookieConsent.dismissButton.label": "完成",
    "cookieConsent.moreOptionsButton.label": "更多選項",
    "cookieConsent.rejectAllButton.label": "全部拒絕",
    "cookieConsent.reloadAfterSave.message":
      "Notion 現在將重新載入以套用你的 Cookie 偏好設置。按一下 OK 以繼續。",
    "cookieConsent.saveError": "無法記錄 Cookie 同意，請稍後再試一次。",
    "cookieConsent.settings.label": "Cookie 設定",
    "cookieConsent.settingsDisclaimer.message":
      "自訂 Cookie。如需詳細資訊，請參閱 <cookielink>Cookie 注意事項</cookielink>。",
    "cookieConsent.snackbarDisclaimer.message":
      "Notion 使用 Cookie。如需詳細資訊，請參閱 <cookielink>Cookie 注意事項</cookielink>。",
    "cookieConsent.trackingTypeNecessary.caption":
      "網站運作所必需。一律設為開啟。",
    "cookieConsent.trackingTypeNecessary.title": "絕對必要",
    "cookieConsent.trackingTypePerformance.caption":
      "用於衡量使用情況並改善你的體驗。",
    "cookieConsent.trackingTypePerformance.title": "分析",
    "cookieConsent.trackingTypePreference.caption":
      "用於記住偏好設定選項並提供增強功能。",
    "cookieConsent.trackingTypePreference.title": "功能",
    "cookieConsent.trackingTypeTargeting.caption": "用於目標式廣告。",
    "cookieConsent.trackingTypeTargeting.subtitleiOS":
      "未在 iOS 應用程式中收集或使用",
    "cookieConsent.trackingTypeTargeting.title": "行銷",
    "cookieModal.requestConsent.title": "設定 Cookie 偏好設定",
    "cookieSelector.label.customize": "自訂",
    "couponEntryInput.button.apply": "套用",
    "couponEntryInput.error.noPromo": "優待券代碼無效",
    "couponEntryInput.placeholder": "優待券代碼",
    "createPageMenuItem.title.withPageName": "加入「{filterText}」頁面到…",
    "createPageMenuItem.title.withoutPageName": "加入頁面到…",
    "createSubpageMenuItem.title.withPageName": "新增「{filterText}」子頁面",
    "createSubpageMenuItem.title.withoutPageName": "加入子頁面",
    "createTeamFromPage.confirmModal.cancelButton": "取消",
    "createTeamFromPage.confirmModal.confirmButton": "建立團隊空間",
    "createTeamFromPage.confirmModal.description":
      "這會將此頁面以及能夠存取此頁面的人員移動到新建立的團隊空間。",
    "createTeamFromPage.confirmModal.learnMore": "進一步了解團隊空間",
    "createTeamFromPage.confirmModal.title": "轉換成團隊空間？",
    "csatPopup.additionalFeedback.placeholder": "請告訴我們更多…",
    "csatPopup.feedbackPrompt.defaultlabel": "你對使用 Notion 的滿意度如何？",
    "csatPopup.feedbackPrompt.docNotesLabel":
      "你對使用 Notion 處理筆記和文件的滿意度如何？",
    "csatPopup.feedbackPrompt.enterpriseDefaultLabel":
      "你向朋友推薦 Notion 的可能性有多大？",
    "csatPopup.feedbackPrompt.projManagementLabel":
      "你對在 Notion 中管理專案和任務的滿意度如何？",
    "csatPopup.feedbackPrompt.wikiLabel":
      "你對在 Notion 中建立團隊知識庫的滿意度如何？",
    "csatPopup.sendButton.label": "送出",
    "csatPopup.stars.1StarLabel": "非常不滿意",
    "csatPopup.stars.1StarLabelNps": "非常不可能",
    "csatPopup.stars.2StarLabel": "有點不滿意",
    "csatPopup.stars.2StarLabelNps": "有點不可能",
    "csatPopup.stars.3StarLabel": "不滿意也不滿足",
    "csatPopup.stars.3StarLabelNps": "不太可能也不太可能",
    "csatPopup.stars.4StarLabel": "還算滿意",
    "csatPopup.stars.4StarLabelNps": "有點可能",
    "csatPopup.stars.5StarLabel": "非常滿意",
    "csatPopup.stars.5StarLabelNps": "非常可能",
    "csatPopup.stars.notSpecifiedLabel": "選擇一項",
    "csatPopup.thanks.description": "你的回饋將幫助我們改善 Notion。",
    "csatPopup.thanks.header": "感謝你的回饋！",
    "csvExport.copiedText.missingField": "遺漏",
    "csvExport.copiedText.notApplicable": "不適用",
    "csvExport.copiedText.untitled": "無標題",
    "csvImportErrors.inconsistentColumns.message":
      "CSV 檔案中欄數不一致，第 {numBadRows} 列出現問題。表頭列有 {numTitleColumns} 欄。{firstBadRowIndex} 列是第一行與 {firstBadRowLength} 欄不一致的列。剖析的列 {firstBadRowIndex}：{firstBadRow}",
    "customizePageMenu.header.allPages.label": "自訂以下位置的所有頁面：",
    "customizePageMenu.header.singlePage.label": "自訂此頁面視圖",
    "customizePageMenu.lock.label": "重新鎖定",
    "customizePageMenu.locked.header": "在父級資料庫上已鎖定设定。",
    "customizePageMenu.mobileHeader.label": "自訂頁面",
    "customizePageMenu.pageSections.backlinksTitle": "反向連結",
    "customizePageMenu.pageSections.createdTitle": "建立時間",
    "customizePageMenu.pageSections.lastEditedTitle": "上次編輯",
    "customizePageMenu.pageSections.pageCommentsTitle": "頁面評論",
    "customizePageMenu.pageSections.topLevelPageDiscussionsTitle":
      "頂層頁面討論",
    "customizePageMenu.propertiesSection.compactProperties.compact": "顯示",
    "customizePageMenu.propertiesSection.compactProperties.expanded":
      "未展開時隱藏",
    "customizePageMenu.propertiesSection.header": "屬性",
    "customizePageMenu.sectionsSection.header": "欄目",
    "customizePageMenu.unlock.label": "解鎖",
    "customizePageMenu.unlocked.header": "在父級資料庫上已解鎖設定。",
    "customizePageMenuVisibilitySelect.collapsed.label": "在彈出視窗中顯示",
    "customizePageMenuVisibilitySelect.default.label": "預設",
    "customizePageMenuVisibilitySelect.expanded.label": "已展開",
    "customizePageMenuVisibilitySelect.hide.label": "總是隱藏",
    "customizePageMenuVisibilitySelect.hideIfEmpty.label": "空白時隱藏",
    "customizePageMenuVisibilitySelect.hideSimple.label": "隱藏",
    "customizePageMenuVisibilitySelect.minimal.label": "最小",
    "customizePageMenuVisibilitySelect.mobile.doneButton.label": "完成",
    "customizePageMenuVisibilitySelect.mobile.title": "選擇可視性",
    "customizePageMenuVisibilitySelect.off.label": "關閉",
    "customizePageMenuVisibilitySelect.property.label": "為屬性",
    "customizePageMenuVisibilitySelect.section.label": "為頁面分區",
    "customizePageMenuVisibilitySelect.show.label": "總是顯示",
    "customizePageMenuVisibilitySelect.showPersonAndTime.label":
      "顯示人員與時間",
    "database.CollectionSettings.NumberOptions.applyAllViews":
      "變更適用於所有顯示此屬性的視圖。",
    "database.FirstLoadLimitSelectOption.limitPagesTitle": "{limit} 頁",
    "database.RelationCustomizeLayoutMenu.tooltip.button.message":
      "自訂顯示的屬性",
    "database.RelationPropertyPageSectionHeaderButton.tooltip.addButton.message":
      "加入新頁面",
    "database.RelationPropertyPageSectionHeaderButton.tooltip.searchButton.message":
      "連結另一頁面",
    "database.actionButton.callTooltip": "撥通",
    "database.actionButton.openAsPageTitle": "打開",
    "database.actionButton.openAsPageTooltip": "以整頁模式打開",
    "database.actionButton.openInCenterPeekTooltip": "以置中預覽開啟",
    "database.actionButton.openInSidePeekTooltip": "以側邊預覽開啟",
    "database.actionButton.openLinkTooltip": "打開連結",
    "database.actionButton.personAddSelfTooltip": "加入你自己",
    "database.actionButton.personRemoveSelfTooltip": "移除你自己",
    "database.actionButton.personReplaceWithSelfTooltip": "取代為你自己",
    "database.actionButton.sendEmailTooltip": "傳送電子郵件",
    "database.actionMenu.fileProperty.delete.title": "刪除",
    "database.actionMenu.fileProperty.download.title": "下載",
    "database.actionMenu.fileProperty.fullscreen.title": "全螢幕",
    "database.actionMenu.fileProperty.rename.title": "重新命名",
    "database.actionMenu.fileProperty.viewOriginal.title": "查看原始內容",
    "database.aggregationDescription.average": "計算數字屬性的平均值。",
    "database.aggregationDescription.checked": "計算此屬性已勾選的頁面數。",
    "database.aggregationDescription.count": "計算總頁數，包括空白頁面。",
    "database.aggregationDescription.count_per_group":
      "計算具有此狀態群組的總頁面數。",
    "database.aggregationDescription.count_values":
      "計算此屬性的非空值的數量。對於可以包含多個值的類型（例如多選或人員），這將計算每個頁面的選定值數。",
    "database.aggregationDescription.date_range":
      "計算日期屬性的日期範圍（最晚日期減最早日期）。",
    "database.aggregationDescription.earliest_date": "尋找日期屬性的最早日期。",
    "database.aggregationDescription.empty": "計算此屬性的值為空的頁面數。",
    "database.aggregationDescription.latest_date": "尋找日期屬性的最晚日期。",
    "database.aggregationDescription.max": "尋找數字屬性的最大值。",
    "database.aggregationDescription.median": "尋找數字屬性的中位數。",
    "database.aggregationDescription.min": "尋找數字屬性的最小值。",
    "database.aggregationDescription.not_empty":
      "計算此屬性具有非空值的頁面數。",
    "database.aggregationDescription.percent_checked":
      "顯示此屬性已勾選的頁面百分比。",
    "database.aggregationDescription.percent_empty":
      "顯示此屬性為空值的頁面的百分比。",
    "database.aggregationDescription.percent_not_empty":
      "顯示此屬性具有非空值的頁面的百分比。",
    "database.aggregationDescription.percent_per_group":
      "顯示具有此狀態群組的頁面百分比",
    "database.aggregationDescription.percent_unchecked":
      "顯示此屬性未勾選頁面的百分比。",
    "database.aggregationDescription.range":
      "計算數字屬性的範圍（最大值減最小值）。",
    "database.aggregationDescription.show_unique":
      "顯示此屬性的唯一值。對於可以包含多個值（例如多選或人員）的屬性類型，將計算所有頁面中的唯一值。",
    "database.aggregationDescription.sum": "計算數字屬性的總和。",
    "database.aggregationDescription.unchecked": "計算此屬性未勾選的頁面數。",
    "database.aggregationDescription.unique":
      "計算此屬性的唯一值的數量。對於可以包含多個值（例如多選或個人）的類型，這將計算所有頁面上的唯一值。",
    "database.aggregationFullName.average": "平均數",
    "database.aggregationFullName.checked": "勾選",
    "database.aggregationFullName.count": "全部數量",
    "database.aggregationFullName.count_per_group": "每個群組的計數",
    "database.aggregationFullName.count_values": "值的數量",
    "database.aggregationFullName.date_range": "日期範圍",
    "database.aggregationFullName.earliest_date": "最早日期",
    "database.aggregationFullName.empty": "空欄位的數量",
    "database.aggregationFullName.latest_date": "最新日期",
    "database.aggregationFullName.max": "最大值",
    "database.aggregationFullName.median": "中位數",
    "database.aggregationFullName.min": "最小值",
    "database.aggregationFullName.not_empty": "非空值數量",
    "database.aggregationFullName.percent_checked": "已勾選百分比",
    "database.aggregationFullName.percent_empty": "空值百分比",
    "database.aggregationFullName.percent_not_empty": "非空值百分比",
    "database.aggregationFullName.percent_per_group": "每個群組的百分比",
    "database.aggregationFullName.percent_unchecked": "未勾選百分比",
    "database.aggregationFullName.range": "範圍",
    "database.aggregationFullName.sum": "總和",
    "database.aggregationFullName.unchecked": "未勾選",
    "database.aggregationFullName.unique": "唯一值的數量",
    "database.aggregationFullName.unique_values": "顯示唯一值",
    "database.aggregationShortName.average": "平均",
    "database.aggregationShortName.checked": "已勾選",
    "database.aggregationShortName.count": "數量",
    "database.aggregationShortName.count_per_group": "計數",
    "database.aggregationShortName.count_values": "值",
    "database.aggregationShortName.date_range": "範圍",
    "database.aggregationShortName.earliest_date": "最早",
    "database.aggregationShortName.empty": "空值",
    "database.aggregationShortName.latest_date": "最新",
    "database.aggregationShortName.max": "最大",
    "database.aggregationShortName.median": "中位",
    "database.aggregationShortName.min": "最小",
    "database.aggregationShortName.not_empty": "非空值",
    "database.aggregationShortName.percent_checked": "已勾選",
    "database.aggregationShortName.percent_empty": "空值",
    "database.aggregationShortName.percent_not_empty": "非空值",
    "database.aggregationShortName.percent_per_group": "百分比",
    "database.aggregationShortName.percent_unchecked": "未勾選",
    "database.aggregationShortName.range": "範圍",
    "database.aggregationShortName.showUnique": "顯示唯一",
    "database.aggregationShortName.sum": "總和",
    "database.aggregationShortName.unchecked": "未勾選",
    "database.aggregationShortName.unique": "唯一",
    "database.boardAggregation.tooltip": "聚合",
    "database.boardProperty.fillProperty": "加入 {propertyName}",
    "database.boardView.actions.addNewItem.tooltip": "建立新 {newItemName}",
    "database.boardView.addGroupButtonTitle": "加入群組",
    "database.boardView.addItemButtonTitle": "新增",
    "database.boardView.missingSelectProperty":
      "無法呈現此視圖，因為資料庫缺少選取屬性。",
    "database.boardView.searchResults.noResults.label": "沒有結果",
    "database.boardView.uncategorizedColumnTitle": "無{name}",
    "database.boardView.uncategorizedColumnTooltip":
      "任何<b>{name}</b>屬性為空的項目都將移到此處。此群組無法刪除。",
    "database.buttonProperty.actions": "動作",
    "database.buttonProperty.label": "標籤",
    "database.buttonProperty.label.inputPlaceholder": "輸入此按鈕的名稱...",
    "database.calendarView.addItemButtonTooltip": "加入項目",
    "database.calendarView.dateProperty.defaultName": "日期",
    "database.calendarView.missingDateProperty":
      "無法呈現此視圖，因為資料庫缺少日期屬性。",
    "database.calendarView.nextMonthButton.label": "下月",
    "database.calendarView.previousMonthButton.label": "上月",
    "database.calendarView.todayButton.label": "今天",
    "database.collectionEditGroupMenu.newGroupLabel.placeholder": "新增群組",
    "database.collectionEditGroupMenu.renameGroupLabel.placeholder":
      "為群組重新命名",
    "database.collectionEditGroupMenu.submitButton.label": "完成",
    "database.collectionEditViewButtonPopup.dateNameProperty": "日期",
    "database.collectionEditViewButtonPopup.renameButtonTitle": "重新命名",
    "database.collectionEditViewButtonPopup.statusNameProperty": "狀態",
    "database.collectionGroupActionMenu.colorSectionTitle": "顏色",
    "database.collectionGroupActionMenu.deleteButtonTitle": "刪除",
    "database.collectionGroupActionMenu.deleteDialogMessage":
      "你確定嗎？此群組內的所有區塊都將遭到刪除。",
    "database.collectionGroupActionMenu.hideButtonTitle": "隱藏",
    "database.collectionGroupActionMenu.showButtonTitle": "顯示",
    "database.collectionGroupActionMenu.title": "動作",
    "database.collectionGroupAggregation.title": "彙總",
    "database.collectionGroupHeader.actions.addNewPage.tooltip": "建立新頁面",
    "database.collectionGroupValue.dateGroup.last7Days": "過去 7 天",
    "database.collectionGroupValue.dateGroup.last_30Days": "過去 30 天",
    "database.collectionGroupValue.dateGroup.next30Days": "未來 30 天",
    "database.collectionGroupValue.dateGroup.next7Days": "未來 7 天",
    "database.collectionGroupValue.dateGroup.today": "今天",
    "database.collectionGroupValue.dateGroup.tomorrow": "明天",
    "database.collectionGroupValue.dateGroup.week.differingStartAndEndMonth":
      "{startYear} {startMonth} {startDay} - {endMonth} {endDay} 當週",
    "database.collectionGroupValue.dateGroup.week.differingStartAndEndYear":
      "{startYear} {startMonth} {startDay} - {endYear} {endMonth} {endDay} 當週",
    "database.collectionGroupValue.dateGroup.week.sameStartAndEndMonth":
      "{startYear} {startMonth} {startDay}-{endDay} 當週",
    "database.collectionGroupValue.dateGroup.yesterday": "昨天",
    "database.collectionGroupValue.numberGroup.outOfRange": "超出範圍",
    "database.collectionGroupValue.numberGroup.range": "{start} 到 {end}",
    "database.collectionGroupValue.textGroup.other": "其他",
    "database.collectionTemplatePickerItem.actionMenu.setAsDefault":
      "設定為預設",
    "database.collectionTemplatePickerItem.setAsDefaultDialog.message":
      "<span>建立新頁面時，是否將 &ldquo;{pageName}&rdquo; 作為預設模版？</span>",
    "database.collectionTemplatePickerItem.setAsDefaultDialog.setCollection":
      "針對「{databaseName}」中的所有視圖",
    "database.collectionTemplatePickerItem.setAsDefaultDialog.setCollectionView":
      "只在「{viewName}」視圖",
    "database.collectionView.untitledName.board": "看板",
    "database.collectionView.untitledName.calendar": "行事曆",
    "database.collectionView.untitledName.gallery": "圖庫",
    "database.collectionView.untitledName.list": "列表",
    "database.collectionView.untitledName.page": "頁面",
    "database.collectionView.untitledName.table": "表格",
    "database.collectionView.untitledName.timeline": "時程表",
    "database.collectionView.untitledName.untitled": "無標題",
    "database.collectionViewBlock.openAutomationsSettingsButton.ariaLabel":
      "建立或檢視自動化",
    "database.collectionViewBlock.openAutomationsSettingsButton.tooltip":
      "建立或檢視自動化",
    "database.collectionViewBlock.openFullscreenPageButton.tooltip":
      "以完整頁面開啟",
    "database.collectionViewBlock.openViewSettingsButton.tooltip":
      "編輯視圖版面配置、分組等項",
    "database.collectionViewBlock.pageView.search": "搜尋",
    "database.collectionViewSelect.addViewButtonTitle": "加入視圖",
    "database.collectionViewSelect.noResultsTitle": "沒有結果",
    "database.collectionViewSuggestedViews.newEmptyViewTitle": "新的空視圖",
    "database.collectionViewSuggestedViews.suggestedTitle": "建議",
    "database.configureProperty.duplicateAction": "建立屬性複本",
    "database.configureProperty.hideAction": "隱藏屬性",
    "database.configureProperty.showAsAction": "顯示為",
    "database.confirmDialog.templatePickerItem.deleteButton.label": "刪除",
    "database.confirmDialog.templatePickerItem.deleteMessage":
      "確定要刪除此模版嗎？",
    "database.copyButton.copyToClipboard": "複製到剪貼簿",
    "database.deletedPropertiesTab.cannotRestoreDuplicateProperty.modal.dismissButton":
      "關閉",
    "database.deletedPropertiesTab.cannotRestoreDuplicateProperty.modal.verification":
      "你只能擁有一個驗證屬性。",
    "database.editButton.autofillWithAiTooltip": "透過 AI 自動填寫",
    "database.editButton.configureRollupTooltip": "設定匯總",
    "database.editButton.defaultButtonLabel": "無標題按鈕",
    "database.editButton.editEmailTooltip": "編輯電子郵件",
    "database.editButton.editLinkTooltip": "編輯網址",
    "database.editButton.editPhoneTooltip": "編輯電話號碼",
    "database.editProperty.databaseLocked.tooltipPart1": "頁面屬性已鎖定",
    "database.editProperty.databaseLocked.tooltipPart2":
      "請前往{recordIconAndTitle}解鎖",
    "database.editProperty.errorDialog.duplicateSelectValue.message":
      "此選擇項已經存在。",
    "database.editProperty.errorDialog.forbidDeleteDefaultOption.message":
      "無法刪除預設選項。",
    "database.editProperty.errorDialog.missingSelectValue.message":
      "請輸入一個值。",
    "database.editProperty.select.mobileLabel": "重新命名",
    "database.editProperty.setAsDefault.confirm.continueButton": "繼續",
    "database.editProperty.setAsDefault.confirm.description":
      "新頁面會從 {defaultValue} 的預設狀態開始。<b>沒有狀態設定</b>的現有頁面將切換到 {defaultValue}。",
    "database.editProperty.setAsDefault.confirm.title":
      "將預設變更為 <b>{defaultValue}</b>？",
    "database.emptyTemplatesList.info": "使用模版來複製此資料庫中的頁面格式。",
    "database.fileProperty.focusedLabel": "加入檔案或圖片",
    "database.fileProperty.mobileMenu.title": "檔案屬性",
    "database.filterAndSort.datePropertyValue.placeholder": "選擇日期",
    "database.filterAndSort.dateRangePropertyValue.placeholder": "選取範圍",
    "database.filterAndSort.firstPersonPropertyValue.title": "我自己",
    "database.filterAndSort.mobileEditButton.label": "編輯",
    "database.filterAndSort.propertyValueInput.placeholder": "值",
    "database.filterAndSortMenu.propertyButton.label": "屬性",
    "database.filterBar.addButton.title": "加入篩選器",
    "database.filterBar.advancedFilterRulesCount.title":
      "{ruleCount, plural, other {{ruleCount} 個規則}}",
    "database.filterBar.changesControl.mergeIntoAdvancedFilter.title":
      "合併至進階篩選器",
    "database.filterBar.changesControl.reset.title": "重設",
    "database.filterBar.changesControl.saveAsNewView.title": "儲存為新視圖",
    "database.filterBar.changesControl.saveForEveryone.title": "為所有人儲存",
    "database.filterBar.mobileSearch.placeholder": "輸入以搜尋...",
    "database.filterBar.saved.title": "為所有人儲存變更。",
    "database.filterBar.search.title": "搜尋",
    "database.filterBar.sorts.label": "{sortCount} 個排序",
    "database.filterBar.undo.title": "還原",
    "database.filterBarFilterValue.notOperator": "不是",
    "database.filterBarFilterValue.title":
      "{propertyName}{colonSeparator} {filterOperator} {propertyValue}",
    "database.filterBarPropertyFilter.cannotConfigure":
      "無法刪除此視圖的篩選條件。",
    "database.filterMenu.addFilterGroup2ButtonTitle": "加入篩選器群組",
    "database.filterMenu.addFilterGroupButtonCaption": "包含多個篩選的群組",
    "database.filterMenu.addFilterRuleButtonTitle": "加入篩選器規則",
    "database.filterMenu.comparatorMenuDropdownButton.label": "比較器",
    "database.filterMenu.dateSelectMenu.emptyPlaceholder": "空白",
    "database.filterMenu.duplicateFilterGroupMenuTitle": "建立複本",
    "database.filterMenu.duplicateFilterMenuTitle": "建立複本",
    "database.filterMenu.filterGroupIndex": "篩選群組 {index}",
    "database.filterMenu.filterIndex": "篩選 {index}",
    "database.filterMenu.filterOperatorMenu.title": "運算子",
    "database.filterMenu.mobileComparatorValueMenu.title": "比較器",
    "database.filterMenu.mobileDateSelectMenu.title": "日期",
    "database.filterMenu.mobileMenuTitle": "篩選",
    "database.filterMenu.operatorPlaceholder": "運算子",
    "database.filterMenu.removeFilterGroupMenuTitle": "移除",
    "database.filterMenu.removeFilterMenuTitle": "移除",
    "database.filterMenu.rollupPropertyValue.mobileMenu.title": "設定篩選",
    "database.filterMenu.turnIntoFilterMenuTitle": "轉換成篩選",
    "database.filterMenu.turnIntoGroupMenuTitle": "轉換成群組",
    "database.filterMenu.unwrapGroupMenuTitle": "展開群組",
    "database.filterMenu.where": "當",
    "database.filterMenu.wrapInGroupMenuCaption": "圍繞此項建立篩選群組",
    "database.filterMenu.wrapInGroupMenuTitle": "包裝成群組",
    "database.filterOperatorValue.checkboxPlaceholder.title": "選取值",
    "database.filterOperators.and": "且",
    "database.filterOperators.andCaption": "必須滿足所有篩選規則",
    "database.filterOperators.any": "任何",
    "database.filterOperators.every": "每",
    "database.filterOperators.none": "無",
    "database.filterOperators.or": "或",
    "database.filterOperators.orCaption": "至少必須滿足一個篩選規則",
    "database.filterValue.checkboxType.checked.title": "已勾選",
    "database.filterValue.checkboxType.unchecked.title": "未勾選",
    "database.filterValue.clear.message": "清除",
    "database.filterValue.commaSeparator": ",",
    "database.filterValue.dateType.dateIsAfter.title": "之後",
    "database.filterValue.dateType.dateIsBefore.title": "之前",
    "database.filterValue.dateType.dateIsOnOrAfter.title": "當日或之後",
    "database.filterValue.dateType.dateIsOnOrBefore.title": "當日或之前",
    "database.filterValue.dateType.ending.title": "結束",
    "database.filterValue.dateType.starting.title": "開始",
    "database.filterValue.deleteFilter.title": "刪除篩選器",
    "database.filterValue.locationType.searchPlaceholder": "搜尋一或多個位置",
    "database.filterValue.mergeIntoAdvancedFilter.title": "合併至進階篩選器",
    "database.filterValue.mergeIntoAdvancedFilter.tooltip":
      "使用進階篩選器以分組篩選器規則並使用 AND/OR 條件。",
    "database.filterValue.numberType.searchPlaceholder": "輸入值…",
    "database.filterValue.personType.firstPersonPropertyValue.title": "我",
    "database.filterValue.personType.noResults.message": "沒有結果",
    "database.filterValue.personType.searchPersonPropertyMenuItem.errorMessage":
      "發生問題。",
    "database.filterValue.personType.searchPlaceholder": "搜尋一或多位人員...",
    "database.filterValue.relationType.noResults.message": "沒有結果",
    "database.filterValue.relationType.relativeSprintVariable.backlog":
      "待辦需求",
    "database.filterValue.relationType.relativeSprintVariable.current":
      "目前方案",
    "database.filterValue.relationType.relativeSprintVariable.next": "下一個",
    "database.filterValue.relationType.searchPlaceholder":
      "搜尋一或多個頁面...",
    "database.filterValue.relationType.searchRelationPropertyMenuItem.errorMessage":
      "出了些問題。",
    "database.filterValue.removeFilter.message": "移除篩選條件",
    "database.filterValue.saveFilter.title": "完成",
    "database.filterValue.selectType.clearSelection.message": "清除選擇",
    "database.filterValue.selectType.noResults.message": "沒有結果",
    "database.filterValue.selectType.searchPlaceholder": "搜尋一或多個選項...",
    "database.filterValue.textType.searchPlaceholder": "輸入值…",
    "database.firstLoadLimitSelectMenu.firstLoadLimitSetting":
      "在首次載入時顯示",
    "database.formula.acceptFormulaInput.tooltip": "接受",
    "database.formula.category.constants": "常數",
    "database.formula.category.functions": "函數",
    "database.formula.category.operators": "運算子",
    "database.formula.category.properties": "屬性",
    "database.formula.constant.e.description": "自然對數的底數。",
    "database.formula.constant.pi.description": "圓周長與其直徑之比。",
    "database.formula.doneButton.label": "完成",
    "database.formula.examplesSection.title": "範例",
    "database.formula.function.abs.description": "傳回數字的絕對值。",
    "database.formula.function.cbrt.description": "傳回數字的立方根。",
    "database.formula.function.ceil.description":
      "傳回大於或等於數字的最小整數。",
    "database.formula.function.concat.description": "串聯其參數並傳回結果。",
    "database.formula.function.contains.description":
      "如果在第一個參數中找到第二個參數，則返回 true。",
    "database.formula.function.date.description":
      "傳回一個介於 1 到 31 之間的整數，對應於給定月份中的日期數。",
    "database.formula.function.dateAdd.description":
      '加入時間到日期。最後一個參數「單位」可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
    "database.formula.function.dateBetween.description":
      '傳回兩個日期之間的時間。最後一個參數「單位」可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或"milliseconds"。',
    "database.formula.function.dateSubtract.description":
      '從日期減去時間。最後一個參數「單位」可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
    "database.formula.function.day.description":
      "傳回與給定日期的星期幾相對應的整數：0 代表星期日，1 代表星期一，2 代表星期二，依此類推。",
    "database.formula.function.empty.description": "測試值是否為空。",
    "database.formula.function.end.description": "傳回日期範圍的結束。",
    "database.formula.function.exp.description":
      "傳回 E^x，其中 x 是參數，E 是歐拉常數（2.718…），即自然對數的底數。",
    "database.formula.function.floor.description":
      "傳回小於或等於數字的最大整數。",
    "database.formula.function.format.description": "將其參數格式化為字串。",
    "database.formula.function.formatDate.description":
      "使用 Moment.js 的時間格式字串來格式化日期。",
    "database.formula.function.fromTimestamp.description":
      "傳回從 Unix 毫秒時間戳構建的日期，對應於自1970年1月1日起的毫秒數。",
    "database.formula.function.hour.description":
      "傳回一個介於 0 和 23 之間的整數，對應於給定日期中的小時數。",
    "database.formula.function.id.description": "傳回每個項目的專屬字串 ID。",
    "database.formula.function.join.description":
      "以第一個參數作為連接符號，將陣列中所有元素連接成一個字串。",
    "database.formula.function.length.description": "傳回字串的長度。",
    "database.formula.function.ln.description": "傳回數字的自然對數。",
    "database.formula.function.log10.description":
      "傳回以 10 為底數之數字的對數",
    "database.formula.function.log2.description": "傳回以 2 為底數之數字的對數",
    "database.formula.function.max.description":
      "傳回零個或多個數字中的最大值。",
    "database.formula.function.min.description":
      "傳回零個或多個數字中的最小值。",
    "database.formula.function.minute.description":
      "傳回一個介於 0 和 59 之間的整數，對應於給定日期中的分鐘數。",
    "database.formula.function.month.description":
      "根據本機時間，傳回一個介於 0 和 11 之間的整數，對應於給定日期中的月份。0 對應於一月，1 對應於二月，依此類推。",
    "database.formula.function.now.description": "傳回當前日期和時間。",
    "database.formula.function.replace.description":
      "用新值替換正則表達式的第一個匹配項。",
    "database.formula.function.replaceAll.description":
      "用新值替換正則表達式的所有匹配項。",
    "database.formula.function.round.description":
      "傳回四捨五入到最接近整數的數字的值。",
    "database.formula.function.sign.description":
      "傳回 x 的符號，指示 x 是正數、負數還是零。",
    "database.formula.function.slice.description":
      "從起始索引（包含）到結束索引（可選，不包含）的提取字串中的子字串。",
    "database.formula.function.sqrt.description": "傳回數字的正平方根。",
    "database.formula.function.start.description": "傳回日期範圍的開始。",
    "database.formula.function.test.description":
      "測試字串是否與正則表達式匹配。",
    "database.formula.function.timestamp.description":
      "傳回 Unix 毫秒時間戳的整數，對應於自1970年1月1日起的毫秒數。",
    "database.formula.function.toNumber.description": "從文字中解析數字。",
    "database.formula.function.year.description":
      "傳回與給定日期的年份相對應的數字。",
    "database.formula.keyboardShortcutHint": "{commandEnter} 以接受",
    "database.formula.mobileNoErrors.message": "沒有錯誤。",
    "database.formula.operator.add.description":
      "將兩個數字相加並返回其總和，或者將兩個字串連接起來。",
    "database.formula.operator.and.description":
      "傳回其兩個參數的邏輯與（AND）。",
    "database.formula.operator.divide.description":
      "將兩個數字相除並返回其商。",
    "database.formula.operator.equal.description":
      "如果參數相等，則傳回 true，否則返回 false。",
    "database.formula.operator.if.description":
      "根據另一個值在兩個選項之間切換。",
    "database.formula.operator.larger.description":
      "如果第一個參數大於第二個參數，則返回 true。",
    "database.formula.operator.largerEq.description":
      "如果第一個參數大於或等於第二個參數，則傳回true。",
    "database.formula.operator.mod.description": "將兩個數字相除並返回其餘數。",
    "database.formula.operator.multiply.description":
      "將兩個數字相乘並返回其乘積。",
    "database.formula.operator.not.description": "傳回其參數的邏輯非（NOT）。",
    "database.formula.operator.or.description":
      "傳回其兩個參數的邏輯或（OR）。",
    "database.formula.operator.pow.description":
      "返回底數（base）的指數（exponent）次冪，即 baseexponent。",
    "database.formula.operator.smaller.description":
      "如果第一個參數小於第二個參數，則傳回true。",
    "database.formula.operator.smallerEq.description":
      "如果第一個參數小於或等於第二個參數，則傳回true。",
    "database.formula.operator.subtract.description":
      "將兩個數字相減並返回其差值。",
    "database.formula.operator.unaryMinus.description": "數字的負數。",
    "database.formula.operator.unaryPlus.description": "將其引數轉換為數字。",
    "database.formula.operator.unequal.description":
      "如果參數相等，則傳回 false，否則返回 true。",
    "database.formula.placeholder": "輸入一個公式",
    "database.formula.property.description":
      "返回每個條目的 {propertyName} 屬性。",
    "database.formula.syntaxSection.title": "語法",
    "database.formulaPropertyEntryMenuItem.title": "文書資料",
    "database.galleryView.addItemButtonTitle": "新增",
    "database.genericColumn.name": "行 {columnNumber}",
    "database.groupExistsAlreadyError.message": "群組已存在。",
    "database.groupMenu.dateGroupBy.day": "日",
    "database.groupMenu.dateGroupBy.month": "月",
    "database.groupMenu.dateGroupBy.relative": "相對",
    "database.groupMenu.dateGroupBy.week": "週",
    "database.groupMenu.dateGroupBy.year": "年",
    "database.groupMenu.hiddenGroups": "隱藏群組",
    "database.groupMenu.hideAllGroups": "全部隱藏",
    "database.groupMenu.loadMoreButton.text":
      "多顯示 {loadMoreAmount, plural, one {{loadMoreAmount} 個群組} other {{loadMoreAmount} 個群組}}",
    "database.groupMenu.numberGroupBy.range": "{start} 到 {end}",
    "database.groupMenu.numberGroupRange": "分組範圍",
    "database.groupMenu.numberGroupSize": "分組間隔",
    "database.groupMenu.showAllGroups": "全部顯示",
    "database.groupMenu.statusGroupBy.group": "群組",
    "database.groupMenu.statusGroupBy.option": "選項",
    "database.groupMenu.textGroupBy.alphabetical": "按字母順序",
    "database.groupMenu.textGroupBy.exact": "精確",
    "database.groupMenu.visibleGroups": "可見群組",
    "database.groups.loadMoreButton.text": "還有 {loadMoreAmount} 個群組",
    "database.groups.loadMoreButtonDefault.text":
      "顯示 {loadMoreAmount, plural, one {{loadMoreAmount} 個其他群組} other {{loadMoreAmount} 個其他群組}}",
    "database.listView.addItemButtonTitle": "新增",
    "database.loadMoreButtonTitle": "載入更多",
    "database.mobileBoardAggregationMenu.title": "表聚合",
    "database.mobileFilterAndSortMenu.property.buttonMenuItem.label": "屬性",
    "database.mobileFormulaModal.saveButton.label": "儲存",
    "database.mobileFormulaModal.title": "公式",
    "database.mobilePropertyAggregationMenu.title": "表匯總",
    "database.mobileSearch.placeholder": "輸入以搜尋…",
    "database.mobileSelectViewMenu.title":
      "{numberOfViews, plural, one {{numberOfViews} 個視圖} other {{numberOfViews} 個視圖}}",
    "database.mobileTemplatesMenu.title": "資料庫模版",
    "database.navigateButton.openAsPageTitle": "打開",
    "database.noPersonSearchResults.message": "沒有結果",
    "database.noRelationSearchResults.message": "沒有結果",
    "database.optionExistsAlreadyError.message": "選項已存在。",
    "database.pageProperties.addPropertyButtonTitle": "加入屬性",
    "database.pageProperties.compact.addPropertyButtonTitle": "加入屬性",
    "database.pageProperties.compact.showMoreTooltip":
      "{num, plural, other {其他 {num} 個屬性}}",
    "database.pageProperties.hidePropertyTitle":
      "{num, plural, other {隱藏 {num} 個屬性}}",
    "database.pageProperties.showMorePropertyTitle":
      "{num, plural, other {其他 {num} 個屬性}}",
    "database.pageProperty.emptyTitle": "空",
    "database.personPropertyMenu.noSearchResults.message": "沒有結果",
    "database.personPropertyMenu.searchErrorMessage": "出了些問題。",
    "database.personPropertyValue.searchPlaceholder": "搜尋人員…",
    "database.personPropertyValue.selectPerson.searchPlaceholder":
      "選擇一或多位人員",
    "database.personPropertyValue.selectPerson.searchPlaceholderWithLimit":
      "選擇一位人員",
    "database.propertyAggregationMenu.noneText": "無",
    "database.propertyButton.actions": "動作",
    "database.propertyButton.label": "標籤",
    "database.propertyButton.label.inputPlaceholder": "輸入此按鈕的名稱...",
    "database.propertyTypeDescription.auto_increment_id": "自動遞增 ID。",
    "database.propertyTypeDescription.button":
      "可點選的按鈕可設定為執行任何動作。",
    "database.propertyTypeDescription.checkbox": "通過核取方塊追踪狀態。",
    "database.propertyTypeDescription.created_by": "引用建立頁面的人員。",
    "database.propertyTypeDescription.created_time":
      "引用頁面的建立日期和時間。",
    "database.propertyTypeDescription.date":
      "一個日期，帶有格式化選項，可包含時間。",
    "database.propertyTypeDescription.email": "引用電子郵件地址。",
    "database.propertyTypeDescription.file": "上傳檔案和圖片。",
    "database.propertyTypeDescription.formula": "使用頁面的其他屬性計算公式。",
    "database.propertyTypeDescription.last_edited_by":
      "引用上次編輯頁面的人員。",
    "database.propertyTypeDescription.last_edited_time":
      "引用頁面的上次編輯日期和時間。",
    "database.propertyTypeDescription.location": "一個位置。",
    "database.propertyTypeDescription.multi_select":
      "使用選項列表中的值進行標記。",
    "database.propertyTypeDescription.number":
      "一個數字，可以格式化為貨幣、百分比等選項。",
    "database.propertyTypeDescription.person": "引用你團隊中的人員。",
    "database.propertyTypeDescription.phone_number": "引用電話號碼。",
    "database.propertyTypeDescription.relation":
      "允許此資料庫中的頁面引用另一個資料庫中的頁面。",
    "database.propertyTypeDescription.rollup": "顯示並匯總關聯關係中的資料。",
    "database.propertyTypeDescription.select": "從選項列表中選擇。",
    "database.propertyTypeDescription.status": "使用群組自訂選項列表進行標記",
    "database.propertyTypeDescription.text": "一行文字。",
    "database.propertyTypeDescription.url": "網路上的連結。",
    "database.propertyTypeDescription.verification": "已驗證的狀態。",
    "database.propertyTypeName.auto_increment_id": "ID",
    "database.propertyTypeName.button": "按鈕",
    "database.propertyTypeName.checkbox": "核取方塊",
    "database.propertyTypeName.created_by": "建立者",
    "database.propertyTypeName.created_time": "建立時間",
    "database.propertyTypeName.date": "日期",
    "database.propertyTypeName.email": "電子郵件",
    "database.propertyTypeName.file": "檔案和媒體",
    "database.propertyTypeName.formula": "公式",
    "database.propertyTypeName.last_edited_by": "上次編輯者",
    "database.propertyTypeName.last_edited_time": "上次編輯時間",
    "database.propertyTypeName.location": "位置",
    "database.propertyTypeName.multi_select": "多選",
    "database.propertyTypeName.number": "數字",
    "database.propertyTypeName.person": "人員",
    "database.propertyTypeName.phone_number": "電話",
    "database.propertyTypeName.relation": "關聯關係",
    "database.propertyTypeName.rollup": "匯總",
    "database.propertyTypeName.select": "單選",
    "database.propertyTypeName.status": "狀態",
    "database.propertyTypeName.text": "文字",
    "database.propertyTypeName.title": "標題",
    "database.propertyTypeName.url": "網址",
    "database.propertyTypeName.verification": "驗證",
    "database.propertyValues.mobileFormulaMenu.title": "公式",
    "database.propertyValues.reGenerateAiAutofill": "更新",
    "database.relationMenu.hiddenInRelationTitle": "在相關資料庫中隱藏",
    "database.relationMenu.noProperties": "無屬性",
    "database.relationMenu.shownInRelationTitle": "在相關資料庫中顯示",
    "database.relationMenuRow..dragPrompt.text": "拖<medium>動</medium>",
    "database.relationMenuRow.tooltip.addPage.message": "連結頁面",
    "database.relationMenuRow.tooltip.floatingAddPageButton.message":
      "按一下 <medium>在下方插入頁面</medium>",
    "database.relationMenuRow.tooltip.insertPage.message": "連結另一頁面",
    "database.relationMenuRow.tooltip.insertPageInline.message": "插入新頁面",
    "database.relationMenuRow.tooltip.openPage.message": "以整頁模式打開",
    "database.relationMenuRow.tooltip.openPageCenterPeek.message":
      "以置中預覽開啟",
    "database.relationMenuRow.tooltip.openPageSidePeek.message":
      "以側邊預覽開啟",
    "database.relationMenuRow.tooltip.removePage.message": "移除頁面",
    "database.relationProperty.newRelation.targetDatabase":
      "<regular>在</regular> {databaseWithIcon}<regular>中</regular>",
    "database.relationProperty.noResults.subHeader": "沒有結果",
    "database.relationProperty.relatedPages.limit.subHeader": "連結的頁面",
    "database.relationProperty.relatedPages.subHeader":
      "{count, plural, other {{count} 個連結頁面}}",
    "database.relationProperty.unrelatedPages.anotherPage.subHeader":
      "連結另一頁面",
    "database.relationProperty.unrelatedPages.subHeader": "連結頁面",
    "database.relationPropertyMenu.tooltip.addPage.message":
      "加入頁面到關聯關係",
    "database.relationPropertyMenu.tooltip.addPage.prompt": "輸入",
    "database.relationPropertyValue.moreItems.message":
      "其他 {relationMoreItemsCount} 個…",
    "database.restoredProperty.name": "{propertyName}（已復原）",
    "database.rollupProperty.aggregate.showOriginal": "顯示原始值",
    "database.rollupProperty.editAggregate.title": "計算",
    "database.rollupProperty.editAggregate.tooltip":
      "首先選擇現有的關聯關係和屬性。",
    "database.rollupProperty.editProperty.buttonTitle": "選擇要顯示的屬性…",
    "database.rollupProperty.editProperty.title": "屬性",
    "database.rollupProperty.editProperty.tooltip": "首先選擇現有的關聯關係。",
    "database.rollupProperty.editRelation.buttonTitle": "選擇現有關聯關係…",
    "database.rollupProperty.editRelation.title": "關聯關係",
    "database.searchInputPlaceholder": "輸入以搜尋...",
    "database.searchPerson.placeholder": "搜尋人員…",
    "database.searchRelation.createNewPageFooter":
      "{databaseNameWithIcon} 中的<medium>全新</medium> {pageName} <medium>頁面</medium>",
    "database.searchRelation.placeholder": "搜尋頁面...",
    "database.selectPropertyEditMenu.createLabel": "建立",
    "database.selectPropertyEditMenu.noResults": "未找到任何選項",
    "database.selectPropertyEditMenu.searchPlaceholder": "搜尋選項…",
    "database.selectPropertyEditMenu.searchStatusPlaceholder": "搜尋選項",
    "database.selectPropertyEditMenu.selectOnlyPrompt": "選擇選項",
    "database.selectPropertyEditMenu.selectOrCreatePrompt":
      "選擇或建立一個選項",
    "database.selectPropertyOptionEditMenu.Group": "群組",
    "database.selectPropertyOptionEditMenu.colorsSection": "顏色",
    "database.selectPropertyOptionEditMenu.deleteLabel": "刪除",
    "database.selectPropertyOptionEditMenu.deleteModal.confirmButton": "移除",
    "database.selectPropertyOptionEditMenu.deleteModal.prompt":
      "確定要移除此選項？",
    "database.selectPropertyOptionEditMenu.setAsDefault": "設定為預設",
    "database.sortMenu.deleteButtonTooltip": "刪除排序規則",
    "database.source.editTitle.title": "編輯資料庫標題",
    "database.source.hideTitle.title": "隱藏資料庫標題",
    "database.source.titlePlaceholder": "無標題",
    "database.source.viewDatabase.title": "查看資料庫",
    "database.statusProperty.groupName.complete": "完成",
    "database.statusProperty.groupName.inProgress": "進行中",
    "database.statusProperty.groupName.todo": "待辦事項",
    "database.tableHeaderCell.autofillWithAI": "透過 AI 自動填寫",
    "database.tableHeaderCell.autofillWithAITooltip":
      "透過 Notion AI 自動填寫並讓此屬性保持最新狀態",
    "database.tableHeaderCell.deleteProperty": "刪除屬性",
    "database.tableHeaderCell.deleteProperty.modal.inverseConfirmButton":
      "刪除，但保留相關的屬性",
    "database.tableHeaderCell.deleteProperty.modal.prompt":
      "你確定嗎？系統會在 {databaseName} 上為每個人刪除此屬性。",
    "database.tableHeaderCell.deleteRelatedProperty.modal.prompt":
      "附註：此屬性擁有同樣會刪除之 {relationTargetName} 的相關屬性。",
    "database.tableHeaderCell.deleteStatusProperty.modal.prompt":
      "刪除此狀態屬性會停止 GitHub 提取要求狀態自動化。",
    "database.tableHeaderCell.deleteUniqueIdProperty.modal.prompt":
      "注意：將永久刪除 ID 。",
    "database.tableHeaderCell.deleteUniqueIdWithGithubProperty.modal.prompt":
      "你將再也無法連結 GitHub PR。",
    "database.tableHeaderCell.duplicateProperty": "建立屬性複本",
    "database.tableHeaderCell.editProperty": "編輯屬性",
    "database.tableHeaderCell.editPropertyTooltip":
      "編輯屬性名稱、種類和其他選項…",
    "database.tableHeaderCell.filter": "篩選器",
    "database.tableHeaderCell.hideInView": "在視圖中隱藏",
    "database.tableHeaderCell.rename": "重新命名",
    "database.tableHeaderCell.sortAscending": "升序排序",
    "database.tableHeaderCell.sortDescending": "降序排序",
    "database.tableHeaderCell.syncedPersonPropertyCaption":
      "從外部來源同步的人員可能需要另外其他設定。請造訪「<helpcenterlink>說明中心</helpcenterlink>」以取得更多資訊。",
    "database.tableHeaderCell.wrapColumn": "資料欄換行",
    "database.tableView.addRowButton": "新增",
    "database.tableView.aggregationPlaceholder": "計算",
    "database.tableView.cannotEdit.emptyTablePlaceholder": "空白。",
    "database.tableView.cannotEdit.emptyTablePlaceholderWithFilters":
      "沒有篩選結果。",
    "database.tableView.emptyTablePlaceholder": "空白。按一下以加入列。",
    "database.tableView.emptyTablePlaceholderWithFilters":
      "沒有篩選結果。按一下以加入列。",
    "database.tableView.nest.addSubitem": "新子項目",
    "database.tableView.nest.addSubitemWithPropertyName":
      "{propertyName} 的新頁面",
    "database.templateList.UntitledDatabaseTitle": "無標題",
    "database.templatePicker.emptyPageTitle": "空白頁面",
    "database.templatePickerItem.actionMenu.delete": "刪除",
    "database.templatePickerItem.actionMenu.duplicate": "建立複本",
    "database.templatePickerItem.actionMenu.edit": "編輯",
    "database.templatePickerItem.actionMenu.repeat": "重複",
    "database.templatePickerItem.actionMenu.view": "視圖",
    "database.templatePickerItem.customRecurrence.cancel": "取消",
    "database.templatePickerItem.customRecurrence.save": "儲存",
    "database.templatePickerItem.editTemplate.tooltip": "編輯此模版",
    "database.templatePickerItem.mobileRepeatModal.title": "重複",
    "database.templatePickerItem.quickOptionMenuItem.custom": "自訂...",
    "database.templatePickerItem.quickOptionMenuItem.day": "每天",
    "database.templatePickerItem.quickOptionMenuItem.month": "每月",
    "database.templatePickerItem.quickOptionMenuItem.off": "關閉",
    "database.templatePickerItem.quickOptionMenuItem.week": "每週",
    "database.templatePickerItem.quickOptionMenuItem.year": "每年",
    "database.templatePickerItem.recurrenceConfigMenuLabel.next":
      "下一次：{dates}",
    "database.templatePickerItem.recurrenceConfigMenuLabel.off": "關閉",
    "database.templatePickerItem.recurrenceFrequency.daily": "每日重複",
    "database.templatePickerItem.recurrenceFrequency.monthly": "每月重複",
    "database.templatePickerItem.recurrenceFrequency.weekly": "每週重複",
    "database.templatePickerItem.recurrenceFrequency.yearly": "每年重複",
    "database.templatePickerItem.recurrenceInterval.days": "天",
    "database.templatePickerItem.recurrenceInterval.everyXdays":
      "每 {interval} <label>天</label>",
    "database.templatePickerItem.recurrenceInterval.everyXmonths":
      "每 {interval} <label>月</label>",
    "database.templatePickerItem.recurrenceInterval.everyXweeks":
      "每 {interval} <label>週</label>",
    "database.templatePickerItem.recurrenceInterval.everyXyears":
      "每 {interval} <label>年</label>",
    "database.templatePickerItem.recurrenceInterval.months": "月",
    "database.templatePickerItem.recurrenceInterval.weeks": "週",
    "database.templatePickerItem.recurrenceInterval.years": "年",
    "database.templatePickerItem.repeatMenu.createAt": "建立時間",
    "database.templatePickerItem.repeatMenu.every": "每",
    "database.templatePickerItem.repeatMenu.starting": "開始日期：",
    "database.templatePickerItem.repeatMenu.starts": "開始",
    "database.templatePickerItem.repeatMenuLabel.day": "天",
    "database.templatePickerItem.repeatMenuLabel.days": "天",
    "database.templatePickerItem.repeatMenuLabel.every": "每",
    "database.templatePickerItem.repeatMenuLabel.month": "個月",
    "database.templatePickerItem.repeatMenuLabel.months": "個月",
    "database.templatePickerItem.repeatMenuLabel.week": "週",
    "database.templatePickerItem.repeatMenuLabel.weeks": "週",
    "database.templatePickerItem.repeatMenuLabel.year": "年",
    "database.templatePickerItem.repeatMenuLabel.years": "年",
    "database.templatePickerMenuItem.default": "預設",
    "database.templateView.newTemplateButton": "新模版",
    "database.templatesList.templatesFor": "模版・用於",
    "database.timelineByMenu.dateRange": "日期範圍",
    "database.timelineByMenu.endDate": "結束日期",
    "database.timelineByMenu.startDate": "開始日期",
    "database.timelineByMenu.title": "時程表顯示",
    "database.timelineByMenu.useSeparatePropertiesToggle":
      "使用單獨的開始與結束日期",
    "database.timelineView.addRowButton": "新增",
    "database.timelineView.cannotEdit.emptyTablePlaceholder": "空白。",
    "database.timelineView.controlHeader.showTableButton.title": "顯示表格",
    "database.timelineView.controlHeader.todayButton.title": "今天",
    "database.timelineView.dateProperty.defaultName": "日期",
    "database.timelineView.emptyTablePlaceholder": "空白。按一下以加入列。",
    "database.timelineView.item.addRowButton": "新增",
    "database.timelineView.missingDateProperty":
      "無法呈現此視圖，因為資料庫缺少日期屬性。",
    "database.timelineView.mobileTimelineZoomPicker.title": "選擇縮放等級",
    "database.timelineView.nest.addSubitemWithPropertyName":
      "{propertyName} 的新頁面",
    "database.timelineView.tableGroupResults.hideTableButton.title": "隱藏表格",
    "database.timelineView.zoomLevel.biWeek": "雙週",
    "database.timelineView.zoomLevel.day": "天",
    "database.timelineView.zoomLevel.hours": "小時",
    "database.timelineView.zoomLevel.month": "月",
    "database.timelineView.zoomLevel.quarter": "季",
    "database.timelineView.zoomLevel.week": "週",
    "database.timelineView.zoomLevel.year": "年",
    "database.titleColumn.name": "標題",
    "database.tokens.moreItems.message": "+&thinsp;{moreItemsCount}",
    "database.viewBlockSettings.appConfiguration.templates": "模版",
    "database.viewBlockSettings.appConfiguration.title": "模版設定",
    "database.viewHelpers.dateProperty.defaultName": "日期",
    "database.viewHelpers.selectProperty.defaultName": "狀態",
    "database.viewPropertiesMenu.coverFormat.none": "沒有",
    "database.viewPropertiesMenu.coverFormat.pageContent": "頁面內容",
    "database.viewPropertiesMenu.coverFormat.pageCover": "頁面封面",
    "database.viewPropertiesMenu.coverSize.large": "大",
    "database.viewPropertiesMenu.coverSize.medium": "中",
    "database.viewPropertiesMenu.coverSize.small": "小",
    "database.viewPropertiesMenu.peekMode.centerPeek": "置中預覽",
    "database.viewPropertiesMenu.peekMode.defaultForView": "{view} 的預設值",
    "database.viewPropertiesMenu.peekMode.description.centerPeek":
      "以焦點、置中互動視窗開啟頁面。",
    "database.viewPropertiesMenu.peekMode.description.fullPage":
      "以完整頁面開啟頁面。",
    "database.viewPropertiesMenu.peekMode.description.sidePeek":
      "在側邊開啟頁面。保持互動後方的視圖。",
    "database.viewPropertiesMenu.peekMode.fullPage": "完整頁面",
    "database.viewPropertiesMenu.peekMode.sidePeek": "側邊預覽",
    "database.viewSettigs.searchCollections.thisDatabase.tooltip": "此資料庫",
    "database.viewSettings.TimelineArrowsBy.newRelation": "新關聯關係",
    "database.viewSettings.addHighlightedFeature": "添加到",
    "database.viewSettings.arrowsByTab.createNewRelation": "建立新關聯關係",
    "database.viewSettings.arrowsByTab.newRelation": "新關聯關係",
    "database.viewSettings.arrowsByTab.none": "無",
    "database.viewSettings.arrowsTab.createButton.title": "建立",
    "database.viewSettings.arrowsTab.dependenciesExisting.newRelation": "屬性",
    "database.viewSettings.arrowsTab.emptyState":
      "現有關聯關係均無法呈現為箭頭，你想建立新的關聯關係嗎？",
    "database.viewSettings.arrowsTab.emptyStateDescription": "重新命名（選填）",
    "database.viewSettings.arrowsTab.initialPropertyName.placeholder":
      "與目標相關",
    "database.viewSettings.arrowsTab.inputPlaceholder": "相依性…",
    "database.viewSettings.arrowsTab.inverseName.placeholder": "與此資料庫相關",
    "database.viewSettings.arrowsTab.newRelation": "使用現有關聯關係",
    "database.viewSettings.arrowsTab.removeAllDefaultButton.title":
      "關閉所有新視圖",
    "database.viewSettings.arrowsTab.removeButton.title": "移除相依性",
    "database.viewSettings.arrowsTab.title": "依下列項目顯示相依性",
    "database.viewSettings.arrowsTab.useExistingRelation.title":
      "使用現有關聯關係",
    "database.viewSettings.automationTab.learnAutomationTitle": "了解自動化",
    "database.viewSettings.automationTab.newAutomationTitle": "新的自動化",
    "database.viewSettings.automationTab.title": "自動化",
    "database.viewSettings.choosePropertyType": "選擇屬性類型",
    "database.viewSettings.collectionPropertyLimitHelpers.limit": "限制",
    "database.viewSettings.collectionPropertyLimitHelpers.limitOne":
      "1 個 {type}",
    "database.viewSettings.collectionPropertyLimitHelpers.limitOne.relation":
      "1 個頁面",
    "database.viewSettings.collectionPropertyLimitHelpers.noLimit": "沒有限制",
    "database.viewSettings.collectionSortMenu.inputPlaceholder": "搜尋屬性…",
    "database.viewSettings.configureCollectionTab.includeSubpages": "含子頁面",
    "database.viewSettings.configureCollectionTab.title": "區塊設定",
    "database.viewSettings.copyLinkSnackBarItem.title":
      "檢視連結已複製到剪貼簿",
    "database.viewSettings.createFilterTab.addAdvancedFilter.title":
      "新增進階篩選器",
    "database.viewSettings.createFilterTab.advancedFilter.title": "進階篩選器",
    "database.viewSettings.createFilterTab.advancedFilterRulesCount.title":
      "{ruleCount, plural, other {{ruleCount} 個規則}}",
    "database.viewSettings.createFilterTab.inputPlaceholder": "篩選條件...",
    "database.viewSettings.createFilterTab.title": "加入篩選器",
    "database.viewSettings.createSortTab.inputPlaceholder": "排序方式",
    "database.viewSettings.createSortTab.title": "新增排序",
    "database.viewSettings.createTypedDB.createDatabase": "建立資料庫",
    "database.viewSettings.createTypedDB.importDatabaseButton":
      "匯入或同步來源",
    "database.viewSettings.createTypedDBTab.title": "新資料庫",
    "database.viewSettings.createTypedDBTab.viewExistingDatabaseButton":
      "查看現有資料庫",
    "database.viewSettings.createViewSourceTab.newCollectionButton.title":
      "新增資料庫",
    "database.viewSettings.createViewSourceTab.newCollectionWithNameButton.title":
      "新資料庫「{filterText}」",
    "database.viewSettings.createViewSourceTab.title": "選擇資料來源",
    "database.viewSettings.createViewTab.doneButton.title": "完成",
    "database.viewSettings.createViewTab.title": "新增視圖",
    "database.viewSettings.dateOptions.dateFormat": "日期格式",
    "database.viewSettings.dateOptions.timeFormat": "時間格式",
    "database.viewSettings.deleteButton.text": "刪除視圖",
    "database.viewSettings.deletedPropertiesTab.noResults": "沒有結果",
    "database.viewSettings.deletedPropertiesTab.permanentlyDeleteProperty.modal.prompt":
      "確定要刪除此屬性？",
    "database.viewSettings.dependenciesTab.title": "相依性",
    "database.viewSettings.duplicateExistingViewTab.inputPlaceholder":
      "搜尋視圖",
    "database.viewSettings.duplicateExistingViewTab.newEmptyViewButton.title":
      "新的空視圖",
    "database.viewSettings.duplicateExistingViewTab.noResultsTitle": "沒有結果",
    "database.viewSettings.duplicateExistingViewTab.showMore.title":
      "顯示其餘 {showMore} 個",
    "database.viewSettings.duplicateExistingViewTab.title": "拷貝現有視圖",
    "database.viewSettings.editRelation.noTarget.title": "無目標",
    "database.viewSettings.editRelation.selfRelationTarget.title": "此資料庫",
    "database.viewSettings.editRelation.targetLink.title": "關聯至",
    "database.viewSettings.editRelation.updateButton.title": "更新關聯關係",
    "database.viewSettings.filterAndSortSaveControl.filter.caption":
      "{count, plural, other {{count} 個篩選器已變更，與其他人看到的有所不同}}",
    "database.viewSettings.filterAndSortSaveControl.more": "更多選項",
    "database.viewSettings.filterAndSortSaveControl.resetFilters": "重設篩選器",
    "database.viewSettings.filterAndSortSaveControl.resetSorts": "重設排序",
    "database.viewSettings.filterAndSortSaveControl.sort.caption":
      "排序已變更，與其他人看到的有所不同",
    "database.viewSettings.filterTab.deleteFilterButton.title": "刪除篩選器",
    "database.viewSettings.filterTab.title": "進階篩選器",
    "database.viewSettings.filtersTab.newFilter.title": "加入篩選器",
    "database.viewSettings.filtersTab.title": "篩選器",
    "database.viewSettings.formulaOptions.edit": "編輯",
    "database.viewSettings.formulaOptions.title": "公式",
    "database.viewSettings.github.automations.title": "自動化",
    "database.viewSettings.githubConfigTab.preview.copyButtonAriaLabel":
      "用於複製你任務 ID 的複製按鈕視覺化呈現。不是真的按鈕。",
    "database.viewSettings.githubConfigTab.preview.copyIdTooltip": "複製 ID",
    "database.viewSettings.githubConfigTab.preview.dismissButtonAriaLabel":
      "關閉使用者教育預覽的按鈕。",
    "database.viewSettings.githubConfigTab.preview.id": "ID",
    "database.viewSettings.githubConfigTab.preview.idPrefix": "任務",
    "database.viewSettings.githubConfigTab.preview.inProgress": "進行中",
    "database.viewSettings.githubConfigTab.preview.main": "主要",
    "database.viewSettings.githubConfigTab.preview.mergeInto": "合併到",
    "database.viewSettings.githubConfigTab.preview.open": "開放式",
    "database.viewSettings.githubConfigTab.preview.prTitle": "PR 標題",
    "database.viewSettings.githubConfigTab.preview.status": "狀態",
    "database.viewSettings.githubConfigTab.preview.task": "任務",
    "database.viewSettings.githubConfigTab.tabDescription":
      "根據你的 GitHub PR 狀態自動更新 Notion 任務的狀態。在 PR 標題中包含唯一識別碼，藉此將 PR 連結至 Notion 任務。",
    "database.viewSettings.githubConfigTab.tabDescriptionNoIdPrefix":
      "此功能需要具有前置詞的 ID 屬性才能將 Github PR 連結到 Notion 任務。",
    "database.viewSettings.githubConfigTab.tabDescriptionNoStatus":
      "加入狀態屬性以設定狀態自動化。",
    "database.viewSettings.githubConfigTab.tabTitle": "GitHub 提取要求",
    "database.viewSettings.groupByTypeTab.dateBy": "日期排列依據",
    "database.viewSettings.groupByTypeTab.numberBy": "數字排列依據",
    "database.viewSettings.groupByTypeTab.statusBy": "狀態依據",
    "database.viewSettings.groupByTypeTab.textBy": "文字排列依據",
    "database.viewSettings.groupTab.colorColumns": "顏色分欄",
    "database.viewSettings.groupTab.group.title": "群組",
    "database.viewSettings.groupTab.groupProperty": "分組方式",
    "database.viewSettings.groupTab.hideEmptyGroups": "隱藏空白群組",
    "database.viewSettings.groupTab.learnMoreButton.title": "了解分組",
    "database.viewSettings.groupTab.noGroupingSetMessage": "無",
    "database.viewSettings.groupTab.removeButton.title": "移除分組",
    "database.viewSettings.groupTab.sort": "排序",
    "database.viewSettings.groupTab.sortType.alphabetical": "按字母順序",
    "database.viewSettings.groupTab.sortType.ascending": "遞增",
    "database.viewSettings.groupTab.sortType.chronological": "最早優先",
    "database.viewSettings.groupTab.sortType.descending": "遞減",
    "database.viewSettings.groupTab.sortType.manual": "手動",
    "database.viewSettings.groupTab.sortType.reverseAlphabetical":
      "按反向字母順序",
    "database.viewSettings.groupTab.sortType.reverseChronological": "最新優先",
    "database.viewSettings.groupTab.subGroup.title": "子群組",
    "database.viewSettings.groupTab.subGroupProperty": "子群組分組方式",
    "database.viewSettings.layoutTab.boardGroupByButton.title": "分組方式",
    "database.viewSettings.layoutTab.cardPreviewButtonTitle": "卡片預覽",
    "database.viewSettings.layoutTab.firstLoadLimitSetting": "載入限制",
    "database.viewSettings.layoutTab.learnMoreButton.title": "了解視圖",
    "database.viewSettings.layoutTab.limitPagesTitle": "{limit} 頁",
    "database.viewSettings.layoutTab.peekModeTitle": "頁面開啟方式",
    "database.viewSettings.layoutTab.propertiesButton.propertiesShown.title":
      "已顯示 {propertiesShown}",
    "database.viewSettings.layoutTab.showCalendarAs.title": "顯示行事曆為",
    "database.viewSettings.layoutTab.showCalendarByProperty.title":
      "依下列顯示行事曆",
    "database.viewSettings.layoutTab.showDatabaseTitle.title": "顯示資料庫標題",
    "database.viewSettings.layoutTab.showTimelineArrowsByProperty.removeButton.title":
      "移除以下項目的箭號",
    "database.viewSettings.layoutTab.showTimelineArrowsByProperty.title":
      "顯示以下項目的箭號",
    "database.viewSettings.layoutTab.showTimelineByProperty.title":
      "顯示時程表，依照",
    "database.viewSettings.layoutTab.tablePropertiesButton.title": "表格屬性",
    "database.viewSettings.layoutTab.tableShowVerticalLines": "顯示垂直線",
    "database.viewSettings.layoutTab.tableWrapAllColumns": "所有資料欄換行",
    "database.viewSettings.layoutTab.timelineEndDate.title": "結束日期",
    "database.viewSettings.layoutTab.timelineStartDate.title": "開始日期",
    "database.viewSettings.layoutTab.timelineUseSeparateDates.title":
      "單獨的開始和結束日期",
    "database.viewSettings.layoutTab.title": "版面配置",
    "database.viewSettings.mainTab.configureDatabase.title": "設定資料庫",
    "database.viewSettings.mainTab.contentOnlyEditorPill.subtitle":
      "內容編輯者可以編輯頁面，但無法變更視圖和資料庫設定。",
    "database.viewSettings.mainTab.contentOnlyEditorPill.title":
      "你是內容編輯者",
    "database.viewSettings.mainTab.copyLinkButton.title": "拷貝視圖連結",
    "database.viewSettings.mainTab.deleteButton.title": "刪除視圖",
    "database.viewSettings.mainTab.deleteViewConfirm.text":
      "確定要刪除這個視圖嗎？",
    "database.viewSettings.mainTab.dependencies.title": "相依性",
    "database.viewSettings.mainTab.duplicateButton.title": "複製視圖",
    "database.viewSettings.mainTab.filterButton.filters.title":
      "{numberOfFilters, plural, other {{numberOfFilters} 個篩選器}}",
    "database.viewSettings.mainTab.filterButton.noFilters.title": "沒有篩選器",
    "database.viewSettings.mainTab.filterButton.title": "篩選器",
    "database.viewSettings.mainTab.getNotified.title": "收到通知",
    "database.viewSettings.mainTab.groupButton.title": "群組",
    "database.viewSettings.mainTab.layoutButton.title": "版面配置",
    "database.viewSettings.mainTab.lockDatabase.title": "鎖定資料庫",
    "database.viewSettings.mainTab.lockViews.title": "鎖定視圖",
    "database.viewSettings.mainTab.nest.title": "嵌套",
    "database.viewSettings.mainTab.notifications.title": "通知",
    "database.viewSettings.mainTab.propertiesButton.propertiesShown.title":
      "已顯示 {propertiesShown}",
    "database.viewSettings.mainTab.propertiesButton.title": "屬性",
    "database.viewSettings.mainTab.slackNotifications.title": "Slack 通知",
    "database.viewSettings.mainTab.sortButton.noSorts.title": "無",
    "database.viewSettings.mainTab.sortButton.oneOrMoreSorts.title":
      "{numberOfSorts, plural, other {{numberOfSorts} 個排序}}",
    "database.viewSettings.mainTab.sortButton.title": "排序",
    "database.viewSettings.mainTab.sourceButton.title": "來源",
    "database.viewSettings.mainTab.subGroupButton.title": "子群組",
    "database.viewSettings.mainTab.subitems.title": "子項目",
    "database.viewSettings.mainTab.title": "檢視選項",
    "database.viewSettings.mainTab.toggleBy.title": "摺疊依據",
    "database.viewSettings.mainTab.unlockDatabase.title": "解鎖資料庫",
    "database.viewSettings.mainTab.unlockViews.title": "解鎖視圖",
    "database.viewSettings.mainTab.viewNamePlaceholder.title": "查看名稱",
    "database.viewSettings.mainTab.viewNameSection.title": "查看名稱",
    "database.viewSettings.nestTab.createButton.title": "建立",
    "database.viewSettings.nestTab.emptyState":
      "現有關聯關係均無法進行嵌套，你想建立新的關聯關係嗎？",
    "database.viewSettings.nestTab.emptyStateDescription":
      "非常適合瀏覽子任務、子頁面及任何父子式階層",
    "database.viewSettings.nestTab.emptyStateTitle":
      "<b>折疊列表內的嵌套相關頁面</b>",
    "database.viewSettings.nestTab.initialPropertyName.placeholder":
      "與目標相關",
    "database.viewSettings.nestTab.inputPlaceholder": "嵌套…",
    "database.viewSettings.nestTab.inverseName.placeholder": "與此資料庫相關",
    "database.viewSettings.nestTab.newRelation": "使用現有關聯關係",
    "database.viewSettings.nestTab.removeButton.title": "關閉嵌套",
    "database.viewSettings.nestTab.removeToggleByRelation.removeAllDefaultButton.title":
      "關閉所有新任務的視圖",
    "database.viewSettings.nestTab.removeToggleByRelation.removeToggleByButton.title":
      "關閉此視圖",
    "database.viewSettings.nestTab.setToggleByRelation.setToggleBy.title":
      "在此視圖上設定",
    "database.viewSettings.nestTab.setToggleByRelationDefault.allDefaultButton.title":
      "在所有新的 {databaseName} 視圖上設定",
    "database.viewSettings.nestTab.setToggleByRelationDefault.defaultRelation.tag":
      "預設值",
    "database.viewSettings.nestTab.subItemsButton.title": "關閉子項目",
    "database.viewSettings.nestTab.title": "嵌套",
    "database.viewSettings.nestTab.toggleByExisting.newRelation": "屬性",
    "database.viewSettings.nestTab.useExistingRelation.title":
      "使用現有關聯關係",
    "database.viewSettings.newHighlightedFeature": "新建",
    "database.viewSettings.newProperty": "新屬性",
    "database.viewSettings.newPropertyOnDatabase": "{databaseName}上的新屬性",
    "database.viewSettings.newPropertyOnTypedDatabase": "添加到{databaseName}",
    "database.viewSettings.notifications.off": "關閉",
    "database.viewSettings.notificationsTab.slack.accountSelector": "帳號",
    "database.viewSettings.notificationsTab.slack.addNewAccount.label":
      "加入新帳號",
    "database.viewSettings.notificationsTab.slack.channelPicker": "管道",
    "database.viewSettings.notificationsTab.slack.channelSelector": "管道",
    "database.viewSettings.notificationsTab.slack.createPageEventToggle":
      "已加入新頁面",
    "database.viewSettings.notificationsTab.slack.createdAndUpdatedEventToggle":
      "已加入或更新頁面",
    "database.viewSettings.notificationsTab.slack.delete": "刪除",
    "database.viewSettings.notificationsTab.slack.eventSelector": "時間點",
    "database.viewSettings.notificationsTab.slack.filter.label": "篩選器",
    "database.viewSettings.notificationsTab.slack.new.title": "Slack 通知",
    "database.viewSettings.notificationsTab.slack.placeholderCaption": "無",
    "database.viewSettings.notificationsTab.slack.privateAccount":
      "私人 Slack 認證",
    "database.viewSettings.notificationsTab.slack.properties.label": "屬性",
    "database.viewSettings.notificationsTab.slack.remove": "移除",
    "database.viewSettings.notificationsTab.slack.save": "儲存",
    "database.viewSettings.notificationsTab.slack.updatePagePropertiesEventToggle":
      "頁面屬性更新",
    "database.viewSettings.notificationsTab.title": "通知",
    "database.viewSettings.numberOptions.color": "顏色",
    "database.viewSettings.numberOptions.divideBy": "除以",
    "database.viewSettings.numberOptions.numberFormat": "數字格式",
    "database.viewSettings.numberOptions.showAsBar": "進度條",
    "database.viewSettings.numberOptions.showAsNumber": "數字",
    "database.viewSettings.numberOptions.showAsRing": "環",
    "database.viewSettings.numberOptions.showValue": "顯示數字",
    "database.viewSettings.numberPercentOptions.showAs": "顯示為",
    "database.viewSettings.propertiesTab.deletedProperties": "屬性已刪除",
    "database.viewSettings.propertiesTab.hiddenInBoardTitle": "已在看板中隱藏",
    "database.viewSettings.propertiesTab.hiddenInCalendarTitle":
      "已在行事曆中隱藏",
    "database.viewSettings.propertiesTab.hiddenInGalleryTitle":
      "已在圖庫中隱藏",
    "database.viewSettings.propertiesTab.hiddenInListTitle": "已在清單中隱藏",
    "database.viewSettings.propertiesTab.hiddenInTableTitle": "已在表格中隱藏",
    "database.viewSettings.propertiesTab.hiddenInTimelineTitle":
      "已在時程表中隱藏",
    "database.viewSettings.propertiesTab.hideAllProperties": "全部隱藏",
    "database.viewSettings.propertiesTab.inputPlaceholder": "搜尋屬性...",
    "database.viewSettings.propertiesTab.learnMoreButton.title": "了解屬性",
    "database.viewSettings.propertiesTab.newProperty": "新屬性",
    "database.viewSettings.propertiesTab.noResults": "沒有結果",
    "database.viewSettings.propertiesTab.showAllProperties": "全部顯示",
    "database.viewSettings.propertiesTab.showTable": "顯示表格",
    "database.viewSettings.propertiesTab.shownInBoardTitle": "已在看板中顯示",
    "database.viewSettings.propertiesTab.shownInCalendarTitle":
      "已在行事曆中顯示",
    "database.viewSettings.propertiesTab.shownInGalleryTitle": "已在圖庫中顯示",
    "database.viewSettings.propertiesTab.shownInListTitle": "已在清單中顯示",
    "database.viewSettings.propertiesTab.shownInTableTitle": "已在表格中顯示",
    "database.viewSettings.propertiesTab.shownInTimelineTitle":
      "已在時程表中顯示",
    "database.viewSettings.propertiesTab.tableProperties": "表格",
    "database.viewSettings.propertiesTab.timelineProperties": "時程表",
    "database.viewSettings.propertiesTab.title": "屬性",
    "database.viewSettings.propertySelect.inputPlaceholder": "搜尋屬性",
    "database.viewSettings.propertySelect.noResultsTitle": "沒有結果",
    "database.viewSettings.propertySelect.noneMessage": "無",
    "database.viewSettings.propertySelect.removeMessage": "移除",
    "database.viewSettings.propertySelect.showMoreTitle": "其他 {moreCount} 個",
    "database.viewSettings.propertyTab.aiAutofill.open": "透過 AI 自動填寫",
    "database.viewSettings.propertyTab.aiAutofill.title":
      "透過 AI 自動填寫「{propertyName}」",
    "database.viewSettings.propertyTab.autoIncrementIdCreatePrefix":
      "加入 ID 前置詞",
    "database.viewSettings.propertyTab.autoIncrementIdCreateProperty":
      "加入 ID 屬性",
    "database.viewSettings.propertyTab.autoIncrementIdPrefix": "前置詞",
    "database.viewSettings.propertyTab.autoIncrementIdPrefixPlaceholder":
      "前置詞",
    "database.viewSettings.propertyTab.autoIncrementIdPrefixPlacholder":
      "前置詞",
    "database.viewSettings.propertyTab.autoIncrementIdPrefixPreview":
      "{prefixWithHyphen}1、{prefixWithHyphen}2、{prefixWithHyphen}3、...",
    "database.viewSettings.propertyTab.autoIncrementIdPrefixSubmit":
      "更新前置詞",
    "database.viewSettings.propertyTab.changePrefixConfirmationMessage":
      "更新前置詞即會取消同步依賴此 ID（例如 GitHub）的第三方自動化",
    "database.viewSettings.propertyTab.deleteButton.title": "刪除屬性",
    "database.viewSettings.propertyTab.deleteProperty.modal.confirmButton":
      "刪除",
    "database.viewSettings.propertyTab.deletedTitle": "屬性已刪除",
    "database.viewSettings.propertyTab.duplicateButton.title": "建立屬性複本",
    "database.viewSettings.propertyTab.duplicateGithubProperty.tooltip":
      "資料庫只能有一個 GitHub 提取要求屬性",
    "database.viewSettings.propertyTab.duplicatePrefixNameError":
      "{prefixName} 無法使用",
    "database.viewSettings.propertyTab.duplicatePropertyNameError":
      "此資料庫中已經存在名為 {propertyName} 的屬性。",
    "database.viewSettings.propertyTab.formulas.learnMoreButton.title":
      "了解公式",
    "database.viewSettings.propertyTab.githubPrRelation.learnMoreButton.title":
      "了解 GitHub 提取請求",
    "database.viewSettings.propertyTab.hideInViewButton.title": "在視圖中隱藏",
    "database.viewSettings.propertyTab.knowledgeBaseGithubProperty.tooltip":
      "知識庫不能有 GitHub 提取要求屬性",
    "database.viewSettings.propertyTab.propertyName": "屬性名稱",
    "database.viewSettings.propertyTab.propertyType": "類型",
    "database.viewSettings.propertyTab.relations.learnMoreButton.title":
      "了解關聯",
    "database.viewSettings.propertyTab.rollups.learnMoreButton.title":
      "了解匯總",
    "database.viewSettings.propertyTab.showInViewButton.title": "在視圖中顯示",
    "database.viewSettings.propertyTab.syncedDatabaseGithubProperty.tooltip":
      "已同步的資料庫不能有 GitHub 提取要求屬性",
    "database.viewSettings.propertyTab.title": "編輯屬性",
    "database.viewSettings.propertyTab.wikiGithubProperty.tooltip":
      "知識庫不能有 GitHub 提取要求屬性",
    "database.viewSettings.propertyTypeSection.connected": "已連接",
    "database.viewSettings.propertyTypeSection.connected.authFail":
      "驗證失敗。請再試一次或聯絡 Notion 支援。",
    "database.viewSettings.propertyTypeSection.connected.mobileAdminError":
      "請要求工作區管理員在桌面應用程式或瀏覽器驗證此整合。",
    "database.viewSettings.propertyTypeSection.connected.mobileError":
      "請在桌面應用程式或瀏覽器使用此整合驗證。",
    "database.viewSettings.propertyTypeSection.suggested": "建議",
    "database.viewSettings.propertyTypeSelect.searchPlaceholder":
      "搜尋或新增屬性",
    "database.viewSettings.relationsPropertyTab.createButton.title": "建立",
    "database.viewSettings.relationsPropertyTab.emptyStateDescription":
      "重新命名（選填）",
    "database.viewSettings.relationsPropertyTab.existingRelation": "屬性",
    "database.viewSettings.relationsPropertyTab.initialPropertyName.placeholder":
      "與目標相關",
    "database.viewSettings.relationsPropertyTab.inverseName.placeholder":
      "與此資料庫相關",
    "database.viewSettings.relationsPropertyTab.newRelation":
      "使用現有關聯關係",
    "database.viewSettings.relationsPropertyTab.removeDependenciesButton.title":
      "關閉相依性",
    "database.viewSettings.relationsPropertyTab.removeRelation.removeAllDefaultButton.title":
      "關閉所有新視圖",
    "database.viewSettings.relationsPropertyTab.removeRelation.removeRelationButton.title":
      "關閉此視圖",
    "database.viewSettings.relationsPropertyTab.removeSubItemsButton.title":
      "關閉子項目",
    "database.viewSettings.relationsPropertyTab.removeSubitemRelation.removeSubitemButton.title":
      "關閉此視圖",
    "database.viewSettings.relationsPropertyTab.removeToggleByRelation.removeToggleByButton.title":
      "關閉此視圖",
    "database.viewSettings.relationsPropertyTab.subitemInputPlaceholder":
      "子任務…",
    "database.viewSettings.relationsPropertyTab.timelineArrowsByInputPlaceholder":
      "相依性…",
    "database.viewSettings.relationsPropertyTab.toggleByInputPlaceholder":
      "子任務…",
    "database.viewSettings.relationsPropertyTab.useExistingRelation.title":
      "使用現有關聯關係",
    "database.viewSettings.rollupOptions.calculate": "計算",
    "database.viewSettings.rollupOptions.relationProperty": "關聯關係",
    "database.viewSettings.rollupOptions.selectRelation": "選取",
    "database.viewSettings.rollupOptions.selectTargetProperty": "選取",
    "database.viewSettings.rollupOptions.targetProperty": "屬性",
    "database.viewSettings.searchCollections.linkedInputPlaceholder":
      "連結到資料庫...",
    "database.viewSettings.searchCollections.linkedOrSourceInputPlaceholder":
      "連結或建立資料庫...",
    "database.viewSettings.searchCollections.noResultsTitle": "沒有結果",
    "database.viewSettings.searchCollections.showMore.title":
      "顯示其餘 {showMore} 個",
    "database.viewSettings.selectNewRelationSourceTab.title":
      "新建關聯關係目標",
    "database.viewSettings.selectOptions.newSelectOption.inputPlaceholder":
      "輸入新選項",
    "database.viewSettings.selectOptions.noOptions": "新增選項",
    "database.viewSettings.selectOptions.title": "選項",
    "database.viewSettings.selectToAdd": "選取加入",
    "database.viewSettings.setViewPropertyDefault.allDefaultButton.title":
      "在所有新的 {databaseName} 視圖上設定",
    "database.viewSettings.setViewPropertyDefault.defaultProperty.tag":
      "預設值",
    "database.viewSettings.setViewPropertyDefault.setProperty.title":
      "在此視圖上設定",
    "database.viewSettings.setupRelationTab.addButton.title": "新增關聯關係",
    "database.viewSettings.setupRelationTab.autoRelate.title": "自動產生關聯",
    "database.viewSettings.setupRelationTab.autoRelateTooltip":
      "關聯會根據在ㄧ頁面屬性中找到的連結自動填入資訊。",
    "database.viewSettings.setupRelationTab.inverseDisabledWarning.title":
      "無法編輯目標資料庫。",
    "database.viewSettings.setupRelationTab.inverseRelationName.placeholder":
      "與目標有關",
    "database.viewSettings.setupRelationTab.inverseRelationNameInput.title":
      "{databaseName}上的相關屬性",
    "database.viewSettings.setupRelationTab.inverseRelationTooltip":
      "在 {databaseName} 上建立屬性，同時顯示目前資料庫的反向連結",
    "database.viewSettings.setupRelationTab.inverseRelationTooltip.selfRelation":
      "為雙向關聯關係的每個方向建立單獨屬性。適用於構建父任務/子任務、封鎖者/封鎖中等更多內容。",
    "database.viewSettings.setupRelationTab.relation.reverse":
      "在 {databaseName} 上顯示",
    "database.viewSettings.setupRelationTab.relationVisualizer.title": "預覽",
    "database.viewSettings.setupRelationTab.selfRelation.reverse":
      "建立反向屬性",
    "database.viewSettings.setupRelationTab.title": "新關聯關係",
    "database.viewSettings.sortTab.deleteAllSorts": "刪除排序",
    "database.viewSettings.sortTab.mobileDeleteButtonTitle": "刪除",
    "database.viewSettings.sortTab.newSort": "加入排序",
    "database.viewSettings.sortTab.title": "排序",
    "database.viewSettings.sourceTab.title": "來源",
    "database.viewSettings.statusOptions.showAs": "顯示為",
    "database.viewSettings.statusOptions.showAs.checkbox": "核取方塊",
    "database.viewSettings.statusOptions.showAs.select": "選擇右側",
    "database.viewSettings.subItemsTab.title": "子項目",
    "database.viewSettings.subitemTab.newRelation": "建立新關聯關係",
    "database.viewSettings.subitemTab.none": "無",
    "database.viewSettings.syncedSourceTab.copyDebugging": "複製除錯資訊",
    "database.viewSettings.syncedSourceTab.isSyncing": "同步中",
    "database.viewSettings.syncedSourceTab.learnMoreButton.title.":
      "了解同步的資料庫",
    "database.viewSettings.syncedSourceTab.limit": "限制",
    "database.viewSettings.syncedSourceTab.limitFree.toolTip":
      "免費版限制為最多 100 列的 1 個同步資料庫。",
    "database.viewSettings.syncedSourceTab.limitRows": "{value}/{limit} 列",
    "database.viewSettings.syncedSourceTab.manageConnections": "管理我的連線",
    "database.viewSettings.syncedSourceTab.sourceDatabase": "來源資料庫",
    "database.viewSettings.syncedSourceTab.syncNow": "同步資料庫",
    "database.viewSettings.syncedSourceTab.syncNow.disabled":
      "{timeToNextSync} 後可同步",
    "database.viewSettings.syncedSourceTab.update.rateLimitError":
      "最近已同步此資料庫。你可以在 {time} 內再試一次。",
    "database.viewSettings.toggleByTab.createNewRelation": "建立新關聯關係",
    "database.viewSettings.toggleByTab.createNewRelationEmptyState": "立即開始",
    "database.viewSettings.toggleByTab.emptyState":
      "切換中無法顯示現有關聯關係，你想建立新的關聯關係嗎？",
    "database.viewSettings.toggleByTab.inputPlaceholder": "摺疊依據…",
    "database.viewSettings.toggleByTab.newRelation": "新關聯關係",
    "database.viewSettings.toggleByTab.none": "無",
    "database.viewSettings.toggleByTab.removeButton.title": "移除摺疊依據",
    "database.viewSettings.toggleByTab.title": "摺疊依據",
    "database.viewSettings.typedDbPropertyTypeSelect.searchPlaceholder": "搜索",
    "database.viewSettings.viewActionMenu.copyLink": "拷貝檢視連結",
    "database.viewSettings.viewActionMenu.delete": "刪除",
    "database.viewSettings.viewActionMenu.duplicate": "複製",
    "database.viewSettings.viewActionMenu.editView": "編輯視圖",
    "database.viewSettings.viewActionMenu.rename": "重新命名",
    "database.viewSettings.viewActionMenu.showDatabaseTitle": "顯示資料庫標題",
    "databaseActions.removeSortingConfirmationDialog.cancelRemoveSortingButton.label":
      "取消",
    "databaseActions.removeSortingConfirmationDialog.prompt": "要移除排序嗎？",
    "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label":
      "移除",
    "databaseLocationOperators.selectPlaceholder": "選擇位置",
    "databaseRelationOperators.selectPlaceholder": "選擇頁面",
    "databaseTemplatePickerActions.duplicateTemplateFailedError.message":
      "複製模版失敗。",
    "databaseTypes.helpers.defaultPluralItemName": "頁面",
    "databaseTypes.helpers.defaultSingleItemName": "頁面",
    "databaseTypes.helpers.docsPluralItemName": "文件",
    "databaseTypes.helpers.docsSingleItemName": "文件",
    "databaseTypes.helpers.githubPrsPluralItemName": "GitHub PR",
    "databaseTypes.helpers.githubPrsSingleItemName": "GitHub PR",
    "databaseTypes.helpers.meetingsPluralItemName": "會議",
    "databaseTypes.helpers.meetingsSingleItemName": "會議",
    "databaseTypes.helpers.projectsPluralItemName": "專案",
    "databaseTypes.helpers.projectsSingleItemName": "專案",
    "databaseTypes.helpers.sprintsPluralItemName": "Sprint",
    "databaseTypes.helpers.sprintsSingleItemName": "Sprint",
    "databaseTypes.helpers.tasksPluralItemName": "任務",
    "databaseTypes.helpers.tasksSingleItemName": "任務",
    "databaseTypes.helpers.wikisPluralItemName": "知識庫頁面",
    "databaseTypes.helpers.wikisSingleItemName": "知識庫頁面",
    "databaseTypes.taskTypes.archived": "已封存",
    "databaseTypes.taskTypes.assignProperty": "指派",
    "databaseTypes.taskTypes.completed": "完成",
    "databaseTypes.taskTypes.createdTimeProperty": "建立時間",
    "databaseTypes.taskTypes.done": "完成",
    "databaseTypes.taskTypes.dueDateProperty": "到期時間",
    "databaseTypes.taskTypes.inProgress": "進行中",
    "databaseTypes.taskTypes.lastEditedByProperty": "上次編輯者",
    "databaseTypes.taskTypes.lastEditedTimeProperty": "上次編輯時間",
    "databaseTypes.taskTypes.locationProperty": "位置",
    "databaseTypes.taskTypes.notStarted": "未開始",
    "databaseTypes.taskTypes.statusProperty": "狀態",
    "databaseTypes.taskTypes.taskReporterProperty": "報告者",
    "databaseTypes.taskTypes.taskTitleProperty": "任務名稱",
    "databaseViewActions.importFailedError.message": "匯入失敗。",
    "databaseViewActions.importingCSV.loadingMessage": "匯入中",
    "databaseViewActions.uploadingCSV.loadingMessage": "上傳中",
    "databdatabase.viewSettings.layoutTab.cardSizeButtonTitle": "卡片大小",
    "databdatabase.viewSettings.layoutTab.fitImageButtonTitle":
      "自適應圖片大小",
    "dateFormatHelpers.formatDuration.days":
      "{number, plural, other {{number} 天}}",
    "dateFormatHelpers.formatDuration.hours":
      "{number, plural, other {{number} 小時}}",
    "dateFormatHelpers.formatDuration.minutes":
      "{number, plural, other {{number} 分鐘}}",
    "dateFormatHelpers.formatDuration.months":
      "{number, plural, other {{number} 個月}}",
    "dateFormatHelpers.formatDuration.years":
      "{number, plural, other {{number} 年}}",
    "dateFormatHelpers.formatMillisToCalendar.todayAt": "今天 {time}",
    "dateFormatHelpers.formatMillisToCalendar.yesterdayAt": "昨天 {time}",
    "dateFormatHelpers.reminderMenuItems.atTimeOfEvent": "在事件發生時",
    "dateFormatHelpers.reminderMenuItems.daysBefore":
      "{numberOfDays, plural, other {在 {formattedTimeText} 之前的 {numberOfDays} 天}}",
    "dateFormatHelpers.reminderMenuItems.hoursBefore":
      "{numberOfHours, plural, other {提前 {numberOfHours} 小時}}",
    "dateFormatHelpers.reminderMenuItems.minutesBefore":
      "{numberOfMinutes, plural, other {提前 {numberOfMinutes} 分鐘}}",
    "dateFormatHelpers.reminderMenuItems.monthsBefore":
      "{numberOfMonths, plural, other {在 {formattedTimeText} 之前的 {numberOfMonths} 個月}}",
    "dateFormatHelpers.reminderMenuItems.none": "無",
    "dateFormatHelpers.reminderMenuItems.onTheDayOfEvent":
      "在事件當天的 {formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.weeksBefore":
      "{numberOfWeeks, plural, other {在 {formattedTimeText} 之前的 {numberOfWeeks} 週}}",
    "dateFormatHelpers.reminderMenuItems.yearsBefore":
      "{numberOfYears, plural, other {在 {formattedTimeText} 之前的 {numberOfYears} 年}}",
    "dateFormatHelpers.text.lastDayOfTheWeek": "上{dayOfTheWeek}",
    "dateFormatHelpers.text.nextDayOfTheWeek": "下{dayOfTheWeek}",
    "dateFormatHelpers.text.today": "今天",
    "dateFormatHelpers.text.tomorrow": "明天",
    "dateFormatHelpers.text.yesterday": "昨天",
    "dateHelpers.12hourTimeFormat": "12 小時",
    "dateHelpers.24hourTimeFormat": "24 小時",
    "dateHelpers.dateFormat.dayMonthYear": "日/月/年",
    "dateHelpers.dateFormat.explicitMonthDayYear": "年月日",
    "dateHelpers.dateFormat.fullDate": "完整日期",
    "dateHelpers.dateFormat.monthDayYear": "月/日/年",
    "dateHelpers.dateFormat.relative": "相對日期",
    "dateHelpers.dateFormat.yearMonthDay": "年/月/日",
    "dateInputError.invalidDateError.tooltip": "無效日期",
    "dateInputError.invalidDateRangeError.tooltip": "無效範圍",
    "dateParserHelpers.at": "在",
    "dateParserHelpers.day": "日",
    "dateParserHelpers.last": "上個",
    "dateParserHelpers.me": "我",
    "dateParserHelpers.month": "月",
    "dateParserHelpers.next": "下個",
    "dateParserHelpers.now": "現在",
    "dateParserHelpers.remind": "提醒",
    "dateParserHelpers.today": "今天",
    "dateParserHelpers.today.short": "今天",
    "dateParserHelpers.tomorrow": "明天",
    "dateParserHelpers.tomorrow.short": "明天",
    "dateParserHelpers.year": "年",
    "dateParserHelpers.yesterday": "昨天",
    "dateParserHelpers.yesterday.short": "昨天",
    "datePropertyMenu.menuItem.time.label": "時區",
    "dbTypesHelpers.custom.caption": "從頭開始建立資料庫",
    "dbTypesHelpers.custom.displayName": "任何事項",
    "dbTypesHelpers.docs.caption": "組織團隊文件",
    "dbTypesHelpers.docs.displayName": "文件",
    "dbTypesHelpers.meetings.caption": "活動、時間、參與者...",
    "dbTypesHelpers.meetings.displayName": "會議",
    "dbTypesHelpers.projects.caption": "組織任務群組",
    "dbTypesHelpers.projects.displayName": "專案",
    "dbTypesHelpers.sprints.caption": "敏捷專案管理",
    "dbTypesHelpers.sprints.displayName": "迭代",
    "dbTypesHelpers.tasks.caption": "簡易任務管理",
    "dbTypesHelpers.tasks.displayName": "任務",
    "ddatabase.templatePickerItem.mobileDoneRepeatButton.label": "完成",
    "declinedMembershipRequestEmail.body":
      "你可以繼續以訪客身分使用工作區。或者，建立自己的 Notion 工作區：",
    "declinedMembershipRequestEmail.cta.text": "免費試用 Notion",
    "declinedMembershipRequestEmail.titleOfEmail":
      "你的 {workspaceName} 成員資格要求被拒",
    "deepnoteBlock.embeds.button.label": "嵌入 Deepnote",
    "deepnoteBlock.embeds.caption": "適用於具有公用連結的 Deepnote 區塊。",
    "deepnoteBlock.placeholder": "嵌入 Deepnote",
    "defaultTeamsInput.defaultTeamList.title": "團隊空間",
    "desktop.rightClickMenu.copyEmailAddress": "複製電子郵件地址",
    "desktop.rightClickMenu.copyImage": "複製圖片",
    "desktop.rightClickMenu.copyImageAddress": "複製圖片位址",
    "desktop.rightClickMenu.copyLink": "複製連結",
    "desktop.rightClickMenu.openLinkInBrowser": "在瀏覽器中開啟連結",
    "desktop.searchMenuItem.searchWithGoogle.title": "用 Google 搜尋",
    "desktop.spellcheckMenuItem.disableSpellcheck.title": "關閉拼字檢查",
    "desktop.spellcheckMenuItem.enableSpellcheck.title": "開啟拼字檢查",
    "desktop.textEditingMenuItem.copyAction.title": "複製",
    "desktop.textEditingMenuItem.cutAction.title": "剪下",
    "desktop.textEditingMenuItem.pasteAction.title": "貼上",
    "desktopAppUpdater.dialog.dismissButton.label": "好",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.dismissButton.label":
      "好",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.prompt":
      "請將 Notion 應用程式移至 /Applications 檔案夾，以使自動更新程式正常工作。",
    "desktopAppUpdater.restartDialog.message":
      "請退出並重新開啓應用程式以安裝更新。",
    "desktopLogin.footer.helpCenterLink": "需要幫忙？",
    "desktopLogin.footer.privacyAndTermsLink": "隱私與條款",
    "desktopLogin.loginOrSignupToSyncMessage": "登入以同步你的內容。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.mac":
      "你的 Mac 應用已過期。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.windows":
      "你的 Windows 應用已過期。",
    "desktopLogin.upgradeWarning.upgradeInstructions.mac":
      "請下載並重新安裝你的 Mac 應用。",
    "desktopLogin.upgradeWarning.upgradeInstructions.windows":
      "請下載並重新安裝你的 Windows 應用。",
    "desktopLogin.welcomeMessage.mac": "歡迎來到 Notion",
    "desktopLogin.welcomeMessage.windows": "歡迎來到 Notion",
    "developerIntegration.confirmationModal.cancelLabel": "取消",
    "developerIntegration.confirmationModal.deleteLabel": "刪除",
    "developerIntegrationAction.error.failedTransaction":
      "出了些問題，請再試一次",
    "developerIntegrationCard.botTagline.placeholder": "内部整合。",
    "developerIntegrationCard.dropdown.delete": "刪除此整合",
    "developerIntegrationCard.integrationTagline.placeholder": "公用整合。",
    "developerIntegrationCard.placeholderCard.label": "建立新整合",
    "developerIntegrationCardDropdown.delete.confirmationError":
      "輸入項目與整合名稱不符。",
    "developerIntegrationCardDropdown.delete.confirmationMessage":
      "此公用整合將會從所有已加入的工作區中遭到停用與移除。如需確認，請輸入此整合的名稱。",
    "developerIntegrationCardDropdown.delete.confirmationTitle":
      "要刪除 {integrationName} 嗎？",
    "developerIntegrationForm.botToken.label": "內部整合權杖",
    "developerIntegrationForm.botToken.secretName": "權杖",
    "developerIntegrationForm.botToken.subtitle":
      "僅適用於 <bold>{spaceName}</bold> 工作區。如要變更工作區，請<developertermslink>建立其他整合</developertermslink>。",
    "developerIntegrationForm.capabilities.caption":
      "如果使用者授權你的整合，這些經過請求的功能就會向他們顯示。請參閱<inlinetextlink>開發人員文件</inlinetextlink>查看詳細說明。",
    "developerIntegrationForm.capabilities.comment_capabilities.title":
      "評論功能",
    "developerIntegrationForm.capabilities.content_capabilities.headerTitle":
      "内容功能",
    "developerIntegrationForm.capabilities.content_capabilities.title":
      "内容功能",
    "developerIntegrationForm.capabilities.insert_comment.caption":
      "在區塊和頁面上建立評論。",
    "developerIntegrationForm.capabilities.insert_comment.title": "插入評論",
    "developerIntegrationForm.capabilities.insert_content.caption":
      "請求建立新內容。",
    "developerIntegrationForm.capabilities.insert_content.title": "插入內容",
    "developerIntegrationForm.capabilities.label": "功能",
    "developerIntegrationForm.capabilities.no_user_capabilities.caption":
      "不要請求任何使用者資訊存取權限。",
    "developerIntegrationForm.capabilities.no_user_capabilities.title":
      "沒有使用者資訊",
    "developerIntegrationForm.capabilities.read_comment.caption":
      "在區塊和頁面上閱讀評論。",
    "developerIntegrationForm.capabilities.read_comment.title": "閱讀評論",
    "developerIntegrationForm.capabilities.read_content.caption":
      "請求讀取內容。",
    "developerIntegrationForm.capabilities.read_content.title": "讀取內容",
    "developerIntegrationForm.capabilities.read_user_with_email.caption":
      "請求存取使用者資訊，包括電子郵件地址。",
    "developerIntegrationForm.capabilities.read_user_with_email.title":
      "讀取使用者資訊，包括電子郵件地址",
    "developerIntegrationForm.capabilities.read_user_without_email.caption":
      "請求存取使用者資訊，但不包括電子郵件地址。",
    "developerIntegrationForm.capabilities.read_user_without_email.title":
      "讀取使用者資訊，不含電子郵件地址",
    "developerIntegrationForm.capabilities.update_content.caption":
      "請求更新現有內容。",
    "developerIntegrationForm.capabilities.update_content.title": "更新內容",
    "developerIntegrationForm.capabilities.user_capabilities.headerTitle":
      "使用者功能",
    "developerIntegrationForm.capabilities.user_capabilities.title":
      "使用者功能",
    "developerIntegrationForm.clientSecret.confirmationModal.alreadyViewedMessage":
      "你已查看用戶端密碼。再次查看會撤銷並產生新密碼。請務必妥善保存密碼。",
    "developerIntegrationForm.clientSecret.confirmationModal.confirm": "繼續",
    "developerIntegrationForm.clientSecret.confirmationModal.displayOnceMessage":
      "此用戶端密碼只會顯示一次，且無法再次查看，請務必妥善保存密碼。",
    "developerIntegrationForm.clientSecret.confirmationModal.refreshTitle":
      "要重新整理 OAuth 用戶端密碼嗎？",
    "developerIntegrationForm.clientSecret.confirmationModal.showTitle":
      "要顯示 OAuth 用戶端密碼嗎？",
    "developerIntegrationForm.developerName.caption":
      "你公司或組織的名稱。如不適用，可使用自己的姓名。",
    "developerIntegrationForm.developerName.label": "公司名稱",
    "developerIntegrationForm.developerSpace.label": "關聯工作區",
    "developerIntegrationForm.developerSpace.subtitle":
      "選擇工作區安裝整合以進行開發。經批准後後，它將可供所有使用者使用。",
    "developerIntegrationForm.domain.developmentDomain.label": "發展網域",
    "developerIntegrationForm.domain.label": "展開 Url 網域",
    "developerIntegrationForm.domain.verifiedDomains.label": "驗證網域",
    "developerIntegrationForm.domainVerification.caption":
      "URL 開發和驗證網域使用此整合展開。網路必須在發佈給使用者前進行驗證。如需更多驗證流程，請查看 <textlink>Notion 文書資料</textlink>。",
    "developerIntegrationForm.email.label": "支援電子郵件",
    "developerIntegrationForm.email.subtitle":
      "用於連結至你整合頁面與驗證畫面的整合支援電子郵件。",
    "developerIntegrationForm.error.invalidInput": "{ fieldName } 無效。",
    "developerIntegrationForm.error.missingFieldRequired":
      "{ fieldName } 為必填。",
    "developerIntegrationForm.external_client_id.label": "OAuth 用戶端 ID",
    "developerIntegrationForm.external_client_secret.label": "OAuth 用戶端密碼",
    "developerIntegrationForm.external_deletion_url.caption":
      "已在使用者移除你的整合時由 Notion 調用。",
    "developerIntegrationForm.external_deletion_url.label":
      "已刪除權杖回調 URL（選用）",
    "developerIntegrationForm.external_oauth_authorize_url.caption":
      "由 Notion 用於使用整合啟動使用者授權。",
    "developerIntegrationForm.external_oauth_authorize_url.label":
      "OAuth 授權 URL",
    "developerIntegrationForm.external_oauth_scopes.caption": "可選範圍字串",
    "developerIntegrationForm.external_oauth_scopes.label": "OAuth 範圍 (選用)",
    "developerIntegrationForm.external_oauth_token_url.caption":
      "Notion 調用時擷取展開召回 URL 存取權杖。",
    "developerIntegrationForm.external_oauth_token_url.label": "OAuth 權杖 URL",
    "developerIntegrationForm.icon.label": "標誌",
    "developerIntegrationForm.icon.subtitle":
      "建議使用 512 px x 512 px 的 PNG 格式。",
    "developerIntegrationForm.integrationAuthUrl.label": "授權網址",
    "developerIntegrationForm.integrationClientId.label": "OAuth 用戶端 ID",
    "developerIntegrationForm.integrationSecret.label": "OAuth 用戶端密碼",
    "developerIntegrationForm.integrationSecret.secretName": "密碼",
    "developerIntegrationForm.jsonEditor.error":
      "{value} 属性具有无效的 JSON。",
    "developerIntegrationForm.name.label": "名稱",
    "developerIntegrationForm.name.subtitle": "用於讓使用者識別整合的名稱。",
    "developerIntegrationForm.privacy_policy_url.label": "隱私權政策",
    "developerIntegrationForm.privacy_policy_url.subtitle":
      "用於連結至你整合頁面與驗證畫面的整合隱私權政策。",
    "developerIntegrationForm.redirect_uri.subtitle":
      "在 Notion 的開放授權流程中，使用者在完成 Notion 驗證後將會經重新導向到此路徑。此路徑會附加存取權限的授權代碼，且必須具有通訊協定。路徑中不可包含 URL 片段、相對路徑或萬用字元，也不能是公用 IP 位址。它還必須包含在權杖請求中。",
    "developerIntegrationForm.redirect_uris.label": "重新導向 URI",
    "developerIntegrationForm.refreshBotToken.confirmationModal.confirm":
      "繼續",
    "developerIntegrationForm.refreshBotToken.confirmationModal.message":
      "重新整理將撤銷現有權杖並生成一個新權杖。確保您安全儲存權杖。",
    "developerIntegrationForm.refreshBotToken.confirmationModal.title":
      "重新整理權杖？",
    "developerIntegrationForm.regexRule.attributes.label": "屬性",
    "developerIntegrationForm.regexRule.name.label": "規則名稱",
    "developerIntegrationForm.regexRule.pattern.label": "模式",
    "developerIntegrationForm.sampleUrls.label": "範例 URL",
    "developerIntegrationForm.sectionCaption.unfurling":
      "瀏覽<previewlab>連結預覽 Lab</previewlab> 規劃展開預覽和回應。",
    "developerIntegrationForm.sectionHeader.basic": "基本資訊",
    "developerIntegrationForm.sectionHeader.capabilities": "功能",
    "developerIntegrationForm.sectionHeader.external_oauth": "外部授權設定",
    "developerIntegrationForm.sectionHeader.external_oauth_setup":
      "外部授權設定",
    "developerIntegrationForm.sectionHeader.links": "組織資訊",
    "developerIntegrationForm.sectionHeader.oauth": "OAuth 網域與 URI",
    "developerIntegrationForm.sectionHeader.oauthAndUri": "OAuth 網域與 URI",
    "developerIntegrationForm.sectionHeader.organization": "組織資訊",
    "developerIntegrationForm.sectionHeader.secrets": "密碼",
    "developerIntegrationForm.sectionHeader.unfurling": "展開網域 &amp; 模式",
    "developerIntegrationForm.sectionHeader.unfurlingDomains": "展開網域和模式",
    "developerIntegrationForm.sectionSubtitle.external_oauth":
      "瀏覽<textlink>正式 IETF 規格</textlink>，了解 OAuth 2.0 的資訊。",
    "developerIntegrationForm.space.label": "關聯工作區",
    "developerIntegrationForm.space.subtitle":
      "選取要安裝整合的工作區。你可以稍後再升級整合，以便使用 OAuth。",
    "developerIntegrationForm.submissionType.label": "整合類型",
    "developerIntegrationForm.tagline.label": "標語",
    "developerIntegrationForm.tagline.subtitle": "整合功能的簡短說明。",
    "developerIntegrationForm.template_url.label": "Notion 模版 URL",
    "developerIntegrationForm.template_url.subtitle":
      "可選。URL 必須是啟用複本功能的公開 Notion 頁面。已在使用者安裝整合時，用於將模版複製到使用者的工作區。",
    "developerIntegrationForm.terms_of_use_url.label": "使用條款",
    "developerIntegrationForm.terms_of_use_url.subtitle":
      "用於連結至你整合頁面與驗證畫面的整合使用條款。",
    "developerIntegrationForm.unfurlUrl.caption":
      "展開行動發生時，會調用 POST 請求，刪除展開 uri 預覽或提及時，會調用 DELETE 請求。",
    "developerIntegrationForm.unfurlUrl.label": "展開召回 URL",
    "developerIntegrationForm.urlMatchingAndPlaceholder.caption":
      "當使用者在你驗證的網域貼上與此模式相符的網址時，他們即可選擇將其展開為預覽。任何範例網址都會依據提供的模式驗證。",
    "developerIntegrationForm.urlMatchingAndPlaceholder.label":
      "網址相符性和占位符",
    "developerIntegrationForm.website_url.label": "網站或首頁",
    "developerIntegrationForm.website_url.subtitle":
      "用於連結至你整合頁面與驗證畫面的整合網站或首頁。",
    "developerIntegrationFormBasicView.icon.label": "標誌",
    "developerIntegrationFormBasicView.icon.subtitle":
      "建議使用 512 px x 512 px 的 PNG 格式。",
    "developerIntegrationFormBasicView.name.label": "名稱",
    "developerIntegrationFormBasicView.name.subtitle":
      "用於讓使用者識別整合的名稱。",
    "developerIntegrationFormBasicView.space.label": "關聯工作區",
    "developerIntegrationFormBasicView.space.subtitle":
      "選擇要安裝整合的工作區。你可以稍後再升級整合，以便使用 OAuth。",
    "developerIntegrationFormCapabilitiesView.capabilities.label": "功能",
    "developerIntegrationFormDistributionView.developer_name.label": "公司名稱",
    "developerIntegrationFormDistributionView.developer_name.subtitle":
      "你公司或組織的名稱。如不適用，可使用自己的姓名。",
    "developerIntegrationFormDistributionView.email.label": "支援電子郵件",
    "developerIntegrationFormDistributionView.email.subtitle":
      "用於連結至整合頁面與驗證畫面的整合支援電子郵件。",
    "developerIntegrationFormDistributionView.privacy_policy_url.label":
      "隱私權政策",
    "developerIntegrationFormDistributionView.privacy_policy_url.subtitle":
      "用於連結至整合頁面與驗證畫面的整合隱私權政策。",
    "developerIntegrationFormDistributionView.redirect_uri.subtitle":
      "如果你已建立包括連結預覽的整合，填入 notion.so。沒有連結預覽則填入路徑，使用者在完成 Notion 驗證後將會被重新導向。此路徑會附加存取權限的授權代碼，且必須具有通訊協定。路徑中不可包含 URL 片段、相對路徑或萬用字元，也不能是公用 IP 位址。它還必須包含在權杖請求中。",
    "developerIntegrationFormDistributionView.redirect_uri_link_preview_beta.subtitle":
      "如果你正在使用「連結預覽」功能建立整合，請重新導向到 notion.so。否則，在此欄位中填入使用者完成 Notion 驗證後將會被重新導向的 URI。該 URI 會附加存取權限的授權代碼，且必須具有通訊協定。URI 中不可包含 URL 片段、相對路徑或萬用字元，也不能是公用 IP 位址。它還必須包含在權杖要求中。",
    "developerIntegrationFormDistributionView.redirect_uris.label":
      "重新導向 URI",
    "developerIntegrationFormDistributionView.switcher.label":
      "是否要將此整合設為公用？",
    "developerIntegrationFormDistributionView.switcher.subtitle":
      "公用整合可供任何 Notion 使用者使用。<br>提交之後，如果您想將您的整合分享到 Notion 的<galleryLink>連線圖庫</galleryLink>，請在<textLink>此處</textLink>聯絡我們的團隊。</br>",
    "developerIntegrationFormDistributionView.tagline.label": "標語",
    "developerIntegrationFormDistributionView.tagline.subtitle":
      "整合功能的簡短說明。",
    "developerIntegrationFormDistributionView.template.label":
      "選用模板的 Notion URL",
    "developerIntegrationFormDistributionView.template.subtitle":
      "如果你想要在 OAuth 期間，向使用者提供可儲存複本到工作區的 Notion 頁面，則使用此欄位。URL 必須導向至公用 Notion 頁面。",
    "developerIntegrationFormDistributionView.term_of_use.label": "使用條款",
    "developerIntegrationFormDistributionView.term_of_use.subtitle":
      "用於連結至整合頁面與驗證畫面的整合使用條款。",
    "developerIntegrationFormDistributionView.toggle.label":
      "要將此整合設為公用嗎？",
    "developerIntegrationFormDistributionView.toggle.subtitle":
      "公用整合可供任何 Notion 使用者使用。需要 OAuth 實行和其他開發人員資訊。",
    "developerIntegrationFormDistributionView.website_url.label": "網站或首頁",
    "developerIntegrationFormDistributionView.website_url.subtitle":
      "用於連結至整合頁面與驗證畫面的整合網站或首頁。",
    "developerIntegrationFormHandler.create.developerTerms":
      "提交即表示你同意 Notion 的<developertermslink>開發人員條款</developertermslink>。",
    "developerIntegrationFormHandler.create.developerTermsOnSubmit":
      "{action} 即表示你同意 Notion 的「<developertermslink>開發人員條款</developertermslink>」。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.confirm":
      "繼續",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.message":
      "你將會取得 OAuth 密碼，且需要實行 OAuth 以便進行授權。如需詳細資訊，請參閱<oauthdocumentationlink>開發人員文件</oauthdocumentationlink>。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.title":
      "要切換到公用整合嗎？",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.confirm":
      "變更",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.message":
      "整合中的任何現有使用者都必須重新驗證。",
    "developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.title":
      "要變更請求的功能嗎？",
    "developerIntegrationFormHelpers.pageTitle.basic": "基本資訊",
    "developerIntegrationFormHelpers.pageTitle.capabilities": "功能",
    "developerIntegrationFormHelpers.pageTitle.distribution": "分配",
    "developerIntegrationFormHelpers.pageTitle.secrets": "密碼",
    "developerIntegrationFormHelpers.pageTitle.unfurling": "連結預覽",
    "developerIntegrationFormRegexRule.deletionModal.confirm": "刪除",
    "developerIntegrationFormRegexRule.deletionModal.message":
      "在你提交表單前不會儲存變更。",
    "developerIntegrationFormRegexRule.deletionModal.title":
      "確定要刪除此正規表達式模式規則嗎？",
    "developerIntegrationFormSecretView.clientId.label": "OAuth 用戶端 ID",
    "developerIntegrationFormSecretView.clientSecret.label": "OAuth 用戶端密碼",
    "developerIntegrationFormSecretView.integrationAuthUrl.label": "授權 URL",
    "developerIntegrationFormSecretView.token.label": "內部整合權杖",
    "developerIntegrationFormUnfurlingView.domain.label": "展開 URL 網域",
    "developerIntegrationFormUnfurlingView.externalClientId.label":
      "OAuth 用戶端 ID",
    "developerIntegrationFormUnfurlingView.externalClientSecret.label":
      "OAuth 用戶端密碼",
    "developerIntegrationFormUnfurlingView.externalDeletionUrl.caption":
      "已在使用者移除你的整合時由 Notion 回撥",
    "developerIntegrationFormUnfurlingView.externalDeletionUrl.label":
      "刪除權杖回撥 URL",
    "developerIntegrationFormUnfurlingView.externalOauthAuthorizeUrl.caption":
      "由 Notion 用於透過整合啟動使用者授權。",
    "developerIntegrationFormUnfurlingView.externalOauthAuthorizeUrl.label":
      "OAuth 授權 URL",
    "developerIntegrationFormUnfurlingView.externalOauthScopes.caption":
      "可選範圍字串",
    "developerIntegrationFormUnfurlingView.externalOauthScopes.label":
      "OAuth 範圍",
    "developerIntegrationFormUnfurlingView.externalOauthTokenUrl.caption":
      "由 Notion 回撥以擷取展開回撥 URL 的存取權杖。",
    "developerIntegrationFormUnfurlingView.externalOauthTokenUrl.label":
      "OAuth 權杖 URL",
    "developerIntegrationFormUnfurlingView.sectionSubtitle.external_oauth":
      "請參閱 <textlink>Notion 文件</textlink>，了解 <authlink>OAuth 2.0</authlink> 相關資訊。",
    "developerIntegrationFormUnfurlingView.switcher.label":
      "是否要啟用此整合的連結預覽？",
    "developerIntegrationFormUnfurlingView.switcher.subtitle":
      "展開 Notion 內的外部資料。需要其他欄位才能配置相符的 URL 模式和介面。<br>此外，已發布的整合需要 Notion 平台和安全團隊的審查。</br>",
    "developerIntegrationFormUnfurlingView.unfurlUrl.caption":
      "執行展開動作時，會回撥 POST 要求；刪除展開 URL 預覽或提及時，會回撥 DELETE 要求。",
    "developerIntegrationFormUnfurlingView.unfurlUrl.label": "展開回撥 URL",
    "developerIntegrationFormUnfurlingView.urlmatching.caption":
      "當使用者在你驗證的網域貼上與此模式相符的 URL 時，他們即可選擇將其展開為預覽。任何範例 URL 都會依據提供的模式驗證。",
    "developerIntegrationFormUnfurlingView.urlmatching.label":
      "URL 比對和預留位置",
    "developerIntegrationFormValidator.sampleUrls.sampleUrlDoesNotMatchProvidedDomain.error":
      "URL「{value}」不符合提供的網域。",
    "developerIntegrationFormValidator.sampleUrls.sampleUrlDoesNotMatchProvidedRegexes.error":
      "URL「{value}」不符合提供的正規表達式模式。",
    "developerIntegrationFormValidator.sampleUrls.sampleUrlMissingDomain.error":
      "URL「{value}」遺漏網域。",
    "developerIntegrationFormValidator.templateUrl.templateUrlCannotBeDuplicated.error":
      "連結的頁面不是非公開就是不得複製。",
    "developerIntegrationFormValidator.templateUrl.templateUrlIsNotNotionPage.error":
      "URL 必須導向至公開的 Notion 範本。",
    "developerIntegrationFormValidator.urlMatchingAndPlaceholder.attributes.error":
      "{value} 屬性 JSON 與請求架構不符。",
    "developerIntegrationFormValidator.urlMatchingAndPlaceholder.regex.error":
      "{value} 正規表達式模式無效。",
    "developerIntegrationLab.domain.label": "網域",
    "developerIntegrationLab.navigateBack.label": "返回整合",
    "developerIntegrationLab.regexAttributes.label": "正規表達式屬性",
    "developerIntegrationLab.regexConfiguration.label": "管理正規表達式配置",
    "developerIntegrationLab.relatedAttributes.empty": "未找到相關屬性。",
    "developerIntegrationLab.relatedAttributes.label": "相關的展開回應酬載",
    "developerIntegrationLab.rootAttributes.label": "展開回應酬載",
    "developerIntegrationLab.rootUrl.label": "已貼上 URL 進行預覽",
    "developerIntegrationLab.subtitle.label":
      "規劃預覽 URL 正規表達式模式和 API 回應。",
    "developerIntegrationLab.title.label": "連結預覽 Lab",
    "developerIntegrationNotFound.subtitle.label": "此整合不存在。",
    "developerIntegrationNotFound.title.label": "找不到",
    "developerIntegrationShotBotToken.refreshSecret.label": "重新整理",
    "developerIntegrationShotBotToken.showSecret.label": "顯示",
    "developerIntegrationView.publishedIntegrationWarning":
      "你在此頁面上儲存變更後，就會更新你在 Notion&nbsp;<integrationgallerylink>整合圖庫</integrationgallerylink>上的列表。",
    "developerIntegrationView.publishedIntegrationWarning.label":
      "將變更儲存至你的整合後，在 Notion &nbsp;<integrationgallerylink>整合圖庫</integrationgallerylink>&nbsp;上的列表就會立即更新。",
    "developerIntegrationView.subtitle.label": "檢查與編輯整合資訊。",
    "developerIntegrationsCreate.error.capabilities.invalidContent2":
      "至少必須請求一項功能。",
    "developerIntegrationsCreateInternal.error.invalidInput":
      "{ fieldName } 無效。",
    "developerIntegrationsCreateInternal.subtitle.label":
      "我們會逐步引導你設定新整合。",
    "developerIntegrationsCreateInternal.title.label": "建立新整合",
    "developerIntegrationsForm.authUrlCopied.tooltip": "已複製網址",
    "developerIntegrationsForm.authUrlCopy.tooltip": "複製授權網址",
    "developerIntegrationsForm.clientIdCopied.tooltip": "已複製 ID",
    "developerIntegrationsForm.copiedAuthUrl.label": "已複製",
    "developerIntegrationsForm.copiedId.label": "已複製",
    "developerIntegrationsForm.copyAuthUrl.label": "複製",
    "developerIntegrationsForm.copyClientId.tooltip": "拷貝用戶端 ID",
    "developerIntegrationsForm.copyId.label": "拷貝",
    "developerIntegrationsForm.error.invalidInput": "{ fieldName } 無效。",
    "developerIntegrationsForm.error.missingFieldRequired":
      "{ fieldName } 為必填。",
    "developerIntegrationsForm.error.missingRequired": "{ fieldName } 為必填。",
    "developerIntegrationsForm.error.submission":
      "提交整合時發生錯誤。如果問題持續發生，請再試一次或聯繫支援。",
    "developerIntegrationsForm.redirectUri.typePrompt": "輸入重新導向 uri…",
    "developerIntegrationsForm.regexPatternRulesInput.addMore.label":
      "新增另一項規則",
    "developerIntegrationsForm.spacePicker.missingSpacesError":
      "你並非任何工作區的擁有者。請<linktonotion>建立新工作區</linktonotion>或請工作區擁有者更新你的存取權限。",
    "developerIntegrationsForm.urlsInput.typePrompt": "輸入或貼上 URL…",
    "developerIntegrationsLayout.backButton.label": "我的整合",
    "developerIntegrationsLayout.document.title": "我的整合 | Notion 開發人員",
    "developerIntegrationsList.addNewButton.label": "新整合",
    "developerIntegrationsList.allFilter.label": "查看全部",
    "developerIntegrationsList.internalFilter.label": "內部",
    "developerIntegrationsList.publicFilter.label": "公開",
    "developerIntegrationsList.subtitle": "建立、檢查與編輯開發資訊與憑證。",
    "developerIntegrationsList.title": "我的整合",
    "developerIntegrationsList.viewIntegration.buttonText": "查看整合",
    "developerInternalIntegration.integrationType.internal.caption":
      "僅適用於你擔任管理員的工作區。整合可自動安裝於上述工作區，且無需經過審核。選擇此選項以建立公開整合。",
    "developerInternalIntegration.integrationType.internal.caption.create":
      "選擇此選項以在稍後將此升級到公用整合。",
    "developerInternalIntegration.integrationType.internal.title": "內部整合",
    "developerInternalIntegration.integrationType.public.caption":
      "所有 Notion 使用者皆可使用。要列在整合圖庫，可能需要審核及驗證。",
    "developerInternalIntegration.integrationType.public.title": "公用整合",
    "developerInternalIntegration.integrationType.unfurling.caption":
      "所有 Notion 使用者皆可使用。要列在整合圖庫，可能需要審核及驗證。",
    "developerInternalIntegration.integrationType.unfurling.title": "連結預覽",
    "dialog.acceptButton.label": "確認",
    "dialog.cancelButton.label": "取消",
    "dialog.dismissButton.label": "好",
    "dialog.genericErrorMessage": "發生意外錯誤",
    "discussion.confirmDialog.discardReply.prompt": "你要放棄這則回覆嗎？",
    "discussion.confirmDialog.discardReplyButton.label": "放棄",
    "discussion.mobileReplyMenu.closeButton.label": "關閉",
    "discussion.mobileReplyMenu.title": "評論",
    "discussion.moreMessageTooltip": "更多評論",
    "discussion.showMoreCommentsSidebarButton.label":
      "{moreCommentsNumber, plural, other {還有 {moreCommentsNumber} 則評論}}",
    "discussionInput.defaultPlaceholder.addComment": "加入評論…",
    "discussionInput.insertMention.button.tooltip": "提及人員、頁面或日期",
    "discussionInput.uploadFile.button.tooltip": "夾帶檔案",
    "discussionInput.uploadFile.tooManyFilesErrorMessage":
      "你在每個評論中不能上傳超過 {maxFiles} 個檔案。",
    "domainSettings.workspaceCreation.byline": "自訂可以建立新工作區的人員。",
    "domainSettings.workspaceCreation.disabledTooltip":
      "若要設定工作區建立作業設定，至少必須有一個驗證網域。",
    "domainSettings.workspaceCreation.title": "工作區建立作業",
    "domainSettings.workspaceCreation.unrestricted.caption":
      "任何使用者都能夠建立新工作區",
    "domainSettings.workspaceCreation.unrestricted.title": "任何人",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.captionWithSpaceName":
      "只有此工作區的工作區擁有者才能建立新工作區。",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.title":
      "只有工作區擁有者",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.titleWithSpaceName":
      "{primaryWorkspaceName} 工作區擁有者",
    "domainVerificationInput.domainInput.placeholder": "未配置網域",
    "domainVerificationInput.emailDomainsSection.removeDomain.accept":
      "刪除網域",
    "domainVerificationInput.emailDomainsSection.removeDomain.cancel": "取消",
    "domainVerificationInput.emailDomainsSection.removeDomain.message":
      "確定要刪除此網域嗎？",
    "domainVerificationInput.emailDomainsSection.statusToken.failed": "失敗",
    "domainVerificationInput.emailDomainsSection.statusToken.pending": "待處理",
    "domainVerificationInput.emailDomainsSection.statusToken.verified":
      "已驗證",
    "domainVerificationInput.myIntegrations.emailDomainsSection.removeDomain.description":
      "刪除此網域會讓整合無法展開包含此網域的 URL。",
    "domainVerificationInput.securitySAMLSettings.emailDomainsSection.removeDomain.description":
      "刪除此網域會讓具有此電子郵件的其他人無法使用 SAML SSO 登入。",
    "domainVerificationInput.securitySAMLSettings.emailDomainsSection.removeDomain.pending.description":
      "刪除此網域即會重新啟動其驗證流程。下一次驗證嘗試會為此網域產生新驗證碼。",
    "domainVerificationTable.table.header.domain": "網域",
    "domainVerificationTable.table.header.status": "狀態",
    "downgradeModal.header.acceptedBusinessOfferConfirmation.title":
      "感謝你繼續選擇商業版",
    "downgradeModal.header.acceptedEnterpriseOfferConfirmation.title":
      "感謝你繼續選擇企業版",
    "downgradeModal.header.acceptedPlusOfferConfirmation.title":
      "感謝你繼續選擇加值版",
    "downgradeModal.header.acceptedTeamOfferConfirmation.title":
      "感謝你繼續選擇團隊版",
    "downgradeModal.header.cancellation.title": "繼續取消？",
    "downgradeModal.header.confirmation.title": "感謝你切換至 {planMessage}",
    "downgradeModal.header.downgrade.title": "繼續降級至 {planMessage}？",
    downloadMacIntelLabel: "適用於搭載 Intel 處理器的 Mac",
    downloadMacSiliconLabel: "適用於搭載 Apple M1 的 Mac",
    "dragHandleButton.clickPrompt.text": "按一下<medium>打開選單</medium>",
    "dragHandleButton.dragPrompt.text": "拖動<medium>以移動</medium>",
    "drawing.images-not-supported": "绘图中尚未支持图像。",
    "duplicateActions.offlineError.message": "請連接網路後複製此區塊。",
    "duplicatePagePopup.buttonMenuItem.logoutButton.label": "登出 ({email})",
    "duplicatePagePopup.choooseWorkspaceMobileMenu.title": "選擇一個工作區",
    "duplicatePagePopup.chooseWorkspace.menuItem.title": "選擇工作區",
    "duplicateRateLimitError.message": "已達費率上限，請稍後再試一次。",
    "edit.blockDeletedEditStyles.defaultLabel": "已刪除",
    "edit.blockDeletedEditStyles.factoryLabel": "已刪除",
    "edit.bookmarkBlockProperty.label": "書籤",
    "edit.bookmarkBlockPropertyChanged.label": "書籤",
    "edit.buttonBlock.actionCount":
      "{numberOfActions, plural, other {{numberOfActions} 個工作流程步驟}}",
    "edit.buttonBlock.defaultTitle": "無標題",
    "edit.buttonBlock.label": "按鈕",
    "edit.calloutBlock.label": "標註",
    "edit.calloutBlockChanged.label": "標註",
    "edit.codeBlockChanged.label": "程式碼",
    "edit.codeBlockWithLanguageChanged.label": "程式碼 - {codeLanguage}",
    "edit.collectionBlock.untitled": "無標題",
    "edit.deletedPermissionGroup.label": "已刪除的群組",
    "edit.descriptionPropertyChanged.label": "說明",
    "edit.descriptionPropertyCreated.label": "說明",
    "edit.editedBadge": "（已編輯）",
    "edit.equationBlock.label": "方程式",
    "edit.equationBlockChanged.label": "方程式",
    "edit.googleDriveFile.label": "Google 雲端硬碟檔案",
    "edit.imageBlockChanged.updatedTitle": "更新爲",
    "edit.pageBlock.untitled": "無標題",
    "edit.publishToWebPermissionTarget.label": "已發表的連結",
    "edit.quoteBlock.label": "引用",
    "edit.quoteBlockChanged.label": "引用",
    "edit.teamMemberPermissionChanged.knownTeam": "{teamName} 的成員",
    "edit.teamMemberPermissionChanged.unknownTeam": "未知團隊空間的成員",
    "edit.teamOwnerPermissionChanged.knownTeam": "{teamName} 的擁有者",
    "edit.teamOwnerPermissionChanged.unknownTeam": "未知團隊空間的擁有者",
    "edit.templateButtonBlock.label": "模版按鈕",
    "edit.templateButtonBlockChanged.label": "模版按鈕",
    "edit.unknownAuthor.label": "未知作者",
    "edit.unknownAuthorCommentDiff.label": "未知作者",
    "edit.unknownSpacePermissionTarget.label": "未知",
    "editFormatDiff.pageIcon.label": "頁面圖示",
    "editProperty.emptyProperty.label": "空",
    "editProperty.relationEditedProperties.moreCount.label":
      "其他 {leftoverCountNumber} 項",
    "editableUserAvatar.profilePhoto.addPhoto": "加入照片",
    "editableUserAvatar.profilePhoto.remove": "移除照片",
    "editableUserAvatar.profilePhoto.replace": "取代照片",
    "editableUserAvatar.profilePhoto.upload": "上傳照片",
    "educationModal.nextButtonCta": "下一個",
    "educationPlan.title": "個人專業版 (教育)",
    "educationPlusPlan.title": "教育加值版",
    "emailActivity.accessRequested.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}要求存取{pageName}}}",
    "emailActivity.blockEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了{pageTitle}}}",
    "emailActivity.collectionCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}建立了{collectionTitle}}}",
    "emailActivity.collectionEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {collectionTitle}}}",
    "emailActivity.collectionPropertyCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中建立了屬性{collectionPropertyTitle}}}",
    "emailActivity.collectionPropertyDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了 {collectionPropertyTitle} 屬性}}",
    "emailActivity.collectionPropertyEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中編輯了{collectionPropertyTitle}屬性}}",
    "emailActivity.collectionRowCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已建立{pageTitle}}}",
    "emailActivity.collectionRowDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已刪除 {pageTitle}}}",
    "emailActivity.collectionViewCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中建立了視圖{collectionViewTitle}}}",
    "emailActivity.collectionViewDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了 {collectionViewTitle} 視圖}}",
    "emailActivity.collectionViewEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中編輯了{collectionViewTitle}視圖}}",
    "emailActivity.commentActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {blockName} 留下評論}}",
    "emailActivity.emailEdited.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}將電子郵件地址從 {oldEmail} 變更為 {newEmail}}}",
    "emailActivity.groupMentionActivity.header":
      "{authorOrAuthors} 在 {pageName} 提到了 {groupName}",
    "emailActivity.mentionActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}在{pageName}提及了你}}",
    "emailActivity.pageDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了 {blockTitle}}}",
    "emailActivity.pageLocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 鎖定了 {blockTitle}}}",
    "emailActivity.pagePermanentlyDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已永久刪除 {blockTitle}}}",
    "emailActivity.pageRestored.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已恢復 {blockTitle}}}",
    "emailActivity.pageUnlocked.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 解鎖了 {blockTitle}}}",
    "emailActivity.permissionsActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已加入 {pageOrSpaceName}}}",
    "emailActivity.reminderInActivity.header": "{pageTitle} 中的提醒",
    "emailActivity.restorePermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}恢復了{pageOrSpaceName}其繼承的存取權限}}",
    "emailActivity.restrictPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}回復了{pageOrSpaceName}其繼承的存取權限}}",
    "emailActivity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已建立私人頁面{pageTitle}}}",
    "emailActivity.topLevelBlockPrivateDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已刪除私人頁面{pageTitle}}}",
    "emailActivity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}已建立工作區頁面{pageTitle}}}",
    "emailActivity.topLevelBlockWorkspaceDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已刪除工作區頁面 {pageTitle}}}",
    "emailActivity.untitledDatabase.placeholder": "無標題",
    "emailActivity.updatedPermissionsForActivity.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 已更新 {pageOrSpaceName} 的權限}}",
    "emailActivity.userInvitedActivityGroupId.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 加你到 {groupName} 群組}}",
    "emailActivity.userInvitedActivityGroupIdByBot.header":
      "你已被加入到{groupName}群組",
    "emailActivity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你到 {blockName}}}",
    "emailActivity.userInvitedActivityNavigableBlockByBot.header":
      "你已受邀加入 {blockName}",
    "emailActivity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你到 {spaceName}}}",
    "emailActivity.userInvitedActivityOtherInviteByBot.header":
      "你已受邀加入 {spaceName}",
    "emailActivity.verificationExpired.header": "{pageTitle} 的驗證已過期",
    "emailBase.footer.notionDescription":
      "{notionProduct} 是一個集筆記、專案管理、知識庫和資料庫{br}於一體的全能工作區。",
    "emailBase.tooManyNotifications.message": "太多通知？給我們回饋加以改進",
    "emailBase.unsubscribeFromEmails.prompt": "取消訂閱",
    "emailChangeNotificationEmail.emailChanged.headline":
      "你已變更登入 Notion 用的電子郵件地址",
    "emailChangeNotificationEmail.emailChanged.message":
      "現在，你可以使用新的電子郵件地址 {emailAddress} 登入Notion。",
    "emailChangeNotificationEmail.emailChanged.subjectLine":
      "你已變更登入用的電子郵件地址",
    "emailChangeNotificationEmail.emailChanged.text":
      "你用於登入Notion的電子郵件地址已被變更為 {newEmail}。如果你沒有進行此項更改，請傳送電子郵件到 team@makenotion。",
    "emailChangeNotificationEmail.unintendedChange.message":
      "如果你沒有進行此項變更，請傳送電子郵件到 team@makenotion。",
    "emailChangeSettings.downgradeEducationPlan.warning.message":
      "變更電子郵件地址可能會將你的免費個人專業版（教育）的工作區降級為免費個人版。你不會遺失任何資料，但是需要升級才能重新使用付費功能。對這個有疑問嗎？請聯絡<sendmessagelink>訊息支援</sendmessagelink>。",
    "emailChangeVerifyEmail.contentsTitle": "變更電子郵件地址驗證",
    "emailChangeVerifyEmail.copyPasteCode.label":
      "複製並贴上驗證碼以驗證當前電子郵件地址：",
    "emailChangeVerifyEmail.didNotChange.message":
      "如果你沒有嘗試變更你的 Notion 帳號的電子郵件地址，則可以放心地忽略此電子郵件。",
    "emailChangeVerifyEmail.subjectLine":
      "你的變更電子郵件地址驗證碼為 {temporaryPassword}",
    "emailDomain.workspaceCreationSetting.auditLog.unrestricted": "不受限制",
    "emailDomain.workspaceCreationSetting.auditLog.workspaceOwnersOnly":
      "只有工作區擁有者",
    "emailEdit.blockDeletedEdit.defaultLabel": "已刪除",
    "emailEdit.blockDeletedEdit.factoryLabel": "已刪除",
    "emailEdit.bookmarkBlock.label": "書籤",
    "emailEdit.bookmarkBlockChanged.label": "書籤",
    "emailEdit.bookmarkBlockDeleted.label": "書籤",
    "emailEdit.buttonBlock.actionCount":
      "{numberOfActions, plural, other {{numberOfActions} 個工作流程步驟}}",
    "emailEdit.buttonBlock.defaultTitle": "無標題",
    "emailEdit.buttonBlock.label": "按鈕",
    "emailEdit.calloutBlock.label": "標註",
    "emailEdit.calloutBlockChanged.label": "標註",
    "emailEdit.calloutBlockDeleted.label": "標註",
    "emailEdit.codeBlockChanged.label": "程式碼",
    "emailEdit.codeBlockWithLanguageChanged.label": "程式碼 - {codeLanguage}",
    "emailEdit.collectionBlock.untitled": "無標題",
    "emailEdit.deletedPermissionGroup.label": "已刪除的群組",
    "emailEdit.descriptionPropertyChanged.label": "說明",
    "emailEdit.descriptionPropertyCreated.label": "說明",
    "emailEdit.equationBlock.label": "方程式",
    "emailEdit.equationBlockChanged.label": "方程式",
    "emailEdit.equationBlockDeleted.label": "方程式",
    "emailEdit.googleDriveFile.label": "Google 雲端硬碟檔案",
    "emailEdit.pageBlock.untitled": "無標題",
    "emailEdit.publishToWebPermissionTarget.label": "發佈到網路：",
    "emailEdit.quoteBlock.label": "引用",
    "emailEdit.quoteBlockChanged.label": "引用",
    "emailEdit.quoteBlockDeleted.label": "引用",
    "emailEdit.templateButton.label": "模版按鈕",
    "emailEdit.templateButtonChanged.label": "模版按鈕",
    "emailEdit.templateButtonDeleted.label": "模版按鈕",
    "emailEdit.unknownAuthor.label": "未知作者",
    "emailEdit.unknownAuthorCommentDiff.label": "未知作者",
    "emailEdit.unknownSpacePermissionTarget.label": "未知",
    "emailEditFormatDiff.pageIcon.label": "頁面圖示",
    "emailEditProperty.emptyProperty.label": "空",
    "emailEditProperty.relationEditedProperties.moreCount.label":
      "其他 {leftoverCountNumber} 項",
    "emailErrors.emailUnreachable.message":
      "我們無法聯絡到你提供的電子郵件地址。請用其他電子郵件地址重試。",
    "emailErrors.incorrectPassword.message": "密碼錯誤。",
    "emailErrors.invalidEmailAddress.message": "無效的電子郵件地址",
    "emailErrors.invalidEmailDomain.message": "無效的電子郵件網域",
    "emailErrors.invalidEmailEntered.message": "請輸入有效電子郵件地址。",
    "emailErrors.invalidOrExpiredPassword.message": "你的登入碼不正確，請重試",
    "emailErrors.noExistingAccountForEmailAddress.message":
      "此電子郵件地址沒有關聯的現有帳號。",
    "emailErrors.userAlreadyExists.message":
      "使用此電子郵件地址的使用者已經存在。",
    "embedBlock.actionButton.tooltip.align": "對齊",
    "embedBlock.actionButton.tooltip.blockActionMenu": "更多動作",
    "embedBlock.actionButton.tooltip.caption": "標題",
    "embedBlock.actionButton.tooltip.comment": "評論",
    "embedBlock.actionButton.tooltip.download": "下載",
    "embedBlock.actionButton.tooltip.expand": "展開",
    "embedBlock.actionButton.tooltip.original": "原始",
    "embedBlock.embedAnything.placeholder":
      "嵌入任何內容（PDF、Google 文件、Google 地圖、Spotify…）",
    "embedBlock.embedButton.label": "嵌入連結",
    "embedBlock.embedTab.title": "嵌入",
    "embedBlock.expandFullScreen.button.label": "擴充",
    "embedBlock.invalidLinkError.message": "請輸入有效的連結。",
    "embedBlock.linkPrompt.caption":
      "適用於 PDF、Google 雲端硬碟、Google 地圖、CodePen 等…",
    "embedBlock.pastePrompt": "貼上連結，例如 https://…",
    "embedBlock.viewOriginalLink.button.label": "查看原始內容",
    "embedBlockActions.downloading.label": "下載中…",
    "embedError.audio.notFound": "找不到此音訊。",
    "embedError.audio.offline": "連接網路後查看此音訊",
    "embedError.audio.permissionDenied": "沒有權限。",
    "embedError.audio.serverError": "無法載入此音訊。",
    "embedError.audio.unknown": "無法載入此音訊。",
    "embedError.audio.unsupportedContentType":
      "此音訊格式（{extension}）無法在此裝置上播放。",
    "embedError.embed.notFound": "找不到此嵌入。",
    "embedError.embed.offline": "連接網路以查看此嵌入內容",
    "embedError.embed.permissionDenied": "沒有權限。",
    "embedError.embed.serverError": "無法載入此嵌入。",
    "embedError.embed.unknown": "無法載入此嵌入。",
    "embedError.embed.unsupportedContentType":
      "此嵌入格式（{extension}）無法在此裝置上播放。",
    "embedError.extension.unknown": "未知",
    "embedError.file.notFound": "找不到這個檔案。",
    "embedError.file.offline": "連接網路後查看這個檔案",
    "embedError.file.permissionDenied": "沒有權限。",
    "embedError.file.serverError": "無法載入這個檔案。",
    "embedError.file.unknown": "無法載入這個檔案。",
    "embedError.file.unsupportedContentType":
      "此檔案格式（{extension}）無法在此裝置上播放。",
    "embedError.hostnameAndStatusCode": "{hostname}（錯誤 {statusCode}）",
    "embedError.image.notFound": "找不到這張圖片。",
    "embedError.image.offline": "連接網路後查看此圖片",
    "embedError.image.permissionDenied": "沒有權限。",
    "embedError.image.serverError": "無法載入這張圖片。",
    "embedError.image.unknown": "無法載入這張圖片。",
    "embedError.image.unsupportedContentType":
      "此圖片格式（{extension}）無法在此裝置上顯示。",
    "embedError.learnMore": "了解更多",
    "embedError.video.notFound": "找不到此影片。",
    "embedError.video.offline": "連接網路後查看此影片",
    "embedError.video.permissionDenied": "沒有權限。",
    "embedError.video.serverError": "無法載入此影片。",
    "embedError.video.unknown": "無法載入此影片。",
    "embedError.video.unsupportedContentType":
      "此影片格式（{extension}）無法在此裝置上播放。",
    "embedMenu.action.abstract": "嵌入 Abstract 專案",
    "embedMenu.action.audio": "嵌入音訊",
    "embedMenu.action.codepen": "嵌入 CodePen",
    "embedMenu.action.createEmbed": "建立嵌入",
    "embedMenu.action.deepnote": "嵌入 Deepnote",
    "embedMenu.action.drawing": "包含绘图",
    "embedMenu.action.drive": "嵌入 Google 雲端硬碟",
    "embedMenu.action.excalidraw": "嵌入 Excalidraw",
    "embedMenu.action.figma": "嵌入 Figma",
    "embedMenu.action.framer": "嵌入 Framer 原型",
    "embedMenu.action.gist": "嵌入 GitHub Gist",
    "embedMenu.action.hex": "嵌入十六進位",
    "embedMenu.action.image": "嵌入圖片",
    "embedMenu.action.invision": "嵌入 Invision 專案",
    "embedMenu.action.loom": "嵌入 Loom",
    "embedMenu.action.maps": "嵌入 Google 地圖",
    "embedMenu.action.miro": "嵌入 Miro 畫板",
    "embedMenu.action.pdf": "嵌入 PDF",
    "embedMenu.action.replit": "嵌入 repl",
    "embedMenu.action.sketch": "嵌入 Sketch 文件",
    "embedMenu.action.tweet": "嵌入推文",
    "embedMenu.action.typeform": "嵌入 Typeform",
    "embedMenu.action.video": "嵌入影片",
    "embedMenu.action.whimsical": "嵌入 Whimsical 畫板",
    "embedMenu.actions.createBookmark.title": "建立書籤",
    "embedMenu.actions.createLinkedDatabase.title": "建立連結資料庫",
    "embedMenu.actions.createLinkedViewOfDatabase.title":
      "建立資料庫已連結視圖",
    "embedMenu.actions.createTransclusion.title": "貼上並同步",
    "embedMenu.actions.dismiss.title": "取消",
    "embedMenu.actions.linkToPage.title": "連結到頁面",
    "embedMenu.actions.mentionBlock.title": "提及區塊",
    "embedMenu.actions.mentionPage.title": "提及頁面",
    "emojiPicker.noResults.message": "沒有結果",
    "emojiPicker.section.activity": "活動",
    "emojiPicker.section.animals": "動物與自然",
    "emojiPicker.section.callout": "標註",
    "emojiPicker.section.flags": "旗幟",
    "emojiPicker.section.food": "食物與飲料",
    "emojiPicker.section.objects": "物件",
    "emojiPicker.section.people": "人物",
    "emojiPicker.section.recent": "最近",
    "emojiPicker.section.symbols": "符號",
    "emojiPicker.section.travel": "旅行與地點",
    "emojiPickerSkinTonePicker.selectSkinTone": "選擇膚色",
    emptyDatabaseViewTitle: "{commaSeparatedDatabaseNames} 視圖",
    emptyPageTitle: "無標題",
    "enterprise.label": "企業版",
    "enterpriseContactModal.additionalFeedback.placeholder":
      "您想進一步了解什麼？",
    "enterpriseContactModal.initial.1000PlusLabel": "超過 1001 人",
    "enterpriseContactModal.initial.101_1000Label": "101-1000 人",
    "enterpriseContactModal.initial.1_100Label": "1-100 人",
    "enterpriseContactModal.initial.caption":
      "我們將與你合作制定你的專屬方案。",
    "enterpriseContactModal.initial.companySizeLabel": "公司規模",
    "enterpriseContactModal.initial.emailLabel": "你的工作用電子郵件地址",
    "enterpriseContactModal.initial.header": "聯絡銷售人員",
    "enterpriseContactModal.initial.nameLabel": "你的名字",
    "enterpriseContactModal.initial.questionLabel": "你的問題",
    "enterpriseContactModal.initial.sendLabel": "傳送",
    "enterpriseContactModal.selectQuestion.label": "選擇問題",
    "enterpriseContactModal.thanks.caption":
      "我們已收到你的詢問，且很快就會透過電子郵件與你聯絡。",
    "enterpriseContactModal.yourQuestion.title": "你的問題",
    "enterpriseContactModalQuestionSelect.question.live_demo": "安排現場展示",
    "enterpriseContactModalQuestionSelect.question.other": "其他",
    "enterpriseContactModalQuestionSelect.question.plan_help":
      "選擇方案時需要幫助",
    "enterpriseContactModalQuestionSelect.question.setup_trial":
      "設定企業試用版",
    "enterpriseDomainClaimSettingsPrompt.caption":
      "工作區擁有者現在可查看並管理由具有驗證網域之使用者建立的工作區。",
    "enterpriseDomainClaimSettingsPrompt.cta": "瀏覽工作區",
    "enterpriseDomainClaimSettingsPrompt.learnMore.button": "瞭解更多",
    "enterpriseDomainClaimSettingsPrompt.title": "新網域管理設定",
    "enterprisePlan.label": "企業版",
    "enterprisePlan.title": "企業版",
    "enterpriseSettingsPrompt.learnMore.button": "了解更多",
    "enterpriseSpaceAnalyticsSettingsPrompt.caption.member":
      "使用工作區分析檢閱檢視次數或不重複訪客等指標，藉此查看你的內容執行方式。",
    "enterpriseSpaceAnalyticsSettingsPrompt.caption.workspaceOwner":
      "探索成員和訪客如何與此工作區互動、進行的常見搜尋，以及具有工作區分析的內容參與指標。",
    "enterpriseSpaceAnalyticsSettingsPrompt.cta": "檢視指標",
    "enterpriseSpaceAnalyticsSettingsPrompt.learnMore.button": "了解更多",
    "enterpriseSpaceAnalyticsSettingsPrompt.title": "新工作區分析",
    "equationBlock.actions.tooltip": "重新命名、刪除等…",
    "equationBlock.empty.placeholder": "加入一個 TeX 方程式",
    "equationInput.inputError.label": "無效的方程式：",
    "equationInput.inputError.learnMore": "了解更多",
    "equationInput.submitButton.label": "完成",
    "errorPage.loggedOutWorkspace.title": "登入",
    "errorPage.workspaceNoAccess.title": "沒有存取權限",
    "evernoteActions.authenticatingWithEvernote.loadingMessage":
      "Evernote 授權中…",
    "evernoteActions.loginPopupModal.title": "Evernote 登入",
    "evernoteImportOption.actionsMenu.connectAnotherAccount": "連接另一個帳號",
    "evernoteImportOption.actionsMenu.import": "匯入",
    "evernoteImportOption.actionsMenu.learnMore": "了解更多資訊",
    "evernoteImportOption.actionsMenu.removeIntegration": "移除",
    "evernoteImportOption.caption.getCredit": "匯入即可取得 US$5 的點數",
    "evernoteImportOption.search.noResultsPlaceholder": "沒有筆記本",
    "evernoteImportOption.search.placeholder": "搜尋筆記本…",
    "excalidrawBlock.embeds.button.label": "嵌入 Excalidraw",
    "excalidrawBlock.embeds.caption": "適用於 Excalidraw 白板。",
    "excalidrawBlock.placeholder": "嵌入 Excalidraw",
    "export.csvHeader.email": "Email",
    "export.csvHeader.id": "ID",
    "export.csvHeader.name": "名稱",
    "export.csvHeader.permissionGroups": "權限群組",
    "export.csvHeader.role": "角色",
    "export.exportPartitioned.message":
      "匯出因檔案大小仍在進行中。我們會以電子郵件通知你目前進度。",
    "export.linkToPage.untitledPagePlaceholder": "無標題",
    "export.markdown.untitledDatabase.placeholder": "無標題",
    "export.userPermissionsRole.admin.message": "管理員",
    "export.userPermissionsRole.guest.message": "訪客",
    "export.userPermissionsRole.member.message": "成員",
    "export.userPermissionsRole.membershipAdmin.message": "成員資格管理員",
    "export.userPermissionsRole.workspaceOwner.message": "工作區擁有者",
    "exportActions.auditLog.exporting.EmailMessage":
      "目前正在產生你的 CSV 匯出檔。產生後的 CSV 稽核日誌檔會有 2 小時的延遲情況。準備就緒後，即會向你發送包含下載連結的電子郵件。",
    "exportActions.exportDisabledTeams.message":
      "下列團隊空間已停用匯出功能：<b>{teamNames}</b>",
    "exportActions.exportFailedError.message": "匯出失敗。",
    "exportActions.exporting.loadingMessage": "匯出中…",
    "exportActions.exportingCSV.EmailMessage":
      "目前正在產生你的 CSV 匯出檔。準備就緒後，即會傳送包含下載連結的電子郵件給你。",
    "exportAdminContentSearch.rateLimited.message":
      "已達內容搜尋匯出率上限，請在完成目前匯出檔後再試一次。",
    "exportAdminContentSearchCSVEmail.body":
      "你的 Notion 內容搜尋匯出已經準備就緒：{downloadURL}",
    "exportAdminContentSearchCSVEmail.downloadLinkPrompt":
      "點選<downloadlink>這裡</downloadlink>可下載。該連結會在 7 天後到期。",
    "exportAdminContentSearchCSVEmail.title":
      "你的 Notion 內容搜尋匯出已經準備就緒",
    "exportAdminContentSearchHeaders.columnHeader.audience": "受眾",
    "exportAdminContentSearchHeaders.columnHeader.createdBy": "建立者",
    "exportAdminContentSearchHeaders.columnHeader.createdTime": "建立時間",
    "exportAdminContentSearchHeaders.columnHeader.id": "ID",
    "exportAdminContentSearchHeaders.columnHeader.lastEditedBy": "上次編輯者",
    "exportAdminContentSearchHeaders.columnHeader.lastEditedTime":
      "上次編輯時間",
    "exportAdminContentSearchHeaders.columnHeader.teamspace": "團隊空間",
    "exportAdminContentSearchHeaders.columnHeader.title": "標題",
    "exportAnalyticsCSVEmail.analyticsType.content": "內容",
    "exportAnalyticsCSVEmail.analyticsType.members": "成員",
    "exportAnalyticsCSVEmail.analyticsType.users": "使用者",
    "exportAnalyticsCSVEmail.exportEmailText":
      "你的 Notion「{daysFilter} {analyticsType} 分析 CSV」匯出檔已準備就緒：{downloadURL}",
    "exportAnalyticsCSVEmail.exportReady.text":
      "你的 Notion「{daysFilter} 使用者分析 CSV」匯出檔已準備就緒",
    "exportAnalyticsCSVEmail.exportSubjectLine":
      "你的 Notion「{daysFilter} {analyticsType} 分析 CSV」匯出檔已準備就緒",
    "exportAuditLog.error.internal": "發生內部錯誤。",
    "exportAuditLog.error.spaceError":
      "你不是工作區的管理員，或是此工作區不存在。",
    "exportAuditLog.header.activity": "活動",
    "exportAuditLog.header.activityType": "活動類型",
    "exportAuditLog.header.audience": "受眾",
    "exportAuditLog.header.city": "城市",
    "exportAuditLog.header.country": "國家",
    "exportAuditLog.header.dateAndTime": "日期和時間 (UTC)",
    "exportAuditLog.header.email": "電子郵件",
    "exportAuditLog.header.ipAddress": "IP 位址",
    "exportAuditLog.header.name": "名稱",
    "exportAuditLog.header.pageId": "頁面 ID",
    "exportAuditLog.header.platform": "平台",
    "exportAuditLog.header.state": "州",
    "exportAuditLog.header.status": "狀態",
    "exportAuditLogCSVEmail.exportCustomerSupport.text":
      "請聯絡你的成功經理或支援以取得其他協助",
    "exportAuditLogCSVEmail.exportEmailText":
      "你的 Notion 稽核日誌檔 CSV 匯出檔已準備就緒：{downloadURL}",
    "exportAuditLogCSVEmail.exportReady.text":
      "你的 Notion 稽核日誌檔 CSV 匯出檔已準備就緒",
    "exportAuditLogCSVEmail.exportSubjectLine":
      "你的 Notion 稽核日誌檔 CSV 匯出檔已準備就緒",
    "exportAuditLogCSVEmail.exportWithErrors.text":
      "很抱歉，產生下列日期的報告時發生錯誤：",
    "exportCSVEmail.analyticsDelay.defaultText":
      "工作區在過去 24 小時內的任何變更可能不會顯示在匯出中。",
    "exportCSVEmail.analyticsDelay.text":
      "{workspaceName} 在過去 24 小時內的任何變更可能不會顯示在匯出中。",
    "exportCSVEmail.downloadLinkPrompt":
      "按一下<downloadlink>這裡</downloadlink>可重新下載。該連結會在 7 天後到期。",
    "exportContentAnalytics.rateLimited.message":
      "已達內容分析匯出率上限，請在完成目前匯出檔後再試一次。",
    "exportHelpers.unknownFilePlaceholderTitle": "未知檔案",
    "exportHelpers.untitledPagePlaceholderTitle": "無標題",
    "exportModal.cancelButton.label": "取消",
    "exportModal.closeButton.label": "關閉",
    "exportModal.exportButton.label": "匯出",
    "exportModal.exportFormat.description": "匯出格式",
    "exportModal.exportFormatButton.html.label": "HTML",
    "exportModal.exportFormatButton.markdownAndCSV.label": "Markdown & CSV",
    "exportModal.exportFormatButton.pdf.label": "PDF",
    "exportModal.flattenExportFiletree.description": "為子頁面建立資料夾",
    "exportModal.includeContentTypes.everything.label": "全部",
    "exportModal.includeContentTypes.no_files.label": "沒有檔案或圖片",
    "exportModal.includeContents.description": "包括內容",
    "exportModal.includeDatabases.all.label": "全部",
    "exportModal.includeDatabases.currentView.label": "目前視圖",
    "exportModal.includeDatabases.description": "包括資料庫",
    "exportModal.includeSubpages.label": "含子頁面",
    "exportModal.offlineMessage.description": "請連接網路後匯出。",
    "exportModal.pageFormat.description": "頁面格式",
    "exportModal.pageFormatButton.a3.label": "A3",
    "exportModal.pageFormatButton.a4.label": "A4",
    "exportModal.pageFormatButton.legal.label": "法定紙（Legal）",
    "exportModal.pageFormatButton.letter.label": "美式信紙（Letter）",
    "exportModal.pageFormatButton.tabloid.label": "小報用紙（Tabloid）",
    "exportModal.pageScale.description": "縮放比例",
    "exportModal.pageScale.invalidScaleError": "縮放比例數據必須介於 10 到 200",
    "exportModal.pdfSubpageUpgradeTooltip.caption":
      "建立一個 zip 檔，其中包含嵌套在目前頁面中所有子頁面的 PDF 檔案。",
    "exportModal.pdfSubpageUpgradeTooltip.title":
      "升級以在 PDF 匯出中包含子頁面",
    "exportModal.title": "匯出",
    "exportModal.workspacePdfUpgradeTooltip.caption":
      "建立一個 zip 檔，包含工作區中所有頁面的 PDF 檔案。",
    "exportModal.workspacePdfUpgradeTooltip.title": "升級以將工作區匯出為 PDF",
    "exportPreview.error.message": "錯誤",
    "exportPreview.loading.message": "載入中…",
    "exportProgressDialog.closeButton.label": "關閉",
    "exportProgressDialog.emailMessage":
      "我們還將向你傳送包含下載連結的電子郵件地址。",
    "exportProgressDialog.exportStartedMessage": "匯出中…",
    "exportProgressDialog.exportedPagesMessage":
      "{pagesExported, plural, other {已匯出{pagesExported}頁}}",
    "exportProgressEmail.emailText":
      "你的資料匯出要求仍在進行中。我們目前匯出了 {exportedPageCount} 個頁面，並將在匯出完成時向你發送電子郵件確認。",
    "exportProgressEmail.subjectLine": "Notion 工作區匯出進行中",
    "exportRenderer.titleOfBlock.untitled": "無標題",
    "exportRenderer.titleOfDatabase.untitled": "無標題資料庫",
    "exportRenderer.titleOfNewProperty.property": "屬性",
    "exportResultEmail.emailText":
      "按一下<downloadlink>這裡</downloadlink>可下載。該連結會在 7 天後到期。",
    "exportResultEmail.subjectLine": "你的 Notion 匯出已經準備就緒",
    "exportUserAnalytics.rateLimited.message":
      "已達成員分析匯出率上限，請在完成目前匯出檔後再試一次。",
    "exportUserAnalyticsCSVEmail.exportEmailText":
      "你的 Notion「{daysFilter} 使用者分析 CSV」匯出檔已準備就緒：{downloadURL}",
    "exportUserAnalyticsCSVEmail.exportReady.text":
      "你的 Notion「{daysFilter} 使用者分析 CSV」匯出檔已準備就緒",
    "exportUserAnalyticsCSVEmail.exportSubjectLine":
      "你的 Notion「{daysFilter} 使用者分析 CSV」匯出檔已準備就緒",
    "export_audit_log_rate_limited.message":
      "已達稽核日誌檔匯出率上限，請在完成目前匯出檔後再試一次。",
    "externalActions.dialogError.copiedDebuggingInfo": "已複製到剪貼簿。",
    "externalActions.dialogError.openFilePicker.errorMessage": "出了些問題。",
    "externalActions.dialogItem.openFilePicker.copyDebugData": "複製除錯資訊",
    "externalBlock.mediaPicker.browseTab.title": "瀏覽 {appName}",
    "externalIntegrationAuthActions.authenticateWithIntegration.failedModal.developerInfo":
      "系統重新導向至 Notion 前，整合必須以臨時代碼交換存取權杖。",
    "externalIntegrationAuthActions.authenticateWithIntegration.failedModal.dismiss":
      "好",
    "externalIntegrationAuthActions.authenticateWithIntegration.failedModal.moreInfo":
      "更多資訊",
    "externalIntegrationAuthActions.authenticateWithIntegration.failedModal.text":
      "無法連接帳號。",
    "externalIntegrationAuthActions.authenticationWithIntegration.loadingMessage":
      "授權整合",
    "externalIntegrationAuthActions.loginWithExternalIntegrationPopupModal.title":
      "驗證",
    "externalObjectBlock.errorDropdown.copiedDebuggingInfo": "已複製到剪貼簿。",
    "externalObjectInstance.bodyAttribute.moreLabel": "更多",
    "externalObjectInstance.bodyAttribute.showLessLabel": "顯示較少",
    "externalObjectInstanceBlock.editLabel.message": "連結預覽",
    "externalObjectInstanceBlock.placeholder.message": "嵌入 {value}",
    "externalObjectInstanceBlockErrorDropdown.dialogItem.copyDebugData":
      "複製除錯資訊",
    "externalObjectInstanceBlockErrorDropdown.dialogItem.reviewGuide":
      "查看指南",
    "factoryBlock.buttonName.subtitle": "這個按鈕應該叫什麼？",
    "factoryBlock.buttonName.title": "按鈕名稱",
    "factoryBlock.configureButton.label": "設定模版按鈕",
    "factoryBlock.configureMenu.closeButton.label": "關閉",
    "factoryBlock.configureTemplate.button.label": "設定模版",
    "factoryBlock.emptyTemplate.placeholder": "空。拖動區塊到這裡…",
    "factoryBlock.moreActions.button.label": "更多動作…",
    "factoryBlock.newItem.button.label": "加入新項目",
    "factoryBlock.newItem.button.placeholder": "加入新項目",
    "factoryBlock.templateArea.subtitle.":
      "將每次按下模版按鈕時要複製的區塊拖動到這裡。",
    "factoryBlock.templateArea.title": "模版",
    "failedToImportConfluenceResultEmail.emailText":
      "按一下<loggerpagelink>這裡</loggerpagelink>查看匯入摘要。",
    "failedToImportConfluenceResultEmail.subjectLine": "你的 Notion 匯入失敗。",
    "faq.addingAndRemovingMembers.answer":
      "<p>無論你是按月還是按年結算，如果你進行這些類型的變更，都可能每月向你的帳號收費。如果你加入了成員，則將根據每位成員被加入時剩餘的計費週期百分比，按比例向你的帳號收取費用。如果你刪除了成員，將以同樣的方式返還餘額到你的帳號。</p>",
    "faq.addingAndRemovingMembers.question": "如何加入與刪除成員？",
    "faq.advancedPermissions.answer":
      "<p>在免費的團隊試用版中，你可以在每個頁面上將存取權限設定為「完整存取權限」、「可以查看」或「可以評論」，這會影響其他使用者與該頁面的互動方式。「完整存取權限」是指該人員可以編輯、評論、並與其他人分享頁面。</p> <p>在付費的團隊版與企業版中，你可以向其他使用者授予「可以編輯」存取權限，這樣受邀人員可以在頁面上進行編輯與評論，但不能與其他人分享。如果你不希望內容洩漏到團隊之外，這將特別有用。</p> <p> <contactsales>聯絡銷售人員以了解更多</contactsales> </p>",
    "faq.advancedPermissions.question": "付費團隊版與企業版提供哪些進階權限？",
    "faq.cancelPlan.answer":
      "<p>你的 Notion 訂閱（年付或月付）將自動續訂，直到你取消為止。可以在電腦左側邊欄「設定與成員」中選擇「方案」，然後選擇「降級」來取消訂閱。取消後，仍可以使用所有付費功能，直到帳單週期結束。</p><p><billingandpaymentlink>此處可查看關於帳單與付款的更多資訊</billingandpaymentlink></p>",
    "faq.cancelPlan.question": "如何取消我的付費方案？",
    "faq.changePaymentMethod.answer":
      "<p>你可以隨時在帳單設定中變更付款方式。</p>",
    "faq.changePaymentMethod.question": "我可以變更付款方式嗎？",
    "faq.changePlans.answer":
      "<p>升級或降級方案的工作原理和加入與刪除成員相似。系統會根據更改方案時剩餘的結算週期百分比來向你的帳號收費或返還餘額。</p>",
    "faq.changePlans.question": "更改方案會發生什麼情況？",
    "faq.deleteBlocks.answer":
      "<p>當然！就像行動電話或電腦上的儲存限制一樣，如果刪除一些內容，則會釋放更多空間。</p>",
    "faq.deleteBlocks.question": "我可以刪除區塊來釋放儲存空間嗎？",
    "faq.freeVsPersonalAndTeam.answer":
      "<p>最大的區別在於如何與其他人合作。</p><p>免費個人版專為個人使用量身設計，最多可容納 5 位不同的訪客。這些訪客可以是你的朋友、家人、以及其他你邀請到任何頁面進行私人協作的人。你還可以將頁面公開分享到網路，並打開評論或編輯權限。在頁面右上方的「分享」選單中，依次打開「分享到網路」與「允許編輯」後，任何擁有頁面連結的 Notion 使用者便可編輯你的頁面。</p> <p>在個人專業版，你可以邀請無限的訪客進行私人協作。例如，如果你經營自己的公司，則可以邀請所有客戶為你提供工作的反饋。</p> <p>在團隊版，你可以將成員加入到工作區中，以便大家共享和處理相同內容。團隊版還具有更多的權限與管理員控制，這樣你和你的團隊成員可以安全地一起工作。更多詳細資訊，請參閱方案比較表。</p>",
    "faq.freeVsPersonalAndTeam.question":
      "免費個人版、個人專業版和團隊版有什麼不同？",
    "faq.howToApplyCredit.answer":
      "<p>要使用點數，你必須先升級到任何付費方案。在升級過程中，你可以選擇將部分或全部帳號點數應用於新方案。</p>",
    "faq.howToApplyCredit.question": "如何將點數應用於工作區？",
    "faq.howToEarnCredit.answer":
      "<p>你可以透過在不同裝置上使用 Notion 並嘗試新功能來獲得點數。請前往「設定與成員」中的「獲得點數」標籤頁以了解更多。</p>",
    "faq.howToEarnCredit.question": "如何獲得點數？",
    "faq.importStorageLimit.answer":
      "<p>透過匯入建立的內容不計入工作區的儲存限制。我們希望確保你盡可能順利地開始使用 Notion。</p>",
    "faq.importStorageLimit.question":
      "如果在團隊試用版，從其他應用程式匯入內容會怎樣影響區塊儲存限制？",
    "faq.mandatoryRefund.answer":
      "<p>如果你住在歐盟、英國或其他有強制退款政策的地區，則可能具備在 72 小時後獲得每月訂閱退款的資格。舉例來說，歐盟的客戶可在購買後 14 天內（而非 72 小時內）收到每月訂閱的全額退款。</p><p>如要請求退款，請在程式中聯絡我們，或傳送電子郵件到 team@makenotion.com。如果你的居住地區有強制退款政策，請告訴我們，我們很樂意為你提供協助。</p>",
    "faq.mandatoryRefund.question": "如果我住在有強制退款政策的地區怎麼辦？",
    "faq.maximumEarnedCredit.answer":
      "<p>是的，最多可以獲得 {maximumAmountInDollars} 的點數。</p>",
    "faq.maximumEarnedCredit.question": "獲得的點數有上限嗎？",
    "faq.monthlyAndYearlyBilling.answer":
      "<p>是的！我們提供月付和年付方案，年付更便宜（大概可以省 20％）。舉個例子，當你選擇月付方案，團隊版為每位成員每月 US$10，但如果選擇年付方案，則每位成員每月 US$8。</p>",
    "faq.monthlyAndYearlyBilling.question": "有月付或年付的選項嗎？",
    "faq.multipleTeams.answer":
      "<p>可以！你可以使用同一個電子郵件地址建立並加入多個團隊。但是，每一個工作區擁有它自己的定價方案，需要單獨升級。</p>",
    "faq.multipleTeams.question": "我可以在 Notion 上隸屬於多個團隊嗎？",
    "faq.overGuestLimitInFreePlan.answer":
      "<p>你可以升級到沒有訪客限制的個人專業版。如果你經常和同一組人一起協作，則可自動升級為團隊版。你還可以在「設定與成員」中查看與移除閒置的訪客。</p>",
    "faq.overGuestLimitInFreePlan.question":
      "當我超出個人版的訪客限制時，會發生什麼事？",
    "faq.overStorageLimitInFreePlan.answer":
      "<p>你仍然可以像往常一樣讀取、編輯和移動現有內容區塊，但無法加入新的區塊。</p><p>不過，你可以刪除現有內容區塊以釋放儲存空間。</p>",
    "faq.overStorageLimitInFreePlan.question":
      "當我超出團隊試用版的區塊儲存限制時，會發生什麼事？",
    "faq.paymentFailure.answer":
      "<p>付款失敗後，系統會通過郵件通知你。在帳單逾期的第一個月，系統會最多重試 4 次付款。此後，如果付款失敗，你將被降級為免費版。</p>",
    "faq.paymentFailure.question":
      "如果付款失敗會發生什麼事？比如我的信用卡過期了？",
    "faq.paymentProcessor.answer":
      "<p>我們使用 Stripe 處理你的付款。Stripe 也是 Twitter、Pinterest 和 Lyft 等產品的付款提供者。我們不會直接處理你的信用卡資訊。</p>",
    "faq.paymentProcessor.question": "我的付款處理方式為何？",
    "faq.personalPricing.answer":
      "<p>如果你將工作區升級到個人專業版，將需支付固定費用（每月 US$5 或每年 US$48）。</p> <p>訪客完全免費，但需要在特定頁面中加入。</p>",
    "faq.personalPricing.question": "如何計算個人專業版的定價？",
    "faq.refund.answer":
      "<p>我們的退款政策很簡單。如果你認為你在網頁或應用內訂閱 Notion 付費方案時出了差錯，請在應用內聯繫我們或發送電子郵件到 team@makenotion.com。如果你在訂閱月付方案的 72 小時內或訂閱年付方案的 30 天內降級，我們很樂意全額退款（不按比例）。</p><p>如果你出於任何原因對 Notion 不滿意，請通過 team@makenotion.com 告訴我們──我們很樂意聽取你的反饋，合作共創最好的使用體驗。</p>",
    "faq.refund.question": "退款如何運作？",
    "faq.runOutOfCredit.answer":
      "<p>如果用完了點數，則會透過你提供的付款方式向你的帳號收取費用。</p>",
    "faq.runOutOfCredit.question": "如果我的點數耗盡會發生什麼事？",
    "faq.serviceLevelAgreement.answer":
      "<p>我們不提供標準 SLA。對於成員超過 100 人的團隊，我們可以提供定制 SLA。</p><p><contactsales>聯絡銷售人員以了解更多</contactsales></p>",
    "faq.serviceLevelAgreement.question": "你有服務等級協議 (SLA) 嗎？",
    "faq.studentDiscount.answer":
      "<p>個人專業版免費供學生與教育工作者使用。如果你是學生或教育工作者，就可與無限訪客進行協作、使用版本歷史記錄等專業版功能。只需使用你的學校電子郵件地址進行註冊，即可使用這些功能。</p> <p>如果你已經升級到個人專業版，請將與你的帳號關聯的電子郵件地址更改為學校的電子郵件地址，以免費獲得個人專業版。如果你之前已經在使用我們的舊版免費教育版，則會自動升級到個人專業版。</p> <p> <helpcenterlink>請前往說明中心了解更多。</helpcenterlink> </p>",
    "faq.studentDiscount.question": "你們給學生提供任何優惠嗎？",
    "faq.teamAdminTools.answer":
      "<p>免費團隊試用版中，工作區中的每位成員都是管理員。這意味著任何人都可以更改工作區設定並邀請他人進入團隊。</p><p>如果你只想讓特定的人具有管理員權限，我們建議你升級到完整的付費團隊版。其附帶的管理員工具，可以讓你區分管理員和普通成員。成員無法編輯帳單資訊或安全設定，也無法在工作區之外共享內容。</p>",
    "faq.teamAdminTools.question": "團隊版隨附哪些管理員工具？",
    "faq.teamPricing.answer":
      "<p>如果你將工作區升級到團隊版，則會向每位成員收取費用（每人每月 US$10 或每年 US$96）。例如，如果你使用月付方案，並有 5 位成員，則每月收取 US$50。</p><p>訪客完全免費，但他們只能存取被邀請的特定頁面。也就是說，訪客不能看到側邊欄中的「工作區」分區內容。</p>",
    "faq.teamPricing.question": "如何計算團隊版的定價？",
    "faq.teamTrial.answer":
      "<p>當系統在註冊過程中詢問你如何設定 Notion 時，選擇「團隊」，你將自動加入團隊版的免費試用。你將可以使用付費團隊版的大多數功能，但區塊儲存限制為 1,000 個。如果你的團隊想要加入更多內容，請升級到完整的團隊版。上面有更詳細的資訊。</p>",
    "faq.teamTrial.question": "如何免費試用團隊版？",
    "faq.useNotionForFree.answer":
      "<p>當然！Notion 可以無限期免費使用。</p><p>作為個人，可以完全免費使用個人版。團隊版有 1,000 個區塊限制的免費試用期，這樣你可以在為團隊升級前與團隊免費試用 Notion。</p>",
    "faq.useNotionForFree.question": "我可以免費使用 Notion 嗎？",
    "faq.whatIsABlock.answer":
      "<p>區塊是你加入到頁面的任何單個內容，如文字段落、待辦事項、圖片、程式碼、嵌入檔案等。一個頁面是由這些區塊建立的。</p>",
    "faq.whatIsABlock.question": "什麼是區塊？",
    "faq.whyBillingInformation.answer":
      "<p>即使你使用了足夠的點數來支付第一筆帳單，我們仍需要你的付款資料，因為在將來點數用盡時，可保障你帳號可以正常續費。</p>",
    "faq.whyBillingInformation.question":
      "如果我有足夠點數來支付 Notion，為什麼還需要我的付款資料？",
    "faqList.moreQuestionsTextHelpCenter":
      "還有其他問題嗎？在我們的<messagelink>說明中心</messagelink>了解更多資訊。",
    "faqList.moreQuestionsTextIntercom":
      "還有其他問題嗎？<messagelink>歡迎傳送訊息詢問我們</messagelink>",
    "figmaBlock.caption": "適用於啟用了公開存取的 Figma 連結",
    "figmaBlock.placeholder": "嵌入 Figma",
    "fileBlock.embedButton.label": "嵌入連結",
    "fileBlock.fileTab.title": "檔案",
    "fileBlock.linkPrompt.caption":
      "適用於 PDF、Google 雲端硬碟、Google 地圖、CodePen 等…",
    "fileBlock.linkPrompt.placeholder": "貼上檔案連結…",
    "fileBlock.uploadOrEmbed.placeholder": "上傳或嵌入檔案",
    "filePropertyMenu.header": "檔案",
    "filePropertyMenu.uploadFileFailedError.message": "上傳失敗。",
    "fileUploadErrors.freePlanFileSizeExceeded.message":
      "你的檔案超過免免費版的 5MB 限制。",
    "filtersIntroTooltip.subtitle":
      "在共享視圖上，在你儲存之前，變更篩選器與排序不會影響其他人。",
    "filtersIntroTooltip.title": "儲存篩選器與排序",
    "flattenedAppTemplates.tasks.taskByProjectViewName": "依專案顯示的任務",
    "followTabButton.title": "正在關注",
    "followTabButton.tooltip":
      "你正在關注的頁面更新將顯示在此處。<helpCenterLink>了解更多</helpCenterLink>",
    "forcePasswordResetEmail.body.greeting": "{name}，你好！",
    "forcePasswordResetEmail.body.intro":
      "我們與你聯絡是因為與你電子郵件相關的使用者名稱和密碼組合可在網際網路外部使用，而且可能已用於存取你的 Notion 帳戶。Notion 還是安全的狀態。",
    "forcePasswordResetEmail.body.intro2":
      "雖然無法知道惡意執行者最後可能如何取得你的憑證，但常見來源為<a>憑證填充</a>，其依賴在多個網站重複使用的密碼。",
    "forcePasswordResetEmail.body.line1":
      "為了你的帳戶安全，我們已將你登出 Notion 帳戶。",
    "forcePasswordResetEmail.body.line2":
      "下次登入時，你必須提供傳送至電子郵件的一次性代碼。",
    "forcePasswordResetEmail.body.line3":
      "接著，建議你在帳戶設定<a>設定新密碼</a>。強烈建議你為不同網站使用獨特的密碼。",
    "forcePasswordResetEmail.body.line4":
      "你可能也想要考慮為你認為可能受影響的任何其他裝置，包括你的電子郵件提供者，變更你的密碼並設定雙因素驗證 (2FA)",
    "forcePasswordResetEmail.body.line5":
      "如果你有任何疑問或其他疑慮，請隨時透過 team@makenotion.com 與我們聯絡。",
    "forcePasswordResetEmail.body.signoff": "Notion 安全性",
    "forcePasswordResetEmail.subjectLine": "Notion 安全性警訊",
    "forcePasswordResetEmail.text.label":
      "為了你的帳戶安全，我們已將你登出 Notion 帳戶。下次登入時，你必須使用傳送至電子郵件的一次性代碼登入。",
    "forkPageActions.loadingStateDisplayText":
      "正在將「{blockTitle}」的複本儲存到「{spaceTitle}」…",
    "forkPageActions.untitledBlockRecordTitle": "無標題",
    "forkPageActions.untitledSpaceRecordTitle": "無標題",
    "forkPageScreen.chooseWorkspace.message": "選擇工作區",
    "forkPageScreen.chooseWorkspaceForDuplication.message":
      "選擇複製位置的工作區",
    "formHandler.submitButton.continue.label": "繼續",
    "formHandler.submitButton.create.label": "提交",
    "formHandler.submitButton.create.update": "儲存變更",
    "formHandler.submitButton.saved.label": "已儲存",
    "formInputIcon.uploadButton.label": "上傳圖片",
    "formSecretShow.copied.label": "已複製",
    "formSecretShow.copySecret.label": "拷貝",
    "formSecretShow.copySecret.tooltip": "拷貝 {secretName}",
    "formSecretShow.refreshSecret.label": "重新整理",
    "formSecretShow.secretCopied.tooltip": "已複製 {secretName}",
    "formSecretShow.showSecret.label": "顯示",
    "formatMessage.error.undefinedResultType": "未定義",
    "formatSettings.threeOrMoreItems":
      "{item1} 及其他 {numberOfOther} 位使用者",
    "formatSettings.twoItems": "{item1} 和 {item2}",
    "formula2Input.keyboardShortcutHint":
      "按Enter键自动完成，按Shift+Enter添加新行。",
    "formula2Input.learnMore.button.label": "进一步了解公式",
    "formulaAutocompleteMenu.insertAValue.message": "插入數值",
    "formulaAutocompleteMenu.insertValue.message": "插入數值",
    "formulaAutocompleteMenu.setADate.title": "設定日期",
    "formulaHelpers.error.branchCondition":
      "條件的每個分支必須為相同類型：{input}",
    "formulaHelpers.error.circularDependency":
      "屬性 {propertySchemaName} 會建立循環相依性。",
    "formulaHelpers.error.illegalConstant": "非法常數：{value}",
    "formulaHelpers.error.invalidPropertyReference": "無效的屬性參考：{input}",
    "formulaHelpers.error.invalidSyntax": "無效的語法：{input}",
    "formulaHelpers.error.noSignatureForFunction":
      "找不到函數的簽章：{functionName}",
    "formulaHelpers.error.propertyNotFound": "找不到屬性：prop({input})",
    "formulaHelpers.error.propertyNotSupported":
      "屬性不受支援：prop({propertySchemaName})",
    "formulaHelpers.error.tooFewArguments": "函數 {functionName} 中的參數過少",
    "formulaHelpers.error.tooFewArgumentsVariadic":
      "函數 {functionName} 中的參數過少",
    "formulaHelpers.error.tooManyArguments": "函數 {functionName} 中的參數過多",
    "formulaHelpers.error.tooManyArgumentsInProp": "傳遞到 prop() 的參數過多。",
    "formulaHelpers.error.typeMismatch":
      "類型不符，{nodeString} 並非 {localizedPropertyTypeDisplayName}。",
    "formulaHelpers.error.undefinedConstant": "未定義的常數：{constantName}",
    "formulaHelpers.error.undefinedFunction": "未定義的函數：{functionName}",
    "formulaHelpers.error.undefinedOperator": "未定義的運算子：{operator}",
    "formulaPropertyMenu.learnMore.button.label": "了解公式",
    "formulaSuggestionActions.setADate.message": "設定日期…",
    "formulas.SimpleFormulaValuePicker.back": "返回",
    "formulas.SimpleFormulaValuePicker.backAriaLabel": "返回",
    "formulas.SimpleFormulaValuePicker.block.searchPlaceholder":
      "搜尋一或多個頁面...",
    "formulas.SimpleFormulaValuePicker.checkbox.checked": "已勾選",
    "formulas.SimpleFormulaValuePicker.checkbox.sectionHeader": "核取方塊選項",
    "formulas.SimpleFormulaValuePicker.checkbox.unchecked": "未勾選",
    "formulas.SimpleFormulaValuePicker.checkboxOptionsSectionHeader":
      "核取方塊選項",
    "formulas.SimpleFormulaValuePicker.chooseAValue": "選擇...",
    "formulas.SimpleFormulaValuePicker.clear": "清除",
    "formulas.SimpleFormulaValuePicker.customFormula": "自訂公式",
    "formulas.SimpleFormulaValuePicker.genericMenuHeader": "将属性设置为",
    "formulas.SimpleFormulaValuePicker.pages.searchPlaceholder":
      "搜尋一或多個頁面...",
    "formulas.SimpleFormulaValuePicker.pages.sectionHeader": "頁面",
    "formulas.SimpleFormulaValuePicker.pagesSectionHeader": "頁面",
    "formulas.SimpleFormulaValuePicker.people.searchPlaceholder":
      "搜尋一或多位人員...",
    "formulas.SimpleFormulaValuePicker.people.sectionHeader": "人員",
    "formulas.SimpleFormulaValuePicker.peopleSectionHeader": "人員",
    "formulas.SimpleFormulaValuePicker.pickADate": "選擇日期",
    "formulas.SimpleFormulaValuePicker.select.searchPlaceholder":
      "選擇一或多個選項...",
    "formulas.SimpleFormulaValuePicker.select.sectionHeader": "選擇一項",
    "formulas.SimpleFormulaValuePicker.selectOptionsSectionHeader": "選擇一項",
    "formulas.SimpleFormulaValuePicker.valuesFromThisAutomation":
      "來自此自動化",
    "formulas.insertValue.message": "插入數值",
    "formulas.simpleValuePicker.errorMessage": "出了些問題。",
    "formulas.simpleValuePicker.noResults": "沒有結果",
    "formulas.simpleValuePicker.pages.noResults.message": "沒有結果",
    "formulas.simpleValuePicker.pages.searchPage.errorMessage": "出了些問題。",
    "formulas.simpleValuePicker.pages.searchPerson.errorMessage":
      "出了些問題。",
    "formulas.simpleValuePicker.select.noResults.message": "沒有結果",
    "frame.importingMessage": "匯入中…",
    "framerBlock.embedFramer.button.label": "嵌入 Framer",
    "framerBlock.linkInput.caption": "適用於 Framer 原型",
    "framerBlock.placeholder": "嵌入 Framer 原型",
    "free.title": "免費版",
    "freePlan.title": "免費版",
    "frontPricingCard.businessPlan.attribute.advancedPageAnalytics":
      "進階頁面分析",
    "frontPricingCard.businessPlan.attribute.ninetyVersionHistory":
      "90 天的版本歷史",
    "frontPricingCard.businessPlan.attribute.pdfExport": "大量 PDF 匯出",
    "frontPricingCard.businessPlan.attribute.privateTeamspaces": "私人團隊空間",
    "frontPricingCard.businessPlan.attribute.twoFiftyGuests": "邀請 250 位訪客",
    "frontPricingCard.businessPlan.context.allBusinessPlanFeatures":
      "加值版的全部功能，以及",
    "frontPricingCard.businessPlan.oneliner":
      "適合使用 Notion 連接多個團隊或工具的公司。",
    "frontPricingCard.comingSoonBadge": "即將推出",
    "frontPricingCard.educationPlan.attribute.contentApi.v2": "API",
    "frontPricingCard.educationPlan.attribute.shareWithGuests": "無限訪客",
    "frontPricingCard.educationPlan.attribute.unlimitedFileUploads":
      "無限檔案上載",
    "frontPricingCard.educationPlan.attribute.versionHistory": "版本歷史",
    "frontPricingCard.enterprisePlan.attribute.advancedSecurity":
      "進階安全控制",
    "frontPricingCard.enterprisePlan.attribute.auditLog": "稽核日誌檔",
    "frontPricingCard.enterprisePlan.attribute.customContractInvoicing":
      "自訂合約與發票",
    "frontPricingCard.enterprisePlan.attribute.customGuests": "自訂訪客限制",
    "frontPricingCard.enterprisePlan.attribute.customerSuccessManager":
      "客戶成功經理",
    "frontPricingCard.enterprisePlan.attribute.dedicatedManager":
      "專屬顧客成功經理（100 多個名額）",
    "frontPricingCard.enterprisePlan.attribute.fiveHundredGuests":
      "邀請 500 位訪客",
    "frontPricingCard.enterprisePlan.attribute.scimApi": "用戶管理分配（SCIM）",
    "frontPricingCard.enterprisePlan.attribute.sso": "SAML 單一登入",
    "frontPricingCard.enterprisePlan.attribute.unlimitedVersionHistory":
      "無限頁面歷史",
    "frontPricingCard.enterprisePlan.attribute.workspaceAnalytics":
      "工作區分析",
    "frontPricingCard.enterprisePlan.context.allBusinessPlanFeatures":
      "商業版的全部功能，以及",
    "frontPricingCard.enterprisePlan.oneliner":
      "經營整個組織所需的進階控制和支援。",
    "frontPricingCard.evernotePremiumComparison.attribute.notes": "筆記",
    "frontPricingCard.evernotePremiumComparison.attribute.reminders": "提醒",
    "frontPricingCard.evernotePremiumComparison.attribute.tags": "標籤",
    "frontPricingCard.evernotePremiumComparison.attribute.twoLevelHierarchy":
      "二級階層",
    "frontPricingCard.evernotePremiumComparison.attribute.webClipper":
      "網頁擷取器",
    "frontPricingCard.freePlan.attribute.pageAnalytics": "基本頁面分析",
    "frontPricingCard.freePlan.attribute.shareWithGuests": "與 5 位訪客分享",
    "frontPricingCard.freePlan.attribute.slackIntegration":
      "與 Slack、GitHub 等項目整合",
    "frontPricingCard.freePlan.attribute.syncAcrossDevices": "跨裝置同步",
    "frontPricingCard.freePlan.attribute.tenGuests": "邀請 10 位訪客",
    "frontPricingCard.freePlan.attribute.unlimitedBlocks": "無限頁面和區塊",
    "frontPricingCard.freePlan.attribute.weekVersionHistory": "7 天的版本歷史",
    "frontPricingCard.freePlan.oneliner":
      "專為幫助你良好管理工作和生活而設計。",
    "frontPricingCard.freePlan.title": "免費版",
    "frontPricingCard.personalPlan.attribute.limitedVersionHistory":
      "30 天的頁面歷史",
    "frontPricingCard.personalPlanComparison.attribute.databases": "資料庫",
    "frontPricingCard.personalPlanComparison.attribute.infiniteHierarchy":
      "無限階層",
    "frontPricingCard.personalPlanComparison.attribute.markdownSupport":
      "Markdown 支援",
    "frontPricingCard.personalPlanComparison.attribute.realTimeCollaboration":
      "即時協作",
    "frontPricingCard.plusPlan.attribute.hundredGuests": "邀請 100 位訪客",
    "frontPricingCard.plusPlan.attribute.unlimitedBlocksTeam":
      "提供給團隊的無限區塊",
    "frontPricingCard.plusPlan.oneliner":
      "可供小群組規劃並保持井然有序的地方。",
    "frontPricingCard.plusPlan.title": "加值版",
    "frontPricingCard.teamPlan.attribute.adminTools": "管理員工具",
    "frontPricingCard.teamPlan.attribute.advancedPermissions": "進階權限",
    "frontPricingCard.teamPlan.attribute.collaborativeWorkspace": "協作工作區",
    "frontPricingCard.teamPlan.attribute.sharingPermissions": "分享權限",
    "frontPricingCard.teamPlan.attribute.unlimitedMembers": "無限團隊成員",
    "frontPricingCard.teamPlan.context.allPlusPlanFeatures":
      "免費版的全部功能，以及",
    "fullPageError.accessNotAllowed.message":
      "你無權存取{workspaceName}。請與管理員聯絡以將你加入為成員。",
    "fullPageError.backToMyContentButton.label": "返回我的內容",
    "fullPageError.canRequestAccess.message":
      "如果有人批准你的要求，你則可以存取此頁面。",
    "fullPageError.canRequestAccess.title": "無法存取此頁面",
    "fullPageError.canRequestAccess.titleWithPageName":
      "沒有 {pageTitle} 的存取權限",
    "fullPageError.cannotRequestAccess.message":
      "此頁面不存在，或者你沒有存取此頁面的權限。",
    "fullPageError.changePermissions.title": "變更此頁面的權限",
    "fullPageError.changePermissions.titleWithPageName":
      "變更 {pageTitle} 的權限",
    "fullPageError.contentDoesNotExist.message":
      "遇到麻煩？請聯絡<helplink>訊息支援</helplink>",
    "fullPageError.contentDoesNotExist.title": "此內容不存在",
    "fullPageError.createOrJoinWorkspaceButton.label": "建立或加入工作區",
    "fullPageError.downloadMobileAppButton.label": "取得行動應用",
    "fullPageError.loggedOut.message": "歡迎來到 Notion 上的{workspaceName}。",
    "fullPageError.noAccess.title": "未找到頁面",
    "fullPageError.offlineError.message":
      "欸，你似乎離線。請連接網路後查看此頁面。",
    "fullPageError.openInMobileAppButton.label": "在行動應用中開啟",
    "fullPageError.pageIsPrivate.message":
      "這是{workspaceName}的私有頁面。{hasOwner, select, true {請聯絡{ownerName}（ {ownerEmail} ）邀請你進行協作。}other{請與頁面所有者聯絡以邀請你進行協作。}}",
    "fullPageError.publicDomainInterstitial.title":
      "透過以下連結即可繼續前往外部網站",
    "fullPageError.reportAProblem.label": "回報問題",
    "fullPageError.requestAccessButton.label": "要求存取",
    "fullPageError.requestAccessButton.requested": "已要求存取",
    "fullPageError.returnToOnboardingButton.label": "回到引導流程",
    "fullPageError.sendMessageButton.label": "訊息支援",
    "fullPageError.sendMessageForHelp.message":
      "<sendmessagelink>訊息支援</sendmessagelink>可提供幫助。",
    "fullPageError.somethingWrong.label": "發生問題了嗎？",
    "fullPageError.termsAndPrivacyButton.label": "條款",
    "fullPageError.unsafePageError.message":
      "此頁面可能包含垃圾郵件、網路釣魚、非法或不當內容。如果你從未知來源收到此連結，建議你關閉此標籤頁。<proceedanywaylink>仍然繼續</proceedanywaylink>",
    "fullPageError.unsafePageError.title": "此頁面被標記為不安全",
    "fullPageError.whatIsNotionButton.label": "什麼是 Notion？",
    "fullPageError.workspaceOwner.canChangePermissionsMessage":
      "身為<b>工作區擁有者</b>，你可以變更此頁面的權限以加入你自己或其他人。任何變更都會出現在稽核日誌檔中。",
    "fullPageError.workspaceOwner.canChangePermissionsMessageButton":
      "變更權限",
    "fullPageError.workspaceOwner.changePermissions.description":
      "身為此工作區的擁有者，你可以變更此頁面的權限。",
    "fullPageError.workspaceOwner.changePermissions.descriptionWithSpaceName":
      "身為 <b>{spaceName}</b> 的工作區擁有者，你可以變更此頁面的權限。",
    "fullPageError.wrongAccount.message":
      "你可能需要使用其他電子郵件地址<loginlink>登入</loginlink> ，或與頁面所有者聯絡以要求存取。",
    "fullPageError.wrongAccountRequestAccess.message":
      "你可能需要使用其他電子郵件地址<loginlink>登入</loginlink>。",
    "fullPageError.wrongAccountRequestAccessSwitchAccount.message":
      "你可能需要<switchlink>切換帳號</switchlink>或使用其他電子郵件地址<loginlink>登入</loginlink>。",
    "fullPageError.wrongLoggedInUserError.message":
      "你目前以 {currentlyLoggedInUser} 登入",
    "fullScreenRenderer.download": "下載",
    "fullScreenRenderer.next": "下一個",
    "fullScreenRenderer.previous": "返回",
    "fullScreenRenderer.zoomIn": "縮小",
    "fullScreenRenderer.zoomOut": "放大",
    "fullscreenRenderer.closeButton.label": "關閉",
    "fullscreenRenderer.imageCount.label":
      "第 {currentIndex} 個，共 {totalCount} 個",
    "general.mfa.error.incorrectBackupCode":
      "備用代碼無效，請嘗試重新輸入或使用不同代碼。",
    "general.mfa.error.incorrectPassword": "密碼不正確",
    "general.mfa.error.incorrectSMSCode":
      "代碼無效，請嘗試重新輸入或重新傳送代碼。",
    "general.mfa.error.incorrectTOTPCode": "代碼無效，請嘗試重新輸入。",
    "general.mfa.error.smsAlreadyVerifedPhoneNumber": "此電話號碼已驗證完畢",
    "general.mfa.error.smsEmptyFriendlyName": "電話號碼不可空白",
    "general.mfa.error.smsEmptyPhoneNumber": "電話號碼不可空白",
    "general.mfa.error.smsInvalidCountryCode": "國碼/地區碼無效",
    "general.mfa.error.smsInvalidPhoneNumber": "電話號碼無效",
    "general.mfa.error.totpBadFriendlyName": "驗證器名稱無法使用",
    "general.mfa.error.totpDuplicateFriendlyName": "驗證器名稱已在使用中",
    "general.mfa.error.totpEmptyFriendlyName": "驗證器名稱不可空白",
    "general.mfa.error.unexpectedError": "出現錯誤，請重試",
    "general.mfa.passwordResentLinkSent": "密码重置链接已发送到地址{email}。",
    "genericDialogModal.cancelButton.label": "取消",
    "genericErrors.genericErrorMessage": "出了些問題。",
    "genericErrors.insufficientPermissions.errorMessage":
      "你沒有此要求空間功能的權限。",
    "genericErrors.insufficientPlanType.errorMessage": "你",
    "getNotifiedButton.label": "收到通知",
    "getNotifiedButton.linkedCollectionView.label": "收到通知",
    "gistBlock.embedButton.label": "嵌入 Gist",
    "gistBlock.linkInput.caption": "適用於 Github 上的 Gist 連結",
    "gistBlock.placeholder": "嵌入 Gist",
    "githubGistRenderer.errorLoading.message": "載入 gist 時出錯",
    "githubGistRenderer.loading.message": "載入 gist 中…",
    "githubUtils.untitledPage": "無標題",
    "googleAuthPromptModal.connectToGoogleButton.label": "連接到 Google",
    "googleAuthPromptModal.mobileUseDesktopPrompt.errorMessage":
      "請在電腦上使用 Notion 連接新帳號。",
    "googleAuthPromptModal.noAccessFile.errorMessage":
      "Notion 無法存取你要嵌入的 Google 雲端硬碟檔案。",
    "googleAuthPromptModal.seeConnectedAccountsButton.label":
      "查看我的關聯帳號",
    "googleDriveActions.authenticatingWithGoogle.loadingMessage":
      "Google 授權中…",
    "googleDriveActions.loginWithGoogleModal.title": "Google 登入",
    "googleDriveBlock.embedTab.caption": "適用於 Google 雲端硬碟中的任何檔案",
    "googleDriveBlock.embedTab.embedButton.label":
      "嵌入 Google 雲端硬碟中的檔案",
    "googleDriveBlock.legacy.placeholder": "嵌入 Google 雲端硬碟的檔案",
    "googleDriveBlock.legacyLinkInput.caption":
      "適用於 Google 文件、Google 試算表…",
    "googleDriveBlock.mediaMenuActions.embedTab.title": "嵌入",
    "googleDriveBlock.mediaPicker.googleDriveTab.title": "瀏覽 Google 雲端硬碟",
    "googleDriveBlock.pageDeleted.caption": "此檔案位於垃圾桶中。",
    "googleDriveBlock.pageDescription":
      "{hasUserName, select, true {由{userName}} other {}}上次修改於{hasLastModifiedTime, select, true {{lastModifiedTime}} other {}}",
    "googleDriveBlock.placeholder.authenticated":
      "選擇要從 Google 雲端硬碟嵌入的檔案",
    "googleDriveBlock.placeholder.notAuthenticated":
      "將 Google 雲端硬碟連接到 Notion 以嵌入檔案",
    "googleDriveHelpers.untitledFilePlaceholder": "無標題",
    "googleErrors.googleDriveTokenError":
      "來自 Google 雲端硬碟的錯誤：{errorMessage}",
    "googleMapsBlock.embed.caption": "適用於 Google 地圖上的任何地點",
    "googleMapsBlock.embedButton.label": "嵌入地圖",
    "googleMapsBlock.placeholder": "嵌入 Google 地圖",
    "grantPageAccessActivityAction.accessGranted.title": "由 {grantedBy} 核准",
    "grantPageAccessActivityAction.alreadyHasAccess.label":
      "{requestingUser}已有存取權限。",
    "grantPageAccessActivityAction.approveButton.label": "核准",
    "grantPageAccessActivityAction.changePermissionButton.label": "變更",
    "grantPageAccessActivityAction.grantAccessButton.label": "授予存取權限",
    "grantPageAccessActivityAction.ignoreButton.label": "忽略",
    "groupPreview.noUsers": "此组中没有用户。",
    "groupsDropdownForMember.groupsCount.label":
      "{numberOfGroups, plural, other {{numberOfGroups} 個群組}}",
    "groupsDropdownForMember.groupsCountNone.label": "無",
    "groupsDropdownForMember.numMembers":
      "{numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    "guestMembershipRequestModal.confirmationToast.errorMessage":
      "無法發送成員請求。",
    "guestMembershipRequestModal.confirmationToast.successMessage":
      "成員請求已發送。",
    "guestPagesButton.label":
      "{numberOfAccessiblePages, plural, other {{numberOfAccessiblePages} 個頁面}}",
    "guestPagesPopup.addAdminPermissionButton.label": "轉為管理員",
    "guestPagesPopup.addAdminPermissionButton.tooltip":
      "這位訪客將成為此工作區的管理員。",
    "guestPagesPopup.addMemberPermissionButton.label": "轉為成員",
    "guestPagesPopup.addMemberPermissionButton.tooltip":
      "這位訪客將成為此工作區的成員。",
    "guestPagesPopup.guestAccessiblePagesCaption": "這位訪客可以存取這些頁面",
    "guestPagesPopup.permissionsForUserGuest.label": "訪客",
    "guestPagesPopup.privatePagePlaceholder": "私人頁面",
    "guestPagesPopup.removeGuestButton.label": "移除",
    "guestPagesPopup.removeGuestButton.tooltip":
      "這位訪客將從此工作區的所有頁面中移除。",
    "guestPagesPopup.removeGuestModal.confirmationMessage":
      "確定要移除此人？他將無法存取所有已分享的頁面。",
    "guestPagesPopup.removeGuestModal.removeButton.label": "移除",
    "guestpagesforteamguest.header": "頁面",
    "header1Block.placeholder": "標題 1",
    "helpButton.desktopHelpButton.tooltip": "說明、回饋及 {br}快速鍵",
    "helpButton.giveFeedback.menuItem": "給予回饋",
    "helpButton.helpSupportGuide.menuItem": "說明與支援",
    "helpButton.joinUs.menuItem": "加入我們",
    "helpButton.keyboardShortcuts.menuItem": "鍵盤快速鍵",
    "helpButton.mobile.rightActionButton.done": "完成",
    "helpButton.mobile.title": "說明及意見回饋",
    "helpButton.mobileHelpFeedbackButton.label": "說明與反饋",
    "helpButton.mobileTwitter.menuItem": "Twitter – @{notionHandle}",
    "helpButton.onboardingChecklist.menuItem.default": "Notion 基本知識",
    "helpButton.onboardingChecklist.menuItem.pm": "專案管理基本知識",
    "helpButton.salesChat.menuItem": "聯絡銷售人員",
    "helpButton.salesChat.menuItemDemoVariant": "要求展示",
    "helpButton.sendMessage.menuItem": "訊息支援",
    "helpButton.sendUsAMessage.tooltip.intercom.disabled":
      "如要啟用傳訊功能，你必須接受功能 Cookie。{br}你可以在 Notion 設定中更新 Cookie。{br}你也可以傳送電子郵件到 team@makenotion.com 與我們聯絡。",
    "helpButton.showTeamspacesEductation": "了解團隊空間",
    "helpButton.twitter.menuItem": "Twitter – @{notionHandle}",
    "helpButton.whatsNew.menuItem": "最新消息",
    "hexBlock.embeds.button.label": "嵌入十六進位",
    "hexBlock.embeds.caption": "適用於具有公用存取權限的十六進位儲存格連結。",
    "hexBlock.placeholder": "嵌入十六進位",
    "highlightSelectionButton.backgroundSection.label": "背景",
    "highlightSelectionButton.colorSection.label": "顏色",
    "highlightSelectionButton.defaultBackground.label": "默認背景",
    "highlightSelectionButton.lastUsedSection.label": "上次使用",
    "highlightSelectionButton.mobileColorIcon.label": "顏色",
    "highlightSelectionButton.mobileTextColor.label": "文字顏色",
    "highlightSelectionButton.textColor.tooltip": "文字顏色",
    "historyModal.confirmDialog.description": "確定恢復到此版本？",
    "historyModal.confirmDialog.restoreButton.label": "恢復",
    "historyModal.desktopModal.cancelButton.label": "取消",
    "historyModal.desktopModal.errorMessage": "出了些問題",
    "historyModal.desktopModal.learnMoreButton.label": "了解頁面歷史記錄",
    "historyModal.desktopModal.restoreButton.label": "恢復版本",
    "historyModal.desktopModal.sidebar.upgradeMessage.tooltip":
      "升級以恢復快照。",
    "historyModal.errorMessage": "出了些問題",
    "historyModal.mobileHistoryMenu.title": "歷史",
    "historyModal.mobileSnapshotMenu.restoreButton.label": "恢復",
    "historyModal.noSnapshotsYet.message":
      "此頁面尚無任何快照。生成第一個快照最多需要 10 分鐘。",
    "historyModal.snapshotsMenuList.upgrade.tooltip": "升級以查看此快照。",
    "historyModal.upgradeForHistoryButton.label": "升級",
    "historyModal.upsell.message":
      "請升級至{upsellTier}版以存取{snapshotLimitDays}天前的版本。",
    "historyModalActions.restoringPreviousVersion.loadingMessage": "回復中…",
    "homePageTemplates.assignedToMeView": "指派給我",
    "homePageTemplates.createdByMeTasks": "由我建立的任務",
    "homePageTemplates.createdByMeView": "由我建立",
    "homePageTemplates.home": "首頁",
    "homePageTemplates.myTasks": "我的任務",
    "hoverPreviewOverlay.action.turnPreviewIntoPreview": "轉換成預覽",
    "hoverPreviewOverlay.editButton.label": "編輯",
    "htmlHelpers.table.fileColumnName": "檔案",
    "iFramePreview.imagelessAreaLabel": "點擊以載入嵌入",
    "iFramePreview.pillLabel": "載入嵌入",
    "iconPicker.newBadge": "全新功能",
    "iconPicker.section.icons": "圖示",
    "iconPicker.section.recent": "最近存取",
    "iconPickerColorPicker.askEveryTime": "每次都詢問",
    "iconPickerColorPicker.selectColor": "選擇圖示顏色",
    "iconPickerColorPicker.selectSpecificColor": "選擇 {iconColor} 圖示顏色",
    "id.completions.Topic":
      "你想進行什麼內容的腦力激盪？例如，「適合海盜主題派對遊戲的創意名稱想法」",
    "id.completions.aiBlocks": "插入 AI 區塊",
    "id.completions.askAI": "詢問 AI",
    "id.completions.autofillCustom": "自訂",
    "id.completions.autofillSummary": "填寫摘要",
    "id.completions.blogPost": "部落格文章",
    "id.completions.blogPost.blogPostTopic.placeholder":
      "部落格文章應該是什麼內容？例如，「練習正念和冥想的好處」",
    "id.completions.blogPost.generate": "產生文章",
    "id.completions.brainstormIdeas": "腦力激盪",
    "id.completions.changeTone": "變更語氣",
    "id.completions.changeToneCasual": "隨興",
    "id.completions.changeToneConfident": "自信",
    "id.completions.changeToneFriendly": "友善",
    "id.completions.changeToneProfessional": "專業",
    "id.completions.changeToneStraightforward": "直率",
    "id.completions.changeToneType": "選擇語氣",
    "id.completions.cleanUpFormatting": "清除格式設定",
    "id.completions.conclusion": "結論",
    "id.completions.continueWriting": "繼續寫作",
    "id.completions.creativeStory": "創意故事",
    "id.completions.creativeStoryPlaceholder":
      "你想撰寫什麼內容的故事？例如，「Suzy 發現只有她看得到的神奇密室」",
    "id.completions.draftWithAI": "透過 AI 建立草稿",
    "id.completions.editPage": "查看頁面",
    "id.completions.editSelection": "查看選擇",
    "id.completions.essay": "短文",
    "id.completions.essayPlaceholder":
      "你想撰寫什麼內容的短文？例如，「混亂環境該如何實際改善焦點」",
    "id.completions.explainThis": "解釋這個",
    "id.completions.extractFromPage": "從頁面生成",
    "id.completions.extractFromSelection": "從選擇生成",
    "id.completions.findActionItems": "尋找待辦事項",
    "id.completions.fixSpellingGrammar": "修正拼字和文法錯誤",
    "id.completions.genericHelpMeEdit": "{filter}",
    "id.completions.genericHelpMeWrite": "詢問 AI「{filter}」",
    "id.completions.genericHelpMeWriteNewPage": "協助我撰寫「{filter}」",
    "id.completions.genericHelpMeWriteNewPageEmpty": "開始用 AI 撰寫...",
    "id.completions.helpMeDraftPlaceholder":
      "請問想撰寫什麼內容？例如，「關於學習新語言的好處」",
    "id.completions.helpMeEdit": "協助我編輯",
    "id.completions.helpMeEditPlaceholder":
      "你想怎麼樣編輯此文本？例如，「以一個句子總結」",
    "id.completions.helpMeWrite": "協助我撰寫",
    "id.completions.helpMeWritePlaceholder":
      "你想撰寫什麼樣的內容？例如，「我們應雇用專門設計師的 5 個原因」",
    "id.completions.historyLabel":
      "第 {currentRevision} 個，共 {totalRevisions} 個",
    "id.completions.improveWriting": "改善寫作",
    "id.completions.insertAIBlock": "作为AI块插入",
    "id.completions.jobDescription": "工作說明",
    "id.completions.jobDescriptionPlaceholder":
      "你想為什麼工作撰寫說明？例如，「Notion 的資料工程師，需要 Postgres 的經驗」",
    "id.completions.makeLonger": "加長",
    "id.completions.makeShorter": "縮短",
    "id.completions.meetingAgenda": "會議議程",
    "id.completions.meetingAgendaPlaceholder":
      "會議目的是什麼？例如，「調整新產品定價」",
    "id.completions.outline": "大綱",
    "id.completions.outlinePlaceholder":
      "你想製作大綱的目的為何？例如，「進入大學的詳細逐步流程」",
    "id.completions.poem": "詩歌",
    "id.completions.poemPlaceholder":
      "你想撰寫什麼內容的詩？例如，「尋找平凡事物意義的古怪詩歌」",
    "id.completions.pressRelease": "新聞稿",
    "id.completions.pressReleasePlaceholder":
      "新聞稿應該是什麼內容？例如，「全新寵物心靈感應應用程式的產品發表」",
    "id.completions.prosConsList": "利弊清單",
    "id.completions.prosConsListPlaceholder":
      "你想製作什麼內容的利弊清單？例如，「第一次學習新的語言」",
    "id.completions.recruitingEmail": "招聘電子郵件",
    "id.completions.recruitingEmailPlaceholder":
      "你想嘗試招聘哪些人員？例如「我們全新社交正念應用程式的資深前端工程師」",
    "id.completions.redoAriaLabel": "前往下一個 AI 回應",
    "id.completions.salesEmail": "銷售電子郵件",
    "id.completions.salesEmailPlaceholder":
      "你銷售的是什麼產品？例如「全新腦力提升補充品營運主管的電子郵件」",
    "id.completions.simplifyLanguage": "使用更簡單的語言",
    "id.completions.socialMediaPost": "社群媒體貼文",
    "id.completions.socialMediaPostPlaceholder":
      "你想製作什麼內容的社群媒體貼文？例如，「職涯轉換的提示和技巧」",
    "id.completions.summarize": "摘要",
    "id.completions.todoList": "待辦清單",
    "id.completions.todoListKeywords": "待辦事項 待辦清單",
    "id.completions.todoListPlaceholder":
      "你想製作什麼內容的待辦清單？例如，「建立新的棋盤類遊戲」",
    "id.completions.translate": "翻譯",
    "id.completions.translateChinese": "中文",
    "id.completions.translateDutch": "荷蘭文",
    "id.completions.translateEnglish": "英文",
    "id.completions.translateFilipino": "菲律賓語",
    "id.completions.translateFrench": "法文",
    "id.completions.translateGerman": "德文",
    "id.completions.translateIndonesian": "印尼文",
    "id.completions.translateItalian": "義大利文",
    "id.completions.translateJapanese": "日文",
    "id.completions.translateKorean": "韓文",
    "id.completions.translateLanguage": "選擇語言",
    "id.completions.translatePortuguese": "葡萄牙文",
    "id.completions.translateRussian": "俄文",
    "id.completions.translateSpanish": "西班牙文",
    "id.completions.translateTagalog": "他加祿語",
    "id.completions.translateVietnamese": "越南文",
    "id.completions.undoAriaLabel": "前往上一個 AI 回應",
    "id.completions.writeWithAI": "開始用 AI 撰寫",
    "identityAndProvisioning.accountAuth.byline":
      "自訂使用者存取 SAML 單一登入的工作區。",
    "identityAndProvisioning.accountAuth.option.enforced": "僅限 SAML 單一登入",
    "identityAndProvisioning.accountAuth.option.notEnforced": "任何方式",
    "identityAndProvisioning.accountAuth.title": "登入方式",
    "identityAndProvisioning.claimWorkspaces.actions.recoverSpace": "恢復",
    "identityAndProvisioning.claimWorkspaces.button": "瀏覽工作區",
    "identityAndProvisioning.claimWorkspaces.buttonEmpty": "沒有工作區",
    "identityAndProvisioning.claimWorkspaces.errorByline": "載入工作區時出錯",
    "identityAndProvisioning.claimWorkspaces.freePlan": "免費版",
    "identityAndProvisioning.claimWorkspaces.message":
      "宣告以驗證網域建立的工作區，或是要求擁有者使用外部網域",
    "identityAndProvisioning.claimWorkspaces.summaryByline":
      "{subscriptionTier} · {memberCount, plural, one {{memberCount} 位成員} other {{memberCount} 位成員}}",
    "identityAndProvisioning.claimWorkspaces.table.admins": "工作區擁有者",
    "identityAndProvisioning.claimWorkspaces.table.createdAt": "建立時間",
    "identityAndProvisioning.claimWorkspaces.table.createdBy": "建立者",
    "identityAndProvisioning.claimWorkspaces.table.empty":
      "沒有可宣告的工作區。",
    "identityAndProvisioning.claimWorkspaces.table.name": "工作區",
    "identityAndProvisioning.claimWorkspaces.table.pendingClaim": "待處理",
    "identityAndProvisioning.claimWorkspaces.table.pendingExplanation":
      "工作區擁有可可聯絡此電子郵件進行查詢",
    "identityAndProvisioning.claimWorkspaces.table.pendingTransfer": "待處理",
    "identityAndProvisioning.claimWorkspaces.table.pendingWorkspaceClaim.Explanation":
      "已開始處理工作區宣告要求。",
    "identityAndProvisioning.claimWorkspaces.table.pendingWorkspaceTransferExplanation":
      "等待 {name} 將工作區轉移至外部帳號。",
    "identityAndProvisioning.claimWorkspaces.table.recoverSpace": "恢復",
    "identityAndProvisioning.claimWorkspaces.title": "宣告工作區",
    "identityAndProvisioning.claimWorkspaces.tooltip": "沒有可供宣告的工作區",
    "identityAndProvisioning.claimWorkspaces.users.empty": "已刪除的使用者",
    "identityAndProvisioning.claimWorkspaces.users.emptyTooltip":
      "自 {domain} 刪除的使用者",
    "identityAndProvisioning.claimWorkspaces.users.name":
      "{remainingCount, plural, other {{firstUser} <gray>+{remainingCount}</gray>}}",
    "identityAndProvisioning.createAccount.byline":
      "自動為透過 SAML 單一登入登陸的新使用者建立 Notion 帳號。",
    "identityAndProvisioning.createAccount.title": "自動建立帳號",
    "identityAndProvisioning.deleteWorkspaces.deletionModal.tooltipExplanation":
      "已刪除工作區的工作區擁有者可以聯絡此電子郵件進行查詢",
    "identityAndProvisioning.editSamlConfig.acsByline":
      "在 IDP 的 SAML 配置中輸入此內容。",
    "identityAndProvisioning.editSamlConfig.acsTitle":
      "判斷提示取用者服務 (ACS) URL",
    "identityAndProvisioning.editSamlConfig.byline":
      "透過你的身分提供商 (IDP) 設定 Notion 工作區的 SAML 單一登入。<guidelink>了解更多</guidelink>。",
    "identityAndProvisioning.editSamlConfig.cancel": "取消",
    "identityAndProvisioning.editSamlConfig.enableSaml": "啟用 SAML",
    "identityAndProvisioning.editSamlConfig.feedback.empty": "此欄位無法留白",
    "identityAndProvisioning.editSamlConfig.feedback.signed_request":
      "無法簽署要求",
    "identityAndProvisioning.editSamlConfig.idpTitle": "身分提供商詳細資料",
    "identityAndProvisioning.editSamlConfig.idpUrl": "身分提供商 URL",
    "identityAndProvisioning.editSamlConfig.idpUrlByline":
      "輸入你的 IDP 提供的值。",
    "identityAndProvisioning.editSamlConfig.idpXml": "身分提供商詮釋資料 XML",
    "identityAndProvisioning.editSamlConfig.saveChanges": "儲存變更",
    "identityAndProvisioning.editSamlConfig.title": "SAML 單一登入",
    "identityAndProvisioning.emailDomainsSection.byline":
      "任何使用具有驗證網域之電子郵件的使用者可以使用 SAML 單一登入。",
    "identityAndProvisioning.emailDomainsSection.title": "已驗證的電子郵件網域",
    "identityAndProvisioning.managedUsers.button": "管理使用者",
    "identityAndProvisioning.managedUsers.message":
      "管理使用你的驗證網域的帳號。",
    "identityAndProvisioning.managedUsers.table.access": "存取權限",
    "identityAndProvisioning.managedUsers.table.empty": "找不到使用者。",
    "identityAndProvisioning.managedUsers.table.lastActive": "前次使用",
    "identityAndProvisioning.managedUsers.table.lastActive.unknown": "沒有活動",
    "identityAndProvisioning.managedUsers.table.user": "使用者",
    "identityAndProvisioning.managedUsers.table.userAccess.cellTitle":
      "{remainingCount, plural, other {{firstWorkspaceName}<gray>剩餘 {remainingCount} 個</gray>}}",
    "identityAndProvisioning.managedUsers.table.userAccess.noWorkspaces":
      "沒有工作區",
    "identityAndProvisioning.managedUsers.table.userAccess.numMembers":
      "{plan} · {numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    "identityAndProvisioning.managedUsers.table.userAccess.numMembersLowerEndRange":
      "{plan} · {lowerEnd}+ 位成員",
    "identityAndProvisioning.managedUsers.table.userAccess.numMembersRange":
      "{plan} · {lowerEnd} 到 {higherEnd} 位成員",
    "identityAndProvisioning.managedUsers.title": "使用者管理",
    "identityAndProvisioning.managedUsers.tooltip":
      "你必須驗證網域才能管理其使用者",
    "identityAndProvisioning.samlToggle.byline":
      "任何使用具有驗證網域之電子郵件的使用者可以使用 SAML 單一登錄登入。",
    "identityAndProvisioning.samlToggle.configure": "編輯 SAML 單一登入配置",
    "identityAndProvisioning.samlToggle.disabledTooltipNoVerifiedDomains":
      "驗證網域以啟用 SAML。",
    "identityAndProvisioning.samlToggle.learnMore": "了解 SAML 單一登入",
    "identityAndProvisioning.samlToggle.title": "啟用 SAML 單一登入",
    "identityAndProvisioning.scim.byline": "產生權杖以設定 SCIM。",
    "identityAndProvisioning.scim.title": "SCIM 權杖",
    "identityAndProvisioning.secondaryWorkspaces.empty": "沒有連結的工作區。",
    "identityAndProvisioning.secondaryWorkspaces.message":
      "此 SAML 單一登入配置適用於下列其他工作區。<contactlink>聯絡技術人員</contactlink>以加入或移除工作區。",
    "identityAndProvisioning.secondaryWorkspaces.table.memberCount": "成員",
    "identityAndProvisioning.secondaryWorkspaces.table.members":
      "{count} 位成員",
    "identityAndProvisioning.secondaryWorkspaces.table.name": "名稱",
    "identityAndProvisioning.secondaryWorkspaces.table.name.currentBadge":
      "目前",
    "identityAndProvisioning.secondaryWorkspaces.table.plan": "建立時間",
    "identityAndProvisioning.secondaryWorkspaces.title": "連結的工作區",
    "identityProvisioningSettings.claimWorkspaces.actions.claimAndUpgrade":
      "宣告並升級至企業版",
    "identityProvisioningSettings.claimWorkspaces.actions.claimAndUpgradeCaption":
      "取得此工作區的擁有權並升級至企業版。",
    "identityProvisioningSettings.claimWorkspaces.actions.claimSpace.ineligibleTooltip":
      "工作區不符合認領的資格。",
    "identityProvisioningSettings.claimWorkspaces.actions.deleteSpace":
      "刪除工作區",
    "identityProvisioningSettings.claimWorkspaces.actions.deleteSpace.disabledTooltip":
      "你處於驗證網域後的 14 天通知期內。{br}此功能會在 {numDays, plural, one {{numDays} 天} other {{numDays} 天}}內啟用。",
    "identityProvisioningSettings.claimWorkspaces.actions.deleteSpace.ineligibleTooltip":
      "工作區不符合刪除的資格。",
    "identityProvisioningSettings.claimWorkspaces.actions.deleteSpaceCaption":
      "擁有者會立即失去工作區的存取權限。",
    "identityProvisioningSettings.claimWorkspaces.actions.disabledTooltip":
      "此功能會在 {numDays, plural, one {{numDays} 天} other {{numDays} 天}} 內啟用。",
    "identityProvisioningSettings.claimWorkspaces.actions.externalTransfer":
      "需要變更帳號",
    "identityProvisioningSettings.claimWorkspaces.actions.externalTransferCaption":
      "系統將提示擁有者將工作區擁有權變更至個人帳號。",
    "identityProvisioningSettings.claimWorkspaces.breadcrumb":
      "← 身分和管理分配",
    "identityProvisioningSettings.claimWorkspaces.byline":
      "宣告企業版的驗證網域工作區，或是要求擁有者使用外部網域。",
    "identityProvisioningSettings.claimWorkspaces.claimModal.byline":
      "你即將取得工作區的擁有權並將其升級至企業版。你會是此工作區的擁有者，且所有先前擁有者會降級至成員。",
    "identityProvisioningSettings.claimWorkspaces.claimModal.cancel": "取消",
    "identityProvisioningSettings.claimWorkspaces.claimModal.reviewAndPay":
      "審核並付款",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.buttonCaption":
      "此要求可能需要幾天的處理時間。如需更多資訊，請聯絡<accountmanageremail>帳號管理團隊</accountmanageremail>。",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.byline":
      "你即將取得 {currentWorkspaceName} 的擁有權並將其升級至企業版。你將是工作區擁有者，且現有擁有者將降級為成員。",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.cancel":
      "取消",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.sendRequest":
      "送出要求",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.title":
      "要求工作區宣告",
    "identityProvisioningSettings.claimWorkspaces.claimModal.salesAssisted.toast":
      "已成功要求「{spaceName}」的工作區認領",
    "identityProvisioningSettings.claimWorkspaces.claimModal.selfServe.byline":
      "你即將取得 {currentWorkspaceName} 的擁有權並將其升級至企業版。你將是工作區擁有者，且現有擁有者將降級為成員。",
    "identityProvisioningSettings.claimWorkspaces.claimModal.selfServe.cancel":
      "取消",
    "identityProvisioningSettings.claimWorkspaces.claimModal.selfServe.reviewAndPay":
      "審核並付款",
    "identityProvisioningSettings.claimWorkspaces.claimModal.selfServe.title":
      "宣告工作區",
    "identityProvisioningSettings.claimWorkspaces.claimModal.selfServe.toast":
      "已成功認領「{spaceName}」",
    "identityProvisioningSettings.claimWorkspaces.claimModal.title":
      "宣告工作區",
    "identityProvisioningSettings.claimWorkspaces.claimableSpaceConfirmationModal.cancel":
      "取消",
    "identityProvisioningSettings.claimWorkspaces.multiSpaces": "多位成員",
    "identityProvisioningSettings.claimWorkspaces.personalSpaces": "個人版",
    "identityProvisioningSettings.claimWorkspaces.singleSpaces": "單一成員",
    "identityProvisioningSettings.claimWorkspaces.table.recoverSpace.toast":
      "已成功恢復 {spaceName}。",
    "identityProvisioningSettings.claimWorkspaces.teamSpaces": "團隊版",
    "identityProvisioningSettings.claimWorkspaces.title": "管理工作區",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.byline":
      "你即將永久刪除 {currentWorkspaceName} 及其中的所有內容。工作區擁有者會收到通知。",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.cancel":
      "取消",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.checkboxLabel":
      "我確定要刪除此工作區",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.contactEmail.error":
      "無效的電子郵件地址",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.contactEmail.placeholder":
      "it@example.com",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.contactEmail.title":
      "聯絡電子郵件",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.deleteButton":
      "刪除工作區",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.title":
      "刪除工作區",
    "identityProvisioningSettings.deleteWorkspaces.deletionModal.toast":
      "已成功刪除 {spaceName}。",
    "identityProvisioningSettings.domain.title": "網域管理",
    "identityProvisioningSettings.exportClaimableWorkspaces.button":
      "导出为CSV",
    "identityProvisioningSettings.managedUsers.breadcrumb": "← 身分和管理分配",
    "identityProvisioningSettings.managedUsers.byline":
      "管理使用你的驗證網域的帳號。",
    "identityProvisioningSettings.managedUsers.searchInput.placeholder":
      "搜索姓名、电子邮件或用户ID",
    "identityProvisioningSettings.managedUsers.title": "使用者管理",
    "identityProvisioningSettings.offline.message":
      "請連接網路後管理身分和管理分配設定。",
    "identityProvisioningSettings.recoverWorkspaces.confirmationModal.byline":
      "復原工作區內容和工作區擁有者的存取權限。",
    "identityProvisioningSettings.recoverWorkspaces.confirmationModal.deleteButton":
      "恢復",
    "identityProvisioningSettings.recoverWorkspaces.confirmationModal.title":
      "恢復工作區",
    "identityProvisioningSettings.saml.title": "SAML 單一登入（SSO）",
    "identityProvisioningSettings.scim.title": "SCIM 管理分配",
    "identityProvisioningSettings.secondaryWorkspace.uneditableMessage":
      "網域管理設定與 SAML 單一登入配置由 <bold>{primaryWorkspaceName}</bold> 工作區管理。請瀏覽到該網域，或是聯絡工作區管理員，以編輯驗證網域或單一登入配置。",
    "identityProvisioningSettings.secondaryWorkspace.uneditableTitle":
      "主工作區為 <bold>{primaryWorkspaceName}</bold>。",
    "identityProvisioningSettings.setupInfo.title": "設定資訊",
    "identityProvisioningSettings.transferWorkspaces.transferModal.buttonCaption":
      "此動作無法復原",
    "identityProvisioningSettings.transferWorkspaces.transferModal.byline":
      "你即將要求 1 個工作區的工作區擁有者使用外部 Notion 帳號。他們在變更完成前無法使用工作區。",
    "identityProvisioningSettings.transferWorkspaces.transferModal.cancel":
      "取消",
    "identityProvisioningSettings.transferWorkspaces.transferModal.confirm":
      "確認變更",
    "identityProvisioningSettings.transferWorkspaces.transferModal.contactEmail.error":
      "無效的電子郵件地址",
    "identityProvisioningSettings.transferWorkspaces.transferModal.contactEmail.placeholder":
      "it@example.com",
    "identityProvisioningSettings.transferWorkspaces.transferModal.contactEmail.title":
      "傳送要求者",
    "identityProvisioningSettings.transferWorkspaces.transferModal.selfServe.title":
      "需要變更帳號",
    "identityProvisioningSettings.transferWorkspaces.transferModal.toast":
      "已成功要求「{spaceName}」的帳號變更",
    "imageBlock.embedImage.button.label": "嵌入圖片",
    "imageBlock.linkInput.caption": "適用於網路上的任何圖片。",
    "imageBlock.linkInput.placeholder": "貼上圖片連結…",
    "imageBlock.placeholder": "加入圖片",
    "importActions.asanaImportFailedError.message": "Asana 匯入失敗。",
    "importActions.confluenceImportViaAPIFailedError.message":
      "Confluence 工作區匯入失敗。",
    "importActions.evernoteImportFailedError.message": "Evernote 匯入失敗。",
    "importActions.fileImportFailedError.customSizeTooLarge.message":
      "匯入檔不能超過 {maxSize}。",
    "importActions.fileImportFailedError.sizeTooLarge.message":
      "匯入失敗：檔案超過 5MB。",
    "importActions.importFailedError.message": "匯入失敗。",
    "importActions.importTitle": "匯入 {date}",
    "importActions.importingFromAsana.loadingMessage":
      "{importingCount, plural, other {正從 Asana 匯入 {importingCount} 個項目中⋯}}",
    "importActions.importingFromConfluenceViaAPI.loadingMessage":
      "正在匯入 Confluence 工作區：{confluenceSpaceKey}。",
    "importActions.importingFromEvernote.loadingMessage":
      "{importingCount, plural, other {正從 Evernote 匯入 {importingCount} 個筆記本中⋯}}",
    "importActions.importingFromTrello.loadingMessage":
      "{importingCount, plural, other {正從 Trello 匯入 {importingCount} 個看板中⋯}}",
    "importActions.importingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles} 個檔案已匯入，共 {totalNumberOfFiles} 個",
    "importActions.importingMultipleFilesInProgress.loadingMessage":
      "{numberOfUploadedFiles} 個檔案已匯入，共 {totalNumberOfFiles} 個",
    "importActions.importingMultipleFilesNotStarted.loadingMessage":
      "0 個檔案已匯入，共 {totalNumberOfFiles} 個",
    "importActions.importingOneFile.loadingMessage": "匯入中…",
    "importActions.trelloImportFailedError.message": "Trello 匯入失敗。",
    "importActions.uploadingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles} 個檔案已上傳，共 {totalNumberOfFiles} 個",
    "importActions.uploadingMultipleFilesInProgress.loadingMessage":
      "{numberOfUploadedFiles} 個檔案已上傳，共 {totalNumberOfFiles} 個",
    "importActions.uploadingMultipleFilesNotStarted.loadingMessage":
      "0 個檔案已上傳，共 {totalNumberOfFiles} 個",
    "importActions.uploadingOneFile.loadingMessage":
      "上傳中…（ {percentComplete}％）",
    "importAsana.databaseProperty.assignedPerson": "指派給",
    "importAsana.databaseProperty.attachedFiles": "附件",
    "importAsana.databaseProperty.completedCheckbox": "完成",
    "importAsana.databaseProperty.dueDate": "到期日",
    "importAsana.databaseProperty.name": "名稱",
    "importAsana.databaseProperty.sectionMultiSelect": "分段",
    "importAsana.databaseProperty.tagsMultiSelect": "標籤",
    "importContactsButton.integrationButton.label":
      "從 {integrationNameWithLogo} 加入",
    "importContactsButton.integrationName": "Slack",
    "importErrors.enexFileNotSupported.message": "不支援 Evernote .enex 匯入。",
    "importEvernote.databaseProperty.createdTime": "建立時間",
    "importEvernote.databaseProperty.name": "名稱",
    "importEvernote.databaseProperty.reminder": "提醒",
    "importEvernote.databaseProperty.tags": "標籤",
    "importEvernote.databaseProperty.updatedTime": "更新時間",
    "importEvernote.databaseProperty.url": "網址",
    "importEvernote.databaseViews.galleryView.title": "圖庫視圖",
    "importEvernote.databaseViews.listView.title": "列表視圖",
    "importEvernote.importTooLarge.textProperty.message":
      "因為項目太大無法匯入。所以我們將其內容轉為檔案上傳了。",
    "importModal.helpButton.label": "了解匯入",
    "importModal.importButton.label": "匯入",
    "importOptions.asanaImportButton.title": "Asana",
    "importOptions.helpButton.tooltip": "了解如何匯入",
    "importOptions.offlineErrorMessage": "請連接網路後匯入。",
    "importOptions.textMarkdown.title": "文字與 Markdown",
    "importPopup.deselectAll": "取消全選",
    "importPopup.selectAll": "全選",
    "importSidebarActions.confirm": "確認",
    "importSidebarActions.getStarted": "立即開始",
    "importSidebarActions.importData": "匯入資料",
    "importSidebarActions.selectData": "選擇專案",
    "importTrello.assignedPersonColumn.propertyName": "指派給",
    "importTrello.attachedFilesColumn.propertyName": "附件",
    "importTrello.database.defaultViewTitle": "預設視圖",
    "importTrello.dueDateColumn.propertyName": "到期",
    "importTrello.labelColumn.propertyName": "標籤",
    "importTrello.nameColumn.propertyName": "名稱",
    "importTrello.statusColumn.propertyName": "狀態",
    "importTrello.statusProperty.backlog": "待辦需求",
    "importTrello.statusProperty.complete": "已完成",
    "importTrello.statusProperty.inProgress": "進行中",
    "importedAsanaResultEmail.emailText":
      "打开<importpagelink>Notion查看</importpagelink>导入的项目和操作。如果您有问题，请参阅<loggerpagelink>导入日志</loggerpagelink>。",
    "importedAsanaResultEmail.subjectLine":
      "已完成从Asana导入{importedProjectCount}个项目。",
    "importsTab.activeImports.importFrom": "匯入來源",
    "importsTab.activeImports.importStatus": "狀態",
    "importsTab.activeImports.importTime": "匯入時間",
    "importsTab.activeImports.title": "有效匯入",
    "importsTab.activeImportsTable.noActiveImports":
      "没有与帐户关联的正在进行的导入。",
    "importsTab.confirm.doneText": "完成",
    "importsTab.fetchingAvailableConnections": "正在获取可用连接...",
    "importsTab.importingData.closeButtonText": "關閉",
    "importsTab.selectData.importCompletedTasks": "匯入已完成的任務",
    "importsTab.selectData.nextButtonText": "下一步",
    "importsTab.subtitle": "你可以自下列任一來源輕鬆匯入資料。",
    "importsTab.title": "匯入資料",
    "importsTab.unsupportedImportsHelperText":
      "如果你的資料位於某個我們尚未支援的位置，你可以嘗試透過 CSV 檔案將其匯入。",
    "inAppNotificationsFollowingOptionsHelpers.allComments.caption":
      "接受所有評論和 @提及 通知",
    "inAppNotificationsFollowingOptionsHelpers.allComments.label": "所有評論",
    "inAppNotificationsFollowingOptionsHelpers.mentionsAndReplies.caption":
      "接收評論回覆和 @提及 通知",
    "inAppNotificationsFollowingOptionsHelpers.mentionsAndReplies.label":
      "回覆和 @提及",
    "inactiveSCIMTokenEmail.subjectLine.text":
      "你的 Notion 帳號：你公用頁面上的已審核內容",
    "inactiveScimTokenEmail.bodyLine1":
      "你的企業版工作區 <b>{spaceName}</b> 使用了不再是工作區管理員之使用者產生的 SCIM API 權杖。",
    "inactiveScimTokenEmail.bodyLine2":
      "你可以前往<b>「設定與成員」→「安全與身份識別」→「SCIM 配置」→「新增權杖」</b>以替換此權杖，然後替換身分提供商的新權杖。",
    "inactiveScimTokenEmail.bodyLine3":
      "感謝你使用 Notion 企業版設定使用者配置，以取得更安全的使用者體驗！",
    "inactiveScimTokenEmail.closingText": "──來自 Notion 團隊",
    "inactiveScimTokenEmail.greetingWithName": "{customerName}，你好！",
    "inactiveScimTokenEmail.greetingWithoutName": "你好！",
    "inactiveScimTokenEmail.helpCenterReference":
      "在<a>此處</a>尋找完整詳細資料。",
    "inactiveScimTokenEmail.imageAltText":
      "顯示 SCIM 權杖功能表，並指出新增權杖按鈕位置的螢幕截圖",
    "inactiveScimTokenEmail.subjectLine.text":
      "替換撤銷 SCIM API 權杖的注意事項",
    "inboxActionsMenu.handleArchive.tooltipMessage": "封存此通知",
    "inboxActionsMenu.markNotificationAsRead.tooltipMessage":
      "將此通知標示為已讀",
    "inboxActionsMenu.markNotificationAsUnread.tooltipMessage":
      "將此通知標示為未讀",
    "inlineCommentButton.commentLabel": "評論",
    "inlineCommentButton.tooltip": "對所選文字發表評論",
    "inlineEquationToken.invalidPlaceholder.label": "無效的方程式",
    "inlineEquationToken.placeholder.label": "新方程式",
    "inlineUnfurlingAuthenticationPopup.caption":
      "你和擁有此 Notion 頁面存取權限的任何人員，都可以查看更豐富的即時更新內容預覽。",
    "inlineUnfurlingAuthenticationPopup.connectButton": "連接",
    "inlineUnfurlingAuthenticationPopup.learnMore.text": "了解更多",
    "inlineUnfurlingAuthenticationPopup.title": "連接到 {integration}",
    "integrationErrors.domainAlreadyVerified.errorMessage":
      "整合已驗證此網域。",
    "integrationGallery.sidebar.searchbar.placeholder": "搜尋整合",
    "integrationGalleryModalDetail.button.install": "安裝",
    "integrationGalleryModalDetail.button.installAnother": "安裝另一個",
    "integrationGalleryModalDetail.madeBy.name": "建置者：{name}",
    "integrationImportPopup.importButton.label": "匯入",
    "integrationInstallerFilter.userSearch.placeholder": "依使用者篩選...",
    "integrations.configureIntegrationModal.integrationName":
      "将{integrationName}连接到Notion",
    "integrations.configureIntegrationModal.integrationTagline":
      "{integrationName}集成是适用于SaaS和云应用的简单智能数据泄露防护解决方案。",
    "integrations.configureIntegrationModal.webhookSecretCode": "隐身代码",
    "integrations.configureIntegrationModal.webhookUrlInput": "Webhook URL",
    "internalUnfurlingMenu.actions.pasteAsLink.title": "以連結形式貼上",
    "internalUnfurlingMenu.actions.pasteAsMention.title": "以提及形式貼上",
    "internalUnfurlingMenu.actions.pasteAsPreview.title": "以預覽形式貼上",
    "invalidNameErrors.errorMessage": "名稱無效。",
    "invalidVATEmail.billingLink.text":
      "<b>請透過<billinglink>此連結</billinglink>更新稅務編號。</b>",
    "invalidVATEmail.body.text":
      "我們會與你聯繫，是因為登記在你檔案中的加值稅 (VAT) 編號或貨物及服務稅 (GST) 編號無效。根據當地法律，如果你沒有有效編號，我們就必須向你收取稅金。",
    "invalidVATEmail.closingText": "感謝你。{br} ──來自 Notion 團隊",
    "invalidVATEmail.greetingWithName": "{customerName}，你好！",
    "invalidVATEmail.greetingWithoutName": "你好！",
    "invalidVATEmail.subjectLine.text": "請更新 Notion 帳號的稅務編號",
    "invisionBlock.embeds.button.label": "嵌入 Invision",
    "invisionBlock.embeds.caption": "適用於 Invision 專案",
    "invisionBlock.placeholder": "嵌入 Invision 專案",
    "inviteEmail.clickToViewPage.message": "按一下這裡查看",
    "inviteEmail.clickToViewWorkspace.message": "按一下這裡查看",
    "inviteEmail.pageInviteMessage": "{name}邀請你加入{pageName}。",
    "inviteEmail.pageTitle.untitledPage": "無標題",
    "inviteEmail.title": "邀請",
    "inviteEmail.workspaceInviteMessage":
      "{name}邀請你加入{workspaceName}工作區。",
    "inviteEmail.workspaceInviteMessageFromBot":
      "你已受邀加入 {workspaceName} 工作區。",
    "inviteEmail.workspaceName.untitledName": "無標題",
    "inviteLinkErrors.inviteLinkDisabled.message":
      "邀請被禁用，請與此工作區的管理員聯絡。",
    "inviteLinkErrors.unableToJoinSpace.message":
      "請詢問管理員直接邀請你進入此空間。",
    "inviteTargetToken.groupTeamOwner.tooltip": "無法將群組加入為團隊擁有者。",
    "inviteTargetToken.guest.tooltip": "將以訪客身分邀請 {email}",
    "inviteTargetToken.verifiedDomain.tooltip":
      "系統會自訂將此人員加入倒工作區，因為 @{domain} 是驗證網域",
    "inviteTargetsSearchRequest.importedContactsSection.title": "從 Slack 匯入",
    "inviteTargetsSearchRequest.inPageSection.title": "頁中",
    "inviteTargetsSearchRequest.inviteNewUser.buttonItem": "邀請 {tokenQuery}",
    "inviteTargetsSearchRequest.noImportedContacts.text":
      "嘗試連線不同的 Slack 工作區或輸入電子郵件地址",
    "inviteTargetsSearchRequest.noImportedContacts.title": "找不到聯絡資訊",
    "inviteTargetsSearchRequest.noSuggestions.text":
      "嘗試連線 Slack 工作區或輸入電子郵件地址",
    "inviteTargetsSearchRequest.noSuggestions.title": "找不到人員",
    "inviteTargetsSearchRequest.notInPageSection.title": "沒有在頁中",
    "inviteTargetsSearchRequest.suggestedEmail.title": "建議",
    "inviteTargetsSearchRequest.suggestedSection.title": "建議",
    "inviteUserButton.addMemberLabel": "加入成員",
    "inviteUserButton.invitePersonLabel": "邀請",
    "inviteUserButton.modalTooltip.guestLimitLine1":
      "你的版本最多可邀請 5 位不同的訪客。",
    "inviteUserButton.modalTooltip.guestLimitLine2": "升級以無限使用。",
    "inviteUserButton.requestMemberLabel": "加入成員",
    "inviteUserButton.tooltip.adminsOnlyMessage": "只有管理員可以加入成員。",
    "inviteUserButton.tooltip.fullAccessOnlyMessage":
      "只有擁有全部權限的人才能加入人員。",
    "inviteUserModal.addMemberMenu.title": "加入成員",
    "inviteUserModal.continueButtonForPersonalPersona.label": "繼續",
    "inviteUserModal.helpButton.caption": "了解如何邀請他人並設定權限",
    "inviteUserModal.inviteButton.label": "邀請",
    "inviteUserModal.inviteButton.upgradeLabel": "升級",
    "inviteUserModal.invitePersonMenu.title": "邀請人員",
    "inviteUserModal.mobile.inviteButton.label": "邀請",
    "inviteUserModal.permissionLevel.title": "權限級別",
    "inviteUserModal.searchDropdown.addPeople": "繼續輸入邀請電子郵件",
    "inviteUserModal.searchDropdown.selectGroupTitle": "選擇一個群組",
    "inviteUserModal.searchDropdown.selectPersonTitle": "選擇人員",
    "inviteUserModal.searchInput.errorMessage": "出了些問題",
    "inviteUserModal.searchInput.placeholder": "搜尋名稱或電子郵件地址",
    "inviteUserModal.searchPersonDropdown.noSearchResultsMessage":
      "在上面輸入或貼上電子郵件地址，以逗號分隔。",
    "inviteUserModal.userAlreadyHasPermissionMessage": "{user}已擁有權限。",
    "inviteUserModal.userAlreadyInvitedMessage": "已邀請{user}。",
    "inviteUserModal.userRole.adminBadge.label": "管理員",
    "inviteUserModal.userRole.adminBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的管理員",
    "inviteUserModal.userRole.guest.tooltip":
      "{ userNameAndEmail} 是此工作區的訪客",
    "inviteUserModal.userRole.guestBadge.label": "訪客",
    "inviteUserModal.userRole.invitedBadge.label": "已受邀",
    "inviteUserModal.userRole.memberBadge.label": "成員",
    "inviteUserModal.userRole.memberBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的成員",
    "inviteUserModal.userRole.membershipAdminBadge.label": "成員資格管理員",
    "inviteUserModal.userRole.membershipAdminBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的成員資格管理員",
    "inviteUserModal.userRole.workspaceOwnerBadge.label": "工作區擁有者",
    "inviteUserModal.userRole.workspaceOwnerBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的工作區擁有者",
    "invoice.chargeItem.changedNumberOfMembers.memberChange.new":
      "({oldTotalMembers} → {newTotalMembers})",
    "invoice.chargeItem.changedNumberOfMembers.membersAdded.new":
      "{numberOfMembersAdded, plural, other {已在 {productName} 中加入 {numberOfMembersAdded} 個成員}}",
    "invoice.chargeItem.changedNumberOfMembers.membersRemoved.new":
      "{numberOfMembersRemoved, plural, other {已從 {productName} 移除 {numberOfMembersRemoved} 個成員}}",
    "invoice.chargeItem.proratedCharge.genericProratedMessage":
      "你目前的發票可能包括與附加元件相關的比例分配。請參閱在此期間計費的總金額，然後按一下上方以進一步了解比例分配的運作方式。",
    "invoice.chargeItem.proratedCharge.switchedAddOns.new":
      "已訂閱 {newProductName}",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly.new":
      "從月付方案變更為年付方案",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly.new":
      "從年付方案變更為月付方案",
    "invoice.chargeItem.proratedCharge.switchedProducts.dateRange":
      "{startDate} - {endDate}",
    "invoice.chargeItem.proratedCharge.switchedProducts.new":
      "已從 {oldProductName} 變更為 {newProductName}",
    "invoice.chargeRecurringItem":
      "{numberOfMembers, plural, other {{planType} {intervalType} x {numberOfMembers} 個成員}}",
    "invoice.date.label": "發票日期",
    "invoice.details.amount": "金額",
    "invoice.details.date": "日期",
    "invoice.details.description": "說明",
    "invoice.details.helpButton.label": "進一步了解按比例計算的費用",
    "invoice.details.label": "詳細資訊",
    "invoice.details.no.prorated.charges": "此計費週期內沒有按比例計算的費用。",
    "invoice.details.no.recurring.charges": "此計費週期內沒有週期性費用。",
    "invoice.details.prorated.charges.explanation":
      "如果你變更方案，或者加入或移除工作區成員，Notion 會將你之前的成員人數或方案計入帳單，並根據新成員人數或方案所剩餘的時間向你收費。",
    "invoice.details.recurring.charges.explanation":
      "如果你續訂訂閱，Notion 會按計費週期向你收費。",
    "invoice.details.subtotal": "小計",
    "invoice.details.taxLanguage.explanation":
      "稅金會因你的所在管轄區而異。如果貴公司位於美國，則稅金與州及地方銷售稅相關。如果貴公司位於加拿大，則稅金會以魁北克銷售稅 (QST) 表示。如果貴公司位於歐盟、英國或俄羅斯，稅金以增值稅 (VAT) 表示。如果你位於歐盟或英國，且不需支付 VAT，則在收到此發票時，其相關服務視為已供應，且根據條文 196 理事會指令 2006/112/EC，客戶必須在自己所屬管轄區內以反向計費方式自行呈報 VAT。",
    "invoice.details.taxLanguage.explanation.ca": "CA QST: NR00012289",
    "invoice.details.taxLanguage.explanation.ru.inn": "RU INN: 9909540024",
    "invoice.details.taxLanguage.explanation.ru.kpp": "RU KPP: 997789001",
    "invoice.details.taxLanguage.explanation.vat": "EU VAT: EU528003828",
    "invoice.intervalType.monthly": "每月",
    "invoice.intervalType.yearly": "每年",
    "invoice.memberCount":
      "{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
    "invoice.number.label": "發票號碼",
    "invoice.payment.info.stripeLink.downloadReceipt": "按一下即可下載收據",
    "invoice.payment.info.stripeLink.pay": "按一下即可支付賬單",
    "invoice.payment.status.label": "狀態",
    "invoice.paymentInfo.label": "付款",
    "invoice.pdf.title": "Notion 發票 {date}",
    "invoice.planType.addOn.ai": "Notion AI",
    "invoice.planType.business": "商業版",
    "invoice.planType.enterprise": "企業版",
    "invoice.planType.legacy": "舊版",
    "invoice.planType.personal": "個人版",
    "invoice.planType.personalEducation": "教育版",
    "invoice.planType.plus": "加值版",
    "invoice.planType.team": "團隊版",
    "invoice.printOrExportButton.label": "列印或匯出為 PDF",
    "invoice.productName.ai":
      "{billingInterval, select, month {Notion AI 月付方案} year {Notion AI 年付方案} other {Notion AI}}",
    "invoice.productName.business":
      "{billingInterval, select, month {Notion 商業版月付方案} year {Notion 商業版年付方案} other {Notion 商業版}}",
    "invoice.productName.education":
      "{billingInterval, select, month {Notion 教育版月付方案} year {Notion 教育版年付方案} other {Notion 教育版}}",
    "invoice.productName.enterprise":
      "{billingInterval, select, month {Notion 企業版月付方案} year {Notion 企業版年付方案} other {Notion 企業版}}",
    "invoice.productName.legacy":
      "{billingInterval, select, month {Notion 舊月付方案} year {Notion 舊年付方案} other { Notion 舊方案}}",
    "invoice.productName.personal":
      "{billingInterval, select, month {Notion 個人版月付方案} year {Notion 個人版年付方案} other {Notion 個人版}}",
    "invoice.productName.plus":
      "{billingInterval, select, month {Notion 加值版月付方案} year {Notion 加值版年付方案} other {Notion 加值版}}",
    "invoice.productName.singlePlayerPlus":
      "{billingInterval, select, month {Notion 加值版月付方案} year {Notion 加值版年付方案} other {Notion 加值版}}",
    "invoice.recipient.billing.label": "記帳對象",
    "invoice.recurringDate": "{startDate} - {endDate}",
    "invoice.status.not_paid": "未支付",
    "invoice.status.paid": "已付費",
    "invoice.status.upcoming": "下一個帳單・尚未到期",
    "invoice.summary.amountDue.label": "已到期",
    "invoice.summary.credits": "點數",
    "invoice.summary.prorated.charges": "按比例計算的費用",
    "invoice.summary.prorated.charges.credits": "按比例計算的費用和點數",
    "invoice.summary.prorated.charges.explanation":
      "計費週期內成員和方案變更的部分費用。",
    "invoice.summary.recurring.charges": "週期性方案費用",
    "invoice.summary.recurring.charges.explanation":
      "計費週期內 Notion 方案的續訂費用。",
    "invoice.summary.tax": "稅務",
    "invoice.title": "Notion",
    "invoice.title.label": "發票",
    "invoice.total.label": "應付總額",
    "invoice.upcomingInvoicePlaceholder": "下一期賬單",
    "invoice.workspace.label": "工作區",
    "invoiceErrors.invoiceNotFound.message":
      "你可能需要<loginlink>登入</loginlink>進行查看。",
    "invoiceErrors.invoiceNotFound.title": "找不到賬單",
    "joinedTeam.confirmationMessage": "已加入 {teamName}",
    "languagePicker.betaBadge": "Beta 版",
    "languagePicker.captions.chineseS": "簡體中文",
    "languagePicker.captions.chineseT": "繁體中文",
    "languagePicker.captions.danishDk": "丹麥文",
    "languagePicker.captions.dutchNl": "荷蘭文",
    "languagePicker.captions.englishUS": "英文（美國）",
    "languagePicker.captions.finnishFi": "芬蘭文",
    "languagePicker.captions.frenchFr": "法文",
    "languagePicker.captions.germanDE": "德文",
    "languagePicker.captions.japaneseJa": "日文",
    "languagePicker.captions.koreanKo": "韓文",
    "languagePicker.captions.norwegianNo": "挪威文",
    "languagePicker.captions.portugueseBr": "葡萄牙文（巴西）",
    "languagePicker.captions.pseudolocale": "虛擬地區設定",
    "languagePicker.captions.spanishEs": "西班牙文（西班牙）",
    "languagePicker.captions.spanishLatam": "西班牙文（拉丁美洲）",
    "languagePicker.captions.swedishSe": "瑞典文",
    "languagePicker.changeLanguage.confirmationMessage":
      "確定要將語言更新為 {language} 嗎？",
    "languagePicker.changeLanguage.updateButton.label": "更新內容",
    "languageRegionSettings.language.label": "語言",
    "languageSettings.formatsSection.title": "格式",
    "languageSettings.languageSection.title": "語言與地區",
    "languageSettings.languageSwitcher.subtitle": "更改用戶界面的語言。",
    "languageSettings.offline.message": "請連接網路以設定語言和地區。",
    "legacyPlan.label": "舊定價方案",
    "legacyPlan.title": "舊定價方案",
    "linkMention.reload": "重新載入提及",
    "linkPreview.reload": "重新載入預覽",
    "linkToCollectionBlock.input.placeholder": "搜尋資料庫…",
    "linkToCollectionBlock.menuItem.noResults.label": "沒有結果",
    "linkToCollectionBlock.menuItem.noResults.title": "選擇資料庫",
    "linkToCollectionBlock.menuItem.showResults.title": "選擇資料庫",
    "linkToPageBlock.noSearchResults": "沒有結果",
    "linkToPageBlock.searchPlaceholder": "搜尋頁面…",
    "linkToPageBlock.selectPrompt": "選擇頁面",
    "linkToPageBlock.selectPrompt.withContents": "選擇頁面",
    "loadingSpinner.label": "載入中…",
    "localDatabase.erroMessages.noDiskSpaceRemaining":
      "沒有剩餘的磁碟空間。如果不能解決問題，聯絡支援人員。",
    "localDatabase.erroMessages.noDiskSpaceRemainingBrowserLimit":
      "沒有剩餘的磁碟空間。你的瀏覽器設定可能限制了 Notion 可以使用的儲存空間。如果不能解決問題，請聯絡支援人員。",
    "localDatabase.errorFixes.chromeSettingsDamaged":
      "你的 Chrome 個人資料可能已損壞。如果你變更了 chrome:// flags，請重新設定，然後重新啟動瀏覽器。如果問題仍然存在，請嘗試建立新的 Chrome 使用者。如果不能解決問題，請聯絡支援人員。",
    "localDatabase.errorFixes.chromeUpgradeCorruptedSettings":
      "你的 Chrome 個人檔案可能已毀損。如需更為連貫的體驗，請下載 Notion 電腦版應用程式：https://notion.so/desktop",
    "localDatabase.errorFixes.firefoxSettingsDamaged":
      "你的 Firefox 個人資料可能已損壞。造訪 https://firefox-storage-test.glitch.me/ 進行診斷。如果不能解決問題，請聯絡支援人員。",
    "localDatabase.errorFixes.helpAndSupportPrompt":
      "Notion 的本機儲存可能損壞了。請參閱 (?) > 說明與支援 > 重置 Notion。如果不能解決問題，請聯絡支援人員。",
    "localDatabase.errorFixes.reloadAllTabs":
      "嘗試關閉並重新打開所有 Notion 的標籤頁或視窗。如果不能解決問題，請聯絡支援人員。",
    "localDatabase.errorFixes.reloadThisTab":
      "嘗試重新載入 Notion。如果不能解決問題，請聯絡支援人員。",
    "login.mfa.backupCode.anotherMethod": "嘗試另一種方式",
    "login.mfa.backupCode.verifyCodeButton": "繼續",
    "login.mfa.backupCode.verifyCodeHeader": "輸入未使用的一次性備用代碼",
    "login.mfa.backupCode.verifyCodeTitle": "驗證您的身份",
    "login.mfa.methodChooser.activeSection.useAuthenticator.button.message":
      "使用「{friendlyName}」的代碼",
    "login.mfa.methodChooser.activeSection.useAuthenticator.button.title":
      "驗證器代碼",
    "login.mfa.methodChooser.activeSection.useBackupCode.button.message":
      "使用一次性備用代碼",
    "login.mfa.methodChooser.activeSection.useBackupCode.button.title":
      "使用備用代碼",
    "login.mfa.methodChooser.activeSection.usePhoneNumber.button.message":
      "傳送代碼到 {phoneHint}",
    "login.mfa.methodChooser.activeSection.usePhoneNumber.button.title":
      "以簡訊傳送代碼給我",
    "login.mfa.methodChooser.anotherAccount": "登入另一個帳號",
    "login.mfa.methodChooser.chooseMethodTitle": "驗證您的身份",
    "login.mfa.methodChooser.needHelp": "需要幫助嗎？",
    "login.mfa.mfaPrompt.needHelp": "需要幫助嗎？",
    "login.mfa.mfaPrompt.needHelp.mobileNative": "需要雙步驟驗證的使用協助？",
    "login.mfa.sms.anotherMethod": "嘗試另一種方式",
    "login.mfa.sms.verifyCodeButton": "繼續",
    "login.mfa.sms.verifyCodeHeader":
      "輸入傳送到 {phoneHint} 的代碼以繼續。<resend>重新傳送</resend>",
    "login.mfa.sms.verifyCodeTitle": "驗證您的身份",
    "login.mfa.totp.anotherMethod": "嘗試另一種方式",
    "login.mfa.totp.verifyCodeButton": "繼續",
    "login.mfa.totp.verifyCodeHeader": "輸入驗證器應用程式的一次性代碼",
    "login.mfa.totp.verifyCodeTitle": "驗證您的身份",
    "loginActions.dialogError.logoutUnsavedChanges.confirmButton.label":
      "放棄編輯並登出",
    "loginActions.dialogError.logoutUnsavedChanges.message":
      "你尚未儲存變更。如果你立即登出，即會遺失變更。",
    "loginActions.googleLoginPopupModal.title": "Google 登入",
    "loginActions.loggingInWithApple.errorMessage":
      "嘗試使用 Apple 登入時出了點問題。",
    "loginActions.loggingInWithApple.loadingMessage": "使用 Apple 登入中…",
    "loginActions.loggingInWithGoogle.errorMessage":
      "嘗試使用 Google 登入時出現問題。",
    "loginActions.loggingInWithGoogle.loadingMessage": "使用 Google 登入中…",
    "loginActions.login.pending.message": "登入 Notion 中…",
    "loginActions.login.redirect.saml.message":
      "需要 SAML SSO。重新導向到設定的登入頁面。",
    "loginActions.signup.pending.message": "建立 Notion 帳戶中…",
    "loginDesktopPage.title": "登入",
    "loginErrors.adminModeUnsupported.message": "不適用於管理員模式",
    "loginErrors.bannedNetwork.message":
      "你的 Notion 連線出現問題。請在應用程式內或透過 team@makenotion.com 聯絡支援服務。",
    "loginErrors.bannedUser.message": "你的帳戶出現問題。請聯絡客戶支援。",
    "loginErrors.csrf.message":
      "如果你要透過連結登入，請在你請求連結的相同瀏覽器開啟連結。",
    "loginErrors.generic.message": "登入時出現問題。",
    "loginErrors.invalidEmail.message": "無效的電子郵件地址。",
    "loginErrors.invalidPassword.message": "無效的密碼",
    "loginErrors.restrictedRegion.message":
      "你正試圖從受限制的司法管轄區存取我們的服務。",
    "loginErrors.tryAgain.message": "請再次登入。",
    "loginForm.continueWithEmailButton.label": "用電子郵件地址登入",
    "loginForm.continueWithLoginCodeButton.label": "用臨時登入碼登入",
    "loginForm.continueWithPasswordButton.label": "用密碼登入",
    "loginForm.continueWithReverifyButton.label": "驗證電子郵件地址",
    "loginForm.continueWithSAMLButton.label": "用 SAML 登入",
    "loginForm.createNewAccountButton.label": "建立新帳號",
    "loginForm.disclaimer":
      "按一下上方的「用 Google 帳號 / 電子郵件地址 / SAML 登入」，即表示你已經閱讀和理解，並同意 Notion 的<termsandconditionslink>條款與條件</termsandconditionslink>和<privacypolicylink>隱私政策</privacypolicylink>。",
    "loginForm.emailInput.label": "電子郵件地址",
    "loginForm.emailInput.placeholder": "輸入你的電子郵件地址…",
    "loginForm.emailInput.placeholder.signupWorkEmailExperimentGroup.v1":
      "name@company.com",
    "loginForm.forgotPasswordLink": "忘記密碼？",
    "loginForm.loginCodeInput.label": "登入碼",
    "loginForm.loginLinkSentMessage":
      "我們剛剛向你傳送了一個臨時登入連結。{br}請檢察你的收件匣。",
    "loginForm.loginWithAppleButton.label": "繼續用 Apple 登入",
    "loginForm.loginWithGoogleButton.label": "用 Google 帳號登入",
    "loginForm.otherLoginOptions.continueWithEmail":
      "你也可以<emailloginlink>使用電子郵件</emailloginlink>以繼續",
    "loginForm.otherLoginOptions.continueWithEmailOrSAML":
      "你也可以<emailloginlink>使用電子郵件</emailloginlink>或<samlloginlink>使用 SAML SSO</samlloginlink> 以繼續",
    "loginForm.otherLoginOptions.continueWithSAML":
      "你也可以<samlloginlink>使用 SAML SSO</samlloginlink> 以繼續",
    "loginForm.passcodeInput.enterCodePlaceholder": "輸入登入碼",
    "loginForm.passcodeInput.enterPasswordPlaceholder": "輸入密碼…",
    "loginForm.passcodeInput.enterSignupCodePlaceholder": "輸入註冊碼",
    "loginForm.passcodeInput.pasteCodePlaceholder": "貼上登入碼",
    "loginForm.passcodeInput.pasteSignupCodePlaceholder": "貼上註冊碼",
    "loginForm.passcodeInput.reverifyPlaceholder": "貼上驗證碼",
    "loginForm.passwordInput.label": "密碼",
    "loginForm.passwordResetSentMessage": "檢查收件匣中的連結以重置密碼。",
    "loginForm.reverifyPasswordLabel":
      "<emailverifiedtext>電子郵件地址已驗證</emailverifiedtext>。你可以繼續使用密碼登入。",
    "loginForm.reverifySentMessage":
      "此帳號需要電子郵件驗證。請檢查你的收件匣並貼上驗證碼。",
    "loginForm.sendResetLink": "傳送重置連結",
    "loginForm.signUpCodeInput.label": "註冊碼",
    "loginForm.socialProofText": "深受超過 100,000 個團隊信賴",
    "loginForm.temporaryPasscodeSentMessage":
      "我們剛剛向你傳送了一個臨時登入碼。{br}請檢查你的收件匣。",
    "loginForm.temporaryPasscodeSentMessageNoAccount":
      "我們剛剛向你傳送了一個臨時註冊碼。請檢查你的收件匣並把註冊碼粘貼在下面。",
    "loginForm.verificationCodeInput.label": "驗證碼",
    "loginForm.workEmailInput.label": "工作用電子郵件地址",
    "loginLinkSubjectLine.loginCode.subjectLine": "你的 Notion 登入連結在這裡",
    "loginMobileNative.descriptionOfNotion.message":
      "Notion是個可以用於<mediumfont>筆記</mediumfont> 、 <mediumfont>專案管理</mediumfont>和<mediumfont>知識庫</mediumfont>的協作工具",
    "loginMobileNative.footer.helpButton.label": "需要幫忙？",
    "loginMobileNative.footer.privacyAndTermsButton.label": "隱私與條款",
    "loginMobileNative.goBackButton.label": "回退",
    "loginMobileNative.welcomeMessage": "歡迎來到 Notion！ 👋",
    "loginPage.pageTitle": "登入",
    "loginPage.title": "登入",
    "loginPermissions.googleContactPermissions.checkboxUnchecked.message":
      "我不想分享 Google 聯絡人",
    "loginPermissions.googleContactPermissions.message":
      "我們要求讀取你的 Google 聯絡人，以便在邀請或提及人員時為你提供更好的體驗。",
    "loomBlock.embed.caption": "適用於啟用了公開存取的 Loom 連結",
    "loomBlock.placeholder": "嵌入 Loom",
    "manageActiveSessions.accountDeletionSetting.label":
      "永久刪除帳號並從所有工作區移除存取權限。",
    "manageActiveSessions.confirmationModal.close": "關閉",
    "manageActiveSessions.confirmationModal.withEmail":
      "你已從 {email} 的其他活動會話中登出。",
    "manageActiveSessions.confirmationModal.withoutEmail":
      "你已經從其他活動會話中登出了。",
    "manageActiveSessions.logOutActiveSessions.button": "登出",
    "manageActiveSessions.logOutActiveSessions.label":
      "在這個裝置之外的其他裝置登出使用中的其餘工作階段。",
    "manageActiveSessions.title": "從所有裝置登出",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.acceptButton.label":
      "撤銷權杖",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.cancelButton.label": "取消",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.description":
      "撤銷權杖後，使用此權杖的現有 SCIM 配置將不再有效，且你必須向他們提供新權杖。",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.message":
      "確定要撤銷此權杖嗎？",
    "manageSCIMTokenTable.colums.addedBy.selfIndicator": "（你）",
    "manageSCIMTokenTable.noTokensFound.message": "沒有生效的 SCIM 權杖。",
    "manageScimTokenTable.OutdatedWarningIcon.tooltip":
      "過期權杖。撤銷此權杖並產生新權杖以檢視其內容。",
    "manageScimTokenTable.columnTitle.addedBy": "新增者",
    "manageScimTokenTable.columnTitle.created": "建立時間",
    "manageScimTokenTable.columnTitle.token": "權杖",
    "manageScimTokenTable.renderTokenThatCannotBeViewed.tooltip":
      "只有權杖建立者才能檢視此權杖。",
    "manageTeamsAccessFilter.accessFilter.filterAllTeams": "任何",
    "manageTeamsAccessFilter.accessFilter.filterClosedTeams": "封閉",
    "manageTeamsAccessFilter.accessFilter.filterOpenTeams": "開放",
    "manageTeamsAccessFilter.accessFilter.filterPrivateTeams": "私人",
    "manageTeamsAccessFilter.accessSelectPlaceolder": "存取權限",
    "manageTeamsArchivedFilter.archivedFilter.hideArchivedTeams": "有效",
    "manageTeamsArchivedFilter.archivedFilter.showArchivedTeams": "已歸檔",
    "manageTeamsArchivedFilter.archivedSelectPlaceolder": "已歸檔",
    "manageTeamsBrowser.newTeamButton.text": "新團隊空間",
    "manageTeamsBrowser.subtitle": "在此管理本身擁有存取權限的所有團隊空間",
    "manageTeamsBrowser.title": "管理團隊空間",
    "manageTeamsFilterRow.searchFilter.placeholder": "搜尋團隊空間...",
    "manageTeamsHelpers.confirmChangeSecuritySetting.allowTeamCreation":
      "是否確定要允許此工作區的所有成員可以建立團隊？",
    "manageTeamsHelpers.confirmChangeSecuritySetting.disableTeamCreation":
      "是否確定要僅限管理員建立團隊空間？",
    "manageTeamsHelpers.confirmChangeSecuritySetting.workspaceOwners.disableTeamCreation":
      "是否確定要僅限工作區擁有者建立團隊空間？",
    "manageTeamsOwnerFilter.filterTitle.onlyOrphanedTeams": "擁有者：無",
    "manageTeamsOwnerFilter.filterTitle.unset": "擁有者",
    "manageTeamsOwnerFilter.filterTitle.withSpecifiedOwner":
      "擁有者：{teamOwnerName}",
    "manageTeamsOwnerFilter.noOwnersFilterOption": "沒有擁有者的團隊空間",
    "manageTeamsOwnerFilter.searchOwner.placeholder": "搜尋團隊空間擁有者...",
    "manageTeamsOwnerFilter.searchOwner.resultsTitle": "選擇使用者",
    "manageTeamsOwnersCell.nMoreOwnersLabel": "+{numAdditionalOwners}",
    "manageTeamsOwnersCell.noOwners": "沒有擁有者",
    "manageTeamsTable.archivedTag": "已歸檔",
    "manageTeamsTable.columnTitle.access": "存取權限",
    "manageTeamsTable.columnTitle.members": "成員",
    "manageTeamsTable.columnTitle.owners": "擁有者",
    "manageTeamsTable.columnTitle.updated": "已更新",
    "manageTeamsTable.emptyManageTeamTableDisclaimer.noTeamsExist":
      "找不到任何團隊空間。",
    "manageTeamsTable.emptyManageTeamTableDisclaimer.teamsFilteredOut":
      "找不到任何團隊空間。<linkbutton>重設你的篩選器</linkbutton>",
    "manageTeamsTable.numMembersCell":
      "{numTeamMembers, plural, other {位成員}}",
    "manageTeamsTableColumnData.joinedLabel": "正在参与",
    "manageTeamsTableColumnData.numMembersLabel":
      "{numMembers，plural，other{成员{numMembers}名称}}",
    "manageTeamspacesTable.columnTitle.teamspace": "團隊空間",
    "marginComments.collapsed.expand.label": "展開",
    "marginComments.collapsed.numComments.count":
      "{numComments, plural, other {{numComments} 則評論}}",
    "mathParseHelpers.errorPosition.message": "字元 {position}",
    "mathParseHelpers.fullError.message": "{errorBody} ({postfix})",
    "mathParseHelpers.syntax.error": "{token} 部分有語法錯誤",
    "mathParseHelpers.tokenExpected.error": "預期的 {token}",
    "mathParseHelpers.unexpected.error": "非預期的 {token}",
    "mathParseHelpers.unexpectedEndOfExpression.error": "非預期的運算式結尾",
    "mediaPicker.chooseFile.button.label": "選擇檔案",
    "mediaPicker.chooseImage.buttonText": "上傳檔案",
    "mediaPicker.chooseVideo.buttonText": "選擇一支影片",
    "mediaPicker.embedPlaceholder.text": "以 https://… 格式貼上",
    "mediaPicker.embedTab.embedLinkButtonText": "連結",
    "mediaPicker.emojiFilter.text": "篩選…",
    "mediaPicker.emojiTab.random": "隨機",
    "mediaPicker.errorMessage": "糟糕，出了些問題。",
    "mediaPicker.invalidImageDrop.wrongTypeErrorMessage":
      "抱歉，不支援該檔案類型。",
    "mediaPicker.maximumFileSize.notice": "每個檔案的大小不超過 {filesize}MB。",
    "mediaPicker.menuItem.choosePagesFromAccount.label": "從{accountName}選擇",
    "mediaPicker.menuItem.connectFirstBoxAccount.caption":
      "尋找並嵌入你的 Box 檔案。",
    "mediaPicker.menuItem.connectFirstBoxAccount.label": "連接 Box 帳號",
    "mediaPicker.menuItem.connectFirstGoogleAccount.caption":
      "尋找並嵌入 Google 雲端硬碟中的檔案",
    "mediaPicker.menuItem.connectFirstGoogleAccount.label":
      "連接到 Google 帳號",
    "mediaPicker.menuItem.connectMoreBoxAccounts.label": "連接另一個帳號",
    "mediaPicker.menuItem.connectMoreGoogleAccounts.label": "連接另一個帳號",
    "mediaPicker.mobileCloseButton.label": "關閉",
    "mediaPicker.mobileRemoveButton.label": "移除",
    "mediaPicker.tabs.browse": "瀏覽",
    "mediaPicker.tabs.custom": "自訂",
    "mediaPicker.tabs.embedLink": "嵌入連結",
    "mediaPicker.tabs.emoji": "表情符號",
    "mediaPicker.tabs.gallery": "圖庫",
    "mediaPicker.tabs.icon": "圖示",
    "mediaPicker.tabs.remove": "移除",
    "mediaPicker.tabs.upload": "上傳",
    "mediaPicker.unsplash.byAuthor":
      "作者 <inlinetextlink>{authorName}</inlinetextlink>",
    "mediaPicker.unsplash.noResultsText": "未找到結果。",
    "mediaPicker.unsplash.searchText": "搜尋以尋找更多結果。",
    "mediaPicker.unsplashPlaceholder.text": "搜尋圖片…",
    "memberIntegrationSettings.table.default.title": "所有整合",
    "memberSettingsButton.goOnline.prompt": "請連接網路後管理成員。",
    "memberSettingsButton.mobileMemberSettings.title": "成員",
    "memberSettingsButton.mobileSidebar.label": "成員",
    "memberSettingsButton.rightActionButton.done": "完成",
    "mentionMenu.addPage.prompt2": "輸入以加入或連結頁面…",
    "mentionMenu.createPageSection.title": "新頁面",
    "mentionMenu.date.autocomplete.nextTuesday": "下週二下午 3 點",
    "mentionMenu.date.autocomplete.reminder": "提醒明天上午9點",
    "mentionMenu.date.autocomplete.today": "今天",
    "mentionMenu.date.prompt2": "提及日期…",
    "mentionMenu.date.remindAtDateTime": "提醒{dateTime}",
    "mentionMenu.dateSection.title": "日期",
    "mentionMenu.group.caption":
      "{numMembersInGroup, plural, other {{numMembersInGroup} 位成員}}",
    "mentionMenu.groupSection.title": "群組",
    "mentionMenu.noSearchResults.title": "沒有結果",
    "mentionMenu.offlineMessage": "連接網路後便可提及人員或頁面。",
    "mentionMenu.page.prompt2": "輸入以連結或加入頁面…",
    "mentionMenu.pageDate.prompt2": "提及頁面或日期…",
    "mentionMenu.pagesSection.title2": "連結到頁面",
    "mentionMenu.peopleSection.title": "人員",
    "mentionMenu.person.prompt2": "提及人員…",
    "mentionMenu.personDate.prompt2": "提及人員或日期…",
    "mentionMenu.personPage.prompt2": "提及人員或頁面…",
    "mentionMenu.personPageDate.prompt2": "提及人員、頁面或日期…",
    "mentionMenu.showMoreResultsButton.title": "其餘 {numberMore} 個結果",
    "mentionMenu.templateVariables.description.me": "複製時的使用者",
    "mentionMenu.templateVariables.description.now": "複製時的時間",
    "mentionMenu.templateVariables.description.today": "複製時的日期",
    "mentionMenu.templateVariables.keywords.me": "我",
    "mentionMenu.templateVariables.keywords.now": "現在",
    "mentionMenu.templateVariables.keywords.today": "今天",
    "mentionMenu.templateVariables.text.me": "我",
    "mentionMenu.templateVariables.text.now": "現在",
    "mentionMenu.templateVariables.text.tday": "今天",
    "menuList.menuListSection.noResult": "沒有結果",
    "mermaidRenderer.error.seeMermaidExamples": "查看 Mermaid 範例",
    "mermaidRenderer.error.unknownError": "未知錯誤： {error}",
    "mfa.createBackupCodes.doThisLater.button.message": "稍後執行",
    "mfa.createBackupCodes.message":
      "記下備用代碼，以免你無法存取手機或驗證應用程式。",
    "mfa.createBackupCodes.seeBackupCodes.button.message": "查看備用代碼",
    "mfa.createBackupCodes.title": "使用備用代碼？",
    "mfa.deleteSetting.cancel.button.message": "取消",
    "mfa.deleteSetting.permanentlyDelete.button.message": "永久刪除",
    "mfa.deleteSetting.sms.header":
      "刪除後，您將再也不會收到傳送至 {phoneHint} 的代碼。<boldtext>確定要刪除嗎？</boldtext>",
    "mfa.deleteSetting.sms.title": "刪除 {phoneHint}",
    "mfa.deleteSetting.totp.header":
      "刪除後，你將再也無法使用 {friendlyName} 產生的代碼。<boldtext>確定要刪除嗎？</boldtext>",
    "mfa.deleteSetting.totp.title": "刪除 {friendlyName}",
    "mfa.regenerateBackupCodes.cancel.button.message": "取消",
    "mfa.regenerateBackupCodes.doThisLater.button.message": "稍後執行",
    "mfa.regenerateBackupCodes.message":
      "如果您遺失存取密碼及第二因素，則可使用備用代碼登入。<boldtext>重新生成新代碼後，現有代碼將無法使用。 </boldtext>",
    "mfa.regenerateBackupCodes.regenerateBackupCodes.button.message":
      "生成新備用代碼",
    "mfa.regenerateBackupCodes.title": "重新生成備用代碼",
    "mfa.saveBackupCodes.downloadAsTextFile.button.message": "下載為文字檔",
    "mfa.saveBackupCodes.message":
      "如果你無法存取電話或驗證應用程式，請記下備用代碼進行登入程序。",
    "mfa.saveBackupCodes.seeBackupCodes.button.message": "查看備用代碼",
    "mfa.saveBackupCodes.title": "儲存備用代碼",
    "mfa.settingModal.message": "提供驗證碼，以便在使用密碼後確認是你本人",
    "mfa.setupComplete.addAnotherMethod.button.message": "加入另一個方式",
    "mfa.setupComplete.confirmation.addMethod.button.message": "加入另一種方式",
    "mfa.setupComplete.confirmation.header":
      "每次輸入密碼時，Notion 都會詢問驗證碼以確認您的身分。",
    "mfa.setupComplete.confirmation.viewTwoStepMethods.button.message":
      "查看雙步驟方式",
    "mfa.setupComplete.message":
      "每次輸入密碼時，Notion 都會詢問驗證碼以確認你的身分。",
    "mfa.setupComplete.title": "已開啟驗證器的雙步驟驗證",
    "mfa.showBackupCodes.codesNotedDown.button.message": "我已記下代碼",
    "mfa.showBackupCodes.downloadAsTextFile.button.message": "下載為文字檔",
    "mfa.showBackupCodes.message": "在安全的位置記下代碼。你只能看一次代碼。",
    "mfa.showBackupCodes.title": "你的備用代碼",
    "mfa.sms.resend.resend.link": "<resend>重新傳送</resend>",
    "mfa.sms.resend.resent.message": "<resent>已重新傳送</resent>",
    "mfa.sms.resend.resent.tooltip":
      "你可以在 {resendTimeout} 秒內再次傳送代碼",
    "mfa.sms.resend.sending.label": "<sending>傳送中</sending>",
    "mfa.sms.setupComplete.confirmation.title": "開啟電話號碼的雙步驟驗證",
    "mfa.totp.setupComplete.confirmation.title": "開啟驗證器的雙步驟驗證",
    "mfa.turnOffMFA.cancel.button.message": "取消",
    "mfa.turnOffMFA.disableMFA.button.message": "關閉雙步驟驗證",
    "mfa.turnOffMFA.header":
      "關閉雙步驟驗證即會在你的帳戶上移除另一層安全性。Notion 只會在你登入期間要求輸入密碼。",
    "mfa.turnOffMFA.lastMFASettingDeleted.header":
      "刪除 {mfaSettingName} 即會關閉雙步驟驗證，並在你的帳戶上移除另一層安全性。Notion 只會在你登入期間要求輸入密碼。",
    "mfa.turnOffMFA.title": "關閉雙步驟驗證",
    "mfa.turnOffMFAComplete.button.message": "完成",
    "mfa.turnOffMFAComplete.header":
      "雙步驟驗證已自你的帳戶移除。Notion 只會在你登入期間要求輸入密碼。",
    "mfa.turnOffMFAComplete.title": "雙步驟驗證已關閉",
    "mfa.turnOnSettings.button.message": "繼續",
    "mfa.turnOnSettings.message": "提供驗證碼，以便在使用密碼後確認是你本人",
    "mfa.turnOnSettings.setupAuthenticator.button.message":
      "在你的驗證應用程式產生一次性代碼",
    "mfa.turnOnSettings.setupAuthenticator.button.title": "驗證器代碼",
    "mfa.turnOnSettings.setupSMS.button.message": "加入另一個電話號碼並驗證",
    "mfa.turnOnSettings.setupSMS.button.title": "以簡訊傳送代碼給我",
    "mfa.turnOnSettings.title": "開啟雙步驟驗證",
    "mfa.updateSettings.activeSection.editMenu.delete.button.message": "刪除",
    "mfa.updateSettings.activeSection.editMenu.editTitle.button.message":
      "編輯標題",
    "mfa.updateSettings.activeSection.title": "有效",
    "mfa.updateSettings.activeSection.useAuthenticator.button.message":
      "剛剛設定",
    "mfa.updateSettings.activeSection.useAuthenticator.button.title":
      "好記的驗證器",
    "mfa.updateSettings.activeSection.useBackupCodes.button.message":
      "當其他方法沒有用時，用於帳號復原",
    "mfa.updateSettings.activeSection.useBackupCodes.button.title":
      "重新產生備用代碼",
    "mfa.updateSettings.activeSection.usePhoneNumber.button.message":
      "(515) 555-1212",
    "mfa.updateSettings.activeSection.usePhoneNumber.button.title":
      "以簡訊傳送代碼給我",
    "mfa.updateSettings.activeSection.useSMS.button.message":
      "設定 {createdTimeNormalized}",
    "mfa.updateSettings.addAnotherPhoneNumber.button.message":
      "驗證另一個電話號碼",
    "mfa.updateSettings.addAnotherPhoneNumber.button.title":
      "加入另一個電話號碼",
    "mfa.updateSettings.addMoreMethodsSection.title": "加入更多方式",
    "mfa.updateSettings.addMoreSection.addAnotherAuthenticator.button.message":
      "驗證另一個驗證應用程式",
    "mfa.updateSettings.addMoreSection.addAnotherAuthenticator.button.title":
      "加入另一個驗證器",
    "mfa.updateSettings.addMoreSection.addAnotherAuthenticator.disabled.button.message":
      "已加入 2 個驗證器，共 2 個",
    "mfa.updateSettings.addMoreSection.addAnotherPhoneNumber.button.message":
      "已加入 {numOfSmsSettings} 支手機，共 2 支",
    "mfa.updateSettings.addMoreSection.addAnotherPhoneNumber.button.title":
      "加入電話號碼",
    "mfa.updateSettings.addMoreSection.addAnotherPhoneNumber.disabled.button.message":
      "已加入 2 支手機，共 2 支",
    "mfa.updateSettings.title": "雙步驟驗證",
    "mfa.updateSettings.turnOffVerification.button.message": "關閉雙步驟驗證",
    "mfaRecoveryEmail.copyPasteCodeNoLink.prompt":
      "下一次登入時複製並貼上此一次性備用代碼：",
    "mfaRecoveryEmail.subjectLine": "你的 Notion 復原備用代碼為 {backupCode}",
    "mfaRecoveryEmail.titleOfEmail": "復原備用代碼",
    "mfaRecoveryEmail.unexpected":
      "如果你意外收到此代碼，請使用 team@makenotion.com 與我們聯絡",
    "miroBlock.embeds.button.label": "嵌入 Miro",
    "miroBlock.embeds.caption": "適用於啟用了公開存取的 Miro 連結",
    "miroBlock.placeholder": "嵌入 Miro",
    "mobile.dismissKeyboardBar.button.label": "完成",
    "mobile.modal.backButton": "返回",
    "mobile.modal.cancelButton": "取消",
    "mobile.modal.doneButton": "完成",
    "mobileActionBar.accessibility.ai": "AI 輔助",
    "mobileActionBar.accessibility.blockColor": "變更區塊顏色",
    "mobileActionBar.accessibility.bold": "粗體",
    "mobileActionBar.accessibility.close": "關閉文字格式化選單",
    "mobileActionBar.accessibility.closeMenu": "關閉選單",
    "mobileActionBar.accessibility.code": "代碼",
    "mobileActionBar.accessibility.comment": "新增評論",
    "mobileActionBar.accessibility.endEditing": "結束編輯",
    "mobileActionBar.accessibility.equation": "新增方程式",
    "mobileActionBar.accessibility.filePicker": "新增圖片",
    "mobileActionBar.accessibility.indent": "縮排區塊",
    "mobileActionBar.accessibility.insertBlock": "新增區塊",
    "mobileActionBar.accessibility.italics": "用斜體字",
    "mobileActionBar.accessibility.link": "新增連結",
    "mobileActionBar.accessibility.mention": "新增提及",
    "mobileActionBar.accessibility.more": "更多區塊動作",
    "mobileActionBar.accessibility.moveDown": "向下移動區塊",
    "mobileActionBar.accessibility.moveUp": "向上移動區塊",
    "mobileActionBar.accessibility.redo": "重新編輯",
    "mobileActionBar.accessibility.strikethrough": "刪除線",
    "mobileActionBar.accessibility.textColor": "文字顏色",
    "mobileActionBar.accessibility.textFormatting": "開啟文字格式化選單",
    "mobileActionBar.accessibility.trash": "刪除區塊",
    "mobileActionBar.accessibility.turnInto": "轉變成區塊",
    "mobileActionBar.accessibility.udno": "取消編輯",
    "mobileActionBar.accessibility.underline": "底線",
    "mobileActionBar.accessibility.unindent": "取消縮排區塊",
    "mobileActionBar.actionMenuTitle.blockColor": "顏色",
    "mobileActionBar.actionMenuTitle.insertBlock": "插入區塊",
    "mobileActionBar.actionMenuTitle.turnInto": "轉換成",
    "mobileActionBar.blockColor.modalTitle": "區塊顏色",
    "mobileActionBar.bold.symbol": "B",
    "mobileActionBar.code.symbol": "程式碼",
    "mobileActionBar.color.buttonTitle": "顏色",
    "mobileActionBar.databaseSection.title": "資料庫",
    "mobileActionBar.insertBlock.modalTitle": "插入區塊",
    "mobileActionBar.italic.symbol": "i",
    "mobileActionBar.link.symbol": "連結",
    "mobileActionBar.more.buttonTitle": "更多",
    "mobileActionBar.strikeThrough.symbol": "S",
    "mobileActionBar.templateButtonTitle": "選擇模版...",
    "mobileActionBar.templates.buttonTitle": "選擇模版…",
    "mobileActionBar.templates.modalTitle": "模版",
    "mobileActionBar.turnInto.buttonTitle": "轉換成",
    "mobileActionBar.turnInto.modalTitle": "轉換成",
    "mobileActionBar.underline.symbol": "底線",
    "mobileAppDownloadStep.button": "下載 Notion",
    "mobileAppDownloadStep.subTitle":
      "在行動版瀏覽器中完成 Notion 設定或下載 {os} 版 Notion。",
    "mobileAppDownloadStep.title": "<boldtext>下載應用程式</boldtext>",
    "mobileCalendarDayMenu.newItemButton.label": "新項目",
    "mobileCalendarDayMenu.noResults.message": "沒有項目",
    "models.BotModel.unnamedBot": "未命名的機器人",
    "moveBlockMenu.TeamSidebarLocked.tooltip":
      "TeamSpace侧边栏被锁定。只有TeamSpace所有者才能移动数据。",
    "moveBlockMenu.addFromTemplate.title": "從模版加入",
    "moveBlockMenu.addToPrivatePages":
      "加入到<mediumtext>私人頁面</mediumtext>",
    "moveBlockMenu.addToSpace.title": "加入到工作區",
    "moveBlockMenu.currentPage.pluralAddTitle": "新的子頁面",
    "moveBlockMenu.currentPage.singleAddTitle": "新的子頁面",
    "moveBlockMenu.duplicateToSpace.learnMoreLink": "了解更多",
    "moveBlockMenu.duplicateToSpace.message":
      "你只能夠將頁面複本建立到另一個工作區；而不是移動它們。",
    "moveBlockMenu.errorOnMove.label": "出了些問題。",
    "moveBlockMenu.mobileAddTo.label": "加入到另一頁面…",
    "moveBlockMenu.mobileMoveTo.label": "移動到",
    "moveBlockMenu.mobileNewPageInj.label": "加入到另一頁面",
    "moveBlockMenu.moveToPrivatePages": "移至<mediumtext>私人頁面</mediumtext>",
    "moveBlockMenu.moveToSpace.title": "移動到工作區",
    "moveBlockMenu.moveToTemplate.title": "移至模版",
    "moveBlockMenu.needEditAccess.tooltip":
      "要移动此页，需要“{parentName}”的“允许编辑”权限。",
    "moveBlockMenu.noEditAccess.tooltip": "沒有編輯存取權限",
    "moveBlockMenu.noResults.label": "沒有結果",
    "moveBlockMenu.pagesSection.noTypedDatabases.title": "轉換成頁面到",
    "moveBlockMenu.pagesSection.otherTypedDatabases.title": "或轉換成頁面到",
    "moveBlockMenu.pagesSection.title": "頁面",
    "moveBlockMenu.privatePagesMenuTitle": "私人頁面",
    "moveBlockMenu.rightDoneButton.label": "完成",
    "moveBlockMenu.spaceSwitcher.menuTitle": "工作區",
    "moveBlockMenu.suggestedSection.title": "建議",
    "moveBlockMenu.teamsSection.title": "團隊空間",
    "moveBlockMenu.typedSuggestedSection.title": "{typedItemName} 資料庫",
    "moveToHelpers.afterBulkMoveCompleteToastMessage":
      "{pageDescriptor} 已移動",
    "moveToHelpers.afterBulkMoveCompleteToastMessageWithDestination":
      "已將 {pageDescriptor} 移至 {destinationName}",
    "moveToHelpers.afterMoveToast.viewButton": "瀏覽",
    "moveToHelpers.bulkMoveConfirmationButtonLabel":
      "{moveToHelpers.bulkMoveConfirmationButtonLabel, plural, other {移動 {numPagesMoved, plural, one {# 個頁面} other {# 個頁面}}}}",
    "moveToHelpers.bulkMoveConfirmationTitle":
      "{moveToHelpers.bulkMoveConfirmationTitle, plural, other {是否確定要移動 {pageDescriptor} 至 {destinationName}？權限將變更。}}",
    "moveToHelpers.bulkMoveConfirmationTitleWithoutDestination":
      "{moveToHelpers.bulkMoveConfirmationTitleWithoutDestination, plural, other {是否確定要移動 {pageDescriptor}？權限將變更。}}",
    "moveToHelpers.bulkMoveConfirmationToPrivateTitle":
      "{moveToHelpers.bulkMoveConfirmationToPrivateTitle, plural, other {是否確定要移動 {pageDescriptor} 至 {destinationName}？團隊所有人將失去存取權限。}}",
    "moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle":
      "{moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle, plural, other {是否確定要移動 {pageDescriptor}？團隊所有人將失去存取權限。}}",
    "moveToHelpers.destinationName.favorites": "最愛",
    "moveToHelpers.destinationName.private": "私人",
    "moveToHelpers.duplicateToSpaceConfirmAcceptLabel": "我了解，建立複本",
    "moveToHelpers.duplicateToSpaceConfirmDescription1":
      "這可能包括：連結、關聯關係、權限、頁面歷史及更多項目。",
    "moveToHelpers.duplicateToSpaceConfirmDescription2":
      "此頁面會在目前工作區中維持不變，並會在你選擇的工作區中建立重複的版本。",
    "moveToHelpers.duplicateToSpaceConfirmHelpLink": "了解更多",
    "moveToHelpers.duplicateToSpaceConfirmTitle":
      "有些內容和設定可能在重複的頁面已損壞。",
    "moveToHelpers.moveBlocksDescriptorString":
      "{numBlocksMoved, plural, other {# 個區塊}}",
    "moveToHelpers.movePageDescriptorString":
      "{numPagesMoved, plural, other { 個頁面}}",
    "moveToHelpers.moveToUntypedLocationConfirmationButtonLabel": "仍要移動",
    "moveToHelpers.moveToUntypedLocationConfirmationMessage":
      "此 {typedDatabaseItem} 會轉換成頁面，並在你將其移動到 {destinationName} 後遺失其屬性。",
    "moveToHelpers.moveToUntypedLocationConfirmationTitle":
      "確定要移動此 {typedDatabaseItem} 嗎？",
    "moveToHelpers.privatePageCaptionPrefix": "私人",
    "moveToHelpers.sharedPageCaptionPrefix": "已分享",
    "moveToMenuActions.duplicatedToSpace.toast":
      "已將 {name} 的複本建立到 {spaceName}",
    "moveToMenuActions.duplicatingContent.loadingMessage":
      "正在建立內容的複本…",
    "moveToMenuRenderer.addNewPageIn.label": "搜索要加入到的頁面…",
    "moveToMenuRenderer.addTo.label": "搜索要加入到的頁面…",
    "moveToMenuRenderer.duplicateToSpace.label": "建立頁面的複本…",
    "moveToMenuRenderer.moveTo.teamLabel": "將頁面移動到...",
    "moveToMenuRenderer.moveTo.typedLabel": "將 {typedItemName} 移動到…",
    "moveToModal.suggestedSection.title": "建議",
    "moveToModal.teamsSection.title": "團隊空間",
    "moveToModal.workspaceSection.title": "工作區",
    "moveToModalTyped.helpIcon.ariaLabel": "移動輸入頁面的說明圖示",
    "moveToModalTyped.suggestedMenuSection.title": "建議",
    "moveToModalTypedEmptyState.button": "改為移動到其他頁面",
    "moveToModalTypedEmptyState.subtitle":
      "加入 {itemName} 以移動到另一個團隊空間",
    "moveToModalTypedEmptyState.title": "沒有名稱為 {itemName} 的團隊空間",
    "moveToModalTypedItem.privateButtonTitle": "私人",
    "moveToModalTypedItem.sharedButtonTitle": "已分享",
    "moveToOrCreateMenu.createSubpage.description":
      "在當前區塊內，在你的游標所在的位置建立一個新的子頁面。",
    "moveToOrCreateMenu.newPageIn.description":
      "在任何現有頁面內建立一個新頁面，然後一次性地連結到此頁面。",
    "moveToOrCreateMenu.privateMenuItem.captionPrefix": "私人",
    "moveToOrCreateMenu.sharedMenuItem.captionPrefix": "已分享",
    "moveToOrCreateMenu.turnInto.description":
      "將區塊轉換為任何現有資料庫或頁面內的新頁面。",
    "moveTypedMenu.tooltip": "移動到這些位置時，即會保留 {typedItemName} 屬性",
    "newBadge.label": "新",
    "newBadgeComponent.label": "新",
    "newBlock.abstract.description": "嵌入 Abstract 專案。",
    "newBlock.abstract.fuzzySearchKeywords": "Abstract",
    "newBlock.abstract.title": "Abstract",
    "newBlock.aiActionItemsBlock.description": "從目前頁面擷取待辦事項。",
    "newBlock.aiActionItemsBlock.fuzzySearchKeywords": "尋找 待辦事項 AI",
    "newBlock.aiActionItemsBlock.title": "待辦事項",
    "newBlock.aiBlock.description": "加入頁面摘要。",
    "newBlock.aiBlock.fuzzySearchKeywords": "摘要 AI",
    "newBlock.aiBlock.title": "摘要",
    "newBlock.aiConclusionsBlock.description": "為頁面加入結論。",
    "newBlock.aiConclusionsBlock.fuzzySearchKeywords": "結論 AI",
    "newBlock.aiConclusionsBlock.title": "結論",
    "newBlock.aiFreePromptBlock.description": "從任何機構產生內容。",
    "newBlock.aiFreePromptBlock.fuzzySearchKeywords":
      "詢問 協助 問題 提示 AI 區塊 內容",
    "newBlock.aiFreePromptBlock.title": "內容區塊",
    "newBlock.aiSummaryBlock.description": "產生目前頁面的摘要。",
    "newBlock.aiSummaryBlock.fuzzySearchKeywords": "摘要 AI",
    "newBlock.aiSummaryBlock.title": "摘要",
    "newBlock.audio.description": "從 SoundCloud、Spotify 等嵌入…",
    "newBlock.audio.fuzzySearchKeywords":
      "Audio Sound Music 音频 yinpin yin'pin 音效 yinxiao yin'xiao 声音 shengyin sheng'yin 音乐 yinyue yin'yue",
    "newBlock.audio.title": "音訊",
    "newBlock.boardView.description": "建立看板資料庫視圖。",
    "newBlock.boardView.title": "看板視圖",
    "newBlock.bookmark.description": "將連結另存為視覺化的網頁書籤。",
    "newBlock.bookmark.fuzzySearchKeywords":
      "Web Link Bookmark 网页 wangye wang'ye 链接 lianjie lian'jie 书签 shuqian shu'qian",
    "newBlock.bookmark.title": "網頁書籤",
    "newBlock.breadcrumb.description": "顯示目前頁面的位置。",
    "newBlock.breadcrumb.fuzzySearchKeywords":
      "Breadcrumb 面包屑 mianbaoxie mian'bao'xie 页面路径 yemianlujing ye'mian'lu'jing 路径 lujing lu'jing",
    "newBlock.breadcrumb.title": "頁面路徑",
    "newBlock.bulletedList.description": "建立一個簡單的項目符號列表。",
    "newBlock.bulletedList.fuzzySearchKeywords":
      "Bulleted Unordered List 项目符号 xiangmufuhao xiang'mu'fu'hao 无序 wuxu wu'xu 列表 liebiao lie'biao",
    "newBlock.bulletedList.title": "項目符號列表",
    "newBlock.button.description": "可點選的按鈕可執行任何動作。",
    "newBlock.button.fuzzySearchKeywords": "按鈕自動化",
    "newBlock.button.title": "按鈕",
    "newBlock.calendarView.description": "建立行事曆資料庫視圖。",
    "newBlock.calendarView.title": "行事曆視圖",
    "newBlock.callout.description": "將文字加強突出。",
    "newBlock.callout.fuzzySearchKeywords": "Callout 标注 biaozhu biao'zhu",
    "newBlock.callout.title": "標註",
    "newBlock.code.description": "擷取程式碼片段。",
    "newBlock.code.fuzzySearchKeywords": "Code ``` 代码 daima dai'ma",
    "newBlock.code.title": "程式碼",
    "newBlock.codepen.description": "嵌入 CodePen。",
    "newBlock.codepen.fuzzySearchKeywords": "CodePen Codepen",
    "newBlock.codepen.title": "CodePen",
    "newBlock.column2.description": "建立 2 個區塊分欄。",
    "newBlock.column2.fuzzySearchKeywords":
      "建立 col c2 col2 個分欄區塊垂直 2col",
    "newBlock.column2.title": "2 個分欄",
    "newBlock.column3.description": "建立 3 個區塊分欄。",
    "newBlock.column3.fuzzySearchKeywords": "c3 col3 column3 分欄 3col 三個",
    "newBlock.column3.title": "3 個分欄",
    "newBlock.column4.description": "建立 4 個區塊分欄。",
    "newBlock.column4.fuzzySearchKeywords": "c4 col4 column4 分欄 4col 四個",
    "newBlock.column4.title": "4 個分欄",
    "newBlock.column5.description": "建立 5 個區塊分欄。",
    "newBlock.column5.fuzzySearchKeywords": "c5 col5 column5 分欄 5col 五個",
    "newBlock.column5.title": "5 個分欄",
    "newBlock.columnList.description": "建立區塊分欄。",
    "newBlock.columnList.fuzzySearchKeywords":
      "Create col column columns block vertical 建立分欄區塊 垂直",
    "newBlock.columnList.title": "分欄",
    "newBlock.database.description": "建立新資料庫。",
    "newBlock.database.title": "資料庫",
    "newBlock.databaseFullPage.description": "將新資料庫加入為子頁面。",
    "newBlock.databaseFullPage.fuzzySearchKeywords": "資料庫完整頁面 db",
    "newBlock.databaseFullPage.title": "資料庫 - 整頁",
    "newBlock.databaseInline.description": "將內嵌資料庫加入到此頁面。",
    "newBlock.databaseInline.fuzzySearchKeywords": "資料庫內嵌 db",
    "newBlock.databaseInline.title": "資料庫 - 內嵌",
    "newBlock.deepnote.description": "嵌入 Deepnote 區塊。",
    "newBlock.deepnote.fuzzySearchKeywords": "Deepnote",
    "newBlock.deepnote.title": "Deepnote",
    "newBlock.divider.description": "在視覺上建立分隔。",
    "newBlock.divider.fuzzySearchKeywords":
      "Horizontal Rule Divider --- —- 水平 shuiping shui'ping 分隔线 fengexian fen'ge'xian 分割尺 fengechi fen'ge'chi —— ",
    "newBlock.divider.title": "分隔線",
    "newBlock.drawing.description": "在无限的画布上绘制绘图和图表。",
    "newBlock.drawing.fuzzySearchKeywords":
      "绘图图画布插图绘制草图tldraw涂鸦思维导图架构绘画笔",
    "newBlock.drawing.title": "绘图",
    "newBlock.drive.description": "嵌入 Google 文件，Google 試算表…",
    "newBlock.drive.fuzzySearchKeywords":
      "Google Drive 谷歌 guge gu'ge 网盘 wangpan wang'pan 云盘 yunpan yun'pan",
    "newBlock.drive.title": "Google 雲端硬碟",
    "newBlock.embed.description": "適用於 PDF、Google 地圖等。",
    "newBlock.embed.fuzzySearchKeywords": "Embed iFrame 嵌入 qianru qian'ru",
    "newBlock.embed.title": "嵌入",
    "newBlock.equation.description": "顯示獨立的數學方程式區塊。",
    "newBlock.equation.fuzzySearchKeywords":
      "LaTeX Math Block Equation $ 数学 shuxue shu'xue 区块 qukuai qu'kuai 方程式 fangchengshi fang'cheng'shi 公式 gongshi gong'shi 算式 suanshi suan'shi 等式 dengshi deng'shi 表达式 biaodashi biao'da'shi",
    "newBlock.equation.title": "方程式區塊",
    "newBlock.excalidraw.description": "嵌入 Excalidraw 白板。",
    "newBlock.excalidraw.fuzzySearchKeywords": "Excalidraw Xcalidro",
    "newBlock.excalidraw.title": "Excalidraw",
    "newBlock.factory.description": "輕鬆一按即可重複特定區塊。",
    "newBlock.factory.fuzzySearchKeywords":
      "Template Duplicate Button 模板 muban mu'ban 复制 fuzhi fu'zhi 按钮 anniu an'niu 副本 fuben fu'ben",
    "newBlock.factory.title": "模版按鈕",
    "newBlock.figma.description": "嵌入 Figma 檔案。",
    "newBlock.figma.fuzzySearchKeywords": "Figma",
    "newBlock.figma.title": "Figma",
    "newBlock.file.description": "上傳或嵌入連結。",
    "newBlock.file.fuzzySearchKeywords": "File 文件 wenjian wen'jian",
    "newBlock.file.title": "檔案",
    "newBlock.framer.description": "嵌入 Framer 原型。",
    "newBlock.framer.fuzzySearchKeywords": "Framer",
    "newBlock.framer.title": "Framer",
    "newBlock.fullPageBoardDatabase.description": "將看板資料庫加入為子頁面。",
    "newBlock.fullPageBoardDatabase.fuzzySearchKeywords": "看板資料庫 - 整頁",
    "newBlock.fullPageBoardDatabase.title": "圖庫資料庫 - 整頁",
    "newBlock.fullPageCalendarDatabase.description":
      "將行事曆資料庫加入為子頁面。",
    "newBlock.fullPageCalendarDatabase.fuzzySearchKeywords":
      "行事曆資料庫 - 整頁",
    "newBlock.fullPageCalendarDatabase.title": "行事曆資料庫 - 整頁",
    "newBlock.fullPageGalleryDatabase.description":
      "將圖庫資料庫加入為子頁面。",
    "newBlock.fullPageGalleryDatabase.fuzzySearchKeywords": "圖庫資料庫 - 整頁",
    "newBlock.fullPageGalleryDatabase.title": "圖庫資料庫 - 整頁",
    "newBlock.fullPageListDatabase.description": "將清單資料庫加入為子頁面。",
    "newBlock.fullPageListDatabase.fuzzySearchKeywords": "清單資料庫 - 整頁",
    "newBlock.fullPageListDatabase.title": "清單資料庫 - 整頁",
    "newBlock.fullPageTableDatabase.description": "將表格資料庫加入為子頁面。",
    "newBlock.fullPageTableDatabase.fuzzySearchKeywords": "表格資料庫 - 整頁",
    "newBlock.fullPageTableDatabase.title": "表格資料庫 - 整頁",
    "newBlock.fullPageTimelineDatabase.description":
      "將時程表資料庫加入為子頁面。",
    "newBlock.fullPageTimelineDatabase.fuzzySearchKeywords":
      "時程表資料庫 - 整頁",
    "newBlock.fullPageTimelineDatabase.title": "時程表資料庫 - 整頁",
    "newBlock.galleryView.description": "建立圖庫資料庫視圖。",
    "newBlock.galleryView.title": "圖庫視圖",
    "newBlock.gist.description": "嵌入 GitHub Gist。",
    "newBlock.gist.fuzzySearchKeywords": "GitHub Gist",
    "newBlock.gist.title": "GitHub Gist",
    "newBlock.header.description": "大大的標題。",
    "newBlock.header.fuzzySearchKeywords": "Heading 1 # 标题 biaoti biao'ti",
    "newBlock.header.title": "標題 1",
    "newBlock.hex.description": "嵌入十六進位儲存格。",
    "newBlock.hex.fuzzySearchKeywords": "十六進位",
    "newBlock.hex.title": "十六進位",
    "newBlock.image.description": "上傳或嵌入連結。",
    "newBlock.image.fuzzySearchKeywords":
      "Image Picture 图片 tupian tu'pian 图像 tuxiang tu'xiang 图形 tuxing tu'xing",
    "newBlock.image.title": "圖片",
    "newBlock.inlineTimelineDatabase.description":
      "將時程表資料庫加入到此頁面。",
    "newBlock.inlineTimelineDatabase.fuzzySearchKeywords":
      "時程表資料庫 - 內嵌",
    "newBlock.inlineTimelineDatabase.title": "時程表資料庫 - 內嵌",
    "newBlock.invision.description": "嵌入 Invision 專案。",
    "newBlock.invision.fuzzySearchKeywords": "Invision",
    "newBlock.invision.title": "Invision",
    "newBlock.linkToCollection.description": "將現有資料庫添加到此頁面。",
    "newBlock.linkToPage.description": "連結到現有頁面。",
    "newBlock.linkToPage.fuzzySearchKeywords":
      "Link to page ltp 链接 lianjie lian'jie 页面 yemian ye'mian",
    "newBlock.linkToPage.title": "連結到頁面",
    "newBlock.linkedViewOfCollection.description": "將既有資料庫新增至此頁面。",
    "newBlock.linkedViewOfCollection.fuzzySearchKeywords":
      "建立資料庫 db 已連結視圖",
    "newBlock.linkedViewOfCollection.title": "資料庫已連結視圖",
    "newBlock.linkedViewOfCollectionMobile.title": "已連結視圖",
    "newBlock.listView.description": "建立清單資料庫檢視。",
    "newBlock.listView.title": "清單視圖",
    "newBlock.loom.description": "嵌入 Loom 錄影。",
    "newBlock.loom.fuzzySearchKeywords": "Loom",
    "newBlock.loom.title": "Loom",
    "newBlock.maps.description": "嵌入 Google 地圖。",
    "newBlock.maps.fuzzySearchKeywords":
      "Google Maps 谷歌 guge gu'ge 地图 ditu di'tu",
    "newBlock.maps.title": "Google 地圖",
    "newBlock.mermaidCode.description": "編寫代碼以建立圖表。",
    "newBlock.mermaidCode.fuzzySearchKeywords":
      "mermaid 圖表 graphviz 流程圖代碼",
    "newBlock.mermaidCode.title": "代碼 - Mermaid",
    "newBlock.miro.description": "嵌入 Miro 畫板。",
    "newBlock.miro.fuzzySearchKeywords": "Miro",
    "newBlock.miro.title": "Miro",
    "newBlock.numberedList.description": "建立一個帶有序號的列表。",
    "newBlock.numberedList.fuzzySearchKeywords":
      "Numbered Ordered List 编号 bianhao bian'hao 有序 youxu you'xu 列表 liebiao lie'biao 序号 xuhao xu'hao",
    "newBlock.numberedList.title": "有序列表",
    "newBlock.page.description": "在此頁面中嵌入子頁面。",
    "newBlock.page.fuzzySearchKeywords": "Page 页面 yemian ye'mian",
    "newBlock.page.title": "頁面",
    "newBlock.pdf.description": "嵌入 PDF。",
    "newBlock.pdf.fuzzySearchKeywords": "PDF P'D'F",
    "newBlock.pdf.title": "PDF",
    "newBlock.quote.description": "擷取引用。",
    "newBlock.quote.fuzzySearchKeywords": "Quote 引用 yinyong yin'yong",
    "newBlock.quote.title": "引用",
    "newBlock.replit.description": "嵌入 repl。",
    "newBlock.replit.fuzzySearchKeywords": "Replit Repl",
    "newBlock.replit.title": "Replit",
    "newBlock.simple_table.description": "在你的頁面加入簡單的表格。",
    "newBlock.simple_table.fuzzySearchKeywords": "表格",
    "newBlock.simple_table.title": "表格",
    "newBlock.sketch.description": "嵌入 Sketch 文件。",
    "newBlock.sketch.fuzzySearchKeywords": "Sketch",
    "newBlock.sketch.title": "Sketch",
    "newBlock.subHeader.description": "中標題。",
    "newBlock.subHeader.fuzzySearchKeywords":
      "sub heading 2 ## 子标题 zibiaoti zi'biao'ti 副标题 fubiaoti fu'biao'ti 中标题 zhongbiaoti zhong'biao'ti",
    "newBlock.subHeader.title": "標題 2",
    "newBlock.subSubHeader.description": "小標題。",
    "newBlock.subSubHeader.fuzzySearchKeywords":
      "sub heading 3 ### 小标题 xiaobiaoti xiao'biao'ti 子标题 zibiaoti zi'biao'ti",
    "newBlock.subSubHeader.title": "標題 3",
    "newBlock.tab.description": "在分頁中整理內容。",
    "newBlock.tab.keywords": "分頁 分頁 索引標籤 切換 摺疊",
    "newBlock.tab.title": "分頁",
    "newBlock.tableOfContents.description": "顯示頁面大綱。",
    "newBlock.tableOfContents.fuzzySearchKeywords":
      "TOC Table of Contents 目录 mulu mu'lu 大纲 dagang da'gang",
    "newBlock.tableOfContents.title": "目錄",
    "newBlock.tableView.description": "為全新或現有資料庫加入表格檢視。",
    "newBlock.tableView.title": "表格視圖",
    "newBlock.text.description": "從純文字開始輸入。",
    "newBlock.text.fuzzySearchKeywords":
      "Plain Text 纯文本 chunwenben chun'wen'ben 文本 wenben wen'ben 纯文字 chunwenzi chun'wen'zi 文字 wenzi wen'zi",
    "newBlock.text.title": "文字",
    "newBlock.timelineView.description": "建立時程表資料庫視圖。",
    "newBlock.timelineView.title": "時程表視圖",
    "newBlock.toDo.description": "使用待辦清單追踪任務。",
    "newBlock.toDo.fuzzySearchKeywords":
      "Todo To-Do Checkbox List 待办 daiban dai'ban 待办事项 daibanshixiang dai'ban'shi'xiang 复选框 fuxuankuang fu'xuan'kuang 清单 qingdan qing'dan 列表 liebiao lie'biao",
    "newBlock.toDo.title": "待辦清單",
    "newBlock.toggle.description": "折疊列表可以選擇性隱藏或顯示內部內容。",
    "newBlock.toggle.fuzzySearchKeywords":
      "Toggle list 切换 qiehuan qie'huan 列表 liebiao lie'biao 切换列表 qiehuanliebiao qie'huan'lie'biao",
    "newBlock.toggle.title": "折疊列表",
    "newBlock.toggleFormatHeader.description": "將內容隱藏在大標題中。",
    "newBlock.toggleFormatHeader.fuzzySearchKeywords": "切換標題 1 # h1",
    "newBlock.toggleFormatHeader.title": "摺疊標題 1",
    "newBlock.toggleFormatSubHeader.description": "將內容隱藏在中標題中。",
    "newBlock.toggleFormatSubHeader.fuzzySearchKeywords":
      "切換子標題 2 ## h2 兩個",
    "newBlock.toggleFormatSubHeader.title": "摺疊標題 2",
    "newBlock.toggleFormatSubSubHeader.description": "將內容隱藏在小標題中。",
    "newBlock.toggleFormatSubSubHeader.fuzzySearchKeywords":
      "切換子子標題 3 ### h3 三個",
    "newBlock.toggleFormatSubSubHeader.title": "摺疊標題 3",
    "newBlock.transclusionContainer.description": "同步所有頁面的內容。",
    "newBlock.transclusionContainer.fuzzySearchKeywords":
      "Create synced block reference transclusion portal embed 同步 tongbu tong'bu",
    "newBlock.transclusionContainer.title": "同步區塊",
    "newBlock.tweet.description": "嵌入推文。",
    "newBlock.tweet.fuzzySearchKeywords": "Tweet 推文 tuiwen tui'wen",
    "newBlock.tweet.title": "推文",
    "newBlock.typeform.description": "嵌入一個 Typeform。",
    "newBlock.typeform.fuzzySearchKeywords": "Typeform",
    "newBlock.typeform.title": "Typeform",
    "newBlock.video.description": "從 YouTube、Vimeo 等嵌入…",
    "newBlock.video.fuzzySearchKeywords": "Video 视频 shipin shi'pin",
    "newBlock.video.title": "影片",
    "newBlock.whimsical.description": "嵌入 Whimsical 畫板。",
    "newBlock.whimsical.fuzzySearchKeywords": "Whimsical",
    "newBlock.whimsical.title": "Whimsical",
    "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label":
      "放棄",
    "newDiscussionMenu.discardCommentConfirmationDialog.prompt":
      "你想放棄這則評論嗎？",
    "nmoreSidebarItem.nMoreButtonTextLabel": "其他 {moreCount} 個",
    "notificationActions.archiveNotification.errorMessage":
      "無法歸檔。請再試一次。",
    "notificationActions.setAllAsRead.errorMessage":
      "無法將所有通知標示為已讀。請再試一次。",
    "notificationActions.setRead.errorMessage":
      "無法將通知標示為已讀。請再試一次。",
    "notificationActions.setUnread.errorMessage":
      "無法將通知標示為未讀。請再試一次。",
    "notificationAndPersonalSettings.notificationSection.title": "我的通知",
    "notificationAndPersonalSettings.privacySection.title": "隱私權",
    "notificationAndPersonalSettings.settingsSection.title": "我的設定",
    "notificationRuleSettings.addSlackFilterView.input.placeholderWithTitle":
      "搜尋 {value} 的屬性",
    "notificationRuleSettings.addSlackFilterView.input.placeholderWithoutTitle":
      "搜尋屬性",
    "notificationRuleSettings.addSlackFilterView.recordTitle.placeholder":
      "無標題",
    "notificationRuleSettings.linkedDatabaseSelectView.header":
      "設定後述項目的通知：",
    "notificationRuleSettings.linkedDatabaseSelectView.recordTitle.placeholder":
      "無標題",
    "notificationRuleSettings.selectChannelView.searchInput.placeholder":
      "搜尋...",
    "notificationRuleSettings.selectChannelView.setupAnotherSlackAccount.label":
      "加入另一個 Slack 帳號",
    "notificationRuleSettings.selectChannelView.title": "選取 Slack 頻道",
    "notificationRuleSettings.selectSlackWorkspace.title": "選取 Slack 工作區",
    "notificationRuleSettings.selectWorkspace.untitledWorkspace":
      "Slack 工作區",
    "notificationRuleSettings.selectWorkspaceView.searchInput.placeholder":
      "搜尋...",
    "notificationRuleSettings.selectWorkspaceView.setupAnotherSlackAccount.label":
      "加入另一個 Slack 帳號",
    "notificationRuleSettings.slackTargetPersonalChannelDisplayName":
      "私人頻道",
    "notificationRuleSettingsAddSlackFilterView.addFilter.label": "加入篩選器",
    "notificationRuleSettingsEditSlackView.addNewFilter.label": "加入篩選器",
    "notificationRuleSettingsEditSlackView.backToPreviousStep.label":
      "傳送到 Slack",
    "notificationRuleSettingsEditSlackView.currentChannelSection.title":
      "傳送到",
    "notificationRuleSettingsEditSlackView.deleteNotification.label": "刪除",
    "notificationRuleSettingsEditSlackView.done.label": "完成",
    "notificationRuleSettingsEditSlackView.eventFilters.title": "僅在此時間點",
    "notificationRuleSettingsEditSlackView.eventSection.title": "時間點",
    "notificationRuleSettingsEditSlackView.eventToggleSection.pageCreated.title":
      "已加入新頁面",
    "notificationRuleSettingsEditSlackView.eventToggleSection.pagePropertiesUpdated.title":
      "已編輯屬性",
    "notificationRuleSettingsEditSlackView.getDisplayNameForSource.customFilter.title":
      "{ruleCount, plural, other {{ruleCount} 個規則}}",
    "notificationRuleSettingsEditSlackView.getDisplayNameForSource.emptyFilter.title":
      "{collectionName} 中的任何頁面",
    "notificationRuleSettingsEditSlackView.getDisplayTextForPropertiesEditedPreference.some.title":
      "{ruleCount, plural, other {{ruleCount} 個規則}}",
    "notificationRuleSettingsEditSlackView.header.enabled.nonOwner":
      "要求 {automationCreatorName} 變更這些設定，或在必要時<deleteAction>刪除</deleteAction>。",
    "notificationRuleSettingsEditSlackView.header.notificationsPaused.incompatibleCollectionViewFilter":
      "此規則可能無法運作，因為視圖有未受支援的篩選。",
    "notificationRuleSettingsEditSlackView.header.notificationsPaused.nonOwner":
      "此規則已暫停。要求 {automationCreatorName} 恢復這些通知，或在必要時<deleteAction>刪除</deleteAction>。",
    "notificationRuleSettingsEditSlackView.header.notificationsPaused.owner":
      "此規則已暫停。<resumeAction>恢復通知</resumeAction>",
    "notificationRuleSettingsEditSlackView.notifyForMenuListItem.label":
      "通知項目：",
    "notificationRuleSettingsEditSlackView.propertiesEditedItem.any.label":
      "任何",
    "notificationRuleSettingsEditSlackView.propertiesEditedItem.none.label":
      "關閉",
    "notificationRuleSettingsEditSlackView.remove.confirmation.message":
      "確定要移除此通知配置嗎？",
    "notificationRuleSettingsMenu.backButton.ariaLabel": "返回上一個步驟",
    "notificationRuleSettingsNotifyForView.collectionViewSection.title":
      "加入或編輯頁面位置：",
    "notificationRuleSettingsNotifyForView.combinatorFilterPopupMenu.deleteFilter.label":
      "刪除篩選條件",
    "notificationRuleSettingsNotifyForView.customFilterMenuItem.title":
      "自訂篩選條件",
    "notificationRuleSettingsNotifyForView.getCollectionMenuItem.caption":
      "{collectionName} 中的任何頁面",
    "notificationRuleSettingsNotifyForView.getCollectionMenuListItems.tooltip.incompatibleFiltersWarning.default":
      "某些屬性不受支援",
    "notificationRuleSettingsNotifyForView.getCollectionMenuListItems.tooltip.incompatibleFiltersWarning.specific":
      "{propertyTypeName} 屬性不受支援",
    "notificationRuleSettingsNotifyForView.getCollectionViewMenuItem.captionDifferentParent":
      "<emphasis>在 {parentBlockName} 中配置</emphasis>",
    "notificationRuleSettingsNotifyForView.getCollectionViewMenuItem.captionWithFilters":
      "{ruleCount, plural, other {{ruleCount} 個篩選條件}}",
    "notificationRuleSettingsNotifyForView.getCollectionViewMenuItem.captionWithNoFilters":
      "視圖中的任何頁面",
    "notificationRuleSettingsNotifyForView.getCollectionViewMenuItem.deletedView":
      "<emphasis>找不到視圖。</emphasis>",
    "notificationRuleSettingsNotifyForView.getCollectionViewMenuItem.unsupportedView":
      "不受支援",
    "notificationRuleSettingsNotifyForView.header.label":
      "收到以下項目的通知：",
    "notificationRuleSettingsPropertyChangedFilterMenu.header.title":
      "{name} 變更為",
    "notificationRuleSettingsPropertyChangedFilterMenu.removeFilterItem.title":
      "移除篩選條件",
    "notificationRuleSettingsSelectPropertiesEditedView.anyPropertiesEditedItem.title":
      "已編輯任何屬性",
    "notificationRuleSettingsSelectPropertiesEditedView.header.label":
      "以下情況時收到通知：",
    "notificationRuleSettingsSelectPropertiesEditedView.propertySelect.inputPlaceholder":
      "搜尋屬性…",
    "notificationRuleSettingsSelectPropertiesEditedView.propertySelect.showMoreTitle":
      "其他 {moreCount} 個",
    "notificationRuleSettingsSelectPropertiesEditedView.ruleSummary.any.label":
      "任何",
    "notificationRuleSettingsSelectPropertiesEditedView.ruleSummary.none.label":
      "關閉",
    "notificationRuleSettingsSelectPropertiesEditedView.ruleSummary.some.label":
      "部分",
    "notificationRuleSettingsSetupSlackView.backToPreviousMenu.label":
      "設定 Slack 通知",
    "notificationRuleSettingsSetupSlackView.connectToSlackView.cancelButton.label":
      "取消",
    "notificationRuleSettingsSetupSlackView.connectToSlackView.connectButton.label":
      "連線",
    "notificationRuleSettingsSetupSlackView.connectToSlackView.description":
      "在頻道中獲得通知、查看豐富的預覽內容等等。",
    "notificationRuleSettingsSetupSlackView.connectToSlackView.reconnect.description":
      '在 {hasOrganizationName, select, true {"{organizationName}"} other {你的 Slack 工作區}}重新連線 Slack 帳戶 ({accountName})，以便繼續你的通知。',
    "notificationRuleSettingsSetupSlackView.connectToSlackView.reconnect.title":
      "重新連線到 Slack",
    "notificationRuleSettingsSetupSlackView.connectToSlackView.title":
      "連線到 Slack",
    "notificationRulesSettings.main.recordTitle.placeholder": "無標題",
    "notificationSettings.desktopNotificationSettings.description":
      "通過你的桌面應用接收提及和評論的即時推送通知。",
    "notificationSettings.desktopNotificationSettings.title": "桌面推送通知",
    "notificationSettings.emailAlwaysNotificationSettings.description":
      "透過電子郵件接收更新，即使你在程式上處於活動狀態。",
    "notificationSettings.emailAlwaysNotificationSettings.title":
      "始終傳送電子郵件通知",
    "notificationSettings.emailNotificationSettings.description2":
      "接收電子郵件更新，包括提及和評論回覆。",
    "notificationSettings.emailNotificationSettings.title": "電子郵件通知",
    "notificationSettings.helpButton.caption": "了解通知與設定",
    "notificationSettings.mobilePushNotificationSettings.description":
      "通過你的行動應用取得提及和評論的推送通知。",
    "notificationSettings.mobilePushNotificationSettings.title": "行動推送通知",
    "notificationSettings.slackNotificationSettings.title": "Slack 通知",
    "notificationSettings.slackNotificationsSettings.betaBadgeTooltip":
      "此功能尚在測試階段，可能無法如期運作。",
    "notificationSettings.slackNotificationsSettings.default.description":
      "當你在頁面、資料庫屬性或評論中被提及時，接收 Slack 團隊空間中的通知。",
    "notificationSettings.slackNotificationsSettings.workspaceSelected.description":
      "當你在頁面、資料庫屬性或評論中被提及時，接收 {slackWorkspaceName} 中的通知。",
    "notificationSettingsButton.goOnline.prompt": "請連接網路後進行設定。",
    "notificationSettingsButton.mobileSidebar.label": "通知與設定",
    "notificationSettingsButton.mobileSidebar.title": "通知與設定",
    "notificationSettingsButton.rightActionButton.done": "完成",
    "notificationUpdates.offline.message": "請連接網路後查看動態。",
    "notificationUpdates.unknownErrorMessage": "出了些問題。",
    "notificationsButton.allNotifications.sidebarButton": "通知",
    "notificationsButton.allNotifications.tooltip": "此工作區中所有頁面的通知",
    "notificationsModal.mobileMenu.title": "通知",
    "notionAppContainer.dialog.mismatchedOriginURL.okayButton.label": "好",
    "notionAppContainer.dialog.notionAppNotInApplications.message":
      "請將 Notion 應用程式移至 /Applications 檔案夾，以使自動更新程式正常工作。",
    notionDocsTutorialExampleBrainstorm_0: "示例腦力激盪",
    notionDocsTutorialExampleBrainstorm_0_0: "Notion 提示：",
    notionDocsTutorialExampleBrainstorm_0_1:
      "使用此模版收集你的團隊成員想法，即使你們不在同一個空間中。清楚表達你想知道答案的問題。同時，人們可在該問題下方加入他們的分項想法並自行標記。按一下新主題以產生要回答的新問題。",
    notionDocsTutorialExampleBrainstorm_10_0: "↓ 在下方嵌入範例",
    notionDocsTutorialExampleBrainstorm_2_0: "加入新主題",
    notionDocsTutorialExampleBrainstorm_2_0_0: "[要回答的問題]",
    notionDocsTutorialExampleBrainstorm_2_1_0: "第一個想法",
    notionDocsTutorialExampleBrainstorm_2_2_0: "第二個想法",
    notionDocsTutorialExampleBrainstorm_2_3_0: "第三個想法",
    notionDocsTutorialExampleBrainstorm_2_4_0: "第四個想法",
    notionDocsTutorialExampleBrainstorm_3_0: "[要回答的問題]",
    notionDocsTutorialExampleBrainstorm_4_0: "第一個想法",
    notionDocsTutorialExampleBrainstorm_4_1: "‣",
    notionDocsTutorialExampleBrainstorm_4_2: "空白",
    notionDocsTutorialExampleBrainstorm_5_0: "第二個想法",
    notionDocsTutorialExampleBrainstorm_5_1: "‣",
    notionDocsTutorialExampleBrainstorm_5_2: "空白",
    notionDocsTutorialExampleBrainstorm_6_0: "第三個想法",
    notionDocsTutorialExampleBrainstorm_6_1: "‣",
    notionDocsTutorialExampleBrainstorm_6_2: "空白",
    notionDocsTutorialExampleBrainstorm_7_0: "第四個想法",
    notionDocsTutorialExampleBrainstorm_7_1: "‣",
    notionDocsTutorialExampleBrainstorm_7_2: "空白",
    notionDocsTutorialExampleBrainstorm_8_0: "白板",
    notionDocsTutorialExampleBrainstorm_9_0: "Notion 提示：",
    notionDocsTutorialExampleBrainstorm_9_1:
      "Notion 讓你從其他應用程式輕鬆提取腦力激盪資源，進而專注於同一份文件。例如，你可以從 Miro 嵌入心智圖看板，並從即時更新的 Figma 嵌入檔案。",
    notionDocsTutorialExamplePrd_0: "範例 PRD",
    notionDocsTutorialExamplePrd_10_0: "🛫 方案",
    notionDocsTutorialExamplePrd_11_0: "要回答的範例問題：",
    notionDocsTutorialExamplePrd_11_0_0:
      "問題 1：每個人是否都知道我們的發布內容？",
    notionDocsTutorialExamplePrd_11_0_0_0: "內部對齊方式",
    notionDocsTutorialExamplePrd_11_0_0_0_0: "我們能否解釋此變更的內容？",
    notionDocsTutorialExamplePrd_11_0_0_1_0:
      "你是否與其他職能部門分享了此變更的詳細資料？",
    notionDocsTutorialExamplePrd_11_0_1_0: "外部訊息",
    notionDocsTutorialExamplePrd_11_0_1_0_0: "我們會如何向客戶傳達發布資訊呢？",
    notionDocsTutorialExamplePrd_11_0_1_1_0: "客戶如何了解此發布帶來的變更？",
    notionDocsTutorialExamplePrd_11_1:
      "我們在建置什麼？運作方式為何？我們如何知道這有用？我們在衡量什麼？什麼時候準備就緒？",
    notionDocsTutorialExamplePrd_11_1_0: "問題 2：我們確定這會發揮效用嗎？",
    notionDocsTutorialExamplePrd_11_1_0_0: "品質",
    notionDocsTutorialExamplePrd_11_1_0_0_0: "此產品是否經過適當測試？",
    notionDocsTutorialExamplePrd_11_1_0_1_0: "我們是否檢查過對其他產品的影響？",
    notionDocsTutorialExamplePrd_11_1_0_1_1: "空白",
    notionDocsTutorialExamplePrd_11_1_0_2_0: "我們是否完成了容量規劃？",
    notionDocsTutorialExamplePrd_11_1_0_3_0:
      "如果發佈不順利，我們是否有應變方案？",
    notionDocsTutorialExamplePrd_11_1_1_0: "衡量",
    notionDocsTutorialExamplePrd_11_1_1_0_0:
      "我們知不知道如何辨別此發布是否成功？",
    notionDocsTutorialExamplePrd_11_1_1_1_0: "其他人可以看到此發布的狀況嗎？",
    notionDocsTutorialExamplePrd_11_2: "然後，回答這些問題：",
    notionDocsTutorialExamplePrd_11_2_0: "問題 3：我們的發布步驟是什麼？",
    notionDocsTutorialExamplePrd_11_2_0_0: "方案",
    notionDocsTutorialExamplePrd_11_2_0_0_0: "你是否同意 PMM 的發布眾？",
    notionDocsTutorialExamplePrd_11_2_0_1_0: "我們是否同意 PMM 的發布步驟？",
    notionDocsTutorialExamplePrd_11_3_0: "🚀 出發時間到了！",
    notionDocsTutorialExamplePrd_12_0: "...然後請隨意連結到其他更詳細的文件",
    notionDocsTutorialExamplePrd_12_1: "空白",
    notionDocsTutorialExamplePrd_1_0: "Notion 提示：",
    notionDocsTutorialExamplePrd_1_1:
      "在 Notion，我們會使用此模版協助團隊規劃、設計及開發產品並取得最大的成功機會。這可協助團隊深入思考自己的工作、改善與其他團隊的非同步通訊，以及建立協作空間。",
    notionDocsTutorialExamplePrd_2_0: "👀 問題",
    notionDocsTutorialExamplePrd_3_0: "要回答的範例問題：",
    notionDocsTutorialExamplePrd_3_1:
      "我們要解決什麼問題？為了誰解決問題？他們何時遇到此問題？我們有什麼資料、研究及回饋可解釋此問題？我們與哪些客戶合作或聽取哪些客戶的意見，以便進一步了解此問題？為什麼解決此問題時如此急迫？為什麼這很重要？",
    notionDocsTutorialExamplePrd_6_0: "💭 提案",
    notionDocsTutorialExamplePrd_7_0: "要回答的範例問題：",
    notionDocsTutorialExamplePrd_7_1:
      "我們如何解決此問題？我們考慮了什麼替代方案？為什麼會出現此情況？什麼是此解決方案的一般型別？你在市場中是否有任何模型、原型、相關比較？我們如何知道是否已解決此問題？我們會衡量什麼？我們是否考慮過如何在建置時讓服務保有快速、效能、可擴充和/或相對低成本的特性？",
    notionDocsTutorialExampleTechSpec_0: "範例技術規格",
    notionDocsTutorialExampleTechSpec_0_0: "問題陳述",
    notionDocsTutorialExampleTechSpec_10_0: "圖表在這裡很有幫助。",
    notionDocsTutorialExampleTechSpec_12_0: "什麼是高層級資料模型變更？",
    notionDocsTutorialExampleTechSpec_13_0:
      "這些應包括任何資料庫架構變更，或是任何結構化欄位的變更，例如現有的 JSON 欄。",
    notionDocsTutorialExampleTechSpec_15_0: "什麼是使用者介面的主要變更？",
    notionDocsTutorialExampleTechSpec_17_0: "風險",
    notionDocsTutorialExampleTechSpec_18_0:
      "這組變更可能會導致什麼風險？請考慮執行",
    notionDocsTutorialExampleTechSpec_18_1: "事前分析法",
    notionDocsTutorialExampleTechSpec_18_2:
      "以提高風險。請務必在實行和發行方案中緩解這些風險。",
    notionDocsTutorialExampleTechSpec_1_0:
      "你想嘗試解決什麼問題？如果有 PRD，這可以是 PRD 的同步區塊。連結到任何其他與背景或上下文有關的文件。",
    notionDocsTutorialExampleTechSpec_20_0: "是否有任何反向不相容的變更？",
    notionDocsTutorialExampleTechSpec_22_0:
      "此專案是否具有安全性和資料隱私的特殊含意？",
    notionDocsTutorialExampleTechSpec_24_0:
      "此變更是否會大幅增加我們任何後端系統的負載？",
    notionDocsTutorialExampleTechSpec_26_0: "此專案是否具有任何相依性？",
    notionDocsTutorialExampleTechSpec_28_0: "替代解決方案",
    notionDocsTutorialExampleTechSpec_29_0:
      "你考慮了什麼替代方案？說明你在選擇建議解決方案時的評估條件。",
    notionDocsTutorialExampleTechSpec_2_0: "目標",
    notionDocsTutorialExampleTechSpec_30_0: "實行和發行方案",
    notionDocsTutorialExampleTechSpec_31_0:
      "根據與此專案大小和規模相關的內容填寫此分區。此分區在專案啟動時也可以是 TBD，但你應在專案準備推出前慢慢填入內容。",
    notionDocsTutorialExampleTechSpec_33_0: "此專案是否需要移轉？",
    notionDocsTutorialExampleTechSpec_34_0:
      "如果需要廣泛的移轉，請為其撰寫獨立的技術規格並連結到這裡。說明如何在失敗移轉事件中進行復原。",
    notionDocsTutorialExampleTechSpec_36_0: "此專案是否為實驗或已標幟功能？",
    notionDocsTutorialExampleTechSpec_37_0: "說明如何視需要支援累加式版本。",
    notionDocsTutorialExampleTechSpec_39_0: "成功條件",
    notionDocsTutorialExampleTechSpec_3_0: "實行此專案後，什麼應為真？",
    notionDocsTutorialExampleTechSpec_40_0:
      "你會如何驗證該解決方案是否正常發揮效用？",
    notionDocsTutorialExampleTechSpec_41_0:
      "說明你會進行的自動化和/或手動測試。此專案是否需要負載或壓力測試？這也可以是與 QA 分享並連結到這裡的個別測試版文件。",
    notionDocsTutorialExampleTechSpec_43_0:
      "你會採取什麼監控及警示措施，以便確保此專案的表現和可靠性不會有所下降？",
    notionDocsTutorialExampleTechSpec_44_0: "例如增加的要求、延遲及錯誤率。",
    notionDocsTutorialExampleTechSpec_4_0: "非目標",
    notionDocsTutorialExampleTechSpec_5_0:
      "具體有什麼是範圍外的內容，以及原因為何？",
    notionDocsTutorialExampleTechSpec_6_0: "建議的解決方案",
    notionDocsTutorialExampleTechSpec_7_0:
      "若要解決此問題及達成專案目標，需要進行什麼變更？",
    notionDocsTutorialExampleTechSpec_9_0: "什麼是高層級架構變更？",
    notionDocsTutorialSimpleDocsGettingStarted_0: "Docs 入門指南",
    notionDocsTutorialSimpleDocsGettingStarted_0_0_0_0:
      "此文件模版協助你組織團隊的共享知識，讓你可以完全待在相同頁面。",
    notionDocsTutorialSimpleDocsGettingStarted_10_0:
      "若要更輕鬆建立相同類型的文件（例如專案啟動或設計文件），只要按一下即可透過資料庫模版定義並複製特定頁面元素。",
    notionDocsTutorialSimpleDocsGettingStarted_11_0:
      "若要編輯、安裝更多或自行建立，請按一下藍色「新增」按鈕旁的下拉式選單：",
    notionDocsTutorialSimpleDocsGettingStarted_12_0: "視圖、篩選器及排序",
    notionDocsTutorialSimpleDocsGettingStarted_13_0:
      "視圖是可自訂、彈性的版面配置，讓你將資料庫和屬性視覺化為表格、看板、行事曆、時間軸或列表。此模版隨附多個文件的視圖，你可以自訂每個視圖或自行建立！",
    notionDocsTutorialSimpleDocsGettingStarted_14_0: "框架 6.png",
    notionDocsTutorialSimpleDocsGettingStarted_15_0:
      "進一步了解 Notion 資料庫版面配置，包括本指南提供的每種資料庫視圖類型的使用時機：",
    notionDocsTutorialSimpleDocsGettingStarted_15_1:
      "https://www.notion.so/help/guides/when-to-use-each-type-of-database-view",
    notionDocsTutorialSimpleDocsGettingStarted_15_2: ".",
    notionDocsTutorialSimpleDocsGettingStarted_1_0:
      "你可以使用 Notion 頁面與團隊協作文件，例如技術規格、架構概觀及專案啟動筆記。此資料庫可儲存每一份文件，協助你的團隊保持井然有序。",
    notionDocsTutorialSimpleDocsGettingStarted_2_0: "如何使用此模版",
    notionDocsTutorialSimpleDocsGettingStarted_3_0:
      "這是你團隊的文件資料庫。你可以按一下每個項目在各自的頁面開啟，並在頁面上加入重要資訊，例如，策略備忘錄、產品需求文件及設計評論。",
    notionDocsTutorialSimpleDocsGettingStarted_3_0_0: "框架 4.png",
    notionDocsTutorialSimpleDocsGettingStarted_4_0:
      "按一下「+ 新頁面」將新條目加入資料庫。",
    notionDocsTutorialSimpleDocsGettingStarted_4_0_0: "框架 7.png",
    notionDocsTutorialSimpleDocsGettingStarted_5_0:
      "使用視圖分頁並以不同方式視覺化你的文件，像是依建立者或上次編輯日期。",
    notionDocsTutorialSimpleDocsGettingStarted_6_0: "框架 5.png",
    notionDocsTutorialSimpleDocsGettingStarted_7_0: "自訂此模版",
    notionDocsTutorialSimpleDocsGettingStarted_8_0:
      "此模版會預先填入最常見的文件欄位（像是建立者和上次編輯資訊），但你可以在加入新欄位時加入自己的內容。",
    notionDocsTutorialSimpleDocsGettingStarted_9_0: "資料庫模版",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_0:
      "會議記錄入門指南",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_0_0_0_0:
      "此會議模版協助你在 Notion 中組織會議，例如設定議程及製作會議記錄。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_10_0:
      "若要編輯、安裝更多或自行建立，請按一下藍色「新增」按鈕旁的下拉式選單：",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_11_0:
      "視圖、篩選器及排序",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_12_0:
      "視圖是可自訂、彈性的版面配置，讓你將資料庫和屬性視覺化為表格、看板、行事曆、時間軸或列表。此模版隨附多個會議記錄的視圖，你可以自訂每個視圖或自行建立！",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_14_0:
      "進一步了解 Notion 資料庫版面配置，包括本指南提供的每種資料庫視圖類型的使用時機：",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_1_0:
      "你可以使用 Notion 頁面與團隊協作會議記錄，例如一對一會議、晨會及團隊會議。此資料庫可儲存每一場會議，協助你的團隊保持井然有序。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_2_0:
      "如何使用此模版",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_3_0:
      "這是你團隊的會議記錄資料庫。你可以按一下每個項目在各自的頁面開啟，並與你的團隊成員一起在頁面上加入類別資訊、建立議程及記錄待辦事項。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_4_0:
      "按一下「+ 新頁面」將下一場會議加入資料庫。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_5_0:
      "使用視圖分頁並以不同方式視覺化你的會議記錄，像是依日期、依類型或篩選出僅包括你參加的會議。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_6_0: "自訂此模版",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_7_0:
      "此模版會預先填入最常見的會議記錄欄位（像是與會者和會議日期），但你可以在加入新欄位/欄時加入自己的內容。",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_8_0: "資料庫模版",
    notionMeetingsTutorialMeetingsGettingStartedWithMeetings_9_0:
      "若要更輕鬆建立相同類型的會議（例如錯誤報告、設計規格），只要按一下即可透過資料庫模版定義並複製特定頁面元素。",
    notionMeetingsTutorialMeetingsTeamStandupPage_0: "團隊晨會",
    notionMeetingsTutorialMeetingsTeamStandupPage_0_0: "討論主題",
    notionMeetingsTutorialMeetingsTeamStandupPage_1_0: "…",
    notionMeetingsTutorialMeetingsTeamStandupPage_2: "空",
    notionMeetingsTutorialMeetingsTeamStandupPage_3_0: "團隊更新",
    notionMeetingsTutorialMeetingsTeamStandupPage_4_0: "加入我的更新",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_0: "每週團隊會議",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_0_0: "📚 預先讀取",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_1_0: "文件",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_1_0_0: "在這裡加入你的文件...",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_2_0: "團隊更新和全面檢查",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_2_0_0:
      "在這裡加入你的團隊成員更新和全面檢查...",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_3_0: "📣 議程事項",
    notionMeetingsTutorialMeetingsTeamWeeklyPage_5_0: "☑️ 待辦事項",
    notionProjectsTutorialAgileGettingStartedWithProjects_0:
      "專案、任務及迭代（Sprint）入門指南",
    notionProjectsTutorialAgileGettingStartedWithProjects_0_0_0_0:
      "了解如何依專案組織任務、與你的團隊協調及追蹤進度。",
    notionProjectsTutorialAgileGettingStartedWithProjects_10_0:
      "專案通常由任務組成。專案代表大量的工作，例如產品發布或團隊里程碑。專案可細分為許多任務，並且包含狀態等自訂屬性。",
    notionProjectsTutorialAgileGettingStartedWithProjects_11_0:
      "迭代（Sprint）",
    notionProjectsTutorialAgileGettingStartedWithProjects_12_0:
      "迭代（Sprint）是另一個可供你組織任務和專案的為杜，且常用於敏捷工作流程。迭代代表預計完成任務的特定時間週期。你可以根據 迭代設定開始和結束日期，並將每項任務指派至迭代。",
    notionProjectsTutorialAgileGettingStartedWithProjects_13_0: "加入自訂欄位",
    notionProjectsTutorialAgileGettingStartedWithProjects_14_0:
      "我們已將此模版預先填入最常見的專案管理欄位（像是任務狀態和受託人），但你可以在建立新欄位時加入自己的內容。你可以選擇優先級、相依性及子任務等選項。",
    notionProjectsTutorialAgileGettingStartedWithProjects_16_0:
      "模版設定只是切換開啟及關閉不同的資料庫屬性。在這裡進一步了解資料庫屬性：",
    notionProjectsTutorialAgileGettingStartedWithProjects_17_0:
      "視圖、篩選器及排序",
    notionProjectsTutorialAgileGettingStartedWithProjects_18_0:
      "視圖是可自訂、彈性的版面配置，讓你將資料庫和屬性視覺化為表格、看板、行事曆、時間軸或列表。此模版隨附多個專案、任務及迭代（Sprint）是的視圖 — 你可以自訂每個視圖或自行建立！",
    notionProjectsTutorialAgileGettingStartedWithProjects_1_0: "如何使用此模版",
    notionProjectsTutorialAgileGettingStartedWithProjects_20_0:
      "進一步了解 Notion 資料庫版面配置，包括本指南提供的每種資料庫視圖類型的使用時機：",
    notionProjectsTutorialAgileGettingStartedWithProjects_20_2: ".",
    notionProjectsTutorialAgileGettingStartedWithProjects_2_0:
      "這是你的範例專案追蹤器。其包含專案、任務及迭代（Sprint）— 你可以按一下專案或任務名稱在各自的頁面開啟，並在頁面上加入新的詳細資料。",
    notionProjectsTutorialAgileGettingStartedWithProjects_3_0:
      "在範例任務下方按一下「+ 新頁面」加入新任務。",
    notionProjectsTutorialAgileGettingStartedWithProjects_4_0:
      "在資料庫上方使用分頁瀏覽視圖：每個都會使用相同的基礎資料，但顯示方式不盡相同，讓你快速輕鬆地追蹤所有團隊的狀況。",
    notionProjectsTutorialAgileGettingStartedWithProjects_5_0:
      "任務、迭代（Sprint）及專案",
    notionProjectsTutorialAgileGettingStartedWithProjects_6_0:
      "我們已將你的模版預先填入資料庫內含的各種資訊類型。Notion 中的資料庫為頁面集合。在我們的情況中，專案和任務屬於自己的",
    notionProjectsTutorialAgileGettingStartedWithProjects_6_1: "資料庫",
    notionProjectsTutorialAgileGettingStartedWithProjects_6_2:
      "進一步了解資料庫的一般結構、逐步進行不同選單和選項，然後深入探討如何在資料庫中開啟及編輯頁面",
    notionProjectsTutorialAgileGettingStartedWithProjects_7_0: "任務",
    notionProjectsTutorialAgileGettingStartedWithProjects_8_0:
      "任務是專案管理追蹤器中最小的工作單位。任務代表更精細的工作，且經常只會指派給一位人員。眾多任務可組織成專案或加入迭代（Sprint）。",
    notionProjectsTutorialAgileGettingStartedWithProjects_9_0: "專案",
    notionProjectsTutorialProjectsGettingStartedWithProjects_0:
      "專案和任務入門指南",
    notionProjectsTutorialProjectsGettingStartedWithProjects_0_0_0_0:
      "了解如何依專案組織任務、與你的團隊協調及追蹤進度。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_10_0:
      "專案通常由任務組成。專案代表大量的工作，例如產品發布或團隊里程碑。專案可細分為許多任務，並且包含狀態等自訂屬性。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_11_0:
      "加入自訂欄位",
    notionProjectsTutorialProjectsGettingStartedWithProjects_12_0:
      "我們已將此模版預先填入最常見的專案管理欄位（像是任務狀態和受託人），但你可以在建立新欄位時加入自己的內容。你可以選擇優先級、相依性及子任務等選項。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_14_0:
      "在這裡進一步了解資料庫屬性：",
    notionProjectsTutorialProjectsGettingStartedWithProjects_15_0:
      "視圖、篩選器及排序",
    notionProjectsTutorialProjectsGettingStartedWithProjects_16_0:
      "視圖是可自訂、彈性的版面配置，讓你將資料庫和屬性視覺化為表格、看板、行事曆、時間軸或列表。此模版隨附多個專案、和任務的視圖，你可以自訂每個視圖或自行建立！",
    notionProjectsTutorialProjectsGettingStartedWithProjects_18_0:
      "進一步了解 Notion 資料庫版面配置，包括本指南提供的每種資料庫視圖類型的使用時機：",
    notionProjectsTutorialProjectsGettingStartedWithProjects_18_2: ".",
    notionProjectsTutorialProjectsGettingStartedWithProjects_1_0:
      "如何使用此模版",
    notionProjectsTutorialProjectsGettingStartedWithProjects_2_0:
      "這是你的範例專案追蹤器。其包含專案和任務，你可以按一下專案或任務名稱在各自的頁面開啟，並在頁面上加入新的詳細資料。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_3_0:
      "在範例任務下方按一下「+ 新頁面」加入新任務。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_4_0:
      "在資料庫上方使用分頁瀏覽視圖，每個都會使用相同的基礎資料，但顯示方式不盡相同，讓你快速輕鬆地追蹤所有團隊的狀況。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_5_0: "任務和專案",
    notionProjectsTutorialProjectsGettingStartedWithProjects_6_0:
      "我們已將你的模版預先填入資料庫內含的各種資訊類型。Notion 中的資料庫為頁面集合。在我們的情況中，專案和任務屬於自己的資料庫。進一步了解資料庫的一般結構、逐步進行不同選單和選項，然後深入探討如何在資料庫中開啟及編輯頁面：",
    notionProjectsTutorialProjectsGettingStartedWithProjects_6_1: "資料庫",
    notionProjectsTutorialProjectsGettingStartedWithProjects_6_2:
      "進一步了解資料庫的一般結構、逐步進行不同選單和選項，然後深入探討如何在資料庫中開啟及編輯頁面",
    notionProjectsTutorialProjectsGettingStartedWithProjects_6_3: "這裡。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_7_0: "任務",
    notionProjectsTutorialProjectsGettingStartedWithProjects_8_0:
      "任務是專案管理追蹤器中最小的工作單位。任務代表更精細的工作，且經常只會指派給一位人員。眾多任務可組織成專案。",
    notionProjectsTutorialProjectsGettingStartedWithProjects_9_0: "專案",
    notionProjectsTutorial_done: "已完成",
    notionProjectsTutorial_getStartedTasksPage1: "將專案模版加入 Notion",
    notionProjectsTutorial_getStartedTasksPage2: "邀請團隊成員",
    notionProjectsTutorial_inProgress: "進行中",
    notionProjectsTutorial_planning: "規劃",
    notionProjectsTutorial_project1: "專案 1",
    notionProjectsTutorial_project2: "專案 2",
    notionProjectsTutorial_sprint1: "迭代（Sprint） 1",
    notionProjectsTutorial_sprint2: "迭代（Sprint）2",
    notionProjectsTutorial_sprint3: "迭代（Sprint）3",
    notionProjectsTutorial_task1: "任務 1",
    notionProjectsTutorial_task2: "任務 2",
    notionProjectsTutorial_task3: "任務 3",
    notionProjectsTutorial_task4: "任務 4",
    "numberDisplay.shortenedNumber.billions": "{num}B",
    "numberDisplay.shortenedNumber.millions": "{num}M",
    "numberDisplay.shortenedNumber.thousands": "{num}K",
    "numberedListBlock.placeholder.label": "項目",
    "oauthAuthorization.loadingMessage": "授權中…",
    "oauthAuthorizationPage.botAccess.backButton.label": "返回",
    "oauthAuthorizationPage.botAccessOption.pickPages.subtitle":
      "選擇要與 {integrationName} 分享的一或多個頁面",
    "oauthAuthorizationPage.botAccessOption.pickPages.title":
      "選擇要與 {integrationName} 分享的頁面",
    "oauthAuthorizationPage.botAccessOption.useTemplate.subtitle":
      "{integrationName} 可在你即將建立的新頁面中 {capabilities} 內容",
    "oauthAuthorizationPage.botAccessOption.useTemplate.title":
      "使用開發人員提供的模版",
    "oauthAuthorizationPage.error.cancelButton.label": "取消",
    "oauthAuthorizationPage.error.clientNotFound.body":
      "用戶端 ID 遺漏或不完整。請參閱<inlinetextlink>開發人員文件</inlinetextlink>，以便取得更多協助。",
    "oauthAuthorizationPage.error.genericError.title": "發生問題",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.body":
      "你可以在「設定」中檢查與移除加入的整合。",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label":
      "打開設定",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.title":
      "此整合已加入 {workspaceName}",
    "oauthAuthorizationPage.error.integrationNotApproved.body":
      "聯絡系統管理員了解更多資訊。",
    "oauthAuthorizationPage.error.integrationNotApproved.title":
      "你沒有權限將「{integrationName}」整合加入 {workspaceName}",
    "oauthAuthorizationPage.error.invalidClientId.body":
      "用戶端 ID 遺漏或不完整。請參閱<inlinetextlink>開發人員文件</inlinetextlink>，以便取得更多協助。",
    "oauthAuthorizationPage.error.invalidRedirectUri.body":
      "redirect_uri 遺漏或無效。請參閱<inlinetextlink>開發人員文件</inlinetextlink>，以便取得更多協助。",
    "oauthAuthorizationPage.error.invalidResponseType":
      "response_type 遺漏或無效。請參閱<inlinetextlink>開發人員文件</inlinetextlink>，以便取得更多協助。",
    "oauthAuthorizationPage.error.invalidTemplate.body":
      "此頁面範本不再公開或不允許複製。<inlinetextlink>聯絡開發者</inlinetextlink>取得更多協助。",
    "oauthAuthorizationPage.error.notAnAdmin.body":
      "請聯絡管理員授予你存取權限，或切換到其他工作區。",
    "oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label":
      "切換工作區",
    "oauthAuthorizationPage.error.notAnAdmin.title":
      "你沒有權限將整合加入 {workspaceName}",
    "oauthAuthorizationPage.invalidTemplate.backButton.label": "返回",
    "oauthAuthorizationPage.permissionStep.cancelButton.label": "取消",
    "oauthAuthorizationPage.permissionStep.continueButton.label": "選取頁面",
    "oauthAuthorizationPage.permissionStep.integrationApprovalNotice":
      "授權此整合將把它新增至你的工作區批准列表。其他工作區成員將能安裝此整合。",
    "oauthAuthorizationPage.permissionStep.intro":
      "<inlinetextlink>{integrationName}</inlinetextlink> 需要授權",
    "oauthAuthorizationPage.permissionStep.nextButton.label": "下一個",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertComment":
      "在你選擇的頁面內建立評論",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertComment.description":
      "「{integrationName}」能夠在後續步驟選擇的頁面內建立評論。你也可以稍後在 Notion 與「{integrationName}」分享頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertCommentWithInheritedAccess":
      "在你有存取權限的頁面內建立評論",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertCommentWithInheritedAccess.description":
      "「{integrationName}」能夠在你可存取的頁面內建立評論。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent":
      "在你選取的頁面中建立新內容",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent.description":
      "「{integrationName}」將能在你下個步驟選取的頁面中加入新頁面或子頁。你也可以稍後在 Notion 與「{integrationName}」分享頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContentWithInheritedAccess":
      "在有存取權限的頁面內建立新內容",
    "oauthAuthorizationPage.permissionStep.permissionListItem.insertContentWithInheritedAccess.description":
      "「{integrationName}」將在你有權限加入內容或子頁面處加入內容或子頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readComment":
      "在你選擇的頁面內查看評論",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readComment.description":
      "「{integrationName}」能夠在於後續步驟選擇的頁面內查看評論。你也可以稍後在 Notion 與「{integrationName}」分享頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readCommentWithInheritedAccess":
      "在你有存取權限的頁面查看評論",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readCommentWithInheritedAccess.description":
      "「{integrationName}」能夠在你可存取的頁面內查看評論。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContent":
      "查看你選取的頁面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContent.description":
      "「{integrationName}」將能查看你在下個步驟選取的頁面。你也可以稍後在 Notion 與「{integrationName}」分享頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContentWithInheritedAccess":
      "檢視可存取頁面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.readContentWithInheritedAccess.description":
      "「{integrationName}」只能檢視你能檢視的頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent":
      "編輯你選取的頁面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent.description":
      "「{integrationName}」將能編輯你在下個步驟選取的頁面。你也可以稍後在 Notion 與「{integrationName}」分享頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContentWithInheritedAccess":
      "編輯可存取頁面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.updateContentWithInheritedAccess.description":
      "「{integrationName}」將能編輯你可編輯的頁面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers":
      "查看工作區使用者",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail":
      "「{integrationName}」將可查看所有工作區成員和訪客的基本資訊，例如姓名和個人資料圖片，但無法查看電子郵件地址。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail":
      "查看工作區使用者及其電子郵件地址",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail.detail":
      "「{integrationName}」將可查看所有工作區成員和訪客的基本資訊，包括姓名、個人資料圖片和電子郵件地址。",
    "oauthAuthorizationPage.permissionStep.title":
      "<inlinetextlink>{integrationName}</inlinetextlink> 正在要求存取 {workspaceName}",
    "oauthAuthorizationPage.permissionStep.warning.body":
      "如果繼續操作，你可能會分享敏感資訊。Notion 不會審核第三方整合，例如「{integrationName}」。如需了解「{integrationName}」如何處理你的資料，請詳閱他們的 <privacypolicylink>隱私權政策</privacypolicylink>和<termsofservicelink>服務條款</termsofservicelink>。",
    "oauthAuthorizationPage.permissionStep.warning.title":
      "確認你信任「{integrationName}」({redirectUriDomain})",
    "oauthAuthorizationPage.selectPageStep.empty": "裡面沒有頁面",
    "oauthAuthorizationPage.selectPagesStep.backButton.label": "返回",
    "oauthAuthorizationPage.selectPagesStep.finishButton.label": "允許存取",
    "oauthAuthorizationPage.selectPagesStep.linkPreviewSubtitle":
      "你在這裡的選擇不會影響此整合在整個工作區中展開連結的功能。",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title":
      "手動加入",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title":
      "私人",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder":
      "搜尋 {workspaceName} 中的頁面",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title":
      "共享",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title":
      "工作區",
    "oauthAuthorizationPage.selectPagesStep.title":
      "允許「{integrationName}」存取這些頁面",
    "oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip":
      "只有成員或管理員可加入此整合。",
    "oauthPageSearchResults.disabledResult.byAncestor.message":
      "已經由 {ancestorPageName} 加入",
    "oauthPageSearchResults.disabledResult.bySelf.message": "已加入",
    "oauthPageSearchResults.noResults.placeholder": "沒有結果",
    "offlineErrors.offlineErrorMessage": "離線。",
    "onboarding.Preview.companyHomeTooltip":
      "我們已加入你規模的公司經常使用的模板",
    "onboarding.Preview.functionTeamspaceTooltip":
      "我們已加入位置供你的團隊加入文件",
    "onboarding.Preview.general": "一般",
    "onboarding.Preview.generalTeamspaceTooltip":
      "我們已加入 {generalSpaceName} 空間供你整理全公司的文件",
    "onboarding.Preview.personalNotes": "✍️ 個人筆記",
    "onboarding.Preview.personalNotesTemplateTooltip":
      "我們已加入一些模板協助你開始使用",
    "onboarding.Preview.private": "私人",
    "onboarding.Preview.schoolNotes": "📚 學校筆記",
    "onboarding.Preview.schoolNotesTemplateTooltip":
      "我們已加入 {schoolNotes} 模板供你開始使用",
    "onboarding.Preview.spaceNamePlaceholder": "全新空間",
    "onboarding.Preview.spaceNameTooltip":
      "我們已將你的工作區名稱更新為 {spaceName}",
    "onboarding.Preview.teamspace.yourTeam": "你的團隊",
    "onboarding.Preview.teamspaces": "團隊空間",
    "onboarding.Preview.template.companyHome": "{workspaceName} 首頁",
    "onboarding.Preview.template.docs": "✏️ 文件",
    "onboarding.Preview.template.engineeringWiki": "📖 工程知識庫",
    "onboarding.Preview.template.goalsAndOKRs": "📈 目標和 OKR",
    "onboarding.Preview.template.marketingWiki": "📖 行銷知識庫",
    "onboarding.Preview.template.projects": "🎯 專案",
    "onboarding.Preview.template.salesWiki": "📖 銷售知識庫",
    "onboarding.Preview.template.sprints": "🏃‍♂️ Sprint",
    "onboarding.Preview.template.tasks": "✔️ 任務",
    "onboarding.Preview.template.teamspaceHome": "🏠 團隊空間首頁",
    "onboarding.Preview.template.wiki": "📖 知識庫",
    "onboarding.desktopLogoutOption.text":
      "你正在爲 {userEmail} 新建帳號。{br}如果你不打算設定新帳號，可以使用<closelink>另一個電子郵件地址登入。</closelink>",
    "onboarding.workspaceCreate.buttonLabel.title": "選擇圖示",
    "onboardingActions.closeOnboardingDialog.existingUser.confirmCloseButton.label":
      "回到之前的工作區",
    "onboardingActions.closeOnboardingDialog.existingUser.continueButton.label":
      "繼續設定",
    "onboardingActions.closeOnboardingDialog.existingUser.subtitle":
      "你將回到之前的工作區。",
    "onboardingActions.closeOnboardingDialog.existingUser.title":
      "取消設定新的工作區？",
    "onboardingActions.closeOnboardingDialog.newUser.confirmCloseButton.label":
      "返回主頁",
    "onboardingActions.closeOnboardingDialog.newUser.continueButton.label":
      "繼續設定",
    "onboardingActions.closeOnboardingDialog.newUser.subtitle":
      "你將回到 Notion 主頁。",
    "onboardingActions.closeOnboardingDialog.newUser.title": "取消新帳號設定？",
    "onboardingActions.onboardingErrorDialog.closeButton.label": "關閉",
    "onboardingActions.onboardingErrorDialog.message": "糟糕，出了些問題。",
    "onboardingActions.onboardingErrorDialog.startOverButton.label": "重新開始",
    "onboardingAppDownload.step.desktop.downloadMacButton": "下載 Mac 程式",
    "onboardingAppDownload.step.desktop.downloadWindowsButton":
      "下載 Windows 程式",
    "onboardingAppDownload.step.downloadMacButton": "下載 Mac 程式",
    "onboardingAppDownload.step.downloadWindowsButton": "下載 Windows 程式",
    "onboardingAppDownload.step.title": "下載 Notion",
    "onboardingAppDownload.subtitle.mac":
      "取得 Mac 版 Notion 程式，以便強化離線操作和通知功能。",
    "onboardingAppDownload.subtitle.macAndWindows":
      "取得 Mac 版或 Windows 版 Notion 程式，以便強化離線體驗和通知功能。",
    "onboardingAppDownload.subtitle.windows":
      "取得 Windows 版 Notion 程式，以便強化離線操作和通知功能。",
    "onboardingBanner.aiWaitlist.message":
      "完成引導流程以加入 Notion AI 等候清單",
    "onboardingChecklist.AddAssigneeStatusAndDueDateText":
      "從下拉式選單中選擇，以便向你的任務指派相關詳細資料。",
    "onboardingChecklist.AddAssigneeStatusAndDueDateTitle":
      "加入受託人、狀態及到期日",
    "onboardingChecklist.addBlockText":
      "使用「/」選單將相關區塊和說明加入你的範本。",
    "onboardingChecklist.addBlockTitle": "加入區塊",
    "onboardingChecklist.addContextInProjectDocsText":
      "每個專案和任務都包含可供你加入更多資訊的頁面。把它想成是你團隊所有專案資訊的一站式商店。若要加入專案概觀、目標等更多項目，只要開始輸入內容即可。",
    "onboardingChecklist.addContextInProjectDocsTitle": "在專案文件中加入脈絡",
    "onboardingChecklist.addCustomPropertiesText":
      "就像是處理專案時，你可以加入自訂欄位以分類任務。根據你的需求為所有任務加入更多屬性。請試著從標籤或優先順序開始。",
    "onboardingChecklist.addCustomPropertiesTitle": "加入自訂屬性",
    "onboardingChecklist.addFullyCustomPropertiesText":
      "對於多個專案中更進階的追蹤需求，請加入自訂屬性，像是標籤、人員、日期等更多項目。為它們命名並加入資訊。",
    "onboardingChecklist.addFullyCustomPropertiesTitle": "加入完全自訂屬性",
    "onboardingChecklist.addSuggestedPropertiesText":
      "按一下「+加入屬性」以查看專案資料庫建議欄位的清單。加入後，你建立的每一個專案就會出現這些欄位。請試著從「優先順序」開始。",
    "onboardingChecklist.addSuggestedPropertiesTitle": "加入建議的屬性",
    "onboardingChecklist.addYourFirstTaskText":
      "將你的專案細分成方便管理的任務。使用 + 新增按鈕在專案中建立第一項任務，像是「了解專案和任務」。",
    "onboardingChecklist.addYourFirstTaskTitle": "新增你的第一項任務",
    "onboardingChecklist.connectWithOtherAppsText":
      "如果你已經在使用另一款工具，請查看 Jira 任務、Slack 文章、GitHub 問題等更多項目的內容和狀態，不需要離開先 Notion。只要貼上連結即可開始使用。",
    "onboardingChecklist.connectWithOtherAppsTitle": "與其他應用程式連線",
    "onboardingChecklist.createContent.rearrangeBlocks.text":
      "拖放區塊以使用 ::: 控點重新排列。不需要複製貼上，只須四處移動項目即可。",
    "onboardingChecklist.createContent.transformBlocks.text":
      "你可以轉換區塊的內容類型，以便以新的方式使用、查看或強化內容資訊。",
    "onboardingChecklist.createNewTemplateText":
      "使用「新增」按鈕旁的下拉式選單，以便建立新的資料庫範本。",
    "onboardingChecklist.createNewTemplateTitle": "建立新範本",
    "onboardingChecklist.createNewViewText":
      "你可以建立及儲存更多相同資料的視圖。根據你的需求將任務放入看板、行事曆、清單、圖庫或時程表。為此，請使用視圖名稱旁的「+」按鈕。",
    "onboardingChecklist.createNewViewTitle": "建立新視圖",
    "onboardingChecklist.createPages.text":
      "按一下工作區左下角的「+ 新頁面」按鈕，或是「私人」或任何其他團隊空間旁的「+」按鈕，即可加入頁面。",
    "onboardingChecklist.customizeViewOptionsText":
      "使用右側的「...」選單以更多種方式自訂，像是依受託人（而非專案）為你的任務分組，或是加入子任務。",
    "onboardingChecklist.customizeViewOptionsTitle": "自訂視圖選項",
    "onboardingChecklist.gettingStartedPageAddBasicDetailsText":
      "Notion 中的屬性有助於你大規模整理專案。為你的第一個專案設定狀態（像是「進行中」），然後指派未來兩週的日期範圍。完成度則會根據相關任務自動計算。",
    "onboardingChecklist.gettingStartedPageAddBasicDetailsTitle":
      "加入基本詳細資料",
    "onboardingChecklist.gettingStartedPageForPMOpenProjectText":
      "按一下專案名稱以開始使用。這會開啟你的專案根據地。在這裡，你會加入專案詳細資料並取得相關任務的整體視圖。",
    "onboardingChecklist.gettingStartedPageForPMOpenProjectTitle":
      "開啟你的專案",
    "onboardingChecklist.gettingStartedPageGiveYourProjectANameText":
      "專案位於任務管理階層的頂層。它們通常具備設定好的開始和結束日期，且包含任務和子任務。完美適用於特定目標，而不是進行中的工作。",
    "onboardingChecklist.gettingStartedPageGiveYourProjectANameTitle":
      "為你的專案命名",
    "onboardingChecklist.gettingStartedPageNextTitle":
      "繼續前往下一個區段，進一步了解如何加入自訂欄位 →",
    "onboardingChecklist.gettingStartedPageUpdateYourPageIcon":
      "更新你的頁面圖示",
    "onboardingChecklist.gettingStartedPageUpdateYourPageIconText":
      "玩得開心！表情符號會識別 Notion 的頁面，為你的專案頁面增添一些藝術效果。",
    "onboardingChecklist.slashCommandPMText":
      "斜線命令是頁面內容的個人服務生；輸入「/」後調出的選單中，包含所有你可以加入新專案文件的區塊。",
    "onboardingChecklist.slashCommandPMTitle": "斜線命令",
    "onboardingChecklist.sortAndFilterText":
      "在任何視圖中，你可以根據資料庫屬性排序及篩選資料。請嘗試依任務完成度篩選，或是依到期日排序。",
    "onboardingChecklist.sortAndFilterTitle": "排序及篩選",
    "onboardingChecklist.tipsAndTricks.exploreTemplates.text":
      "<link>探索模版</link>",
    "onboardingChecklist.tipsAndTricks.helpCenter":
      "參閱我們的<a>說明中心</a>了解更多資訊！",
    "onboardingChecklist.tipsAndTricks.import.text":
      "透過我們的實用<a>使用手冊</a>從其他程式（如Evernote、Confluence）匯入資料。",
    "onboardingChecklist.tipsAndTricks.templates.text":
      "探索我們在<a>模版庫</a>中的模版！",
    "onboardingChecklist.visualizeYourViewText":
      "按一下「我的任務」可查看指派給你的任務，而「人員」可查看由受託人細分的所有任務。",
    "onboardingChecklist.visualizeYourViewTitle": "視覺化你的視圖",
    "onboardingChecklist.whatAreDatabaseTemplatesText":
      "如果你發現自己重複在建立相同類型的任務，即可將資料庫範本當成加速流程的藍圖。定義任務類型，然後一鍵複製頁面結構和屬性。",
    "onboardingChecklist.whatAreDatabaseTemplatesTitle": "什麼是資料庫範本？",
    "onboardingChecklist.whatIsNotion.mainUseCases":
      "Notion 的功能非常多樣化，包括但不限於：",
    "onboardingChecklist.yourTemplateIsReadyToUseText":
      "每次在資料庫中建立新頁面時，你都能夠複製範本。",
    "onboardingChecklist.yourTemplateIsReadyToUseTitle": "你的範本已經可供使用",
    "onboardingChecklistButton.addProjectDetailPM.displayName":
      "加入專案詳細資料",
    "onboardingChecklistButton.addTasksAndTaskDetails.displayName":
      "加入任務和任務詳細資料",
    "onboardingChecklistButton.createTaskTemplates.displayName": "建立任務範本",
    "onboardingChecklistButton.customizedMessage.collaborateWithOthers.displayName":
      "與 {persona} 團隊協作",
    "onboardingChecklistButton.customizedMessage.createContent.displayName":
      "建立 {useCase} 的內容",
    "onboardingChecklistButton.customizedMessage.createPages.displayName":
      "為你的 {persona} 團隊建立頁面",
    "onboardingChecklistButton.customizedMessage.shareYourWork.displayName":
      "分享你的作品",
    "onboardingChecklistButton.customizedMessage.tipsAndTricks.displayName":
      "提示和技巧",
    "onboardingChecklistButton.customizedMessage.title":
      "<b>Notion {persona} 團隊的基本知識</b>",
    "onboardingChecklistButton.customizedMessage.whatIsNotion.displayName":
      "什麼是 Notion？",
    "onboardingChecklistButton.customizedYourView.displayName": "自訂你的視圖",
    "onboardingChecklistButton.doNotShowAgain.button":
      "隱藏 Notion 基本知識 {personaMessage}",
    "onboardingChecklistButton.doNotShowAgain.button.default":
      "隱藏 Notion 基本知識",
    "onboardingChecklistButton.doNotShowAgain.button.pm":
      "隱藏專案管理基本知識",
    "onboardingChecklistButton.gettingStartedPagePM.displayName":
      "專案和任務入門指南",
    "onboardingChecklistButton.learnMoreAboutPM.displayName":
      "進一步了解專案管理",
    "onboardingChecklistButton.title.default": "<b>Notion 基本知識</b>",
    "onboardingChecklistButton.title.pm": "<b>專案管理基本知識</b>",
    "onboardingChecklistButton.tooltip.default": "Notion 基本知識",
    "onboardingChecklistButton.tooltip.pm": "專案管理基本知識",
    "onboardingCompanySurvey.backButton.label": "返回",
    "onboardingCompanySurveyStage.companyName.label": "你公司的名稱是什麼？",
    "onboardingCompanySurveyStage.companyNameInput.placeholder": "例如 Acme Co",
    "onboardingCompanySurveyStage.companyNameUndefinedError.message":
      "請填寫你公司的名稱。",
    "onboardingCompanySurveyStage.companySize.label": "你的公司有多少員工？",
    "onboardingCompanySurveyStage.companySize.popuplabel": "公司規模...",
    "onboardingCompanySurveyStage.companySizeUndefinedError.message":
      "請填寫你公司的規模。",
    "onboardingCompanySurveyStage.continueButton.label": "繼續",
    "onboardingCompanySurveyStage.step.subtitle":
      "我們會根據你的答案個人化你的工作區",
    "onboardingCompanySurveyStage.step.title":
      "Notion 很適合用在工作上。向我們介紹一下你的工作",
    "onboardingDesktopAppDownload.continueButton.label": "帶我到 Notion",
    "onboardingEmailConsent.checkbox.optInlabel":
      "我同意 Notion 向我傳送 Notion 相關行銷通訊。",
    "onboardingEmailConsent.checkbox.optOutlabel":
      "否，我不想接收 Notion 的行銷通訊。",
    "onboardingEmailConsent.unsubscribe.label":
      "你可以隨時<unsubscribe>取消訂閱</unsubscribe>\\n接收行銷通訊。Notion 的網站和通訊受到我們的《<privacypolicy>隱私權政策</privacypolicy>》規範。",
    "onboardingHelpers.personalWorkspaceName": "{userName}的 Notion",
    "onboardingIntent.error.optionNotChosen": "請選擇一個選項。",
    "onboardingInvite.addEmail.caption":
      "輸入或貼上一或多個電子郵件地址，並以逗號、空格或分行符號分隔。",
    "onboardingInvite.bulkInvites.placeholder":
      "annie@myteam.com, fay@company.com, henry@company.com, ...",
    "onboardingInvite.chrome.subtitle": "邀請你的隊友以充分利用 Notion。",
    "onboardingInvite.chrome.title": "邀請隊友",
    "onboardingInvite.continueButton": "繼續",
    "onboardingInvite.desktopButton.invitedEmails.finishButton":
      "邀請並帶我到 Notion",
    "onboardingInvite.email.placeholder": "電子郵件地址",
    "onboardingInvite.emailDomainAutoJoinCheckbox.label":
      "允許擁有 <b>@{emailDomain}</b> 電子郵件地址的任何人加入此工作區",
    "onboardingInvite.emails.addMoreOrInviteInBulkText": "大量加入或邀請",
    "onboardingInvite.emails.sendInvites": "傳送邀請",
    "onboardingInvite.finishButton": "帶我到 Notion",
    "onboardingInvite.invalidEmails.error.message":
      "有些電子郵件地址似乎無效。要再試一次嗎？",
    "onboardingInvite.mobile.copyButton.title": "複製邀請連結",
    "onboardingInvite.mobileStep.subtitle": "Notion 適用於任何規模的團隊。",
    "onboardingInvite.mobileStep.title": "邀請隊友",
    "onboardingInvite.sharingButton.copied": "已複製！",
    "onboardingInvite.sharingButton.copy": "取得可分享的連結",
    "onboardingInvite.sharingButton.tooltip.copy": "透過此連結邀請團隊成員",
    "onboardingInviteNew.error.invalidEmail.message": "無效的電子郵件地址。",
    "onboardingMobileScroller.continueButton.label": "繼續",
    "onboardingMobileTutorial.button.skip": "略過",
    "onboardingMobileTutorial.button.takeMeToNotion": "帶我到 Notion",
    "onboardingMobileTutorial.getStartedButton.label": "立即開始",
    "onboardingMobileTutorial.nextButton.label": "下一個",
    "onboardingPersonaSurvey.useCases.popuplabel": "選擇用例..",
    "onboardingPersonaSurvey.useCasesField.placeholder": "選擇用例...",
    "onboardingPersonaSurvey.useCasesField.plural.placeholder":
      "{count, plural, other {{count} 個已選擇}}",
    "onboardingPlanChooseControl.option.personal": "個人版",
    "onboardingPlanChooseControl.option.school": "學校",
    "onboardingPlanChooseControl.option.work": "工作",
    "onboardingPopup.next": "下一個",
    "onboardingPopup.skip": "跳過其餘部分",
    "onboardingProfile.addProfilePhotoButton.label": "加入照片",
    "onboardingProfile.changeProfilePhotoButton.label": "變更",
    "onboardingProfile.continueButton.footerLabel": "繼續",
    "onboardingProfile.continueButton.label": "繼續",
    "onboardingProfile.desktopLogoutOption.text":
      "如果你不打算設定新帳號，可以<closelink>使用另一個電子郵件登入</closelink>。",
    "onboardingProfile.dialogError.photoUploadFailure.message": "上傳失敗。",
    "onboardingProfile.intentButtonLabel.life": "生活",
    "onboardingProfile.intentButtonLabel.school": "學校",
    "onboardingProfile.intentButtonLabel.work": "工作",
    "onboardingProfile.missingEmail.message":
      "你的帳戶沒有電子郵件。請聯絡客戶支援。",
    "onboardingProfile.mobileNameInput.placeholder":
      "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.mobileNameQuestion.label": "我們應該怎麼稱呼你？",
    "onboardingProfile.mobileStage.subtitle": "首先，請向我們介紹一下你自己。",
    "onboardingProfile.mobileStage.title": "歡迎來到 Notion",
    "onboardingProfile.nameInput.placeholder": "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.nameInput.placeholder_exp01":
      "例如 Ada Lovelace、Charles Dickens",
    "onboardingProfile.nameQuestion.label": "我們應該怎麼稱呼你？",
    "onboardingProfile.nameQuestion.label_exp01": "全名",
    "onboardingProfile.nameUndefinedError.message": "名稱未填寫。",
    "onboardingProfile.nameUndefinedError.message_exp01": "請填寫你的姓名。",
    "onboardingProfile.passwordInput.label": "設定密碼",
    "onboardingProfile.passwordInput.label_exp01": "密碼",
    "onboardingProfile.passwordInput.placeholder": "新密碼",
    "onboardingProfile.passwordInput.subtext":
      "必須有超過 8 個字元和 2 個特殊字元 (!@#$*!)",
    "onboardingProfile.passwordUndefinedError.message": "密碼未填寫。",
    "onboardingProfile.passwordUndefinedError.message_exp01":
      "請填寫你的密碼。",
    "onboardingProfile.stage.subtitle": "首先，請向我們介紹一下你自己。",
    "onboardingProfile.stage.subtitle_exp01": "你以 {email} 登入",
    "onboardingProfile.stage.title": "歡迎來到 Notion",
    "onboardingProfile.stage.title_exp01": "建立你的帳號",
    "onboardingProfile.uploading.text": "上傳中…",
    "onboardingProfileV2.nameQuestion.label": "你的名字",
    "onboardingProfileV2.planChooseQuestion.label":
      "你要將 Notion 用於什麼內容？",
    "onboardingProfileV2.stage.disableSpaceCreationTooltip":
      "你的管理員已停用工作區建立作業。",
    "onboardingProfileV2.stage.disableSpaceCreationTooltipWithEmailDomain":
      "你的組織 {emailDomain} 已停用工作區建立作業。請登入不同的 Notion 帳戶以建立工作區。",
    "onboardingProfileV2.verifiedDomain.message":
      "你的登入身分為 <bold>{email}</bold>。你建立的任何工作區可由電子郵件網域 <bold>{emailDomain}</bold> 的擁有者管理。如需更多資訊，請參閱 <domainclaimlink>此頁面</domainclaimlink>。",
    "onboardingStateActions.creatingWorkspace.loadingMessage": "馬上完成…",
    "onboardingStateActions.errorMessage.domainClaim.workspaceCreationPrevented":
      "你無權訪問任何工作區。請聯繫你的 IT 部門以訪問 Notion。",
    "onboardingStateActions.errorMessage.domainClaim.workspaceCreationPreventedWithEmail":
      "你已登入 {userEmailAddress} 且無法存取任何工作區。請聯絡你的 IT 部門以取得 Notion 的存取權限。",
    "onboardingStateActions.errorMessage.noActionToPerform":
      "沒有對{onboardingRedirectType}可執行的動作",
    "onboardingStateActions.errorMessage.spaceDidNotLoad": "無法載入工作區。",
    "onboardingStateActions.errorMessage.spaceDoesNotExist": "工作區不存在。",
    "onboardingStateActions.joiningWorkspace.loadingMessage": "正在加入團隊…",
    "onboardingStateActions.navigatingToWorkspace.loadingMessage":
      "正在將你帶往你的工作區…",
    "onboardingSurvey.backButton.label": "返回",
    "onboardingSurvey.cancelButton.label": "略過",
    "onboardingSurvey.companySize.label": "你公司的規模多大？",
    "onboardingSurvey.companySize.popuplabel": "公司規模...",
    "onboardingSurvey.continueButton.label": "繼續",
    "onboardingSurvey.persona.label": "你從事什麼類型的工作？",
    "onboardingSurvey.persona.popuplabel": "你的職能部門",
    "onboardingSurvey.subtitle": "我們會根據你的選擇自訂你的 Notion 體驗。",
    "onboardingSurvey.teamRole.label": "你的角色是什麼？",
    "onboardingSurvey.teamRole.popuplabel": "你的角色",
    "onboardingSurvey.title": "請介紹一下你自己",
    "onboardingSurvey.useCase.label": "你打算在 Notion 中執行什麼內容？",
    "onboardingSurvey.useCase.popuplabel": "用 Notion 來...",
    "onboardingSurvey.useCasesSelect.placeholder": "選擇一或多個...",
    "onboardingSurvey.useCasesSelect.plural.placeholder":
      "{count, plural, other {{count} 個已選擇}}",
    "onboardingTeamRoleSelect.teamRoleSelect.companyLead": "C 級或 VP",
    "onboardingTeamRoleSelect.teamRoleSelect.notLead": "我不管理團隊",
    "onboardingTeamRoleSelect.teamRoleSelect.orgLead": "部門主管",
    "onboardingTeamRoleSelect.teamRoleSelect.placeholder": "選擇團隊角色",
    "onboardingTeamRoleSelect.teamRoleSelect.teamLead": "團隊主管",
    "onboardingTeamRoleSelect.teamTypeMenu.title": "團隊類型",
    "onboardingWorkInvite.step.subtitle":
      "以團隊開始使用 Notion：合作變得更強大",
    "onboardingWorkInvite.step.title":
      "你的工作區已設定！邀請你的團隊成員加入你",
    "onboardingWorkspaceChoose.chooseWorkspaceButton.label": "{workspaceName}",
    "onboardingWorkspaceChoose.createSpaceOption.message": "建立新工作區",
    "onboardingWorkspaceChoose.joinWorkspaceButton.join.label": "加入",
    "onboardingWorkspaceChoose.joinWorkspaceButton.label":
      "加入 <boldtext>{workspaceName}</boldtext>",
    "onboardingWorkspaceChoose.joinWorkspaceButton.memberCount.label":
      "{memberCount, plural, other {{memberCount} 名成員}}",
    "onboardingWorkspaceChoose.mobileStage.subtitle":
      "{numberOfWorkspaces, plural, other {看來你已被邀請到 {numberOfWorkspaces} 個工作區，現在就加入吧！}}",
    "onboardingWorkspaceChoose.mobileStage.title": "加入工作區",
    "onboardingWorkspaceChoose.stage.disableSpaceCreationTooltip":
      "你的組織已停用工作區建立作業。請加入現有工作區。",
    "onboardingWorkspaceChoose.stage.disabledSpaceCreationTooltipWithEmailDomain":
      "你的組織 {emailDomain} 已停用工作區建立作業。請加入現有工作區。",
    "onboardingWorkspaceChoose.stage.subtitle":
      "{numberOfWorkspaces, plural, other {你已被邀請到 {numberOfWorkspaces} 個工作區。選擇加入，或建立新的工作區。}}",
    "onboardingWorkspaceChoose.stage.subtitleWithNoCreateOption":
      "{numberOfWorkspaces, plural, other {你已受邀至 {numberOfWorkspaces} 個工作區。請擇一加入。}}",
    "onboardingWorkspaceChoose.stage.title": "與你的隊友一起加入 Notion",
    "onboardingWorkspaceCreate.fieldUndefinedError.message":
      "未定義工作區建立字段。",
    "onboardingWorkspaceCreate.nextButton.labelInvite": "繼續",
    "onboardingWorkspaceCreate.roleOnTeam.label": "在團隊中的角色",
    "onboardingWorkspaceCreate.stage.subtitle": "為你的隊友填寫一些詳細資訊。",
    "onboardingWorkspaceCreate.stage.team.title": "建立團隊工作區",
    "onboardingWorkspaceCreate.workspaceNameInput.hint": "你公司或組織的名稱。",
    "onboardingWorkspaceCreate.workspaceNameInput.label": "工作區名稱",
    "onboardingWorkspaceCreate.workspaceNameInput.placeholder": "Acme 公司",
    "onboardingWorkspaceMobileScroller.mobileCancelButton.label": "取消",
    "onboardingWorkspacePlanChoose.confirmationDialog.acceptLabel": "繼續",
    "onboardingWorkspacePlanChoose.confirmationDialog.cancelLabel": "取消",
    "onboardingWorkspacePlanChoose.confirmationDialog.description":
      "你的帳號與組織宣告的電子郵件網域 <bold>{emailDomain}</bold> 相關聯。你使用此電子郵件網域建立的任何工作區可由組織管理。如需更多資訊，請參閱<domainclaimlink>此頁面</domainclaimlink>。",
    "onboardingWorkspacePlanChoose.confirmationDialog.message":
      "建立新工作區？",
    "onboardingWorkspacePlanChoose.continueButton.label": "繼續",
    "onboardingWorkspacePlanChoose.mobileStep.subtitle":
      "我們將通過你的選擇簡化初期設定體驗。",
    "onboardingWorkspacePlanChoose.mobileStep.title": "我用 Notion 來…",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.description":
      "寫得更好。想得更清晰。一切井然有序。",
    "onboardingWorkspacePlanChoose.personalUseCaseButtonExperiment.label":
      "供個人使用",
    "onboardingWorkspacePlanChoose.schoolUseCaseButton.callout": "一人使用免費",
    "onboardingWorkspacePlanChoose.schoolUseCaseButton.description":
      "在同一個地方保存你的筆記、研究和任務。",
    "onboardingWorkspacePlanChoose.schoolUseCaseButton.label": "適用於學校",
    "onboardingWorkspacePlanChoose.step.subtitle":
      "我們將通過你的選擇簡化初期設定體驗。",
    "onboardingWorkspacePlanChoose.step.title": "你打算如何使用 Notion？",
    "onboardingWorkspacePlanChoose.step.title_exp01":
      "歡迎 {name}！你要將 Notion 用於什麼內容？",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.description":
      "協作處理你的檔案、項目和知識庫。",
    "onboardingWorkspacePlanChoose.teamUseCaseButtonExperiment.label":
      "供我的團隊使用",
    "onboardingWorkspacePlanChoose.verifiedDomain.byline":
      "你目前的登入身分為 <bold>{email}</bold>。建立此工作區即表示你接受管理者為電子郵件網域 <bold>{emailDomain}</bold> 的擁有者。如需更多資訊，請參閱<domainclaimlink>此頁面</domainclaimlink>。",
    "onboardingWorkspaceProfileV2.roleOnTeam.label": "你的角色",
    "openAndDefaultTeamInformation.caption": "任何人都可以查看並加入此團隊空間",
    "openAndDefaultTeamInformation.defaultPill": "預設",
    "openAndDefaultTeamInformation.title": "開啟",
    "openInDesktopAppPopup.alwaysOpenLinksLabel": "一律在程式中開啟",
    "openInDesktopAppPopup.appDownloadButton": "沒有程式嗎？請下載",
    "openInDesktopAppPopup.closeButton": "關閉",
    "openInDesktopAppPopup.header": "在 Notion 桌面版程式中開啟？",
    "openInDesktopAppPopup.learnMoreButton": "沒有程式嗎？了解更多",
    "openInDesktopAppPopup.openInAppButton": "在程式中開啟",
    "openInDesktopAppPopup.primaryText":
      "如果已安裝 Notion 桌面版程式，依預設可在程式中開啟 Notion 連結。",
    "openInDesktopAppPopup.secondaryText":
      "你可以稍後在「<strongtext>設定和成員</strongtext>」中變更此項目。",
    "openInDesktopAppSetting.description.messageMac":
      "你必須安裝 <desktopapplink>Mac 程式</desktopapplink>。",
    "openInDesktopAppSetting.description.messageWindows":
      "你必須安裝 <desktopapplink>Mac 或 Windows 程式</desktopapplink>。",
    "openInDesktopAppSetting.desktopConfigureButton": "設定",
    "openInDesktopAppSetting.desktopConfigureCaption":
      "你可以設定瀏覽器連結並在此程式中開啟。",
    "openInDesktopAppSetting.title": "在桌面應用程式中開啟連結",
    "openInDesktopAppSetting.titleMac": "在 Mac 程式中開啟連結",
    "openInDesktopAppSetting.titleWindows": "在 Windows 程式中開啟連結",
    "outliner.NoPagesInside.placeholder": "內無頁面",
    "outliner.addToPrivatePages": "移至<mediumtext>私人頁面</mediumtext>",
    "outlinerItem.pinnedPagePill.title": "已釘選",
    "outlinerTeamOverflow.menu.browseTeamspaces": "瀏覽團隊空間",
    "outlinerTeamOverflow.restoreArchivedTeam.disabledTooltipText":
      "只有團隊空間擁有者才能恢復歸檔的團隊空間。",
    "outlinerTeamOverflow.teamActions.restoreLabel": "恢復團隊空間",
    "outlinerTeamToggleButton.closedTeamLabel": "封閉式團隊空間",
    "outlinerTeamToggleButton.joinTeamButton": "加入",
    "outlinerTeamToggleButton.joinedBadge": "已加入",
    "outlinerToggleButton.popup.buttonText": "好",
    "outlinerToggleButton.popup.skipText": "清除模版",
    "outlinerViewAllPopover.menu.header": "已分享",
    "outlinerViewAllPopover.search.noMatchesPrompt": "找不到頁面",
    "outlinerViewAllPopover.search.placeholder": "搜尋共享頁面",
    "outlinerViewAllPopover.search.teamPlaceholder2": "搜尋 {teamName}…",
    "outlinerViewAllPopover.sortSelect.allPages": "所有頁面",
    "outlinerViewAllPopover.sortSelect.menuTitle": "排序",
    "outlinerViewAllPopover.sortSelect.ownedPages": "擁有的頁面",
    "outlinerViewAllPopover.sortSelect.sharedPages": "共用頁面",
    "page.backlinks.label": "連結到此頁面",
    "page.backlinks.more": "其他 {count} 個",
    "page.backlinks.privatePages":
      "{count, plural, other {{count} 個私人頁面}}",
    "page.backlinks.privatePagesTooltip": "已在你無法存取的頁面同步。",
    "page.blockActionMenu.tooltip": "重新命名、刪除等…",
    "page.changeIcon.tooltip": "變更圖示",
    "pageCover.changeCover.text": "變更封面",
    "pageCover.embedType.buttonText": "送出",
    "pageCover.embedType.caption": "適用於網路上任何圖片。",
    "pageCover.embedType.placeholder": "貼上圖片連結…",
    "pageCover.embedType.title": "連結",
    "pageCover.errorDialogMessage.uploadFailed": "上傳失敗",
    "pageCover.fileType.caption": "寬於 {idealImageWidth}px 的圖片效果最好。",
    "pageCover.gradientCategory.header": "顏色和漸變",
    "pageCover.gradients10.title": "漸變 10",
    "pageCover.gradients11.title": "漸變 11",
    "pageCover.gradients2.title": "漸變 2",
    "pageCover.gradients3.title": "漸變 3",
    "pageCover.gradients4.title": "漸變 4",
    "pageCover.gradients5.title": "漸變 5",
    "pageCover.gradients8.title": "漸變 8",
    "pageCover.metArnoldBocklin1880.subtitle": "1880，死亡之島",
    "pageCover.metArnoldBocklin1880.title": "阿諾德・勃克林",
    "pageCover.metBruegel1565.subtitle": "1565",
    "pageCover.metBruegel1565.title": "老彼得・布勒哲爾",
    "pageCover.metCamillePissarro1896.subtitle": "1896，陰天的早晨，魯昂",
    "pageCover.metCamillePissarro1896.title": "卡米耶・畢沙羅",
    "pageCover.metCanaletto1720.subtitle": "1720 年代",
    "pageCover.metCanaletto1720.title": "加納萊托",
    "pageCover.metCategory.header": "大都會藝術博物館",
    "pageCover.metCezanne1890.subtitle": "1890，靜物：蘋果和櫻草花",
    "pageCover.metCezanne1890.title": "保羅・塞尚",
    "pageCover.metEdgarDegas1874.subtitle": "1874，舞蹈班",
    "pageCover.metEdgarDegas1874.title": "艾德加・竇加",
    "pageCover.metEmanuelLeutze.subtitle": "1851，華盛頓橫渡德拉瓦河",
    "pageCover.metEmanuelLeutze.title": "埃瑪紐埃爾・洛伊茨",
    "pageCover.metFitzHenryLane.subtitle": "1854，金州號進入紐約港",
    "pageCover.metFitzHenryLane.title": "菲茨・亨利・萊恩",
    "pageCover.metFredericEdwinChurch1871.subtitle": "1871，帕德嫩神廟",
    "pageCover.metFredericEdwinChurch1871.title": "弗雷德里克・埃德溫・丘奇",
    "pageCover.metGeorgesSeurat1884.subtitle": "1884，大碗島的星期天下午",
    "pageCover.metGeorgesSeurat1884.title": "喬治・秀拉",
    "pageCover.metGerome1890.subtitle": "1890，皮格馬利翁和加拉塔",
    "pageCover.metGerome1890.title": "尚-李奧・傑洛姆",
    "pageCover.metGoya1789.subtitle": "1787",
    "pageCover.metGoya1789.title": "哥雅",
    "pageCover.metHenriRousseau1907.subtitle": "1907，猛獅就食",
    "pageCover.metHenriRousseau1907.title": "亨利・盧梭",
    "pageCover.metHenriTl1892.subtitle": "1892，Divan Japonais",
    "pageCover.metHenriTl1892.title": "亨利・德・土魯斯-羅特列克",
    "pageCover.metHenryLerolle1885.subtitle": "1885，管風琴排練",
    "pageCover.metHenryLerolle1885.title": "亨利・羅洛爾",
    "pageCover.metHoracePippin.subtitle": "1945，維多利亞式室內 1",
    "pageCover.metHoracePippin.title": "霍勒斯・皮平",
    "pageCover.metJeanBeraud.subtitle":
      "1877 年，巴黎聖菲利普・杜・羅勒教堂的週日",
    "pageCover.metJeanBeraud.title": "讓・貝羅",
    "pageCover.metJohnSingerSargentMorocco.subtitle": "1879，摩洛哥",
    "pageCover.metJohnSingerSargentMorocco.title": "約翰・辛格・薩金特",
    "pageCover.metJosephHidley1870.subtitle": "1870，波斯滕基爾景觀，紐約",
    "pageCover.metJosephHidley1870.title": "約瑟・H・希德利",
    "pageCover.metJulesTavernier1878.subtitle":
      "1878，在清澈湖中的地下圓形舞廳裡跳舞，加州",
    "pageCover.metJulesTavernier1878.title": "朱爾斯・塔弗尼爾",
    "pageCover.metKlimt1912.subtitle": "1912",
    "pageCover.metKlimt1912.title": "古斯塔夫・克林姆",
    "pageCover.metPatternsCategory.header": "大都會藝術博物館 - 圖案",
    "pageCover.metPaulSignac.subtitle": "1891，孔卡爾諾・傍晚的寧靜",
    "pageCover.metPaulSignac.title": "保羅・希涅克",
    "pageCover.metSilkKashanCarpet.subtitle": "16 世紀",
    "pageCover.metSilkKashanCarpet.title": "真絲喀山地毯",
    "pageCover.metTerracottaFuneraryPlaque.subtitle": "約公元前 520 ~ 510 年",
    "pageCover.metTerracottaFuneraryPlaque.title": "紅陶葬禮牌匾",
    "pageCover.metTheUnicornInCaptivity.subtitle": "約 1495 ~ 1505 年",
    "pageCover.metTheUnicornInCaptivity.title": "被囚禁的獨角獸",
    "pageCover.metVincentVanGoghCradle.subtitle": "1889，搖籃曲",
    "pageCover.metVincentVanGoghCradle.title": "文森・梵谷",
    "pageCover.metVincentVanGoghGinoux.subtitle":
      "1890，拉萊西安：約瑟夫・米歇爾・吉諾夫人",
    "pageCover.metVincentVanGoghGinoux.title": "文森・梵谷",
    "pageCover.metVincentVanGoghIrises.subtitle": "1890，鳶尾花",
    "pageCover.metVincentVanGoghIrises.title": "文森・梵谷",
    "pageCover.metVincentVanGoghOleanders.subtitle": "1888，奧林德",
    "pageCover.metVincentVanGoghOleanders.title": "文森・梵谷",
    "pageCover.metWilliamMorris1875.subtitle": "1875，萬壽菊",
    "pageCover.metWilliamMorris1875.title": "威廉・莫里斯",
    "pageCover.metWilliamMorris1877Willow.subtitle": "1875，柳樹枝",
    "pageCover.metWilliamMorris1877Willow.title": "威廉・莫里斯",
    "pageCover.metWilliamMorris1878.subtitle": "1878，鳥",
    "pageCover.metWilliamMorris1878.title": "威廉・莫里斯",
    "pageCover.metWilliamTurner1835.subtitle":
      "1835，威尼斯，來自安康聖母聖殿的門廊",
    "pageCover.metWilliamTurner1835.title": "威廉・特納",
    "pageCover.metWinslowHomerMaineCoast.subtitle": "1896，緬因州海岸",
    "pageCover.metWinslowHomerMaineCoast.title": "溫斯洛・霍默",
    "pageCover.metWoodcutsCategory.header": "大都會藝術博物館 - 日本版畫",
    "pageCover.mobileMenu.title": "頁面封面",
    "pageCover.nasaBruceMccandlessSpacewalk.subtitle": "1984",
    "pageCover.nasaBruceMccandlessSpacewalk.title":
      "布魯斯・麥克坎德雷斯太空漫步",
    "pageCover.nasaBuzzAldrinOnTheMoon.subtitle": "1969",
    "pageCover.nasaBuzzAldrinOnTheMoon.title": "月球上的伯茲・艾德林",
    "pageCover.nasaCarinaNebula.subtitle": "2015",
    "pageCover.nasaCarinaNebula.title": "船底座星雲",
    "pageCover.nasaCategory.header": "NASA 檔案館",
    "pageCover.nasaEagleInLunarOrbit.subtitle": "1969",
    "pageCover.nasaEagleInLunarOrbit.title": "月球軌道中的鷹",
    "pageCover.nasaEarthGrid.title": "地球網格",
    "pageCover.nasaEvaDuringSkylab3.subtitle": "1973",
    "pageCover.nasaEvaDuringSkylab3.title": "太空實驗室 3 號的艙外活動",
    "pageCover.nasaFingerprintsOfWaterOnTheSand.subtitle": "2015",
    "pageCover.nasaFingerprintsOfWaterOnTheSand.title": "沙地上的水",
    "pageCover.nasaGreatSandyDesertAustralia.subtitle": "2013",
    "pageCover.nasaGreatSandyDesertAustralia.title": "澳大利亞大沙沙漠",
    "pageCover.nasaIbmType704.subtitle": "1957",
    "pageCover.nasaIbmType704.title": "IBM Type 704 系統",
    "pageCover.nasaMultiAxisGimbalRig.subtitle": "1959",
    "pageCover.nasaMultiAxisGimbalRig.title": "多軸萬向穩定器",
    "pageCover.nasaNewYorkCityGrid.subtitle": "2015",
    "pageCover.nasaNewYorkCityGrid.title": "紐約市路網",
    "pageCover.nasaOrionNebula.subtitle": "1994",
    "pageCover.nasaOrionNebula.title": "獵戶座星雲",
    "pageCover.nasaReducedGravityWalkingSimulator.subtitle": "1963",
    "pageCover.nasaReducedGravityWalkingSimulator.title": "減重力步行模擬器",
    "pageCover.nasaRobertStewartSpacewalk.subtitle": "1984",
    "pageCover.nasaRobertStewartSpacewalk.title": "羅伯特・斯圖爾特太空漫步",
    "pageCover.nasaRobertStewartSpacewalk2.subtitle": "1984",
    "pageCover.nasaRobertStewartSpacewalk2.title": "羅伯特・斯圖爾特太空漫步 2",
    "pageCover.nasaSpaceShuttleChallenger.subtitle": "1985",
    "pageCover.nasaSpaceShuttleChallenger.title": "挑戰者號太空梭",
    "pageCover.nasaSpaceShuttleColumbia.subtitle": "1986",
    "pageCover.nasaSpaceShuttleColumbia.title": "哥倫比亞號太空梭",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.subtitle": "1983",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.title":
      "哥倫比亞號太空梭和日出",
    "pageCover.nasaTheBlueMarble.subtitle": "1972",
    "pageCover.nasaTheBlueMarble.title": "藍色彈珠",
    "pageCover.nasaTimPeakeSpacewalk.subtitle": "2015",
    "pageCover.nasaTimPeakeSpacewalk.title": "提姆・皮克太空漫步",
    "pageCover.nasaTransonicTunnel.subtitle": "1990",
    "pageCover.nasaTransonicTunnel.title": "穿音速風洞",
    "pageCover.nasaWrightsFirstFlight.subtitle": "1903",
    "pageCover.nasaWrightsFirstFlight.title": "萊特兄弟的第一次飛行",
    "pageCover.reposition.cancelText": "取消",
    "pageCover.reposition.text": "調整位置",
    "pageCover.rijksmuseumAvercamp1608.subtitle": "1608，冬季景觀與滑冰者",
    "pageCover.rijksmuseumAvercamp1608.title": "亨德里克・阿弗坎普",
    "pageCover.rijksmuseumAvercamp1620.subtitle": "1620，享受小鎮附近的冰",
    "pageCover.rijksmuseumAvercamp1620.title": "亨德里克・阿弗坎普",
    "pageCover.rijksmuseumCategory.header": "荷蘭國立博物館",
    "pageCover.rijksmuseumClaesz1628.subtitle":
      "1628，範尼塔斯靜物：拔刺的男孩",
    "pageCover.rijksmuseumClaesz1628.title": "彼得・克萊什",
    "pageCover.rijksmuseumJanLievens1627.subtitle": "1627，靜物：書",
    "pageCover.rijksmuseumJanLievens1627.title": "揚・利文斯",
    "pageCover.rijksmuseumJansz1636.subtitle": "1636，哈萊姆聖巴沃教堂內部",
    "pageCover.rijksmuseumJansz1636.title": "彼得・詹斯",
    "pageCover.rijksmuseumJansz1637.subtitle": "1637，烏得勒支的馬里亞克大教堂",
    "pageCover.rijksmuseumJansz1637.title": "彼得・詹斯",
    "pageCover.rijksmuseumJansz1641.subtitle":
      "1641，烏得勒支瑪麗亞教堂的中殿和合唱團",
    "pageCover.rijksmuseumJansz1641.title": "彼得・詹斯",
    "pageCover.rijksmuseumJansz1649.subtitle":
      "1649，阿森德爾夫特（Sendelft）的聖奧杜弗斯克教堂的內部",
    "pageCover.rijksmuseumJansz1649.title": "彼得・詹斯",
    "pageCover.rijksmuseumMignons1660.subtitle": "1660，靜物：花和手錶",
    "pageCover.rijksmuseumMignons1660.title": "亞伯拉罕・米尼翁",
    "pageCover.rijksmuseumRembrandt1642.subtitle": "1642，夜巡",
    "pageCover.rijksmuseumRembrandt1642.title": "林布蘭",
    "pageCover.rijksmuseumVermeerTheMilkmaid.subtitle": "1660，倒牛奶的女僕",
    "pageCover.rijksmuseumVermeerTheMilkmaid.title": "約翰尼斯・維米爾",
    "pageCover.savePosition.text": "儲存位置",
    "pageCover.solidBeige.title": "米色",
    "pageCover.solidBlue.title": "藍色",
    "pageCover.solidRed.title": "紅色",
    "pageCover.solidYellow.title": "黃色",
    "pageCover.webbTelescope.header": "詹姆斯·韋伯太空望遠鏡",
    "pageCover.webbTelescopeCosmitCliffs": "船底座星雲中的宇宙斷崖",
    "pageCover.webbTelescopeDeepField": "深空",
    "pageCover.webbTelescopeSouthernRingNebula": "南環星雲",
    "pageCover.webbTelescopeStephansQuintet": "史蒂芬五重星系",
    "pageCover.woodcuts1.subtitle": "1830，神奈川沖浪裏",
    "pageCover.woodcuts1.title": "葛飾北齋",
    "pageCover.woodcuts10.subtitle": "1840，龜山",
    "pageCover.woodcuts10.title": "歌川廣重",
    "pageCover.woodcuts11.subtitle": "1900，燕子和茶花",
    "pageCover.woodcuts11.title": "伊藤若沖",
    "pageCover.woodcuts13.subtitle": "1858，備前市由賀山",
    "pageCover.woodcuts13.title": "歌川廣重",
    "pageCover.woodcuts14.subtitle": "1830，甲州犬目峠",
    "pageCover.woodcuts14.title": "葛飾北齋",
    "pageCover.woodcuts15.subtitle": "1842，草津站",
    "pageCover.woodcuts15.title": "歌川廣重",
    "pageCover.woodcuts16.subtitle": "瀬田夕照",
    "pageCover.woodcuts16.title": "歌川廣重",
    "pageCover.woodcuts2.subtitle": "1830，山下白雨",
    "pageCover.woodcuts2.title": "葛飾北齋",
    "pageCover.woodcuts3.subtitle": "1830，凱風快晴",
    "pageCover.woodcuts3.title": "葛飾北齋",
    "pageCover.woodcuts4.subtitle": "1842，錦鯉",
    "pageCover.woodcuts4.title": "溪齋英泉",
    "pageCover.woodcuts5.subtitle": "1878，江戶市郊的冬夜街景",
    "pageCover.woodcuts5.title": "小林清親",
    "pageCover.woodcuts6.subtitle": "1850，山景・臼井通的淺間",
    "pageCover.woodcuts6.title": "歌川國芳",
    "pageCover.woodcuts7.subtitle": "1833，京師・三条大橋",
    "pageCover.woodcuts7.title": "歌川廣重",
    "pageCover.woodcuts8.subtitle": "1830，甲州三岛越",
    "pageCover.woodcuts8.title": "葛飾北齋",
    "pageCover.woodcuts9.subtitle": "1830，甲州石班澤",
    "pageCover.woodcuts9.title": "葛飾北齋",
    "pageCover.woodcutsSekka1.subtitle": "1909，巴之雪",
    "pageCover.woodcutsSekka1.title": "神坂雪佳",
    "pageCover.woodcutsSekka2.subtitle": "1903，熏香道具",
    "pageCover.woodcutsSekka2.title": "神坂雪佳",
    "pageCover.woodcutsSekka3.subtitle": "1909，春",
    "pageCover.woodcutsSekka3.title": "神坂雪佳",
    "pageDescription.emptyPlaceholder": "加入說明…",
    "pageDescription.lockedTooltip.message":
      "請解鎖{pageTitleWithIcon}以編輯說明。",
    "pageErrorIndicator.loadingError.message":
      "糟糕，載入此頁面時發生錯誤。請刷新以便重新載入。",
    "pageErrorIndicator.reloadButton.label": "重新整理",
    "pageLockIndicator.lockedButton.label": "已鎖定",
    "pageLockIndicator.lockedTooltip":
      "由{lockedByPerson}{br}鎖定，以防止意外編輯。{br}<prompttext>按一下解鎖</prompttext>",
    "pageLockIndicator.mobileLockedButton.label": "已鎖定",
    "pageLockIndicator.mobileRelockButton.label": "重新鎖定",
    "pageLockIndicator.relockButton.label": "重新鎖定",
    "pageMentionOverlay.openPage": "開啟頁面",
    "pageMoreButton.wordCount.caption": "字數：{count}",
    "pageOfflineIndicator.hasLocalData.message":
      "請連接網路後加載此頁面，之後你便可以在離線時存取它。",
    "pageOfflineIndicator.noLocalData.message":
      "欸，你似乎已離線。請連接網路後查看此頁面。",
    "pageOnAppStoreSetting.description.message":
      "選擇 Notion 啟動或你切換工作區時要顯示的內容。",
    "pageOnAppStoreSetting.firstPage.label": "側邊欄的置頂頁",
    "pageOnAppStoreSetting.lastVisitedPage.label": "上次造訪的頁面",
    "pageOnAppStoreSetting.title": "於啟動時開啟",
    "pagePermissionItem.allowComments.setting": "允許評論",
    "pagePermissionItem.allowComments.tooltip":
      "任何已登入的 Notion 使用者都可以在此頁面上發表評論。",
    "pagePermissionItem.allowDuplicateTemplate.setting": "允許建立複本",
    "pagePermissionItem.allowDuplicateTemplate.tooltip":
      "如果允許，這將允許其他人將你的公開頁面複製到他們的工作區。",
    "pagePermissionItem.allowEdits.setting": "允許編輯",
    "pagePermissionItem.allowEdits.tooltip":
      "任何已登入的 Notion 使用者都可以編輯此頁面。僅與你信任的人分享此秘密連結。",
    "pagePermissionItem.allowSearchEngine.tooltip":
      "如果允許，你的公開頁面可能會出現在搜尋引擎（如Google）中，但僅當你或其他人在Web 的其他地方連結到此網頁時。",
    "pagePermissionItem.allowSearchEngines.setting": "搜尋引擎索引",
    "pagePermissionItem.fromInheritedRecordPermissions.setting":
      "來自 {linkBoxWithPageTitle}",
    "pagePermissionItem.inheritedRecordPermissions.setting":
      "根據 {linkBoxWithPageTitle}",
    "pagePermissionItem.searchEngineUpgradeTooltip.caption":
      "讓你的頁面出現在搜尋引擎結果中。",
    "pagePermissionItem.searchEngineUpgradeTooltip.title":
      "升級以開啓搜尋引擎索引",
    "pagePermissionItem.showLinkOptions.label": "顯示連結選項",
    "pageProperties.editProperty.customizePage.label": "自訂頁面",
    "pagePropertiesHeader.created.label": "於 {timestamp} 建立",
    "pagePropertiesHeader.createdBy.label": "由 {creator} {timestamp} 建立",
    "pagePropertiesHeader.edited.label": "已於 {timestamp} 編輯",
    "pagePropertiesHeader.editedBy.label": "由 {editor} {timestamp} 編輯",
    "pagePropertiesHeader.lastEditedBy.label":
      "上次由 {editor} {timestamp} 編輯",
    "pagePropertyRowValue.addRelationButtonMessage": "加入頁面",
    "pageShareMenu.copiedLinkButton.label": "✓ 已複製",
    "pageShareMenu.copyMaybePublicLinkButton.label.web": "複製網頁連結",
    "pageShareMenu.copyPageLinkButton.label": "複製頁面連結",
    "pageShareMenu.restoreTeamPermissionsBanner.label":
      "頁面存取權限與 {linkBoxWithPageTitle} 不同。",
    "pageShareMenu.restrictedAccessBanner.label":
      "存取受限。可能不會與{linkBoxWithPageTitle}中的所有人分享。",
    "pageShareMenu.restrictedAccessBanner.mobileLabel":
      "頁面存取權限受限於下方人員。",
    "pageShareMenu.sharePageLinkButton.label": "分享頁面連結",
    "pageSnapshotPreview.unknownPreviewLoadError.message": "出了些問題。",
    "pageTemplateModal.goToFullTemplateGalleryButton.label": "瀏覽更多模版",
    "pageTemplateModal.mobileModal.title": "試試此模版",
    "pageTemplateModal.mobileModal.useButton.label": "使用",
    "pageTemplateModal.modifiedTemplateDialog.discardEditsButton.label": "放棄",
    "pageTemplateModal.modifiedTemplateDialog.prompt":
      "看起來你已經修改了模版。要儲存編輯嗎？",
    "pageTemplateModal.modifiedTemplateDialog.saveButton.label": "儲存修改",
    "pageTemplateModal.useTemplateButton.label": "使用此模版",
    "pageTemplatePreview.offline.message": "請連接網路後查看此模版。",
    "pageTitle.flaggedContent": "已標幟的內容",
    "pageUpdatesModal.mobileMenu.title": "頁面更新",
    "pageViewBlock.add.pageComment": "加入評論",
    "pageViewBlock.add.pageCommentMobile": "評論",
    "pageViewBlock.add.pageCover": "加入封面",
    "pageViewBlock.add.pageCoverMobile": "封面",
    "pageViewBlock.add.pageIcon": "加入圖示",
    "pageViewBlock.add.pageIconMobile": "圖示",
    "pageViewBlock.add.pageTitle": "新增標題",
    "pageViewBlock.add.pageTitleMobile": "標題",
    "pageViewBlock.addDescription.button": "加入說明",
    "pageViewBlock.addDescription.mobileButton": "說明",
    "pageViewBlock.archivedTeamBanner.message": "此頁面位於歸檔團隊空間中。",
    "pageViewBlock.contentDuplication.learnMoreButton.label": "了解更多",
    "pageViewBlock.contentDuplication.linkToTargetWorkspace.label":
      "造訪新的工作區",
    "pageViewBlock.contentDuplicationCompleted.message":
      "此工作區的內容已建立複本。瀏覽至新的工作區以查看編輯。",
    "pageViewBlock.contentDuplicationInProgress.message":
      "此工作區在建議內容複本時處於唯讀狀態。",
    "pageViewBlock.editingPageBanner.status": "你現在可以編輯此頁面。",
    "pageViewBlock.editingPageBanner.stop": "完成編輯",
    "pageViewBlock.evernoteBanner.contents":
      "已匯入{totalNumberOfNotes}個筆記，共{totalNumberOfNotes}個",
    "pageViewBlock.hideDescription.button": "隱藏說明",
    "pageViewBlock.movedPageBanner.ancestorMovedMessage":
      "{movedAncestorLink} 已移至 {targetSpaceLink}。",
    "pageViewBlock.movedPageBanner.pageMovedMessage":
      "已移至 {targetSpaceLink}。",
    "pageViewBlock.pagePropertiesHeader.createdBy": "建立者：{person}",
    "pageViewBlock.pagePropertiesHeader.lastEditedBy": "上次編輯者：{person}",
    "pageViewBlock.permanentlyDeleted.message": "此頁面已遭永久刪除。",
    "pageViewBlock.resolvedComments.menuTabTitle": "已解決的評論",
    "pageViewBlock.show.backlinks":
      "{numberOfBacklinks, plural, other {{numberOfBacklinks} 個反向連結}}",
    "pageViewBlock.show.backlinks.tooltip": "顯示連結到此頁面的頁面",
    "pageViewBlock.show.pageComments":
      "{numberOfComments, plural, other {{numberOfComments} 則評論}}",
    "pageViewBlock.showDescription.button": "顯示說明",
    "pageViewBlock.showDescription.mobileButton": "說明",
    "pageViewBlock.showResolvedComments.button":
      "{numberOfResolvedComments, plural, other {{numberOfResolvedComments} 則已解決的評論}}",
    "pageViewBlock.syncedBlock.original": "連結至原始 URL",
    "pageViewBlock.templatePageBanner.backButton.label": "返回",
    "pageViewBlock.templatePageBanner.editTemplateLabel":
      "<mediumtext>你正在編輯 </mediumtext> {pageTitleWithIcon} 的模版",
    "pageViewBlock.templatePageBanner.learnMoreLink": "了解更多",
    "pageViewBlock.templatePageBanner.mobile.editTemplateLabel":
      "{pageTitleWithIcon} 中的<mediumtext>模版</mediumtext>",
    "pageViewBlock.templatePageBanner.viewTemplateLabel":
      "<mediumtext>你正在查看</mediumtext> {pageTitleWithIcon} 的模板",
    "pageViewBlock.trashBanner.deletePermanentlyButton.label": "永久刪除",
    "pageViewBlock.trashBanner.message": "此頁面位於垃圾桶中。",
    "pageViewBlock.trashBanner.restoreButton.label": "恢復頁面",
    "pageViewBlock.trashBanner.restoreCurrentPageButton.label":
      "恢復目前的頁面",
    "pageViewBlock.trashBanner.restoreLastVersionButton.label": "恢復上個版本",
    "page_analytics.disabled.description":
      "已在 {name} 中關閉所有頁面的頁面檢視者和分析",
    "page_analytics.disabled.description.unnamed":
      "已在你的空間中關閉所有頁面的頁面檢視者和分析",
    "page_analytics.disabled.heading": "已停用頁面檢視者追蹤",
    "page_analytics.disabled.learnMore": "了解更多",
    "page_analytics.editors.collapse": "顯示較少編輯者",
    "page_analytics.editors.createdBy": "建立者",
    "page_analytics.editors.editedBy": "編輯者",
    "page_analytics.editors.expand": "顯示所有編輯者",
    "page_analytics.editors.lastEdited": "上次編輯：{timeAgo}",
    "page_analytics.editors.title": "編輯者",
    "page_analytics.empty.buttonLabel": "設定",
    "page_analytics.empty.description":
      "當你與其他人分享此頁面後，即可看到查看此頁面的人數。",
    "page_analytics.empty.heading": "還沒有頁面分析",
    "page_analytics.empty.linkLabel": "瞭解更多",
    "page_analytics.opt_out.caption":
      "擁有編輯或完整存取權限的使用者能夠看到查看此頁面的人員，以及時間點",
    "page_analytics.opt_out.do_not_record": "不要記錄",
    "page_analytics.opt_out.record": "記錄",
    "page_analytics.opt_out.title": "我的查看記錄",
    "page_analytics.timeseries.feedback": "意見回饋",
    "page_analytics.timeseries.header": "頁面視圖",
    "page_analytics.timeseries.learnMore": "了解更多",
    "page_analytics.timeseries.settings": "設定",
    "page_analytics.timeseries.title": "視圖",
    "page_analytics.timeseries.totalViews": "（共 {totalViews} 個）",
    "page_analytics.timeseries.total_views":
      "{views, plural, other {共 {views} 個視圖}}",
    "page_analytics.timeseries.unique_views":
      "{uniqueViews, plural, other {{uniqueViews} 個唯一視圖}}",
    "page_analytics.timeseries.views":
      "{views, plural, other {{views} 個視圖}}",
    "page_analytics.viewers.collapse": "顯示較少檢視者",
    "page_analytics.viewers.expand": "顯示所有檢視者",
    "page_analytics.viewers.title": "檢視者",
    "passwordChangeNotificationEmail.changePassword.message":
      "可以使用你的新密碼和電子郵件地址 {emailAddress} 登入到 Notion",
    "passwordChangeNotificationEmail.newPasswordSet.headline":
      "你的 Notion 密碼已設定完畢！",
    "passwordChangeNotificationEmail.newPasswordSet.subjectLine":
      "新密碼已建立",
    "passwordChangeNotificationEmail.passwordChanged.headline":
      "你已變更 Notion 密碼",
    "passwordChangeNotificationEmail.passwordChanged.subjectLine":
      "你的密碼已被變更",
    "passwordChangeNotificationEmail.passwordRemoved.headline":
      "你的 Notion 密碼已被刪除",
    "passwordChangeNotificationEmail.passwordRemoved.subjectLine":
      "你的密碼已被移除",
    "passwordChangeNotificationEmail.removePassword.message":
      "你仍然可以通過登入頁面上的「用電子郵件登入」來存取 Notion。我們會通過電子郵件向你傳送一個臨時登入碼。",
    "passwordChangeNotificationEmail.setPassword.message":
      "現在你可以使用你的電子郵件地址 {emailAddress} 和新密碼來存取工作區。",
    "passwordChangeNotificationEmail.unintendedChange.message":
      "如果你沒有進行此變更，請傳送電子郵件到 team@makenotion.com。去「我的帳號」設定中變更密碼，或使用「忘記密碼」重設密碼。",
    "passwordResetEmail.clickToResetPassword.message": "按一下這裡重設密碼",
    "passwordResetEmail.emailSubject": "重置你的密碼",
    "passwordResetEmail.emailText.message":
      "通過造訪以下連結重置密碼： {resetUrl}",
    "passwordResetEmail.emailTitle": "重置你的 Notion 密碼",
    "passwordResetEmail.noResetRequested.message":
      "如果你沒有要求重置，請不要擔心。你可以安全地忽略此電子郵件。",
    "passwordSetting.changePasswordButton.label": "更改密码",
    "passwordSettings.changePasswordButton.label": "變更密碼",
    "passwordSettings.changePasswordModal.confirmPasswordInput.label":
      "确认新密码",
    "passwordSettings.changePasswordModal.newPasswordMismatchError":
      "你的新密碼不匹配。",
    "passwordSettings.changePasswordModal.newPasswordNotRepeatedError":
      "請重複你的新密碼。",
    "passwordSettings.changePasswordModal.newPasswordsMismatchError":
      "你的密碼不匹配。",
    "passwordSettings.changePasswordModal.oldPasswordInput.label": "舊密碼",
    "passwordSettings.changePasswordModal.oldPasswordMissingError":
      "請輸入你的舊密碼。",
    "passwordSettings.changePasswordModal.passwordNotEnteredError":
      "請輸入密碼。",
    "passwordSettings.changePasswordSuccess.message": "你的新密碼已保存。",
    "passwordSettings.deletePasswordModal.passwordInput.label": "密碼",
    "passwordSettings.educationPlanGuidelines":
      "如果你無法存取學校的電子郵件地址，則可以使用密碼登入。",
    "passwordSettings.genericPasswordSaveError": "保存密碼時出錯。請稍後再試。",
    "passwordSettings.newPasswordInput.label": "新密碼",
    "passwordSettings.newPasswordInput.placeholder": "輸入新密碼…",
    "passwordSettings.oldPasswordInput.placeholder": "輸入舊密碼…",
    "passwordSettings.passwordGuidelines":
      "密碼長度至少為 15 個字母，或者長度至少為 8 個字符且同時包含字母和數字。",
    "passwordSettings.passwordInput.label": "密碼",
    "passwordSettings.passwordManagedThroughSAMLProvider.message":
      "你的密碼是由你的 SAML 單一登入供應商管理的。",
    "passwordSettings.passwordMissingLetter.message":
      "請在密碼中包含字母，或使用更長的密碼。",
    "passwordSettings.passwordMissingLetterAndNumber.message":
      "請在密碼中包含字母和數字，或使用更長的密碼。",
    "passwordSettings.passwordMissingNumber.message":
      "請在密碼中包含數字，或使用更長的密碼。",
    "passwordSettings.passwordModal.changePasswordButton.label": "更改密码",
    "passwordSettings.passwordModal.confirmPasswordInput.placeholder":
      "确认口令",
    "passwordSettings.passwordModal.currentPasswordInput.label": "输入当前密码",
    "passwordSettings.passwordModal.currentPasswordInput.placeholder":
      "当前密码",
    "passwordSettings.passwordModal.educationPlanGuidelines":
      "如果您无法访问学校电子邮件地址，您可以使用密码登录。",
    "passwordSettings.passwordModal.newPasswordInput.label": "输入新密码",
    "passwordSettings.passwordModal.newPasswordInput.placeholder": "新口令",
    "passwordSettings.passwordModal.passwordGuidelines":
      "使用至少15个字符或至少8个字符的字符和数字组合作为密码。",
    "passwordSettings.passwordModal.removePasswordButton.label": "删除密码",
    "passwordSettings.passwordModal.setPasswordButton.label": "设置密码",
    "passwordSettings.passwordNotEntered.message": "請輸入你的密碼。",
    "passwordSettings.passwordNotSet.message": "未設定密碼。",
    "passwordSettings.passwordSetError.message":
      "你目前無法設定密碼。請稍後再試。",
    "passwordSettings.passwordSetInstructions":
      "如果你不想使用臨時登入碼，你可以設定永久密碼。",
    "passwordSettings.passwordTooConsistent.message": "請加入其他唯一字符。",
    "passwordSettings.passwordTooShortError.message": "請增加密碼長度。",
    "passwordSettings.passwordUpdateSuccessModal.educationPlan.header":
      "即使您无法访问学校电子邮件地址，您也可以登录。",
    "passwordSettings.passwordUpdateSuccessModal.header":
      "登录帐户时必须输入此密码。",
    "passwordSettings.passwordUpdatedModal.passwordSetSuccessModal.title":
      "密码已设置。",
    "passwordSettings.passwordUpdatedModal.passwordUpdatedModal.title":
      "密码已保存。",
    "passwordSettings.removePasswordButton.label": "移除密碼",
    "passwordSettings.removePasswordModal.continueButton.label": "继续",
    "passwordSettings.removePasswordModal.currentPasswordInput.placeholder":
      "当前密码",
    "passwordSettings.removePasswordModal.educationPlanWarning":
      "如果你無法存取學校的電子郵件地址，則將無法重新登入 Notion。",
    "passwordSettings.removePasswordModal.educationPlanWarning.message":
      "如果失去对学校电子邮件的访问权限，您将无法重新登录Notion。",
    "passwordSettings.removePasswordModal.header":
      "当您尝试登录时，您将通过电子邮件收到链接和登录代码。",
    "passwordSettings.removePasswordModal.keepUsingPasswordButton.label":
      "继续使用密码",
    "passwordSettings.removePasswordModal.message":
      "移除密碼時出錯。請稍後再試。",
    "passwordSettings.removePasswordModal.oldPasswordNotEnteredError":
      "請輸入你的當前密碼。",
    "passwordSettings.removePasswordModal.passwordInput.label": "输入当前密码",
    "passwordSettings.removePasswordModal.passwordInput.placeholder":
      "輸入密碼…",
    "passwordSettings.removePasswordModal.removeMfaWarning.message":
      "<boldtext>如果继续，也将删除第二阶段身份验证。</boldtext>",
    "passwordSettings.removePasswordModal.removePasswordButton.label":
      "移除密碼",
    "passwordSettings.removePasswordModal.text":
      "你即將刪除密碼。我們會通過電子郵件將你的臨時登入碼傳送給你，以供日後存取 Notion。",
    "passwordSettings.removePasswordModal.title":
      "是否要删除密码并使用临时登录代码？",
    "passwordSettings.removePasswordSuccess.message": "你的密碼已被移除。",
    "passwordSettings.removePasswordSuccessModal.header":
      "我们将通过电子邮件向您发送临时登录代码，以便您可以登录您的帐户。",
    "passwordSettings.removePasswordSuccessModal.title": "密码删除完成",
    "passwordSettings.repeatPasswordInput.label": "再次輸入密碼",
    "passwordSettings.repeatPasswordInput.placeholder": "再次輸入新密碼…",
    "passwordSettings.setPassword.message": "设置用于帐户登录的永久密码。",
    "passwordSettings.setPasswordButton.label": "設定密碼",
    "passwordSettings.setPasswordSuccess.educationMessage":
      "你的密碼已全部設定完畢！即使無法存取學校的電子郵件地址，你也能用密碼登入。",
    "passwordSettings.setPasswordSuccess.message": "密碼設定完畢！",
    "passwordSettings.title": "密碼",
    "pdfBlock.embeds.button.label": "嵌入 PDF",
    "pdfBlock.embeds.caption": "嵌入 PDF 檔案",
    "pdfBlock.placeholder": "嵌入 PDF",
    "peekModeIntroTooltip.subtitle":
      "在側邊開啟頁面時，使用表格、看板、清單及時程表以加速工作流程。在這裡切換至其他預覽模式。",
    "peekModeIntroTooltip.title": "新功能！以側邊預覽開啟頁面",
    "peekMoveToMenu.addTo.addTo": "加入到",
    "peekMoveToMenu.addTo.defaultButton": "加入到",
    "peekMoveToMenu.addTo.privatePages": "私人頁面",
    "peekMoveToMenu.tooptip": "設定預設頁面或資料庫",
    "peekTopbar.changePeekOption.changeForThisView": "編輯視圖預設值",
    "peekTopbar.close.button": "關閉",
    "peekTopbar.navigateToPage.tooltip": "以完整頁面開啟",
    "peekTopbar.openPagesAs.button": "切換預覽模式",
    "peekTopbar.peekNavDownArrow.tooltip": "下一頁",
    "peekTopbar.peekNavUpArrow.tooltip": "上一頁",
    "permissionInviteToken.groupRole.ownerAlert.tooltip":
      "無法將群組加入為團隊空間擁有者。",
    "permissionItem.publicPermissionItem.expiration.day": "一日內",
    "permissionItem.publicPermissionItem.expiration.hour": "一小時內",
    "permissionItem.publicPermissionItem.expiration.week": "一週內",
    "permissionRoleSelect.overrideMessage.caption":
      "變更角色後，將替代從父頁面繼承的權限。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption":
      "成員無法變更工作區設定或邀請新成員。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title":
      "升級以加入非管理員成員",
    "permissionRoleSelect.teamGuestPermissionItem.disabledPermissionitem.tooltip":
      "團隊空間訪客不能有完整存取權限。",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption":
      "具有編輯權限的使用者可以編輯頁面，但不能與他人分享頁面。",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.title":
      "升級以加入編輯者",
    "permissions.confirmDialog.upgradeToTeamWorkspace.confirmButton.label":
      "升級到團隊工作區",
    "permissions.confirmDialog.upgradeToTeamWorkspace.message":
      "若要將成員加入到工作區，你需要切換到團隊版。將根據當前的計費間隔和帳戶餘額按比例向你收取費用。",
    "permissionsActions.preventRemovingAllFullAccess.message":
      "在刪除此權限之前，請向其他人授予「全部權限」。",
    "permissionsActions.preventUserOrGroupDeletion.message":
      "至少一位人員或一個群組必須有存取權限。",
    "permissionsInvite.closeInviteDialog.cancelButton.label": "取消",
    "permissionsInvite.closeInviteDialog.confirmationButton.label": "是",
    "permissionsInvite.closeInviteDialog.confirmationMessage":
      "你的變更尚未儲存，要捨棄變更嗎？",
    "permissionsInvite.inviteConfirmationToast.inviteRequestedMessage":
      "{numberOfTargets, plural, other {已要求 {numberOfTargets} 個邀請進行核准}}",
    "permissionsInvite.inviteConfirmationToast.userAddedAndRequestedText":
      "{numberOfAddedTargets, plural, one {已加入 {addedTargetName}} other {已加入 {numberOfAddedTargets} 位人員}}，以及 {numberOfRequestedTargets, plural, one {已要求 {requestedTargetName} 進行核准} other {已要求 {numberOfRequestedTargets} 位人員進行核准}}",
    "permissionsInvite.inviteConfirmationToast.usersAddedMessage":
      "{numberOfTargets, plural, other {已將 {numberOfTargets} 位人員加入 {recordName}}}",
    "permissionsInvite.searchInput.placeholder": "搜尋電子郵件地址、姓名或群組",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.caption":
      "成員是你邀請加入到工作區的隊友。他們可以存取並加入頁面供所有成員查看，或者被邀請到具有私人協作權限的頁面。",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.title": "升級以加入成員",
    "permissionsLevelBanner.commenter.label":
      "你擁有 {hasAttribution, select, true {透過 {attribution}} other {}} 評論此頁面的存取權限",
    "permissionsLevelBanner.contentEditor.label":
      "你擁有 {hasAttribution, select, true {透過 {attribution}} other {}} 編輯此頁面內容的存取權限",
    "permissionsLevelBanner.editor.label":
      "你擁有 {hasAttribution, select, true {透過 {attribution}} other {}} 編輯此頁面的存取權限",
    "permissionsLevelBanner.fullAccess.label":
      "你擁有 {hasAttribution, select, true {透過 {attribution}} other {}} 完整存取此頁面的權限",
    "permissionsLevelBanner.reader.label":
      "你擁有 {hasAttribution, select, true {透過 {attribution}} other {}} 檢視此頁面的存取權限",
    "permissionsResetButton.resetButton.label": "重設權限",
    "permissionsResetButton.tooltip.teamPermissions":
      "重設頁面權限以符合預設的團隊空間權限",
    "permissionsRestoreBanner.button.restrictedPermissions": "恢復",
    "permissionsRestoreBanner.button.teamPermissions": "重設",
    "permissionsRestoreBanner.restoreButton": "恢復",
    "permissionsRestoreBanner.tooltip.teamPermissions":
      "將頁面權限重設為符合團隊空間權限",
    "personal.label": "個人專業版",
    "personalEducationPlan.title": "個人專業版 (教育)",
    "personalFree.title": "個人版",
    "personalFreePlan.title": "個人版",
    "personalPlan.label": "個人專業版",
    "personalPlan.title": "個人專業版",
    "personalSettings.supportSection.userDataConsentSettings.label":
      "支援存取權限",
    "personalSettings.supportSection.userDataConsentSettings.message":
      "授予 Notion 支援人員對你的帳號的臨時存取權限，以便我們為你解決問題或恢復內容。你可以隨時取消存取權限。",
    "personalSlackNotificationsAccountDropdownButton.disableNotification.label":
      "關閉",
    "plus.title": "加值版",
    "plusEducationPlan.title": "教育加值版",
    "plusPlan.title": "加值版",
    "pricingGrid.betaBadge": "Beta 版",
    "pricingGrid.comingSoonBadge": "即將推出",
    "pricingGrid.comparisonSection.adminAndSecurityFeatures.titleMessage":
      "管理員與安全性",
    "pricingGrid.comparisonSection.content.title": "內容",
    "pricingGrid.comparisonSection.platformAndWorkflow.title": "API 與整合",
    "pricingGrid.comparisonSection.sharingAndCollaboration.title": "分享與協作",
    "pricingGrid.comparisonSection.support.titleMessage": "支援",
    "pricingGrid.currentPlan.largeScreenLabel": "目前方案",
    "pricingGrid.currentPlan.tooltip": "這是你目前的方案",
    "pricingGrid.currentPlanButton.label": "目前方案",
    "pricingGrid.downgradePlanButton.label": "降級至成員",
    "pricingGrid.planAttribute.ApiAdminControls.title":
      "連接至 Slack、Zapier 等更多項目",
    "pricingGrid.planAttribute.SSO.tooltip":
      "透過安全的單一登入，大規模管理員工的存取權限。",
    "pricingGrid.planAttribute.adminContentSearch.title": "管理員內容搜尋",
    "pricingGrid.planAttribute.adminContentSearch.tooltip":
      "管理員內容搜尋讓工作區擁有者能夠查看其 Notion 工作區的內容，並且能夠篩選、搜尋及疑難排解相關權限。",
    "pricingGrid.planAttribute.adminTools.tooltip":
      "建立單獨的管理員與成員權限以進行更多的控制。只有管理員可以邀請新成員及更改工作區設定。",
    "pricingGrid.planAttribute.advancedPageAnalytics.tooltip":
      "取得可行的深入解析資料以了解有誰在查看與編輯你的內容。",
    "pricingGrid.planAttribute.advancedPermissions.tooltip":
      "設定更精細的權限，以限制受邀人員與其他人分享頁面。",
    "pricingGrid.planAttribute.advancedSecurity.tooltip":
      "解鎖額外的權限控制，以防止特定人員向外部分享頁面、停用訪客、並設定工作區安全規則。",
    "pricingGrid.planAttribute.advancedTeamspaceControls.title":
      "進階團隊空間安全控制",
    "pricingGrid.planAttribute.advancedWorkspaceAndTeamspaceControls.title":
      "進階工作區與團隊空間安全控制",
    "pricingGrid.planAttribute.advancedWorkspaceAndTeamspaceSecurity.tooltip":
      "防止員工將頁面發佈至網頁、匯出至他們的硬碟等。在整個工作區，或是依各個團隊空間的基礎進行啟用及限制的設定。",
    "pricingGrid.planAttribute.allTeamPlanFeatures.tooltip":
      "含團隊版的所有功能，以及更多。",
    "pricingGrid.planAttribute.apiAdminControls.tooltip":
      "向管理員提供更多的 API 控制權。",
    "pricingGrid.planAttribute.apps.tooltip":
      "Notion 可以在任何網頁瀏覽器中運行，無需安裝。你也可以下載我們的 Mac、Windows、iOS 或 Android 應用程式。",
    "pricingGrid.planAttribute.auditLog.title": "稽核日誌檔",
    "pricingGrid.planAttribute.auditLog.tooltip":
      "存取你工作區帳戶的安全性和安全相關活動詳細日誌檔，以便識別潛在安全性問題、調查可疑行為或解決存取的問題。",
    "pricingGrid.planAttribute.blockStorage.tooltip":
      "區塊是你加入到頁面上的內容組成部分，例如段落、待辦事項、圖片、嵌入式檔案等。現在，所有方案的區塊都是無限的。團隊試用版中的區塊儲存上限為 1000 個。",
    "pricingGrid.planAttribute.blockStorageWithFree.tooltip":
      "區塊是你加入到頁面的內容（例如待辦事項核取方塊、段落、項目符號等）。如果團隊想在 Notion 中嘗試協作，可在升級前使用有多達特定區塊數的免費版。",
    "pricingGrid.planAttribute.blockTypes.tooltip.line1":
      "區塊是你加入到頁面上不同類型的內容，比如待辦事項、圖片、程式碼區塊、上傳的檔案。",
    "pricingGrid.planAttribute.blockTypes.tooltip.line2":
      "區塊還可以幫助你嵌入來自 Google 雲端硬碟、GitHub、Twitter 和 Typeform 等服務的內容。",
    "pricingGrid.planAttribute.blocks.titleMessage": "頁面與區塊",
    "pricingGrid.planAttribute.bulkExport.tooltip":
      "資料是屬於你的。你可以將所有頁面匯出為 HTML、Markdown 或 CSV（用於資料庫），同時包含上傳的任何檔案與圖片。",
    "pricingGrid.planAttribute.bulkExportAsHtmlMarkdownAndCsv.title":
      "將整個工作區匯出為 HTML、Markdown 及 CSV",
    "pricingGrid.planAttribute.bulkExportAsHtmlMarkdownAndCsv.tooltip":
      "為你工作區內的所有頁面與內容建立備份。",
    "pricingGrid.planAttribute.bulkExportAsPdf.title": "將整個工作區匯出為 PDF",
    "pricingGrid.planAttribute.bulkExportAsPdf.tooltip":
      "一次將你全部的內容匯出為 PDF。完美搭配法律或符合性備份。",
    "pricingGrid.planAttribute.bulkPDFExport.tooltip":
      "將所有內容匯出為 PDF，方便進行法律或法令遵循備份。",
    "pricingGrid.planAttribute.button.upgrade": "升級方案",
    "pricingGrid.planAttribute.collaborativeWorkspace.tooltip":
      "協作工作區讓成員輕鬆分享頁面給整個團隊，讓整個團隊統一內容結構，並支援精細的權限設定。",
    "pricingGrid.planAttribute.collaborativeWorkspaceWithFree.tooltip":
      "一同規劃、建立並保持井然有序。與多個人員和團隊分享你的工作區，讓每個人在單一位置中保持一致性。",
    "pricingGrid.planAttribute.connections.tooltip":
      "將 Notion 資訊傳送至 Slack（反之亦然）。或者，連接至 Zapier 以使用你愛用的工具建立自動化工作流程。",
    "pricingGrid.planAttribute.contentApi.tooltip.v3":
      "存取 Notion API，以便為團隊建立自訂整合。",
    "pricingGrid.planAttribute.customContract.tooltip":
      "我們將為你建立自訂合約，並透過 PO/發票付款。適用於超過 100 位使用者的企業版帳號。",
    "pricingGrid.planAttribute.customDomain.titleMessage":
      "有公用首頁的自訂 notion.site 網域",
    "pricingGrid.planAttribute.customDomain.tooltip":
      "將你的履歷、新創公司募資簡報、公司職位頁面等發佈為公用網頁。付費版可為它們的自訂網域選擇首頁（例如 acmedesign.notion.site）。",
    "pricingGrid.planAttribute.customGuests.tooltip":
      "將組織外部的共同作業者（例如客戶或承包商）加到工作區中的特定頁面。",
    "pricingGrid.planAttribute.customerSuccessManager.title": "客戶成功經理",
    "pricingGrid.planAttribute.customerSuccessManager.tooltip":
      "我們的客戶成功經理團隊都是專家，可協助你充分利用 Notion 的功能。",
    "pricingGrid.planAttribute.databaseProperties.tooltip":
      "建立屬性多樣的強大資料庫，例如核選方塊、下拉式選單、貨幣、指派人員、日期和檔案等。",
    "pricingGrid.planAttribute.databaseSync.title": "同步的資料庫",
    "pricingGrid.planAttribute.databases.tooltip":
      "資料庫支援多種視圖，可以選擇最適合自己工作流程的視覺化方式。資料庫可以用來做專案看板、活動行事曆等。",
    "pricingGrid.planAttribute.dedicatedManager.tooltip":
      "適用於超過 100 人的年付團隊。",
    "pricingGrid.planAttribute.dynamicLinkPreviews.tooltip":
      "將連結貼至 GitHub PR、Jira ticket、Figma artboard 等，以便在你的文件和筆記中新增動態內容預覽。",
    "pricingGrid.planAttribute.earlyAccess.tooltip":
      "提前體驗特權意味著你將永遠擁有最新、功能最強大的 Notion 版本。你還將直接影響我們未來的產品路線圖。",
    "pricingGrid.planAttribute.evernoteHierarchy.tooltip":
      "將筆記組織到筆記本或堆疊中。",
    "pricingGrid.planAttribute.fileUploads.title": "檔案上傳",
    "pricingGrid.planAttribute.fileUploads.tooltip":
      "單一檔案限制可套用到上傳到 Notion 頁面或資料庫的任何檔案。",
    "pricingGrid.planAttribute.fileUploads.value.UpTo5MbFileUploadLimit":
      "最多 5 MB",
    "pricingGrid.planAttribute.fileUploadsWithFree.tooltip":
      "在免費版上，你可以上傳每個檔案最多 5MB 的 影像、影片及檔案附件。若要上傳較大型檔案，請升級到付費版。",
    "pricingGrid.planAttribute.fiveHundredGuests.tooltip":
      "將組織外的共同作業者（如客戶或承包商）加到工作區中的特定頁面。",
    "pricingGrid.planAttribute.freeForIndividuals.tooltip":
      "現在，個人可免費使用 Notion。",
    "pricingGrid.planAttribute.genericNotes.tooltip":
      "建立檔案，並與其他人分享。",
    "pricingGrid.planAttribute.genericReminders.tooltip":
      "收到截止日期的提醒。",
    "pricingGrid.planAttribute.genericTags.tooltip": "組織並追蹤你的筆記。",
    "pricingGrid.planAttribute.genericWebClipper.tooltip":
      "擷取網路上的任何頁面。",
    "pricingGrid.planAttribute.granularAdminControls.tooltip":
      "指定可以從工作區和群組中加入並移除成員，但無法存取其他安全和帳單設定的成員資格管理員。",
    "pricingGrid.planAttribute.granularAdminRoles.title": "精細管理員角色",
    "pricingGrid.planAttribute.granularTeamspacePermissions.title":
      "精細團隊空間權限",
    "pricingGrid.planAttribute.guestLimit.business": "250",
    "pricingGrid.planAttribute.guestLimit.enterprise": "500",
    "pricingGrid.planAttribute.guestLimit.free": "10",
    "pricingGrid.planAttribute.guestLimit.plus": "100",
    "pricingGrid.planAttribute.guests.titleMessage": "訪客共同作業者",
    "pricingGrid.planAttribute.guests.tooltip":
      "訪客是工作區成員之外的個人，例如朋友、家人、承包商或客戶。透過在個別頁面上邀請訪客，進行非公開協作。",
    "pricingGrid.planAttribute.guests.value.trialUpgradeLabel": "試用版 5 位",
    "pricingGrid.planAttribute.hundredGuests.tooltip":
      "將組織外的共同作業者（如客戶或承包商）加到工作區中的特定頁面。",
    "pricingGrid.planAttribute.limitedVersionHistory.tooltip":
      "查看並恢復過去 30 天裡任何 Notion 頁面的過往版本。",
    "pricingGrid.planAttribute.linkPreviews.title": "連結預覽",
    "pricingGrid.planAttribute.linkPreviews.titleMessage": "動態連結預覽",
    "pricingGrid.planAttribute.linkPreviews.tooltip":
      "查看來自 Slack、Dropbox、Figma 等數十種工具的動態的、最新的預覽。",
    "pricingGrid.planAttribute.linkSharing.tooltip":
      "與任何人分享一個秘密連結，以便他們查看，評論或編輯你的頁面。",
    "pricingGrid.planAttribute.members.tooltip":
      "成員是你邀請加入工作區的隊友。他們可以存取並加入頁面供所有成員查看，或者被邀请到具有私人協作權限的頁面。",
    "pricingGrid.planAttribute.membershipAdmin.tooltip":
      "成員資格管理員可以從工作區和群組中加入並移除成員，但無法存取其他工作區設定。",
    "pricingGrid.planAttribute.ninetyVersionHistory.tooltip":
      "將你的頁面還原為上一個版本。",
    "pricingGrid.planAttribute.notInTrial": "不在試用版中",
    "pricingGrid.planAttribute.notionCollaboration.tooltip":
      "與其他人在同一個頁面上一起工作。",
    "pricingGrid.planAttribute.notionDatabases.tooltip":
      "用資料庫視圖、匯總、篩選等工具建立新的工作流程。",
    "pricingGrid.planAttribute.notionHierarchy.tooltip": "筆記可以無限嵌套。",
    "pricingGrid.planAttribute.notionMarkdown.tooltip":
      "用 Markdown 書寫或匯出內容。",
    "pricingGrid.planAttribute.pageAnalytics.titleMessage": "頁面分析",
    "pricingGrid.planAttribute.pageAnalytics.tooltip":
      "取得檢視內容並與之互動之人員的有效深入解析。",
    "pricingGrid.planAttribute.pageHistory.title": "頁面歷史",
    "pricingGrid.planAttribute.pageHistory.tooltip":
      "將你的頁面還原為上一個版本。",
    "pricingGrid.planAttribute.pdfExport.tooltip":
      "一次將全部的內容匯出為 PDF。完美搭配法律或合規性備份。",
    "pricingGrid.planAttribute.permissionGroups.title": "權限群組",
    "pricingGrid.planAttribute.permissionGroups.tooltip":
      "為不同的群組與團隊設定不同等級及精細度的權限。",
    "pricingGrid.planAttribute.permissionGroupsWithFree.tooltip":
      "根據角色或部門建立人員群組，以便簡化頁面和團隊空間權限。",
    "pricingGrid.planAttribute.priority.support.tooltip":
      "我們會隨時提供協助。只要按一下桌面右下角的 ( ? ) 按鈕，或是在行動裝置上輕觸「幫助與反饋」。",
    "pricingGrid.planAttribute.prioritySupport.title": "優先支援",
    "pricingGrid.planAttribute.prioritySupport.tooltip":
      "我們隨時為你提供幫助。",
    "pricingGrid.planAttribute.privateTeamspaces.title": "私人團隊空間",
    "pricingGrid.planAttribute.privateTeamspaces.tooltip":
      "建立任何人都無法查看或尋找的團隊空間（你加入的人員除外）。最適合用於公司規劃或績效審核等敏感性資訊。",
    "pricingGrid.planAttribute.proWebPublishing.tooltip":
      "將 Notion 頁面作為獨立網站發表。即將推出。",
    "pricingGrid.planAttribute.publicApi.title": "公共 API",
    "pricingGrid.planAttribute.publicApi.tooltip":
      "建置訂製的整合，將你的 Notion 工作區連接至內部工具和工作流程。",
    "pricingGrid.planAttribute.realTimeCollaboration.tooltip":
      "即時與其他人合作，可顯示線上狀態與評論。",
    "pricingGrid.planAttribute.scim.title": "用戶管理分配 (SCIM)",
    "pricingGrid.planAttribute.scim.tooltip":
      "透過 Okta 等身分提供商，自動在你的工作區內外範圍管理分配成員。",
    "pricingGrid.planAttribute.scimApi.tooltip":
      "存取 Notion SCIM API 以規定並管理使用者與群組。",
    "pricingGrid.planAttribute.sharingPermissions.tooltip":
      "設定更精細的權限，以限制受邀人員與其他人分享頁面。",
    "pricingGrid.planAttribute.slackIntegration.tooltip":
      "將 Notion 資訊傳送至 Slack（反之亦然）。或者，連接至 Zapier 以使用你依賴的工具建立自動化工作流程。",
    "pricingGrid.planAttribute.sso.title": "SAML 單一登入 (SSO)",
    "pricingGrid.planAttribute.ssoWithFree.tooltip":
      "透過單一登入，大規模管理員工的存取權限。",
    "pricingGrid.planAttribute.syncedDatabases.rowLimit.title":
      "每個同步資料庫的列數限制",
    "pricingGrid.planAttribute.syncedDatabases.title.v3": "同步資料庫",
    "pricingGrid.planAttribute.syncedDatabases.tooltip":
      "查看 Jira 與 GitHub 提供的最新資訊，全部都已同步到 Notion 的資料庫。",
    "pricingGrid.planAttribute.syncedDatabases.tooltip.line2":
      "個人版僅限有 100 行的 1 個資料庫。",
    "pricingGrid.planAttribute.syncedDatabasesWithFree.tooltip":
      "查看 Jira、GitHub 及 Asana 提供的最新資訊，全部都已同步到 Notion 的資料庫。免費版限制為最多 100 列的 1 個同步資料庫。",
    "pricingGrid.planAttribute.teamspacesSidebar.title": "團隊空間",
    "pricingGrid.planAttribute.templates.title": "50 多個入門模版",
    "pricingGrid.planAttribute.templates.tooltip.line1":
      "你可以從一張白紙開始，也可以從經過專業設計的模版庫中選擇模版。",
    "pricingGrid.planAttribute.templates.tooltip.line2":
      "一些最愛項目包括：筆記、目標管理、公司首頁、會議記錄、產品路線圖、員工入職手冊及工程知識庫。",
    "pricingGrid.planAttribute.tenGuests.tooltip":
      "在您的頁面上與朋友、家人和同事共同合作。",
    "pricingGrid.planAttribute.timeline.tooltip":
      "使用時程表視圖進行專案排程與規劃。",
    "pricingGrid.planAttribute.twoFiftyGuests.tooltip":
      "將組織外的共同作業者（如客戶或承包商）加到工作區中的特定頁面。",
    "pricingGrid.planAttribute.unlimitedBlocksTeam.tooltip":
      "區塊是你加入到頁面的內容（例如待辦事項核取方塊、段落、項目符號等）。",
    "pricingGrid.planAttribute.unlimitedVersionHistory.tooltip":
      "查看並恢復任何 Notion 頁面的過往版本。",
    "pricingGrid.planAttribute.value.advanced": "進階",
    "pricingGrid.planAttribute.value.basic": "基本",
    "pricingGrid.planAttribute.value.blockLimit": "試用版 1,000 個",
    "pricingGrid.planAttribute.value.blocksCaption":
      "個人無限制，區塊試用版適用於 2 位成員以上",
    "pricingGrid.planAttribute.value.one": "1",
    "pricingGrid.planAttribute.value.oneHundred": "100",
    "pricingGrid.planAttribute.value.twentyThousand": "20,000",
    "pricingGrid.planAttribute.value.unlimitedMembers": "無限",
    "pricingGrid.planAttribute.versionHistory.title": "頁面歷史",
    "pricingGrid.planAttribute.versionHistory.tooltip":
      "查看並恢復任何 Notion 頁面的過往版本。",
    "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory":
      "30 天",
    "pricingGrid.planAttribute.versionHistory.value.7DaysSavedHistory": "7 天",
    "pricingGrid.planAttribute.versionHistory.value.90DaysSavedHistory":
      "90 天",
    "pricingGrid.planAttribute.versionHistory.value.unlimitedPageHistory":
      "無限",
    "pricingGrid.planAttribute.weekVersionHistory.tooltip":
      "將你的頁面還原為上一個版本。",
    "pricingGrid.planAttribute.wikisDocsNotes.tooltip":
      "用 Notion 建立共享知識庫與檔案，或將其作為強大的筆記工具。",
    "pricingGrid.planAttribute.workspaceAnalytics.title": "工作區分析",
    "pricingGrid.planAttribute.workspaceAnalytics.tooltip":
      "從最熱門頁面到整體流量，取得人們如何使用 Notion 工作區的有效深入解析。",
    "pricingGrid.pricingTermToggle.payAnnually.label": "年付",
    "pricingGrid.pricingTermToggle.payMonthly.label": "月付",
    "pricingGrid.requestATrial": "或是要求試用版",
    "pricingGrid.resubscribePlanButton.label": "重新訂閱",
    "pricingGrid.switchPlanAsMember.tooltip":
      "需要成為此工作區的管理員才能切換方案。",
    "pricingGrid.switchPlanFromInAppPurchase.tooltip":
      "你目前透過 Apple 的程式內購買完成訂閱。如要更換方案，請先取消 Apple 的訂閱。",
    "pricingGrid.upgradePlanButton.label": "升級方案",
    "pricingGrid.willDowngradePlan.largeScreenLabel": "未來方案",
    "pricingGrid.willDowngradePlan.tooltip": "這是你目前方案到期後的方案",
    "pricingGrid.willDowngradePlanButton.label": "未來方案",
    "pricingHelpers.perMemberPerMonthPricing.label": "每位成員每月",
    "pricingHelpers.perMonthPricing.label": "每月",
    "pricingPlanHelpers.planAttribute.advancedTeamspaceControls.tooltip":
      "在每個個別團隊空間自訂如「停用訪客」或「停用匯出」等權限控制。",
    "pricingPlanHelpers.planAttribute.granularTeamspaceControls.tooltip":
      "針對團隊空間特定成員和團隊建立自訂權限覆寫。",
    "pricingPlanHelpers.planAttribute.privateTeamspaces.tooltip":
      "私人團隊空間僅特定人員或團隊可看到。使用私人團隊空間儲存敏感文件或秘密專案。",
    "pricingPlanHelpers.planAttribute.teamspacesCustomizableSidebar.tooltip":
      "團隊空間為自訂給專案或公司部門（如「工程」或「銷售」）的側邊攔，有其專屬設定、權限和成員。",
    "pricingPlanHelpers.unlimitedTeamspaces": "無限",
    "privatePageBadge.label": "私人",
    "privatePageBadge.tooltip": "只有你可以看到此頁面",
    "profileSeettings.mfa.verifyIdentity.withBackupCode.header":
      "輸入你的其中一個備用代碼",
    "profileSeettings.mfa.verifyIdentity.withSMS.header":
      "輸入傳送到 {phoneHint} 的代碼。",
    "profileSeettings.mfa.verifyIdentity.withTOTP.header":
      "輸入 {friendlyName} 的代碼",
    "profileSettings.accountDeletionSetting.title": "刪除我的帳號",
    "profileSettings.accountSecurity.title": "帳號安全性",
    "profileSettings.accountSecuritySection.emailSetting.changeEmailButton.label":
      "變更電子郵件",
    "profileSettings.accountSecuritySection.emailSetting.label": "電子郵件",
    "profileSettings.accountSecuritySection.passwordSetting.label": "密碼",
    "profileSettings.accountSecuritySection.passwordSetting.message":
      "設定永久密碼以登入你的帳號",
    "profileSettings.accountSecuritySection.twoStepVerificationSetting.label":
      "雙步驟驗證",
    "profileSettings.accountSecuritySection.twoStepVerificationSetting.message":
      "使用一次性代碼驗證你的身分，藉此保護帳號的安全",
    "profileSettings.accountSecuritySection.twoStepVerificationSetting.settingConfigured.message":
      "{numMfaSettings}个身份验证方法已启用。",
    "profileSettings.accountSecuritySection.twoStepVerificationSettingButton.label":
      "變更驗證方式",
    "profileSettings.accountSecuritySection.twoStepVerificationSettingButton.tooltip":
      "啟用雙步驟驗證時需要密碼",
    "profileSettings.cancelButton.label": "取消",
    "profileSettings.changeEmailModal.changeEmailButton.label":
      "變更電子郵件地址",
    "profileSettings.changeEmailModal.claimedEmailDomainWarning":
      "電子郵件網域 {newEmailDomain} 已由組織宣告。如果你繼續變更此電子郵件地址，由此帳戶建立的任何工作區可由組織管理。如需更多資訊，請參閱<domainclaimlink>此頁面</domainclaimlink>。",
    "profileSettings.changeEmailModal.confirmationModal.acceptButton.label":
      "變更電子郵件",
    "profileSettings.changeEmailModal.confirmationModal.cancelButton.label":
      "退回",
    "profileSettings.changeEmailModal.confirmationModal.description":
      "如果你繼續將此電子郵件地址變更為此網域，則由此帳號建立的任何工作區將由組織管理。",
    "profileSettings.changeEmailModal.confirmationModal.title":
      "確定要變更你的電子郵件嗎？",
    "profileSettings.changeEmailModal.continueButton.label": "繼續",
    "profileSettings.changeEmailModal.currentEmail":
      "你目前的電子郵件地址是 {currentEmail}。",
    "profileSettings.changeEmailModal.enterCurrentEmailVerificationCodeInput.placeholder":
      "輸入登入碼",
    "profileSettings.changeEmailModal.enterPasswordInstructions":
      "請輸入你的密碼。",
    "profileSettings.changeEmailModal.enterVerificationCodeInput.placeholder":
      "輸入驗證碼",
    "profileSettings.changeEmailModal.errorFetchingAccountData":
      "無法取得 {currentEmail} 的帳號資訊。",
    "profileSettings.changeEmailModal.errorNoUserValue": "未定義用戶值。",
    "profileSettings.changeEmailModal.newEmailInput.placeholder":
      "輸入新的電子郵件地址",
    "profileSettings.changeEmailModal.newEmailInstructions":
      "請輸入新的電子郵件地址，我們將向你傳送驗證碼。",
    "profileSettings.changeEmailModal.passwordInput.label": "密碼",
    "profileSettings.changeEmailModal.sendCurrentEmailVerificationCode.label":
      "傳送驗證碼",
    "profileSettings.changeEmailModal.sendVerificationCodeButton.label":
      "傳送驗證碼",
    "profileSettings.changeEmailModal.sendVerificationCodeToCurrentEmail":
      "我們將向此電子郵件地址傳送臨時驗證碼。",
    "profileSettings.changeEmailModal.sentVerificationCodeToCurrentEmail":
      "我們已向此電子郵件地址傳送了臨時驗證碼。",
    "profileSettings.changeEmailModal.verificationCodeSentMessage":
      "我們剛剛向你的帳號 {newEmail} 傳送了一個臨時驗證碼。",
    "profileSettings.changePasswordModal.title": "更改密码",
    "profileSettings.dangerousSettings.deleteAccountButton.label":
      "刪除我的帳號",
    "profileSettings.dangerousSettings.title": "危險區域",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButton.label":
      "{numberOfWorkspaces, plural, other {永久刪除帳號及 {numberOfWorkspaces} 個工作區}}",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButtonMobile.label":
      "{numberOfWorkspaces, plural, other {刪除帳戶和 {numberOfWorkspaces} 個工作區}}",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountButton.label":
      "永久刪除帳號",
    "profileSettings.deleteAccountConfirmationDialog.prompt":
      "請輸入你的電子郵件地址進行確認。",
    "profileSettings.deleteAccountConfirmationDialog.warning":
      "此操作無法撤消。這將永久刪除你的整個帳號。所有私人工作區將被刪除，同時你將從所有共用工作區中移除。",
    "profileSettings.helpButton.caption":
      "進一步了解帳號設定變更如何套用到你的工作區",
    "profileSettings.mfa.setupComplete.confirmation.header":
      "每次輸入密碼時，Notion 都會詢問驗證碼以確認您的身分。",
    "profileSettings.mfa.setupComplete.confirmationAddMethod.button.message":
      "加入另一種方式",
    "profileSettings.mfa.sms.addPhoneHeader":
      "輸入你的電話號碼以收到雙步驟驗證碼",
    "profileSettings.mfa.sms.addPhoneNeedHelp": "需要幫忙？",
    "profileSettings.mfa.sms.addPhoneTitle": "加入電話號碼",
    "profileSettings.mfa.sms.continueButton": "繼續",
    "profileSettings.mfa.sms.phoneNumberInput.placeholder": "輸入電話號碼",
    "profileSettings.mfa.sms.setupComplete.confirmation.title":
      "開啟電話號碼的雙步驟驗證",
    "profileSettings.mfa.sms.verifyCodeButton": "驗證代碼",
    "profileSettings.mfa.sms.verifyCodeHeader":
      "輸入傳送至 {phoneHint} 完整設定的代碼。<resend>重新傳送</resend>",
    "profileSettings.mfa.sms.verifyCodeHeader.default":
      "輸入傳送至 {phoneNumber} 完整設定的代碼",
    "profileSettings.mfa.sms.verifyCodeNeedHelp": "需要幫忙？",
    "profileSettings.mfa.sms.verifyCodeTitle": "驗證電話號碼",
    "profileSettings.mfa.totp.authenticatorNameInput": "驗證器名稱",
    "profileSettings.mfa.totp.authenticatorNameInput.placeholder":
      "輸入驗證器名稱",
    "profileSettings.mfa.totp.cantScanCodeButton": "無法掃描代碼？",
    "profileSettings.mfa.totp.confirmationAddMethod": "加入另一個方式",
    "profileSettings.mfa.totp.confirmationHeader":
      "每次輸入你的密碼時，Notion 都會向你詢問驗證碼以確認你的身分。",
    "profileSettings.mfa.totp.confirmationTitle": "開啟驗證器的雙步驟驗證",
    "profileSettings.mfa.totp.continueButton": "繼續",
    "profileSettings.mfa.totp.needHelp": "需要幫忙？",
    "profileSettings.mfa.totp.scanQRCodeButton": "掃描 QR 碼",
    "profileSettings.mfa.totp.scanQRCodeHeader":
      "使用<authenticatorlink>驗證應用程式</authenticatorlink>產生一次性代碼",
    "profileSettings.mfa.totp.scanQRCodeTitle": "掃描驗證器的代碼",
    "profileSettings.mfa.totp.settingsVerifyCode":
      "若要繼續，我們必須驗證你的身分",
    "profileSettings.mfa.totp.settingsVerifyCodeButton": "繼續",
    "profileSettings.mfa.totp.settingsVerifyCodeHeader":
      "輸入驗證器 {authenticatorName} 的代碼",
    "profileSettings.mfa.totp.settingsVerifyTryAnotherMethod": "嘗試另一個方式",
    "profileSettings.mfa.totp.setupComplete.confirmation.title":
      "開啟驗證器的雙步驟驗證",
    "profileSettings.mfa.totp.typeText.message":
      "將此設定金鑰輸入<authenticatorlink>驗證器應用程式</authenticatorlink>，以便產生一次性代碼",
    "profileSettings.mfa.totp.typeTextCodeHeader":
      "使用<authenticatorlink>驗證應用程式</authenticatorlink>產生一次性代碼",
    "profileSettings.mfa.totp.typeTextCodeTitle": "輸入驗證器的代碼",
    "profileSettings.mfa.totp.verifyCodeButton": "驗證代碼",
    "profileSettings.mfa.totp.verifyCodeHeader":
      "輸入驗證器的一次性代碼以完成設定",
    "profileSettings.mfa.totp.verifyCodeTitle": "驗證代碼",
    "profileSettings.mfa.verifyIdentity.methodChooser.header":
      "選擇驗證你身分的方式",
    "profileSettings.mfa.verifyIdentity.methodChooser.needHelp.button":
      "需要幫助嗎？",
    "profileSettings.mfa.verifyIdentity.methodChooser.title": "驗證你的身分",
    "profileSettings.mfa.verifyIdentity.methodChooser.useAuthenticator.button.message":
      "使用驗證器的代碼",
    "profileSettings.mfa.verifyIdentity.methodChooser.useBackupCode.button.message":
      "使用一次性備用代碼",
    "profileSettings.mfa.verifyIdentity.methodChooser.useBackupCode.button.title":
      "使用備用代碼",
    "profileSettings.mfa.verifyIdentity.methodChooser.useSMS.button.message":
      "以簡訊傳送代碼給我",
    "profileSettings.mfa.verifyIdentity.methodChooser.useSMS.button.title":
      "傳送代碼到 {phoneHint}",
    "profileSettings.mfa.verifyIdentity.withBackupCode.button.message": "繼續",
    "profileSettings.mfa.verifyIdentity.withBackupCode.secondaryButton.message":
      "嘗試另一種方式",
    "profileSettings.mfa.verifyIdentity.withBackupCode.title":
      "若要繼續，我們必須驗證你的身分",
    "profileSettings.mfa.verifyIdentity.withPassword..title":
      "若要繼續，我們必須驗證你的身分",
    "profileSettings.mfa.verifyIdentity.withPassword.button.message": "繼續",
    "profileSettings.mfa.verifyIdentity.withPassword.secondaryButton.message":
      "忘記密碼？",
    "profileSettings.mfa.verifyIdentity.withPassword.title":
      "需要您的认证才能继续。",
    "profileSettings.mfa.verifyIdentity.withSMS.button.message": "繼續",
    "profileSettings.mfa.verifyIdentity.withSMS.secondaryButton.message":
      "嘗試另一種方式",
    "profileSettings.mfa.verifyIdentity.withSMS.title":
      "若要繼續，我們必須驗證你的身分",
    "profileSettings.mfa.verifyIdentity.withTOTP.button.message": "繼續",
    "profileSettings.mfa.verifyIdentity.withTOTP.secondaryButton.message":
      "嘗試另一種方式",
    "profileSettings.mfa.verifyIdentity.withTOTP.title":
      "若要繼續，我們必須驗證你的身分",
    "profileSettings.myProfile.title": "我的個人檔案",
    "profileSettings.offline.message": "請連接網路後管理你的個人資料。",
    "profileSettings.personalInfoSection.emailSetting.changeEmailButton.label":
      "變更電子郵件地址",
    "profileSettings.personalInfoSection.emailSetting.label": "電子郵件地址",
    "profileSettings.personalInfoSection.nameInput.label": "偏好的名稱",
    "profileSettings.personalInfoSection.nameMissing.message": "請填寫名稱。",
    "profileSettings.personalInfoSection.profilePhoto.replace": "取代照片",
    "profileSettings.personalInfoSection.profilePhoto.upload": "上傳照片",
    "profileSettings.personalInfoSection.title": "個人資訊",
    "profileSettings.profilePhotoSection.removePhotoButton.label": "移除",
    "profileSettings.profilePhotoSection.title": "照片",
    "profileSettings.profilePhotoSection.uploadPhotoButton.label": "上傳照片",
    "profileSettings.profilePhotoSection.uploadProfilePhotoError.message":
      "上傳失敗。",
    "profileSettings.setPasswordModal.title": "设置密码",
    "profileSettings.support.title": "支援",
    "profileSettings.title": "帳號",
    "profileSettings.updateButton.label": "更新",
    "propertyAutofillSnackbar.completedAutofill":
      "已自動填寫 {numBlocks} 個屬性",
    "propertySelectMenu.mobileMenu.property.header": "屬性",
    "propertySelectMenu.mobileMenu.relationProperty.header": "關聯屬性",
    "propertySelectMenu.search.noResults.title": "沒有結果",
    "propertySelectMenu.searchForProperty.default.placeholder": "搜尋屬性…",
    "propertySelectMenu.searchForProperty.relation.placeholder":
      "搜尋關聯屬性…",
    "publicPageDataHelpers.untitledWorkspace.placeholder": "無標題的工作區",
    "publicPermissionItem.expiration.chooseDate": "選擇日期",
    "publicPermissionItem.expiration.never": "從不",
    "publicPermissionItem.expirationTime.label": "連結到期",
    "publicPermissionsMenu.expiration.mobile.label": "完成",
    "publicPermissionsMenu.expiration.mobile.title": "到期時間",
    "pushNotification.authorPhrase.unknown": "未知作者",
    "pushNotification.blockEdited.notificationSubject":
      "{userName} 編輯了{blockName}",
    "pushNotification.blockPropertyEdited.notificationSubject":
      "{userName} 編輯了 {blockName}",
    "pushNotification.deletedBlock.notificationContents":
      "[已刪除] {renderedBlock}",
    "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel": "空",
    "pushNotification.imageInPushNotification.placeholder": "{imageEmoji} 圖片",
    "pushNotification.pageName.defaultLabel": "Notion 頁面",
    "pushNotification.permissionGroupName.defaultLabel": "已刪除的群組",
    "pushNotification.permissionGroupName.untitledLabel": "無標題群組",
    "pushNotification.pluralizedUserNames.defaultLabel": "有人",
    "pushNotification.privateContentTransferred.noFromUserName":
      "{author} 已傳輸私人內容給你： {pageName}",
    "pushNotification.propertyNameWithEditedValue.notificationBody":
      "{propertyName} ({propertyValue})",
    "pushNotification.propertyNameWithEditedValue.notificationSubject":
      "{propertyName} ({propertyValue})",
    "pushNotification.threePlusUserNames.label":
      "{othersCount, plural, other {{firstAuthor}及其他 {othersCount} 位}}",
    "pushNotification.twoUserNames.label": "{firstAuthor} 和 {secondAuthor}",
    "pushNotification.untitledBlockTitle.placeholder": "無標題",
    "pushNotification.untitledCollectionName.placeholder": "無標題",
    "pushNotification.untitledSpaceName.label": "無標題",
    "pushNotification.untitledTeamName.label": "無標題團隊",
    "pushNotification.userCreatedBlockInSpace.message":
      "{userName} 在 {spaceName} 建立了 {targetName}",
    "pushNotification.userCreatedRowInCollection.message":
      "{userName} 在 {collectionName} 建立了 {targetName}",
    "pushNotification.userCreatedTarget.label":
      "{userName} 建立了 {permissionGroupName}",
    "pushNotification.userDeletedBlockInSpace.message":
      "{userName} 刪除了 {spaceName} 的 {targetName}",
    "pushNotification.userDeletedRowInCollection.message":
      "{userName} 在 {collectionName} 刪除了 {targetName}",
    "pushNotification.userDeletedTarget.label":
      "{userName} 已刪除 {permissionGroupName}",
    "pushNotification.userEditedTarget.label":
      "{userName}編輯了{permissionGroupName}",
    "pushNotifications.accessRequested.subject": "{userName}要求存取{pageName}",
    "pushNotifications.botPermissionsWithRole.label":
      "{botName} ({permissionLevel})",
    "pushNotifications.collectionCreated.notificationSubject":
      "{userName} 建立了 {collectionName}",
    "pushNotifications.collectionDescriptionAdded.notificationSubject":
      "{userName} 為 {collectionName} 加入了說明",
    "pushNotifications.collectionDescriptionDeleted.notificationSubject":
      "{userName} 刪除了 {collectionName} 的說明",
    "pushNotifications.collectionEdited.notificationSubject":
      "{userName} 編輯了 {collectionName}",
    "pushNotifications.collectionPropertyEdited.subject":
      "{userName}編輯了{collectionName}中的{propertyType}屬性",
    "pushNotifications.collectionViewEdited.notificationSubject":
      "{userName}編輯了{collectionName}中的{collectionViewName}視圖",
    "pushNotifications.commentOnlyPermissionLevel.label": "只能評論",
    "pushNotifications.editOnlyPermissionLevel.label": "只能編輯",
    "pushNotifications.editPermissionLevel.label": "編輯",
    "pushNotifications.editorPermissionLevel.label": "全部權限",
    "pushNotifications.emailAccountSettingsEdited.subject":
      "{userName}編輯了其帳號設定",
    "pushNotifications.emptyPropertyValueInCollection.label": "空",
    "pushNotifications.formatChange.pageIcon.imagePlaceholder": "圖片",
    "pushNotifications.formatChange.pageIcon.label": "頁面圖示",
    "pushNotifications.groupMentionedInPage.notificationSubject":
      "{userName} 在{targetName} 提到了 {groupName}",
    "pushNotifications.membershipRequested.subject":
      "{userName} 要求將新成員加入 {workspaceName}",
    "pushNotifications.noAccessPermissionLevel.label": "無法存取",
    "pushNotifications.pageDeleted.subject": "{userName} 已刪除 {pageName}",
    "pushNotifications.pageLocked.subject": "{userName} 鎖定了 {pageName}",
    "pushNotifications.pagePermanentlyDeleted.subject":
      "{userName} 已永久刪除 {pageName}",
    "pushNotifications.pageRestored.subject": "{userName} 已恢復 {pageName}",
    "pushNotifications.pageUnlocked.subject": "{userName} 解鎖了 {pageName}",
    "pushNotifications.permissionsEditedForPageOrSpace.notificationSubject":
      "{userName}編輯了{targetName}的權限",
    "pushNotifications.privateContentTransferred.notificationSubject":
      "{author} 已傳輸來自 {fromUserName} 的私人內容給你： {pageName}",
    "pushNotifications.publicPermissions.label": "公開 ({permissionLevel})",
    "pushNotifications.readerPermissionLevel.label": "唯讀",
    "pushNotifications.reminderChanged.subject": "{pageName} 中的提醒",
    "pushNotifications.spacePermissionsWithRole.label":
      "{spaceName} ({permissionLevel})",
    "pushNotifications.unknownAuthorUpdatedProperty.label": "未知作者",
    "pushNotifications.unknownCollectionPropertyName.label": "未知",
    "pushNotifications.unknownRelationPropertyChanged.label": "未知",
    "pushNotifications.untitledCollection.label": "無標題",
    "pushNotifications.userAddedToSpace.notificationSubject":
      "{userName} 將你加入到 {workspaceName}",
    "pushNotifications.userCommentedSubject.notificationSubject":
      "{userName} 在 {targetName} 發表了評論",
    "pushNotifications.userDeletedCommentText.notificationContents":
      "[已刪除]💬 {commentText}",
    "pushNotifications.userInvitedToSpace.notificationSubject":
      "{userName} 邀請你加入 {workspaceName}",
    "pushNotifications.userInvitedToSpaceByBot.notificationSubject":
      "你已受邀加入 {workspaceName}",
    "pushNotifications.userInvitedToTeam.notificationSubject":
      "{userName} 邀請你加入 {teamName} 團隊",
    "pushNotifications.userMentionedInPage.notificationSubject":
      "{userName}在{targetName}提及了你",
    "pushNotifications.userPermissionsWithRole.label":
      "{userName} ({permissionLevel})",
    "pushNotifications.verificationExpired.notificationSubject":
      "{pageName} 的驗證已過期",
    "pushNotifications.workspaceName.untitled.placeholder": "無標題",
    "queueApiErrors.duplicateBlockLimit.errorMessage":
      "糟糕，內容太多了！你目前的方案限制你只能建立 {blockLimitNumber} 個區塊複本。請使用較少的內容重試。",
    "queueApiErrors.export_audit_log_limit.errorMessage":
      "糟糕，你在此工作區已有進行中的匯出檔！請在完成目前匯出檔並收到具有 CSV 內容的電子郵件後再試一次。",
    "queueApiErrors.team_export_disabled.errorMessage":
      "此團隊空間已停用匯出。",
    "quoteBlock.emptyQuote.placeholder": "空引用",
    "rateLimitError.message": "請稍後再試一次。",
    "readGuideForPM.section1.academy.text":
      "<a>Notion 學院</a>，適合每種等級和使用案例的課程",
    "readGuideForPM.section1.deeperTemplate.text":
      "深入了解進階的專案管理功能 → <a>使用子任務和相依性，將任務細分為方便管理的步驟</a>",
    "readGuideForPM.section1.recommendedTemplate.text":
      "<a>查看此範本如何用於你團隊的堆疊</a>",
    "readGuideForPM.section1.template.text":
      "<a>進一步了解資料庫支援的範本</a>",
    "readGuideForPM.section1.text":
      "1. 閱讀我們在<a>說明中心</a>提供的指南。試著先開始：",
    "readGuideForPM.section2.connection.text":
      "透過<a>連線</a>在 Notion 整合你最愛的工具",
    "readGuideForPM.section2.templateGallery.text":
      "探索我們在範本庫中的<a>範本</a>",
    "readGuideForPM.section2.text": "2. 或是從做中學：",
    "recordIcon.customTab.title": "自訂",
    "recordIcon.emojiModalMenu.title": "頁面圖標",
    "recordIcon.emojiTab.title": "表情符號",
    "recordIcon.iconTab.title": "圖示",
    "recordIcon.linkTab.buttonText": "送出",
    "recordIcon.linkTab.placeholder": "貼上連結到圖片…",
    "recordIcon.mediaMenu.caption":
      "推薦大小為 {recommendedWidth} × {recommendedHeight} 像素",
    "recordIcon.uploadFileTab.uploadError.message": "出了些問題。",
    "recordPath.untitledBlock.placeholder": "無標題",
    "recordTitleHelpers.untitledRecord.title": "無標題",
    "referralActivatedEmail.greeting": "哈嘍 {name}，",
    "referralActivatedEmail.howToEarnCreditList.item.downloadApps":
      "下載<mobilelink>行動應用</mobilelink>和<desktoplink>桌面應用</desktoplink>。",
    "referralActivatedEmail.howToEarnCreditList.item.installWebClipper":
      "為 Chrome 安裝<webclipperlink>Notion 網頁擷取器</webclipperlink>。",
    "referralActivatedEmail.howToEarnCreditList.item.keepInviting":
      "多多<referlink>邀請</referlink>朋友和同事。",
    "referralActivatedEmail.notionTeamSignoffAndThanks":
      "感謝你將 Notion 告訴親朋好友，{br} ──來自 Notion 團隊",
    "referralActivatedEmail.rewardMessage":
      "你的帳號已獲得<b> {creditValue} 的點數</b>！可以使用點數來<upgradelink>升級</upgradelink>並完全利用 Notion 的所有強大功能。{br}{br}想要<upgradelink>獲得更多的點數</upgradelink>嗎？可以通過以下幾種方法：",
    "referralActivatedEmail.signupText":
      "收到你的邀請後，有人註冊了 Notion 帳號。",
    "referralActivatedEmail.subjectLine": "{creditValue}點數即將到帳！",
    "referralEmail.creditInfo.text":
      "註冊後，我們會將<b> {creditDollarAmount} </b>放入你的帳號。使用它可以升級並發現 Notion 所提供的所有強大功能。",
    "referralEmail.invitedIntro.text":
      "<b> {fromUserName} </b> ({fromUserEmail}) 邀請你加入 Notion！ {br}{br}Notion 是一種多合一的數位工具，可幫助你保持生活和工作井井有條。在我們的<referlink>網站</referlink>上了解有關它的更多資訊。",
    "referralEmail.signupPrompt":
      "<b> <signuplink>按一下這裡註冊並獲得 {creditDollarAmount} 點數</signuplink> </b>",
    "referralEmail.subjectLine": "{fromUserName} 邀請你加入Notion",
    "regionSettings.region.label": "地區",
    "regionSettings.region.subtitle": "會影響日期、數字和貨幣的預設格式",
    "regionalFormatSettings.customDateFormat.applyChanges": "套用變更",
    "regionalFormatSettings.customDateFormat.title": "自訂格式",
    "regionalFormatSettings.customSettingOption.fullDate.custom": "自訂",
    "regionalFormatSettings.customSettingOption.fullDate.full": "完整日期",
    "regionalFormatSettings.customSettingOption.fullDate.iso": "ISO",
    "regionalFormatSettings.customSettingOption.fullDate.long": "長",
    "regionalFormatSettings.customSettingOption.fullDate.medium": "中",
    "regionalFormatSettings.customSettingOption.fullDate.short": "短",
    "regionalFormatSettings.customSettingOption.number.number": "數字",
    "regionalFormatSettings.customSettingOption.number.percent": "百分比",
    "regionalFormatSettings.customSettingOption.number.withCommas":
      "以逗號分隔的數字",
    "regionalFormatSettings.customSettingOption.shortDate.custom": "自訂",
    "regionalFormatSettings.customSettingOption.shortDate.iso": "ISO",
    "regionalFormatSettings.customSettingOption.shortDate.short": "簡短",
    "regionalFormatSettings.customSettingOption.weekStartOn.monday": "週一",
    "regionalFormatSettings.customSettingOption.weekStartOn.sunday": "星期日",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.monday":
      "週一",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.sunday":
      "星期日",
    "regionalFormatSettings.defaultSetting.fullDate": "完整日期",
    "regionalFormatSettings.defaultSetting.numbers": "數字",
    "regionalFormatSettings.defaultSetting.shortDate": "簡短日期",
    "regionalFormatSettings.defaultSetting.weekStart": "每週開始",
    "regionalFormatSettings.label.subtitle": "自動套用你所在地區的標準格式",
    "regionalFormatSettings.label.title": "使用地區預設值",
    "relationHelpers.autoInverseRelation.name":
      "與{sourceCollectionName}相關 ({sourceRelationName})",
    "relationHelpers.autoInverseRelation.untitledDatabase": "無標題資料庫",
    "relationHelpers.autoInverseRelation.untitledRelation": "無標題關係",
    "relationHelpers.autoInverseRelationSimple.name": "{sourceCollectionName}",
    "relationHelpers.autoInverseRelationWithIcon.name":
      "{sourceCollectionIcon} {sourceCollectionName}",
    "relationHelpers.autoRelation.name": "{targetCollectionName}",
    "relationHelpers.autoRelationWithIcon.name":
      "{targetCollectionIcon} {targetCollectionName}",
    "relationHelpers.autoSelfRelation.name": "相關 {targetCollectionName}",
    "relationHelpers.autoSelfRelationInverse.name":
      "重新與 {sourceCollectionName} 相關",
    "relationHelpers.autoSelfRelationInverseArrow.name": "封鎖者",
    "relationHelpers.autoSelfRelationInverseToggle.name":
      "上級 {sourceCollectionName}",
    "relationHelpers.autoSelfRelationNest.name": "子 {targetCollectionName}",
    "relationHelpers.autoSelfRelationTimelineArrow.name": "封鎖中",
    "relationHelpers.autoSelfRelationToggle.name":
      "下級 {targetCollectionName}",
    "relationPropertyMenu.addAPage.button": "加入頁面",
    "relationPropertyMenu.mobileDoneButton": "完成",
    "relationPropertyMenu.mobileMenuDone.button": "完成",
    "relationPropertyMenu.mobileRelationMenu.title": "關聯",
    "relationPropertyMenu2.connectedRelation.searchPlaceholder": "尋找頁面",
    "relationPropertyMenu2.connectedRelationGithub.searchPlaceholder":
      "粘贴URL(https://github.com/...)",
    "relationPropertyMenu2.searchPlaceholder": "連結或建立頁面…",
    "relationPropertyMenu2.syncedCollection.searchPlaceholder": "連結頁面",
    "relationPropertyMenu2.viewExisting.searchPlaceholder": "搜尋連結的頁面…",
    "relationToken.title.placeholder": "輸入標題...",
    "removeUsersFromSpace.nonexistentSpace.error.message": "空間不存在。",
    "removeUsersFromSpace.nonexistentUser.error.message": "使用者不存在。",
    "removeUsersFromSpace.removingLastAdmin.error.message":
      "糟糕！你無法移除上一個管理員。",
    "renameFileMenuPopup.input.placeholder": "無標題",
    "replitBlock.embeds.button.label": "嵌入 repl",
    "replitBlock.embeds.caption": "適用於 Replit。",
    "replitBlock.placeholder": "嵌入 repl",
    "reportPage.additionalInformation.placeholder": "加入其他資訊 (選填)",
    "reportPage.helpButton.caption": "Notion 的內容政策",
    "reportPage.reportReasons.inappropriate_content": "不適當的內容",
    "reportPage.reportReasons.other_content_policy_violation": "其他",
    "reportPage.reportReasons.phishing_or_spam": "網絡釣魚或垃圾郵件",
    "reportPageModal.cancelButton.label": "取消",
    "reportPageModal.closeButton.label": "關閉",
    "reportPageModal.mobile.title": "檢舉頁面",
    "reportPageModal.offlineMessage.description": "請連接網路後再檢舉。",
    "reportPageModal.reportButton.label": "檢舉",
    "reportPageModal.reportReasons.other_content_policy_violation": "其他",
    "reportPageModal.reportReasons.phishing_or_spam": "網絡釣魚或垃圾郵件",
    "reportPageModal.somethingWentWrong.label": "發生問題。",
    "reportPageModal.thanksForReporting":
      "感謝你檢舉此頁面，我們的團隊將會展開檢查。",
    "reportPageModal.title": "你為什麼要檢舉此頁面？",
    "requestAccessForm.cancelButton.label": "取消",
    "requestAccessForm.messageInput.placeholder": "訊息（可選）",
    "requestAccessForm.mobileSend.label": "送出",
    "requestAccessForm.sendRequestButton.label": "送出要求",
    "requestAccessForm.sendRequestButton.title": "要求存取權限",
    "requestAccessForm.title.label": "要求存取",
    "requestClaim.email.closingText": "非常感謝你的協助！",
    "requestClaim.email.customerDescription":
      "下列客戶提交新的網域宣告要求：{br}<list>{workspaceId}{workspaceName}{requestorInfo}</list>",
    "requestClaim.email.greetingWithoutName": "團隊，你好！",
    "requestClaim.email.isPaidNotification":
      "此為付費工作區。請聯絡 #檢傷分類帳單 Slack 管道，以便開票及處理。",
    "requestClaim.email.otherPendingSpaces":
      "我們努力將完整、卓越的工作區宣告要求清單加入此電子郵件。同時，請使用 Notion 管理員工具。",
    "requestClaim.email.requestDescription":
      "新工作區宣告要求的摘要：{br}<list>{spaceId}{spaceName}{memberCount}{plan}{isPaid}{isDelinquent}</list>",
    "requestClaim.email.subjectLine": "{customerEmail} 的網域宣告要求",
    "requestMembersModal.reasonForRequest.title": "要求原因",
    "requestMembersModal.requestFail.toast": "無法將 {users} 邀請至工作區。",
    "requestMembersModal.requestInvitesButton.label": "要求邀請",
    "requestMembersModal.requestSuccess.toast":
      "成功向你的工作區管理員要求 {users} 的成員資格。",
    "requestMembersModal.title": "邀請成員的要求",
    "requestTransferEmail.body.appeal":
      "如果你對轉移要求有任何疑問，請聯絡 <mailto>{contactEmail}</mailto>。{br}{br}如需技術問題說明，你可以透過 <notionsupportemail>team@makenotion.com</notionsupportemail> 聯絡我們的支援團隊。",
    "requestTransferEmail.body.cta":
      "<b>請依照 <linktoworkspace>{workspaceName}</linktoworkspace> 的指示繼續轉移。</b>",
    "requestTransferEmail.body.domainClaimElligible":
      "我們記錄顯示你的個人 Notion 工作區 <b>{workspaceName}</b> 是使用已驗證的企業電子郵件地址建立。貴公司在 Notion <b>{contactEmail}</b> 的網域擁有者正在要求你將個人 Notion 工作區 {workspaceName} 轉移至非企業電子郵件帳戶。",
    "requestTransferEmail.body.intro": "感謝你使用 Notion。",
    "requestTransferEmail.body.list.cta":
      "轉移完成後，即會將你的工作區和資料轉移至個人 Notion 使用者帳戶。如需其他資訊，請參閱「<linktohelpcenter>Notion 說明中心</linktohelpcenter>」。",
    "requestTransferEmail.body.list.item1":
      "在你替換與帳戶相關聯的企業電子郵件地址前，你將無法存取個人工作區。",
    "requestTransferEmail.body.list.item2":
      "轉移完成後，即會將你的工作區和資料轉移至個人 Notion 使用者帳戶。如需其他資訊，請參閱「<linktohelpcenter>Notion 說明中心</linktohelpcenter>」。",
    "requestTransferEmail.body.list.title": "這對你來說代表什麼？",
    "requestTransferEmail.closingText": "謝謝你。{br} ──來自 Notion 團隊",
    "requestTransferEmail.greetingWithName": "{customerName}，你好：",
    "requestTransferEmail.greetingWithoutName": "你好：",
    "requestTransferEmail.initiateSubjectLine":
      "將 {workspaceName} 轉移至非企業電子郵件帳戶的注意事項",
    restrictedPageTitle: "沒有存取權限",
    "restrictedPermissionConfirmationModal.actionButton.cancel": "關閉視窗",
    "restrictedPermissionConfirmationModal.actionButton.restoreAccess":
      "恢復存取權限",
    "restrictedPermissionConfirmationModal.actionButton.restoreTeamPermissions":
      "重設權限",
    "restrictedPermissionConfirmationModal.actionButton.restrictAccess":
      "限制存取權限",
    "restrictedPermissionConfirmationModal.footer.whisperText":
      "管理員仍然可以為受限頁面恢復權限。",
    "restrictedPermissionConfirmationModal.permissionGroup.generic": "權限",
    "restrictedPermissionConfirmationModal.permissionGroup.group": "群組",
    "restrictedPermissionConfirmationModal.permissionGroup.space": "工作區",
    "restrictedPermissionConfirmationModal.permissionGroup.user": "使用者",
    "restrictedPermissionConfirmationModal.remove.description":
      "確定要變更此角色並限制存取權限嗎？此頁面將不再繼承父頁面的分享設定。",
    "restrictedPermissionConfirmationModal.restore.description":
      "確定要恢復存取權限嗎？將從父頁面繼承以下權限：",
    "restrictedPermissionConfirmationModal.restoreNoChanges.description":
      "確定要恢復存取權限嗎？",
    "restrictedPermissionConfirmationModal.restoreTeamPermissions.mainDescription":
      "確定要重設比對團隊空間預設值的權限嗎？",
    "restrictedPermissionConfirmationModal.restoreTeamPermissions.warningMessage":
      "不屬於團隊空間的每個其他所有人會失去存取權限。",
    "restrictedPermissionConfirmationModal.restrict.description":
      "確定要刪除此{permissionGroup}並限制存取權限嗎？此頁面將不再繼承父頁面的分享設定。",
    "revokeTokenButton.tooltip": "撤銷此權杖。",
    "richTextMenu.aiAssist.tooltip": "用 AI 幫助您摘要、重寫或延伸文字。",
    "richTextMenu.aiAssistButton.label": "AI 輔助",
    "richTextMenu.assist.tooltip": "使用 AI 協助你重寫文字。",
    "richTextMenu.assistButton.label": "AI 輔助",
    "richTextMenu.boldButton.tooltip": "加粗",
    "richTextMenu.equationButton.tooltip": "建立方程式",
    "richTextMenu.italicsButton.tooltip": "斜體",
    "richTextMenu.linkButton.tooltip": "連結",
    "richTextMenu.markAsCodeButton.tooltip": "標記為程式碼",
    "richTextMenu.mentionButton.tooltip": "提及人員、頁面或日期…",
    "richTextMenu.strikeThroughButton.tooltip": "刪除線",
    "richTextMenu.turnIntoButton.label": "轉換成",
    "richTextMenu.turnIntoButton.tooltip": "轉換成",
    "richTextMenu.underlineButton.tooltip": "底線",
    "router.loginWithSamlError.message": "無法登入。",
    "router.renderErrorPage.message.part1": "糟糕！出了些問題。",
    "router.renderErrorPage.message.part2":
      "請重新整理並重試，或者聯絡<textlink>訊息支援</textlink>。",
    "router.renderErrorPage.reloadButton.label": "重新整理",
    "samlErrors.couldNotDownloadIdpMetadata.message":
      "無法下載 SAML IDP 詮釋資料。請檢查你的 IDP 詮釋資料 URL 是否正確。",
    "samlErrors.couldNotParseIdentityProviderMetadataXML.message":
      "無法解析 IDP 詮釋資料 XML。",
    "samlErrors.couldNotParseIdpMetadata.message":
      "無法解析 SAML IDP 詮釋資料。請檢查你的 IDP 詮釋資料是否正確。",
    "samlErrors.disableTogglingPageAccessRequestsForNonMembers":
      "目前已停用非工作區成員的頁面存取權限要求。",
    "samlErrors.domainVerificationConfigHasDomain.message":
      "SAML 配置已有嘗試的網域。",
    "samlErrors.domainVerificationDnsFailed.message":
      "DNS 記錄不包含正確的 Notion 驗證碼 TXT 記錄。",
    "samlErrors.domainVerificationInvalidDomain.message":
      "無效的網域值。請正確格式化並確保網域未保留：{domain}",
    "samlErrors.domainVerificationhasPending.message":
      "此網域已有待處理的網域驗證。",
    "samlErrors.emailDomainAlreadyConfigured.message":
      "電子郵件網域已在現有工作區上設定 SAML。",
    "samlErrors.emailDomainWorkspaceCreationIsEducationDomain.message":
      "無法防止根據教育電子郵件網域建立工作區的作業。",
    "samlErrors.emailNotConfiguredForSamlSso.message":
      "這個電子郵件地址尚未設定為此工作區的 SAML 單一登入，請聯絡你的管理員。",
    "samlErrors.incorrectURL.message":
      "SAML assertion 中的 Audience 必須為 {correctUrl}",
    "samlErrors.incorrectlyConfiguredSaml.message":
      "SAML 單一登入設定錯誤。請聯絡你的管理員。",
    "samlErrors.invalidIDPURL.message": "IDP 詮釋資料 URL 是無效的URL。",
    "samlErrors.invalidSamlConfiguration.message":
      "無效的 SAML 設定。請聯絡你的管理員。",
    "samlErrors.samlNameIdEmailRequired.message":
      "SAML 名稱 ID 屬性必須是電子郵件地址。請聯絡你的管理員。",
    "samlErrors.samlRequired.message": "你必須使用 SAML 單一登入以登入 Notion",
    "samlErrors.signedRequest.message": "IDP 中繼資料無法接受簽署的請求。",
    "saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message":
      "嘿！區塊不能移動到它們自己裡面。",
    "saveEditsError.message": "儲存編輯時存在問題。請給我們傳送訊息尋求幫助。",
    "saveEditsError.mobile.message":
      "儲存編輯時存在問題。請給我們傳送訊息尋求幫助。",
    "scimTableLegacyUserCell.tooltip":
      "此權杖的建立者為不再是工作區管理員的使用者。",
    "scimTokenSettings.NewSCIMTokenButton.title": "新權杖",
    "scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.spaceHasLegacyToken":
      "若要建立新的 SCIM 權杖，請撤銷現有權杖。",
    "scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.undefined":
      "目前無法建立新的 SCIM 權杖。請稍後再試一次。",
    "scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.userHasExistingToken":
      "你已註冊 SCIM 權杖。若要建立新權杖，請撤銷你先前建立的權杖。",
    "scimTokenSettings.error.failedCreatingNewScimToken":
      "無法建立新的 SCIM 權杖，請稍後再試一次。",
    "scroller.scrollDown.name": "向下捲動",
    "search.addFilter.button.label": "加入篩選",
    "search.dateMenu.dateMessage": "選擇或輸入日期...",
    "search.dateRangeMenu.endingMessage": "結束",
    "search.dateRangeMenu.startingMessage": "開始",
    "search.filterBarFilter.title":
      "{filterName}{colon} {filterOperator} {filterValues}",
    "search.filterMenu.addAPersonButton.label": "加入人員",
    "search.filterMenu.addATeamButton.label": "新增團隊空間",
    "search.filterMenu.deletedOnlyToggle.label": "僅刪除項目",
    "search.filterMenu.moreFilters.created": "建立時間",
    "search.filterMenu.moreFilters.createdBy": "建立者",
    "search.filterMenu.moreFilters.date": "日期",
    "search.filterMenu.moreFilters.inPage": "在頁面中",
    "search.filterMenu.moreFilters.inTeams": "團隊空間",
    "search.filterMenu.moreFilters.lastEdited": "上次編輯",
    "search.filterMenu.moreFilters.person": "人員",
    "search.filterMenu.moreFiltersSection.title": "進階篩選",
    "search.filterMenu.onlyMatchTitlesToggle.label": "僅匹配標題",
    "search.filterMenu.quickFilters.createdByMe": "由我建立",
    "search.filterMenu.quickFilters.editedLastWeek": "編輯於上週",
    "search.filterMenu.quickFilters.inCurrentPage": "在目前頁面中",
    "search.filterMenu.quickFiltersSection.title": "快速篩選",
    "search.filterMenu.searchPeople.placeholder": "搜尋人員",
    "search.filterMenu.searchTeams.placeholder": "搜尋團隊空間",
    "search.header.badSearch.button.label": "檢舉不良搜尋",
    "search.inputMenu.errorMessage": "出了些問題。",
    "search.inputMenu.loading.message": "載入中…",
    "search.inputMenu.noResults.message": "未找到結果。",
    "search.recentPagesTimeBuckets.older.text": "較舊",
    "search.recentPagesTimeBuckets.past30Days.text": "過去 30 天",
    "search.recentPagesTimeBuckets.pastWeek.text": "上週",
    "search.recentPagesTimeBuckets.today.text": "今天",
    "search.recentPagesTimeBuckets.yesterday.text": "昨天",
    "search.result.archived.badge.text": "已歸檔",
    "search.searchActionMenuItem.fullSearch.description":
      "搜尋「{query}」的所有頁面內容",
    "search.searchActions.actions.text": "動作",
    "search.searchResultBuckets.recent.text": "跳回",
    "search.searchResultBuckets.server.text": "更多結果",
    "search.searchResultBuckets.titleOnlyServer.text": "標題相符項目",
    "search.sort.sortMenuTitle": "排序方式",
    "search.sort.sortOrder.bestMatches": "最佳匹配",
    "search.sort.sortOrder.created.newestFirst": "建立時間：最新優先",
    "search.sort.sortOrder.created.oldestFirst": "建立時間：最早優先",
    "search.sort.sortOrder.lastEdited.newestFirst": "上次編輯：最新優先",
    "search.sort.sortOrder.lastEdited.oldestFirst": "上次編輯：最早優先",
    "searchDateFilter.acceptButton.label": "接受",
    "searchDateFilter.applyButton": "套用",
    "searchDateFilter.cancelButton.label": "取消",
    "searchDateFilter.clearButton": "清除",
    "searchDateFilter.clearButton.label": "清除",
    "searchDateFilter.quickActions.last30Days.label": "過去 30 天",
    "searchDateFilter.quickActions.last7Days.label": "過去 7 天",
    "searchDateFilter.quickActions.today.label": "今天",
    "searchDateFilter.shortTitle": "日期",
    "searchErrorMenuItem.error.genericErrorMessage": "出了些問題",
    "searchErrorMenuItem.error.noResults": "沒有結果",
    "searchErrorMenuItem.errorPrompt.goOnline": "連接到網路以取得更多結果。",
    "searchErrorMenuItem.errorPrompt.refreshOrReport":
      "嘗試重新整理或<reportlink>報告問題</reportlink>。",
    "searchErrorMenuItem.errorPrompt.searchDeleted":
      "有些結果可能位於你已刪除的頁面。{br}<searchdeleted>搜尋刪除的頁面</searchdeleted>",
    "searchErrorMenuItem.errorPrompt.searchFullContent": "嘗試使用完整內容搜尋",
    "searchErrorMenuItem.errorPrompt.searchTerms": "嘗試不同的搜尋字詞",
    "searchErrorMenuItem.errorPrompt.searchTermsAndFilters":
      "嘗試不同的搜尋字詞或篩選",
    "searchFilteredCollectionMenu.targetDatabase.title":
      "<regular>在</regular> {databaseWithIcon} 中",
    "searchFooter.helpText.openHint": "打開",
    "searchFooter.helpText.openNewTab": "在新標籤頁中打開",
    "searchFooter.helpText.openNewWindow": "在新視窗中打開",
    "searchFooter.helpText.selectHint": "選擇",
    "searchHelpers.afterStartDate": "在 {startDate}之後",
    "searchHelpers.beforeEndDate": "在 {endDate}之前",
    "searchHelpers.betweenStartAndEndDates": "{startDate} - {endDate}",
    "searchInputMenuItem.placeholder.namedPage": "在 {pageTitle} 中搜尋…",
    "searchInputMenuItem.placeholder.namedSpace": "搜尋 {spaceName}…",
    "searchInputMenuItem.placeholder.unnamedPage": "在頁面中搜尋…",
    "searchInputMenuItem.tooltip.navigationalSearch": "根據標題前往頁面",
    "searchModal.searchResultHoverOver.createdBy": "建立者",
    "searchModal.searchResultHoverOver.lastEdited": "上次編輯",
    "searchPageFilter.searchTokenFilter.addAPage.button": "加入另一頁面",
    "searchPageFilter.searchTokenFilter.resultSection.title": "選擇頁面",
    "searchPageFilter.searchTokenFilter.tokenInput.placeholder": "搜尋頁面…",
    "searchTokenFilter.applyButton": "套用",
    "searchTokenFilter.clearButton": "清除",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.captionMulti":
      "強制執行後，在上面設定的電子郵件域名中到工作區成員只能使用 SAML 單一登入登入。管理員帳號仍可以使用電子郵件登入。",
    "securitySAMLSettings.SCIMSection.helpButton.label": "了解 SCIM",
    "securitySAMLSettings.SetupInformationSection.samlSSOEntityID.copyTooltip":
      "按一下即可複製連結",
    "securitySAMLSettings.SetupInformationSection.samlSSOEntityIDLink":
      "SAML 單一登入/SAML 實體 ID",
    "securitySAMLSettings.SetupInformationSection.scimBaseUrl": "SCIM 基底 URL",
    "securitySAMLSettings.SetupInformationSection.scimBaseUrl.copyTooltip":
      "按一下即可複製連結",
    "securitySAMLSettings.SetupInformationSection.workspaceId": "工作區 ID",
    "securitySAMLSettings.SetupInformationSection.workspaceId.copyTooltip":
      "按一下即可複製 ID",
    "securitySAMLSettings.disableGuests.confirmationModal.confirmButton.label":
      "是",
    "securitySAMLSettings.disableGuests.confirmationModal.message":
      "是否確定？此工作區中的所有訪客都將被移除。",
    "securitySAMLSettings.emailDomainsSection.addDomain": "新增網域",
    "securitySAMLSettings.emailDomainsSection.details": "檢視詳細資料",
    "securitySAMLSettings.emailDomainsSection.detailsCaption":
      "查看更多關於此網域驗證記錄狀態的資訊。",
    "securitySAMLSettings.emailDomainsSection.emailInput.captionNoSupportLink":
      "當你啟用 SAML 後，任何使用以下網域電子郵件地址的人員就能夠使用 SAML 單一登入登入。",
    "securitySAMLSettings.emailDomainsSection.emptyTable": "未配置網域。",
    "securitySAMLSettings.emailDomainsSection.remove": "移除網域",
    "securitySAMLSettings.emailDomainsSection.removeCaption":
      "刪除此網域驗證記錄。",
    "securitySAMLSettings.offline.message": "請連接網路後管理安全設定。",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.confirmButton.label":
      "是",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.message":
      "是否確定？任何非工作區成員或訪客將無權存取工作區中的所有頁面。",
    "securitySAMLSettings.saveSettingsError.message": "出了些問題。",
    "securitySAMLSettings.securitySection.disableExport.caption":
      "防止任何人匯出為 Markdown、CSV 或 PDF。",
    "securitySAMLSettings.securitySection.disableExport.label": "禁用匯出",
    "securitySAMLSettings.securitySection.disableGuests.caption":
      "禁止任何人邀請工作區之外的人至頁面。",
    "securitySAMLSettings.securitySection.disableGuests.label": "禁用訪客",
    "securitySAMLSettings.securitySection.disableMovingPages.caption":
      "防止任何人透過「移動到」或「儲存複本到」動作，將頁面儲存複本到其他工作區。",
    "securitySAMLSettings.securitySection.disableMovingPages.label":
      "禁止將頁面儲存複本到其他工作區",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.caption":
      "這將防止擁有頁面連結的人要求存取。工作區成員總是可以要求存取權限。",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.label":
      "禁用來自非成員的頁面存取要求",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.caption":
      "這將使成員無法建立、移動、重新排序和刪除頂層工作區頁面。",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.label":
      "防止成員編輯工作區分區",
    "securitySAMLSettings.securitySection.preventPublicSharing.caption":
      "停用此工作區中每個頁面上「分享」選單中的「分享到網路」選項。",
    "securitySAMLSettings.securitySection.preventPublicSharing.label":
      "防止成員公開分享頁面",
    "securitySAMLSettings.securitySection.title": "安全",
    "securitySAMLSettings.upsell.button.business": "升級到商業版",
    "securitySAMLSettings.upsell.button.enterprise": "升級到企業版",
    "securitySAMLSettings.upsell.caption":
      "升級到 {upsellTier} 版可獲得進階安全設定、SAML 單一登入以及自動用戶和群組配置。",
    "securitySAMLSettings.upsell.caption.business":
      "商業版包括大規模管理員工存取權限的單一登入、在敏感文件上協作的私人團隊空間及更多內容",
    "securitySAMLSettings.upsell.caption.enterprise":
      "企業版允許你自動佈建使用者和群組，並在整個工作區中取得更多可視性和控制。",
    "securitySAMLSettings.upsell.title.business":
      "SAML 單一登入及更多管理員工具的升級",
    "securitySAMLSettings.upsell.title.enterprise":
      "SCIM、進階安全性及更多項目的升級",
    "selectableCommentMenu.addCommentPrompt.tooltip":
      "按一下<invertedcolor>加入評論</invertedcolor>",
    "selectableHoverMenu.filterActions.placeholder": "搜尋動作…",
    "selectionLinkButton.addLink.tooltip": "加入連結",
    "selectionLinkButton.currentInfo.linkTitle": "連結標題",
    "selectionLinkButton.currentInfo.pageOrUrl": "頁面或 URL",
    "selectionLinkButton.invalidUrl": "輸入完整的連結 URL",
    "selectionLinkButton.linkToPage": "連結到頁面",
    "selectionLinkButton.linkToPage.linkToBlock": "連結到區塊",
    "selectionLinkButton.linkToPage.loading": "載入中…",
    "selectionLinkButton.linkToPage.unknownBlock": "未知區塊",
    "selectionLinkButton.linkToPageSection.title": "連結到頁面",
    "selectionLinkButton.linkToURL": "連結到網頁",
    "selectionLinkButton.linkToWebPage": "連結到網頁",
    "selectionLinkButton.mobile.title": "連結",
    "selectionLinkButton.pageOrUrl": "頁面或 URL",
    "selectionLinkButton.recents.title": "最近",
    "selectionLinkButton.removeLink": "移除連結",
    "selectionLinkButton.search.createNewLinkPlaceholder": "貼上連結或搜尋頁面",
    "selectionLinkButton.search.editLinkPlaceholder": "編輯連結或搜尋頁面",
    "sendEmailDigest.emailSubjectLine":
      "{numberOfUpdates, plural, other {{workspaceName}有 {numberOfUpdates} 项更新}}",
    "sendEmailDigest.untitledSpaceName.placeholder": "無標題",
    "sendMobileAppLink.textMessage":
      "你好！按此連結可在手機上安裝 Notion： {baseURL}/mobile?download=true 不要忘了下載我們的 Mac 和 Windows 應用程式。祝使用愉快！",
    "sendSCIMTokenInactiveEmail.emailSubjectLine":
      "{workspaceName} 中撤銷的 SCIM 權杖",
    "sendSCIMTokenInactiveEmail.untitledSpaceName.placeholder": "工作區",
    "sendToSlack.automationCreatorCaption.label":
      "{hasCreatorName, select, true {{automationCreatorName}} other {匿名}} 新增",
    "sendToSlack.automationCreatorRestrictedCaption.label":
      "要求 {hasCreatorName, select, true {{automationCreatorName}} other {匿名}} 變更這些設定，或是在需要時<deleteaction>刪除</deleteaction>。",
    "setPageContentClassification.unknownPageName.default": "Notion 頁面",
    "settingItem.buttonPopup.done.label": "完成",
    "settings.regionSettings.regionSearch": "搜尋地區...",
    "settings.workspaceAnalytics.allMembers.tooltip.allTime":
      "每位成員工作區活動的所有時間",
    "settings.workspaceAnalytics.allMembers.tooltip.lastDays":
      "{dateRange} 期間的每位成員工作區活動",
    "settings.workspaceAnalytics.contentTab.allPages.table.empty":
      "你的查詢找不到頁面。",
    "settings.workspaceAnalytics.contentTab.allPages.table.location.name":
      "位置",
    "settings.workspaceAnalytics.contentTab.allPages.title": "所有頁面",
    "settings.workspaceAnalytics.contentTab.contentEngagement.tooltip.allTime":
      "工作區所有頁面的所有時間活動（包括私人和已共享）",
    "settings.workspaceAnalytics.contentTab.contentEngagement.tooltip.lastDays":
      "{dateRange} 期間所有工作區頁面的活動（包括私人和已共享）",
    "settings.workspaceAnalytics.contentTab.pages.tooltip.allTime":
      "工作區所有你擁有存取權限之頁面的所有時間活動",
    "settings.workspaceAnalytics.contentTab.pages.tooltip.lastDays":
      "{dateRange} 起你存取之頁面上的活動",
    "settings.workspaceAnalytics.contentTab.placeholder": "依標題搜尋",
    "settings.workspaceAnalytics.contentTab.timeRange": "下列項目的視圖",
    "settings.workspaceAnalytics.dataDisclaimerTooltip":
      "2022 年 8 月 1 日起可用的資料",
    "settings.workspaceAnalytics.membersOverTime.allTimeTooltip":
      "所有時間選擇顯示過去 90 天查看頁面的成員。",
    "settings.workspaceAnalytics.overviewTab.contentEngagement.tooltip.allTime":
      "工作區所有頁面的所有時間活動",
    "settings.workspaceAnalytics.overviewTab.contentEngagement.tooltip.lastDays":
      "{dateRange} 期間工作區所有頁面的活動",
    "settings.workspaceAnalytics.overviewTab.userEngagement.tooltip.allTime":
      "活躍成員和訪客已在工作區中至少查看一個頁面",
    "settings.workspaceAnalytics.overviewTab.userEngagement.tooltip.lastDays":
      "活躍成員和訪客已在 {dateRange} 內至少查看一個頁面",
    "settings.workspaceAnalytics.searchTab.searchQueries.title": "搜尋查詢",
    "settings.workspaceAnalytics.searchTab.searchQueries.tooltip":
      "顯示工作區自 {dateRange} 起的熱門搜尋查詢",
    "settings.workspaceAnalytics.searchTable.table.empty":
      "沒有可顯示的搜尋查詢分析。",
    "settings.workspaceAnalytics.title": "工作區分析",
    "settings.workspaceAnalytics.usersTab.allUsers.title":
      "Notion 中的所有使用者",
    "settings.workspaceAnalytics.usersTab.allUsers.title.tooltip":
      "這不包括私人頁面。使用者也可以選擇不被追蹤。",
    "settings.workspaceAnalytics.usersTab.helpButton.title":
      "這裡顯示了什麼資訊？",
    "settings.workspaceAnalytics.usersTab.teamsColumn.guest": "無",
    "settings.workspaceAnalytics.usersTab.topLevel.active.last28Days":
      "過去 28 天內",
    "settings.workspaceAnalytics.usersTab.topLevel.membersAdded":
      "過去 28 天內加入 {numUsers}",
    "settings.workspaceAnalytics.usersTab.userEngagement.title": "使用者參與",
    "settings.workspaceAnalytics.usersTab.userEngagement.tooltip.allTime":
      "活躍成員和訪客已在工作區中至少查看一個頁面",
    "settings.workspaceAnalytics.usersTab.userEngagement.tooltip.lastDays":
      "活躍成員和訪客已在 {dateRange} 內至少查看一個頁面",
    "settings.workspaceAnalytics.usersTab.userTable.lastActiveTimestamp":
      "在 {timestamp}",
    "settings.workspaceAnalytics.usersTab.userTable.lastActiveTimestamp.noLastActive":
      "沒有活動",
    "shareButtonIntroTooltip.title": "你可以在此處與隊友分享你的內容",
    "shareMenu.addFromSlack.label": "從 {integrationNameWithLogo} 加入人員",
    "shareMenu.closeInviteDialog.cancelButton.label": "取消",
    "shareMenu.closeInviteDialog.confirmationButton.label": "是",
    "shareMenu.closeInviteDialog.confirmationMessage":
      "你的變更尚未儲存，要捨棄變更嗎？",
    "shareMenu.emailMessageInput.placeholder": "為你的邀請加入訊息...",
    "shareMenu.inviteButton": "邀請",
    "shareMenu.inviteButton.emailOverMaxLength.tooltip":
      "訊息超過 1,000 個字元的限制。",
    "shareMenu.inviteButton.fullAccessOnlyMessage.tooltip":
      "只有擁有完整存取權限的人才能加入人員。",
    "shareMenu.inviteButton.invite": "邀請",
    "shareMenu.inviteButton.upgrade": "升級",
    "shareMenu.inviteFailure.snackbarMessage": "無法邀請 {users}",
    "shareMenu.inviteSuccess.snackbarMessage": "成功邀請 {users}",
    "shareMenu.inviteTargetsInput.placeholder":
      "加入人員、群組或電子郵件地址...",
    "shareMenu.searchResult.groupPermission.tooltip": "此群組有存取權限。",
    "shareMenu.searchResult.spacePermission.tooltip":
      "{spaceIconAndName} 的所有人都有存取權限。",
    "shareMenu.searchResult.teamGuestPermission.tooltip":
      "{teamIconAndName} 的團隊空間訪客有存取權限。",
    "shareMenu.searchResult.teamMemberPermission.tooltip":
      "{teamIconAndName} 的團隊空間成員有存取權限。",
    "shareMenu.searchResult.teamPermission.tooltip":
      "{teamIconAndName} 的團隊空間擁有者有存取權限。",
    "shareMenu.searchResult.userPermission.tooltip": "此使用者有存取權限",
    "shareMenu.sendInvite.label": "傳送邀請",
    "shareMenu.share.label": "分享",
    "shareMenu.slackIntegrationName.label": "Slack",
    "shareMenuSearchRequest.importedContactsSection.title": "從 Slack 匯入",
    "shareMenuSearchRequest.inPageSection.title": "頁面中",
    "shareMenuSearchRequest.inviteNewUser.buttonItem": "邀請 {tokenQuery}",
    "shareMenuSearchRequest.noImportedContacts.text":
      "嘗試連線不同的 Slack 工作區或輸入電子郵件地址",
    "shareMenuSearchRequest.noImportedContacts.title": "找不到聯絡資訊",
    "shareMenuSearchRequest.noSuggestions.defaultText": "嘗試輸入電子郵件地址",
    "shareMenuSearchRequest.noSuggestions.text":
      "嘗試連線 Slack 工作區或輸入電子郵件地址",
    "shareMenuSearchRequest.noSuggestions.title": "找不到人員",
    "shareMenuSearchRequest.notInPageSection.title": "沒有在頁面中",
    "shareMenuSearchRequest.suggestedEmail.title": "建議",
    "shareMenuSearchRequest.suggestedSection.title": "建議",
    "sharedActivity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}建立了群組{groupName}}}",
    "sharedActivity.updatedPermissionGroupDeleted.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}刪除了群組{groupName}}}",
    "sharedActivity.updatedPermissionGroupEdit.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了群組{groupName}}}",
    "sharedActivity.updatedPermissionGroupEditedDefault.header":
      "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了群組{groupName}}}",
    "sharedContextualInviteHelpers.default.inviteMessage": "你的邀請訊息",
    "sharedContextualInviteHelpers.default.inviteMessagePrefix": "可選訊息...",
    "sharedContextualInviteHelpers.guest.inviteMessage2":
      "{userName} 分享了 {pageName}。加入{spaceName} 以查看此頁面。",
    "sharedContextualInviteHelpers.member.inviteMessage2":
      "{userName} 與你分享了頁面 {pageName}。",
    "sharedSpacePermissionGroupHelpers.permissionGroup.anonymous": "匿名群組",
    "sharedWithMePopover.earlierSection.label": "早些時候",
    "sharedWithMePopover.learnMore.prompt": "了解共用頁面",
    "sharedWithMePopover.pastWeekSection.label": "上週",
    "sharedWithMePopover.todaySection.label": "今天",
    "sharedWithMePopover.updatedEarlierSection.label": "已於稍早更新",
    "sharedWithMePopover.updatedPastWeekSection.label": "已於上週更新",
    "sharedWithMePopover.updatedTodaySection.label": "已於今天更新",
    "sideBar.newBadge": "全新",
    "sidebar.addAPageButtonTeamToggle.tooltip": "加入頁面",
    "sidebar.addAWorkspaceOrPrivatePage.tooltip": "新增頁面",
    "sidebar.addButton.addPageTooltip": "新增頁面",
    "sidebar.addButton.addTeamTooltip": "新團隊空間",
    "sidebar.bookmarkedPagesSection.tooltip": "你最愛的頁面。",
    "sidebar.developmentOnly.uidoc.button": "使用者介面檔案",
    "sidebar.developmentOnly.uidoc.tooltip": "僅限開發的設計和工程工具。",
    "sidebar.favoritesSection.header": "最愛",
    "sidebar.guestMember.createWorkspacePrompt": "建立工作區",
    "sidebar.guestMember.message":
      "你目前是訪客。若要查看所有工作區頁面，請聯絡管理員將你升級為成員。",
    "sidebar.guestMember.requestMembershipPrompt": "要求成為成員",
    "sidebar.homeSidebarItem.home.tooltip": "首頁",
    "sidebar.homeSidebarItem.myTasks.tooltip": "我的任務",
    "sidebar.integrations.label": "整合",
    "sidebar.integrations.tooltip": "尋找你的整合",
    "sidebar.invitePeopleButton": "邀請人員",
    "sidebar.invitePeopleButton.tooltip": "將成員加入到工作區。",
    "sidebar.newPage.button": "新頁面",
    "sidebar.openImportModalButton": "匯入",
    "sidebar.openImportModalButton.tooltip": "從 Word、Markdown、HTML 等匯入。",
    "sidebar.openSidebarTeamBrowserButton": "所有團隊空間",
    "sidebar.openSidebarTeamBrowserButton.tooltip": "瀏覽所有團隊空間",
    "sidebar.openTemplatePickerButton": "模版",
    "sidebar.openTemplatePickerButton.tooltip":
      "查看模版並將其複製到你的工作區中。",
    "sidebar.openTrashModalButton.tooltip": "恢復已刪除的頁面。",
    "sidebar.outlinerTeamToggleButton.addLabel": "加入成員",
    "sidebar.outlinerTeamToggleButton.archiveLabel": "歸檔團隊空間",
    "sidebar.outlinerTeamToggleButton.cannotArchiveLabel": "歸檔團隊空間",
    "sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.moreThanOneMember":
      "工作區中必須只有一位成員，才能歸檔此團隊空間",
    "sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.onlyDefaultTeam":
      "建立其他預設團隊空間以歸檔此團隊空間",
    "sidebar.outlinerTeamToggleButton.cannotDuplicateDefaultTeamspace":
      "無法建立預設團隊空間的複本",
    "sidebar.outlinerTeamToggleButton.cannotDuplicateTeamspaceWithGatedFeaturesOnDowngradedAccount":
      "如果是僅限商業版以上版本的設定，即無法建立團隊空間的複本。",
    "sidebar.outlinerTeamToggleButton.cannotLeaveDefaulTeamTooltip":
      "無法離開預設團隊空間",
    "sidebar.outlinerTeamToggleButton.duplicateCaption":
      "重複項權限及其他設定，但沒有頁面和成員",
    "sidebar.outlinerTeamToggleButton.duplicateLabel": "建立團隊空間的複本",
    "sidebar.outlinerTeamToggleButton.joinAsMemberLabel": "订阅为成员",
    "sidebar.outlinerTeamToggleButton.joinAsOwnerLabel": "注册为所有者",
    "sidebar.outlinerTeamToggleButton.joinLabel": "加入團隊空間",
    "sidebar.outlinerTeamToggleButton.leaveLabel": "離開團隊空間",
    "sidebar.outlinerTeamToggleButton.ownerViewLabel": "團隊空間設定",
    "sidebar.outlinerTeamToggleButton.tooltip": "團隊空間設定與成員...",
    "sidebar.outlinerTeamToggleButton.unjoinedMemberViewLabel": "查看成員",
    "sidebar.outlinerTeamToggleButton.upgradeSelfToOwnerLabel": "成为所有者",
    "sidebar.privatePagesSection.tooltip":
      "你建立的頁面，且不在任何團隊空間中。",
    "sidebar.privateSection.header": "私人",
    "sidebar.quickFindSearch.label": "快速尋找",
    "sidebar.quickFindSearch.tooltip": "搜尋並快速跳轉到頁面",
    "sidebar.search.label": "搜尋",
    "sidebar.sectionHeaderHide.tooltip": "按一下以隱藏分區",
    "sidebar.sectionHeaderShow.tooltip": "按一下以顯示分區",
    "sidebar.sharedPagesSection.tooltip": "只有你共用的對象能存取這些頁面。",
    "sidebar.sharedSection.header": "共用",
    "sidebar.teamSection.tooltip": "你的其中一個團隊",
    "sidebar.templateIntro.content":
      "開箱即用，或根據你自己的工作流程自訂它們。",
    "sidebar.templateIntro.title": "這裡有一些模版，可以幫助你入門",
    "sidebar.turnPageIntoTeamButton.missingTitleDisabledTooltip":
      "無法將沒有標題的頁面轉換成團隊空間",
    "sidebar.turnPageIntoTeamButton.noParentTeamDisabledTooltip":
      "只有現有團隊空間的頁面可以轉換成全新團隊空間",
    "sidebar.turnPageIntoTeamButton.notTeamOwnerDisabledTooltip":
      "只有團隊擁有者可以將頁面轉換成團隊空間",
    "sidebar.turnPageIntoTeamButton.privateTeamsOnlyOnBusinessPlansAndAboveDisabledTooltip":
      "只有商業版方案以上版本可將私人頁面轉換成團隊空間",
    "sidebar.upgradeButton.prompt":
      "更新你的個人資料、升級到專業版或邀請新成員",
    "sidebar.workspacePagesSection.tooltip":
      "所有工作區成員都可以存取這些頁面。",
    "sidebar.workspaceSection.header": "工作區",
    "sidebarActions.confirmDialog.lockedWorkspaceTopLevel.message":
      "此工作區已鎖定工作區頂層頁面的動作。",
    "sidebarActions.confirmDialog.movePageToPrivate.confirmButton.label":
      "移動到私人區",
    "sidebarActions.confirmDialog.movePageToPrivate.message":
      "確定要將此頁面設為私有嗎？ <boldtext>只有你將能夠存取它。</boldtext>",
    "sidebarActions.confirmDialog.moveWorkspacePage.confirmButton.label":
      "移動頁面",
    "sidebarActions.confirmDialog.moveWorkspacePage.message":
      "確定要移動此工作區頁面？ <boldtext>所有 {memberCount} 位成員都可以看到</boldtext>",
    "sidebarActions.confirmDialog.newWorkspacePage.confirmButton.label":
      "建立頂層頁面",
    "sidebarActions.confirmDialog.newWorkspacePage.message":
      "確定要建立一個頂層頁面嗎？ <strongtext>此頁面將在所有 {memberCount} 位成員的工作區邊欄中可見。</strongtext>",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.confirmButton.label":
      "重新排列側邊欄",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.message":
      "確定要對工作區邊欄重新排列嗎？ <boldtext>這將影響所有 {memberCount} 位成員。</boldtext>",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.confirmButton.label":
      "移動到工作區",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.message":
      "確定與工作區分享此頁面嗎？ <boldtext>所有 {memberCount} 位成員都將可以存取。</boldtext>",
    "sidebarActions.connections.prompt":
      "查看你在 Notion 中可使用的其他應用程式連線",
    "sidebarAiEnrolledPrompt.cta": "開啟設定",
    "sidebarAiEnrolledPrompt.subtitle":
      "恭喜！你離開了等候清單。啟用 Notion AI 以開始使用。",
    "sidebarAiEnrolledPrompt.title": "啟用 Notion AI",
    "sidebarAiWaitlistPrompt.cta": "確保我的排隊順序",
    "sidebarAiWaitlistPrompt.subtitle":
      "我們將逐步推出 Notion 中的 AI 功能。註冊並搶先體驗。",
    "sidebarAiWaitlistPrompt.title": "註冊 Notion 以迎接 AI 的未來",
    "sidebarConnectionsButton.label": "我的連線",
    "sidebarCreateTeamButton.button": "建立團隊空間",
    "sidebarCreateTeamButton.singlePlayer.button": "建立團隊空間",
    "sidebarCreateTeamButton.tooltip": "建立新團隊空間並邀請其他人",
    "sidebarCreateTeamModal.appsSelection.label": "選擇應用",
    "sidebarCreateTeamModal.footer.addUseCases": "加入用例",
    "sidebarCreateTeamModal.footer.createTeam": "建立團隊空間",
    "sidebarCreateTeamModal.footer.pageCount":
      "{pageNumber} 個步驟，共 {totalPages} 個步驟",
    "sidebarCreateTeamModal.footer.skipForNow": "暫時略過",
    "sidebarCreateTeamModal.functionSelection.label": "選擇功能",
    "sidebarCreateTeamModal.functions.engTitle": "軟體工程",
    "sidebarCreateTeamModal.functions.generalTitle": "一般團隊",
    "sidebarCreateTeamModal.functions.marketingTitle": "行銷",
    "sidebarCreateTeamModal.functions.otherTitle": "其他",
    "sidebarCreateTeamModal.functions.productTitle": "產品設計",
    "sidebarCreateTeamModal.functions.salesTitle": "銷售",
    "sidebarCreateTeamModal.learnMoreUrl": "了解團隊空間",
    "sidebarCreateTeamModal.logo.label": "選擇圖示",
    "sidebarCreateTeamModal.membersTitle.label": "加入人員",
    "sidebarCreateTeamModal.optionalFunctionSelection.label": "功能（選填）",
    "sidebarCreateTeamModal.teamDescription.label":
      "團隊空間可供你的團隊整理頁面、權限及成員",
    "sidebarCreateTeamModal.teamScreen.descriptionPlaceholder":
      "有關你團隊空間的詳細資訊",
    "sidebarCreateTeamModal.teamScreen.firstTeamHeader":
      "建立你的第一個團隊空間，與你的團隊成員一起開始使用 Notion",
    "sidebarCreateTeamModal.teamScreen.namePlaceholder": "Acme Labs",
    "sidebarCreateTeamModal.teamScreen.openAccessLabel":
      "{spaceName} 中的所有人和新成員都可以存取此團隊空間",
    "sidebarCreateTeamModal.teamScreen.permissionsLabel": "權限",
    "sidebarCreateTeamModal.teamScreen.teamDescriptionLabel": "說明（選填）",
    "sidebarCreateTeamModal.teamScreen.teamDescriptionOptionalLabel":
      "說明（選填）",
    "sidebarCreateTeamModal.teamScreen.teamIconAndNameLabel": "圖示和名稱",
    "sidebarCreateTeamModal.teamScreen.teamNameLabel": "團隊空間名稱",
    "sidebarCreateTeamModal.teamTitle.label": "建立新團隊空間",
    "sidebarCreateTeamModal.types.docsDescription":
      "在同一處管理你所有團隊的文件",
    "sidebarCreateTeamModal.types.docsTitle": "文件",
    "sidebarCreateTeamModal.types.meetingsDescription": "你所有會議的快速筆記",
    "sidebarCreateTeamModal.types.meetingsTitle": "會議記錄",
    "sidebarCreateTeamModal.types.sprintsDescription":
      "你團隊的敏捷專案管理追蹤",
    "sidebarCreateTeamModal.types.sprintsTitle": "任務、專案及 Sprint",
    "sidebarCreateTeamModal.types.tasksDescription":
      "與你的團隊一同追蹤專案和任務",
    "sidebarCreateTeamModal.types.tasksTitle": "任务和项目",
    "sidebarCreateTeamModal.types.wikiDescription": "管理你團隊的知識庫",
    "sidebarCreateTeamModal.types.wikiTitle": "知識庫",
    "sidebarCreateTeamModal.typesDescription.label":
      "透過模板快速建立你的團隊。你可以稍後在「模板庫」中選擇更多模板。",
    "sidebarCreateTeamModal.typesTitle.label": "選擇用例",
    "sidebarCreateWorkAccountPrompt.subtitle":
      "使用工作電子郵件建立工作帳戶與團隊成員協同合作。",
    "sidebarCreateWorkAccountPrompt.title": "用 Notion 來工作？",
    "sidebarCredits.earnedCredit.message":
      "你已獲得 {creditAmountInDollars} 的點數。",
    "sidebarCredits.freeMonthMessage":
      "{numberOfMonths, plural, other {等同於 <b>{numberOfMonths} 個月</b>免費。}}",
    "sidebarExpandButton.tooltip": "鎖定展開側邊欄",
    "sidebarItem.addAPageInside.popup.addTo": "加入到",
    "sidebarItem.addAPageInside.tooltip": "快速加入子頁面",
    "sidebarItem.changeIconButton.tooltip": "變更圖示",
    "sidebarItem.favoritedPageMenuButton.tooltip": "移除、重命名等…",
    "sidebarItem.pageMenuButton.tooltip": "刪除、建立複本等…",
    "sidebarMobile.addAPageToOnlyPrivateSection.title": "加入頁面",
    "sidebarMobile.addAPrivatePage.title": "加入頁面",
    "sidebarMobile.addPageToWorkspace.title": "加入頁面",
    "sidebarMobile.teamsSection.header": "團隊空間",
    "sidebarMultiSwitcher.desktopAppGetMobileApp.prompt": "取得行動應用程式",
    "sidebarMultiSwitcher.macAppButton.text": "取得 Mac 應用程式",
    "sidebarMultiSwitcher.windowsAppButton.text": "取得 Windows 應用",
    "sidebarOutliner.teamsSection.teamsLabel": "團隊空間",
    "sidebarOutliner.teamsSection.tooltip": "你已加入的團隊空間。",
    "sidebarOutliner.workspacePagesSection.tooltip":
      "所有工作區成員都可以存取這些頁面。",
    "sidebarResizer.clickToToggleSidebar.message":
      "按一下<invertedcolor>來{expanded, select, true {關閉} other {打開鎖定}} </invertedcolor>",
    "sidebarResizer.tooltip.dragMessage":
      "拖動<invertedcolor>以調整大小</invertedcolor>",
    "sidebarSettingsButton.mobile.settingsAndMembers": "設定",
    "sidebarSettingsButton.settingsAndMembers": "設定與成員",
    "sidebarStudentPlanPrompt.eligible.getFreePromptPlus": "取得教育加值版",
    "sidebarStudentPlanPrompt.eligible.messagePlus":
      "你有資格獲得個人的免費教育加值版。",
    "sidebarSwitcher.createOrJoinWorkspaceButton.prompt": "建立或加入工作區",
    "sidebarSwitcher.educationPlusPlan.label": "教育加值版",
    "sidebarSwitcher.enterprisePlan.label": "企業版",
    "sidebarSwitcher.freePlan.label": "免費版",
    "sidebarSwitcher.legacyPlan.label": "舊定價方案",
    "sidebarSwitcher.personalPlan.label": "個人版",
    "sidebarSwitcher.proPlan.label": "個人專業版",
    "sidebarSwitcher.workspaceSubtitleWithMembers.label":
      "{planType} · {numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} 位成員} other {{numberOfWorkspaceMembers} 位成員}}",
    "sidebarSwitcher.workspaceSubtitleWithoutMembers.label": "{planType}",
    "sidebarSwitcherMultiAccount.addAccount.description":
      "登入現有帳號，或使用新電子郵件地址註冊。你目前的帳號將保持登入狀態。",
    "sidebarSwitcherMultiAccount.addAccount.title": "加入帳號",
    "sidebarSwitcherMultiAccount.addAccountButton.label": "加入另一個帳號",
    "sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label": "取消",
    "sidebarSwitcherMultiAccount.createWork.description":
      "我們會檢查你是否已有隊友在 Notion 上。如果沒有，我們將為你的團隊建立新的工作區。",
    "sidebarSwitcherMultiAccount.createWork.title": "建立工作帳號",
    "sidebarSwitcherMultiAccount.createWorkspaceTeamRowTitle.caption":
      "你團隊的文件、專案及知識庫",
    "sidebarSwitcherMultiAccount.createWorkspaceTeamRowTitle.title":
      "建立團隊工作區",
    "sidebarSwitcherMultiAccount.errorMessage":
      "SidebarSwitcherMultiAccount 中出現意外的 createType",
    "sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label":
      "建立工作帳號",
    "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label":
      "{isLoggedIntoMultipleAccounts, select, true {登出全部帳號} other {登出}}",
    "sidebarSwitcherMultiAccount.mobileMenu.title": "帳號與工作區",
    "sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label":
      "加入或建立工作區",
    "sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label": "登出",
    "sidebarTeamBrowser.newTeam.button": "新團隊空間",
    "sidebarTeamBrowserHeader.searchFilter.placeholder": "搜尋團隊空間...",
    "sidebarTeamBrowserHeader.searchFilter.placeholderWithoutSpaceName":
      "搜尋團隊空間...",
    "sidebarTeamBrowserHeader.title": "所有團隊空間",
    "sidebarTeamModalSettingsScreen.dangerZone.archiveTeamDescription":
      "從所有成員的側邊欄移除團隊空間",
    "sidebarTeamModalSettingsScreen.dangerZone.cannotArchive":
      "無法歸檔此團隊空間，因為其為此工作區中唯一的預設團隊空間。",
    "sidebarTeamModalSettingsScreen.dangerZone.restoreTeamButton":
      "恢復團隊空間",
    "sidebarTeamModalSettingsScreen.dangerZone.restoreTeamCaption":
      "恢復此團隊將把團隊加入到先前已加入所有團隊成員的側邊欄。",
    "sidebarTeamModalSettingsScreen.dangerZone.title": "危險區",
    "sidebarTeamModalTab.option.general": "一般",
    "sidebarTeamModalTab.option.members": "成員",
    "sidebarTeamModalTab.option.security": "安全性",
    "sidebarTeamModalTab.unownedBadge": "未擁有",
    "sidebarTrash.allPages.tabHeader": "所有頁面",
    "sidebarTrash.deletePagePermanentlyButton.tooltip": "永久刪除",
    "sidebarTrash.filterBy.noMatchesPrompt": "無匹配項目。",
    "sidebarTrash.filterBy.placeholder": "依據頁面標題篩選…",
    "sidebarTrash.goOnline.prompt": "請連線網路後查看垃圾桶。",
    "sidebarTrash.inCurrentPage.tabHeader": "在當前頁面",
    "sidebarTrash.lastEditedByMe.tabHeader": "上次編輯者：我",
    "sidebarTrash.learnMore.prompt": "了解刪除和回復頁面",
    "sidebarTrash.menu.header": "垃圾桶",
    "sidebarTrash.mobileFilterBy.noMatchesPrompt": "無匹配項目。",
    "sidebarTrash.restorePageButton.tooltip": "恢復",
    "sidebarTrashButton.text": "垃圾桶",
    "sidebarUnexpandButton.closeSidebar.tooltip": "關閉側邊欄",
    "signupPage.featurelist.signupMoreDescriptiveV3Line1":
      "包含在你的免費 Notion 工作區：",
    "signupPage.featurelist.signupMoreDescriptiveV3Line2": "單一用途的無限頁面",
    "signupPage.featurelist.signupMoreDescriptiveV3Line3":
      "知識庫、文件、專案、任務、行事曆",
    "signupPage.featurelist.signupMoreDescriptiveV3Line4":
      "50 多種內容區塊類型",
    "signupPage.featurelist.signupMoreDescriptiveV3Line5":
      "表格、看板、時間軸及更多視圖",
    "signupPage.pageTitle": "註冊",
    "signupPage.subtitle.signupMoreDescriptiveV1":
      "取得免費的 Notion 帳戶並與你的團隊協作。",
    "signupPage.subtitle.signupWorkEmailV3":
      "使用工作電子郵件以便和團隊協同合作",
    "signupPage.title": "註冊",
    "signupPage.title.fromSourceNotionAcademy": "登入查看此課程",
    "signupPage.title.fromSourceNotionTemplateGallery": "登入以複製此模板",
    "signupPage.title.showAIVersion1": "註冊以加入",
    "signupPage.title.showAIVersion2": "Notion AI",
    "signupPage.title.showAIVersion3": "等候清單",
    "signupPage.title.tryNotionMobileCTA": "註冊以建立 Notion 頁面",
    "signupPage.titleForSpace": "歡迎來到 Notion 上的 {workspaceName}",
    "simpleTable.actionBar.fitToPage": "讓表格符合頁面寬度",
    "simpleTable.actionBar.options": "選項",
    "simpleTable.resizer.dimensions": "{num_columns} × {num_rows}",
    "simpleTable.resizer.tooltipColumn": "<b>按一下</b>即可加入新欄",
    "simpleTable.resizer.tooltipCorner": "<b>按一下</b>即可加入新列與欄",
    "simpleTable.resizer.tooltipRow": "<b>按一下</b>即可加入新列",
    "simpleTable.resizer.tooltipSubtitleColumn":
      "<b>拖曳</b>即可快速加入或移除欄",
    "simpleTable.resizer.tooltipSubtitleCorner":
      "<b>拖曳</b>即可快速加入或移除列與欄",
    "simpleTable.resizer.tooltipSubtitleRow": "<b>拖曳</b>即可快速加入或移除列",
    "simpleTableActions.collectionColumnTitle": "欄 {columnIndex}",
    "simpleTableActions.collectionTitle": "標題",
    "singlePlayerPlusPlan.title": "包含 1 位成員限制的加值版",
    "sketchBlock.embeds.button.label": "嵌入 Sketch",
    "sketchBlock.embeds.caption": "適用於啟用了公用連結存取權的 Sketch 連結",
    "sketchBlock.placeholder": "嵌入 Sketch",
    "slackActions.dialogError.loginWithSlack.errorMessage": "出了些問題。",
    "slackActions.loginPopupModal.title": "Slack 登入",
    "slackAuthorizationErrors.blockNotFound.errorMessage": "未找到區塊。",
    "slackAuthorizationErrors.missingEditPermission.errorMessage":
      "使用者無法編輯區塊。",
    "slackAuthorizationErrors.webhookNotFound.errorMessage":
      "找不到 Slack 的 webhook。",
    "slackAutomations.remove.confirmation.acceptLabel": "删除",
    "slackAutomations.remove.confirmation.message": "確定要移除此通知配置嗎？",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.prompt":
      "確定要刪除 Slack 整合嗎？",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label":
      "移除",
    "slackNotification.pageTitle.untitledPage.placeholder": "無標題",
    "slackNotification.welcomeMessage":
      "歡迎來到 Notion！此頻道目前已整合了 Notion 頁面 {pageLink}。你將取得有關此頁面或頁面內的評論、提及和編輯的更新動態。",
    "slackNotificationProcessor.blockEdited.notificationContents":
      "{userName} 編輯了 {blockName}",
    "slackNotificationProcessor.collectionRowCreated.notificationContents":
      "{userName} 在 {collectionName} 建立了 {rowName}",
    "slackNotificationProcessor.collectionRowEdited.notificationContents":
      "{userName} 編輯了 {collectionName} · 時間：{date}",
    "slackNotificationProcessor.collectionViewName.label":
      "{collectionViewName}",
    "slackNotificationProcessor.defaultPropertyName.label": "屬性",
    "slackNotificationProcessor.emptyPropertyValue.label": "空白",
    "slackNotificationProcessor.propertyValueChanged.notificationContents":
      "{propertyName}：{propertyValueBefore} → {propertyValueAfter}",
    "slackNotificationProcessor.propertyValueWithName.notificationContents":
      "{propertyName}：{propertyValue}",
    "slackNotificationProcessor.showMoreEditsLinkText.label":
      "{numberOfMoreEdits, plural, other {顯示其他 {numberOfMoreEdits} 項編輯…}}",
    "slackNotificationProcessor.untitledCollectionViewName.placeholder":
      "無標題視圖",
    "slackNotificationProcessor.untitledName.placeholder": "無標題",
    "slackNotificationProcessor.userMentionedInBlock.notificationContents":
      "{userName} 在 {pageName} 提到了你",
    "slackNotificationProcessor.userMentionedInComment.notificationContents":
      "{userName} 在 {pageName} 中的評論提到了你",
    "slackNotifications.blockCreated.notificationContents":
      "{userName} 在 {workspaceName} 中建立了{blockName}",
    "slackNotifications.blockDeleted.notificationContents":
      "{userName} 在 {workspaceName} 刪除了 {blockName}",
    "slackNotifications.blockEdited.notificationContents":
      "{userName} 編輯了 {blockName}",
    "slackNotifications.botInvitedYouToSpace.notificationContents":
      "你已受邀加入 {workspaceName}",
    "slackNotifications.collectionPropertyEdited.contents":
      "{userName}編輯了{collectionName}中的{propertyName}屬性",
    "slackNotifications.collectionRowCreated.notificationContents":
      "{userName} 在 {collectionName} 建立了 {rowName}",
    "slackNotifications.collectionRowDeleted.notificationContents":
      "{userName}在{collectionName}刪除了{rowName}",
    "slackNotifications.collectionViewEdited.contents":
      "{userName}編輯了{collectionName}中的{collectionViewName}視圖",
    "slackNotifications.defaultPropertyName.label": "屬性",
    "slackNotifications.emptyPropertyValue.label": "空",
    "slackNotifications.equationAuthorName.notificationTitle": "方程式",
    "slackNotifications.groupMentionedInBlock.notificationContents":
      "{userName} 在 {pageName} 提到了 {groupName}",
    "slackNotifications.permissionChanged.notificationBody":
      "{permissionTarget}：{permissionsBefore} → {permissionsAfter}",
    "slackNotifications.permissionsCreatedOrDeletedText.notificationContents":
      "{permissionTarget}：{permissions}",
    "slackNotifications.permissionsEditedForBlock.notificationContents":
      "{userName} 編輯了 {blockName} 的權限",
    "slackNotifications.privateContentTransferred.contents":
      "私人內容已傳輸至 {userName} 的頁面 {pageName}",
    "slackNotifications.propertyValueChanged.notificationContents":
      "{propertyName}：{propertyValueBefore} → {propertyValueAfter}",
    "slackNotifications.propertyValueWithName.notificationContents":
      "{propertyName}：{propertyValue}",
    "slackNotifications.publicPermissions.label": "公開",
    "slackNotifications.reminderInPage.contents": "{pageName} 中的提醒",
    "slackNotifications.showMoreEditsLinkText.label":
      "{numberOfMoreEdits, plural, other {顯示其餘 {numberOfMoreEdits} 個編輯⋯}}",
    "slackNotifications.unknownAuthorForComment.label": "未知作者",
    "slackNotifications.unknownCollectionPropertyEdited.label": "未知",
    "slackNotifications.untitledCollectionName.label": "無標題",
    "slackNotifications.userAddedYouToSpace.notificationContents":
      "{userName}將你加入到{workspaceName}",
    "slackNotifications.userCommentedInPage.notificationContents":
      "{userName} 在 {pageName} 發表了評論",
    "slackNotifications.userDeletedPage.contents":
      "{userName} 已刪除 {pageName}",
    "slackNotifications.userEditedAccountSettings.contents":
      "{userName}編輯了其帳號設定",
    "slackNotifications.userEditedCollection.notificationContents":
      "{userName} 編輯了 {collectionName}",
    "slackNotifications.userInvitedToTeam.contents":
      "{userName} 邀請你加入 {teamName} 團隊",
    "slackNotifications.userInvitedYouToSpace.notificationContents":
      "{userName} 邀請你加入 {workspaceName}",
    "slackNotifications.userLockedPage.contents":
      "{userName} 鎖定了 {pageName}",
    "slackNotifications.userMentionedInBlock.notificationContents":
      "{userName} 在 {pageName} 提到了你",
    "slackNotifications.userPermanentlyDeletedPage.contents":
      "{userName} 已永久刪除 {pageName}",
    "slackNotifications.userRequestedAccessToBlock.contents":
      "{userName}要求存取{pageName}",
    "slackNotifications.userRestoredPage.contents":
      "{userName} 已恢復 {pageName}",
    "slackNotifications.userUnlockedPage.contents":
      "{userName} 解鎖了 {pageName}",
    "slackNotifications.verificationExpired.contents":
      "{pageName} 的驗證已過期",
    "snackbar.undo.title": "還原",
    "spaceActions.createAndDuplicatePageInSpace.copyNotCreated.error":
      "無法建立已建立複本的頁面。",
    "spaceActions.createGettingStartedPage.copyNotCreated.error":
      "無法建立用戶端複製。",
    "spaceActions.deletingWorkspace.loadingMessage": "正在刪除工作區…",
    "spaceActions.dialogError.couldNotMoveContentError.message":
      "抱歉，我們無法移動此內容。請再試一次。",
    "spaceActions.dialogError.createOrUpdatePermissionGroup.invalidWorkspaceStorage.message":
      "沒有有關此工作區的本機資料。",
    "spaceActions.dialogError.createTemplatesInSpace.invalidStorage.message":
      "無效的工作區資料。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidStorage.message":
      "無效的工作區視圖資料。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidUserSettings.message":
      "無效的使用者設定資料。",
    "spaceActions.dialogError.createWorkspaceError.goOnline.message":
      "請連接網路後建立你的工作區。",
    "spaceActions.dialogError.createWorkspaceError.message":
      "抱歉，我們無法建立你的工作區。請再試一次。",
    "spaceActions.dialogError.createWorkspaceError.notLoggedIn.message":
      "必須登入。",
    "spaceActions.dialogError.forkPageError.message": "無法建立分支頁面。",
    "spaceActions.dialogError.joinWorkspace.invalidWorkspaceStorage.message":
      "沒有建立工作區視圖資料。",
    "spaceActions.dialogError.moveContentError.cannotMovePages.message":
      "無法同時移動這些頁面。",
    "spaceActions.dialogError.moveContentError.goOnline.message":
      "請連接網路後向其他工作區移動內容。",
    "spaceActions.dialogError.movetoWorkspace.notLoggedIn.message":
      "必須登入。",
    "spaceActions.dialogError.navigateToWorkspace.invalidStorage.message":
      "無效的工作區資料。",
    "spaceAnalytics.basicErrorMessage": "出現錯誤。{br}請嘗試重新整理頁面。",
    "spaceAnalytics.usersTab.export": "匯出為 CSV",
    "spaceAnalyticsSearchTable.column.ctr": "點擊率",
    "spaceAnalyticsSearchTable.column.query": "查詢",
    "spaceAnalyticsSearchTable.column.searches": "搜尋",
    "spaceAnalyticsSearchTable.column.uniqueSearches": "唯一搜尋",
    "spaceAnalyticsUserTab.dateFilter.allTime": "所有時間",
    "spaceAnalyticsUserTab.dateFilter.last28days": "過去 28 天",
    "spaceAnalyticsUserTab.dateFilter.last7days": "過去 7 天",
    "spaceAnalyticsUserTab.dateFilter.last90days": "過去 90 天",
    "spaceAnalyticsUserTab.dateFilter.lowercase.allTime": "所有時間",
    "spaceAnalyticsUserTab.dateFilter.lowercase.last28days": "過去 28 天",
    "spaceAnalyticsUserTab.dateFilter.lowercase.last7days": "過去 7 天",
    "spaceAnalyticsUserTab.dateFilter.lowercase.last90days": "過去 90 天",
    "spaceAnalyticsUserTab.usersOverTime.dateFilter.allTime": "所有時間",
    "spaceAnalyticsUserTab.usersOverTime.dateFilter.last28days": "過去 28 天",
    "spaceAnalyticsUserTab.usersOverTime.dateFilter.last7days": "過去 7 天",
    "spaceAnalyticsUserTab.usersOverTime.dateFilter.last90days": "過去 90 天",
    "spaceAnalyticsUsersTab.column.lastActive": "前次使用",
    "spaceAnalyticsUsersTab.column.pageEdits": "頁面編輯",
    "spaceAnalyticsUsersTab.column.pageViews": "頁面視圖",
    "spaceAnalyticsUsersTab.column.pagesEdited": "已編輯頁面",
    "spaceAnalyticsUsersTab.column.teams": "團隊空間",
    "spaceAnalyticsUsersTab.column.teamspaces": "團隊空間",
    "spaceAnalyticsUsersTab.column.user": "使用者",
    "spaceAnalyticsUsersTab.optedOutUser.icon.tooltip":
      "使用者已停用頁面視圖追蹤",
    "spaceBasicSettings.PublicHomePageSection.caption":
      "透過 {linkText} 存取你的公用首頁。",
    "spaceBasicSettings.PublicHomePageSection.caption.tooltip":
      "按一下即可複製連結",
    "spaceBasicSettings.PublicHomePageSection.dropdownLabel": "清除",
    "spaceBasicSettings.PublicHomePageSection.dropdownLabel.noResults":
      "沒有結果",
    "spaceBasicSettings.PublicHomePageSection.input.placeholder":
      "選取在網路上共享的頁面",
    "spaceBasicSettings.PublicHomePageSection.title": "公用首頁",
    "spaceBasicSettings.aiFeature.caption":
      "啟用允許你的私人 Alpha 成員使用 AI 功能。{br}啟用即表示你同意<inlinelink>這些條款</inlinelink>。",
    "spaceBasicSettings.aiFeature.ga.caption":
      "啟用後才能為工作區的所有成員提供 AI 支援功能。{br}啟用 Notion AI 即表示你同意 <inlinelink>Notion AI 補充條款</inlinelink>",
    "spaceBasicSettings.aiFeature.label": "Notion AI",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.caption":
      "任何在這些網域中擁有電子郵件地址的人都可以自動加入你的工作區。",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.placeholder":
      "輸入電子郵件網域…",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholder":
      "輸入電子郵件網域…",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholderNoResults":
      "輸入此工作區成員的電子郵件網域…",
    "spaceBasicSettings.allowedEmailDomainsSection.title": "允許的電子郵件網域",
    "spaceBasicSettings.analytics.learnMore": "了解更多",
    "spaceBasicSettings.analytics.settings.description":
      "擁有編輯或完整存取權限的人員能夠查看頁面檢視者數量。如果關閉此功能，所有頁面的頁面檢視即無法儲存在 {workspaceName} 中。",
    "spaceBasicSettings.analytics.settings.title": "儲存並顯示頁面檢視分析",
    "spaceBasicSettings.analytics.title": "分析",
    "spaceBasicSettings.cancelButton.label": "取消",
    "spaceBasicSettings.changeDomain.cta.text": "設定自己的網域",
    "spaceBasicSettings.changeWorkspaceDomain.areYouSure": "確定要變更網域嗎？",
    "spaceBasicSettings.changeWorkspaceDomain.cancelButton.label": "取消",
    "spaceBasicSettings.changeWorkspaceDomain.changeButton.label": "變更",
    "spaceBasicSettings.changeWorkspaceDomain.prompt":
      "此工作區中有公用頁面。如果你繼續變更網域，任何以 {current_domain}.notion.site 開頭的現有連結都將無法運作。",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceButton.label":
      "刪除整個工作區",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceHelpButton.caption":
      "了解刪除工作區。",
    "spaceBasicSettings.dangerousSettingsSection.leaveWorkspaceButton.label":
      "離開工作區",
    "spaceBasicSettings.dangerousSettingsSection.title": "危險區域",
    "spaceBasicSettings.deleteWorkspace.untitledWorkspace.placeholder":
      "無標題的工作區",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.deleteWorkspaceButton.label":
      "永久刪除工作區",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.prompt":
      "此動作無法撤消。這將永久刪除工作區，包括所有頁面和檔案。請輸入工作區的名稱進行確認。",
    "spaceBasicSettings.domainSection.title": "網域",
    "spaceBasicSettings.domainSection.workspaceDomainInput.joinWorkspace.caption":
      "任何人只要具有獲允許的電子郵件地址網域，就能透過 {linkText} 加入此工作區。",
    "spaceBasicSettings.domainSection.workspaceDomainInput.placeholder": "URL",
    "spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.available":
      "可用",
    "spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.notAllowed":
      "不允許",
    "spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.used":
      "已使用",
    "spaceBasicSettings.domainSection.workspaceDomainInput.viewPublicPage.caption":
      "在網路上共享的頁面將位於 {linkText} 下。",
    "spaceBasicSettings.exportContentSection.exportButton.label":
      "匯出所有工作區內容",
    "spaceBasicSettings.exportContentSection.helpButton.caption":
      "了解匯出工作區。",
    "spaceBasicSettings.exportContentSection.title": "匯出內容",
    "spaceBasicSettings.exportMembersSection.exportAsCSVButton.label":
      "將成員匯出為 CSV",
    "spaceBasicSettings.exportMembersSection.helpButton.caption":
      "了解匯出成員。",
    "spaceBasicSettings.exportMembersSection.title": "匯出成員",
    "spaceBasicSettings.feature.subtitle": "功能設定",
    "spaceBasicSettings.groupsTab.title": "群組",
    "spaceBasicSettings.guestLimitedAccessMessage":
      "你是當前工作區的訪客。請要求管理者將你加入為成員，以查看其他頁面和工作區設定。",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.leaveButton.label":
      "離開",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.prompt":
      "確定要離開此工作區？",
    "spaceBasicSettings.membersTab.manageMembersWithLinkCaption":
      "在這裡管理成員。",
    "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption":
      "在這裡管理成員，或<setupdomainlink>設定網域</setupdomainlink>以便擁有網域內電子郵件地址的每個人都可以自動加入當前工作區。",
    "spaceBasicSettings.membersTab.payPerMemberCaption":
      "每當有成員加入，你都必須為此付費。請前往<billingguidelink>我們的指南</billingguidelink>詳細了解計費方式。",
    "spaceBasicSettings.nameInput.placeholder": "例如公司名稱",
    "spaceBasicSettings.offlineMessage": "請連接網路後進行設定。",
    "spaceBasicSettings.people.subtitle": "管理成員、外部訪客、群組及權限。",
    "spaceBasicSettings.people.title": "人員",
    "spaceBasicSettings.public.subtitle": "公用設定",
    "spaceBasicSettings.reprovisioningTab.title": "最近離開的使用者",
    "spaceBasicSettings.requestsTab.title": "請求",
    "spaceBasicSettings.spacePermissionsSettings.groupsTab.defaultNewGroupName":
      "無標題",
    "spaceBasicSettings.title": "工作區設定",
    "spaceBasicSettings.updateButton.label": "更新",
    "spaceBasicSettings.workspaceAnalytics.helpButton.caption":
      "進一步了解工作區分析。",
    "spaceBasicSettings.workspaceDomain.tooltip": "按一下複製連結",
    "spaceBasicSettings.workspaceIconSection.caption":
      "上傳圖片或選擇表情符號。它將顯示在側邊欄和通知中。",
    "spaceBasicSettings.workspaceIconSection.title": "圖示",
    "spaceBasicSettings.workspaceNameSection.nameInput.caption":
      "你可以使用組織或公司的名稱。保持簡單。",
    "spaceBasicSettings.workspaceNameSection.title": "名稱",
    "spaceBasicSettingsDomain.domainSection.workspaceDomainInput.placeholder":
      "你的網域",
    "spaceBasicSettingsDomain.workspaceDomain.tooltip": "按一下即可複製連結",
    "spaceConnectionsSettings.complianceConnectionsTable.connectionsColumn.title":
      "已连接",
    "spaceConnectionsSettings.complianceConnectionsTable.integrationDashboard.title":
      "合作伙伴控制面板",
    "spaceConnectionsSettings.complianceConnectionsTable.integrationTypeColumn.title":
      "类型",
    "spaceConnectionsSettings.connectionsTable.connectionsColumn.title": "連線",
    "spaceConnectionsSettings.connectionsTable.creationInfoColumn.title":
      "使用者和存取權限",
    "spaceConnectionsSettings.title": "連線",
    "spaceContentDuplication.activeRequest":
      "無法在此工作區的內容被複製時編輯內容。",
    "spaceContentDuplication.completed":
      "無法編輯已移轉至另一個工作區的工作區內容。",
    "spaceCreditSettings.creditBalanceSection.applyCreditButton.label":
      "使用點數",
    "spaceCreditSettings.creditBalanceSection.creditBalanceMessage":
      "您目前的點數餘額為 {creditBalance}。",
    "spaceCreditSettings.creditBalanceSection.freePlusMonthMessage":
      "{numberOfMonths, plural, other {這相當於 {numberOfMonths} 個月的加值版。}}",
    "spaceCreditSettings.creditBalanceSection.maximumCreditBalanceExceeded":
      "您已經超出每個帳號的最高點數總額 {maximumCreditBalance}。您獲得的額外點數將不會增加您的餘額。",
    "spaceCreditSettings.creditBalanceSection.title": "點數餘額",
    "spaceCreditSettings.creditBalanceSection.upgradeForFreeButton.label":
      "申請升級",
    "spaceCreditSettings.helpButton.caption": "瞭解如何獲得和使用點數",
    "spaceCreditSettings.offline.message": "請連線網路以管理您的帳號點數。",
    "spaceCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
      "獲得的總點數",
    "spaceCreditSettings.otherWaysToEarnCreditSectionAlt.title":
      "獲得點數的方法",
    "spaceHelpers.getSpaceName.untitledWorkspace.name": "無標題的工作區",
    "spaceHelpers.reprovisionPrivatePages.title": "{name} 的私人頁面",
    "spaceIntegrationSettings.actionMenu.contactDeveloperSupport.label":
      "聯絡支援",
    "spaceIntegrationSettings.actionMenu.copyInternalIntegrationTokenButton.label":
      "拷貝內部整合權杖",
    "spaceIntegrationSettings.actionMenu.disconnectAll.label":
      "解除連接所有使用者",
    "spaceIntegrationSettings.actionMenu.disconnectAll.modal.caption":
      "撤銷此工作區所有使用者的 {integrationName} 存取權限。",
    "spaceIntegrationSettings.actionMenu.disconnectAll.modal.label":
      "解除此工作區所有使用者的 {integrationName} 連接",
    "spaceIntegrationSettings.actionMenu.disconnectIntegration..modal.button.disconnect":
      "解除連接",
    "spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.label":
      "解除連接 {integrationName}",
    "spaceIntegrationSettings.actionMenu.disconnectUser.modal.caption":
      "撤銷 {userName} 的 {integrationName} 存取權限",
    "spaceIntegrationSettings.actionMenu.disconnectUser.modal.label":
      "要解除連接 {integrationName} 嗎？",
    "spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.caption":
      "撤銷工作區的 {integrationName} 存取權限",
    "spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.title":
      "解除連接工作區的 {integrationName}",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.label":
      "從已批准列表移除",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.cancel":
      "取消",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.disconnect":
      "解除連接",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.remove":
      "移除",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.caption":
      "防止成員安裝 {integrationName}。",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.title":
      "從已批准整合移除 {integrationName}",
    "spaceIntegrationSettings.actionMenu.removeIntegrationApprovalAndDisconnectAll.caption":
      "撤銷此工作區中所有使用者的 {integrationName} 存取權限，並防止成員安裝 {integrationName}。",
    "spaceIntegrationSettings.actionMenu.revokeUserAccess.label":
      "解除連接使用者",
    "spaceIntegrationSettings.actionMenu.visitDeveloperWebsite.label":
      "瀏覽開發者網站",
    "spaceIntegrationSettings.complianceIntegrationTable.integrationPartnerDashboard":
      "{integrationName}操控板",
    "spaceIntegrationSettings.complianceIntegrationTable.integrationType.dlp":
      "DLP",
    "spaceIntegrationSettings.complianceIntegrationTable.integrationType.siem":
      "SIEM",
    "spaceIntegrationSettings.error": "發生問題...",
    "spaceIntegrationSettings.integrationTable.creationInfoColumn.contents":
      "{installerName} 於 {installedTime}",
    "spaceIntegrationSettings.integrationTable.creationInfoColumnAdmin.title":
      "使用者",
    "spaceIntegrationSettings.integrationTable.creationInfoColumnMember.title":
      "新增者",
    "spaceIntegrationSettings.integrationTable.emptyMessage":
      "沒有安裝任何整合",
    "spaceIntegrationSettings.integrationTable.emptyTable.message":
      "沒有安裝任何整合",
    "spaceIntegrationSettings.integrationTable.installerInfo.notion.tooltip":
      "由 Notion 開發",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.anyone":
      "{spaceName}&nbsp;中的任何人",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.legacy":
      "已與 Notion 連接的應用程式",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.listOfUsers":
      "{remainingCount, plural, other {{firstUser} 和 {remainingCount}+}}",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.noUsers":
      "無使用者",
    "spaceIntegrationSettings.integrationTable.installerInfoColumn.notion":
      "Notion&nbsp;{icon}",
    "spaceIntegrationSettings.integrationTable.integrationColumn.title": "整合",
    "spaceIntegrationSettings.integrationTable.label.unverifiedDeveloper":
      "未驗證的開發者",
    "spaceIntegrationSettings.integrationTable.pillLabel.importer": "進口商",
    "spaceIntegrationSettings.integrationTable.pillLabel.internal": "內部",
    "spaceIntegrationSettings.integrationTable.pillLabel.preview": "連結預覽",
    "spaceIntegrationSettings.integrationTable.pillLabel.sync": "同步",
    "spaceIntegrationSettings.integrationTable.row.internalIntegrationLabel":
      "內部",
    "spaceInviteLinkEmail.body.cta":
      "你可以將此電子郵件轉發給你的隊友，邀請他們進入你的工作區。",
    "spaceInviteLinkEmail.body.label":
      "{userName}為{spaceName}建立了一個新的 Notion工作區。按一下連結加入！",
    "spaceInviteLinkEmail.subject.label": "在 {spaceName} 上加入你的團隊",
    "spaceInviteLinkEmail.text.label":
      "你的團隊正在使用 Notion 進行協作、規劃和完成工作。",
    "spaceInviteLinkEmail.titleOfEmail": "在 {spaceName} 上加入你的團隊",
    "spacePermissionSettings.memberRoleSelect.permissionitem.roleUpgradeDisabled":
      "無法升級到比成員更高等級的角色",
    "spacePermissionSettings.memberUpsell.alternativePlusUpgradeLabel":
      "升級到加值版",
    "spacePermissionSettings.memberUpsell.alternativeSinglePlayerUpgradeLabel":
      "升級",
    "spacePermissionSettings.memberUpsell.caption.fromSinglePlayerPlus":
      "你的工作區目前有 1 位成員限制。升級到可協作的加值版工作區就能邀請更多人員。",
    "spacePermissionSettings.pageGuests.subtitle":
      "頁面訪客免付費，但只可以存取他們受邀加入的頁面。",
    "spacePermissionSettings.pageGuests.title": "頁面訪客",
    "spacePermissionSettings.spaceMembers.inviteLink.caption":
      "分享這個私密連結以邀請他人加入到工作區。只有可邀請成員的使用者可見。",
    "spacePermissionSettings.spaceMembers.inviteLink.resetLink":
      "你可以爲工作區所有成員<resetlink>重置連結</resetlink>以生成新的邀請連結。",
    "spacePermissionSettings.teamGuests.subtitle":
      "團隊空間訪客的計費方式和成員一樣，而且可以存取他們受邀加入之團隊空間中的所有頁面。",
    "spacePermissionSettings.teamGuests.title": "團隊空間訪客",
    "spacePermissionSettingsTrialModal.cancel.label": "取消",
    "spacePermissionSettingsTrialModal.tryItFree.label": "免費試用團隊版",
    "spacePermissionsSettings.externalTab.title": "外部",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.caption":
      "工作區成員未受限於特定團隊空間",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.confirmationDialog.confirm":
      "轉換為工作區成員",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.confirmationDialog.description":
      "這是記帳活動。",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.confirmationDialog.message":
      "確定要將此使用者轉換為工作區成員嗎？",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.failure":
      "無法將 {email} 轉換為工作區成員",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.success":
      "已成功將 {email} 轉換為工作區成員",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.title":
      "轉換為成員",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.confirmationDialog.confirm":
      "自工作區移除",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.confirmationDialog.description":
      "此動作會將使用者完全自工作區移除，包括任何團隊空間和他們擁有存取權限的頁面。",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.confirmationDialog.message":
      "確定要將此使用者自工作區移除嗎？",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.failure":
      "無法將 {email} 自工作區移除",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.success":
      "已成功將 {email} 自工作區移除",
    "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.title":
      "自工作區移除",
    "spacePermissionsSettings.groupsTab.caption":
      "設定群組以便在分享選單中輕鬆控制頁面權限。",
    "spacePermissionsSettings.groupsTab.captionWithTeamsV2":
      "設定群組以便在分享選單中簡化頁面權限，並大量管理團隊空間成員。",
    "spacePermissionsSettings.groupsTab.createGroupButton.label": "建立群組",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label":
      "是的",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage":
      "確定要刪除此群組嗎？此群組的所有私人頁面都將轉移給你。",
    "spacePermissionsSettings.groupsTab.filterGroupNamesInput.placeholder":
      "依群組名稱篩選…",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.createTeamFromGroup":
      "從群組建立團隊空間",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem":
      "刪除",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem":
      "重新命名",
    "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label":
      "加入成員",
    "spacePermissionsSettings.groupsTab.groupList.noMembersInside":
      "裡面沒有成員",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label":
      "移除",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label":
      "是的",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage":
      "確定要移除此成員？",
    "spacePermissionsSettings.groupsTab.showMoreUsersButton.label":
      "{numberOfHiddenUsers, plural, other {顯示其他 {numberOfHiddenUsers} 位}}",
    "spacePermissionsSettings.groupsTab.spaceGroupsTable.groups": "群組",
    "spacePermissionsSettings.groupsTab.spaceGroupsTable.member": "成員",
    "spacePermissionsSettings.groupsTab.spaceGroupsTable.noGroupsFound":
      "找不到群組。",
    "spacePermissionsSettings.groupsTab.spaceGroupsTable.teams": "團隊空間",
    "spacePermissionsSettings.groupsTab.upgradeCaption.plus":
      "升級到加值版才能從「分享」選單設定群組並控制權限。",
    "spacePermissionsSettings.groupsTab.upgradeTitle": "升級以建立群組。",
    "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label": "加入",
    "spacePermissionsSettings.groupsTab.userGroup.groupIcon.tooltip":
      "加入圖示",
    "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder":
      "無標題",
    "spacePermissionsSettings.groupsTab.userGroup.memberCount":
      "{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位成員}}",
    "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage":
      "沒有結果",
    "spacePermissionsSettings.groupsTab.userGroup.teamsCount":
      "{numberOfTeams, plural, other {{numberOfTeams} 個團隊空間}}",
    "spacePermissionsSettings.groupsTab.userGroup.teamsCountNone": "無",
    "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder":
      "搜尋人員…",
    "spacePermissionsSettings.groupsTab.workspaceOwnersOnly":
      "只有工作區擁有者可以加入權限群組。",
    "spacePermissionsSettings.guestsTab.title": "訪客",
    "spacePermissionsSettings.helpButton.caption": "了解如何將成員加入到工作區",
    "spacePermissionsSettings.inviteLinkRefreshModal.accept": "重置",
    "spacePermissionsSettings.inviteLinkRefreshModal.description":
      "確定要爲工作區所有成員重置邀請連結嗎？舊連結將無法再使用。",
    "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder":
      "依郵件地址或姓名篩選…",
    "spacePermissionsSettings.membersTab.filterMembersInput.placeholder":
      "依電子郵件地址或姓名篩選…",
    "spacePermissionsSettings.membersTab.filterTeamGuestsInput.placeholder":
      "依郵件地址或姓名篩選…",
    "spacePermissionsSettings.membersTab.showMore.message":
      "顯示其餘 {moreMembersCount} 位",
    "spacePermissionsSettings.membersTab.showMoreGuestsButton.label":
      "{numberOfHiddenGuests, plural, other {顯示其他 {numberOfHiddenGuests} 位}}",
    "spacePermissionsSettings.membersTab.title": "成員",
    "spacePermissionsSettings.offlineMessage": "請連接網路後管理成員。",
    "spacePermissionsSettings.reprovision.toUser.title": "轉移私人頁面",
    "spacePermissionsSettings.reprovisionPrivatePagesConfirmationDialog.confirmButton.label":
      "轉移私人頁面",
    "spacePermissionsSettings.reprovisionPrivatePagesConfirmationDialog.confirmationMessage":
      "確定要轉移他們的私人頁面嗎？此動作無法復原。",
    "spacePermissionsSettings.reprovisioningTab.workspaceOwner.caption":
      "檢視過去 30 天內隸屬於工作區的使用者。只有工作區擁有者才能查看。",
    "spacePermissionsSettings.reprovisioningTab.workspaceOwner.caption.disclaimer":
      "註：只有曾有私人頁面的使用者會顯示在此。",
    "spacePermissionsSettings.spaceMembers.inviteLink.copyButton": "複製連結",
    "spacePermissionsSettings.spaceMembers.inviteLink.shareButton": "分享連結",
    "spacePermissionsSettings.spaceMembers.inviteLink.title": "邀請連結",
    "spacePermissionsSettings.spaceMembers.members.title": "成員",
    "spacePermissionsSettings.updatePermissionsMessage": "更新中…",
    "spacePermissionsSettings.user.membershipAdmin": "成員資格管理員",
    "spacePermissionsSettings.user.workspaceOwner": "工作區擁有者",
    "spacePermissionsSettings.userTable.accessLevelColumn.header": "存取權限",
    "spacePermissionsSettings.userTable.actionLevelColumn.header": "動作",
    "spacePermissionsSettings.userTable.groupsColumn.header": "群組",
    "spacePermissionsSettings.userTable.pageCountColumn.header": "私人頁面",
    "spacePermissionsSettings.userTable.teamsColumn.header": "團隊空間",
    "spacePermissionsSettings.userTable.userColumn.header": "使用者",
    "spaceSettings.closeSettingsDialog.cancelationButton.label": "否",
    "spaceSettings.closeSettingsDialog.confirmationButton.label": "是",
    "spaceSettings.closeSettingsDialog.confirmationMessage":
      "你的更改尚未保存。保存更改？",
    "spaceSettings.closeSettingsDialog.updateSettingsButton.label": "儲存",
    "spaceSettings.sidebar.addOnPurchase.buttonLabel": "購買",
    "spaceSettings.sidebar.addOnUpgradeLink": "Notion AI",
    "spaceSettings.sidebar.button.upgrade": "升級方案",
    "spaceSettings.sidebar.personalSettingsSection.title": "帳號",
    "spaceSettings.sidebar.personalSettingsSection.userDetails.title": "我自己",
    "spaceSettings.sidebar.upgradeLink": "升級以無限使用",
    "spaceSettings.sidebar.workspaceSettingsSection.title": "工作區",
    "spaceSettingsDebugZone.userUserSimilarity.title": "使用者相似性",
    "spaceSettingsRequests.allowGuestsToSelfRequest.description":
      "工作區訪客可將以成員身分加入的要求提交給管理員",
    "spaceSettingsRequests.allowGuestsToSelfRequest.title":
      "允許頁面訪客要求以成員身分加入到工作區",
    "spaceSettingsRequests.allowMembersToRequestMembers.confirmationDialog.acceptLabel":
      "確認",
    "spaceSettingsRequests.allowMembersToRequestMembers.confirmationDialog.cancelLabel":
      "取消",
    "spaceSettingsRequests.allowMembersToRequestMembers.confirmationDialog.description":
      "目前要求會被保留。",
    "spaceSettingsRequests.allowMembersToRequestMembers.confirmationDialog.message":
      "確定再也不允許成員要求成員邀請嗎？",
    "spaceSettingsRequests.allowMembersToRequestMembers.description":
      "成員可以向管理員提交加入更多成員的要求",
    "spaceSettingsRequests.allowMembersToRequestMembers.title":
      "允許成員要求加入其他成員",
    "spaceSettingsRequests.emptyRequests.message": "還沒有邀請要求",
    "spaceSettingsRequests.requestRowAction.acceptButton.label": "核准",
    "spaceSettingsRequests.requestRowAction.acceptButtonLabel": "核准",
    "spaceSettingsRequests.requestRowAction.closeReasonsButton.label":
      "關閉原因",
    "spaceSettingsRequests.requestRowAction.declineButton.label": "拒絕",
    "spaceSettingsRequests.requestRowAction.declineButtonLabel": "拒絕",
    "spaceSettingsRequests.requestRowAction.ignoreButtonLabel": "拒絕",
    "spaceSettingsRequests.requestRowAction.requestedByMoreThanTwo.tooltip":
      "要求者",
    "spaceSettingsRequests.requestRowAction.requestedByPlural":
      "{numberOfOtherActors, plural, other {來自 {firstActorName} 及 {numberOfOtherActors} 等更多}}",
    "spaceSettingsRequests.requestRowAction.requestedByPluralIncludingGuestSelfRequest":
      "{numberOfOtherActors, plural, other {訪客自行要求，並來自其他 {numberOfOtherActors} 個}}",
    "spaceSettingsRequests.requestRowAction.requestedBySingular":
      "從 {actorName}",
    "spaceSettingsRequests.requestRowAction.requestedBySingularGuestSelfRequest":
      "訪客自行要求",
    "spaceSettingsRequests.requestRowAction.viewReasonsButton.label":
      "查看原因",
    "spaceSettingsRequests.requestRowAction.vieweReasonsButton.label":
      "查看原因",
    "spaceSettingsSidebar.accountTab.title": "我的帳號",
    "spaceSettingsSidebar.adminContentSearch.title": "內容搜尋",
    "spaceSettingsSidebar.analyticsTab.title": "分析",
    "spaceSettingsSidebar.auditLogTab.title": "稽核日誌檔",
    "spaceSettingsSidebar.billingTab.title": "帳單",
    "spaceSettingsSidebar.connectedAppsTab.title": "我連接的應用",
    "spaceSettingsSidebar.creditTab.title": "獲得點數",
    "spaceSettingsSidebar.debugZoneTab.title": "偵錯區",
    "spaceSettingsSidebar.experimentsTab.title": "實驗",
    "spaceSettingsSidebar.identity&ProvisioningTab.title": "身分和管理分配",
    "spaceSettingsSidebar.importsTab.title": "匯入",
    "spaceSettingsSidebar.integrationsTab.title": "整合",
    "spaceSettingsSidebar.languageAndRegionTab.title": "語言與地區",
    "spaceSettingsSidebar.membersTab.title": "成員",
    "spaceSettingsSidebar.notificationsAndSettings.title": "我的通知與設定",
    "spaceSettingsSidebar.peopleTab.title": "人員",
    "spaceSettingsSidebar.plansTab.title": "定價方案",
    "spaceSettingsSidebar.securityAndSAMLTab.title": "安全與身份識別",
    "spaceSettingsSidebar.securityTab.title": "安全性",
    "spaceSettingsSidebar.settingsTab.title": "設定",
    "spaceSettingsSidebar.spaceConnectionsTab.title": "連線",
    "spaceSettingsSidebar.subscriptionTab.title": "訂閱",
    "spaceSettingsSidebar.teamsTab.title": "團隊空間",
    "spaceSettingsSidebar.upgradeTab.title": "升級",
    "spaceSettingsSidebar.userConnectionsTab.title": "我的連線",
    "spaceSubscriptionBilling.addButton.label": "加入",
    "spaceSubscriptionBilling.address.invalidError":
      "你的地址無效。請更新地址，以便我們處理你的款項。",
    "spaceSubscriptionBilling.apply.label": "套用",
    "spaceSubscriptionBilling.applyCouponModal.successMessage":
      "已套用優待券！",
    "spaceSubscriptionBilling.applyCouponModal.title": "套用優待券",
    "spaceSubscriptionBilling.applyCreditButton.label": "使用點數",
    "spaceSubscriptionBilling.cancelButton.label": "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.cancelButton.label":
      "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.updateButton.label":
      "更新",
    "spaceSubscriptionBilling.changeBillingEmailModal.title":
      "變更帳單電子郵件地址",
    "spaceSubscriptionBilling.changeBillingInterval.helpButton.label":
      "了解此變更將如何影響你的帳單。",
    "spaceSubscriptionBilling.changeBillingInterval.title": "變更帳單間隔",
    "spaceSubscriptionBilling.changePaymentMethod.changeCardButton.label":
      "變更卡片",
    "spaceSubscriptionBilling.changeVATIDModal.subtitle": "請加入你的國碼",
    "spaceSubscriptionBilling.changeVATIDModal.title": "變更 VAT/GST 編號",
    "spaceSubscriptionBilling.changeYourAddressModal.title": "變更你的地址",
    "spaceSubscriptionBilling.discount.percentOff": "{percentOff}% 折扣",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.credited": "已退款",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.due": "已到期",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.failed": "失敗",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.paid": "已付費",
    "spaceSubscriptionBilling.invoicesSection.loadMoreInvoicesButton.label":
      "載入更多",
    "spaceSubscriptionBilling.invoicesSection.noInvoicesMessage":
      "此工作區尚未付款。",
    "spaceSubscriptionBilling.invoicesSection.title": "發票",
    "spaceSubscriptionBilling.invoicesSection.viewInvoiceButton": "查看發票",
    "spaceSubscriptionBilling.offline.message": "請連接網路後管理帳單。",
    "spaceSubscriptionBilling.setBillingInterval.monthlyOption": "月付",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth":
      "每月 {monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth.perMember":
      "每人每月 {monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.yearlyOption":
      "年付・可節省 {yearlySavingsPercent}",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption": "用卡片付款",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption.description":
      "信用卡或金融卡",
    "spaceSubscriptionBilling.subscriptionSettingsSection.VATID.title":
      "VAT/GST 編號",
    "spaceSubscriptionBilling.subscriptionSettingsSection.addOnSummary.description":
      "此工作區的 <bold>Notion AI</bold> 附加元件已啟用並設定至 <bold>每 {showMonthlyPrice, select, true{月} other {年}} {amount} 個。</bold>",
    "spaceSubscriptionBilling.subscriptionSettingsSection.applyCoupon.title":
      "套用優待券",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingEmail.title":
      "帳單電子郵件地址",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.title":
      "帳單間隔",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.monthly":
      "每月",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.yearly":
      "每年",
    "spaceSubscriptionBilling.subscriptionSettingsSection.changePlanButton.label":
      "變更方案",
    "spaceSubscriptionBilling.subscriptionSettingsSection.discount.title":
      "折扣",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.title":
      "付款方式",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.achOrWireTransfer":
      "ACH 或電匯",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.creditCard":
      "末四碼為 {lastFourDigits} 的 {creditCardBrand} 卡",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.none":
      "沒有",
    "spaceSubscriptionBilling.subscriptionSettingsSection.restartSubscriptionButton.label":
      "重新訂閱",
    "spaceSubscriptionBilling.subscriptionSettingsSection.workspaceSubscriptionBalance.title":
      "工作區餘額",
    "spaceSubscriptionBilling.subscriptionSettingsSection.yourAddress.title":
      "你的地址",
    "spaceSubscriptionBilling.updateButton.label": "更新",
    "spaceSubscriptionBilling.useCreditModal.amountOfCreditQuestion":
      "你想為下一張發票使用多少點數？",
    "spaceSubscriptionBilling.useCreditModal.applyCreditButton.label":
      "使用點數",
    "spaceSubscriptionBilling.useCreditModal.cancelButton.label": "取消",
    "spaceSubscriptionBilling.useCreditModal.nextInvoiceAmount": "下張發票總額",
    "spaceSubscriptionBilling.useCreditModal.title":
      "使用 Notion 點數・{creditInDollars} 可用",
    "spaceSubscriptionBilling.useCreditModal.warning":
      "使用點數到你的帳號後<bold>不能撤消</bold>。",
    "spaceSubscriptionBilling.vatCountryCode.subtitle": "請加入你的國碼",
    "spaceSubscriptionBilling.vatId.missingCountry":
      "如要更新 VAT/GST 編號，請更新帳單地址。",
    "spaceSubscriptionBilling.vatId.vatNotRequired":
      "你的稅務管轄區不需要 VAT/GST 編號。",
    "spaceSubscriptionBillingInfoForm.countryDropdown.title": "選取國家或地區",
    "spaceSubscriptionPaymentForm.billingInformation.address": "地址",
    "spaceSubscriptionPaymentForm.billingInformation.businessName":
      "公司名稱（選填）",
    "spaceSubscriptionPaymentForm.billingInformation.city": "城市",
    "spaceSubscriptionPaymentForm.billingInformation.country": "國家或地區",
    "spaceSubscriptionPaymentForm.billingInformation.disabledVatTooltip":
      "你可以在升級後將 VAT/GST 編號加入帳單分頁。",
    "spaceSubscriptionPaymentForm.billingInformation.fullName": "全名",
    "spaceSubscriptionPaymentForm.billingInformation.state": "州或省",
    "spaceSubscriptionPaymentForm.billingInformation.zipCode": "郵遞區號",
    "spaceSubscriptionPaymentForm.paymentInformation.header": "付款詳細資料",
    "spaceSubscriptionPaymentForm.vatCountryCode.header": "VAT（選填）",
    "spaceSubscriptionPaymentForm.vatCountryCode.placeholder": "VAT/GST 編號",
    "spaceSubscriptionPlans.addons.aiFeature.caption":
      "啟用允許你的私人 Alpha 成員使用 AI 功能。啟用即表示你同意<inlinelink>這些條款</inlinelink>。",
    "spaceSubscriptionPlans.addons.title": "附加元件",
    "spaceSubscriptionPlans.aiAddOn.switchPlanAsMember.tooltip":
      "只有工作區擁有者可以執行此動作。",
    "spaceSubscriptionPlans.allPlans.title": "所有计划",
    "spaceSubscriptionPlans.faqSection.link": "方案、帳單及付款",
    "spaceSubscriptionPlans.faqSection.title": "常見問題",
    "spaceSubscriptionPlans.offlineMessage": "請連接網路後管理定價方案。",
    "spaceSubscriptionPlans.plans.title": "定價方案",
    "spaceSubscriptionPlans.plusPlan.confirmMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的 {fromSinglePlayer, select, true {完整} other {}}加值版方案並啟用協作。{br}系統將在扣除任何帳號餘額後，{fromSinglePlayer, select, true {取消目前的折扣價格} other {}}，依比例向你收取費用。",
    "spaceSubscriptionPlans.plusPlanFromEducation.confirmMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的完整{businessEnabled, select, true {加值版} other {團隊版}}方案並啟用協作。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "spaceSubscriptionPlans.plusPlanFromSinglePlayerPlus.confirmMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的完整{businessEnabled, select, true {加值版} other {團隊版}}方案並啟用協作。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "spaceSubscriptionPlans.priceDisclaimerWithPlus":
      "顯示的為年付方案價格。若選擇月付，<b>個人專案版</b>為每月 {personalMonthlyPrice}，<b>加值版</b>為每位成員每月 {teamMonthlyPrice}，<b>商業版</b>為每位成員每月 {businessMonthlyPrice}，而<b>企業版</b>為每位成員每月 {enterpriseMonthlyPrice}。",
    "spaceSubscriptionPlans.studentSection.link":
      "如需更多資訊，請前往 notion.com/students。",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.description":
      "<p>學生和教育工作者可以免費存取加值版功能（包含 1 位成員限制）！只要使用你的學校電子郵件地址註冊，或者在「我的帳號」分頁中變更現有電子郵件即可。</p>",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.title":
      "學生與教育工作者",
    "spaceSubscriptionPlans.teamPlan.confirmButtonLabel":
      "{upgrading, select, true {升級} other {降級}}到{businessEnabled, select, true {加值版} other {團隊版}}",
    "spaceSubscriptionPlans.teamPlan.confirmMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的{businessEnabled, select, true {加值版} other {團隊版}}方案。{br}系統將在扣除任何帳號餘額後，依比例向你收取費用。",
    "spaceSubscriptionSettings.orderOptions.addOnsSection.aiMonthlyPrice":
      "+{memberPrice} / 成員 / 月",
    "spaceSubscriptionSettings.orderOptions.addOnsSection.header": "附加元件",
    "spaceSubscriptionSettings.orderOptions.addOnsSection.noThanks": "不，謝謝",
    "spaceSubscriptionSettings.orderOptions.addOnsSection.notionAi":
      "Notion AI",
    "spaceSubscriptionSettings.orderOptions.billingPeriodSection.header":
      "計費週期",
    "spaceSubscriptionSettings.orderOptions.billingPeriodSection.memberPrice":
      "{memberPrice} / 成員 / 月",
    "spaceSubscriptionSettings.orderOptions.billingPeriodSection.monthly":
      "月付",
    "spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearly":
      "年付",
    "spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearlyDiscount":
      "{percent}% 折扣",
    "spaceSubscriptionSettings.upgradeModal.billingIntervalSection.header":
      "帳單間隔",
    "spaceSubscriptionSettings.upgradeModal.contactSales": "聯絡銷售",
    "spaceSubscriptionSettings.upgradeModal.paymentMethodSection.header":
      "付款方式",
    "spaceSubscriptionSettings.upgradeModal.sales.questions":
      "有問題嗎？請聯絡我們的銷售團隊了解更多資訊。",
    "spaceSubscriptionSettings.upgradeModal.termsOfService.ai":
      "按一下「確認」購買項目即表示你同意 Notion AI 產品特定條款。",
    "spaceSubscriptionUpdatePaymentMethod.applePay.total.label":
      "Notion - 我們會定期向你收費",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.update.header":
      "更新信用卡",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton": "更新",
    "spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmDescription":
      "系統將從你的信用卡收取未來帳單活動的費用，且再也不會從你的帳單電子郵件傳送發票，但你可以前往 Notion 儀表板的「帳單」區段查看內容。",
    "spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmMessage":
      "更新至自動帳單？",
    "spaceSubscriptionUpdatePaymentMethod.update.header": "更新付款方式",
    "spaceSubscriptionUpgradeModal.applePay.total.label":
      "Notion - 我們會定期向你收費",
    "spaceSubscriptionUpgradeModal.billingAddress.invalidError":
      "你的地址無效。請更新你的地址，以便我們處理你的款項。",
    "spaceSubscriptionUpgradeModal.billingAddress.missingCountryError":
      "無效的國家/地區。請從下拉式選單中選擇國家/地區。",
    "spaceSubscriptionUpgradeModal.creditCard.genericError":
      "我們無法處理你的卡片。請再試一次。",
    "spaceSubscriptionUpgradeModal.orderSummary.ai.addOn":
      "AI 附加元件 ({numberOfMembers, plural, one {# 位成員} other {# 位成員}})",
    "spaceSubscriptionUpgradeModal.orderSummary.businessPlan": "商業版",
    "spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan": "企業版",
    "spaceSubscriptionUpgradeModal.orderSummary.header": "訂單摘要",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly":
      "{price}/成員/月 · 按月計費",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly":
      "{price}/成員/月 · 按年計費",
    "spaceSubscriptionUpgradeModal.orderSummary.plusPlan":
      "加值版 ({numberOfMembers, plural, one {# 位成員} other {# 位成員}})",
    "spaceSubscriptionUpgradeModal.orderSummary.proratedChanges":
      "按比例計算的費用",
    "spaceSubscriptionUpgradeModal.orderSummary.proratedChangesCaption":
      "所有因此工作區升級而產生之按比例計算的費用。",
    "spaceSubscriptionUpgradeModal.orderSummary.singlePlayerPlusPlan":
      "包含 1 位成員限制的加值版",
    "spaceSubscriptionUpgradeModal.upgradeButton.plusPlan": "升級到加值版",
    "spaceSubscriptionUpgradeModal.upgradeTargetSpace.loading":
      "正在宣告及更新工作區...",
    "spaceSubscriptionUpgradeOrderSummary.orderTotal": "總計",
    "spaceSubscriptionUpgradeOrderSummary.totalForToday": "今日總計",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.description":
      "前 1000 個區塊",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.title": "免費",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.tooltip":
      "區塊是你加入到頁面的內容，例如文字段落或待辦事項。{br}團隊試用版不提供付費團隊版中的某些功能。",
    "spaceSubscriptionsPlans.addons.aiFeature.label": "啟用 Notion AI",
    "startupCouponInlineLink.text": "是否為新創公司？",
    "stripeHelpers.cardDeclined.error.message": "你的卡片遭拒。",
    "stripeHelpers.cardDeclined.error.message.declinedFunds":
      "你的卡片被拒絶，因為款項不足。",
    "stripeHelpers.cardDeclined.error.message.expiredCard":
      "你的卡片遭拒，因為此卡片已過期。",
    "stripeHelpers.cardDeclined.error.message.incorrectNumber":
      "你的卡片遭拒，因為你輸入的號碼不正確。",
    "stripeHelpers.cardDeclined.error.message.invalidAmount":
      "你的卡片遭拒，因為付款金額超過允許金額。",
    "stripeHelpers.cardDeclined.error.message.invalidCvc":
      "你的卡片被拒絶，因為你輸入的 CVC 號碼無效",
    "stripeHelpers.invalidCVC.error.message": "你的卡片安全碼無效。",
    "stripeHelpers.invalidExpiryYear.error.message": "你的卡片到期年份已過。",
    "stripeHelpers.invalidNumber.error.message": "你的卡號並非有效的信用卡號。",
    "structuredAutomations.createNextSprint.nextSprintName": "Sprint",
    "studentNotEligibleModal.contactUsSection.message":
      "對此有疑問？<inlinelink>更多資訊和常見問題解答</inlinelink>。",
    "studentNotEligibleModal.header":
      "<p>很抱歉，你目前使用的電子郵件地址沒有資格享受免費的{businessEnabled, select, true {教育版} other {個人專業版}}方案。</p><p>K-12 學生、K-12 教育工作者，以及 Gmail、Outlook 等個人電子郵件地址沒有資格免費獲得<pricinglink>{businessEnabled, select, true {教育版} other {個人專業版}}方案</pricinglink>，但任何人都可以使用免費的<pricinglink>{businessEnabled, select, true {免費版} other {個人版}}方案</pricinglink>享受無限儲存空間。</p>",
    "studentNotEligibleModal.numberedList.changeEmailItem.button.label":
      "變更電子郵件地址",
    "studentNotEligibleModal.numberedList.changeEmailItem.message":
      "你目前的電子郵件地址是：",
    "studentNotEligibleModal.numberedList.changeEmailItem.message2":
      "成千上萬的大學、學院、中學後教育機構的域名已具備資格，而不僅是 .edu 結尾的電子郵件地址。",
    "studentNotEligibleModal.numberedList.firstItem": "1.",
    "studentNotEligibleModal.numberedList.item2.promocode.errorMessage":
      "促銷碼 {code} 不存在",
    "studentNotEligibleModal.numberedList.item2.promocodePlaceholder":
      "輸入代碼…",
    "studentNotEligibleModal.numberedList.promoCodeItem.message":
      "有教育優惠碼？",
    "studentNotEligibleModal.numberedList.promoCodeItem.submitButton": "送出",
    "studentNotEligibleModal.numberedList.secondItem": "2.",
    "subheaderBlock.placeholder": "標題 2",
    "subscriptSettings.freePersonal.downgradeTitle":
      "降級到{businessEnabled, select, true {免費版} other {個人版}}?",
    "subscriptSettings.personalPro.downgradeTitle": "降級到個人專業版？",
    "subscriptionActions.overFreeBlockLimit.longMessage":
      "你已超過免費版的區塊限制",
    "subscriptionActions.overFreeBlockLimit.shortMessage": "你已超出區塊限制",
    "subscriptionActions.upgradeForUnlimitedBlocks.longMessage":
      "升級以無限使用",
    "subscriptionActions.upgradeForUnlimitedBlocks.shortMessage": "升級",
    "subscriptionErrors.cardRequiredError":
      "由於你尚未支付上次的帳單，因此必須使用卡片支付。",
    "subscriptionErrors.collectionMethodNotAllowed":
      "你無法在應用程式中選擇此收款方式。請聯絡支援部門。",
    "subscriptionErrors.couponAlreadyApplied": "此優待券已套用",
    "subscriptionErrors.creditExceedsBalanceError":
      "無法使用超過 {maxCredits} 的點數餘額。",
    "subscriptionErrors.creditNoFreeLunch": "不可能為負點數。",
    "subscriptionErrors.invalidCreditError": "此點數額度不可用。",
    "subscriptionErrors.invalidPlan": "你選擇的方案無法使用。",
    "subscriptionErrors.invalidVatError": "VAT/GST 編號無效。",
    "subscriptionErrors.missingAddressError": "地址行第一行必須存在。",
    "subscriptionErrors.missingNameError": "名稱必須存在。",
    "subscriptionErrors.personalPlanMoreThanOneMember":
      "個人版使用時，你的工作區內只能有一位成員。",
    "subscriptionHelpers.billingInterval.monthly.option.title":
      "月費 – {memberPrice} /每人/每月",
    "subscriptionHelpers.billingInterval.monthly.title": "月付",
    "subscriptionHelpers.billingInterval.yearly.option.title":
      "<pre>年費 – {memberPrice} / 每人 / 每月 <span>省下 {yearlySavingsPercent}</span></pre>",
    "subscriptionHelpers.billingInterval.yearly.title":
      "<pre>年付・<span>省 {yearlySavingsPercent} </span> </pre>",
    "subscriptionHelpers.lineItems.balance": "餘額",
    "subscriptionHelpers.lineItems.credit": "點數",
    "subscriptionHelpers.lineItems.promo": "優待券",
    "subscriptionHelpers.lineItems.promo.subtitle":
      "有效期為 {expirationInMonths} 個月",
    "subscriptionHelpers.lineItems.subTotal": "小計",
    "subscriptionHelpers.lineItems.tax.subtitle": "如適用",
    "subscriptionHelpers.lineItems.tax.title": "稅務",
    "subscriptionHelpers.lineItems.taxIfApplicable.title": "適用時加上稅金",
    "subscriptionHelpers.paymentMethod.appleOrGooglePay.title":
      "Apple 或 Google Pay",
    "subscriptionHelpers.paymentMethod.creditCard.title": "信用卡或金融卡",
    "subscriptionHelpers.paymentMethod.invoice.caption": "通過電子郵件接收發票",
    "subscriptionHelpers.paymentMethod.invoice.title": "ACH 或電匯",
    "subscriptionHelpers.pricePerMonthPricing.label": "每月 {price}",
    "subscriptionHelpers.pricePerUserPerMonthPricing.label":
      "每位成員每月 {price}",
    "subscriptionSettings.button": "管理訂閱",
    "subscriptionSettings.description":
      "你目前透過 Apple 的程式內購買完成訂閱。你可以在 Apple 的訂閱設定中管理訂閱。",
    "subscriptionSettings.downgradeToBusinessDialog.confirmationButton":
      "降級到商業版",
    "subscriptionSettings.educationPlusFreeMessage":
      "你現在免費訂閱了 Notion 的教育加值版。",
    "subscriptionSettings.freePersonal.downgradeConfirmationButton":
      "降級到{businessEnabled, select, true {免費版} other {個人版}}",
    "subscriptionSettings.freePersonal.downgradeFromEducationPlusMessage":
      "你即將降級到免費版，並將損失 Notion 加值版目前的折扣價格。",
    "subscriptionSettings.freePersonal.downgradeFromSinglePlayerPlusMessage":
      "你即將降級到免費版。系統會取消 Notion 加值版目前的折扣價格。",
    "subscriptionSettings.freePersonal.downgradeMessageWithTeamsFirstParagraph":
      "個人版免費提供 1 位成員使用，並僅限於 5 位訪客。",
    "subscriptionSettings.freePersonal.downgradeMessageWithTeamsSecondParagraph":
      "你的側邊欄再也不會顯示「團隊空間」分區中的頁面，但你還是可透過搜尋和連結存取。建議你在降級前將其移至「私人」分區。",
    "subscriptionSettings.freePersonal.downgradeMessageWithTeamsThirdParagraph":
      "建議你在降級前將其移至「私人」分區。",
    "subscriptionSettings.freeTeam.upgradeMessage":
      "你將取得付費團隊版的大多數機能，區塊儲存限制為 1000 個。你可以隨時升級以解除限制。",
    "subscriptionSettings.freeTeam.upgradeTitle": "免費試用團隊版",
    "subscriptionSettings.invalidPromoCodeError.message": "此促銷碼無效。",
    "subscriptionSettings.mobileDescription":
      "透過 App Store 管理個人專業版訂閱。",
    "subscriptionSettings.personalFreeMessage":
      "你現在免費訂閱了 Notion 的個人專業版。",
    "subscriptionSettings.personalPro.downgradeConfirmationButton":
      "降級至個人專業版",
    "subscriptionSettings.personalPro.downgradeMessage":
      "你的側邊欄再也不會顯示「團隊空間」分區中的頁面，但你還是可透過搜尋和連結存取。建議你在降級前將其移至「私人」分區。",
    "subscriptionSettings.personalPro.downgradeMessageSuggestion":
      "建議你在降級前將其移至「私人」分區。",
    "subscriptionSettings.startTeamTrialDialog.confirmationbutton":
      "開始團隊版試用",
    "subscriptionSettings.subscriptionNextChargeMessage.ai":
      "{planInterval, select, month {此工作區的 Notion AI 設為<bold>每月 {planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區的 Notion AI 設為<bold>每年 {planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.businessPlan":
      "{planInterval, select, month {此工作區的商業版方案設為每月 <bold>{planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區的商業版方案設為每年 <bold>{planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.enterprisePlan":
      "{planInterval, select, month {此工作區的商業版已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的商業版已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.legacyPlan":
      "{planInterval, select, month {此工作區的舊定價方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的舊定價方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.personalPlusPlan":
      "{planInterval, select, month {此工作區為沒有協作工作區的加值版方案。你可以變更方案，但會損失目前的折扣價格。你的方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區為沒有協作工作區的加值方案。你可以變更方案，但會損失目前的折扣價格，你的方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.plusEducationPlan":
      "{planInterval, select, month {此工作區為有 1 位成員限制的教育版方案。你可以變更方案，但會損失目前的折扣價格。你的方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區為有 1 位成員限制的教育方案。你可以變更方案，但會損失目前的折扣價格，你的方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.plusPlan":
      "{planInterval, select, month {此工作區的加值版方案設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的加值版方案設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.ai":
      "此工作區的 <bold>Notion AI</bold> 附加元件已取消。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.businessPlan":
      "此工作區的<bold>商業版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 過期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.enterprisePlan":
      "此工作區的<bold>企業版</bold>方案已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.legacyPla":
      "此工作區的<bold>舊定價方案</bold>已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalEducationPlan":
      "此工作區的<bold>個人專業教育版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalPlan":
      "此工作區的<bold>個人專業版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.plusEducationPlan":
      "此工作區的<bold>教育加值版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 過期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.plusPlan":
      "此工作區的<bold>加值版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 過期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.singlePlayerPlusPlan":
      "此工作區折扣後包含 1 位成員限制的<bold>加值版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 過期。",
    "subscriptionSettings.subscriptionStatus.freePlanMessage":
      "此工作區是<bold>免費方案</bold>，有區塊儲存限制。",
    "subscriptionSettings.subscriptionStatus.gracePeriodBlockLimit":
      "你已達到 Notion 的試用區塊限制，並在我們限制建立新內容前還有 {remainingDaysMessage} 天的時間。",
    "subscriptionSettings.subscriptionStatus.gracePeriodBlockLimitNumDays":
      "{remainingDays, plural, other {還有 {remainingDays} 天時間可升級}}",
    "subscriptionSettings.subscriptionStatus.gracePeriodBlockLimitToday":
      "立即升級",
    "subscriptionSettings.subscriptionStatus.legacySubscriptionMessage":
      "我們的訂閱系統目前正在移轉中。請稍後再查看以了解新功能！",
    "subscriptionSettings.subscriptionStatus.nextPlan.free":
      "目前方案過期後，此工作區將降級為有區塊儲存限制的免費方案。",
    "subscriptionSettings.subscriptionStatus.nextPlan.team":
      "目前方案過期後，此工作區將降級為免費試用的團隊版，區塊儲存限制為 1000 個。",
    "subscriptionSettings.subscriptionStatus.proratedChargeMessage":
      "你將於 {upcomingChargeDate}按比例支付 {formattedInvoiceNextCharge}。",
    "subscriptionSettings.subscriptionStatus.reachedFreeBlockLimit":
      "此工作區使用了 {freeBlockLimit} 個區塊儲存限制中的 {usedBlocks} 個區塊（佔總儲存的 {utilizationPercentage}）。",
    "subscriptionSettings.subscriptionStatus.remainingChargeMessage":
      "根據你的帳號餘額進行調整後，你將需要支付 {formattedInvoiceNextCharge} 費用。",
    "subscriptionSettings.subscriptionStatus.singlePlayerFreePlanMessage":
      "此工作區屬於<bold>免費版</bold>。",
    "subscriptionSettings.subscriptionStatus.upcomingInvoiceLink":
      "<upcominginvoicelink>查看下個發票</upcominginvoicelink>",
    "subscriptionSettings.supbscriptionNextChargeMessage.plusEducationPlan":
      "{planInterval, select, month {此工作區為沒有協作工作區的教育加值版方案。你可以變更方案，但會損失目前的折扣價格。你的方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區為沒有協作工作區的教育加值方案。你可以變更方案，但會損失目前的折扣價格，你的方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
    "subscriptionSettings.title": "訂閱",
    "subscriptionSettings.updatingSubscriptionMessage": "正在更新訂閱…",
    "subscriptionSettings.upgradeToBusinessDialog.confirmationButton":
      "升級到商業版",
    "subscriptionSettings.upgradeToBusinessDialog.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 商業版。{br}系統將在扣除帳號餘額後，依比例向你收取費用。",
    "subscriptionSettings.upgradeToBusinessFromEducationDialog.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的商業版方案。{br}系統將在扣除任何帳號餘額後，取消加值版目前的折扣價格，依比例向你收取費用。",
    "subscriptionSettings.upgradeToEnterpriseDialog.confirmationbutton":
      "升級到企業版",
    "subscriptionSettings.upgradeToEnterpriseDialog.message":
      "你將以每位成員每月{price}的價格訂閱 Notion 企業版。{br}系統將在扣除帳號餘額後，依比例向你收取費用。",
    "subscriptionSettings.upgradeToEnterpriseFromEducationDialog.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的企業版方案。{br}系統將在扣除任何帳號餘額後，取消加值版目前的折扣價格，並依比例收取費用。",
    "subscriptionSettings.upgradeToEnterpriseFromSinglePlayerPlusDialog.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的企業版方案。{br}系統將在扣除任何帳號餘額後，取消加值版目前的折扣價格，並依比例收取費用。",
    "subscriptionSettings.verifyingEligibilityMessage": "正在驗證資格…",
    "subscriptionUpgradeDetails.features":
      "<span>{planName}的所有功能，</span>以及：",
    "subscriptionUpgradeDetails.learnMore": "了解更多",
    "subscriptionUpgradeDetails.oneLiner.enterprise":
      "運轉公司所需的控制和支援。",
    "subscriptionUpgradeDetails.oneLiner.personal": "給想要更多的進階玩家。",
    "subscriptionUpgradeDetails.oneLiner.team":
      "讓團隊在一個地方寫作、規劃與合作。",
    "subscriptionUpgradeDetails.perMonthPricing.label": "每月",
    "subscriptionUpgradeDetails.perUserPerMonthPricing.label": "每人{br}每月",
    "subscriptionUpgradeDetails.planName.free": "個人版",
    "subscriptionUpgradeDetails.planName.personal": "專業版",
    "subscriptionUpgradeDetails.planName.plus": "加值版",
    "subscriptionUpgradeDetails.planName.team": "團隊版",
    "subscriptionUpgradeDetails.planName.teamTrial": "團隊試用版",
    "subscriptionUpgradeDetails.price": "{price}",
    "subscriptionUpgradeDetails.title.enterprise": "升級到企業版",
    "subscriptionUpgradeDetails.title.personal": "升級到個人專業版",
    "subscriptionUpgradeDetails.title.plus": "升級到加值版",
    "subscriptionUpgradeDetails.title.team": "升級到團隊版",
    "subscriptionUpgradeDetails.title.teamFree": "升級到團隊試用版",
    "subscriptionUpgradeModal.addOn.purchase.button": "確認購買",
    "subscriptionUpgradeModal.ai.addOn.title": "購買無限 Notion AI",
    "subscriptionUpgradeModal.confirmation.aiOnly":
      "按一下「立即升級」即表示你同意「<aiTerms>Notion AI 產品特定條款</aiTerms>」。{br}{br}性能須遵守公平使用原則。{br}<fairUsePolicies>了解更多</fairUsePolicies>。",
    "subscriptionUpgradeModal.confirmation.planOnly":
      "按一下「立即升級」即表示你同意「<terms>Notion 條款與細則</terms>」。",
    "subscriptionUpgradeModal.confirmation.planWithAi":
      "按一下「立即升級」即表示你同意「<terms>Notion 條款與細則</terms>」和「<aiTerms>Notion AI 產品特定條款</aiTerms>」。{br}{br}性能須遵守公平使用原則。{br}<fairUsePolicies>了解更多</fairUsePolicies>。",
    "subscriptionUpgradeModal.oneLiner.ai":
      "為你的工作區啟用 Notion AI。性能須遵守公平使用政策。進一步了解",
    "subscriptionUpgradeModal.oneLiner.enterprise":
      "經營公司所需的掌控權和支援。",
    "subscriptionUpgradeModal.oneLiner.personal":
      "適合想要執行更多功能的進階使用者。",
    "subscriptionUpgradeModal.oneLiner.team": "在同一地點撰寫、規劃與合作。",
    "subscriptionUpgradeModal.targetSpace.button.enterprise":
      "認領並升級至企業版",
    "subscriptionUpgradeModal.targetSpace.title.enterprise":
      "認領並升級至企業版",
    "subscriptionUpgradeModal.title.enterprise": "升級為企業版",
    "subscriptionUpgradeModal.title.personal": "升級為個人專業版",
    "subscriptionUpgradeModal.title.plus": "升級到加值版",
    "subscriptionUpgradeModal.title.teamFree": "升級為團隊試用版",
    "subscriptionUpgradeModal.upgradeButton.upgradeNow": "立即升级",
    "subscriptionUpgradeModal.upgradeToBusinessDialog.businessPlan":
      "升級到商業版",
    "subsubheaderBlock.placeholder": "標題 3",
    "successfullyImportedConfluenceResultEmail.emailText":
      "按一下<importpagelink>這裡</importpagelink>查看匯入。你可以在<loggerpagelink>這裡</loggerpagelink>找到匯入日誌檔。",
    "successfullyImportedConfluenceResultEmail.subjectLine":
      "你的 Notion 匯入已經準備就緒。",
    "synced.lastSyncedAt.label": "已同步 {lastSyncedAt}",
    "synced.partial_sync.label": "部分同步",
    "synced.syncing.label": "同步中",
    "syncedCollectionIndicators.calendar.label": "行事曆",
    "syncedCollectionIndicators.event.label": "事件",
    "syncedCollectionIndicators.figmaFile.label": "檔案",
    "syncedCollectionIndicators.issues.label": "問題",
    "syncedCollectionIndicators.oauthGithubIssue.label": "Oauth 問題",
    "syncedCollectionIndicators.oauthGithubPullRequest.label": "Oauth 提取請求",
    "syncedCollectionIndicators.originalUrl": "連結至原始 URL",
    "syncedCollectionIndicators.originalUrlWithIntegration":
      "{integrationName} 中的 {collectionType}",
    "syncedCollectionIndicators.project.label": "專案",
    "syncedCollectionIndicators.pullRequest.label": "提取請求",
    "syncedCollectionIndicators.pullRequests.label": "提取請求",
    "syncedCollectionIndicators.releases.label": "版本",
    "tabBlock.emptyBlock.placeholderText": "空白分頁。按一下或拖曳區塊到其中。",
    "tabBlockActions.addTab.title": "新分頁",
    "tabMenuBlock.title.placeholder": "無標題",
    "tableOfContentsBlock.mobileActionMenu.button.label": "更多動作…",
    "tableOfContentsBlock.placeholder":
      "增加標題區塊以建立目錄。<linktohelpbutton>了解更多</linktohelpbutton>。",
    "tableView.selectionOverlay.dragAndFill.tooltip": "垂直拖曳以填入值",
    "team.title": "團隊",
    "teamActions.archiveTeam.confirmDialogAcceptLabel": "歸檔團隊空間",
    "teamActions.archiveTeam.confirmDialogDescription":
      "歸檔此團隊空間刪除所有團隊空間成員的存取權限，並將其隱藏在側邊欄中。輸入團隊空間名稱以便確認。",
    "teamActions.archiveTeam.confirmDialogTitle": "是否確認要歸檔此團隊空間？",
    "teamActions.archiveTeam.transitionToZeroTeams.confirmDialogDescription":
      "這是你最後一個預設團隊空間。歸檔將移除側邊欄中的「團隊空間」。輸入團隊空間名稱以確認。",
    "teamActions.confirmJoinTeamFromInviteLink.acceptLabel": "是",
    "teamActions.confirmJoinTeamFromInviteLink.confirmationDialogMessage":
      "空白",
    "teamActions.confirmMoveFromTeam.description":
      "這會將 {numPagesMoved, plural, one {此頁面} other {這些頁面}} 的權限轉移給 {moveToTeamName} 的成員。",
    "teamActions.confirmMoveToTeam.removeRestrictedDescription":
      "{numPagesMoved, plural, one {此頁面} other {這些頁面}} 將不再有受限存取權限。",
    "teamActions.confirmMoveToTeam.title":
      "確定要將 {numPagesMoved, plural, one {此頁面} other {這些頁面}} 移至 {moveToTeamName} 嗎？",
    "teamActions.confirmTeamAccessChangeDialog.closedTeam.titleWithName":
      "確定要將 {teamName} 設為封閉式團隊嗎？",
    "teamActions.confirmTeamAccessChangeDialog.defaultTeam.titleWithName":
      "確定要將 {teamName} 設為預設團隊空間嗎？",
    "teamActions.confirmTeamAccessChangeDialog.defaultTeamWithGuests.titleWithName":
      "確定要將 {teamName} 設為預設團隊空間嗎？",
    "teamActions.confirmTeamAccessChangeDialog.openTeam.titleWithName":
      "確定要將 {teamName} 設為開放式團隊嗎？",
    "teamActions.confirmTeamAccessChangeDialog.privateTeam.titleWithName":
      "確定要將 {teamName} 設為私人團隊嗎？",
    "teamActions.confirmTeamAccessDialog.disableDefaultTeamLabel":
      "{teamName} 也將不再是默認團隊空間，並不會自動添加工作區成員。",
    "teamActions.leaveTeam.confirmDialogAcceptLabel": "移除",
    "teamActions.leaveTeam.confirmDialogAcceptLabel.removingYourself":
      "離開團隊空間",
    "teamActions.leaveTeam.confirmDialogCancelLabel.removingSomeoneElse":
      "取消",
    "teamActions.leaveTeam.confirmDialogDescription.removingSomeoneElse":
      "此變更將不會套用於任何團隊空間的受限頁面。",
    "teamActions.leaveTeam.confirmDialogDescription.removingYourself":
      "你將不會再在側邊欄中看到此團隊空間，並且你可能會失去對該團隊空間頁面的存取權限。",
    "teamActions.leaveTeam.confirmDialogMessage.removingSomeoneElse":
      "確定要將 {memberName} 自 {teamName} 移除嗎？",
    "teamActions.leaveTeam.confirmDialogMessage.removingYourself":
      "是否確定要離開 {teamName}？",
    "teamActions.leaveTeam.onlyTeamMemberLeftDialogMessage":
      "邀請其他團隊空間所有者離開此團隊空間",
    "teamActions.leaveTeam.userMembershipFromGroupDialogMessage":
      "你無法離開此團隊空間，因為你是 {groupNames} 的成員。",
    "teamActions.movePagesFromArchivedTeam.confirmDialogAcceptLabel":
      "移動頁面",
    "teamActions.movePagesFromArchivedTeam.confirmDialogCancelLabel":
      "在不移動頁面的情況下繼續",
    "teamActions.movePagesFromArchivedTeam.confirmDialogTitle":
      "你要將 {teamName} 下的頁面移至側邊欄中的「私人」和「已分享」分區嗎？",
    "teamActions.teamScreen.closedTeam.description":
      "團隊空間仍可供搜尋，但加入僅限邀請。",
    "teamActions.teamScreen.defaultTeam.description":
      "每位工作區成員及未來工作區成員皆會加入此團隊空間。",
    "teamActions.teamScreen.defaultTeamWithGuests.description":
      "每位工作區成員和未來工作區成員都會加入此團隊空間。此外，也會移除 {numberOfTeamGuests} 位團隊空間訪客。",
    "teamActions.teamScreen.openTeam.description":
      "工作區中的所有人都可以存取團隊空間及其內容。",
    "teamActions.teamScreen.privateTeam.description":
      "只有成員才能查看團隊空間及其內容。",
    "teamBrowser.teamCard.Membership": "成員",
    "teamBrowser.teamCard.MembershipPlural": "成員",
    "teamBrowser.teamCard.button.joined": "已加入",
    "teamBrowser.teamCard.button.leaveTeam": "離開團隊空間",
    "teamBrowser.teamCard.button.leaveTeamDescription": "從側邊欄移除團隊空間",
    "teamBrowser.teamCard.leaveTeam.defaultTeamTooltip":
      "你不能離開此團隊空間，因為工作區中的每個人都必須是成員",
    "teamBrowser.teamCard.leaveTeam.groupTooltip":
      "你無法離開此團隊空間，因為你是 {groupNames} 的成員。",
    "teamBrowserOutliner.createTeamspaceButton": "新團隊空間",
    "teamBrowserOutliner.joinedTeamsLabel": "你的團隊空間",
    "teamBrowserOutliner.joinedTeamsSection.tooltip": "你已加入的團隊空間",
    "teamBrowserOutliner.noFilterResults.description":
      "再試一次或<linkbutton>清除搜尋</linkbutton>",
    "teamBrowserOutliner.noFilterResults.title": "沒有結果",
    "teamBrowserOutliner.noUnjoinedTeams": "沒有團隊空間可加入",
    "teamBrowserOutliner.searchResultsLabel": "搜尋結果",
    "teamBrowserOutliner.unjoinedTeamsLabel": "更多團隊空間",
    "teamBrowserOutliner.unjoinedTeamsSection.tooltip": "你可以加入的團隊空間",
    "teamHelpers.creativeTeam.name": "創意工作",
    "teamHelpers.designTeam.name": "設計總部",
    "teamHelpers.educatorTeam.name": "教育工作者",
    "teamHelpers.engTeam.name": "工程總部",
    "teamHelpers.financeTeam.name": "金融",
    "teamHelpers.generalTeam.name": "一般",
    "teamHelpers.hrTeam.name": "人力資源",
    "teamHelpers.internalCommunicationTeam.name": "內部通訊",
    "teamHelpers.itAdminTeam.name": "IT 管理員",
    "teamHelpers.itTeam.name": "IT 總部",
    "teamHelpers.knowledgeManagementTeam.name": "知識管理",
    "teamHelpers.marketingTeam.name": "行銷總部",
    "teamHelpers.operationsTeam.name": "營運",
    "teamHelpers.otherTeam.name": "你的團隊",
    "teamHelpers.personaTeam.description": "你和你團隊專屬的地方",
    "teamHelpers.productDesignTeam.name": "產品設計",
    "teamHelpers.productTeam.name": "產品總部",
    "teamHelpers.projectProgramMgmtTeam.name": "專案/計劃管理",
    "teamHelpers.salesTeam.name": "銷售總部",
    "teamHelpers.supportTeam.name": "客戶服務",
    "teamInviteLinkActions.joinTeam.confirmationMessage": "已加入 {teamName}",
    "teamInviteLinkActions.requestAccess.failureMessage": "無法要求成員資格",
    "teamInviteLinkActions.requestAccess.successMessage": "已成功要求成員資格",
    "teamInviteLinkJoinPage.backToMyContentButton.label": "返回我的內容",
    "teamInviteLinkJoinPage.contact.message":
      "如有任何問題，請聯絡你的工作區擁有者。",
    "teamInviteLinkJoinPage.joinTeam.label": "加入團隊空間",
    "teamInviteLinkJoinPage.page.subtitle":
      "如果你加入團隊空間，你就可以存取團隊空間中的內容。",
    "teamInviteLinkJoinPage.page.title": "你已受邀加入 {teamName}",
    "teamInviteLinkPageError.archivedTeam.title":
      "很抱歉。这个团队空间已经存档了。",
    "teamInviteLinkPageError.backToMyContentButton.label": "返回到“我的内容”",
    "teamInviteLinkPageError.inviteLinkDisabled.title":
      "很抱歉。此团队空间的邀请链接被禁用。",
    "teamInviteLinkPageError.noAccess.message":
      "如有疑问，请联系工作区所有者。",
    "teamInviteLinkPageError.nonSpaceMember.title":
      "很抱歉。不是工作区的成员。",
    "teamInviteLinkRequestModal.caption":
      "你的團隊空間擁有者會核准或拒絕你的要求。",
    "teamInviteLinkRequestModal.message.placeholder": "訊息（可選）",
    "teamInviteLinkRequestModal.reasonForRequest.title":
      "要求 {icon} {teamName} 的存取權限",
    "teamInviteLinkRequestModal.requestAccessButton.label": "要求",
    "teamInviteLinkRequestPage.backToMyContentButton.label": "返回我的內容",
    "teamInviteLinkRequestPage.contact.message":
      "如有任何問題，請聯絡你的工作區擁有者。",
    "teamInviteLinkRequestPage.message.placeholder": "訊息（選填）",
    "teamInviteLinkRequestPage.privateTeamspace.label": "个人团队空间",
    "teamInviteLinkRequestPage.requestAccess.label": "要求存取權限",
    "teamInviteLinkRequestPage.requestAccess.subtitle":
      "如果團隊空間擁有者核准你的要求，你就可以存取此團隊空間。",
    "teamInviteLinkRequestPage.requestAccess.title":
      "要求 {teamName} 的存取權限",
    "teamJoinLeaveButton.joinTeam.closedTeamTooltip":
      "你只可以透過成員邀請加入封閉式團隊空間",
    "teamJoinLeaveButton.joinTeam.privateTeamTooltip":
      "只有通过成员邀请，才能参与私人团队空间。",
    "teamJoinLeaveButton.leaveTeam.enabledTooltip": "按一下以離開團隊空間",
    "teamJoinLeaveButton.leaveTeam.onlyOwnerTooltip":
      "你是唯一的團隊空間擁有者，因此無法離開此團隊空間。邀請其他擁有者，你才能離開。",
    "teamLockIcon.tooltip": "私人團隊空間只能透過邀請存取或加入",
    "teamMemberPermissionRoleSelect.member.permissionitem.description":
      "你無法給予低於團隊空間預設的存取權限。降低團隊空間成員的存取權限以啟用此選項。",
    "teamMemberPermissionRoleSelect.permissionItem.defaultTag": "預設",
    "teamMemberPermissionRoleSelect.permissionOverride.buttonTooltip":
      "在此團隊空間設定所有頁面的自訂權限層級。",
    "teamMemberPermissionRoleSelect.permissionOverride.menuHeader":
      "選擇自訂角色",
    "teamMemberPermissionSettings.permissionSwitcher.accept": "變更存取權限",
    "teamMemberPermissionSettings.permissionSwitcher.confirmation.description":
      "此變更將不會套用於任何團隊空間的受限頁面。",
    "teamMemberPermissionSettings.permissionSwitcher.confirmation.message":
      "是否確定要將 {name} 的角色變更為 {role}？",
    "teamMemberPermissionSettings.removeSelfTeamOwner.confirmation.message":
      "是否確定要移除自己的團隊空間擁有者身份？你將不再能編輯團隊空間設定和擁有權限。",
    "teamMemberPermissionSettings.upgradeGuestConfirmation.accept":
      "加入到工作區",
    "teamMemberPermissionSettings.upgradeGuestConfirmation.message":
      "確定要將此使用者升級至團隊空間 {memberOrOwner} 嗎？他們也會以成員的身分加入到工作區。",
    "teamMemberPermissionSettings.upgradeGuestConfirmation.roleLabelMember":
      "成員",
    "teamMemberPermissionSettings.upgradeGuestConfirmation.roleLabelOwner":
      "擁有者",
    "teamMemberPermissionSettings.upgradeGuestConfirmationWithOtherTeamspaces.message":
      "確定要將此使用者升級至團隊空間 {memberOrOwner} 嗎？他們也會以成員的身分加入到工作區，並且成為 {numberOfOtherTeams, plural, one {其它 {numberOfOtherTeams} 個團隊空間} other {其它 {numberOfOtherTeams} 個團隊空間}} 的成員。",
    "teamMembersList.tooltip.overflowMessage": "其他 {countRemainingUsers} 位…",
    "teamMenuHeader.teamMemberCount":
      "{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
    "teamOutliner.addPage": "加入頁面",
    "teamOutliner.noOverflowEmptyMessage": "裡面沒有頁面",
    "teamPermissionSettings.group": "群組",
    "teamPermissionSettings.member.showMore": "顯示其他 {numNotShown} 個",
    "teamPermissionSettings.numberOfMembers":
      "{groupSize, plural, one {{groupSize} 位成員} other {{groupSize} 位成員}}",
    "teamPermissionSettings.openSpacePermissionItem.description":
      "{num, plural, one {{num} 位人員} other {{num} 位人員}}",
    "teamPermissionSettings.unknownGroup": "未知的群組",
    "teamPermissionsActions.archivedTeam": "已歸檔 {teamName}",
    "teamPermissionsActions.duplicatedTeam": "重複的 {teamName}",
    "teamPermissionsActions.duplicatedTeamNoName": "重複的團隊空間",
    "teamPermissionsActions.joinedTeam": "已加入 {teamName}",
    "teamPermissionsActions.leftTeam": "已離開 {teamName}",
    "teamPermissionsActions.leftTeamNoName": "已離開團隊",
    "teamPermissionsActions.leftYetStillInTeam":
      "你仍在{hasTeamName, select, true {{teamName}} other {團隊}}中，因為你是下列群組的成員：{groupsString}",
    "teamPermissionsActions.removedYetStillInTeam":
      "{hasMemberName, select, true {{memberName}} other {移除的使用者}}仍在{hasTeamName, select, true {{teamName}} other {團隊}}中，因為他們是下列群組的成員：{groupsString}",
    "teamPermissionsActions.restoredTeam": "已恢復 {teamName}",
    "teamPermissionsActions.restoredTeamNoName": "已恢復團隊",
    "teamPermissionsInvite.searchInput.placeholder": "搜尋人員或群組",
    "teamPermissionsInviteOverlay.copyLinkButton.label": "複製邀請連結",
    "teamPermissionsInviteOverlay.inviteModal.addNMembers.groupsAsOwnersTooltip":
      "無法將群組以團隊空間擁有者加入。移除任何群組以繼續。",
    "teamPermissionsInviteOverlay.inviteModal.addNMembers.hasTeamGuestsMatchAllowedDomain":
      "無法將具有 {emailDomains} 的使用者以團隊空間訪客加入。移除它們以繼續。",
    "teamPermissionsInviteOverlay.inviteModal.addNMembers.memberOrGroupInvitedAsTeamGuestTooltip":
      "無法將空間成員或群組以團隊空間訪客加入。移除它們以繼續。",
    "teamPermissionsInviteOverlay.inviteModal.skipForNow": "暫時略過",
    "teamPermissionsInviteOverlayV2.inviteButton.label": "邀請",
    "teamPermissionsInviteWithModal.addMembers.tooltip": "新增成員和群組",
    "teamPermissionsInviteWithModal.addMembersNoPermissions.tooltip":
      "你沒有將成員加入此團隊空間的權限",
    "teamPermissionsInviteWithModal.addMembersToDefaultTeam.tooltip":
      "所有的 {spaceName} 工作區成員都是此團隊空間的成員。",
    "teamPermissionsInviteWithModal.filterGroupsAndMembersInput.placeholder":
      "搜尋成員或群組…",
    "teamPermissionsInviteWithModal.openModal": "加入成員",
    "teamPermissionsMenu.guestItem.caption": "僅限存取受邀的團隊空間。",
    "teamPermissionsMenu.guestItem.label": "團隊空間訪客",
    "teamPermissionsMenu.memberItem.caption":
      "無法編輯團隊空間設定，但能夠存取團隊空間頁面。",
    "teamPermissionsMenu.memberItem.label": "團隊空間成員",
    "teamPermissionsMenu.mobile.doneButton.label": "完成",
    "teamPermissionsMenu.mobile.title": "選擇團隊空間角色",
    "teamPermissionsMenu.ownerItem.caption":
      "可以編輯團隊空間設定和完整存取團隊空間頁面。",
    "teamPermissionsMenu.ownerItem.label": "團隊空間擁有者",
    "teamPermissionsSettings.privateTeam.noAccessLabel":
      "沒有存取權限 • 僅限邀請",
    "teamPermissionsSettings.privateTeam.noAccessTooltip":
      "當團隊空間為私人時，即無法與工作區共用頁面",
    "teamPermissionsSettings.teamspace.disabledPermissionitem.description":
      "團隊空間成員的權限不能低於工作空間成員",
    "teamPermissionsSettings.teamspace.guest.disabledPermissionitem.description":
      "團隊空間訪客不能有完整存取權限。",
    "teamPlan.title": "團隊版",
    "teamSettings.confirmDuplicateTeamName.cancelLabel": "取消",
    "teamSettings.confirmDuplicateTeamName.message":
      "使用相同名稱的團隊空間已存在。確定要將此團隊空間命名為「{teamName}」？",
    "teamSettings.disableDefaultTeam.confirmationModal.confirmButton.label":
      "停止同步團隊空間",
    "teamSettings.disableDefaultTeam.confirmationModal.message":
      "確定要停止將此團隊空間與整個組織同步嗎？目前成員會留在團隊空間中，但不會自動加入新的工作區成員。",
    "teamSettings.disableExportOverride.confirmationTitle":
      "是否確定要允許團隊空間頁面可以匯出？根據預設，此工作區中的頁面無法匯出。",
    "teamSettings.disableGuests.confirmationTitle":
      "是否確定？此團隊空間內所有頁面訪客將被移除。",
    "teamSettings.disableGuestsOverride.confirmationTitle":
      "是否確定要允許訪客可以加入此團隊空間？根據預設，訪客不允許加入此工作區中的團隊空間。",
    "teamSettings.disablePublicPages.confirmationTitle":
      "是否確定？這將移除此團隊空間內任一位非工作區成員或訪客在所有頁面的存取權限。",
    "teamSettings.disablePublicPagesOverride.confirmationTitle":
      "是否確定要允許團隊空間頁面可以設為公開？根據預設，此工作區中的頁面無法設為公開。",
    "teamSettings.enableDefaultTeam.confirmationModal.confirmButton.label":
      "同步團隊空間",
    "teamSettings.enableDefaultTeam.confirmationModal.message":
      "確定要將此團隊空間與整個組織同步嗎？每位工作區成員及未來工作區成員皆會加入此團隊空間。",
    "teamSettings.setTeamPermissions.ClearCustomTeamPermissionsDialogMessage":
      "為所有團隊空間成員提升權限層級後，即會移除部分自訂權限。確定要繼續嗎？",
    "teamSettings.setTeamPermissions.cancelLabel": "取消",
    "teamSettings.workspaceSettingOverride.confirmationButtonLabel":
      "覆寫工作區設定",
    "teamSettingsPermissions.learnMore": "了解團隊空間權限",
    "teamSettingsSecurity.basedOnWorkspaceSettings":
      "根據<underline>工作區設定</underline>",
    "teamSettingsSecurity.dangerZone.archiveTeamButton": "歸檔團隊空間",
    "teamSettingsSecurity.learnMore": "了解團隊空間安全性",
    "teamSettingsSecurity.overridesWorkspaceSettings":
      "覆寫<underline>工作區設定</underline>",
    "teamSettingsSecurity.setting.businessGateToggleTooltip":
      "升級到商業版以變更安全設定",
    "teamSettingsSecurity.setting.enterpriseGateToggleTooltip":
      "升級到企業版以變更安全設定",
    "teamSettingsSecurity.setting.exportTitle": "停用匯出",
    "teamSettingsSecurity.setting.guestTitle": "停用訪客",
    "teamSettingsSecurity.setting.shareTitle": "停用公用頁面共享",
    "teamTrialPlan.title": "團隊版 (試用版)",
    "teamWorkspacesSettings.disableTeamCreation.workspaceOwners.caption":
      "只允許工作區擁有者建立團隊空間",
    "teamWorkspacesSettings.disableTeamCreation.workspaceOwners.title":
      "限制為只有工作區擁有者可以建立團隊空間",
    "teamWorkspacesSettings.disableTeamGuests.confirmDisable.acceptButton":
      "停用並移除團隊空間訪客",
    "teamWorkspacesSettings.disableTeamGuests.confirmDisable.description":
      "此動作會將所有團隊空間訪客自工作區移除。",
    "teamWorkspacesSettings.disableTeamGuests.confirmDisable.message":
      "確定要停用團隊空間訪客嗎？",
    "teamWorkspacesSettings.disableTeamGuests.workspaceOwners.caption":
      "這會允許有成員資格管理員權限的團隊空間擁有者加入團隊空間訪客。停用即會移除所有團隊空間訪客。",
    "teamWorkspacesSettings.disableTeamGuests.workspaceOwners.title":
      "允許團隊空間擁有者加入團隊空間訪客",
    "teamsDropdownForGroupMenu.filterForTeams.placeholder": "篩選團隊空間…",
    "teamsDropdownForMember.filterForTeams.placeholder": "篩選團隊空間…",
    "teamsDropdownForMember.numMembers":
      "{numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    "teamsDropdownForMember.teamsCount.label":
      "{numberOfTeams, plural, other {{numberOfTeams} 個團隊空間}}",
    "teamsDropdownForMember.teamsCountNone.label": "沒有存取權限",
    "teamsDropdownForTeamGuest.teamsCountNone.label": "沒有存取權限",
    "teamsEducationContent.teamsEducationSubtitle": "新側邊欄包含團隊空間",
    "teamsEducationContent.teamsEducationTitle": "Notion 2.18 新功能",
    "teamsEducationModal.doneButtonCta": "知道了",
    "teamsEducationModal.forAdmins.tabButton.joinTeamspace.subtitle":
      "團隊空間可彈性符合組織的所有需求",
    "teamsEducationModal.forAdmins.tabButton.joinTeamspace.title":
      "依部門或投入時間建立團隊空間",
    "teamsEducationModal.forAdmins.tabButton.privacySettings.subtitle":
      "透過需要的確切權限，向所有成員開放你的團隊空間，或是選擇可以加入的人員",
    "teamsEducationModal.forAdmins.tabButton.privacySettings.title":
      "自訂隱私權設定可保護你的團隊空間安全",
    "teamsEducationModal.forAdmins.tabButton.teamspaceOrg.subtitle":
      "團隊空間可供你的團隊整理頁面、權限及成員",
    "teamsEducationModal.forAdmins.tabButton.teamspaceOrg.title":
      "透過團隊空間整理你的工作區",
    "teamsEducationModal.forAdmins.tabButton.turnIntoTeamspaces.subtitle":
      "從現有頁面一鍵建立團隊空間，以便轉移所有子頁面和人員",
    "teamsEducationModal.forAdmins.tabButton.turnIntoTeamspaces.title":
      "將現有頁面轉換成團隊空間",
    "teamsEducationModal.forMembers.tabButton.customizeTeamspace.subtitle":
      "每個團隊空間都可以擁有專屬的外觀與風格、成員及設定",
    "teamsEducationModal.forMembers.tabButton.customizeTeamspace.title":
      "自訂希望的團隊空間模式",
    "teamsEducationModal.forMembers.tabButton.joinTeamspace.subtitle":
      "團隊空間可彈性符合與你團隊進行的任何協作類型",
    "teamsEducationModal.forMembers.tabButton.joinTeamspace.title":
      "依部門或投入時間建立團隊空間",
    "teamsEducationModal.forMembers.tabButton.teamspaceOrg.subtitle":
      "團隊空間可供你的團隊整理頁面、權限及成員",
    "teamsEducationModal.forMembers.tabButton.teamspaceOrg.title":
      "瀏覽及加入相關團隊空間",
    "teamsEducationModal.forMembers.tabButton.teamspaceOwner.subtitle":
      "以擁有者身分管理成員、設定權限及控制設定",
    "teamsEducationModal.forMembers.tabButton.teamspaceOwner.title":
      "成員團隊空間擁有者",
    "teamsEducationModal.learnMoreUrl": "進一步了解團隊空間",
    "teamsEducationModal.nextButtonCta": "下一個",
    "teamsEducationModal.skipMessage": "略過",
    "teamsInGroupMenu.filterForTeams.numMembers":
      "{numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    teamsLearnMoreLink: "了解團隊空間",
    "teamsWorkspaceSettings.defaultTeams.caption":
      "選擇所有全新和目前工作區成員會自動加入的團隊空間。",
    "teamsWorkspaceSettings.defaultTeams.inputPlaceholder":
      "選取預設團隊空間...",
    "teamsWorkspaceSettings.defaultTeams.title": "預設團隊空間",
    "teamsWorkspaceSettings.title": "團隊空間設定",
    "teamsWorkspaceSettings.updateButton.label": "更新",
    "templateChecklist.completed.description":
      "要獲得更多啟發，請轉到 Notion Guides 以提昇技能並探索更多使用 Notion 的新方法。",
    "templateChecklist.completed.header": "你完成了！",
    "templateChecklist.quickNote.a.description":
      "於現實場景中查看文件與知識庫 (A)",
    "templateChecklist.quickNote.a.title": "匯入你的工作區（A）",
    "templateChecklist.quickNote.b.description": "實際查看文件和知識庫 (B)",
    "templateChecklist.quickNote.b.title": "匯入你的工作區（B）",
    "templateChecklist.quickNote.c.description":
      "在現實場景中查看文件與知識庫 (C)",
    "templateChecklist.quickNote.c.title": "匯入你的工作區（C）",
    "templateChecklistHeader.useCaseHeader.databases": "資料庫入門指南",
    "templateChecklistHeader.useCaseHeader.default": "Notion 入門指南",
    "templateChecklistHeader.useCaseHeader.notes": "筆記入門指南",
    "templateChecklistHeader.useCaseHeader.projectManagement":
      "專案和任務入門指南",
    "templateChecklistHeader.useCaseHeader.wiki": "知識庫及文件入門指南",
    "templateDetail.addToPrivate": "加入到私人",
    "templateDetail.addToTeamspace": "加入到團隊空間",
    "templateDetail.customizableFeatures.label": "功能",
    "templateDetail.getTemplateButton.label": "取得模版",
    "templateDetail.madeBy.label": "執行者",
    "templateDetail.relatedTemplates.label": "相關模版",
    "templateGallery.sidebar.category.docs": "Docs",
    "templateGallery.sidebar.life": "生活",
    "templateGallery.sidebar.persona.allTemplates": "所有模板",
    "templateGallery.sidebar.results": "沒有結果",
    "templateGallery.sidebar.searchbar.placeholder": "搜尋模版",
    "templateGallery.sidebar.student": "學生",
    "templateGallery.sidebar.suggested": "建議",
    "templateGallerySidebar.category.showMore": "還有 {numNotShown} 個...",
    "templateGallerySidebar.goToMarketingTemplateGalleryButton.label":
      "更多來自社群的內容",
    "templateHelpers.personas.design": "設計",
    "templateHelpers.personas.education": "教育",
    "templateHelpers.personas.educator": "教育家",
    "templateHelpers.personas.engineering": "開發",
    "templateHelpers.personas.entrepreneur": "企業家",
    "templateHelpers.personas.freelancer": "自由工作者",
    "templateHelpers.personas.gettingStarted": "立即開始",
    "templateHelpers.personas.gettingStartedHighValueActions": "3 步驟入門指南",
    "templateHelpers.personas.humanResources": "人力資源",
    "templateHelpers.personas.it": "IT",
    "templateHelpers.personas.marketing": "市場行銷",
    "templateHelpers.personas.media": "媒體",
    "templateHelpers.personas.other": "其他",
    "templateHelpers.personas.personal": "個人",
    "templateHelpers.personas.productManagement": "產品管理",
    "templateHelpers.personas.productManagementV2": "產品",
    "templateHelpers.personas.sales": "銷售",
    "templateHelpers.personas.student": "學生",
    "templateHelpers.personas.suggestedTemplates": "建議模版",
    "templateHelpers.personas.support": "支持",
    "templateHelpers.personas.truncated.humanResources": "人力資源",
    "templateHelpers.templates.applicantTracker": "招聘跟踪器",
    "templateHelpers.templates.applicantTracker.description":
      "使用此範本在招聘週期管理候選人進度，讓你輕鬆檢視每個候選人資訊、筆記、文件、錄用機會、下一步等項。",
    "templateHelpers.templates.blogPost": "部落格文章",
    "templateHelpers.templates.brandAssets": "品牌資產",
    "templateHelpers.templates.brandAssets.description":
      "此範本透過標記功能讓你輕鬆追蹤品牌素材，像是圖標、圖像及字型，藉由檔案類型或應用程式就能輕鬆分類。",
    "templateHelpers.templates.classDirectory": "班級目錄",
    "templateHelpers.templates.classNotes": "課堂筆記",
    "templateHelpers.templates.classroomHome": "課堂首頁",
    "templateHelpers.templates.clubHomepage": "社團主頁",
    "templateHelpers.templates.companyGoals": "公司目標",
    "templateHelpers.templates.companyHome": "公司內部主頁",
    "templateHelpers.templates.companyHome.description":
      "每個公司都需要能輕鬆找到重要資訊的地方。此範本集結公司所需一切，從宗旨、價值到員工目錄，讓公司順暢營運。",
    "templateHelpers.templates.competitiveAnalysis": "競爭分析",
    "templateHelpers.templates.contentCalendar": "內容行事曆",
    "templateHelpers.templates.contentCalendar.description":
      "使用此範本安排和追蹤所有要發布的內容，從部落格貼文到博客到推文亦然。",
    "templateHelpers.templates.cornellNotesSystem": "康奈爾筆記系統",
    "templateHelpers.templates.courseSchedule": "課程時間表",
    "templateHelpers.templates.designSystem": "設計系統",
    "templateHelpers.templates.designSystem.description":
      "一套讓所有人得到一致資訊的設計系統。使用此範本記載設計模式、素材和品牌，讓團隊每個人可下載素材。",
    "templateHelpers.templates.designTasks": "設計任務",
    "templateHelpers.templates.docs": "Docs",
    "templateHelpers.templates.engineeringWiki": "工程知識庫",
    "templateHelpers.templates.engineeringWiki.description":
      "使用此範本讓工程團隊有單一事實來源瞭解流程、文書資料和專案，建立好的編程習慣，並讓所有人得到一致資訊。",
    "templateHelpers.templates.getStarted": "立即開始",
    "templateHelpers.templates.getStartedOnEvernote": "從 Evernote 開始",
    "templateHelpers.templates.getStartedOnMobile": "行動版入門指南",
    "templateHelpers.templates.goals": "目標",
    "templateHelpers.templates.goalsAndOkrs": "規劃產品發展",
    "templateHelpers.templates.gradeCalculator": "成績計算器",
    "templateHelpers.templates.habitTracker": "習慣追踪器",
    "templateHelpers.templates.helpCenter": "說明中心",
    "templateHelpers.templates.helpCenter.description":
      "此範本讓你建立專屬具備欄位、標題和分頁的協助中心。能輕鬆分享此頁面給使用者並在需要時快速加入支援頁面。",
    "templateHelpers.templates.jobApplications": "工作申請",
    "templateHelpers.templates.jobBoard": "職位公告板",
    "templateHelpers.templates.jobBoard.description":
      "使用此工作範本輕鬆列出及編輯公司職位空缺，讓你可以在此輕量、面向大眾的求職網站即時做出變更。",
    "templateHelpers.templates.journal": "日誌",
    "templateHelpers.templates.lessonPlans": "課程規劃",
    "templateHelpers.templates.lifeWiki": "生活知識庫",
    "templateHelpers.templates.marketingWiki": "营销维基",
    "templateHelpers.templates.mediaList": "媒體清單",
    "templateHelpers.templates.mediaList.description":
      "使用此範本追蹤有關公司的新聞報導以及做出報導的人。分頁幫助你追蹤新聞稿詳情等項。",
    "templateHelpers.templates.meetingNotes": "會議記錄",
    "templateHelpers.templates.moodBoard": "情緒板",
    "templateHelpers.templates.moodBoard.description":
      "適合拼裝活動、產品、品牌宣傳等情緒或靈感的理想範本。",
    "templateHelpers.templates.newHireOnboarding": "新員工入職",
    "templateHelpers.templates.newHireOnboarding.description":
      "入職檢查清單能幫助新聘人員在公司安頓下來。可以狀態、團隊和開始日期進行分類，並按一下進入任何各別卡片檢視該人員的入職工作和註記。",
    "templateHelpers.templates.notes": "筆記與文件",
    "templateHelpers.templates.personalCRM": "個人 CRM",
    "templateHelpers.templates.personalHome": "個人主頁",
    "templateHelpers.templates.processDocs": "流程文件",
    "templateHelpers.templates.productFAQs": "產品常見問題解答",
    "templateHelpers.templates.productFAQs.description":
      "在同一處管理客戶常見支援問題，讓所有人可輕鬆瀏覽。此範本每一列都有其專屬 Notion 頁面，可加入想要的內容。",
    "templateHelpers.templates.productWiki": "產品知識庫",
    "templateHelpers.templates.productWiki.description":
      "使用此範本整理所有的產品相關文書資料，在同一處以易於瀏覽的區塊統整指南和流程。",
    "templateHelpers.templates.projectManagement": "專案與任務",
    "templateHelpers.templates.quickNote": "快速筆記",
    "templateHelpers.templates.readingList": "閱讀清單",
    "templateHelpers.templates.resume": "履歷",
    "templateHelpers.templates.resume.description":
      "在 Notion 工作區中建立亮麗、具功能性的履歷，供公開存取及附帶在工作應徵的連結。寄出履歷之後也可持續改善履歷。",
    "templateHelpers.templates.roadmap": "產品路線圖",
    "templateHelpers.templates.roommateSpace": "室友空間",
    "templateHelpers.templates.salesAssets": "銷售資產",
    "templateHelpers.templates.salesAssets.description":
      "使用此範本讓行銷資產井井有條，可在每個會議隨時使用適當範本、白紙、影片等。也可在此頁面上傳任何種類的檔案，供即時存取和版本控制。",
    "templateHelpers.templates.salesCRM": "銷售 CRM",
    "templateHelpers.templates.salesCRM.description":
      "你的行銷漏斗不需要如 Saas 軟體一般繁冗。此範本提供乾淨畫布，只需定義你想要追蹤點子的領域。",
    "templateHelpers.templates.salesWiki": "銷售知識庫",
    "templateHelpers.templates.salesWiki.description":
      "使用此範本在同一處保存公司的行銷文書資料和專案，讓團隊或組織所有成員輕鬆即時取得重要資訊。",
    "templateHelpers.templates.simpleBudget": "簡單預算",
    "templateHelpers.templates.simpleNotebook": "簡單筆記本",
    "templateHelpers.templates.syllabus": "教學大綱",
    "templateHelpers.templates.taskList": "任務列表",
    "templateHelpers.templates.teamDirectory": "團隊目錄",
    "templateHelpers.templates.teamsGettingStarted": "團隊入門指南",
    "templateHelpers.templates.teamsHomepage": "團隊空間首頁",
    "templateHelpers.templates.thesisPlanning": "論文規劃",
    "templateHelpers.templates.toDo": "待辦事項",
    "templateHelpers.templates.travelPlanner": "旅行規劃",
    "templateHelpers.templates.userResearchDatabase": "使用者調研資料庫",
    "templateHelpers.templates.userResearchDatabase.description":
      "使用此範本排程和追蹤使用者研究的狀態。",
    "templateHelpers.templates.weeklyAgenda": "每週議程",
    "templateHelpers.templates.wiki": "團隊知識庫",
    "templateHelpers.useCase.blogEditorialCalendar": "部落格編輯行事曆",
    "templateHelpers.useCase.blogEditorialCalendar.description":
      "使用此範本搭配可追蹤每個專案狀態、受眾、作者、審核者、發布日期等項的資料庫，以便規劃和撰寫所有行銷內容。",
    "templateHelpers.useCase.blogPost.description":
      "使用此模板當作部落格文章的格式。為你的寫作和影像設定喜歡的格式。透過啟用「分享到網路」功能發佈你的頁面。",
    "templateHelpers.useCase.bookmarks": "書籤",
    "templateHelpers.useCase.brainstorm": "腦力激盪",
    "templateHelpers.useCase.brainstorm.description":
      "此範本能透過闡明需要答案的問題，讓人員井然有序地增加點子並標記自己，以便集中收集團隊點子。",
    "templateHelpers.useCase.bulletJournal": "子彈筆記",
    "templateHelpers.useCase.bulletJournal.description":
      "子彈筆記（有時候稱為 Bujo）非常適合以簡單卻有效的方式，讓你的生活變得井然有序。可用於追蹤你的待辦事項、提醒項目、習慣等更多內容。",
    "templateHelpers.useCase.campaignBrief": "宣傳活動簡介",
    "templateHelpers.useCase.campaignBrief.description":
      "使用此範本簡單向團隊其他成員報告宣傳活動目標、訊息、時間軸等項。可輕鬆新增任何相關支援文件，讓公司所有人充分了解資訊。",
    "templateHelpers.useCase.classDirectory.description":
      "把臉跟名字對在一起。使用此目錄追蹤班級出席和缺席的情況，並且針對計算期末成績或向學生提出回饋的時間點，製作出任一項其他的實用筆記。",
    "templateHelpers.useCase.classNotes.description":
      "將你全部的班級筆記集中在一處保存。此模板讓你輕鬆擷取所有筆記，並依班級、日期及主題貼上標籤。",
    "templateHelpers.useCase.classroomHome.description":
      "為你的學生在班級資訊、課程教材、作業、公告、時間規劃等項提供單一資訊來源。編輯此網頁就像是撰寫任何文件一樣簡單。",
    "templateHelpers.useCase.clubHomepage.description":
      "我們知道學校對你來說可能不只是學校而已。Notion 推出完美的解決方案，供你管理俱樂部、組織及團體專案的資訊。",
    "templateHelpers.useCase.cornellNotesSystem.description":
      "在 1940 年代，康乃爾大學的華特‧波克教授開發出全新筆記系統，為大學生導入組織、濃縮並吸收知識的絕佳方法。以下是 Notion 的版本！",
    "templateHelpers.useCase.courseSchedule.description":
      "此課程時間表提供全方位清單，包括每週主題、閱讀、作業及考試。你可以針對任何教學內容建立專屬類別和主題。",
    "templateHelpers.useCase.dataDeepDive": "資料深入研究",
    "templateHelpers.useCase.dataDeepDive.description":
      "使用此範本協作分析資料和追蹤深入解析。使用連結預覽簡化來自外部工具的資訊，像是 Amplitude 或 Hex。",
    "templateHelpers.useCase.designPortfolio": "設計組合",
    "templateHelpers.useCase.designPortfolio.description":
      "使用此範本展示正在進行中的創意專案，提供目的相關脈絡以及您和團隊追蹤的研發進度。",
    "templateHelpers.useCase.designSprint": "設計迭代",
    "templateHelpers.useCase.designSprint.description":
      "此範本設計為幫助設計團隊從創意發想到完成專案期間，依據使用者回饋持續追蹤和迭代專案。",
    "templateHelpers.useCase.employeeBenefits": "員工福利",
    "templateHelpers.useCase.employeeBenefits.description":
      "此範本適合說明公司福利和連結所有必要資訊，讓員工感到受重視且充分了解情況。",
    "templateHelpers.useCase.engineeringTechSpec": "工程技術規格",
    "templateHelpers.useCase.engineeringTechSpec.description":
      "使用此範本整理專案啟動、傳遞必要脈絡，讓團隊成員快速掌握和了解狀況。",
    "templateHelpers.useCase.experimentResults": "實驗結果",
    "templateHelpers.useCase.experimentResults.description":
      "使用此範本追蹤實驗及其結果。任何團隊的每個人都能使用資料庫範本快速新增實驗。",
    "templateHelpers.useCase.fitnessTracker": "健身追蹤器",
    "templateHelpers.useCase.freelanceDashboard": "自由工作者儀表板",
    "templateHelpers.useCase.freelanceDashboard.description":
      "自由工作者會在各個客戶和他們的任務之間往來。我們製作的模板有助於簡化每日的接案操作，讓你永遠不錯過截稿日期。",
    "templateHelpers.useCase.goalTracker": "目標追蹤器",
    "templateHelpers.useCase.goalTracker.description":
      "制定目標不需要這麼複雜。此模板可用來計算完成的子任務，藉此追蹤目標進展。非常適用於透過按部就班的方式達成目標。",
    "templateHelpers.useCase.gradeCalculator.description":
      "了解每項作業、考試及專案對期末成績的價值，為你的學季或學期制定策略。並可用此模板即時追蹤你的成績並提出相應的計畫。",
    "templateHelpers.useCase.habitTracker.description":
      "透過追蹤每日習慣學會負起責任。在習慣追蹤器資料庫中建立新的屬性，藉此養成新的習慣。當你每天打勾完成項目時即可看到進度環闔上！",
    "templateHelpers.useCase.individualOKRs": "個人 OKR",
    "templateHelpers.useCase.individualOKRs.description":
      "此模板提供回顧、記錄及安排季度或年度個人 OKR 的結構。這也包括供你檢閱每月、每季或每年進度的區段。",
    "templateHelpers.useCase.interviewGuide": "面試指南",
    "templateHelpers.useCase.interviewGuide.description":
      "使用此範本讓工作候選人準備面試，提供實用資源，像是影片、連結、排程等項。",
    "templateHelpers.useCase.investorUpdate": "投資者動態",
    "templateHelpers.useCase.investorUpdate.description":
      "與其向投資者傳送尋常雜亂的電子郵件動態，不如使用此範本，以更全面且易消化吸收的外觀提供公司進度。",
    "templateHelpers.useCase.jobApplication.description":
      "追蹤整個工作申請過程，全都集中在同一個頁面。輕鬆加入自訂履歷、求職信及作品集，同時追蹤你已聯絡的公司。",
    "templateHelpers.useCase.journal.description":
      "記錄你的生活：每天發生的事情、特殊場合及目標回顧。使用標籤分類項目並自動擷取日期。",
    "templateHelpers.useCase.languageLearningFlashCards.description":
      "使用此模板在教學卡片型系統升級你的詞彙庫。我們加入了法文單字協助你開始使用，但你可以隨意加入更多不同語言的片語和單字！",
    "templateHelpers.useCase.languageLearningFlashcards": "語言學習教學卡片",
    "templateHelpers.useCase.lessonPlans.description":
      "這些課程方案的基礎是哈佛商學院的有效課程準備要素。讓你輕鬆追蹤他們的狀態、將所有相關筆記保留在一處，然後不斷進步。",
    "templateHelpers.useCase.lifeWiki.description":
      "透過這塊全面儀表板，規劃並追蹤你的完整生活。制定目標、追蹤每日習慣並維護所有個人讀物的記錄，充分掌控你的成長情況。",
    "templateHelpers.useCase.mealPlannerV2": "膳食規劃器",
    "templateHelpers.useCase.movieShowTracker": "電影和節目追蹤器",
    "templateHelpers.useCase.movieShowTracker.description":
      "使用此模板即時追蹤你最愛的電影和節目推薦。加入已觀看（或想觀看）的電影或節目，然後填入追蹤個人想法的屬性。",
    "templateHelpers.useCase.oneOnOneNotes": "1:1 筆記",
    "templateHelpers.useCase.oneOnOneNotes.description":
      "此範本適合在同一處保存所有 1:1 筆記和文件。可加入每個會議的日期，甚至隨一週工作進度檢查行動項目。",
    "templateHelpers.useCase.peopleDirectory": "人員目錄",
    "templateHelpers.useCase.peopleDirectory.description":
      "協助團隊使用此範本追蹤每個人的角色。每張卡片都可以更新，方便儲存員工簡歷、過去成就、目標等項。",
    "templateHelpers.useCase.personalCRM.description":
      "追蹤你遇到的所有人、你對他們的了解、聯絡的時間點，以及他們是不是專業的聯絡人。成為能夠隨時追蹤進度，並且知道該送什麼禮物的人。",
    "templateHelpers.useCase.personalHome.description":
      "就像是知識庫有助於在公司某處的中央位置保留所有重要資訊，個人知識庫也能夠為你的生活提供實用的知識基礎。",
    "templateHelpers.useCase.personalNotebook": "筆記本",
    "templateHelpers.useCase.plantTracker": "植物追蹤器",
    "templateHelpers.useCase.plantTracker.description":
      "每個人都想成為植物照顧者，但絕對比看起來更加困難。使用此模板追蹤你的植物，包括澆水時間表、最佳溫度，以及每株植物的進度圖。",
    "templateHelpers.useCase.portfolio": "作品集",
    "templateHelpers.useCase.portfolio.description":
      "作品集非常適合讓你在網路上展示工作成果，但處理程式碼的過程真的會讓人卻步。使用 Notion 的「分享到網路」功能，將你的頁面立即轉換為可分享的網站。",
    "templateHelpers.useCase.presentation": "介紹",
    "templateHelpers.useCase.presentation.description":
      "使用此範本呈現新點子和狀態動態給團隊，以可輕鬆更新和掃描的方式進行整理。",
    "templateHelpers.useCase.productLaunchBrief": "產品發布簡介",
    "templateHelpers.useCase.productLaunchBrief.description":
      "使用此範本和您的團隊在同一個集中頁面規劃及執行發布。",
    "templateHelpers.useCase.productSpec": "產品規格",
    "templateHelpers.useCase.productSpec.description":
      "產品規格應包含所有團隊需要建立新事物的資訊。使用此範本作為真實來源給予脈絡，設定目標，查看邊緣案件並規劃發展步驟。",
    "templateHelpers.useCase.productTeamUpdate": "產品團隊動態",
    "templateHelpers.useCase.productTeamUpdate.description":
      "使用此範本，透過通知組織有關產品新動態和期望事項，建立信任並鼓勵跨職能合作。",
    "templateHelpers.useCase.projectRetrospective":
      "使用此範本分析專案成功（或相對缺失）原因，並建立能幫助團隊避免重複過去錯誤的行動項目。",
    "templateHelpers.useCase.projectRetrospective.description": "專案回顧",
    "templateHelpers.useCase.quickNote.description":
      "此模板可為你呈現許多不同內容類型的感受，在加入的同時針對任何情況快速做筆記。其包括待辦清單、網頁書籤、子標題等更多項目！",
    "templateHelpers.useCase.readingList.description":
      "現代閱讀清單不是只有書籍而已。我們建立了儀表板協助你追蹤所有文章、影片、Podcast、部落格文章、Twitter 推文以及...沒錯，書籍。",
    "templateHelpers.useCase.recruitingTracker": "招聘追蹤器",
    "templateHelpers.useCase.recruitingTracker.description":
      "此範本讓公司輕鬆了解員工人數，包括工作職缺和相關詳情，像是角色、狀態、地點等項。",
    "templateHelpers.useCase.roommateHome": "室友首頁",
    "templateHelpers.useCase.roommateHome.description":
      "將這當作你的首頁，即可輕鬆遵守規則、追蹤共用的財務、確保每個人都滿意空間的使用方式等更多功能。",
    "templateHelpers.useCase.simpleBudget.description":
      "追蹤你的消費以達成財務目標。為你的消費設定每月上限，然後將開銷輸入下方資料庫。使用不同的資料庫視圖，以不同方式查看你的開銷。",
    "templateHelpers.useCase.socialMediaCalendar": "社群媒體行事曆",
    "templateHelpers.useCase.socialMediaCalendar.description":
      "使用此範本在同一個簡易資料庫草擬、計劃和撰寫所有社群貼文。可在行事曆中檢視自己的貼文，檢視時間軸或切換至更廣泛檢視畫面查看平台使用。",
    "templateHelpers.useCase.studentDashboard": "學生儀表板",
    "templateHelpers.useCase.studentDashboard.description":
      "無論是課程到行事曆，還是個人專案到俱樂部聚會和活動，你都可以使用此模板保持井然有序、專注及靈感，進而展開成功的學年。",
    "templateHelpers.useCase.subscriptionTracker": "訂閱追蹤器",
    "templateHelpers.useCase.subscriptionTracker.description":
      "未使用的週期性訂閱很容易讓人忘記。使用此模板即時追蹤使用中訂閱的資訊，並了解下一次付款到期的時間。",
    "templateHelpers.useCase.syllabus.description":
      "建立可供學生在網路上輕鬆存取的數位課程大綱。Notion 讓建立網頁就像是在文件中打字一樣簡便。只要將此範例內容換成你的內容就好了！",
    "templateHelpers.useCase.teamDocs": "Docs",
    "templateHelpers.useCase.teamHome": "團隊首頁",
    "templateHelpers.useCase.teamMeetingNotes": "會議記錄",
    "templateHelpers.useCase.teamTasks": "團隊任務",
    "templateHelpers.useCase.teamWiki": "團隊知識庫",
    "templateHelpers.useCase.teamWiki.description":
      "此範本讓公司每個團隊建立和管理可整理流程、專案和特定工作知識的個人化首頁。",
    "templateHelpers.useCase.thesisPlanning.description":
      "將此設定為規劃及撰寫博碩士論文的首頁。該頁面會協助你就潛在主題進行腦力激盪與評估程序，同時保留分別附有個人筆記的完整資源清單。",
    "templateHelpers.useCase.todos": "待辦事項",
    "templateHelpers.useCase.travelPlanner.description":
      "旅行規劃很容易變成一團混亂，然後你會發現到處都是不同的文件和資訊。只要使用此模板，即可將所有必要的計畫細節集中在一處管理。",
    "templateHelpers.useCase.visionAndStrategy": "願景和策略",
    "templateHelpers.useCase.visionAndStrategy.description":
      "使用此範本將組織的指導原則集中同一處，讓員工輕鬆存取並參考。",
    "templateHelpers.useCase.weeklyTodo": "每週待辦清單",
    "templateHelpers.useCase.weeklyTodo.description":
      "使用此模板規劃並整理你必須在下週完成的所有工作。利用協助你排定優先順序的議程，視覺化呈現最重要的待辦事項。",
    "templateMessages.teamHome.creative": "創意工作首頁",
    "templateMessages.teamHome.educator": "教育工作者首頁",
    "templateMessages.teamHome.eng": "工程首頁",
    "templateMessages.teamHome.finance": "金融首頁",
    "templateMessages.teamHome.hr": "人力資源首頁",
    "templateMessages.teamHome.internalCommunication": "內部通訊首頁",
    "templateMessages.teamHome.itAdmin": "IT 管理員首頁",
    "templateMessages.teamHome.knowledgeManagement": "知識管理首頁",
    "templateMessages.teamHome.marketing": "行銷首頁",
    "templateMessages.teamHome.operations": "營運首頁",
    "templateMessages.teamHome.other": "團隊首頁",
    "templateMessages.teamHome.product": "產品管理首頁",
    "templateMessages.teamHome.productDesign": "產品設計首頁",
    "templateMessages.teamHome.projectProgramMgmt": "專案/計劃管理首頁",
    "templateMessages.teamHome.sales": "銷售首頁",
    "templateMessages.teamHome.support": "客戶服務首頁",
    "templateMessages.workspaceNameHome": "{workspaceName} 首頁",
    "templatePicker.add new.label": "新增",
    "templatePicker.databaseTemplates.label": "資料庫",
    "templatePicker.deviceOffline.goOnlinePrompt":
      "{isMobileDevice, select, true{按這裡以繼續建立空白頁面。請連接網路以使用模版。}other{按 Enter 鍵以繼續建立空白頁面。請連接網路以使用模版。}}",
    "templatePicker.isTemplate.emptyPagePrompt":
      "{isMobileDevice, select, true{按此處建立空白頁面。}other{按 Enter 鍵建立空白頁面。}}",
    "templatePicker.mobileCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按這裡以繼續建立空白頁面}other{按這裡以繼續建立空白頁面，或<templatebutton>建立模版</templatebutton>}}",
    "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt":
      "按一下這裡繼續…",
    "templatePicker.mobileTabletEmptyPage.withTemplates.prompt":
      "點擊這裡以繼續建立空白頁面，或是挑選模版",
    "templatePicker.mobileTemplatePicker.databaseTemplateSection.label":
      "資料庫",
    "templatePicker.more.label": "更多",
    "templatePicker.notionAI.label": "透過 AI 助理建立 <icon></icon> 草稿",
    "templatePicker.webCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按 Enter 鍵以繼續建立空白頁面}other{按 Enter 鍵以繼續建立空白頁面，或<templatebutton>建立模版</templatebutton>}}",
    "templatePicker.webEmptyPage.withTemplates.prompt":
      "{isTemplate, select, true{按 Enter 鍵以繼續建立空白頁面，或是挑選模版}other{按 Enter 鍵以繼續建立空白頁面，或是挑選模版（↑↓ 來選擇）}}",
    "templatePickerHelpers.basicTemplateItems.empty": "空白頁面",
    "templatePickerHelpers.basicTemplateItems.emptyWithIcon":
      "空白頁面（圖示）",
    "templatePickerHelpers.basicTemplateItems.import": "匯入",
    "templatePickerHelpers.basicTemplateItems.templates": "模版",
    "templatePickerHelpers.databaseTemplateNames.board": "看板",
    "templatePickerHelpers.databaseTemplateNames.boardView": "看板視圖",
    "templatePickerHelpers.databaseTemplateNames.calendar": "行事曆",
    "templatePickerHelpers.databaseTemplateNames.calendarView": "行事曆視圖",
    "templatePickerHelpers.databaseTemplateNames.gallery": "圖庫",
    "templatePickerHelpers.databaseTemplateNames.galleryView": "圖庫視圖",
    "templatePickerHelpers.databaseTemplateNames.list": "列表",
    "templatePickerHelpers.databaseTemplateNames.listView": "清單視圖",
    "templatePickerHelpers.databaseTemplateNames.table": "表格",
    "templatePickerHelpers.databaseTemplateNames.tableView": "表格視圖",
    "templatePickerHelpers.databaseTemplateNames.timeline": "時程表",
    "templatePickerHelpers.databaseTemplateNames.timelineView": "時程表視圖",
    "templatePickerHelpers.mobileBasicTemplateItems.emptyPage": "空白頁面",
    "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon":
      "空白頁面（圖示）",
    "temporaryPasscodeLoginEmail.copyPasteCodeNoLink.prompt":
      "{hasExistingUser, select, true {複製並貼上此臨時登入碼： } other {複製並貼上此臨時註冊碼： }}",
    "temporaryPasscodeLoginEmail.copyPasteCodeWithLink.prompt":
      "{hasExistingUser, select, true {或複製並貼上此臨時登入碼： } other {或複製並貼上此臨時註冊碼： }}",
    "temporaryPasscodeLoginEmail.loginCode.subjectLine":
      "你的臨時 Notion 登入碼為 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.magicLink.text":
      "{hasExistingUser, select, true {按一下這裡使用此魔法連結登入} other {按一下這裡使用此魔法連結註冊}}",
    "temporaryPasscodeLoginEmail.noNotionAccount.text":
      "我們找不到此電子郵件地址上的帳號。",
    "temporaryPasscodeLoginEmail.noRequest.text":
      "{hasExistingUser, select, true {如果你未嘗試登入，則可以安全地忽略此電子郵件。} other {如果你沒有嘗試註冊，則可以放心忽略此電子郵件。}}",
    "temporaryPasscodeLoginEmail.setPermanentPassword.text":
      "提示：你可以在「設定與成員」&rarr;「我的帳號」中設定永久密碼。",
    "temporaryPasscodeLoginEmail.signupCode.subjectLine":
      "你的 Notion 註冊碼為 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.titleOfEmail":
      "{hasExistingUser, select, true {登入} other {註冊}}",
    "text.commandsMenuNotOpen.aiAssist.placeholder":
      "+ 開啟 AI 輔助，/ 開啟指令",
    "text.commandsMenuNotOpen.assist.placeholder": "+ 開啟輔助，/ 開啟指令",
    "text.commandsMenuNotOpen.placeholder": "輸入「/」開啟命令…",
    "text.commandsMenuNotOpen.placeholder.ai":
      "輸入「空格」開啟 AI，「/」開啟命令…",
    "text.commandsMenuNotOpen.placeholder.textAi": "命令按“/”，AI按“空间键”。",
    "text.commandsMenuOpen.placeholder": "輸入以篩選…",
    "text.truncated.showMoreLabel": "更多",
    "textRenderHelpers.commentMention.attachments.title":
      "{numberOfAttachments, plural, other {{numberOfAttachments} 個附件}}",
    "textRenderHelpers.commentMention.noAccess.title": "無法存取頁面評論",
    "textRenderHelpers.commentMention.untitledPlaceholder": "無標題",
    "textRenderHelpers.formulaValueMention.unknownValue": "未知值",
    "textRenderHelpers.pageMention.untitledPlaceholder": "無標題",
    "textRenderHelpers.untitledTextAsString": "無標題",
    "timeInput.invalid": "無效時間",
    "timeUtils.durationDescriptor.compactDay": "{numDays} 天前",
    "timeUtils.durationDescriptor.compactHour": "{numHours} 小時前",
    "timeUtils.durationDescriptor.compactMinute": "{numMinutes} 分鐘前",
    "timeUtils.durationDescriptor.compactSecond": "剛剛發生",
    "timeUtils.durationDescriptor.compactYear": "{numYears} 年前",
    "timeUtils.durationDescriptor.day":
      "{numDays, plural, other {{numDays} 天前}}",
    "timeUtils.durationDescriptor.hour":
      "{numHours, plural, other {{numHours} 小時前}}",
    "timeUtils.durationDescriptor.intervalDay":
      "{numDays, plural, other {{numDays} 天}}",
    "timeUtils.durationDescriptor.intervalHour":
      "{numHours, plural, other {{numHours} 小時}}",
    "timeUtils.durationDescriptor.intervalMinute":
      "{numMinutes, plural, other {{numMinutes} 分鐘}}",
    "timeUtils.durationDescriptor.intervalSecond":
      "{numSeconds, plural, other {{numSeconds} 秒}}",
    "timeUtils.durationDescriptor.intervalYear":
      "{numYears, plural, other {{numYears} 年}}",
    "timeUtils.durationDescriptor.minute":
      "{numMinutes, plural, one {{numMinutes} 分鐘前} other {{numMinutes} 分鐘前}}",
    "timeUtils.durationDescriptor.second": "剛剛發生",
    "timeUtils.durationDescriptor.year":
      "{numYears, plural, other {{numYears} 年前}}",
    "timeline.itemPlaceholder.nest.addSubitemWithPropertyName":
      "{propertyName} 的新頁面",
    "timeline.itemPlaceholder.newPage": "新頁面",
    "timelineItem.itemName.placeholder": "輸入名稱…",
    "timezonePicker.timezoneSearch.noResults": "沒有結果",
    "timezonePicker.timezoneSearch.placeholder": "搜尋時區…",
    "timezonePicker.timezoneSearch.subtitle": "選擇時區",
    "timezonePicker.timezoneSearch.title": "時區",
    "todoBlock.placeholder": "待辦事項",
    "toggleBlock.emptyBlock.placeholderText":
      "空的折疊列表。按一下或拖動區塊到這裡。",
    "toggleBlock.placeholder": "折疊列表",
    "toggleBlockFormat.emptyBlock.placeholderText":
      "空的折疊列表。按一下或拖動區塊到這裡。",
    "topbar.addConnections.newBadge": "全新功能",
    "topbar.commentsButton.closeSidebartTooltip": "關閉所有評論",
    "topbar.commentsButton.openSidebartTooltip": "查看所有評論",
    "topbar.commentsButton.title": "評論",
    "topbar.connectionSection.addConnectionToolTip.label": "按一下加入連線",
    "topbar.connectionSection.connectBotConfirmation.label":
      "{botName} 將擁有此頁面和所有子頁面的權限。要繼續嗎？",
    "topbar.connectionSection.connectIntegrationConfirmation.label":
      "{integrationName} 為第三方合作夥伴開發，你將被重新導向 Notion 之外的頁面以授權此連線。要繼續嗎？",
    "topbar.connectionSection.connectionIntegration.label": "{connectionName}",
    "topbar.connectionSection.disconnectInsufficientPermissions.label":
      "你沒有足夠權限移除此連線。",
    "topbar.connectionSection.disconnectIntegration.label": "中斷頁面的連接",
    "topbar.connectionSection.disconnectIntegrationConfirmation.label":
      "{botName} 將自此頁面及所有子頁面移除。是否繼續進行？",
    "topbar.connectionSection.disconnectIntegrationFromParent.label":
      "中斷父頁面的連接",
    "topbar.connectionSection.guestIntegrationToolTip.label":
      "系統會將你重新導向到 Notion 之外以授權 {integrationName}。",
    "topbar.connectionSection.label": "連線",
    "topbar.connectionSection.parentPage.label": "安裝來源",
    "topbar.connectionSection.restrictAccept.label": "限制存取權限",
    "topbar.connectionSection.restrictIntegration.label": "限制",
    "topbar.connectionSection.restrictIntegrationConfirmation.label":
      "確定要移除此權限並限制存取權限嗎？此頁面將不再分享父頁面的設定。",
    "topbar.connectionSection.searchSuggested.label": "建議的連線",
    "topbar.connectionSection.slackConnected.label": "已連接 Slack 頻道",
    "topbar.connectionSection.slackEmpty.label": "Slack",
    "topbar.connectionsSection.addConnections.label": "加入連線",
    "topbar.connectionsSection.capabilities.label": "功能",
    "topbar.connectionsSection.connectionLoading.label": "連線載入中…",
    "topbar.connectionsSection.connectionMore.label": "更多",
    "topbar.connectionsSection.connectionSearchError.label": "出了些問題",
    "topbar.connectionsSection.connectionSearchResult.label": "{name}",
    "topbar.connectionsSection.fromParenPage.label": "安裝來源",
    "topbar.connectionsSection.manageConnections.label": "管理連線",
    "topbar.connectionsSection.noSearchResults.label": "沒有結果",
    "topbar.connectionsSection.searchConnections.label": "尋找連線",
    "topbar.connectionsSection.topbarMoreConnectionsSubMenu.label":
      "搜尋連線...",
    "topbar.favoriteButton.activeTitle": "已加入最愛",
    "topbar.favoriteButton.activeTooltip1": "從側邊欄隱藏此頁面",
    "topbar.favoriteButton.title": "加入最愛",
    "topbar.favoriteButton.tooltip1": "將此頁面固定在側邊欄中",
    "topbar.moreButton.collectionHelpButton": "了解資料庫",
    "topbar.presenceIndicator.hiddenUsers.lastViewedBy.tooltip": "上次查看者",
    "topbar.presenceIndicator.hiddenUsers.otherCount.message":
      "{hiddenUsersCount, plural, other {+{hiddenUsersCount}}}",
    "topbar.presenceIndicator.hiddenUsers.viewingNow.tooltip": "現在查看",
    "topbar.presenceIndicator.lastViewedTime.tooltip": "{timeFromNow}查看過",
    "topbar.presenceIndicator.viewingNow.tooltip": "正在查看",
    "topbar.presenceIndicator.viewingNowWithLocation.tooltip":
      "正在查看。按一下以查看他的位置。",
    "topbar.publicPage.comment": "評論",
    "topbar.publicPage.cta.label.open": "開啟 Notion",
    "topbar.publicPage.cta.label.try": "試用 Notion",
    "topbar.publicPage.cta.label.try.V1": "免費試用 Notion",
    "topbar.publicPage.cta.label.try.V2": "註冊 Notion",
    "topbar.publicPage.cta.label.try.V3": "試用 Notion",
    "topbar.publicPage.cta.label.try.V4": "免費試用 Notion",
    "topbar.publicPage.cta.label.try.V5": "註冊 Notion",
    "topbar.publicPage.duplicateButton.label": "儲存複本",
    "topbar.publicPage.edit": "編輯",
    "topbar.publicPage.searchButton.label": "搜尋",
    "topbar.shareButton.title": "分享",
    "topbar.shareButton.tooltip": "分享或發表到網路上",
    "topbar.startPublicEditDialog.continueLabel": "繼續",
    "topbar.startPublicEditDialog.message":
      "當你開始編輯時，頁面所有者將可以看到你的姓名，電子郵件地址和頭像。",
    "topbar.suggestedConnectionSection.label": "建議的連線",
    "topbar.updatesButton.closeSidebartTooltip": "關閉所有更新",
    "topbar.updatesButton.emptyState": "此頁面尚未進行編輯。",
    "topbar.updatesButton.openSidebartTooltip": "查看所有更新",
    "topbar.updatesButton.slackIntegrationButton.activeTitle": "基於",
    "topbar.updatesButton.slackIntegrationButton.connectedCaption":
      "已連接 Slack 頻道",
    "topbar.updatesButton.slackIntegrationButton.disconnectTooltip":
      "解除連接 Slack 頻道，藉此停止接收此頁面及其子頁面的更新。",
    "topbar.updatesButton.slackIntegrationButton.loading": "載入中…",
    "topbar.updatesButton.slackIntegrationButton.title": "連接 Slack 頻道",
    "topbar.updatesButton.slackIntegrationButton.tooltip":
      "連接 Slack 頻道以取得有關此頁面及其中頁面的更新。",
    "topbar.updatesButton.title": "更新",
    "topbar.updatesButton.tooltip": "查看此頁面過去的變更",
    "topbarBrowserHistoryButton.goForwardButton.label": "前進",
    "topbarBrowserHistoryButton.newTabButton.label": "新分頁",
    "topbarBrowserHistoryButtons.goBackButton.label": "回退",
    "topbarMobile.addToPageOrWorkspaceSectionButton.label": "加入到",
    "topbarMobile.addToPrivateSectionButton.label":
      "<mediumcolor>加入到</mediumcolor>{userAvatar}<mediumweight>私人頁面</mediumweight>",
    "topbarMobile.backButton.label": "返回",
    "topbarMobile.cancelQuickAddButton.label": "取消",
    "topbarMobile.commentsMenu.title": "評論",
    "topbarMobile.offline.message": "你處於離線狀態",
    "topbarMoreButton.loggedOut.tooltip": "更多…",
    "topbarMoreButton.mobileActionsMenu.title": "動作",
    "topbarMoreButton.tooltip": "樣式、匯出等…",
    "topbarPresence.presenceIndicator.hiddenUsers.moreUsersNotViewing.tooltip":
      "其他 {notViewingMoreUsersCount} 位…",
    "transactionErrors.activityEditsMaxSize.message":
      "你已超出每頁的編輯次數上限。",
    "transactionErrors.atLeastOneAdminInWorkspace.message":
      "你的工作區中至少必須有一個管理員。",
    "transactionErrors.atLeastOneDefaultTeam.message":
      "你的工作區中至少必須有一個預設團隊空間。",
    "transactionErrors.blockContentMaxSize.message":
      "你已超出每頁的內容數量上限。",
    "transactionErrors.blockPermissionsMaxSize.message":
      "你已超出每頁的最大權限。",
    "transactionErrors.blockPropertiesMaxSize.message":
      "你已超出每頁的最大屬性大小。",
    "transactionErrors.blocksInsideThemselvesNotAllowed.message":
      "糟糕！區塊無法在自己內部移動。",
    "transactionErrors.cannotArchiveOnlyDefaultTeam.message":
      "無法歸檔此團隊空間，因為其為此工作區中唯一的預設團隊空間。",
    "transactionErrors.cannotDeleteSprintsStatusPropertySchema":
      "狀態屬性無法自 Sprint 架構中刪除。",
    "transactionErrors.cannotDeleteWikiOwnerProeprty":
      "擁有者屬性無法自知識庫中刪除。",
    "transactionErrors.cannotDowngradeSelfIfOnlyOwner.message":
      "無法將你自己降級為成員，因為團隊空間至少必須有一位擁有者。",
    "transactionErrors.cannotInviteGuestsByNonAdminAndNonTeamOwner":
      "只有也是工作區（成員資格）管理員的團隊空間擁有者可以邀請人員作為團隊空間訪客。",
    "transactionErrors.cannotInviteGuestsToTeam":
      "無法邀請非此工作區成員的人員加入此團隊空間。",
    "transactionErrors.cannotInviteSpaceMembersAsTeamGuests":
      "無法邀請工作區成員作為團隊空間訪客。",
    "transactionErrors.cannotInviteTeamGuestsIfSpaceDisableTeamGuests":
      "如果空間設定已停用，則無法邀請團隊空間訪客。",
    "transactionErrors.cannotInviteTeamGuestsWithMatchingEmailDomains":
      "無法邀請電子郵件符合空間允許網域的團隊空間訪客。",
    "transactionErrors.cannotJoinAsTeamGuestIfSpaceMember.message":
      "如果你是團隊空間成員，即無法以團隊空間訪客的身分加入團隊。",
    "transactionErrors.cannotJoinClosedTeam.message":
      "無法加入封閉式團隊空間。請聯絡團隊空間擁有者以收到邀請。",
    "transactionErrors.cannotJoinPrivateTeam.message":
      "無法加入私人團隊空間。請聯絡團隊擁有者以收到邀請。",
    "transactionErrors.cannotMutateSprintsStatusPropertySchema":
      "Sprint 狀態屬性架構無法修改。",
    "transactionErrors.cantAddNewMembersFromThisJurisdiction":
      "我們目前不允許此司法管轄區的客戶新增成員。",
    "transactionErrors.collectionSchemaMaxSize.message":
      "你已超出資料庫屬性架構大小的上限。",
    "transactionErrors.commentOnlyAccessCantMovePage.message":
      "抱歉，你無法移動此頁面，因為你只有＂只能評論＂的存取權限。",
    "transactionErrors.convertFromAutoIncrementIdProperty":
      "ID 屬性無法轉換為任何其他屬性",
    "transactionErrors.convertToAutoIncrementIdProperty":
      "其他屬性無法轉換為 ID 屬性",
    "transactionErrors.corruptCollectionProperty":
      "你的屬性變更無法儲存，因為其造成中繼資料損毀。",
    "transactionErrors.databaseSyncsOverLimit": "你已達同步資料庫限制。",
    "transactionErrors.duplicateAutoIncrementIdProperty":
      "一個資料庫只能有一個 ID 屬性，而你已經有一個。",
    "transactionErrors.duplicateGuestMembershipRequest": "你已提交成員要求。",
    "transactionErrors.guestMembershipRequestOff":
      "此工作區已關閉訪客成員要求。",
    "transactionErrors.guestsInvitedTooQuickly.message":
      "你太快邀請訪客進入工作區。請稍後再試一次。",
    "transactionErrors.guestsNotAllowed.message": "此工作區不允許訪客。",
    "transactionErrors.guestsoverLimit.message":
      "此工作區已達最大訪客數（5 位）。",
    "transactionErrors.missingWikiOwnerProperty": "知識庫缺少擁有者屬性。",
    "transactionErrors.movingPagesToOtherWorkspacesNotAllowed.message":
      "此工作區已禁用將頁面移動到其他工作區。",
    "transactionErrors.noPermissionToMove":
      "你沒有權限將此頁面移動到想要的地點。",
    "transactionErrors.nonApiMovesNotAllowed.message":
      "請重新整理（Cmd / Ctrl + R）以更新Notion 後便可將頁面移動到其他工作區。",
    "transactionErrors.nonOwnersCannotSetIsDefault":
      "只有團隊空間所有者可以設置團隊空間的默認狀態。",
    "transactionErrors.publicAccessNotAllowed.message":
      "此工作區不允許具有公開存取權限的頁面。",
    "transactionErrors.publicAccessNotAllowedInTeam.message":
      "此團隊不允許公開存取。",
    "transactionErrors.reorderingSpacePagesNotAllowed":
      "你無法重新排序工作區的分區，因為此工作區已啟用團隊空間。",
    "transactionErrors.searchEngineIndexingNotAllowed.message":
      "此工作區不允許公用頁面被搜尋引擎收錄。",
    "transactionErrors.spaceAllowedEmailDomainMatchesNoMembers.message":
      "允許的電子郵件網域至少必須符合一位成員。",
    "transactionErrors.spaceDomainNotAvailable.message": "抱歉，此網域不可用。",
    "transactionErrors.spaceEducationalEmailDomainNotAllowed.message":
      "很抱歉，不允許教育網域：{domain}",
    "transactionErrors.spaceEmailDomainNotAllowed.message":
      "抱歉，不允許使用此網域： {domain}",
    "transactionErrors.syncedDatabaseForbiddenAutoIncrementIdProperty":
      "已同步的資料庫不能有 ID 屬性",
    "transactionErrors.teamDescriptionTooLong.message":
      "團隊空間說明必須少於 {maxTeamDescriptionLength} 個字元。",
    "transactionErrors.teamLevelGuestsNotAllowed.message":
      "此團隊空間不允許訪客。",
    "transactionErrors.teamNameEmpty.message": "團隊空間名稱不可空白。",
    "transactionErrors.teamNameTooLong.message":
      "團隊空間名稱必須少於 {maxTeamNameLength} 個字元。",
    "transactionErrors.teamPageEditOperationNotAllowed.message":
      "抱歉，你無法在此團隊空間加入或移除頁面。",
    "transactionErrors.teamTopLevelOperationNotAllowed.message":
      "只有團隊空間所有者可以編輯團隊空間側邊欄頁面。",
    "transactionErrors.teamTopLevelPageMismatch.message":
      "此頁面與其團隊空間不同步。",
    "transactionErrors.upgradeClientIsNeeded.message":
      "請重新整理 (Cmd/Ctrl + R) 以更新 Notion，並再試一次。",
    "transactionErrors.wikiForbiddenAutoIncrementIdProperty":
      "知識庫不能有 ID 屬性",
    "transactionErrors.workspaceTopLevelOperationNotAllowed.message":
      "此工作區已鎖定修改側邊欄的工作區部分。",
    "transactionHelpers.requestTooLargeError.message":
      "抱歉，此要求太大。嘗試匯入？",
    "transactionHelpers.requestTooLargeError.message.tryImportInstead":
      "很抱歉。请求太大。您确定要尝试导入吗？",
    "transclusionContainerBlock.actions.copySuccessMessage":
      "已複製！接著貼到任何頁面即可同步內容。",
    "transclusionContainerBlock.copy": "拷貝並同步",
    "transclusionContainerBlock.differingPermissionsWarning":
      "並非所有人都能看到這個內容。原始頁面<page>來源頁面標題</page>並未與此頁面上的所有人共享。",
    "transclusionContainerBlock.editingMultiple":
      "正在 {icon} {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 頁} other {其他 {numberOfBacklinks} 頁}} 中編輯",
    "transclusionContainerBlock.editingOriginal": "編輯原始項目",
    "transclusionContainerBlock.emptyEditingPlaceholder":
      "按一下或拖曳此處的區塊並貼到其他頁面，即可同步內容。",
    "transclusionContainerBlock.learnMoreLabel": "深入了解同步區塊",
    "transclusionContainerBlock.remove.confirm": "刪除並取消同步副本",
    "transclusionContainerBlock.remove.header": "要刪除原始項目嗎？",
    "transclusionContainerBlock.remove.text":
      "這些區塊已在 {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 頁} other {其他 {numberOfBacklinks} 頁}} 完成同步。如果你刪除原始項目，這些區塊就不會再進行同步。",
    "transclusionContainerBlock.unsyncTransclusionContainer.confirm":
      "全部取消同步",
    "transclusionContainerBlock.unsyncTransclusionContainer.header":
      "要全部取消同步嗎？",
    "transclusionContainerBlock.unsyncTransclusionContainer.text":
      "{numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 頁} other {其他 {numberOfBacklinks} 頁}} 不會再與這些區塊同步。",
    "transclusionContainerBlock.unsyncTransclusionReference.confirm":
      "取消同步",
    "transclusionContainerBlock.unsyncTransclusionReference.header":
      "要取消同步此項目嗎？",
    "transclusionContainerBlock.unsyncTransclusionReference.text":
      "所選區塊不會再與原始項目同步。",
    "transferWorkspaceModal.backToMyWorkspacesButton.label": "返回我的工作區",
    "transferWorkspaceModal.changeAccount.title": "變更工作區帳號",
    "transferWorkspaceModal.confirmTransfer.cancelButton": "取消",
    "transferWorkspaceModal.confirmTransfer.confirmButton": "確認轉移",
    "transferWorkspaceModal.confirmTransfer.description":
      "將 {currentSpaceName} 轉移至與 {targetUserEmail} 相關聯的 Notion 帳戶。",
    "transferWorkspaceModal.confirmTransfer.emailDescription":
      "我們剛剛向你傳送了一個驗證碼。{br}請檢查你的收件匣。",
    "transferWorkspaceModal.confirmTransfer.emailLabel": "電子郵件",
    "transferWorkspaceModal.confirmTransfer.passcodeLabel": "驗證碼",
    "transferWorkspaceModal.confirmTransfer.passcodePlaceholder":
      "輸入驗證碼...",
    "transferWorkspaceModal.transferRequested.continueButton":
      "用電子郵件地址登入",
    "transferWorkspaceModal.transferRequested.description":
      "工作區 {currentWorkspaceName} 與 {currentUserEmail} 相關聯。{br}你的企業版工作區 {requestingWorkspaceName} 需要你將工作區轉移至個人 Notion 帳號。",
    "transferWorkspaceModal.transferRequested.emailLabel": "電子郵件",
    "transferWorkspaceModal.transferRequested.emailPlaceholder":
      "輸入個人 Notion 帳號電子郵件...",
    "trashActions.deletePagePermanentlyDialog.confirmDeleteButton.label":
      "是的，刪除這個頁面",
    "trashActions.deletePagePermanentlyDialog.prompt":
      "確定要永久刪除這個頁面嗎？",
    "trelloActions.authenticatingWithTrello.loadingMessage": "Trello 授權中…",
    "trelloActions.loginPopupModal.title": "Trello 登入",
    "trelloImportOption.actionsMenu.connectAnotherAccount": "連接另一個帳號",
    "trelloImportOption.actionsMenu.import": "匯入",
    "trelloImportOption.actionsMenu.removeIntegration": "移除",
    "trelloImportOption.boardProperty.defaultName": "看板",
    "trelloImportOption.search.noResultsPlaceholder": "無看板",
    "trelloImportOption.search.placeholder": "搜尋看板…",
    "tweetBlock.embedTweet.button.label": "嵌入推文",
    "tweetBlock.linkInput.caption": "適用於 Twitter 上的推文連結",
    "tweetBlock.placeholder": "嵌入推文",
    "tweetRenderer.loadingTweet.message": "載入推文中…",
    "typedMoveBlockMenu.pagesSection.title": "第页",
    "typedMoveBlockMenu.teamsSection.title": "Teamspace(团队空间)",
    "typeformBlock.embed.caption": "適用於啟用了公開存取的 Typeform 連結",
    "typeformBlock.placeholder": "嵌入 Typeform",
    "uiGenericToken.removeTokenLabel": "移除 {title}",
    "uiGenericToken.removeTokenLabelGeneric": "移除項目",
    "uidoc.colors.copied": "已複製 {colorCode}",
    "uidoc.timeseries.unique_views":
      "{uniqueViews, plural, other {{uniqueViews} 個唯一視圖}}",
    "uidoc.timeseries.views": "{views, plural, other {{views} 個視圖}}",
    "unfurling.asana.asanaAssignedTo": "已指派給 {value} 人",
    "unfurling.asana.asanaDueAt": "{value} 到期",
    "unfurling.asana.asanaProject": "Asana 專案",
    "unfurling.asana.asanaTask": "Asana 任務",
    "unfurling.asana.asanaUpdatedAt": "更新於 {value}",
    "unfurling.authenticateButton.title": "連接到 {integration} 以便更新",
    "unfurling.dropbox.dropboxFile": "Dropbox 檔案",
    "unfurling.errorOptions.authenticateAction.alreadyAuthenticated.title":
      "連接其他 {integration} 帳號",
    "unfurling.errorOptions.authenticateAction.alreadyAuthenticatedCompact.title":
      "連接其他帳號",
    "unfurling.errorOptions.authenticateAction.notAuthenticated.title":
      "連接 {integration} 帳號",
    "unfurling.errorOptions.authenticateAction.reAuthenticate.title":
      "重新驗證帳戶",
    "unfurling.errorOptions.learnMore.title": "進一步了解此錯誤",
    "unfurling.errorOptions.menuTitle": "試試這些選項",
    "unfurling.errorOptions.removeAction.title": "移除",
    "unfurling.errorOptions.replace.title": "變更 URL",
    "unfurling.errorOptions.tryAgainAction.title": "再試一次",
    "unfurling.figma.figmaFile": "Figma 檔案",
    "unfurling.figma.figmaLastModifiedBy": "上次編輯者為 {value}",
    "unfurling.generic.assigned": "已指派",
    "unfurling.generic.author": "作者",
    "unfurling.generic.created": "建立時間",
    "unfurling.generic.due": "到期時間",
    "unfurling.generic.lastModifiedAt": "修改時間",
    "unfurling.generic.lastModifiedBy": "修改者",
    "unfurling.generic.project": "專案",
    "unfurling.generic.section": "區段",
    "unfurling.generic.status": "狀態",
    "unfurling.generic.type": "類型",
    "unfurling.generic.updated": "已更新",
    "unfurling.github.githubCommit": "提交",
    "unfurling.github.githubCommitted": "提交於 {value}",
    "unfurling.github.githubIssue": "問題 {value}",
    "unfurling.github.githubIssues": "{value} 問題",
    "unfurling.github.githubPullClosed": "關閉於 {value}",
    "unfurling.github.githubPullMerged": "合併於 {value}",
    "unfurling.github.githubPullOpened": "開啟於 {value}",
    "unfurling.github.githubPullRequest": "提取請求 {value}",
    "unfurling.github.githubPullRequests": "{value} 提取請求",
    "unfurling.github.githubRepoUpdated": "更新於 {value}",
    "unfurling.github.issue": "問題",
    "unfurling.github.jiraUpdated": "更新於 {value}",
    "unfurling.github.owner": "擁有者",
    "unfurling.github.pullRequest": "PR",
    "unfurling.gitlab.gitlabIssues": "{value} 提取要求",
    "unfurling.gitlab.gitlabMerges": "{value} 問題",
    "unfurling.hover.label": "{value}",
    "unfurling.jira.jiraAssignee": "已指派給 {value} 人",
    "unfurling.slack.replies": "回覆數",
    "unfurling.slack.slackMessage": "Slack 中的訊息",
    "unfurling.slack.slackReplyCount":
      "{value, plural, other {{value} 則回覆}}",
    "unfurling.slack.slackThread": "Slack 中的討論串",
    "unfurling.trello.list": "清單",
    "unfurling.trello.trelloAssignedTo": "已指派給 {value} 人",
    "unfurling.trello.trelloCard": "Trello 中的卡片",
    "unfurling.trello.trelloDueAt": "{value} 到期",
    "unfurling.trello.trelloUpdatedAt": "更新於 {value}",
    "unfurling.updateButton.header": "此連結預覽已過期。",
    "unfurling.updateButton.title": "更新",
    "unfurling.zoom.host": "主持人",
    "unfurling.zoom.joinZoomMeeting": "加入 Zoom 會議",
    "unfurling.zoom.meetingId": "會議 ID",
    "unfurling.zoom.passcode": "登入碼",
    "unfurling.zoom.zoomPasscode": "密碼：{value}",
    "unfurlingHelpers.authenticatedErrorDescription.accessDenied":
      "資源擁有者或授權伺服器拒絕了該請求。請與組織或資源擁有者確認，確保 OAuth 安裝已啟用。",
    "unfurlingHelpers.authenticatedErrorDescription.githubAppRequestAccessUnsupported":
      "要求存取權限不受支援。你必須同時是 GitHub 管理員和 Notion 工作區管理員才能連接兩個應用程式。",
    "unfurlingHelpers.authenticatedErrorDescription.invalidRequest":
      "驗證請求無效。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.authenticatedErrorDescription.invalidScope":
      "請求範圍無效。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.authenticatedErrorDescription.serverError":
      "授權伺服器遇到意外情況，因此無法達成請求。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.authenticatedErrorDescription.temporarilyUnavailable":
      "授權伺服器因臨時過載或伺服器維修，目前無法處理請求。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.authenticatedErrorDescription.unknownError":
      "授權伺服器回應未知錯誤 (『{value}』)。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.authenticatedErrorDescription.unsupportedResponseType":
      "授權伺服器不支援使用此方法取得授權代碼。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.unauthorizedClient.":
      "用戶未被授權可使用此方法請求授權代碼。如果問題持續發生，請聯絡支援。",
    "unfurlingHelpers.unfurlResponseError.accessDenied": "沒有存取權限",
    "unfurlingHelpers.unfurlResponseError.authRefresh": "擷取預覽中",
    "unfurlingHelpers.unfurlResponseError.databaseSyncLimit":
      "已達同步資料庫限制",
    "unfurlingHelpers.unfurlResponseError.githubNotAcceptable":
      "需要擁有者角色",
    "unfurlingHelpers.unfurlResponseError.invalidRequest": "無法載入預覽",
    "unfurlingHelpers.unfurlResponseError.jiraNotAcceptable":
      "同步至另一個工作區",
    "unfurlingHelpers.unfurlResponseError.notAcceptable": "需要擁有者角色",
    "unfurlingHelpers.unfurlResponseError.notFound": "未找到內容",
    "unfurlingHelpers.unfurlResponseError.rateLimited": "請求過多",
    "unfurlingHelpers.unfurlResponseError.reAuthenticate": "必須重新驗證",
    "unfurlingHelpers.unfurlResponseError.serverError": "無法載入預覽",
    "unfurlingHelpers.unfurlResponseError.unknownError": "無法載入預覽",
    "unfurlingHelpers.unfurlResponseError.unprocessableEntity":
      "無法辨識的 URL",
    "unfurlingHelpers.unfurlResponseErrorDescription.accessDenied":
      "你沒有適當權限存取此資源。",
    "unfurlingHelpers.unfurlResponseErrorDescription.authRefresh":
      "透過登入更新擷取預覽中，請稍候。",
    "unfurlingHelpers.unfurlResponseErrorDescription.databaseSyncLimit":
      "你的工作區已達同步資料庫限制。",
    "unfurlingHelpers.unfurlResponseErrorDescription.githubNotAcceptable":
      "你沒有適當權限可同步此資源。你必須具備擁有者角色。",
    "unfurlingHelpers.unfurlResponseErrorDescription.invalidRequest":
      "嘗試取得此資源資訊時出現錯誤。已收到錯誤代碼「{statusCode}」。",
    "unfurlingHelpers.unfurlResponseErrorDescription.jiraNotAcceptable":
      "你已將此資源同步至另一個工作區。",
    "unfurlingHelpers.unfurlResponseErrorDescription.notAcceptable":
      "你沒有適當權限可同步此資源。你必須具備擁有者角色。",
    "unfurlingHelpers.unfurlResponseErrorDescription.notFound":
      "無法找到此連結資源資訊。它可能不存在，或你沒有適當的存取權限。",
    "unfurlingHelpers.unfurlResponseErrorDescription.rateLimited":
      "「{integrationName}」收到太多來自你或貴組織的請求。請稍候幾分鐘並再試一次。",
    "unfurlingHelpers.unfurlResponseErrorDescription.reAuthenticate":
      "你必須重新驗證帳戶才能存取此資源。",
    "unfurlingHelpers.unfurlResponseErrorDescription.serverError":
      "嘗試取得此資源資訊時出現錯誤。已收到錯誤代碼「{statusCode}」。",
    "unfurlingHelpers.unfurlResponseErrorDescription.unknownError":
      "嘗試取得此資源資訊時出現錯誤。已收到錯誤代碼「{statusCode}」。",
    "unfurlingHelpers.unfurlResponseErrorDescription.unprocessableEntity":
      "此整合目前無法嵌入此 URL。",
    "unfurlingMenu.actions.pasteAsDatabase.title": "以資料庫形式貼上",
    "unfurlingMenu.actions.pasteAsLink.title": "以連結形式貼上",
    "unfurlingMenu.actions.pasteAsMention.title": "以提及形式貼上",
    "unfurlingMenu.actions.pasteAsPreview.title": "以預覽形式貼上",
    "unsubscribeFromEmails.workspace.confirmUnsubscribeDescription":
      "確定要取消訂閱此清單嗎？",
    "unsubscribeFromEmails.workspace.message":
      "你已成功退訂{workspaceName}的電子郵件",
    "unwantedContentTakedownEmail.body.appeal":
      "如果你想要對此判決提出申訴，請傳送電子郵件到 <mailto>team@makenotion.com</mailto>，詳細說明你的內容已作出哪些變更，或並未違反我們的政策。",
    "unwantedContentTakedownEmail.body.consequence":
      "因此，此頁面不再開放存取。你依然可以在私人工作區存取該頁面。",
    "unwantedContentTakedownEmail.body.intro": "感謝你使用 Notion。",
    "unwantedContentTakedownEmail.body.takedown":
      "我們要來信通知你，我們認為<pagelink>此頁面</pagelink>中的內容不符合我們的<contentpolicylink>內容與使用政策</contentpolicylink>中列出的標準。",
    "unwantedContentTakedownEmail.closingText":
      "感謝你。{br} ──來自 Notion 團隊",
    "unwantedContentTakedownEmail.greetingWithName": "{customerName}，你好！",
    "unwantedContentTakedownEmail.greetingWithoutName": "你好！",
    "unwantedContentTakedownEmail.subjectLine.text":
      "你的 Notion 帳號：你公用頁面上的已審核內容",
    "updateBanner.updateAvailableBanner.message": "更新並查看新功能",
    "updateBanner.updateMessage.noRedirect": "按一下此處更新到最新版本",
    "updateBanner.updateMessage.noRedirectMobile": "輕點此處更新到最新版本",
    "updateSidebar.commentContainer.emptyResolved":
      "此頁面的已解決評論會顯示在此處",
    "updateSidebar.commentContainer.emptyTitleResolved": "還沒有已解決的評論",
    "updateSidebar.commentContainer.emptyTitleUnresolved": "還沒有公開評論",
    "updateSidebar.commentContainer.emptyUnresolved":
      "此頁面的公開評論會顯示在此處",
    "updateSidebar.commentContainer.restricted": "你無權查看此受限頁面的更新。",
    "updateSidebar.comments.filter.button.resolvedMode": "已解決",
    "updateSidebar.comments.filter.button.unresolvedMode": "公開",
    "updateSidebar.comments.mode.resolvedOption": "已解決的評論",
    "updateSidebar.comments.mode.unresolvedOption": "公開評論",
    "updateSidebar.header.analyticsLabel": "分析",
    "updateSidebar.header.commentsLabel": "評論",
    "updateSidebar.header.updatesLabel": "更新",
    "updateSidebar.placeholder.addComment": "回覆...",
    "updateSidebar.updatesContainer.empty": "此頁面尚無更新。",
    "updateSidebar.updatesContainer.emptyAfterSearch":
      "沒有任何更新與要求的篩選器相符。",
    "updateSidebar.updatesContainer.emptyMaybePurged":
      "此页面没有最新的更新。页面更新将持续一年。",
    "updateSidebarFollowControl.learnMoreAboutFollowing":
      "進一步了解下列內容和通知",
    "updateSidebarSelect.selectComments.label": "評論",
    "updateSidebarSelect.selectUpdates.label": "所有更新",
    "updateSidebarTabCommentsSegmentedControl.option.open": "開啟",
    "updateSidebarTabCommentsSegmentedControl.option.resolved": "已解決",
    "updateSidebarUnexpandButton.closeSidebar.tooltip": "關閉側邊欄",
    "updateSpaceDomain.error.invalidDomain.message": "此網域不可用。",
    "updateSpaceDomain.error.missingDomain.message": "網域為必填。",
    "updatesButton.allUpdates.sidebarButton": "所有更新",
    "updatesButton.learnMoreAboutInboxLink": "進一步了解通知",
    "updatesButton.tooltip": "此工作區中所有頁面的更新",
    "updatesModal.allPagesTab.emptyPrompt": "工作區中頁面的更新將顯示在此處。",
    "updatesModal.allPagesTab.emptyPromptTitle": "沒有新的更新",
    "updatesModal.allUpdatesRefreshButton.refreshButtonDescription": "重新整理",
    "updatesModal.allUpdatesRefreshButton.refreshButtonDescriptionAriaLabel":
      "重新整理",
    "updatesModal.allUpdatesTab.title": "全部",
    "updatesModal.archiveTab.emptyPrompt":
      "你歸檔的所有收件匣更新都將顯示在此處。",
    "updatesModal.archiveTab.emptyPromptTitle": "沒有已歸檔的更新",
    "updatesModal.archiveTab.title": "已歸檔",
    "updatesModal.currentPageTab.emptyPrompt":
      "對此頁面的任何變更都將顯示在這裡。",
    "updatesModal.currentPageTab.emptyPromptTitle": "沒有頁面更新",
    "updatesModal.mentionsTab.title": "收件匣",
    "updatesModal.mobileMenu.title": "所有更新",
    "updatesModal.openNotifications.tooltip": "打開通知設定",
    "updatesModal.openNotifications.tooltipAriaLabel": "開啟通知設定按鈕",
    "updatesModal.spaceUpdates.mentionsTab.archiveAllButtonTitle": "全部歸檔",
    "updatesModal.spaceUpdates.mentionsTab.archiveReadButtonTitle": "歸檔閱讀",
    "updatesModal.spaceUpdates.mentionsTab.archiveUnreadButtonTitle":
      "歸檔未讀",
    "updatesModal.spaceUpdates.mentionsTab.markAllReadButtonTitle":
      "全部標示為已讀",
    "updatesModal.spaceUpdatesTab.allArchived":
      "當有人@提及你、回覆你的評論或邀請你進入頁面時，你將在此處收到通知。",
    "updatesModal.spaceUpdatesTab.allArchivedRequests":
      "當有人@提及你、回覆你的評論、向你傳送要求或邀請你進入頁面時，你將在此處收到通知。",
    "updatesModal.spaceUpdatesTab.allArchivedTitle": "都看完啦！",
    "updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabButton": "查看全部",
    "updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabMessage":
      "你的收件匣有更多通知。",
    "updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabTitle":
      "你已閱讀所有內容",
    "updatesModal.spaceUpdatesTab.markAllReadButton.disabledTooltip":
      "所有通知已標示為已讀。",
    "updatesModal.spaceUpdatesTab.markAllReadButtonTitle": "全部標示為已讀",
    "updatesModal.unreadNotificationsFilterButton.allTooltip": "顯示所有通知",
    "updatesModal.unreadNotificationsFilterButton.allTooltipAriaLabel":
      "顯示所有通知",
    "updatesModal.unreadNotificationsFilterButton.unreadTooltip":
      "只顯示未讀通知",
    "updatesModal.unreadNotificationsFilterButton.unreadTooltipAriaLabel":
      "只顯示未讀通知",
    "updatingSubscriptionDetails.restrictedRegion.addOnSubscriptionErrorMessage":
      "我們目前不允許此司法管轄區的客戶購買附加元件。",
    "updatingSubscriptionDetails.restrictedRegion.genericErrorMessage":
      "我們目前不允許此司法管轄區的客戶升級他們的訂閱。",
    "updatingSubscriptionDetails.restrictedRegion.newSubscriptionErrorMessage":
      "我們目前不接受此司法管轄區的新客戶。",
    "upgradeButton.business.text": "商業版",
    "upgradeButton.enterprise.text": "企業版",
    "upgradeButton.learnMore.tooltip": "按一下以了解更多。",
    "upgradeButton.personal.text": "個人專業版",
    "upgradeButton.team.text": "團隊版",
    "upgradeButton.upgrade.tooltip": "升級以使用此功能。",
    "upgradeMobileButton.upgradeButton.label": "升級為專業版",
    upgradeToBusinessBadge: "商業版",
    upgradeToEnterpriseBadge: "企業版",
    "uploadActions.uploadFailedError.message": "上傳失敗。",
    "uploadLimitExceededBanner.message":
      "{shouldShowShortMessage, select, true {檔案超出{maxFreeAccountFileSize}MB 大小限制} other {你的檔案超過了免費版的{maxFreeAccountFileSize}MB 大小限制}}",
    "uploadLimitExceededBanner.upgradeButton.label":
      "{shouldShowShortMessage, select, true {升級} other {升級以獲得無限上傳}}",
    "upsellActions.confirmProration.acceptLabel":
      "升級到{plan, select, personal {個人版} team {{businessEnabled, select, true {加值版} other {團隊版}}} business {商業版} other {企業版}}",
    "upsellActions.confirmProration.addOnFeature.acceptLabel": "訂閱",
    "upsellActions.confirmProration.aiAddOnMessage":
      "你將以每位成員每月 {formattedPrice} 的價格訂閱 Notion AI。",
    "upsellActions.confirmProration.businessMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的商業版方案。{br}{isSubscribed, select, true {系統將在扣除任何帳號餘額後，依比例向你收取費用。} other {}}",
    "upsellActions.confirmProration.businessMessage.fromSinglePlayerPlus":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的商業版方案。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.confirmProration.enterpriseMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的企業版方案。{br}{isSubscribed, select, true {系統將在扣除任何帳號餘額後，依比例向你收取費用。} other {}}",
    "upsellActions.confirmProration.enterpriseMessage.fromSinglePlayerPlus":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的企業版方案。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.confirmProration.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的{plan, select, personal {個人版} team {businessEnabled, select, true {加值版} other {團隊版}} business {商業版} other {企業版}}方案。{br}{isSubscribed, select, true {系統將在扣除任何帳號餘額後，依比例向你收取費用。} other {}}",
    "upsellActions.confirmProration.personalMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的個人版方案。{br}{isSubscribed, select, true {系統將在扣除任何帳號餘額後，依比例向你收取費用。} other {}}",
    "upsellActions.confirmProration.personalMessage.fromSinglePlayerPlus":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的個人版方案。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.confirmProration.plusMessage":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的加值版方案。{br}{isSubscribed, select, true {系統將在扣除任何帳號餘額後，依比例向你收取費用。} other {}}",
    "upsellActions.confirmProration.plusMessage.fromSinglePlayerPlus":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的加值版方案。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.confirmProrationFromGrandfatheredPlus.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的{plan, select, personal {個人版} team {完整版 {businessEnabled, select, true {加值版} other {團隊版}}方案（啟用協作）} business {商業版} other {企業版}}。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.confirmProrationFromSinglePlayerPlus.message":
      "你將以每位成員每月 {price} 的價格訂閱 Notion 的 {tier, select, personal {個人版} team {完整版 {businessEnabled, select, true {加值版} other {團隊版}}方案（啟用協作）} business {商業版} other {企業版}}。{br}系統將在扣除任何帳號餘額後，取消目前的折扣價格，依比例向你收取費用。",
    "upsellActions.noIAPForAIWithExternalPurchaseOption":
      "此工作區已用光所有免費的 AI 回應。前往桌面版購買 Notion AI 並解除限制。",
    "upsellActions.noIAPForAIWithoutExternalPurchaseOption":
      "此工作區已用光所有免費的 AI 回應。",
    "upsellActions.referToSalesRep":
      "此工作區是受管理帳戶的一部分。請聯絡你的帳戶代表以討論訂閱的任何變更。",
    "upsellActions.switchPlanFromInAppPurchase":
      "你目前透過 Apple 的程式內購買完成訂閱。如要更換方案，請先取消 Apple 的訂閱。",
    "upsellCallout.learnMoreButton.text": "了解更多",
    "upsellCallout.upgradeButton.text": "升級",
    "useCaseOnboardingStep.cancelButton.label": "取消",
    "useCasemobileDesktopStep.browser.label": "瀏覽器",
    "useCasemobileDesktopStep.desktopApp.label": "Mac 和 Windows 應用",
    "useCasemobileDesktopStep.title":
      "Notion 也可用於 <boldtext>Mac</boldtext>、<boldtext>Windows</boldtext> 和<boldtext>瀏覽器</boldtext>！所有內容將在你的多個裝置上保持同步。",
    "useCasemobileEditorSidebarStep.description":
      "你將在此處找到工作區頁面與功能頁面。",
    "useCasemobileEditorSidebarStep.title":
      "<boldtext>側邊欄</boldtext>可讓一切井然有序。",
    "useCasemobileEditorStep.description":
      "<boldtext>輕觸並按住</boldtext>可以對任何內容重新排序。",
    "useCasemobileEditorStep.title": "一些重要提示：",
    "useCasemobileWebClipperStep.title":
      "<boldtext>將網頁或本機檔案儲存到 Notion 中。</boldtext>",
    "useCasewebClipperStep.description":
      "只需按一下分享按鈕，然後選取要保存到的頁面或資料庫。",
    "user.notionSupport.name": "Notion 支援",
    "userConnectionsSettings.actionMenu.connectAccount.label": "連接另一個帳號",
    "userConnectionsSettings.actionMenu.disconnectAccount.label":
      "解除連接帳戶",
    "userConnectionsSettings.actionMenu.pagePicker.cancel": "取消",
    "userConnectionsSettings.actionMenu.pagePicker.update": "更新存取權限",
    "userConnectionsSettings.actionMenu.selectPages.label": "存取選定的頁面",
    "userConnectionsSettings.connectionsTable.accessColumn.external":
      "可以{capabilities}",
    "userConnectionsSettings.connectionsTable.accessColumn.externalWithCapabilities":
      "可以 {capabilities} 內容",
    "userConnectionsSettings.connectionsTable.accessColumn.googleDrive":
      "可以嵌入內容",
    "userConnectionsSettings.connectionsTable.accessColumn.legacyImporter":
      "只能新增頁面",
    "userConnectionsSettings.connectionsTable.accessColumn.title": "存取權限",
    "userConnectionsSettings.connectionsTable.accessColumn.userGuest":
      "可以{capabilities}內容",
    "userConnectionsSettings.connectionsTable.botAccess.insertContent": "插入",
    "userConnectionsSettings.connectionsTable.botAccess.previewLinks":
      "預覽連結",
    "userConnectionsSettings.connectionsTable.botAccess.readContent": "查看",
    "userConnectionsSettings.connectionsTable.botAccess.syncDatabases":
      "同步資料庫",
    "userConnectionsSettings.connectionsTable.botAccess.updateContent": "更新",
    "userConnectionsSettings.connectionsTable.connectionsColumn.title": "連線",
    "userConnectionsSettings.deleteExternalAuthorization.confirmDelete.label":
      "是",
    "userConnectionsSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage":
      "確定要撤銷這個帳號的存取權限嗎？",
    "userCreditSettings.creditBalanceSection.applyCreditButton.label":
      "使用點數",
    "userCreditSettings.creditBalanceSection.creditBalanceMessage":
      "你目前的點數餘額為 {creditBalance}。",
    "userCreditSettings.creditBalanceSection.freePersonalProMonthMessage":
      "{numberOfMonths, plural, other {這等同於個人專業版的 <b>{numberOfMonths} 個月</b>。}}",
    "userCreditSettings.creditBalanceSection.freePlusMonthMessage":
      "{numberOfMonths, plural, other {這等同於加值版的 <b>{numberOfMonths} 個月</b>。}}",
    "userCreditSettings.creditBalanceSection.maximumCreditBalanceExceeded":
      "你已經超出了每個帳號的最高點數總額 {maximumCreditBalance}。你獲得的額外點數不會增加你的餘額。",
    "userCreditSettings.creditBalanceSection.title": "點數餘額",
    "userCreditSettings.creditBalanceSection.upgradeForFreeButton.label":
      "申請升級",
    "userCreditSettings.helpButton.caption": "了解如何獲得和使用點數",
    "userCreditSettings.inviteFriendsSection.showLessReferredUsers.link":
      "少顯示 {numberOfReferredUsers} 位",
    "userCreditSettings.inviteFriendsSection.showMoreReferredUsers.link":
      "顯示其他 {numberOfReferredUsers} 位",
    "userCreditSettings.inviteFriendsSection.sourceOfReferralNote":
      "（已邀請你）",
    "userCreditSettings.inviteFriendsSection.title": "邀請朋友並獲得點數",
    "userCreditSettings.inviteFriendsSection.userHasAlreadySignedUpNote":
      "（已註冊）",
    "userCreditSettings.inviteFriendsSection.userHasNotSignedUpNote":
      "（尚未註冊）",
    "userCreditSettings.offline.message": "請連接網路管理你的帳號點數。",
    "userCreditSettings.otherWaysToEarnCreditSection.addTemplate.description":
      "範本是開始使用 Notion 一般工作流的快速方法",
    "userCreditSettings.otherWaysToEarnCreditSection.addTemplate.title":
      "使用 Notion 建構範本",
    "userCreditSettings.otherWaysToEarnCreditSection.createTeamspace.description":
      "團隊空間管理團隊的權限、成員及內容",
    "userCreditSettings.otherWaysToEarnCreditSection.createTeamspace.title":
      "建立團隊空間",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.actionLink":
      "下載",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.description":
      "下載桌面應用並登入",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.title":
      "於桌面應用中登入",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.actionLink":
      "連接",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.description":
      "匯入你的筆記和筆記本",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.title":
      "從 Evernote 匯入",
    "userCreditSettings.otherWaysToEarnCreditSection.guestCollaboration.description":
      "使用分享選單與團隊以外的訪客一起運作",
    "userCreditSettings.otherWaysToEarnCreditSection.guestCollaboration.title":
      "在頁面上與訪客共同合作",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.actionLink":
      "下載",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.description":
      "下載行動應用並登入",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.title":
      "在行動應用中登入",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.actionLink":
      "下載",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.description":
      "使用分享選單將連結儲存到 Notion 中",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.title":
      "使用 iOS 或 Android 系統分享選單",
    "userCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
      "獲得的總點數",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.actionLink": "造訪",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.description":
      "從任何網頁瀏覽器登入到 Notion",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.title":
      "於網頁登入",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.actionLink":
      "安裝",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.description":
      "下載 Chrome 擴充功能並儲存連結",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.title":
      "使用網頁擷取器",
    "userCreditSettings.otherWaysToEarnCreditSectionAlt.title":
      "獲得點數的方法",
    "userDataConsent.render.error": "發生問題",
    "userDataConsentSettings.accessGranted.label":
      "你已授予 Notion 存取你的帳號的權限，僅以用於支援目的，直到{expiryTime}。",
    "userDataConsentSettings.accessNotGranted.label":
      "授予 Notion 支援人員對你的帳號的臨時存取權限，以便我們代表你解決問題或恢復內容。你可以隨時取消存取權限。",
    "userDataConsentSettings.allowSupportAccess.button": "授予支援存取權限",
    "userDataConsentSettings.header.label": "支援存取權限",
    "userDataConsentSettings.revokeSupportAccess.button": "取消存取權限",
    "userPermissionsMenu.adminItem.caption":
      "可以變更工作區設定並邀請新成員加入工作區。",
    "userPermissionsMenu.adminItem.label": "管理員",
    "userPermissionsMenu.canAccessItem.label": "可以存取",
    "userPermissionsMenu.canCommentItem.caption":
      "可以查看和評論，但無法編輯。",
    "userPermissionsMenu.canCommentItem.label": "可以評論",
    "userPermissionsMenu.canEditContentItem.caption":
      "可以編輯內容，但無法編輯資料庫的視圖或架構。",
    "userPermissionsMenu.canEditContentItem.label": "可以編輯內容",
    "userPermissionsMenu.canEditItem.caption": "可以編輯，但無法與他人分享。",
    "userPermissionsMenu.canEditItem.label": "可以編輯",
    "userPermissionsMenu.canReadItem.caption": "無法編輯或與他人分享。",
    "userPermissionsMenu.canReadItem.label": "可以查看",
    "userPermissionsMenu.canWriteItem.caption": "無法讀取或與他人共享。",
    "userPermissionsMenu.canWriteItem.label": "可以寫入。",
    "userPermissionsMenu.disabledItem.label": "禁用",
    "userPermissionsMenu.downgradePermissionsModal.downgradeSelfButton.label":
      "降級",
    "userPermissionsMenu.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage":
      "確定要降級自己的存取權限嗎？",
    "userPermissionsMenu.fullAccessItem.caption": "可以編輯並與他人分享。",
    "userPermissionsMenu.fullAccessItem.label": "全部權限",
    "userPermissionsMenu.guestItem.label": "訪客",
    "userPermissionsMenu.leaveWorkspaceItem.label": "離開工作區",
    "userPermissionsMenu.limitedAccessItem.label": "有限存取權限",
    "userPermissionsMenu.memberItem.caption":
      "無法變更工作區設定或邀請新成員加入工作區。",
    "userPermissionsMenu.memberItem.label": "成員",
    "userPermissionsMenu.membershipAdminItem.caption":
      "可以管理工作區與群組成員資格。",
    "userPermissionsMenu.membershipAdminItem.label": "成員資格管理員",
    "userPermissionsMenu.mixedAccessItem.caption": "具有混合存取權限。",
    "userPermissionsMenu.mixedAccessItem.label": "混合存取權限",
    "userPermissionsMenu.mobile.doneButton.label": "完成",
    "userPermissionsMenu.mobile.title": "選擇角色",
    "userPermissionsMenu.noAccessItem.label": "無法存取",
    "userPermissionsMenu.pageGuestItem.label": "頁面訪客",
    "userPermissionsMenu.removeFromWorkspaceItem.label": "自工作區移除",
    "userPermissionsMenu.removePermissionsModal.removeSelfButton.label": "刪除",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage":
      "確定要刪除自己的存取權限嗎？",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage":
      "確定要刪除自己的存取權限嗎？你將無法存取工作區，並且所有私人頁面都將遺失。",
    "userPermissionsMenu.removePermissionsModal.removeUserButton.label": "移除",
    "userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage":
      "是否確定要移除此人？",
    "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage":
      "是否確定要移除此人？他將無法存取工作區，並且所有私人頁面都將遺失。",
    "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.enterprise.confirmationMessage":
      "如果刪除此成員，他們將失去工作區存取權限。您可以刪除他們後將其私人頁面轉移給其他成員。<transferpagelink>瞭解更多資訊</transferpagelink>。",
    "userPermissionsMenu.removeWorkspaceItem.label": "移除",
    "userPermissionsMenu.teamGuestItem.label": "團隊空間訪客",
    "userPermissionsMenu.workspaceOwnerItem.caption":
      "可以變更工作區設定並邀請新成員加入工作區。",
    "userPermissionsMenu.workspaceOwnerItem.label": "工作區擁有者",
    "userSettings.userType.personal": "只有我",
    "userSettings.userType.team1000+": "超過 1000 人",
    "userSettings.userType.team101-1000": "101-1000 人",
    "userSettings.userType.team2-50": "2-50 人",
    "userSettings.userType.team51-100": "51-100 人",
    "userTypeTooltip.generalPerson": "此人員",
    "verification.timeRange": "{formattedDateRange} 在 {formattedEndTime}",
    "verificationHelpers.empty": "空白",
    "verificationHelpers.expired": "已過期",
    "verificationHelpers.none": "無",
    "verificationHelpers.verified": "已驗證",
    "verificationHelpers.verifiedIndefinitely": "由 {actor} 無限期地驗證",
    "verificationHelpers.verifiedUntil": "由 {actor} 在 {datetime} 之前驗證",
    "verifyDomainModal.addNewDomain.integration.subtitle":
      "連結預覽整合必須在{br}網域發佈前完成其驗證。",
    "verifyDomainModal.addNewDomain.next": "下一個",
    "verifyDomainModal.addNewDomain.samlConfig.subtitle":
      "具有驗證網域的使用者可以{br}使用 SAML 單一登入。",
    "verifyDomainModal.addNewDomain.title": "新增網域",
    "verifyDomainModal.editSamlConfig.copy": "拷貝",
    "verifyDomainModal.invalidDomain.expired": "此網域驗證的代碼已過期。",
    "verifyDomainModal.invalidDomain.invalid":
      "你無法驗證此網域，因為其已由另一個工作區驗證。",
    "verifyDomainModal.invalidDomain.okay": "好",
    "verifyDomainModal.invalidDomain.title": "無法驗證 {domain}",
    "verifyDomainModal.verifiedDomain.integration.subtitle":
      "此整合可以展開包含此網域的 URL。",
    "verifyDomainModal.verifiedDomain.okay": "好",
    "verifyDomainModal.verifiedDomain.samlConfig.subtitle":
      "使用者能夠使用此電子郵件網域{br}並使用 SAML 單一登入。",
    "verifyDomainModal.verifiedDomain.title": "已成功驗證 {domain}",
    "verifyDomainModal.verifyExistingDomain.copy": "拷貝",
    "verifyDomainModal.verifyExistingDomain.instructionsDNS":
      "前往你網域主機的 DNS 記錄區段。",
    "verifyDomainModal.verifyExistingDomain.instructionsHangTight":
      "一般來說，此變更套用時僅需幾分鐘，但還是有 DNS 記錄傳播時最多需要 72 小時的情況。",
    "verifyDomainModal.verifyExistingDomain.instructionsTXT":
      "建立全新 TXT 記錄並以數值貼上上方代碼。",
    "verifyDomainModal.verifyExistingDomain.instructionsVerify":
      "按一下「驗證」以通知 Notion 檢查你的 DNS 記錄。",
    "verifyDomainModal.verifyExistingDomain.subtitle":
      "遵循這些步驟以完成驗證。",
    "verifyDomainModal.verifyExistingDomain.title": "驗證你的網域",
    "verifyDomainModal.verifyExistingDomain.verificationCodeExpiresAt":
      "於 {timeLeft} 內過期",
    "verifyDomainModal.verifyExistingDomain.verificationCodeLabel": "驗證碼",
    "verifyDomainModal.verifyExistingDomain.verify": "驗證",
    "verifyTransferEmailFooter.didNotChange.message":
      "如果你沒有嘗試轉移至此 Notion 帳號的電子郵件地址，則可以放心地忽略此電子郵件。",
    "verifyTransferEmailSubject.subjectLine":
      "你的工作區轉移電子郵件驗證碼為 {temporaryPassword}",
    "verifyTransferEmailTitle.contentsTitle": "轉移工作區電子郵件驗證",
    "videoBlock.embedVideo.button.label": "嵌入影片",
    "videoBlock.linkInput.caption": "適用於 YouTube、Vimeo 等視頻連結",
    "videoBlock.linkInput.placeholder": "貼上影片連結…",
    "videoBlock.placeholder": "嵌入或上傳影片",
    "viewHistorySettings.description.message":
      "擁有編輯或完整存取權限的人員能夠看到你查看頁面",
    "viewHistorySettings.do_not_record.label": "不要記錄",
    "viewHistorySettings.record.label": "記錄",
    "viewHistorySettings.title": "顯示我的查看記錄",
    "viewMoreOutlinerButton.inlineOverflowButtonText": "查看全部 ({total})",
    "viewMoreOutlinerButton.labelv2": "其他 {total} 個",
    "viewsIntroModal.doneMessage": "知道了",
    "viewsIntroModal.learnMoreUrl": "了解更多：{url}",
    "viewsIntroModal.mobileDoneMessage": "知道了",
    "viewsIntroModal.nextMessage": "下一個",
    "viewsIntroModal.skipMessage": "全部略過",
    "viewsIntroModal.subtitle": "Notion 2.21 新功能",
    "viewsIntroModal.tab1.subtitle": "現在，自訂視圖的操作只需按一下即可。",
    "viewsIntroModal.tab1.title": "使用選項卡發現和切換視圖",
    "viewsIntroModal.tab2.subtitle":
      "變更團隊的共用資料庫視圖，而不中斷其他人的工作流程。",
    "viewsIntroModal.tab2.title": "在儲存之前，篩選器和排序不會影響其他人",
    "viewsIntroModal.tab3.subtitle":
      "在多個頁面中納入相同資料庫的視圖，自訂需求方式。",
    "viewsIntroModal.tab3.title": "從既有資料庫建立視圖",
    "viewsIntroModal.title": "強化版資料庫和篩選器",
    "webApp.redirectingToDesktop.continueInBrowser.message":
      "或者在瀏覽器中繼續",
    "webApp.redirectingToDesktop.directLink.message":
      "如果你沒有被重新導向，請按一下這裡。",
    "webApp.redirectingToDesktop.message": "重新導向到你的 Notion 應用程式",
    "webClipper.clippedItemDatabase.properties.createdTime": "建立時間",
    "webClipper.clippedItemDatabase.properties.name": "名稱",
    "webClipper.clippedItemDatabase.properties.tags": "標籤",
    "webClipper.clippedItemDatabase.properties.url": "網址",
    "webClipper.clippedItemDatabase.views.viewAll": "查看全部",
    "webClipper.clippedRecipe.metadata.cookTime": "烹調時間：{time}",
    "webClipper.clippedRecipe.metadata.prepTime": "準備時間：{time}",
    "webClipper.clippedRecipe.metadata.separator": "•",
    "webClipper.clippedRecipe.metadata.totalTime": "總時間：{time}",
    "webClipper.clippedRecipe.metadata.yield": "{some} 人份",
    "webClipper.clippedRecipe.sections.ingredients": "原料",
    "webClipper.clippedRecipe.sections.instructions": "指示",
    "webClipper.clippedRecipe.title": "食譜",
    "whatIsNotion.useCases.databases": "資料庫",
    "whatIsNotion.useCases.documents": "文件",
    "whatIsNotion.useCases.knowledgeBases": "知識庫",
    "whatIsNotion.useCases.notes": "世界上最繽紛的筆記... 😉",
    "whatIsNotion.useCases.projectManagementSystems": "專案管理系統",
    "whatIsNotion.useCases.publicWebsites": "公用網站",
    "whatIsNotion.usecases.documents": "文件",
    "whimsicalBlock.embeds.button.label": "嵌入 Whimsical",
    "whimsicalBlock.embeds.caption": "適用於啟用了公開存取的 Whimsical 連結",
    "whimsicalBlock.placeholder": "嵌入 Whimsical",
    "wikiActions.collectionView.allPages": "所有頁面",
    "wikiActions.collectionView.home": "首頁",
    "wikiActions.collectionView.ownerPropertyName": "擁有者",
    "wikiActions.collectionView.pagePropertyName": "頁面",
    "wikiActions.collectionView.pagesIOwn": "我擁有的頁面",
    "wikiActions.collectionView.tagsDesignValue": "設計",
    "wikiActions.collectionView.tagsOnboardingValue": "引導流程",
    "wikiActions.collectionView.tagsPropertyName": "標籤",
    "wikiActions.collectionView.verificationPropertyName": "驗證",
    "wikiActions.convertToWiki.undo.toastMessage":
      "已將 {pageName} 轉換為知識庫",
    "wikiMigrationModal.cancelMessage": "取消",
    "wikiMigrationModal.migrateMessage": "遷移我的知識庫",
    "wikiMigrationModal.tabButton.overview.subtitle":
      "隨意整理你的頁面，然後在「所有頁面」視圖中瀏覽全部內容",
    "wikiMigrationModal.tabButton.overview.title": "快速查看全部內容",
    "wikiMigrationModal.tabButton.owner.subtitle":
      "加入擁有者屬性以顯示特定頁面的負責人",
    "wikiMigrationModal.tabButton.owner.title": "查看頁面負責人",
    "wikiMigrationModal.tabButton.tags.subtitle":
      "輕鬆在同一處尋找你全部的到職文件",
    "wikiMigrationModal.tabButton.tags.title": "透過標籤整理你的頁面",
    "wikiMigrationModal.tabButton.upToDate.subtitle":
      "快速查看哪些頁面需要更新",
    "wikiMigrationModal.tabButton.upToDate.title": "掌握最新資訊",
    "wikiMigrationModal.title": "更強大的知識庫",
    "withImageRepositioning.dragImage.text": "拖動圖片以調整位置",
    workspaceAnalytics: "你沒有分析要求空間的權限。",
    "workspaceAnalytics.content.contentEngagement.pageEdits.byline":
      "{pageEdits} 編輯",
    "workspaceAnalytics.content.contentEngagement.pagesCreated":
      "已建立 {pagesCreated} 頁面",
    "workspaceAnalytics.content.contentEngagement.pagesCreatedAndEdited.byline":
      "包括私人及共享頁面",
    "workspaceAnalytics.content.contentEngagement.pagesCreatedAndEdits":
      "已建立 {pagesCreated} 頁面。 {pageEdits} 編輯",
    "workspaceAnalytics.content.contentEngagement.title": "內容參與",
    "workspaceAnalytics.content.contentEngagement.totalViews":
      "{pageViews} 總瀏覽量",
    "workspaceAnalytics.content.contentEngagement.uniqueViews":
      "{uniquePageViews} 唯一頁面瀏覽量",
    "workspaceAnalytics.contentTab.contentTable.uniqueViewsColumn.tooltip":
      "在選定期間查看頁面的使用者總數",
    "workspaceAnalytics.contentTab.contentTable.viewsColumn.tooltip":
      "使用者查看頁面的次數",
    "workspaceAnalytics.memberOverTime.tooltip": "顯示過去 28 天內有效的成員",
    "workspaceAnalytics.membersOverTime.title": "隨時間變化的有效成員",
    "workspaceAnalytics.overview.contentEngagement.caption.pageView":
      "{pageViews} 瀏覽量",
    "workspaceAnalytics.overview.contentEngagement.pageEdits":
      "{pageEdits} 編輯",
    "workspaceAnalytics.overview.contentEngagement.popularPages": "最熱門頁面",
    "workspaceAnalytics.overview.contentEngagement.title": "內容參與",
    "workspaceAnalytics.overview.contentEngagement.uniqueViews":
      "{uniquePageViews} 唯一頁面瀏覽量",
    "workspaceAnalytics.overview.contentEngagement.views":
      "{pageViews} 總瀏覽量",
    "workspaceAnalytics.overview.userEngagement.activeEditors":
      "最活躍的編輯人員",
    "workspaceAnalytics.overview.userEngagement.activeGuests":
      "{activeGuests} 位活躍成員",
    "workspaceAnalytics.overview.userEngagement.activeGuestsCount":
      "{activeGuestsCount} 位活躍訪客",
    "workspaceAnalytics.overview.userEngagement.activeMembers":
      "{activeMembers} 位活躍成員",
    "workspaceAnalytics.overview.userEngagement.activeMembersCount":
      "{activeMembersCount} 位活躍成員",
    "workspaceAnalytics.overview.userEngagement.activeTeamspaces":
      "最活躍的團隊空間",
    "workspaceAnalytics.overview.userEngagement.activeViewers":
      "最活躍的檢視人員",
    "workspaceAnalytics.overview.userEngagement.caption.memberCount":
      "{memberCount} 位成員",
    "workspaceAnalytics.overview.userEngagement.caption.pageEdits":
      "{pageEdits} 編輯",
    "workspaceAnalytics.overview.userEngagement.caption.pageView":
      "{pageViews} 瀏覽量",
    "workspaceAnalytics.overview.userEngagement.caption.pageViews":
      "{pageViews} 瀏覽量",
    "workspaceAnalytics.overview.userEngagement.changeFromZero.summaryByline.guests.positive":
      "其他 {changeValue} 個訪客超過過去 {numberOfDays} 天",
    "workspaceAnalytics.overview.userEngagement.changeFromZero.summaryByline.members.positive":
      "其他 {changeValue} 個成員超過過去 {numberOfDays} 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.allTime.negative":
      "自開始以來少於 {changeInPercentage} %",
    "workspaceAnalytics.overview.userEngagement.summaryByline.allTime.none":
      "還沒有變化",
    "workspaceAnalytics.overview.userEngagement.summaryByline.allTime.positive":
      "自開始以來超過 {changeInPercentage} %",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_28_days.negative":
      "{changeInPercentage} % 少於過去 28 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_28_days.none":
      "過去 28 天沒有變化",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_28_days.positive":
      "{changeInPercentage} % 超過過去 28 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_7_days.negative":
      "{changeInPercentage} % 少於過去 7 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_7_days.none":
      "過去 7 天沒有變化",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_7_days.positive":
      "{changeInPercentage} % 超過過去 7 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_90_days.negative":
      "{changeInPercentage} % 少於過去 90 天",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_90_days.none":
      "過去 90 天沒有變化",
    "workspaceAnalytics.overview.userEngagement.summaryByline.last_90_days.positive":
      "{changeInPercentage} % 超過過去 90 天",
    "workspaceAnalytics.overview.userEngagement.title": "使用者參與",
    "workspaceAnalytics.searchTab.searchTable.ctr.tooltip":
      "使用者開啟此查詢結果頁面的次數百分比",
    "workspaceAnalytics.searchTab.searchTable.searches.tooltip":
      "使用者在工作區搜尋查詢的次數",
    "workspaceAnalytics.searchTab.searchTable.uniqueSearches.tooltip":
      "搜尋查詢的使用者總數",
    "workspaceAnalytics.timeFilter.description": "下列項目的視圖和編輯",
    "workspaceAnalytics.title.feedbackButton": "想提出回饋？",
    "workspaceAnalytics.title.helpButton": "了解更多",
    "workspaceAnalytics.usersExport.columnHeader.email": "電子郵件",
    "workspaceAnalytics.usersExport.columnHeader.lastActive": "前次使用",
    "workspaceAnalytics.usersExport.columnHeader.name": "名稱",
    "workspaceAnalytics.usersExport.columnHeader.pageEdits": "頁面編輯",
    "workspaceAnalytics.usersExport.columnHeader.pageViews": "頁面視圖",
    "workspaceAnalytics.usersExport.columnHeader.spaceRole": "存取權限",
    "workspaceAnalytics.usersExport.columnHeader.teamspaces": "團隊空間",
    "workspaceAnalytics.usersOverTime.activeMembers":
      "{activeMembers, plural, other {{activeMembers} 位有效成員}}",
    "workspaceAnalytics.usersOverTime.activeMembers.sublabel":
      "已在 {dateRange} 內查看頁面",
    "workspaceAnalytics.usersOverTime.allUsers":
      "{users, plural, other {{users} 位使用者}}",
    "workspaceAnalytics.usersOverTime.emptyGraph": "資料不足，無法顯示圖表",
    "workspaceAnalytics.usersOverTime.title": "隨時間變化的使用者",
    "workspaceAnalytics.usersTab.feedbackButton": "想提出回饋？",
    "workspaceAnalytics.usersTab.refershUserAnalytics.defaultFailed":
      "無法擷取使用者分析。嘗試重新整理並重新開啟設定。",
    "workspaceAnalytics.usersTab.usersTable.pageEdits.tooltip":
      "工作區所有頁面的使用者編輯總數",
    "workspaceAnalytics.usersTab.usersTable.pageViews.tooltip":
      "工作區所有頁面的使用者頁面視圖總數",
    "workspaceAnalyticsTabs.content.title": "內容",
    "workspaceAnalyticsTabs.disabled.description":
      "工作區擁有者已關閉 {name} 的頁面視圖錄製。{br}你的工作區設定或個人頁面上不會有此資訊。",
    "workspaceAnalyticsTabs.disabled.description.unnamed":
      "工作區擁有者已關閉此工作區的頁面視圖錄製。{br}你的工作區設定或個人頁面上不會有此資訊。",
    "workspaceAnalyticsTabs.disabled.heading": "已停用分析",
    "workspaceAnalyticsTabs.disabled.learnMore": "了解更多",
    "workspaceAnalyticsTabs.empty.description":
      "工作區分析資訊可能需要一些時間才會出現。",
    "workspaceAnalyticsTabs.empty.heading": "還沒有工作區分析",
    "workspaceAnalyticsTabs.members.title": "成員",
    "workspaceAnalyticsTabs.overview.title": "概觀",
    "workspaceAnalyticsTabs.search.title": "搜尋",
    "workspaceTransferErrors.changeEmail.errorMessages":
      "你必須完成 {workspaceName} 的工作區轉移作業，才能變更電子郵件。",
    "workspaceTransferErrors.failedTransfer.errorMessages":
      "無法轉移工作區。請重新嘗試轉移作業。",
    "workspaceTransferErrors.invalidCorporateEmail.errorMessages":
      "無法將工作區轉移至企業使用者帳號。",
    "workspaceTransferErrors.noUserFound.errorMessages":
      "無法將工作區轉移至沒有相關聯 Notion 帳戶的電子郵件",
    "workspaceTransferErrors.reattemptWrongUser.errorMessages":
      "不允許重新嘗試轉移至不同使用者的帳戶。",
  });

  const routes = document.createElement("script");
  routes.id = "routes";
  routes.type = "application/json";
  routes.setAttribute("data-locale", lang);
  routes.text = JSON.stringify({});

  function insertMoment() {
    try {
      moment.updateLocale(lang.toLowerCase(), {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
      });
      moment.locale(lang.toLowerCase());
    } catch (e) {
      requestAnimationFrame(() => {
        insertMoment();
      });
    }
  }

  try {
    const preferredLocaleStr = window.localStorage.getItem(
      "LRU:KeyValueStore2:preferredLocale"
    );
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = lang;
      window.localStorage.setItem(
        "LRU:KeyValueStore2:preferredLocale",
        JSON.stringify(preferredLocale)
      ); // search window.document.querySelector("#messages") 请阅读
    }
  } catch (e) {}

  if (isElectron) {
    var observer = new MutationObserver(function (callback) {
      if (
        callback.filter((v) => {
          return v.target === document.head;
        }).length > 0
      ) {
        document.head.insertAdjacentElement("afterbegin", script);
        document.head.insertAdjacentElement("afterbegin", routes);
        observer.disconnect();
      }
    });
    observer.observe(document, {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: false, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
    });
    insertMoment();
  } else {
    function insert() {
      try {
        document.body.appendChild(script);
        document.body.appendChild(routes);
      } catch (e) {
        requestAnimationFrame(() => {
          insert();
        });
      }
    }
    insert();
    insertMoment();

    // for UserScript
    if (isSafari) {
      const notionRoot = document.createElement("div");
      notionRoot.id = "notion-app";
      notionRoot.setAttribute("data-inject", true);
      document.body.append(notionRoot);
      scriptSrcList.forEach((url) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.defer = "defer";
        script.src = url;
        script.setAttribute("data-inject", true);
        document.head.append(script);
      });
      if (!window.__console || !window.__console.push) {
        window.__console = {
          push: (msg) => {},
        };
      }
    }
  }
})();
