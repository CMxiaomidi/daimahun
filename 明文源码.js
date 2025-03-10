
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'lldy'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@103.21.244.77:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.16.192.0:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#SJC1
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.16.121.1:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.16.133.81:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.16.96.0:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#SJC2
vless://6c964352-eee7-494b-8c9a-74e3056fc5e6@clsse.lesvtlss.sbs:443?encryption=none&security=tls&sni=clsse.lesvtlss.sbs&fp=randomized&type=ws&host=clsse.lesvtlss.sbs&path=%2F%3Fed%3D2048#clsse.lesvtlss.sbs
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@172.67.173.49:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#LHP
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@172.67.72.96:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#NRT
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.24.65.105:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@103.21.244.230:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.16.0.0:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#SJC3
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@172.67.44.82:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#DE
vless://d9aebaa9-af8c-42c0-8b9a-9d8448799505@104.24.77.192:443?encryption=none&security=tls&sni=luck-cm.pages.dev&fp=random&type=ws&host=luck-cm.pages.dev&path=%2F%3Fed%3D2560#CF%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9
vless://bc5411a1-1464-4ced-8890-a821f701f386@104.17.142.12:443?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3Dproxyip.amclubs.kozow.com#%F0%9F%87%AD%F0%9F%87%B0%20HK
vless://bc5411a1-1464-4ced-8890-a821f701f386@162.159.129.11:2053?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3Dproxyip.amclubs.camdvr.org#%F0%9F%87%BA%F0%9F%87%B8%20US
vless://bc5411a1-1464-4ced-8890-a821f701f386@198.62.62.156:443?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3Dproxyip.amclubs.camdvr.org#%F0%9F%87%BA%F0%9F%87%B8%20US
vless://bc5411a1-1464-4ced-8890-a821f701f386@104.17.68.85:443?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3Dproxyip.amclubs.kozow.com#%F0%9F%87%AD%F0%9F%87%B0%20HK
vless://bc5411a1-1464-4ced-8890-a821f701f386@104.17.71.31:443?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3Dproxyip.amclubs.kozow.com#%F0%9F%87%AD%F0%9F%87%B0%20HK
vless://bc5411a1-1464-4ced-8890-a821f701f386@156.238.19.8:443?encryption=none&security=tls&sni=ddny6.laolin01.dns.army&fp=randomized&type=ws&host=ddny6.laolin01.dns.army&path=%2F%3Fed%3D2560%26PROXYIP%3D141.147.163.68#%F0%9F%87%AF%F0%9F%87%B5%20JP
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare-ip.mofashi.ltd:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare-ip.mofashi.ltd-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.9jy.cc:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.9jy.cc-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.shopify.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.shopify.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.cfcdn.vip:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.cfcdn.vip-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.1323123.xyz:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.1323123.xyz-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cfip.xxxxxxxx.tk:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cfip.xxxxxxxx.tk-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@freeyx.cloudflare88.eu.org:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-freeyx.cloudflare88.eu.org-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.090227.xyz:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.090227.xyz-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zhetengsha.eu.org:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zhetengsha.eu.org-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.0sm.com:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.0sm.com-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cloudflare.182682.xyz:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cloudflare.182682.xyz-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.csgo.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.csgo.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@singapore.com:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-singapore.com-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:8080?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-8080
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cf.zerone-cdn.pp.ua:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cf.zerone-cdn.pp.ua-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@malaysia.com:2086?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-malaysia.com-HTTP-2086
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cnamefuckxxs.yuchen.icu:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cnamefuckxxs.yuchen.icu-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.whatismyip.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.whatismyip.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@icook.hk:2052?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-icook.hk-HTTP-2052
vless://71e6faec-2b26-44df-a933-b616a937ea4d@cdn.tzpro.xyz:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-cdn.tzpro.xyz-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@japan.com:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-japan.com-HTTP-2082
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.visa.com:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.visa.com-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@russia.com:8880?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-russia.com-HTTP-8880
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:80?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-80
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:2095?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-2095
vless://71e6faec-2b26-44df-a933-b616a937ea4d@www.ipget.net:2082?encryption=none&security=none&fp=random&type=ws&host=666k.qq1369425700.workers.dev&path=%2Fq943lkrxs1i%3Fed%3D2048#666k-www.ipget.net-HTTP-2082
`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if(url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if(url.searchParams.has('surge')) 追加UA = 'surge';
			
			const 请求订阅响应内容 = await getSUB(urls, 追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	}

	let newapi = "";
	let 订阅转换URLs = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求

	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);
	
	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
			method: 'get', 
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
			},
			signal: controller.signal // 将AbortController的信号量添加到fetch请求中
		}).then(response => response.ok ? response.text() : Promise.reject())));
	
		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});
	
		console.log(modifiedResponses); // 输出修改后的响应数组
	
		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies') && content.includes('proxy-groups')) {
					// Clash 配置
					订阅转换URLs += "|" + response.apiUrl;
				} else if (content.includes('outbounds') && content.includes('inbounds')){
					// Singbox 配置
					订阅转换URLs += "|" + response.apiUrl;
				} else {
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}
	
	const 订阅内容 = await ADD(newapi);

	// 返回处理后的结果
	return [订阅内容,订阅转换URLs];
}
