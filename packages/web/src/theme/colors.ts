import { rgb, rgba } from 'polished';

export type HivotThemeType = {
    mode: 'light' | 'dark';
    transparent: string;
    white: string;
    gray: string;
    lightGray: string;
    lighterGray: string;
    darkWhite: string;
    lightestGray: string;
    darkestGray: string;
    darkerGray: string;
    darkGray: string;
    contrastGray: string;
    contentGray: string;
    titleGray: string;
    lightBlack: string;
    threadGray: string;

    primaryBlue: string;
    lightBlue: string;
    primaryOrange: string;
    lighterBlue: string;
    primaryRed: string;
    black: string;
    green: string;

    bottomBorder: string;
    dialogBackground: string;
    dialogDivider: string;
    authBackground: string;
    onboardingBackground: string;
    bottomBorderWhite: string;
    titleSemiTransparentWhite: string;
    searchBar: string;
    tabBarBackground: string;
    tabBarItemActive: string;
    tabBarItemInactive: string;
    firstActionOrange: string;
    secondActionGray: string;
    expandedGray: string;
    tag: string;
    tagText: string;
    tagBorder: string;
    activityHeader: string;
    activityUnderlay: string;
    previewMessage: string;
    headerButton: string;
    projectBackground: string;
    jobName: string;
    headerBackground: string;
    headerTitle: string;
    filterPullBackground: string;
    activityBadge: string;
    bubbleBackground: string;
    acceptButtonBlue: string;
    denyButtonColor: string;
    fileExtensionBlue: string;
    menuItemIconColor: string;
    fabIcon: string;
    fabBackground: string;
    fabBorder: string;
    gifTitle: string;
    gifSearch: string;
    filterBar: string;
    closeableIndicator: string;
    statusBarStyle: 'dark-content' | 'light-content';
    mainScreenBackground: string;
    drawerBackground: string;
    editDrawerValue: string;
    textWhite: string;
    suggestionsBackground: string;
    inputText: string;
    inputPlaceholder: string;
    onBoardingTextColor: string;
    pinnedMessageBackground: string;
    pinnedMessageText: string;
    reactionsBackground: string;
    fileIconColor: string;
    tasksBackground: string;
    tasksBackgroundForeign: string;
    tasksListBackgroundForeign: string;
    fullScreenLoader: string;
    interstitialBackground: string;
    interstitialSkipButton: string;
    hotLinkBackground: string;
    hotLinkDescription: string;
    sectionBackground: string;
    inviteButton: string;
    appearanceModeBorder: string;
    onboardingBackgroundNew: string;
    onboardingDescription: string;
    linkColor: string;
};

/** @deprecated */
export const colors = {
    transparent: '#00000000',
    white: '#ffffff',
    gray: '#484848',
    lightGray: '#bdbdbd',
    lighterGray: '#E0E0E0',
    darkWhite: '#F0F0F0',
    lightestGray: '#FAFAFA',
    darkestGray: '#101010',
    darkerGray: '#202020',
    darkGray: '#303133',
    contrastGray: '#323232',
    contentGray: '#616161',
    titleGray: '#58595b',
    lightBlack: '#272B2E',
    threadGray: '#161616',

    primaryBlue: '#1855a3',
    lightBlue: '#3aadd9',
    primaryOrange: '#f47c2b',
    lighterBlue: '#bbdefb',
    primaryRed: '#e53935',
    black: '#000000',
    green: '#6dd400',

    bottomBorder: '#282828',
    dialogBackground: rgba(48, 49, 51, 0.95),
    dialogDivider: rgba(255, 255, 255, 0.12),
    authBackground: rgba(21, 21, 21, 0.8),
    onboardingBackground: '#151515',
    bottomBorderWhite: rgba('#ffffff', 0.2),
    titleSemiTransparentWhite: rgba('#ffffff', 0.6),
    searchBar: '#151515',
    tabBarBackground: '#1B1B1B',
    tabBarItemInactive: '#898989',
    firstActionOrange: '#F1691F',
    secondActionGray: '#232323',
    expandedGray: '#2C3E51',
    tag: '#37495d',
    tagText: rgba(245, 245, 245, 0.75),
    activityHeader: '#303133',
    activityUnderlay: '#464646',
    previewMessage: '#9E9E9E',
    headerButton: '#898989',
    jobName: rgba(250, 250, 250, 0.87),
    headerBackground: '#0F0F0F',
    headerTitle: rgba('#ffffff', 0.87),
    filterPullBackground: rgba(251, 251, 251, 0.1),
    activityBadge: '#C23824',
    bubbleBackground: '#2E2E2E',
    acceptButtonBlue: '#134B9A',
    denyButtonColor: '#E94C36',
    fileExtensionBlue: '#2088FE',
    menuItemIconColor: '#C1C1C1',
    fabIcon: '#424242',
    fabBackground: '#FBFBFB',
    fabBorder: '#898989',
    gifTitle: rgba('#ffffff', 0.87),
    filterBar: '#FAFAFA',
};

export const dark: HivotThemeType = {
    mode: 'dark',
    transparent: '#00000000',
    white: '#ffffff',
    gray: '#484848',
    lightGray: '#bdbdbd',
    lighterGray: '#E0E0E0',
    darkWhite: '#F0F0F0',
    lightestGray: '#FAFAFA',
    darkestGray: '#101010',
    darkerGray: '#202020',
    darkGray: '#303133',
    contrastGray: '#323232',
    contentGray: '#616161',
    titleGray: '#58595b',
    lightBlack: '#272B2E',
    threadGray: '#161616',

    primaryBlue: '#1855a3',
    lightBlue: '#3aadd9',
    primaryOrange: '#f47c2b',
    lighterBlue: '#bbdefb',
    primaryRed: '#e53935',
    black: '#000000',
    green: '#6dd400',

    bottomBorder: '#282828',
    dialogBackground: rgba('#000', 0.69),
    dialogDivider: rgba(255, 255, 255, 0.12),
    authBackground: rgba(21, 21, 21, 0.8),
    onboardingBackground: '#151515',
    bottomBorderWhite: rgba('#ffffff', 0.2),
    titleSemiTransparentWhite: rgba('#ffffff', 0.6),
    searchBar: '#151515',
    tabBarBackground: '#1B1B1B',
    tabBarItemActive: '#FFFFFF',
    tabBarItemInactive: '#898989',
    firstActionOrange: '#F1691F',
    secondActionGray: '#232323',
    expandedGray: '#2C3E51',
    tag: '#151515',
    tagText: rgba(245, 245, 245, 0.75),
    tagBorder: '#424242',
    activityHeader: '#FFFFFF',
    activityUnderlay: '#484848',
    previewMessage: '#9E9E9E',
    headerButton: '#898989',
    projectBackground: '#282828',
    jobName: rgba(250, 250, 250, 0.87),
    headerBackground: '#0F0F0F',
    headerTitle: rgba('#ffffff', 0.87),
    filterPullBackground: rgba(251, 251, 251, 0.1),
    activityBadge: '#D45400',
    bubbleBackground: '#2E2E2E',
    acceptButtonBlue: '#134B9A',
    denyButtonColor: '#E94C36',
    fileExtensionBlue: '#2088FE',
    menuItemIconColor: '#C1C1C1',
    fabIcon: '#898989',
    fabBackground: '#424242',
    fabBorder: '#898989',
    gifTitle: rgba('#ffffff', 0.87),
    gifSearch: '#929292',
    filterBar: '#202020',
    closeableIndicator: rgba('#ffffff', 0.6),
    statusBarStyle: 'light-content',
    mainScreenBackground: '#101010',
    drawerBackground: '#202020',
    editDrawerValue: rgba('#FFF', 0.87),
    textWhite: '#FFF',
    suggestionsBackground: '#202020',
    inputText: '#FFF',
    inputPlaceholder: '#F0F0F0',
    onBoardingTextColor: '#FAFAFA',
    pinnedMessageBackground: '#484848',
    pinnedMessageText: '#FFF',
    reactionsBackground: '#484848',
    fileIconColor: '#FFF',
    tasksBackground: rgba('#FFF', 0.1),
    tasksBackgroundForeign: rgba('#FFF', 0.1),
    tasksListBackgroundForeign: '#212121',
    fullScreenLoader: '#A8AFBD',
    interstitialBackground: '#151515',
    interstitialSkipButton: '#BDBDBD',
    hotLinkBackground: '#212121',
    hotLinkDescription: '#9E9E9E',
    sectionBackground: rgb(34, 34, 34),
    inviteButton: '#FFFFFF',
    appearanceModeBorder: '#FF9408',
    onboardingBackgroundNew: '#33495f',
    onboardingDescription: '#C9C9CA',
    linkColor: '#2196F3',
};

export const light: HivotThemeType = {
    mode: 'light',
    transparent: '#00000000',
    white: '#ffffff',
    gray: '#484848',
    lightGray: '#bdbdbd',
    lighterGray: '#E0E0E0',
    darkWhite: '#F0F0F0',
    lightestGray: '#FAFAFA',
    darkestGray: '#FEFEFE',
    darkerGray: '#202020',
    darkGray: '#303133',
    contrastGray: '#323232',
    contentGray: '#616161',
    titleGray: '#58595b',
    lightBlack: '#272B2E',
    threadGray: '#FFF',

    primaryBlue: '#1855a3',
    lightBlue: '#3aadd9',
    primaryOrange: '#f47c2b',
    lighterBlue: '#bbdefb',
    primaryRed: '#e53935',
    black: '#000000',
    green: '#6dd400',

    bottomBorder: '#282828',
    dialogBackground: rgba('#000', 0.69),
    dialogDivider: rgba('#000', 0.12),
    authBackground: '#00000000',
    onboardingBackground: '#00000000',
    bottomBorderWhite: rgba('#000', 0.2),
    titleSemiTransparentWhite: rgba('#000', 0.6),
    searchBar: '#151515',
    tabBarBackground: '#FBFBFB',
    tabBarItemActive: '#505050',
    tabBarItemInactive: '#616266',
    firstActionOrange: '#F1691F',
    secondActionGray: '#232323',
    expandedGray: '#2C3E51',
    tag: '#FFF',
    tagBorder: '#C1C1C1',
    tagText: '#4b4d57',
    activityHeader: '#303133',
    activityUnderlay: '#B7B7B7',
    previewMessage: '#6F6F6F',
    headerButton: '#898989',
    projectBackground: '#F0F0F0',
    jobName: '#303133',
    headerBackground: '#F6F6F6',
    headerTitle: '#131316',
    filterPullBackground: rgba(251, 251, 251, 0.1),
    activityBadge: '#D45400',
    bubbleBackground: '#D5D5D5',
    acceptButtonBlue: '#134B9A',
    denyButtonColor: '#E94C36',
    fileExtensionBlue: '#2088FE',
    menuItemIconColor: '#212121',
    fabIcon: '#424242',
    fabBackground: '#FBFBFB',
    fabBorder: '#898989',
    gifTitle: rgba('#ffffff', 0.87),
    gifSearch: '#929292',
    filterBar: '#FAFAFA',
    closeableIndicator: rgba(193, 193, 193, 0.5),
    statusBarStyle: 'dark-content',
    mainScreenBackground: '#FFF',
    drawerBackground: '#FBFBFB',
    editDrawerValue: rgba('#000', 0.87),
    textWhite: '#000',
    suggestionsBackground: '#F0F0F0',
    inputText: '#2E2E2E',
    inputPlaceholder: '#4F4F4F',
    onBoardingTextColor: '#212121',
    pinnedMessageBackground: '#D7D7D7',
    pinnedMessageText: '#303133',
    reactionsBackground: '#F1F1F1',
    fileIconColor: '#F0F0F0',
    tasksBackground: rgba('#FFF', 0.1),
    tasksBackgroundForeign: '#E5E5E5',
    tasksListBackgroundForeign: '#EFEFEF',
    fullScreenLoader: '#A8AFBD',
    interstitialBackground: '#FAFAFA',
    interstitialSkipButton: '#616161',
    hotLinkBackground: '#F6F6F6',
    hotLinkDescription: '#747576',
    sectionBackground: rgb(240, 240, 240),
    inviteButton: '#424345',
    appearanceModeBorder: '#FF9408',
    onboardingBackgroundNew: '#33495f',
    onboardingDescription: '#C9C9CA',
    linkColor: '#2196F3',
};
