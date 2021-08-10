const PROXY_DIRECT = "DIRECT";
const DIRECT = "DIRECT";
const BLACK = "PROXY 127.0.0.1:8119";
const WHITE = PROXY_DIRECT;
const domainsAds = [
    "a.appbaqend.com", "a.applovin.com", "a.applvn.com", "ad.360in.com", "ad.a-ads.com", "adc3-launch.adcolony.com", "adimpression.startappservice.com", "ads.aerserv.com", "ads.api.vungle.com", "ads.flurry.com", "ads.google.com", "ads.mopub.com", "ads.platform.zalo.me", "ads30.adcolony.com", "adservice.google.com", "adsmetadata.startappservice.com", "adtima-common.zadn.vn", "adtima-media.zadn.vn", "adtima-static.zadn.vn", "adtrack1.midasplayer.com", "ai.login.umeng.com", "ailamtrieuphu.com", "analytics.rayjump.com", "api-eu.bidmachine.io", "api.ad.smaato.net", "api.adthor.com", "api.adtimaserver.vn", "api.app1vn.com", "api.appodeal.com", "api.leanplum.com", "api.moblink.mob.com", "api.onesignal.com", "api.share.mob.com", "api.verify.mob.com", "api.zcoup.com", "apinas.nct.vn", "app.adjust.com", "applog.uc.cn", "as.ad-brix.com", "attr.appsflyer.com", "auction.unityads.unity3d.com", "bidmachine.io", "bs.serving-sys.com", "bugly.qq.com", "buttons-config.sharethis.com", "c.adsco.re", "c.statcounter.com", "c1.popads.net", "c2.popads.net", "c4d-cdn.adcolony.com", "campaign.ad-brix.com", "cdn-akamai.unityads.unity3d.com", "cdn.appnext.com", "cdn.appsflyer.com", "cdn.bootcss.com", "cdnappicons.appsflyer.com", "cdp.cloud.unity3d.com", "cf.iadsdk.apple.com", "click.startappservice.com", "config.ad-brix.com", "config.unityads.unity3d.com", "connect.tapjoy.com", "contenido1.midasplayer.com", "content.tapjoy.com", "count-server.sharethis.com", "crashlytics2.l.google.com", "d.adsplay.net", "d.applovin.com", "d.applvn.com", "dangky.mobifone.vn", "data.flurry.com", "devs.data.mob.com", "discovery.api.zaloapp.com", "dts.startappservice.com", "e.crashlytics.com", "ets-ap-southeast-1.track.smaato.net", "event.rubyfish.app", "events.appsflyer.com", "events3.adcolony.com", "events3alt.adcolony.com", "f.gm.mob.com", "g.eclick.vn", "gameeve.beacon.qq.com", "gamestr.beacon.qq.com", "gdmf.apple.com", "googleads.g.doubleclick.net", "gstaticadssl.l.google.com", "gum.criteo.com", "i-raovat.vnecdn.net", "images.startappservice.com", "imp.startappservice.com", "impact.applifier.com", "impression.appsflyer.com", "infoevent.startappservice.com", "init.sms.mob.com", "init.startappservice.com", "init.supersonicads.com", "ios.bugly.qq.com", "is-gateway.supersonicads.com", "jianchiapp.com", "kaymopk.com", "l.gm.mob.com", "l.sharethis.com", "live.chartboost.com", "log.adtimaserver.vn", "log.api.zaloapp.com", "log.baomoi.com", "log.eclick.vn", "log.sdk.zadn.vn", "log.sms.mob.com", "log.umsns.com", "log4x.nixcdn.com", "logger.adthor.com", "logger.zcoup.com", "lrc.nct.nixcdn.com", "mavq.net", "mesu.apple.com", "mpay.nct.vn", "ms.applovin.com", "ms.applvn.com", "mvas.mobifone.vn", "net.rayjump.com", "ng-vn-notice.gameitop.com", "ocsp.apple.com", "ocsp2.apple.com", "onelink.appsflyer.com", "org.zaloapp.ads.zdn.vn", "outcome-ssp.supersonicads.com", "p.midasplayer.com", "pagead2.googlesyndication.com", "pagead46.l.doubleclick.net", "placements.tapjoy.com", "platform-api.sharethis.com", "platform-cdn.sharethis.com", "plbslog.umeng.com", "pokkt.fuse-ad.com", "proton.flurry.com", "publisher-config.unityads.unity3d.com", "register.appsflyer.com", "reports.crashlytics.com", "req.startappservice.com", "rpc.tapjoy.com", "rt.applovin.com", "rt.applvn.com", "rv-gateway.supersonicads.com", "s.eclick.vn", "sb.scorecardresearch.com", "sdk.appsflyer.com", "sec.umeng.com", "serve.popads.net", "servicelayer.king.com", "setting.rayjump.com", "settings.crashlytics.com", "shop.zaloapp.com", "ssl.google-analytics.com", "static.doubleclick.net", "static.eclick.vn", "stats.appsflyer.com", "stc-nas.nixcdn.com", "stc.za.zaloapp.com", "supersonicads-a.akamaihd.net", "t.appsflyer.com", "tok.leadloss.com", "tpc.googlesyndication.com", "track.clickhubs.com", "tracking.ad-brix.com", "tracking.prd.mz.internal.unity3d.com", "trk.superads.cn", "tvnotice.kg.garena.vn", "ulogs.umeng.com", "ulogs.umengcloud.com", "ulogs.umengcloud.com.gds.alibabadns.com", "unilog.wostore.cn", "vta.nixcdn.com", "wd.adcolony.com", "webview.unityads.unity3d.com", "ws.tapjoyads.com", "www.adtilt.com", "www.cvsuqfsul.com", "www.google-analytics.com", "www.googleadservices.com", "www.googletagmanager.com", "www.googletagservices.com", "www.statcounter.com", "www.twpejojsim.com", "www.vungle.com", "x.appbaqend.com", "xp.apple.com", "z.moatads.com", "zalo-ads-td.zadn.vn", "zalo-ads.zadn.vn", "zplayer.trk.zapps.vn", "ztevents.zaloapp.com"
]

function searchHostName(u, r) {
    return shExpMatch(u, r);
}

function checkDns(h, r) {
    return dnsDomainIs(h, r);
}

function isNet(h, r, m) {
    return isInNet(h, r, m);
}

function splitHost(u) {
    let h;
    if (u.indexOf("://") > -1) {
        h = u.split('/')[2];
    } else {
        h = u.split('/')[0];
    }
    h = h.split(':')[0];
    return h.split('.').reverse();
}

function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    for (let i = 0; i < domainsAds.length; i++) {
        const entry = domainsAds[i];
        if (checkDns(host, entry) || searchHostName(host, "*." + entry)) {
            return BLACK;
        }
    }
    return DIRECT;
}