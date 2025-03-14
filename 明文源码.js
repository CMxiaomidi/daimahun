
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
trojan://telegram-id-directvpn@15.236.196.227:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
vless://0c20237c-0f96-4e84-bcbc-ead7b8364d1c@91.107.173.93:22344?encryption=none&security=none&type=tcp&headerType=http&host=speedtest.net#%F0%9F%94%92%20VL-TCP-NONE%20%F0%9F%87%A9%F0%9F%87%AA%20DE-%40vpnserverrr
vless://04229380-9cbd-4187-ac63-f99d88cffd1a@54.37.78.215:36633?encryption=none&security=none&type=grpc&authority=&serviceName=ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON%3Fed%3D2048&mode=gun#all%20%F0%9F%87%A9%F0%9F%87%AA%20%28%40ZEDMODEON%29%20215
vless://08d0c61d-c066-469a-ae3d-bc040cdf6d40@ns6.esfahansiman.com:2030?encryption=none&security=reality&sni=refersion.com&fp=chrome&pbk=YWfCdTnr4FAOMYTY2dLrMtQUokyxOGpPhYEEszPj20E&sid=7fe29733&type=grpc&authority=&serviceName=CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config&mode=gun#%40meli_proxyy
vless://08d0c61d-c066-469a-ae3d-bc040cdf6d40@ns7.esfahansiman.com:2030?encryption=none&security=reality&sni=refersion.com&fp=chrome&pbk=YWfCdTnr4FAOMYTY2dLrMtQUokyxOGpPhYEEszPj20E&sid=7fe29733&type=grpc&authority=&serviceName=CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config&mode=gun#%40meli_proxyy
trojan://telegram-id-directvpn@18.130.76.89:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
vless://08d0c61d-c066-469a-ae3d-bc040cdf6d40@ns8.esfahansiman.com:1210?encryption=none&security=reality&sni=ubuntu.com&fp=chrome&pbk=YWfCdTnr4FAOMYTY2dLrMtQUokyxOGpPhYEEszPj20E&sid=7fe29733&type=grpc&authority=&serviceName=CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config--TELEGRAM--jet_config--CANALTELEGRAM--jet_config--TELEGRAM--jet_config&mode=gun#%40meli_proxyy
vless://04229380-9cbd-4187-ac63-f99d88cffd1a@54.37.78.215:36633?encryption=none&security=none&type=grpc&authority=&serviceName=ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON-ZEDMODEON%3Fed%3D2048&mode=gun#%40meli_proxyy
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjA4QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiNDUuMTk2LjIzOS4xNDEiLA0KICAicG9ydCI6ICI1Mzg2MSIsDQogICJpZCI6ICI0MWE4ZDlkNC0wM2VmLTRhYzctZGM0Zi0zY2VhNGUxY2I0N2IiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://1282c07a-7c6c-568b-826b-edfa208a675f@199.232.205.122:443?encryption=none&security=tls&sni=pscresearch.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-20.com&path=%2Fvless#Rayan%20-%20SSO%20-%20FL%20-%20F-20%20-%20IT%20-%20II%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://1282c07a-7c6c-568b-826b-edfa208a675f@pscresearch.faculty.ucdavis.edu:80?encryption=none&security=none&sni=pscresearch.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-20.com&path=%2Fvless#Rayan%20-%20SSO%20-%20FL%20-%20F-20%20-%20IT%20-%20II%20-%20%F0%9F%9F%A3%20t.me%2FRayan_Config
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjg5QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiMTA0LjE3LjIzMy44NiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIxZDE0ODNmMi03YmVhLTVlOTktYWQ2NC04ZGVjYjE1MGQwNmEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogIm5vbmUiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIjI4MDAwMDAwMDAwLmZhc3Ryb290LmlyIiwNCiAgInBhdGgiOiAiL3ZtZXNzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIjI4MDAwMDAwMDAwLmZhc3Ryb290LmlyIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1MWYzZTA5ZjZjYzQ0NDEz@163.171.110.9:14066#telegram
trojan://telegram-id-directvpn@18.130.76.89:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our
vless://telegram-id-ArV2ray@www.speedtest.net:443?encryption=none&security=tls&sni=m.mashti.link&alpn=h3%2Ch2%2Chttp%2F1.1&fp=firefox&type=ws&host=m.mashti.link&path=%2Ftelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%2Ctelegram-ArV2ray%3Fed%3D2048#%40meli_proxyy
vless://---telegram--ISVvpn---@isv.fastly80-2.hosting-ip.com:80?encryption=none&security=none&type=ws&host=xcs.ir&path=%2Ftelegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn#%E2%9C%85%D8%B3%D8%B1%D9%88%D8%B1%D9%87%D8%A7%DB%8C%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1%D8%AF%D8%B1%DA%A9%D8%A7%D9%86%D8%A7%D9%84%3Aprrofile_purple%40%E2%9C%85%F0%9F%9F%A1
vless://---telegram--ISVvpn--1@151.101.64.155:80?encryption=none&security=none&type=ws&host=www.speedtest.net.1.speedtest3.onlinE.&path=%2Ftelegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn-telegram-%40ISVvpn#%E2%9C%85%D8%B3%D8%B1%D9%88%D8%B1%D9%87%D8%A7%DB%8C%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1%D8%AF%D8%B1%DA%A9%D8%A7%D9%86%D8%A7%D9%84%3Aprrofile_purple%40%E2%9C%85%F0%9F%90%B0
vless://0074b9ae-62af-4d27-a4df-000d5cceed93@www.speedtest.net:2083?encryption=none&security=tls&sni=vpn.filmekade.ru&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=vpn.filmekade.ru&path=%2Ftelegram----------------v2ryNG01----v2ryNG01----v2ryNG01---v2ryNG01---------------v2ryNG01---v2ryNG01--v2ryNG01----v2ryNG01----v2ryNG01---v2ryNG01---v2ryNG01---v2ryNG01v2ryNG01----v2ryNG01----v2ryNG01---v2ryNG01---v2ryNG01---v2ryNG01%3Fed%3D2048#%40v2ryNG01%F0%9F%87%A9%F0%9F%87%AA%F0%9F%87%A9%F0%9F%87%AA%20%D8%B3%D8%B1%D9%88%D8%B11
vless://021b97e0-b194-4907-91ed-8625bcc60f28@tgju.org:80?encryption=none&security=none&type=ws&host=ENCHANtING-amount.OnEeAt.Co.&path=%2F%3Fed%3D2048#telegram%20%F0%9F%9A%80%20DailyV2ry
vless://0498c737-d0ac-4ce0-942d-414667069754@31.222.238.138:443?encryption=none&security=reality&sni=google.com&fp=chrome&pbk=cTm0TIKL9qK550XICK2YroOSr1u-f12h5UmBw2EAr2c&type=tcp&headerType=none#%F0%9F%94%92%20VL-TCP-RLT%20%F0%9F%87%B3%F0%9F%87%B1%20NL-31.222.238.138%3A443
vless://04f210b3-c06e-4300-a076-a2ee9744bc5e@188.114.97.3:443?encryption=none&security=tls&sni=m218.inaonehorseopensleigh.com&fp=chrome&type=ws&host=m218.inaonehorseopensleigh.com&path=%2Fv6445828875#6445828875
vless://05519058-d2ac-4f28-9e4a-2b2a1386749e@100.29.61.194:22222?encryption=none&security=tls&sni=telegram-channel-vlessconfig.sohala.uk&type=ws&host=telegram-channel-vlessconfig.sohala.uk&path=%2Ftelegram-channel-vlessconfig-ws#%40VIProxys
vless://05519058-d2ac-4f28-9e4a-2b2a1386749e@13.36.184.67:22222?encryption=none&security=tls&sni=telegram-channel-vlessconfig.sohala.uk&type=ws&host=telegram-channel-vlessconfig.sohala.uk&path=%2Ftelegram-channel-vlessconfig-ws#Telegram
vless://05519058-d2ac-4f28-9e4a-2b2a1386749e@18.198.71.116:22222?encryption=none&security=tls&sni=telegram-channel-vlessconfig.sohala.uk&type=ws&host=telegram-channel-vlessconfig.sohala.uk&path=%2Ftelegram-channel-vlessconfig-ws#%40VIProxys
vless://05519058-d2ac-4f28-9e4a-2b2a1386749e@51.21.74.72:22222?encryption=none&security=tls&sni=telegram-channel-vlessconfig.sohala.uk&type=ws&host=telegram-channel-vlessconfig.sohala.uk&path=%2Ftelegram-channel-vlessconfig-ws#Telegram
vless://05519058-d2ac-4f28-9e4a-2b2a1386749e@52.47.122.194:22222?encryption=none&security=tls&sni=telegram-channel-vlessconfig.sohala.uk&type=ws&host=telegram-channel-vlessconfig.sohala.uk&path=%2Ftelegram-channel-vlessconfig-ws#%40VIProxys
vless://06dc9c3c-78ee-544a-88a6-2240e5bf6f23@45.89.55.188:8880?encryption=none&security=none&fp=chrome&type=grpc&authority=&serviceName=vless-grpc&mode=gun
vless://082d02ee-333d-4e01-83e2-3989803a17fb@alyaf.com.alyaf.com:445?encryption=none&security=none&type=tcp&headerType=none#telegram%20%F0%9F%9A%80%20DailyV2ry
vless://08aa33d0-a8af-460b-807a-39791019015c@77.90.10.16:58666?encryption=none&flow=xtls-rprx-vision&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=bGCJWIH3EHCAGMeI-qgvjGZlL5tkY_HIqQEtsOqEVlw&sid=a6a18a6e0259&type=tcp&headerType=none#%F0%9F%8C%B6%EF%B8%8F52%40oneclickvpnkeys
vless://0a44145f-59dc-4e5b-a233-677b97f5114c@15.204.158.90:443?encryption=none&security=tls&sni=147135011033.sec21org.com&fp=chrome&type=tcp&headerType=none
vless://0a44145f-59dc-4e5b-a233-677b97f5114c@15.204.158.90:443?encryption=none&security=tls&sni=147135011033.sec21org.com&type=tcp&headerType=none#telegram%20%F0%9F%8C%9F%20DailyV2ry
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=grpc&authority=&serviceName=vless-grpc&mode=gun#Rayan%20-%20VPH%20-%20gRPC-104%20-%20IS%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=is1-vph.msnegar.eu.org&path=%2Fvless#Rayan%20-%20VPH%20-%20WSCT-104%20-%20IS%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&type=grpc&authority=&serviceName=vless-grpc&mode=gun#%F0%9F%8C%B6%EF%B8%8F29%40oneclickvpnkeys
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&type=grpc&authority=&serviceName=vless-grpc&mode=gun#%40m4dvpn%5B%F0%9F%87%A9%F0%9F%87%AA%5D%29
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&type=grpc&authority=&serviceName=vless-grpc&mode=gun#%40meli_proxyy
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&type=grpc&authority=&serviceName=vless-grpc&mode=gun#%40meli_proxyy
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&type=grpc&authority=&serviceName=vless-grpc&mode=gun#Channel%2Bid%3A%2B%40ShadowProxy66%F0%9F%87%AE%F0%9F%87%B8
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&sni=zula.ir&fp=chrome&allowInsecure=1&type=grpc&authority=&serviceName=vless-grpc&mode=gun#Rayan%20-%20VPH%20-%20gRPC-110%20-%20IS%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0a917cea-1caa-455f-bccc-8e5eed80d677@91.194.161.69:80?encryption=none&security=none&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=91.194.161.69&path=%2Fvless#Rayan%20-%20VPH%20-%20WSCT-110%20-%20IS%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0c20237c-0f96-4e84-bcbc-ead7b8364d1c@passer01.ultranumber.top:22344?encryption=none&security=none&type=tcp&headerType=http&host=speedtest.net#%F0%9F%8C%B6%EF%B8%8F67%40oneclickvpnkeys
vless://0cccde0f-c494-4f5a-8693-a953c0af1789@whatismyipaddress.com:2096?encryption=none&security=tls&sni=wwwspeedtestnetwhiteberinsistomd6625996s08.elitemizban.ir&type=ws&host=wwwspeedtestnetwhiteberinsistomd6625996s08.elitemizban.ir#telegram%20%F0%9F%9A%80%20DailyV2ry
vless://0cccde0f-c494-4f5a-8693-a953c0af1789@whatismyipaddress.com:2096?encryption=none&security=tls&sni=wwwspeedtestnetwhiteberinsistomd6625996s11.elitemizban.ir&type=ws&host=wwwspeedtestnetwhiteberinsistomd6625996s11.elitemizban.ir#telegram%20%F0%9F%9A%80%20DailyV2ry
vless://0cccde0f-c494-4f5a-8693-a953c0af1789@whatismyipaddress.com:2096?encryption=none&security=tls&sni=wwwspeedtestnetwhiteberinsistomd6625996s13.elitemizban.ir&type=ws&host=wwwspeedtestnetwhiteberinsistomd6625996s13.elitemizban.ir#telegram%20%F0%9F%8C%88%20DailyV2ry
vless://0cfebfbf-5dfb-430f-918f-6805c9f38b13@185.234.247.110:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=grpc&authority=&serviceName=vless-grpc&mode=gun#Rayan%20-%20VPH%20-%20gRPC-105%20-%20NL%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0cfebfbf-5dfb-430f-918f-6805c9f38b13@185.234.247.110:443?encryption=none&security=tls&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=nl1-vph.msnegar.eu.org&path=%2Fvless#Rayan%20-%20VPH%20-%20WSCT-105%20-%20NL%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0cfebfbf-5dfb-430f-918f-6805c9f38b13@185.234.247.110:80?encryption=none&security=none&sni=zula.ir&fp=chrome&allowInsecure=1&type=grpc&authority=&serviceName=vless-grpc&mode=gun#Rayan%20-%20VPH%20-%20gRPC-111%20-%20NL%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://0cfebfbf-5dfb-430f-918f-6805c9f38b13@185.234.247.110:80?encryption=none&security=none&sni=zula.ir&fp=chrome&allowInsecure=1&type=ws&host=185.234.247.110&path=%2Fvless#Rayan%20-%20VPH%20-%20WSCT-111%20-%20NL%20-%20%F0%9F%94%B5%20t.me%2FRayan_Config
vless://12454871-7c3e-4f2c-b232-75771a75bac5@91.107.243.247:443?encryption=none&security=reality&sni=mw7.hellont.ir&fp=chrome&pbk=yvdTIbOoLcSSISo3u8sESDllxZa0EArFZb0igdbbPAo&sid=4720f75a80&type=tcp&headerType=none
vless://12454871-7c3e-4f2c-b232-75771a75bac5@91.107.243.247:443?encryption=none&security=reality&sni=mw7.hellont.ir&fp=chrome&pbk=yvdTIbOoLcSSISo3u8sESDllxZa0EArFZb0igdbbPAo&sid=4720f75a80&type=tcp&headerType=none#%F0%9F%94%92%20VL-TCP-RLT%20%F0%9F%87%A9%F0%9F%87%AA%20DE-91.107.243.247%3A443
vless://12454871-7c3e-4f2c-b232-75771a75bac5@91.107.243.247:443?encryption=none&security=reality&sni=mw7.hellont.ir&fp=chrome&pbk=yvdTIbOoLcSSISo3u8sESDllxZa0EArFZb0igdbbPAo&sid=4720f75a80&type=tcp&headerType=none#%40meli_proxyy
vless://128fde49-c4d6-41e0-9176-156bf62527eb@140.248.159.50:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@140.248.184.28:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@140.248.186.153:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@140.248.189.159:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@146.75.57.171:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@151.101.71.214:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@167.82.100.75:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@167.82.67.83:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@167.82.69.45:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@199.232.109.192:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
vless://128fde49-c4d6-41e0-9176-156bf62527eb@199.232.11.224:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu&fp=chrome&allowInsecure=1&type=ws&host=harifet-manam-5.com&path=%2Fvless#Rayan%20-%20CF%20-%20FL%20-%20F-5%20-%20ML%20-%2005%20-%20%F0%9F%8C%8D%20t.me%2FRayan_Config
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-nl.sanguayun.com:13414/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-nl.sanguayun.com:13691/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-nl.sanguayun.com:13862/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-us.sanguayun.com:13613/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-us.sanguayun.com:13677/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-us.sanguayun.com:13790/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://2013e820-9035-4724-8b4e-7b0b3e757bc9@weilai-us.sanguayun.com:13907/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://31f6853e-02e4-42ed-b4ca-3c05a99dd1f4@weilai-nl.sanguayun.com:13127/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://31f6853e-02e4-42ed-b4ca-3c05a99dd1f4@weilai-us.sanguayun.com:13049/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://31f6853e-02e4-42ed-b4ca-3c05a99dd1f4@weilai-us.sanguayun.com:13557/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://31f6853e-02e4-42ed-b4ca-3c05a99dd1f4@weilai-us.sanguayun.com:13584/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://31f6853e-02e4-42ed-b4ca-3c05a99dd1f4@weilai-us.sanguayun.com:13934/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-nl.sanguayun.com:13284/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-nl.sanguayun.com:13450/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-nl.sanguayun.com:13617/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-us.sanguayun.com:13194/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-us.sanguayun.com:13254/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-us.sanguayun.com:13470/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://36ee36ea-4026-43d1-a7e8-c553d4fcd65f@weilai-us.sanguayun.com:13947/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-nl.sanguayun.com:13634/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-nl.sanguayun.com:13698/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-nl.sanguayun.com:13847/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-us.sanguayun.com:13077/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-us.sanguayun.com:13514/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-us.sanguayun.com:13764/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://52f655af-cf46-4f61-ac19-d2bebbcff309@weilai-us.sanguayun.com:13810/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-nl.sanguayun.com:13126/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-nl.sanguayun.com:13485/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-nl.sanguayun.com:13562/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-us.sanguayun.com:13204/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-us.sanguayun.com:13271/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-us.sanguayun.com:13455/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://55f8cf03-61d2-4983-b25e-fc84a1fd4c18@weilai-us.sanguayun.com:13858/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-nl.sanguayun.com:13524/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-nl.sanguayun.com:13550/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-nl.sanguayun.com:13874/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-us.sanguayun.com:13388/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-us.sanguayun.com:13411/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-us.sanguayun.com:13627/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://56f66e19-d017-4464-9394-63b51eed1c2c@weilai-us.sanguayun.com:13847/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-nl.sanguayun.com:13398/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-nl.sanguayun.com:13481/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-us.sanguayun.com:13016/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-us.sanguayun.com:13529/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-us.sanguayun.com:13654/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6dd72329-400d-4b57-be22-320090e379aa@weilai-us.sanguayun.com:13958/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://6hAmckvtHE@95.163.152.170:443/?sni=www.bing.com&obfs=salamander&obfs-password=SZJIE6gDorRMWuaxt4BRWLumwIXZR&insecure=1#%40meli_proxyy
hysteria2://6hAmckvtHE@95.163.152.170:443/?sni=www.whatsapp.com&obfs=salamander&obfs-password=SZJIE6gDorRMWuaxt4BRWLumwIXZR&insecure=1#%40meli_proxyy
hysteria2://87c29139-765a-441e-a82d-fdbb46697695@140.238.61.195:10890/?insecure=1#Channel%20id%3A%20%40ShadowProxy66%F0%9F%87%AF%F0%9F%87%B5JpHiddify%20%26%20karing%20%26%20Nekobox%20%26...%E2%9A%A1%EF%B8%8F%20%40ShadowProxy66
hysteria2://8ec9bcb6-328c-4182-bcfa-52d89881a523@18.141.180.219:443/?sni=sgv1.tigrdn1.xyz&insecure=1#%F0%9F%94%92%20HYSTERIA-UDP%20%F0%9F%87%B8%F0%9F%87%AC%20SG-18.141.180.219%3A443
hysteria2://909aaa6d-c1e2-4700-bcbc-d6d9c0e6923a@weilai-nl.sanguayun.com:13411/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://909aaa6d-c1e2-4700-bcbc-d6d9c0e6923a@weilai-us.sanguayun.com:13818/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://909aaa6d-c1e2-4700-bcbc-d6d9c0e6923a@weilai-us.sanguayun.com:13836/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://909aaa6d-c1e2-4700-bcbc-d6d9c0e6923a@weilai-us.sanguayun.com:13869/?insecure=0#BESTIIVPNBOT%20%D8%AA%D8%B3%D8%AA%20%D9%88%20%D8%AE%D8%B1%DB%8C%D8%AF
hysteria2://999fe97a-5cd1-4f9f-9826-85db2b50a6ef@141.147.67.135:8899/?sni=yingguo1.su8.lol&insecure=0#%F0%9F%94%92%20HYSTERIA-UDP%20%F0%9F%87%AC%F0%9F%87%A7%20GB-141.147.67.135%3A8899
hysteria2://MICPT1LLn6@161.97.108.42:44140/?obfs=salamander&obfs-password=hsdirhrrkskdhebdjdj&insecure=1#%40Daily_Configs
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0NTM4NzVmZjcyMmJiYjIw@185.219.142.172:11102#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0NWE1NDkyY2Y1OWYyZDkx@91.134.80.34:11104#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0NjAwNzMzMjY1M2ZkNzM1@51.83.224.187:10094#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0NzljYWFjZmE0MTcyMGU2@212.56.42.213:15729#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0ZjIwNzg2ZjAxNmY1YTdj@198.244.149.246:15273#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1MDgwOWU0ZDk0MjUyZDQ1@212.56.42.163:47797#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1MDgzNTBhZDY1N2U4ZjQy@82.197.65.185:11209#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1MzFlZmY0MTZhMWQ2NTk4@217.77.2.232:22795#telegram
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3MFh3ZzBTYkhTTDhDdUNraUx1R2hP@sto2.g.edgeservers.org:15128#Server-2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpCb2cwRUxtTU05RFN4RGRR@admin.c3.webramz.co:443#%40Daily_Configs
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpCb2cwRUxtTU05RFN4RGRR@admin.c3.webramz.co:443#%40one_shop_official
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpCb2cwRUxtTU05RFN4RGRR@series-a2-me.varzesh360.co:443#%40one_shop_official
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpObU5sT0RZNA==@uk2.opensocks.site:8388#%40mobilesignal-Shadowsocks%20UK%2002_exp31Mar25
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpPREEyTUdaaA==@at1.opensocks.site:8388#%40mobilesignal-Shadowsocks%20AT%2001_exp31Mar25
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpQSTNuY3hGMkdQdVBpQjFsNWdpdGNP@sto4.g.edgeservers.org:63418#Server-4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpRQ1hEeHVEbFRUTUQ3anRnSFVqSW9q@45.158.171.141:8080#%40one_shop_official
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpXVlUyN0xxdUFNT2VYbVllU3RJODk3@sto3.g.edgeservers.org:32448#Server-3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjdklJODVUclc2bjBPR3lmcEhWUzF1@beesyar.org:8080#%F0%9F%87%B3%F0%9F%87%B1%F0%9F%8C%8F%2B%40customv2ray%2B%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%AF%2B%D9%87%D8%A7%DB%8C%2B%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1%2B%D8%B9%D8%B6%D9%88%2B%D8%B4%D9%88
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpueFMxYTdKTmxJY2JzTjhRNEVLTDV0@sto1.g.edgeservers.org:36632#Server-1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWklvQTY5UTh5aGNRVjhrYTNQYTNB@45.87.175.10:8080#%40Daily_Configs
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWklvQTY5UTh5aGNRVjhrYTNQYTNB@45.87.175.10:8080#%40meli_proxyy
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWklvQTY5UTh5aGNRVjhrYTNQYTNB@45.87.175.22:8080#%40meli_proxyy
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpvWklvQTY5UTh5aGNRVjhrYTNQYTNB@45.87.175.92:8080#%40meli_proxyy
trojan://3747000103274291200@185.67.125.177:443?security=tls&sni=quality-albacore.adder289.quest&type=tcp&headerType=none#%28%40VmessProtocol%29%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D8%B1%DB%8C%D8%AF%20%D9%88%20%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%AF%D8%A7%D8%A6%D9%85%DB%8C%20%D8%AC%D9%88%DB%8C%D9%86%20%D8%B4%D9%88%F0%9F%87%A9%F0%9F%87%AA
trojan://4732adfa16c6450bbef87264e41332db@165.22.74.230:443?security=tls&sni=nextstepcareer.online&allowInsecure=1&type=tcp&headerType=none#telegram%20%F0%9F%8C%88%20DailyV2ry
trojan://4732adfa16c6450bbef87264e41332db@165.22.74.230:443?security=tls&sni=nextstepcareer.online&allowInsecure=1&type=tcp&headerType=none#%E2%9A%9C%EF%B8%8FTelegram%3A%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%F0%9F%93%A2%20Channel%20%3A%20%40IP_CF_Config%F0%9F%93%A2%20Main%20Channel%20%3A%20%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2
trojan://74260714362785500@driving-rhino.shiner427.skin:443?security=tls&sni=driving-rhino.shiner427.skin&allowInsecure=1&type=tcp&headerType=none#%F0%9F%8C%B6%EF%B8%8F05%40oneclickvpnkeys
trojan://AGyJO3OX3_pXvPnCTmeOyg@safe.sanjesh.fun:6176?security=tls&type=tcp&headerType=none#%D8%AA%D9%88%20%DA%A9%D8%A7%D9%86%D8%A7%D9%84%20%D8%AC%D9%88%DB%8C%D9%86%20%D8%B4%D9%88-%20TEHRANARGO%40
trojan://AGyJO3OX3_pXvPnCTmeOyg@safe.sanjesh.fun:6176?security=tls&type=tcp&headerType=none#%E2%9A%9C%EF%B8%8FTelegram%3A%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%F0%9F%93%A2%20Channel%20%3A%20%40IP_CF_Config%F0%9F%93%A2%20Main%20Channel%20%3A%20%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&type=ws&host=301.pooriam.ir&path=%2FtrPyOrWMfkHd15oxiI%3Fed#Channel%2Bid%3A%2B%40ShadowProxy66%F0%9F%87%A9%F0%9F%87%AA
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&type=ws&host=301.pooriam.ir&path=%2FtrPyOrWMfkHd15oxiI%3Fed#%E2%9A%9C%EF%B8%8FTelegram%3A%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%F0%9F%93%A2%20Channel%20%3A%20%40IP_CF_Config%F0%9F%93%A2%20Main%20Channel%20%3A%20%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=301.pooriam.ir&path=%2FtrPyOrWMfkHd15oxiI%3Fed%3D1520%23FreeV2Alpha#%40meli_proxyy
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=301.pooriam.ir&path=%2FtrPyOrWMfkHd15oxiI%3Fed%3D1520#%40meli_proxyy
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=301.pooriam.ir&path=trPyOrWMfkHd15oxiI%3Fed%3D1520%23%40v2ray_alpha#%40Daily_Configs
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=301.pooriam.ir&path=trPyOrWMfkHd15oxiI%3Fed%3D1520%23%40v2ray_alpha#%40meli_proxyy
trojan://Pooria@104.17.148.22:443?security=tls&sni=301.pOORiAm.ir&fp=chrome&type=ws&host=301.pooriam.ir&path=%2FtrPyOrWMfkHd15oxiI%3Fed#%40Daily_Configs
trojan://bpb-trojan@104.21.75.193:443?security=tls&sni=bpb-hd.aaronchin.xyz&type=ws&host=bpb-hd.aaronchin.xyz&path=%2Ftr%3Fed%3D2560%23Telegram%40V2ray_Alpha#%40meli_proxyy
trojan://bpb-trojan@104.21.75.193:443?security=tls&sni=bpb-hd.aaronchin.xyz&alpn=h3&fp=randomized&type=ws&host=bpb-hd.aaronchin.xyz&path=%2Ftr%3Fed%3D2560#Channel%2Bid%3A%2B%40ShadowProxy66%F0%9F%87%AB%F0%9F%87%AE
trojan://bpb-trojan@104.21.75.193:443?security=tls&sni=bpb-hd.aaronchin.xyz&alpn=h3&fp=randomized&type=ws&host=bpb-hd.aaronchin.xyz&path=%2Ftr%3Fed%3D2560#%E2%9A%9C%EF%B8%8FTelegram%3A%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%F0%9F%93%A2%20Channel%20%3A%20%40IP_CF_Config%F0%9F%93%A2%20Main%20Channel%20%3A%20%40IP_CF%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2
trojan://dXjPoF4W3I@57.129.50.213:1935?security=tls&sni=x1ger-ovh.devefun.net&type=tcp&headerType=none#%28%40VmessProtocol%29%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AE%D8%B1%DB%8C%D8%AF%20%D9%88%20%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%AF%D8%A7%D8%A6%D9%85%DB%8C%20%D8%AC%D9%88%DB%8C%D9%86%20%D8%B4%D9%88%F0%9F%87%A9%F0%9F%87%AA
trojan://dXjPoF4W3I@57.129.50.213:1935?security=tls&sni=x1ger-ovh.devefun.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=tcp&headerType=none#%40Daily_Configs
trojan://dXjPoF4W3I@57.129.50.213:1935?security=tls&sni=x1ger-ovh.devefun.net&fp=chrome&type=tcp&headerType=none#%40Daily_Configs
trojan://telegram-id-directvpn@13.39.65.54:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#%40VIProxys
trojan://telegram-id-directvpn@13.49.131.84:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our
trojan://telegram-id-directvpn@13.49.131.84:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@13.49.213.155:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#%40VIProxys%20%20%F0%9F%8C%90%20%23FREEDUROV%20%23%D8%B1%D9%BE%20%23%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D9%BE%20%F0%9F%8C%90%F0%9F%99%8F%F0%9F%8F%BC%20%DA%86%D9%86%D9%84%20%D8%B1%D9%88%20%D8%A8%D8%A7%20%D8%AF%D9%88%D8%B3%D8%AA%D8%A7%D9%86%D8%AA%D9%88%D9%86%20%D8%A8%D9%87%20%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%DA%A9%20%D8%A8%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C%D8%AF%20%D8%AA%D8%A7%20%D8%A7%D9%88%D9%86%D9%87%D8%A7%20%D9%87%D9%85%20%D8%A7%D8%B2%20%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%AF%20%D9%87%D8%A7%DB%8C%20%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86%20%D8%A8%D9%87%D8%B1%D9%85%D9%86%D8%AF%20%D8%A8%D8%B4%D9%86%20%F0%9F%99%8F%F0%9F%8F%BC
trojan://telegram-id-directvpn@13.51.134.152:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@13.61.201.53:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@13.61.83.133:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@15.236.184.202:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our
trojan://telegram-id-directvpn@15.236.184.202:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@15.236.196.227:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our
trojan://telegram-id-directvpn@16.170.5.59:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@18.134.59.0:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
trojan://telegram-id-directvpn@18.157.53.101:22222?security=tls&sni=trojan.burgerip.co.uk&alpn=http%2F1.1&type=tcp&headerType=none#Our%20Channel%20%3A%20%40DirectVPN%F0%9F%9A%80%20%40DirectVPN%20%E2%9C%B4%EF%B8%8F
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REZDMVJFTEFZLTEwNC4yMS45Ni4xLTA0MjciLA0KICAiYWRkIjogIjEwNC4yMS45Ni4xIiwNCiAgInBvcnQiOiAiMjA4MyIsDQogICJpZCI6ICI5MjEwYzdjOC1hMDhlLTRhODktZWZhNi05MTJiZjMwMmZhNGUiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAiYXV0byIsDQogICJob3N0IjogInRhc25pbS50d24yNC5pciIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REZDMVJFTEFZLTE3Mi42Ny4xMzEuMTctODM4OCIsDQogICJhZGQiOiAiMTcyLjY3LjEzMS4xNyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI2MmFhNWY4MC0wMzI4LTQwMDQtYTM3NS03ZjVhNTlkZjQwMjIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAiYXV0byIsDQogICJob3N0IjogImhtczE5LmJlc3QtdGl6aS50b3AiLA0KICAicGF0aCI6ICIvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImhtczE5LmJlc3QtdGl6aS50b3AiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REZDMVJFTEFZLTEwNC4yMS44MC4xLTEwMTgiLA0KICAiYWRkIjogInRhc25pbS50d24yNC5pciIsDQogICJwb3J0IjogIjIwODMiLA0KICAiaWQiOiAiY2FkMGQ1YzctZDczYy00Mjk5LWExMDctMWNlNmI2ZGVlNDI5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogImF1dG8iLA0KICAiaG9zdCI6ICJ0YXNuaW0udHduMjQuaXIiLA0KICAicGF0aCI6ICIvP2VkPTIwNDgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REZDMVJFTEFZLTEwNC4xNy4yMTMuMjQxLTEwMjQiLA0KICAiYWRkIjogInMxLmRiLWxpbmswMi50b3AiLA0KICAicG9ydCI6ICIyMDgyIiwNCiAgImlkIjogIjRiMzY2MjVjLWI5ZDktM2VhNi1hZWQ1LTg2ZDYyYzcwZTE2ZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiMTAwLTExMy0yMTItMy5zMS5kYi1saW5rMDIudG9wIiwNCiAgInBhdGgiOiAiL2RhYmFpLmluMTcyLjY3Ljc5LjIzMSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1OQSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERjggVVMtMjA3LjkwLjIzOC4xMzY6MjAwMTAiLA0KICAiYWRkIjogIjIwNy45MC4yMzguMTM2IiwNCiAgInBvcnQiOiAiMjAwMTAiLA0KICAiaWQiOiAiNjhhYzNjZDItYTE1Zi00NTE4LTlhNTktYjFkOGY1NjQ5MDE5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBWSVByb3h5cyIsDQogICJhZGQiOiAiY2EwLjg5OTk5NC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiYTA2MDU1MjctMjhlNC00NDljLTgwZWUtNTY0MmNjMTZhOGFmIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvaW5kZXgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiY2EwLjg5OTk5NC54eXoiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBWSVByb3h5cyIsDQogICJhZGQiOiAiaXQwLjg5OTk5NC54eXoiLA0KICAicG9ydCI6ICI4NDQzIiwNCiAgImlkIjogImEwNjA1NTI3LTI4ZTQtNDQ5Yy04MGVlLTU2NDJjYzE2YThhZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiaXQwLjg5OTk5NC54eXoiLA0KICAicGF0aCI6ICIvaW5kZXgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiaXQwLjg5OTk5NC54eXoiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBWSVByb3h5cyIsDQogICJhZGQiOiAicGhvZW5peC44OTk5OTQueHl6IiwNCiAgInBvcnQiOiAiODQ0MyIsDQogICJpZCI6ICJhMDYwNTUyNy0yOGU0LTQ0OWMtODBlZS01NjQyY2MxNmE4YWYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInBob2VuaXguODk5OTk0Lnh5eiIsDQogICJwYXRoIjogIi9pbmRleCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJwaG9lbml4Ljg5OTk5NC54eXoiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REM2OFx1RDgzQ1x1REZGQlx1MjAwRFx1RDgzRFx1RENCQiBERVZFTE9QRUQtQlkgU09ST1VTSC1NSVJaQUVJIFx1RDgzRFx1RENDQyBGT0xMT1ctQ09OVEFDVCBTWURTUlNNUloiLA0KICAiYWRkIjogIjEyNy4wLjAuMSIsDQogICJwb3J0IjogIjgwODAiLA0KICAiaWQiOiAiYmJjYWFjYS1hYWNiLWFhY2ItYmNkYS1jYmNhYmFhYmNiY2EiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1OQSBcdUQ4M0NcdURERjhcdUQ4M0NcdURERUMgU0ctMTMuMjUwLjExOC4yMjU6NDAwMDAiLA0KICAiYWRkIjogIjEzLjI1MC4xMTguMjI1IiwNCiAgInBvcnQiOiAiNDAwMDAiLA0KICAiaWQiOiAiMTMzNjQ3ODktYThiMi00YmNkLThkZjctYTc5NGZiNmY4N2U1IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogImF1dG8iLA0KICAiaG9zdCI6ICJkb3duLmRpbmd0YWxrLmNvbSIsDQogICJwYXRoIjogIi9iYnkiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1UQ1AtTkEgXHVEODNDXHVEREY3XHVEODNDXHVEREZBIFJVLTQ2LjI5LjE2Ni4yMzc6NDc1NTUiLA0KICAiYWRkIjogIjQ2LjI5LjE2Ni4yMzciLA0KICAicG9ydCI6ICI0NzU1NSIsDQogICJpZCI6ICIwYzQ5Y2QxOS0yNzU4LTRkMzgtZTZhOC0xMWYyZDY2MzU4NjAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1UQ1AtTkEgXHVEODNDXHVEREY4XHVEODNDXHVEREVDIFNHLTYyLjE0Ni4yMzIuMTUzOjUzMTQ0IiwNCiAgImFkZCI6ICI2Mi4xNDYuMjMyLjE1MyIsDQogICJwb3J0IjogIjUzMTQ0IiwNCiAgImlkIjogIjEzZTEzYTNlLWU5ODEtNGVlYS1hOWZjLTEzZTUwNjI4ZmQ5YiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgaWQ6IEBTaGFkb3dQcm94eTY2XHVEODNDXHVEREY3XHVEODNDXHVEREZBIiwNCiAgImFkZCI6ICI0Ni4yOS4xNjYuMjM3IiwNCiAgInBvcnQiOiAiNDc1NTUiLA0KICAiaWQiOiAiMGM0OWNkMTktMjc1OC00ZDM4LWU2YTgtMTFmMmQ2NjM1ODYwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjg3QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiNDYuMjkuMTY2LjIzNyIsDQogICJwb3J0IjogIjQ3NTU1IiwNCiAgImlkIjogIjBjNDljZDE5LTI3NTgtNGQzOC1lNmE4LTExZjJkNjYzNTg2MCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBEYWlseV9Db25maWdzIiwNCiAgImFkZCI6ICI0Ni4yOS4xNjYuMjM3IiwNCiAgInBvcnQiOiAiNDc1NTUiLA0KICAiaWQiOiAiMGM0OWNkMTktMjc1OC00ZDM4LWU2YTgtMTFmMmQ2NjM1ODYwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjQ5QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiNTEuNzcuMjAuMTMxIiwNCiAgInBvcnQiOiAiMjIzMjQiLA0KICAiaWQiOiAiMDQ2MjFiYWUtYWIzNi0xMWVjLWI5MDktMDI0MmFjMTIwMDAyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgaWQ6IEBTaGFkb3dQcm94eTY2XHVEODNDXHVEREVCXHVEODNDXHVEREY3IiwNCiAgImFkZCI6ICI1MS43Ny4yMC4xMzEiLA0KICAicG9ydCI6ICIyMjMyNCIsDQogICJpZCI6ICIwNDYyMWJhZS1hYjM2LTExZWMtYjkwOS0wMjQyYWMxMjAwMDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1UQ1AtTkEgXHVEODNDXHVEREVCXHVEODNDXHVEREY3IEZSLTUxLjc3LjIwLjEzMToyMjMyNCIsDQogICJhZGQiOiAiNTEuNzcuMjAuMTMxIiwNCiAgInBvcnQiOiAiMjIzMjQiLA0KICAiaWQiOiAiMDQ2MjFiYWUtYWIzNi0xMWVjLWI5MDktMDI0MmFjMTIwMDAyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDIgLSBFVSAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiNTEuMTUuMTkuMjA2IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImRiNmU1ZDcwLWZjNmMtMTFlZi1iMTM1LTIwNWM2ZDVmNWQ3OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiNTEuMTUuMTkuMjA2IiwNCiAgInBhdGgiOiAiL3VyZzV6amtoIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInp1bGEuaXIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDUgLSBFVSAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiNTEuMTUuMTkuMjA2IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZGI2ZTVkNzAtZmM2Yy0xMWVmLWIxMzUtMjA1YzZkNWY1ZDc4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ6dWxhLmlyIiwNCiAgInBhdGgiOiAiL3VyZzV6amtoIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgaWQ6IEBTaGFkb3dQcm94eTY2XHVEODNDXHVEREVDXHVEODNDXHVEREU3IiwNCiAgImFkZCI6ICI2OC4xNjguMzEuMTg0IiwNCiAgInBvcnQiOiAiMjY5MjQiLA0KICAiaWQiOiAiOWY4YjE2YTgtMzY5ZC00Yjc5LWFmODItMjAxYzA4OWRhZGQyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjM3QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiNjguMTY4LjMxLjE4NCIsDQogICJwb3J0IjogIjI2OTI0IiwNCiAgImlkIjogIjlmOGIxNmE4LTM2OWQtNGI3OS1hZjgyLTIwMWMwODlkYWRkMiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgaWQ6IEBTaGFkb3dQcm94eTY2XHVEODNDXHVEREU5XHVEODNDXHVEREVBIiwNCiAgImFkZCI6ICI4MC45Mi4yMDQuMjA3IiwNCiAgInBvcnQiOiAiODg4MCIsDQogICJpZCI6ICJjZjNiYjA1Yy03MzZmLTRhZGEtOThkNS01MDkwNTg3YjI3ZTkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi92bWVzcyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgaWQ6IEBTaGFkb3dQcm94eTY2XHVEODNDXHVEREVFXHVEODNDXHVEREY3IiwNCiAgImFkZCI6ICI4OS40Ny4yMDAuMjAyIiwNCiAgInBvcnQiOiAiMjA4MyIsDQogICJpZCI6ICI5MmM2YTZlNi1lMTFmLTQ3NDMtYTE4Mi0yZDNkNjE4ODBlNDMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogImh0dHAiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDMgLSBTRyAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiMTAzLjI1My4yNi4yMTUiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiN2RmY2RhNDAtZmM2Yy0xMWVmLWI1MzItMjA1YzZkNWY1ZDc4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIxMDMuMjUzLjI2LjIxNSIsDQogICJwYXRoIjogIi95YnIyamllcyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJ6dWxhLmlyIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDYgLSBTRyAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiMTAzLjI1My4yNi4yMTUiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI3ZGZjZGE0MC1mYzZjLTExZWYtYjUzMi0yMDVjNmQ1ZjVkNzgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInp1bGEuaXIiLA0KICAicGF0aCI6ICIveWJyMmppZXMiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjQyQG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiMTA0LjE2LjE1NS4xMCIsDQogICJwb3J0IjogIjIwNTIiLA0KICAiaWQiOiAiNGIzNjYyNWMtYjlkOS0zZWE2LWFlZDUtODZkNjJjNzBlMTZkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIxMDAtMTAyLTI0Ny05Mi5zMS5kYi1saW5rMDIudG9wIiwNCiAgInBhdGgiOiAiL2RhYmFpLmluMTA0LjI1LjE3NS4xMzciLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjQ2QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiMTA0LjE2LjE1NS4xMCIsDQogICJwb3J0IjogIjg4ODAiLA0KICAiaWQiOiAiNGIzNjYyNWMtYjlkOS0zZWE2LWFlZDUtODZkNjJjNzBlMTZkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIxMDAtMTAzLTU4LTM5LnMxLmRiLWxpbmswMi50b3AiLA0KICAicGF0aCI6ICIvZGFiYWkuaW4xMDQuMjUuMjQ5LjIxNSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REYzNlx1RkUwRjI2QG9uZWNsaWNrdnBua2V5cyIsDQogICJhZGQiOiAiMTA0LjE2LjYwLjgiLA0KICAicG9ydCI6ICIyMDUyIiwNCiAgImlkIjogImY1ODRkZTE1LTIwMzQtNDE3MC1hNzIzLWY0OGMyYmFlNWUwZiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAid29ya2VyLW11dGUtYmFyLTE3MTkubmlmb3Rvazk5My53b3JrZXJzLmRldiIsDQogICJwYXRoIjogIi9hZnJobXMxNnYuYmVzdHhyYXkuYnV6ei9saW5rd3MiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBEYWlseV9Db25maWdzIiwNCiAgImFkZCI6ICIxMDQuMTcuMTQ3LjIyIiwNCiAgInBvcnQiOiAiMjA5NSIsDQogICJpZCI6ICJmNGYwMWQxOS0xNzgyLTRiODUtOTMxNy0wZDNjZWUwZjkxZTIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInBhbmVsLlNFWVlFRG10bW9kaWRhbmRhbnNheC5ibG9HLiIsDQogICJwYXRoIjogIi9TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdC1TZXl5ZWRtdD9lZD0xMDI0IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjMwMFx1MDZBRlx1MDZDQ1x1MDZBRiAzOVx1MDYyQSEgXHUwNjJBXHUwNjMzXHUwNjJBXHUyMDBDXHUwNjMxXHUwNjI3XHUwNkNDXHUwNkFGXHUwNjI3XHUwNjQ2XHVEODNFXHVERDJGVGlja1YyYm90QCIsDQogICJhZGQiOiAiMTA0LjE5LjE1MC4xMCIsDQogICJwb3J0IjogIjIwOTUiLA0KICAiaWQiOiAiOTRmMzMyYjAtYzVkMy00NTMxLWExZDYtNmU2MzU4Y2M2YzcyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJodHRwdXBncmFkZSIsDQogICJ0eXBlIjogIi0tLSIsDQogICJob3N0IjogIm1jaS5tdG4uaXIuY29tLm9yZy5uZXQub20ubXVzaWNmYTEyMy5pci4iLA0KICAicGF0aCI6ICIvZDNkM0xtbHlZVzVvYjNOMExtTnZiUT09P2VkPTI1NjAiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBWMnJheTFfTmciLA0KICAiYWRkIjogIjEwNC4yMS4xOC4yMjciLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiOTUwZGI2YWEtNDkyNi00NjE2LTgxNmUtZWMwMzEyZGNiODdiIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIi0tLSIsDQogICJob3N0IjogImphaGZramhhLmNmZCIsDQogICJwYXRoIjogIi9saW5rd3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiamFoZmtqaGEuY2ZkIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1MDY0Nlx1MDYyQVx1MDY0OFx1MDYzMVx1MDY0NFx1MDYyRiBcdTA2MkFcdTA2NDggXHUwNjJBXHUwNjQ0XHUwNkFGXHUwNjMxXHUwNjI3XHUwNjQ1IFx1MDYyQ1x1MDYzM1x1MDYyQVx1MDYyQ1x1MDY0OCBcdTA2QTlcdTA2NDZcdTA2Q0NcdTA2MkZcbkBuZXR3b3JsZF92cG4iLA0KICAiYWRkIjogIjEwNC4yMS4xOC4yMjciLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiOTUwZGI2YWEtNDkyNi00NjE2LTgxNmUtZWMwMzEyZGNiODdiIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJqYWhma2poYS5jZmQiLA0KICAicGF0aCI6ICIvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImphaGZramhhLmNmZCIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1UTFMgXHVEODNDXHVERkY0XHUyMDBEXHUyNjIwXHVGRTBGIE5BLTEwNC4yMS41NS4yMzQ6NDQzIiwNCiAgImFkZCI6ICIxMDQuMjEuNTUuMjM0IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImJjODY0MDc4LWRjZjMtNGJmNC04ZGJmLWNhOWYyMDBiNTZiZSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ3dkZWYuc2JzIiwNCiAgInBhdGgiOiAiL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJnd2RlZi5zYnMiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1UTFMgXHVEODNDXHVERkY0XHUyMDBEXHUyNjIwXHVGRTBGIE5BLTEwNC4yMS45Ni4xOjIwODMiLA0KICAiYWRkIjogIjEwNC4yMS45Ni4xIiwNCiAgInBvcnQiOiAiMjA4MyIsDQogICJpZCI6ICI5MjEwYzdjOC1hMDhlLTRhODktZWZhNi05MTJiZjMwMmZhNGUiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRhc25pbS50d24yNC5pciIsDQogICJwYXRoIjogIi8/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJ0YXNuaW0udHduMjQuaXIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDEgLSBMQSAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiMTA4LjE4MS4xMC4xNyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICJhY2U0ZTA5MC1mYzZjLTExZWYtYjAzMS0yMDVjNmQ1ZjVkNzgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIjEwOC4xODEuMTAuMTciLA0KICAicGF0aCI6ICIvYmY2ZHJnNWoiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAienVsYS5pciIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gRlNTIC0gV1NDVC0xMDQgLSBMQSAtIFx1RDgzRFx1REQzNCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiMTA4LjE4MS4xMC4xNyIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImFjZTRlMDkwLWZjNmMtMTFlZi1iMDMxLTIwNWM2ZDVmNWQ3OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAienVsYS5pciIsDQogICJwYXRoIjogIi9iZjZkcmc1aiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBEYWlseV9Db25maWdzIiwNCiAgImFkZCI6ICIxODYuMTkwLjIxNS45MyIsDQogICJwb3J0IjogIjIyMzI0IiwNCiAgImlkIjogIjA0NjIxYmFlLWFiMzYtMTFlYy1iOTA5LTAyNDJhYzEyMDAwMiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1OQSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERjggVVMtMjA3LjkwLjIzOC4xMzY6MjAwMDgiLA0KICAiYWRkIjogIjIwNy45MC4yMzguMTM2IiwNCiAgInBvcnQiOiAiMjAwMDgiLA0KICAiaWQiOiAiMjNkZWIyZDUtMmQ3ZC00NTU1LThhMjgtZjM0NjNhMTI4ZjExIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1XUy1OQSBcdUQ4M0NcdURERTZcdUQ4M0NcdURERUEgQUUtMjEyLjE5Mi4xMy42ODoyMzAwOSIsDQogICJhZGQiOiAiMjEyLjE5Mi4xMy42OCIsDQogICJwb3J0IjogIjIzMDA5IiwNCiAgImlkIjogIjkzN2U5NmM5LWJlYmItNDg4My1hYWUxLTAyOGQ1ZjcxY2E5NCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBEYWlseV9Db25maWdzIiwNCiAgImFkZCI6ICIyMy4xNTguNTYuMTg0IiwNCiAgInBvcnQiOiAiMjIzMjQiLA0KICAiaWQiOiAiMDQ2MjFiYWUtYWIzNi0xMWVjLWI5MDktMDI0MmFjMTIwMDAyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkBtZWxpX3Byb3h5eVx1MDYzM1x1MDYzMVx1MDY0OFx1MDYzMVx1MDYyN1x1MDZDQ1x1MjAwQ1x1MDYyOFx1MDZDQ1x1MDYzNFx1MDYyQVx1MDYzMSIsDQogICJhZGQiOiAiMjMuMTU4LjU2LjE4NCIsDQogICJwb3J0IjogIjIyMzI0IiwNCiAgImlkIjogIjA0NjIxYmFlLWFiMzYtMTFlYy1iOTA5LTAyNDJhYzEyMDAwMiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzRFx1REQxMiBWTS1UQ1AtTk9ORSBcdUQ4M0NcdURERUJcdUQ4M0NcdURERUUgRkktMzEuNTguMTM3LjY3OjM5NDQ3IiwNCiAgImFkZCI6ICIzMS41OC4xMzcuNjciLA0KICAicG9ydCI6ICIzOTQ0NyIsDQogICJpZCI6ICI3MjRmYjkzZS1hY2U4LTQ3MzMtYjA0YS03MmZjYzliODBiMWYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0yNyAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjViZDcyZGQ4LWQzMTktNDQzYi04M2UzLWQ1NzAyNjIyNTg4MyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0wNyAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjdhODc1MzY5LWI1ODItNDI1YS05Zjk3LWRiM2E0MzJiNDQ0YyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0xMSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjA3ZDRlZjNiLTE0MzAtNDUxYS1hY2Q5LWE0ZDRlN2MwNDU2ZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0wMyAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjA5ZjhkMzNiLTYyYWUtNGNiNC04OWViLTAwZTk1NzBmMzBhNiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0zNSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjIwZmMzNDJhLTM1YWYtNGY3MS04MTNjLWM0MzRiM2JjZDdkNiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0zMSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjI1ODgwMGQzLWEzNTgtNGEwYS04NjhiLWJkZTkxMmZkN2Y0MiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0xOSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjI5OGU0ZGQ1LTM3YjItNDAyMS05ODY3LTQ5MGI4MjljZDY0NiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0yMyAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImRhMDI0MTBlLTQyZGQtNDU3Ni1hMGNlLTU4MzI3OTFmNTk1OSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0zOSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImU2NTNiOGE2LTQ1ZDctNDQzOC04OGZjLTVkZmU2ZjczNGE2YiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0xNSAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImY1OWM5YzU5LTIzNjYtNGQ2Yy04NDc3LWI4ZjU3NTY4Y2I2OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiem1hb3ouZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJheWFuIC0gR0FGTiAtIEZMIC0gUC0yMiAtIFx1RDgzRFx1REZFMCB0Lm1lL1JheWFuX0NvbmZpZyIsDQogICJhZGQiOiAiYndkcmFwZXIuZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjVlNTRmMmJlLWNiMjYtNGQwOC1iY2M0LTYyODE2ODY1ZDliYyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZ2V0LWEtZnJlZS1uYW1lLmNvbSIsDQogICJwYXRoIjogIi9zcGVlZHRlc3QiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiYndkcmFwZXIuZmFjdWx0eS51Y2RhdmlzLmVkdSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9

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
