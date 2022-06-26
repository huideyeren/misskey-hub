import{r as t,o,c as l,a as e,b as n,F as r,d as i,e as s}from"./app.99e7c2bf.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=e("h1",{id:"release-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#release-notes","aria-hidden":"true"},"#"),i(" Release Notes")],-1),c=e("p",null,"Notes for indivudual misskey releases.",-1),m={class:"custom-container tip"},f=e("i",{class:"fas fa-info"},null,-1),p=i("Information updates may not be translated yet. For the latest information see "),g={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},b=i("GitHub"),x=i("."),y=s('<h2 id="_12-111-1-2022-06-13" tabindex="-1"><a class="header-anchor" href="#_12-111-1-2022-06-13" aria-hidden="true">#</a> 12.111.1\uFF082022/06/13\uFF09</h2><h3 id="bugfixes" tabindex="-1"><a class="header-anchor" href="#bugfixes" aria-hidden="true">#</a> Bugfixes</h3><ul><li>some fixes of multiple notification read @tamaina</li><li>some GenerateVideoThumbnail failed @Johann150</li><li>Client: fix problem with widget information not being saved in Deck mode @syuilo</li><li>Client: edit screen appears when trying to open gallery posts @futchitwo</li></ul><h2 id="_12-111-0-2022-06-11" tabindex="-1"><a class="header-anchor" href="#_12-111-0-2022-06-11" aria-hidden="true">#</a> 12.111.0\uFF082022/06/11\uFF09</h2><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h3><ul><li>Node.js 16.15.0 or later is required</li></ul><h3 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h3><ul><li>Supports Unicode Emoji 14.0 @mei23</li><li>Push notifications for multiple accounts #7667 @tamaina</li><li>Set click and <code>action</code> for Push notifications #7667 @tamaina</li><li>Option to discard original image and only keep <code>WebPublic</code> one when uploading it to Drive @tamaina</li><li>Server: always remove completed tasks of job queue @Johann150</li><li>Client: allow cropping of images in avatar settings @syuilo</li><li>Client: make emoji stand out more on reaction button @Johann150</li><li>Client: display URL of QR code for TOTP registration @tamaina</li><li>Client: render quote renote CWs as MFM @pixeldesu</li><li>API: <code>notifications/read</code> also accepts in arrays #7667 @tamaina</li><li>API: if the query meets the <code>username</code> condition, <code>username</code> is also <code>LIKE</code> searched when searching users @tamaina</li><li>MFM: Allow speed changes in all animated MFMs @Johann150</li><li>The theme color is now better validated. @Johann150 Your own theme color may be unset if it was in an invalid format. Admins should check their instance settings if in doubt.</li><li>Perform port diagnosis at startup only when Listen fails @mei23</li><li>Rate limiting is now also usable for non-authenticated users. @Johann150 @mei23 Admins should make sure the reverse proxy sets the <code>X-Forwarded-For</code> header to the original address.</li></ul><h3 id="bugfixes-1" tabindex="-1"><a class="header-anchor" href="#bugfixes-1" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Server: keep file order of note attachement @Johann150</li><li>Server: fix missing foreign key for reports leading to reports page being unusable @Johann150</li><li>Server: fix internal in-memory caching @Johann150</li><li>Server: prevent crash when processing certain PNGs @syuilo</li><li>Server: Fix unable to generate video thumbnails @mei23</li><li>Server: Fix <code>Cannot find module</code> issue @mei23</li><li>Federation: Add rel attribute to host-meta @mei23</li><li>Federation: add id for activitypub follows @Johann150</li><li>Federation: use <code>source</code> instead of <code>_misskey_content</code> @Johann150</li><li>Federation: ensure resolver does not fetch local resources via HTTP(S) @Johann150</li><li>Federation: correctly render empty note text @Johann150</li><li>Federation: Fix quote renotes containing no text being federated correctly @Johann150</li><li>Federation: remove duplicate br tag/newline @Johann150</li><li>Federation: add missing authorization checks @Johann150</li><li>Client: fix profile picture height in mentions @tamaina</li><li>Client: fix abuse reports page to be able to show all reports @Johann150</li><li>Client: fix settings page @tamaina</li><li>Client: fix profile tabs @futchitwo</li><li>Client: fix popout URL @futchitwo</li><li>Client: correctly handle MiAuth URLs with query string @sn0w</li><li>Client: correct behavior of the function to display new Note on its details page @xianonn</li><li>MFM: more animated functions support <code>speed</code> parameter @futchitwo</li><li>MFM: limit large MFM @Johann150</li></ul><h2 id="_12-110-1-2022-04-23" tabindex="-1"><a class="header-anchor" href="#_12-110-1-2022-04-23" aria-hidden="true">#</a> 12.110.1\uFF082022/04/23\uFF09</h2><h3 id="bugfixes-2" tabindex="-1"><a class="header-anchor" href="#bugfixes-2" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Fix GOP rendering @syuilo</li><li>Improve performance of antenna, clip, and list @xianonn</li></ul><h2 id="_12-110-0-2022-04-11" tabindex="-1"><a class="header-anchor" href="#_12-110-0-2022-04-11" aria-hidden="true">#</a> 12.110.0 (2022/04/11)</h2><h3 id="improvements-1" tabindex="-1"><a class="header-anchor" href="#improvements-1" aria-hidden="true">#</a> Improvements</h3><ul><li>Improve webhook @syuilo</li><li>Client: Show loading icon on splash screen @syuilo</li></ul><h3 id="bugfixes-3" tabindex="-1"><a class="header-anchor" href="#bugfixes-3" aria-hidden="true">#</a> Bugfixes</h3><ul><li>API: parameter validation of users/show was wrong</li><li>Federation: fixed problem with direct posts to remote instances not reaching @syuilo</li></ul><h2 id="_12-109-2-2022-04-03" tabindex="-1"><a class="header-anchor" href="#_12-109-2-2022-04-03" aria-hidden="true">#</a> 12.109.2 (2022/04/03)</h2><h3 id="bugfixes-4" tabindex="-1"><a class="header-anchor" href="#bugfixes-4" aria-hidden="true">#</a> Bugfixes</h3><ul><li>API: admin/update-meta was not working @syuilo</li><li>Client: fix issue where meta[name=&quot;theme-color&quot;] content was undefined when switching or loading themes @tamaina</li></ul><h2 id="_12-109-1-2022-04-02" tabindex="-1"><a class="header-anchor" href="#_12-109-1-2022-04-02" aria-hidden="true">#</a> 12.109.1 (2022/04/02)</h2><h3 id="bugfixes-5" tabindex="-1"><a class="header-anchor" href="#bugfixes-5" aria-hidden="true">#</a> Bugfixes</h3><ul><li>API: Fixed problem with Renote</li></ul><h2 id="_12-109-0-2022-04-02" tabindex="-1"><a class="header-anchor" href="#_12-109-0-2022-04-02" aria-hidden="true">#</a> 12.109.0 (2022/04/02)</h2><h3 id="improvements-2" tabindex="-1"><a class="header-anchor" href="#improvements-2" aria-hidden="true">#</a> Improvements</h3><ul><li>Webhooks @syuilo</li><li>Bull Dashboard built in to check and manipulate job queues @syuilo <ul><li>To open the Bull Dashboard, you must relog (log out and log back in) to misskey once with your admin account</li></ul></li><li>Check that installed Node.js version fulfils version requirement @ThatOneCalculator</li><li>Server: overall performance improvements @syuilo</li><li>Federation: avoid duplicate activity delivery @Johann150</li><li>Federation: limit federation of reactions on direct notes @Johann150</li><li>Client: improved deck handling on touchpad/touchscreen @tamaina</li></ul><h3 id="bugfixes-6" tabindex="-1"><a class="header-anchor" href="#bugfixes-6" aria-hidden="true">#</a> Bugfixes.</h3><ul><li>Email address validation was not working @ybw2016v</li><li>API: fix endpoint endpoint @Johann150</li><li>API: fix admin/meta endpoint @syuilo</li><li>API: improved validation and documentation for endpoints that accept different variants of input @Johann150</li><li>API: <code>notes/create</code>: The <code>mediaIds</code> property is now deprecated. <ul><li>Use <code>fileIds</code> instead, it has the same behaviour.</li></ul></li><li>Client: fixed problem with URLs not displaying if decodeURIComponent fails due to abnormal URI encoding @tamaina</li></ul><h2 id="_12-108-1-2022-03-12" tabindex="-1"><a class="header-anchor" href="#_12-108-1-2022-03-12" aria-hidden="true">#</a> 12.108.1 (2022-03-12)</h2><h3 id="bugfixes-7" tabindex="-1"><a class="header-anchor" href="#bugfixes-7" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Fixed relay not working @xianonn</li><li>Fixed problem with ulid not working @syuilo</li><li>Fixed a problem that OGP cannot be obtained correctly from outside @syuilo</li><li>Instance can&#39;t get the files from other instance when there are items in allowedPrivateNetworks in .config/default.yml @ybw2016v</li></ul><h2 id="_12-108-0-2022-03-09" tabindex="-1"><a class="header-anchor" href="#_12-108-0-2022-03-09" aria-hidden="true">#</a> 12.108.0 (2022-03-09)</h2><h3 id="note-1" tabindex="-1"><a class="header-anchor" href="#note-1" aria-hidden="true">#</a> Note</h3><ul><li>Node v16.14.0 or later is required from this version</li></ul><h3 id="changes" tabindex="-1"><a class="header-anchor" href="#changes" aria-hidden="true">#</a> Changes</h3><ul><li>The ability to set the maximum number of characters in a note has been removed and the default is now a flat 3000 characters @syuilo</li><li>Misskey can no longer terminate HTTPS connections. @Johann150 <ul><li>If you did not use a reverse proxy (e.g. nginx) before, you will probably need to adjust your configuration file and set up a reverse proxy. The https configuration key is no longer recognized!</li></ul></li></ul><h3 id="improvements-3" tabindex="-1"><a class="header-anchor" href="#improvements-3" aria-hidden="true">#</a> Improvements</h3><ul><li>Instance default theme can be set @syuilo</li><li>Allow mute to set expiration date @syuilo</li><li>Create a notification when a survey is closed @syuilo</li><li>Allow up to 16 profile fields to be saved @syuilo</li><li>Add Pub&amp;Sub to federation chart @syuilo</li><li>Add Active to federation chart @syuilo</li><li>Queries to databases that take longer than 10 seconds by default will be aborted @syuilo <ul><li>You can change the timeout period by setting <code>statement_timeout</code> in the configuration file <code>db.extra</code></li></ul></li><li>Client: display instance icon on splash screen @syuilo</li></ul><h3 id="bugfixes-8" tabindex="-1"><a class="header-anchor" href="#bugfixes-8" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed reaction picker height sometimes remains low and does not return @syuilo</li><li>Client: Fixed username autocomplete not working properly @syuilo</li><li>Client: Fixed difficulty in editing widgets with touch operation @xianonn</li><li>Client: Fixed register_note_view_interruptor() not working @syuilo</li><li>Client: iPhone X or later(?) Fixed: Fixed page content not being fully displayed on iPhone X or later(?) @tamaina</li><li>Client: Fix image caption on mobile @nullobsi</li></ul><h2 id="_12-107-0-2022-02-12" tabindex="-1"><a class="header-anchor" href="#_12-107-0-2022-02-12" aria-hidden="true">#</a> 12.107.0 (2022/02/12)</h2><h3 id="improvements-4" tabindex="-1"><a class="header-anchor" href="#improvements-4" aria-hidden="true">#</a> Improvements</h3><ul><li>Client: add theme @syuilo</li></ul><h3 id="bugfixes-9" tabindex="-1"><a class="header-anchor" href="#bugfixes-9" aria-hidden="true">#</a> Bugfixes</h3><ul><li>API: fixed internal error in stats API @syuilo</li><li>Client: Fixed soft mute sometimes causing everything to match @tamaina</li><li>Client: take screen safe area into account of the device @syuilo</li><li>Client: Fixed issue with sidebar post button not showing in some environments @syuilo</li></ul><h2 id="_12-106-3-2022-02-11" tabindex="-1"><a class="header-anchor" href="#_12-106-3-2022-02-11" aria-hidden="true">#</a> 12.106.3 (2022/02/11)</h2><h3 id="improvements-5" tabindex="-1"><a class="header-anchor" href="#improvements-5" aria-hidden="true">#</a> Improvements</h3><ul><li>Client: adjust margins on smart phones @syuilo</li></ul><h3 id="bugfixes-10" tabindex="-1"><a class="header-anchor" href="#bugfixes-10" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: fixed issue with note details not showing @syuilo</li></ul><h2 id="_12-106-2-2022-02-11" tabindex="-1"><a class="header-anchor" href="#_12-106-2-2022-02-11" aria-hidden="true">#</a> 12.106.2 (2022/02/11)</h2><h3 id="bugfixes-11" tabindex="-1"><a class="header-anchor" href="#bugfixes-11" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed an issue where deleted notes did not automatically disappear from the timeline @syuilo</li><li>Client: Fixed an issue where the number of reactions may be incorrect @syuilo</li><li>Fixed problem with migration not working in some environments @syuilo</li></ul><h2 id="_12-106-1-2022-02-11" tabindex="-1"><a class="header-anchor" href="#_12-106-1-2022-02-11" aria-hidden="true">#</a> 12.106.1 (2022/02/11)</h2><h3 id="bugfixes-12" tabindex="-1"><a class="header-anchor" href="#bugfixes-12" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: fixed problem with word mute not saving @syuilo</li></ul><h2 id="_12-106-0-2022-02-11" tabindex="-1"><a class="header-anchor" href="#_12-106-0-2022-02-11" aria-hidden="true">#</a> 12.106.0 (2022/02/11)</h2><h3 id="improvements-6" tabindex="-1"><a class="header-anchor" href="#improvements-6" aria-hidden="true">#</a> Improvements</h3><ul><li>Improve federation chart @syuilo</li><li>Client: Allow to set the size of the reaction picker @syuilo</li><li>Client: Relaxed reaction picker width and height restrictions @syuilo</li><li>Docker: Update to Node v16.13.2 @mei23</li><li>Update dependencies</li></ul><h3 id="bugfixes-13" tabindex="-1"><a class="header-anchor" href="#bugfixes-13" aria-hidden="true">#</a> Bugfixes</h3><ul><li>validate regular expressions in word mutes @Johann150</li></ul><h2 id="_12-105-0-2022-02-09" tabindex="-1"><a class="header-anchor" href="#_12-105-0-2022-02-09" aria-hidden="true">#</a> 12.105.0 (2022/02/09)</h2><h3 id="improvements-7" tabindex="-1"><a class="header-anchor" href="#improvements-7" aria-hidden="true">#</a> Improvements</h3><ul><li>Allow to set the theme color of the instance @syuilo</li></ul><h4 id="bugfixes-14" tabindex="-1"><a class="header-anchor" href="#bugfixes-14" aria-hidden="true">#</a> Bugfixes</h4><ul><li>Fixed migration failure in some environments @syuilo</li></ul><h2 id="_12-104-0-2022-02-09" tabindex="-1"><a class="header-anchor" href="#_12-104-0-2022-02-09" aria-hidden="true">#</a> 12.104.0 (2022/02/09)</h2><h3 id="note-2" tabindex="-1"><a class="header-anchor" href="#note-2" aria-hidden="true">#</a> Note</h3><p>Please run <code>npm run clean</code> before building.</p><p>Due to the large scale of migration in this release, migration may take some time for some instances. If the migration does not finish, you can delete all <strong>records</strong> in the table starting with <code>__chart__</code> (do not delete the table itself) and try again, although the chart information will be reset.</p><h3 id="improvements-8" tabindex="-1"><a class="header-anchor" href="#improvements-8" aria-hidden="true">#</a> Improvements</h3><ul><li>Chart engine enhancements @syuilo <ul><li>Reduced table size</li><li>Added number of notes with attachments to notes/instance/perUserNotes chart</li><li>Added new entry to activeUsers chart</li><li>Added new entry to federation chart</li><li>Added apRequest chart</li><li>network chart eliminated</li></ul></li><li>Client: Enable to see the chart on own instance info page @syuilo</li><li>Client: Allow manual specification of device type @syuilo</li><li>Client: updated UI icons @syuilo</li><li>Client: self-hosting UI icons @syuilo</li><li>Review NodeInfo user and post count content @xianonn</li></ul><h3 id="bugfixes-15" tabindex="-1"><a class="header-anchor" href="#bugfixes-15" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed &quot;There is a new note&quot; display remains when switching timeline type @tamaina</li><li>Client: fix UI size issue @tamaina</li><li>Client: Setting instance information of notes to always show breaks the timeline @Johann150</li><li>Client: Fixed an issue where the cursor position was not correct when replying depending on the environment @syuilo</li><li>Client: Fixed a problem that switching the display range of instances does not work in the control panel users and files @syuilo</li><li>Client: Fixed no update notification dialog @syuilo</li><li>Client: Follows/Followers Visibility changes won&#39;t be saved unless clicking on an other checkbox @Johann150</li><li>API: Fix API cast @mei23</li><li>Add instance favicon where it&#39;s missing @solfisher</li><li>Fixed problems with periodic resync of charts not working @syuilo</li></ul><h2 id="_12-103-1-2022-02-02" tabindex="-1"><a class="header-anchor" href="#_12-103-1-2022-02-02" aria-hidden="true">#</a> 12.103.1 (2022/02/02)</h2><h3 id="bugfixes-16" tabindex="-1"><a class="header-anchor" href="#bugfixes-16" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed an issue with tooltip display position being incorrect.</li></ul><h2 id="_12-103-0-2022-02-02" tabindex="-1"><a class="header-anchor" href="#_12-103-0-2022-02-02" aria-hidden="true">#</a> 12.103.0 (2022/02/02)</h2><h3 id="improvements-9" tabindex="-1"><a class="header-anchor" href="#improvements-9" aria-hidden="true">#</a> Improvements</h3><ul><li>Client: Allow instance information to be reacquired from the coalition instance page.</li></ul><h3 id="bugfixes-17" tabindex="-1"><a class="header-anchor" href="#bugfixes-17" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed an issue where images are hidden when reactions are updated after displaying NSFW images of a post.</li><li>Client: Fixed problem with &quot;Clip&quot; page not opening</li><li>Client: Fixed Trends widget not working</li><li>Client: Fixed Federation widget not working</li><li>Client: Fixed emoji picker not opening in reaction settings</li><li>Client: Fixed issue with inclusion of mentions on DM page</li><li>Client: hashtag retention field in submission form not working</li><li>Client: Fixed side view not working</li><li>Client: ensure that specified users does not get duplicates</li><li>Add <code>img-src</code> and <code>media-src</code> directives to <code>Content-Security-Policy</code> for files and media proxy</li></ul><h2 id="_12-102-1-2022-01-27" tabindex="-1"><a class="header-anchor" href="#_12-102-1-2022-01-27" aria-hidden="true">#</a> 12.102.1 (2022/01/27)</h2><h3 id="bugfixes-18" tabindex="-1"><a class="header-anchor" href="#bugfixes-18" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Fixed problem with chat not displaying</li></ul><h2 id="_12-102-0-2022-01-27" tabindex="-1"><a class="header-anchor" href="#_12-102-0-2022-01-27" aria-hidden="true">#</a> 12.102.0 (2022/01/27)</h2><h3 id="note-3" tabindex="-1"><a class="header-anchor" href="#note-3" aria-hidden="true">#</a> Note</h3><p>After the update, some custom emoji may not be displayed. In this case, batch exporting the emoji from the emoji management page and then batch importing them again from the control panel will fix the problem.</p><p>\u26A0 It is not compatible with zips exported prior to 12.102.0. Please update before exporting.</p><h3 id="changes-1" tabindex="-1"><a class="header-anchor" href="#changes-1" aria-hidden="true">#</a> Changes</h3><ul><li>Room functionality has been removed. <ul><li>It will be restored as a separate repository at a later date.</li></ul></li><li>Reversi function has been removed. <ul><li>It will be restored as a separate repository at a later date.</li></ul></li><li>Chat UI has been removed.</li><li>The number of files that can be attached to a note has been increased to 16.</li><li>SVG custom emoji are now converted to PNGs for display</li></ul><h3 id="improvments" tabindex="-1"><a class="header-anchor" href="#improvments" aria-hidden="true">#</a> Improvments</h3><ul><li>Custom emoji batch editing function</li><li>Batch import of custom emoji</li><li>Posting form now allows temporary switching of posting accounts</li><li>Unifying Misskey-specific IRIs in JSON-LD <code>@context</code>.</li><li>Improved client performance</li><li>Security Improvements</li></ul><h3 id="bugfixes-19" tabindex="-1"><a class="header-anchor" href="#bugfixes-19" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Fixed handling of upload errors</li></ul><h2 id="_12-101-1-2021-12-29" tabindex="-1"><a class="header-anchor" href="#_12-101-1-2021-12-29" aria-hidden="true">#</a> 12.101.1 (2021/12/29)</h2><h3 id="bugfixes-20" tabindex="-1"><a class="header-anchor" href="#bugfixes-20" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Fixed SVG emoji not displaying</li><li>Fixed a case where the extension of exported emoji is false.</li></ul><h2 id="_12-101-0-2021-12-29" tabindex="-1"><a class="header-anchor" href="#_12-101-0-2021-12-29" aria-hidden="true">#</a> 12.101.0 (2021/12/29)</h2><h3 id="improvements-10" tabindex="-1"><a class="header-anchor" href="#improvements-10" aria-hidden="true">#</a> Improvements</h3><ul><li>Client: Improved accuracy of note previews</li><li>Client: Improvement of MFM sparkle effect</li><li>Client: Design adjustments</li><li>Security Improvements</li></ul><h3 id="bugfixes-21" tabindex="-1"><a class="header-anchor" href="#bugfixes-21" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed some components being hidden behind the scenes</li><li>Fix html blockquote conversion</li></ul><h2 id="_12-100-2-2021-12-18" tabindex="-1"><a class="header-anchor" href="#_12-100-2-2021-12-18" aria-hidden="true">#</a> 12.100.2 (2021/12/18)</h2><h3 id="bugfixes-22" tabindex="-1"><a class="header-anchor" href="#bugfixes-22" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed issue where Deck column increases/decreases were not properly reflected until page was reloaded.</li><li>Client: Fixed some components being hidden behind the scenes</li><li>Client: Fixed heavy load on custom emoji list page</li></ul><h2 id="_12-100-1-2021-12-17" tabindex="-1"><a class="header-anchor" href="#_12-100-1-2021-12-17" aria-hidden="true">#</a> 12.100.1 (2021/12/17)</h2><h3 id="bugfixes-23" tabindex="-1"><a class="header-anchor" href="#bugfixes-23" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Design coordination</li><li>Client: Improved display of various menus and reaction picker on mobile</li></ul><h2 id="_12-100-0-2021-12-17" tabindex="-1"><a class="header-anchor" href="#_12-100-0-2021-12-17" aria-hidden="true">#</a> 12.100.0 (2021/12/17)</h2><h3 id="improvements-11" tabindex="-1"><a class="header-anchor" href="#improvements-11" aria-hidden="true">#</a> Improvements</h3><ul><li>Client: Improved display of various menus and reaction picker on mobile</li></ul><h3 id="bugfixes-24" tabindex="-1"><a class="header-anchor" href="#bugfixes-24" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed some components hiding in the background</li></ul><h2 id="_12-99-3-2021-12-14" tabindex="-1"><a class="header-anchor" href="#_12-99-3-2021-12-14" aria-hidden="true">#</a> 12.99.3 (2021/12/14)</h2><h3 id="bugfixes-25" tabindex="-1"><a class="header-anchor" href="#bugfixes-25" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed problem with autocomplete being hidden behind dialogs</li></ul><h2 id="_12-99-2-2021-12-14" tabindex="-1"><a class="header-anchor" href="#_12-99-2-2021-12-14" aria-hidden="true">#</a> 12.99.2 (2021/12/14)</h2><h2 id="_12-99-1-2021-12-14" tabindex="-1"><a class="header-anchor" href="#_12-99-1-2021-12-14" aria-hidden="true">#</a> 12.99.1 (2021/12/14)</h2><h2 id="_12-99-0-2021-12-14" tabindex="-1"><a class="header-anchor" href="#_12-99-0-2021-12-14" aria-hidden="true">#</a> 12.99.0 (2021/12/14)</h2><h3 id="improvements-12" tabindex="-1"><a class="header-anchor" href="#improvements-12" aria-hidden="true">#</a> Improvements</h3><ul><li>Added a user-level instance mute in user settings</li><li>Added option to not include muted users in follow export</li><li>Added option to not include unused accounts in follow export</li><li>Custom emoji export function</li><li>Chart performance improvements</li><li>Allowed to exit from a group</li></ul><h3 id="bugfixes-26" tabindex="-1"><a class="header-anchor" href="#bugfixes-26" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: Fixed a problem that prevented some functions from working when using a display with touch functionality and mouse operation.</li><li>Client: Fixed an issue where clip settings could not be edited.</li><li>Client: Fixed a problem with menus etc. being hidden behind windows</li></ul><h2 id="_12-98-0-12-03-2021" tabindex="-1"><a class="header-anchor" href="#_12-98-0-12-03-2021" aria-hidden="true">#</a> 12.98.0 (12/03/2021)</h2><h3 id="improvements-13" tabindex="-1"><a class="header-anchor" href="#improvements-13" aria-hidden="true">#</a> Improvements</h3><ul><li>API: /antennas/notes API now allows filtering by date</li><li>Client: Confirmation dialog box when voting on a survey</li><li>Client: Renote note detail page to the original note page.</li><li>Client: Image popups can be closed by clicking on them.</li><li>Client: Design adjustments</li><li>Ability to remove followers</li></ul><h3 id="bugfixes-27" tabindex="-1"><a class="header-anchor" href="#bugfixes-27" aria-hidden="true">#</a> Bugfixes</h3><ul><li>Client: fixed the issue of tabs being displayed on the UI even when LTL and GTL are disabled</li><li>Client: Fixed problem with incorrect error message for incorrect password in login</li><li>Client: Corrected the order of users in the Reaction tooltip and Renote tooltip.</li><li>Client: Fixed problem with master volume of sound not being saved correctly.</li><li>Client: Fixed an inoperability issue in some environments when notifications are displayed.</li><li>Client: Fixed problem with tooltips when tapped on mobile</li><li>Client: Fixed an issue where, when replying to a note in a remote instance, if the target note contained a mentions to a user in that remote instance, it was sometimes passed on as a mentions to the local user in the reply text.</li><li>Client: Fixed a problem in the image viewer where only a portion of the top image is displayed when the entire image is displayed.</li><li>API: Fixed an internal error when retrieving users depending on conditions</li></ul><h3 id="changes-2" tabindex="-1"><a class="header-anchor" href="#changes-2" aria-hidden="true">#</a> Changes</h3><ul><li>Client: Moderator badge no longer displayed in notes</li></ul><h2 id="_12-97-0-2021-11-19" tabindex="-1"><a class="header-anchor" href="#_12-97-0-2021-11-19" aria-hidden="true">#</a> 12.97.0 (2021-11-19)</h2><h3 id="improvements-14" tabindex="-1"><a class="header-anchor" href="#improvements-14" aria-hidden="true">#</a> Improvements</h3><ul><li>client: auto-folding also applies to renotes</li><li>client: improved display of long threads</li><li>client: also apply MFM to translations, so that it retains the formatting (line breaks, etc.) of the original text.</li><li>client: add a confirmation dialog before deleting an account</li></ul><h3 id="bugfixes-28" tabindex="-1"><a class="header-anchor" href="#bugfixes-28" aria-hidden="true">#</a> Bugfixes</h3><ul><li>client: fixed an issue where &quot;All&quot; in user search did not work</li><li>client: fixed the style of the Reaction List and Renote List tooltips</li></ul>',137),w={class:"custom-container warning"},v=e("i",{class:"fas fa-exclamation"},null,-1),_=i("Older releases are not translated yet. If you can, please edit this page to add them from the Japanese changelog on "),C={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},F=i("GitHub"),k=i(".");function I(A,B){const a=t("ExternalLinkIcon");return o(),l(r,null,[u,c,e("div",m,[f,e("p",null,[p,e("a",g,[b,n(a)]),x])]),y,e("div",w,[v,e("p",null,[_,e("a",C,[F,n(a)]),k])])],64)}var N=d(h,[["render",I]]);export{N as default};
