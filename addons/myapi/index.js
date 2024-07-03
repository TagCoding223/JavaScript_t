// this api has no limit
// case 1 : domain are same like localhost then its work fine
// case 2 : if domain are differ then it's also works fine (like api run on localhost but webpage not be render by any server or not but i need more confirmation about it)
// case 3 : when we visit => localhost:3000 , then myapi/index.html render
// case 4 : when we visit => localhost:3000/news , then api send a json response
// prime goal achieved , but in production we need some changes
// all check are done on this urls
/*
http://localhost:3000/news
http://localhost/test_udit_page/j122_fetchapi.html
file:///G:/vscode/JavaScript_t/j122_fetchapi.html
http://localhost:3000/
*/
// in those urls api works fine


const app = require("C:/Users/a1/AppData/Roaming/npm/node_modules/express")();
const cors = require("C:/Users/a1/AppData/Roaming/npm/node_modules/cors")
const router=require("C:/Users/a1/AppData/Roaming/npm/node_modules/express").Router();
const http = require("http")
const path = require('path')
const host = 'localhost'
const PORT = 3000;

app.use(cors({origin : '*'}))
app.listen(
    PORT,
    ()=>console.log(`Server currently run on port : ${PORT}`)
);
app.get('/',(req,res)=>{
    // res.send("Home page")
    res.sendFile(path.resolve(__dirname,'index.html'))
})

// const requestListener = app.get('/news',cors(),(req,res)=>{
const requestListener = app.get('/news',(req,res)=>{
    res.json({
        "Business": [
            {
                "link": "https://news.google.com/articles/CBMiRGh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMDkvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s0gFIaHR0cHM6Ly93d3cuY25iYy5jb20vYW1wLzIwMjQvMDYvMDkvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh2Q2zRDwzVMfdxuQ4-UzgKiFaovSPQSE7tIF-_uVfodZFpr65w4AogqvsqI-ces6xIiO4mAtLkdAFCtCFI0Aykn82ZLD1JwETw9DksxKv1DaPog",
                "source": "CNBC",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cnbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Stock futures are slightly lower as traders look ahead to Fed decision, inflation data: Live updates"
            },
            {
                "link": "https://news.google.com/articles/CBMiTmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9zdG9jay1tYXJrZXQtdG9kYXktYXNpYW4tbWFya2V0cy0wNTExMjg3NzUuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgE6v4iP-35g6z7Hjswfs7YEnsFEKhmK7IeQDLvB8It2KjP43JuedgMc9H_4xqe8M",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Stock market today: Asian markets mixed following hotter-than-expected US jobs report"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vd3d3Lndzai5jb20vZmluYW5jZS9lbGxpb3R0LXRha2VzLWJpZy1zdGFrZS1pbi1zb3V0aHdlc3QtYWlybGluZXMtYmNlODA3OTbSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmb6RHX5Tx-Qh7IjM_9NkmUB-0rRRflJJWfY6DGAVkKynILFoovEhizTQZqB4x2ghU8SUuTPAIlbadIveBkyoh77UmI23yxTgY1tDpwFkW1-58A",
                "source": "The Wall Street Journal",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.wsj.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Exclusive | Elliott Takes Big Stake in Southwest Airlines"
            },
            {
                "link": "https://news.google.com/articles/CBMigAFodHRwczovL3d3dy5mb3JleGxpdmUuY29tL25ld3MvamFwYW4tZWNvbm9taWMtcm9hZG1hcC1sZWFrLWdldHRpbmctYW5vdGhlci1vdXRpbmctYWZ0ZXItZGlzYXN0cm91cy1lY29ub21pYy1zbHVtcC1kYXRhLTIwMjQwNjEwL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7Al0hxVrN7dKVii48nE7g4tDYMCvQOlZrDUMOvdPlynOvWgq-Lsj7rQ_06bAzw0UovuSjfon0jHTY88fP36Ix",
                "source": "ForexLive",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forexlive.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Japan economic 'roadmap' leak getting another outing after disastrous economic slump data"
            },
            {
                "link": "https://news.google.com/articles/CBMiVGh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvcmljaGFyZGpjaGFuZy8yMDI0LzA2LzA5L3RvcC1jb2xsZWdlcy1mb3ItYmlsbGlvbmFpcmVzL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToFHi4VqCQU_DHiBqoh1810Qo4MJHOxgQFeGghc3Z9P_zPKuDNVP2Uj86GlweR9j1V2PoT73_pHHZezIUMI-Yrju_z3OBhQFe-awjQrvIUHHVkkA",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "These 10 Colleges Have The Most U.S. Billionaire Alumni"
            },
            {
                "link": "https://news.google.com/articles/CBMibWh0dHBzOi8vZm9ydHVuZS5jb20vMjAyNC8wNi8wOC9mZWQtcmF0ZS1jdXQtb3V0bG9vay1mb21jLW1lZXRpbmctcHJldmlldy1qZXJvbWUtcG93ZWxsLXByZXNpZGVudGlhbC1jYW1wYWlnbi_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4tGE9EHO6AaB0YxLgrU-Db-Ngv8l5tiCDArdB0w6dwykOj_tSIoXF79LZQ7RcPSmXdLmPxmRmYf23pzPD_8IW75R4CvD2RqL0XpKO_I9uKBbQA",
                "source": "Fortune",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fortune.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Fed rate cuts could begin in the thick of presidential campaigning"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vbm9yd2F5cy13ZWFsdGgtZnVuZC12b3RlLWFnYWluc3QtZWxvbi1tdXNrcy01NWJuLXRlc2xhLXBheWNoZWNrLTIwMjQtNtIBamh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vbm9yd2F5cy13ZWFsdGgtZnVuZC12b3RlLWFnYWluc3QtZWxvbi1tdXNrcy01NWJuLXRlc2xhLXBheWNoZWNrLTIwMjQtNj9hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLHGNXqNklTdiZM5z6FiX7vBwLwfPnyNvMwvrrWpQeQgKkqVVoelGC46if-5ZhvH8OTTNgcKdS9l75dk8TRgPGoOUO5DqrUA3yjjjVNygBoySGA",
                "source": "Business Insider",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.businessinsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Norway's trillion-dollar wealth fund to vote against Musk's Tesla pay deal"
            },
            {
                "link": "https://news.google.com/articles/CBMiSmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy93aHktZG93LWJydXNoaW5nLW9mZi1zdXJnaW5nLTE3NDYwMDAwNS5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNAxJrO7U-Us8zaar4PJifD7Jm0Ow9BE07lWNcJ3vnFMahjf81p8__2CBOT4KxkpdvJvnW3iujmiipfTKmckWE75SvZ-xI8GXxUhXxRiQryjxAdA",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Why the Dow brushed off surging Treasury yields after a hot May jobs report"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy93aHktaS1zdGlsbC10aGluay1nYW1lc3RvcC1pcy1hLXRyYXAtMTIzMDU1NzEwLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxgJVU-hbmXrzL398OcEa-HgXFk5QJc6f8U-uDO9ci-2XWhE7-T0G_EacrsezxvE5qkkKn_S_hQsLzTYuPWMl13ADAuAcwP1MjFwg6WFw0ip6_g",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Why I still think GameStop is a trap"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3VzLW5ld3MvbWlsbGlvbmFpcmUtaW52ZXN0bWVudC1iYW5rZXItcHVuY2hlcy13b21hbi1vbi1icm9va2x5bi1zdHJlZXQv0gFpaHR0cHM6Ly9ueXBvc3QuY29tLzIwMjQvMDYvMDkvdXMtbmV3cy9taWxsaW9uYWlyZS1pbnZlc3RtZW50LWJhbmtlci1wdW5jaGVzLXdvbWFuLW9uLWJyb29rbHluLXN0cmVldC9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRTD4uOV-zDthkhkQHrJtFkO2axK5Z1PaNspcw2joLhiRsp7P3A4UQLGogBkOozuh_BW7QGBJvAwur2rqo3BhXq9CPUNnWNfaNRevjscfNsr43U1w",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Millionaire investment banker slugs woman on NYC street during Brooklyn Pride, shocking video shows"
            },
            {
                "link": "https://news.google.com/articles/CBMigwFodHRwczovL255cG9zdC5jb20vMjAyNC8wNi8wOS91cy1uZXdzL21hc2tlZC1wb3JjaC1waXJhdGUtc25hdGNoZXMtcGFja2FnZS1hcy1zdHVubmVkLWZlZGV4LWRyaXZlci1sb29rcy1vbi1zZWNvbmRzLWFmdGVyLWRlbGl2ZXJ5L9IBhwFodHRwczovL255cG9zdC5jb20vMjAyNC8wNi8wOS91cy1uZXdzL21hc2tlZC1wb3JjaC1waXJhdGUtc25hdGNoZXMtcGFja2FnZS1hcy1zdHVubmVkLWZlZGV4LWRyaXZlci1sb29rcy1vbi1zZWNvbmRzLWFmdGVyLWRlbGl2ZXJ5L2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsAvA9sJuWLtetK-HXsPN6jV-SfPwocKtbVnG6IFEJYXJ6qdIe4iEZsDwCkXR2AAWLRD4Qc0Ieah4mmuqq-HgMpRdGY2jFdi7ZeWhb86zHAr4Vag",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Masked porch pirate snatches package as stunned FedEx driver looks on seconds after delivery"
            },
            {
                "link": "https://news.google.com/articles/CBMiVGh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjQvMDYvMDkvdGVjaG5vbG9neS9kcml2ZXItc2NvcmVzLWluc3VyYW5jZS1kYXRhLWFwcHMuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOaL48Ebw8LX4pbCo5_-9P8bW2trCVQVLaWnrZ5KXc_zc4lRnW1JeO9wWUF8wVt91Zs2qLjjSdj9lEy9cSa1JXNZqb_8n_lg9SDrXXbShO41Wq1w",
                "source": "The New York Times",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nytimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Is Your Driving Being Secretly Scored?"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDI0LzA2LzA5L3JlYXNvbnMtdG8tYnV5LW52aWRpYS1zdG9jay1saWtlLXRoZXJlcy1uby10b21vcm93L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScHGAPN7kMQbAV5cLOK86YszSlRKyTj155DrDTPDuvByFMhN1Es1WykMoxdnWuZ19OBK7qJsTv_6LCptTXfK-XdX-v",
                "source": "The Motley Fool",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.fool.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "6 Reasons to Buy Nvidia Stock Like There's No Tomorrow"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMTAvZ29sZC1taW5lcnMtc3RydWdnbGUtd2l0aC1leGNhdmF0aW5nLW1vcmUtc2F5cy13b3JsZC1nb2xkLWNvdW5jaWwuaHRtbNIBamh0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA2LzEwL2dvbGQtbWluZXJzLXN0cnVnZ2xlLXdpdGgtZXhjYXZhdGluZy1tb3JlLXNheXMtd29ybGQtZ29sZC1jb3VuY2lsLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEml39JDPr8r7XgjONA6ERglHAimknL8kkZ1dnzCn0WLXGn1Az4Tw8oW5idyegYqqdzhrBirHauTg-SyJChlFJOvu5PoSs93pPB8Im8fTT6hLAg",
                "source": "CNBC",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cnbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Gold is getting harder to find as miners struggle to excavate more, World Gold Council says"
            },
            {
                "link": "https://news.google.com/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9zYXVkaS1hcmFtY28tc2hhcmVzLXRyYWRlLWhpZ2hlci1hZnRlci1zaGFyZS1vZmZlcmluZy0yMDI0LTA2LTA5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCUKnrSziaSoxLRhLY61f3ulcjhraqfup0IVuJTBuDrq4sZdyGpvIXUpszxXxFVMIT_gTtn7gVGMuJhb0Fn_ElAsovHw_egObCPvm2km8zrU4Rg",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Saudi Aramco shares trade higher after share offering"
            },
            {
                "link": "https://news.google.com/articles/CBMibWh0dHBzOi8vd3d3LmJhcnJvbnMuY29tL2FydGljbGVzL2ZlZC1tZWV0aW5nLWluZmxhdGlvbi1jcGktYXBwbGUtd3dkYy1icm9hZGNvbS1vcmFjbGUtZWFybmluZ3Mtc3RvY2stYTU0MzkxYjTSAXFodHRwczovL3d3dy5iYXJyb25zLmNvbS9hbXAvYXJ0aWNsZXMvZmVkLW1lZXRpbmctaW5mbGF0aW9uLWNwaS1hcHBsZS13d2RjLWJyb2FkY29tLW9yYWNsZS1lYXJuaW5ncy1zdG9jay1hNTQzOTFiNA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnB539XSr3hcoaifNUVDYBDAmCAUBtziB2diNGHIYP_yNnJD35JIEteG0Qu8jbNQ8-m5v9TzIaIqI7wQbWxuGel_-fFbiWubZ_2g-GEEubtQFOA",
                "source": "Barron's",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.barrons.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Fed Meeting, Inflation Report, Apple’s WWDC, Broadcom Earnings, and More to Watch This Week"
            },
            {
                "link": "https://news.google.com/articles/CBMiRWh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LXZpcmdpbi1nYWxhY3RpYy1zcGFjZWZsaWdodC15ZWFyLTEuaHRtbNIBRGh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LXZpcmdpbi1nYWxhY3RpYy1zcGFjZWZsaWdodC15ZWFyLTEuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlUaP783NhNI2hYDNII_QLy7vQx4lWfjl8pPIkUSmnOk_-nGe5x43fOL-Y0txC77-hVoijwtMj8h_X5jUMOkL6C9rkjhot-i8RnNJfTtaHmJ2frg",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Virgin Galactic completes final spaceflight before two-year pause"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMTAvc2hhcmVzLW9mLXRveW90YS1tYXpkYS1ob25kYS1zdXp1a2ktZmFsbC1hZnRlci1zYWZldHktc2NhbmRhbC5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSs5zrjXGcMZAV05CuAf5BqME2tOS2Kx9J9SqHLSIjU20b8EbW-ptiYx9pgLJWtOPXvwhOkCtl5y41LsoSMUwC5dtaUAfo3ZmZYopTR7Fwr9EJNsA",
                "source": "CNBC",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cnbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Shares of Toyota, Mazda, Honda, Suzuki fall after safety scandal"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTA2LTA5L2V1cm8tZmFsbHMtYWZ0ZXItZWxlY3Rpb25zLXVzLXN0b2NrLWZ1dHVyZXMtc3RlYWR5LW1hcmtldC13cmFw0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRsb46OofubcftEXyBJYhWInz_Lul7epsm5W-9gt3i4RzP-My5Qw38YXr0hP9fmH4oxF8x5P5DU58Km2vtKjY974i6AoJJsCfgXLqrj3jPtXTIDbQ",
                "source": "Bloomberg",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloomberg.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Stock Market Today: Dow, S&P Live Updates for June 10"
            },
            {
                "link": "https://news.google.com/articles/CBMib2h0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvZGFuZml0enBhdHJpY2svMjAyNC8wNi8wOC81LWJvb2tzLW9uLWFpLWluLWVkdWNhdGlvbi1hbmQtd2h5LXlvdS1zaG91bGQtcmVhZC10aGVtL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIEPJPuymg5BEtpb6Q0_T_Z85us-wTArt-Cmc3i9VXVnMECnu4t9B_zbqZpR0bbjt8BUgJw2U5H1amBfARmOT-6YpTXU-anaIk8VYRjyIsrGr0Ng",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "5 Books On AI In Education And Why You Should Read Them"
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDI0LzA2LzA5L2JldHRlci1hcnRpZmljaWFsLWludGVsbGlnZW5jZS1zdG9jay1pbnRlbC12cy1hbWQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ21G3o84bLKadzEFSkjk41TNsrinm7GO847oJ6RMlYaNyn8tM2fVXZdnHcnCZk58FQ3IR3FiHun9B-nmU29LfgAlAosVsLuSvMD2DaxEoFTwi-Mg",
                "source": "The Motley Fool",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.fool.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Better Artificial Intelligence Stock: Intel vs. AMD"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay95b3VybW9uZXkvYXJ0aWNsZS0xMzUxMTYyMS9TdGVsbGFudGlzLURvZGdlLVJhbS1yZWNhbGwtY2FyLWNyYXNoLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTr6HEYAKiEBNPYKg9ZHxs3H8p1YGXUHf19EXi86NdMop-ymZcV9vRKXtRd1Ul2Eo4biYSHB-gJuagtLy6JeukFc5eDe8Fk1oalfHZMSBGkpfMZ7A",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "American automotive giant Stellantis recalls more than 200000 vehicles over major stability concerns"
            },
            {
                "link": "https://news.google.com/articles/CBMibmh0dHBzOi8vd3d3LmZvcmV4bGl2ZS5jb20vbmV3cy9nb2xkLWljeW1pLXBlb3BsZXMtYmFuay1vZi1jaGluYS1jb21wbGV0ZWx5LXN0b3BwZWQtYnV5aW5nLWxhc3QtbW9udGgtMjAyNDA2MDgv0gFyaHR0cHM6Ly93d3cuZm9yZXhsaXZlLmNvbS9uZXdzL2dvbGQtaWN5bWktcGVvcGxlcy1iYW5rLW9mLWNoaW5hLWNvbXBsZXRlbHktc3RvcHBlZC1idXlpbmctbGFzdC1tb250aC0yMDI0MDYwOC9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkztAkUSAQMGSscM0u9N5OWMwibGAPv8PnBqcSmX9tGB_PQpF1nv2mVgmlvwFanlpmhZRb1KJL7TemVrUIFSwaj8qUkQtHuIH1BUeUfWDL5pTKKg",
                "source": "ForexLive",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forexlive.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "GOLD ICYMI: People's Bank of China completely stopped buying last month"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vZm9ydHVuZS5jb20vMjAyNC8wNi8wOC9qZW5zZW4taHVhbmctbnZkaWEtY2VvLW1hbmFnZW1lbnQtbGVhZGVyc2hpcC1vcmdhbml6YXRpb24tY3VsdHVyZS1haS1jaGlwcy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0DbG33cjkKplU0eH7YcWLYbr2xLIyLQlnbBPo5Dn22TItJ-0gQyLfQ70gHFwNXehuvxwpG-pfQELyyIhqywtEWRcG8dXFQZOaB0ZVTAKofuKvQ",
                "source": "Fortune",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fortune.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Jensen Huang created a unique culture at Nvidia that allows the AI chip leader to move 'very, very fast'"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9tb25leS9wZXJzb25hbGZpbmFuY2UvMjAyNC8wNi8wOS9ob3VzaW5nLW1hcmtldC1tb3JlLWFmZm9yZGFibGUtaG9tZXMvNzM5NzgyMzkwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbLgWZV4vhN0tPYACTe8bd4--UkmeKbYUg9fFntqkRBdGS-Foa4rsXW1pQAxnihqGOG_mST0DXWGHPnFfL8qE30IqneBmqbSs6HeJWUqFDHniqhA",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Is the housing market becoming affordable? A glimmer of good news"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tYXJrZXRzL2tpYS1yZWNhbGxzLXRlbGx1cmlkZS1zdXZzLW92ZXItZmlyZS1yaXNrLXVyZ2VzLW93bmVycy1wYXJrLW91dHNpZGXSAWtodHRwczovL3d3dy5mb3hidXNpbmVzcy5jb20vbWFya2V0cy9raWEtcmVjYWxscy10ZWxsdXJpZGUtc3V2cy1vdmVyLWZpcmUtcmlzay11cmdlcy1vd25lcnMtcGFyay1vdXRzaWRlLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMA74fVwzWXV9UvNWXNgewShWCgaFGv-0oCJQdSASuUozZjdOd5QDQJX8ybm3jMDiEQDfF3QGjJI7sdUv-8vBaxUjKyW_t5H2vtyG2g3c0TwkjzQ",
                "source": "Fox Business",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.foxbusiness.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kia recalls 460K Telluride SUVs over fire risk; urges owners to 'park outside'"
            },
            {
                "link": "https://news.google.com/articles/CBMiaWh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTA2LTA5L3ZvbHZvLXNoaWZ0cy1ldi1wcm9kdWN0aW9uLWZyb20tY2hpbmEtdG8tYmVsZ2l1bS10aW1lc9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpnCNJzViFZ8GuEEKteLOA_eqYlCWC5UXiuJO-9NBLOJi5cE21x9Z4ZfhisBI8IxT53Qcqydoz1M0bZcfZyayJWeNuMRWx1y0hx-SW2LuMxC07zQ",
                "source": "Bloomberg",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloomberg.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Volvo Shifts EV Production From China to Belgium: Times"
            },
            {
                "link": "https://news.google.com/articles/CBMiPWh0dHBzOi8vd3d3LnRlc2xhcmF0aS5jb20vdXMtcmVndWxhdG9yLWxvb3NlbmVkLWZ1ZWwtZWNvbm9teS_SAUFodHRwczovL3d3dy50ZXNsYXJhdGkuY29tL3VzLXJlZ3VsYXRvci1sb29zZW5lZC1mdWVsLWVjb25vbXkvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyF_wLTwKuGDwwNXSTmdedBpzHSplOmR1Zu5ojOdYaV-TQr0sRVyiNcwyk3o3zeHwXcRyF-6RU_79nrLTFQFCB1elzKfu-6XFz54lqKe7IVc0bSA",
                "source": "TESLARATI",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.teslarati.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "U.S. regulator launches loosened fuel economy standards"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vZm9ydHVuZS5jb20vMjAyNC8wNi8wOS9haS1yaXNrcy1yZWNlc3Npb24tZWNvbm9taWMtY3Jpc2lzLWpvYi1sb3NzZXMtZmluYW5jaWFsLW1hcmtldHMtc3VwcGx5LWNoYWlucy1pbWYv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJrSLAcHoEErW3KcbqxSHAWUH2BJusnYProv30TL3AWZfbXfwMDWqO2QKF5Cr3QZIEfyjqH5RR-7-NwuMHXUdRNi4f4fEZsj1yrs8KR5eM3kTuyw",
                "source": "Fortune",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fortune.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "AI could turn ordinary downturn into economic crisis, IMF says"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvcGV0ZXJjb2hhbi8yMDI0LzA2LzA5L252aWRpYS1zdG9jay1jb3VsZC1yaXNlLTEwLWZvbGQtb24tbmV3LTEwLWJpbGxpb24tZ3Jvd3RoLXZlY3Rvci_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwNMUYYptwZJTsyOxH2edZdRhVsysZ_gpR0csvfRO5OkS8WsoI2fXGHJNuWs5aGolPMUwQBNxbEip8u9QZNYSXMQ2HWpLzUsiwpf4AdMshxHqcvg",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Nvidia Stock Could Rise 10-Fold On New $10 Billion Growth Vector"
            },
            {
                "link": "https://news.google.com/articles/CBMiiwFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9idXNpbmVzcy9hdXRvcy10cmFuc3BvcnRhdGlvbi9ldXJvcGVhbi1uYXRpb25zLWNvbXBldGUtY2hpbmVzZS1ldi1mYWN0b3JpZXMtam9icy1ldmVuLWV1LXdlaWdocy10YXJpZmZzLTIwMjQtMDYtMTAv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKyW8K0r0dcUuMpi07l0jPKCqs7L0RnMlCI0Hq_Ihm7YCXCYVNE93Nid-Fja8aNrTOLJig6-hQaxeW5rW6ML9U57WxDhtyRV9wk83_oeSx0jplWg",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "European nations compete for Chinese EV factories, jobs even as EU weighs tariffs"
            },
            {
                "link": "https://news.google.com/articles/CBMiigFodHRwczovL3d3dy5zY21wLmNvbS9lY29ub215L2dsb2JhbC1lY29ub215L2FydGljbGUvMzI2NTgzOS9jaGluZXNlLXNvbGFyLXBhbmVsLW1ha2Vycy1mYWNlLWRpbGVtbWEtdXMtcGx1Z3MtdHJhZGUtbG9vcGhvbGUtc291dGhlYXN0LWFzaWHSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uO_O_Qtdn1ZDoUO8H4YWrgei86NW972N0e1nQwn6s8J_0TpRlnNqz4eovFXqOG_jb2lblyxKyMspS_T2D8Wf-Jm6c5LjG5qbvJ7Mz7zdbdDUCw",
                "source": "South China Morning Post",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.scmp.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "As US plugs Asean trade loophole, China's solar panel makers face dilemma"
            },
            {
                "link": "https://news.google.com/articles/CBMiOmh0dHBzOi8vd3d3LmF4aW9zLmNvbS8yMDI0LzA2LzA4L3RleGFzLXN0b2NrLWV4Y2hhbmdlLXR4c2XSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcekL6z9AHUZ7rl0mwXssYLJh2LDRggn_c0njGIInZXhs3xljI9EjVQ01-TXjfgbNMLMvnjuaFm6LFvhB_LITw24Ud_IdiWBegg-i9t4Y7KYVsGw",
                "source": "Axios",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.axios.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The Texas Stock Exchange has its work cut out for it"
            },
            {
                "link": "https://news.google.com/articles/CBMicmh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tZWRpYS9jZWxlYnJpdHktY2hlZi12b3dzLW5ldmVyLW9wZW4tYW5vdGhlci1idXNpbmVzcy1jYWxpZm9ybmlhLXVudGlsLXRoZXktZml4LXRoaW5nc9IBdmh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tZWRpYS9jZWxlYnJpdHktY2hlZi12b3dzLW5ldmVyLW9wZW4tYW5vdGhlci1idXNpbmVzcy1jYWxpZm9ybmlhLXVudGlsLXRoZXktZml4LXRoaW5ncy5hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRwIAw7FTOzG2JIxxb0VyUKp1_kyoLXdHwt1-ZZMTcq1xzH6qJ-rI9BgTPkx1yEeT5zR9OWudN7V2eyvnTKBxzSnVpC8tAxEGRYuuathK1lh3r5Q",
                "source": "Fox Business",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.foxbusiness.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Celebrity chef vows to never open another business in California until they ‘fix things’"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2NyZWRpdC1jYXJkLWRlbGlucXVlbmN5LW5vbnByb2ZpdC1jb3Vuc2Vsb3ItYzgxOTdhNzBkMzhhM2M1NjA1ZjQwZmMxZjRmNzc1YmLSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbueDVn5vEEuBTZf1NoupZuY_McJQfHmmOSGq0gMrUH6y9j_ZIoC0suM3G4RR7MfzVUJt6byD15vwvfErD_22r501L",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Credit card delinquencies are rising. Here's what to do if you're at risk"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTM1MTIyNDEvS2Fuc2FzLUNpdHktaG91c2Utc2FsZS1aaWxsb3ctc2NhbS5odG1s0gFdaHR0cHM6Ly93d3cuZGFpbHltYWlsLmNvLnVrL25ld3MvYXJ0aWNsZS0xMzUxMjI0MS9hbXAvS2Fuc2FzLUNpdHktaG91c2Utc2FsZS1aaWxsb3ctc2NhbS5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiDi48HaRUPYbqCbUPlkEWbY9tYluVYapMCdvqlbhBMKo0fNtr2k-xcMRUGPpML-BK_SmAAEaWVQVCG0Kxw_KqHGd2j1ieK7PGg5GlsXm8XEldkg",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kansas City couple have their million-dollar ranch listed on Zillow for just $10,200 for 'first-time buyers on"
            },
            {
                "link": "https://news.google.com/articles/CBMiTWh0dHBzOi8vMTN3aGFtLmNvbS9uZXdzL2xvY2FsL25ldy15b3JrLXN0YXRlLXBvbGljZS1wcmVzZW5jZS1vbi1saW5kZW4tc3RyZWV00gFRaHR0cHM6Ly8xM3doYW0uY29tL2FtcC9uZXdzL2xvY2FsL25ldy15b3JrLXN0YXRlLXBvbGljZS1wcmVzZW5jZS1vbi1saW5kZW4tc3RyZWV0?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuSv-ZjjNGHiB3SrPjCuI8ZO7JcqPF5Eqn25jJHklTjM8hOY4jr6gm_o2SJTdqr_ZpwBovNJM9VIcdnveb2KV_Hx-BVYTlxLqyOGlQistqlQWpw",
                "source": "13WHAM-TV",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://13wham.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Stolen vehicle pursued out of Farmington crashes at Linden Street"
            },
            {
                "link": "https://news.google.com/articles/CBMiQmh0dHBzOi8vbmV3cy55YWhvby5jb20vbmV3cy90LWotbWF4eC1qdXN0LWFubm91bmNlZC0xOTQ1MDA1MDkuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJMP_XnyVTiUjGar5FG0dhej3FEhDggf-S5yoTX0FwhTZAKbC51Gi2Q6TtZdNyeAB4NtUagNQ4cnSiOmNz-jFtJxLwC2fU6-nyy4oJWjBEjgRaZA",
                "source": "Yahoo News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://news.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "T.J.Maxx Just Announced a Controversial Change & Shoppers Are Not Happy"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vZm9ydHVuZS5jb20vMjAyNC8wNi8wOS9ib25kLWtpbmctYmlsbC1ncm9zcy1yZWNvcmQtc3RhbXAtY29sbGVjdGlvbi1hdWN0aW9uLW1hcmtldC1jb3JyZWN0aW9uL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKnjHiQb1bNlQinPQGCyvt2Z3ym3ZLMRVwLwg_2yDvZraQ9Jlts5GhpXB_PU5LNoAeKetOoqdt9SzQcW3YB7eV5DFMHOOXHNizs5M5ZBOzgj5oBg",
                "source": "Fortune",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fortune.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Bond King' Bill Gross is about to make a killing on his stamp collection, but he thinks the market is due for a correction and is getting out"
            },
            {
                "link": "https://news.google.com/articles/CBMiTWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9nZXJvbi1zdG9jay1idXktZm9sbG93aW5nLWZpcnN0LTEwMzcwMDA3Mi5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtjNYmqip7hmFyoj0SijDkLtluVmSrLL-eBGkbnxNx6-B5FWFyh5YUe0oRFAd5h1zYGlwXhr4yRv02FtwmoeoEGKeAIPqz4lEUwU06mgfQ6d48RA",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Is Geron Stock a Buy Following Its First New Drug Approval?"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vYXJzdGVjaG5pY2EuY29tL2NhcnMvMjAyNC8wNi90aGUtMjAyNS1wb2xlc3Rhci0zLWlzLWEtdG9ycXVlLXZlY3RvcmluZy1zdXYtdGhhdHMtZnVuLXRvLWRyaXZlL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcX_xX9RFRGI36_-5n7eK8-zOcMLjMhmBrQaEpPGJoV5r-aiCQlI4d8K6OobPdYA9A2YuBtf0DubrH4Raf92aywPjpm5NYQR0DsoBc5H9sfKaPgw",
                "source": "Ars Technica",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://arstechnica.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The 2025 Polestar 3 is a torque-vectoring SUV that's fun to drive"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9vbHltcGljcy9vbHltcGljLWF0aGxldGVzLXR1cm4tZGlhYmV0ZXMtdGVjaC1wdXJzdWl0LW1lZGFscy0yMDI0LTA2LTEwL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSu_ClJVfN0tuG-2WDWnOvzvOICfYIiqLs3ujO5n_UPj0w3IfDWJZ4FqQOThP9VsP7mOTLGdxTDOv1BsdT94YgitJYtoiXRivD1YT8CnjxUxriWQ",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Olympic athletes turn to diabetes tech in pursuit of medals"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vYWJjbmV3cy5nby5jb20vSW50ZXJuYXRpb25hbC9oYWlsc3Rvcm0tY2F1c2VzLW1ham9yLWRhbWFnZS1ub3NlLWNvY2twaXQtd2luZG93cy1hdXN0cmlhbi9zdG9yeT9pZD0xMTA5NzAyMjHSAXdodHRwczovL2FiY25ld3MuZ28uY29tL2FtcC9JbnRlcm5hdGlvbmFsL2hhaWxzdG9ybS1jYXVzZXMtbWFqb3ItZGFtYWdlLW5vc2UtY29ja3BpdC13aW5kb3dzLWF1c3RyaWFuL3N0b3J5P2lkPTExMDk3MDIyMQ?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Zi5tQx5m7AS7EohGAVtwJ0O3FgNYPC4_mZK-nBIcznhxo_VmMf7iHOQgt-ErXXkxOlyLO_3k7_zJlR9Y3QkBdb0EHIaufv-e-0QgBfKJY4Hu4g",
                "source": "ABC News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abcnews.go.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Hailstorm causes major damage to nose, cockpit windows of Austrian Airlines plane"
            },
            {
                "link": "https://news.google.com/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzkxMTdlNWU2LWJhZjktNGJkZi04MDgwLTlhYTAxOWVmMWJmY9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5pR2pnLfX9vjwS9eDQ62G1RTN1u4U2az3euZ_i3zBtnnV9pc_JBqlSlONh6hzBVkK2Y_36ayeidXAPE23ctTqMpWmlPOpQuV5bv8MtWPLpipqzw",
                "source": "Financial Times",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.ft.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The graphite fight: US tariffs trigger race to build non-Chinese supply chain"
            },
            {
                "link": "https://news.google.com/articles/CBMie2h0dHBzOi8vMjQ3d2FsbHN0LmNvbS9pbnZlc3RpbmcvMjAyNC8wNi8wOS9wcmljZS1wcmVkaWN0aW9uLW52aWRpYS13aWxsLWhpdC0xNTAtYnktdGhlLWVuZC1vZi1zdW1tZXItYWZ0ZXItaXRzLXN0b2NrLXNwbGl0L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4HH3XN1kiievaekQRm6tP59l2cWa_DjgXyUd4fQeSMN-MPxIQrY79E7y8-YPq9GEzJjYGRu6CkPUYkClXaCGUUisI5gu0dYC2M_iOfROKEqttw",
                "source": "24/7 Wall St.",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://247wallst.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Price Prediction: NVIDIA Will Hit $150 By the End of Summer After Its Stock Split"
            },
            {
                "link": "https://news.google.com/articles/CBMiL2h0dHBzOi8vdGhlcG9pbnRzZ3V5LmNvbS9uZXdzL2JhcmstYWlyLWxhd3N1aXQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeRgOxhtIQX1azDqFLrwtrKSmHFg-O037pf4gFnIWCWIYBhGMJEeL0pqdZrAcM63JkVPjrKvQ-2etNcKO-6FHI13g1QAPSRw_qpomq7oqfEGWuRw",
                "source": "The Points Guy",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://thepointsguy.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bark (Air) or bite: Cat fight over dog flights"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vY29yZGN1dHRlcnNuZXdzLmNvbS9wYXJhbW91bnQtaXMtbG9va2luZy1mb3ItcGFydG5lcnMtZm9yLXBhcmFtb3VudC01MDAtbWlsbGlvbi1pbi1idWRnZXQtY3V0cy_SAW1odHRwczovL2NvcmRjdXR0ZXJzbmV3cy5jb20vcGFyYW1vdW50LWlzLWxvb2tpbmctZm9yLXBhcnRuZXJzLWZvci1wYXJhbW91bnQtNTAwLW1pbGxpb24taW4tYnVkZ2V0LWN1dHMvP2FtcD0x?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQLPXuvPX56t1iIFkc5-eht85yIo9Sfrbh3wekVIMExll89d90owb-aQWl1lzBFRqtkzGc_9OBTGI3Iis5RnNOG2tolczU1hfNLxFrH6C1Gd5Bg",
                "source": "Cord Cutters News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://cordcuttersnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Paramount Is Looking For Partners For Paramount+ & $500 Million In Budget Cuts"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90b3AtY2l0eS1oaWdoZXN0LWhvbWVsZXNzLXBvcHVsYXRpb24tMTUxMTE2MjIzLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxWa5f79OTDQTAvyeVB1Ha2ayx2Pq9KIjTgn1xW-6uy22-5ikSlLPhwr1sQlJj3Z55TjwC29t902UXz1KpFFWaejqiiBnu8vMeh4v6J9ks2fcRmw",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The Top City with the Highest Homeless Population Per Capita in the US"
            },
            {
                "link": "https://news.google.com/articles/CBMijAFodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2VsYWluZXBvZmVsZHQvMjAyNC8wNi8wOS9haS1pcy1yZS1zaGFwaW5nLWUtY29tbWVyY2UtaGVyZXMtaG93LXRvLXVzZS1pdC10by1mcmVlLXlvdXItdGltZS1hbmQtZm9jdXMtb24tZ3Jvd3RoL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7TwayGxyshfauqOfcRCdlWCp3V-73Gw41ekzDJYzfTL5vy3B-ge5awqmgNhJMWnZl6J3eL75PBAx7IZIBD5oDIhwrjZT_-Il5enLEp735Shu5w",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "AI Is Re-Shaping E-Commerce. Here's How To Use It To Free Your Time And Focus On Growth"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvbWVnYW5wb2luc2tpLzIwMjQvMDYvMDkvaG93LXRvLWRldmVsb3AtYW4tYWktaW1wbGVtZW50YXRpb24tc3RyYXRlZ3ktZm9yLXlvdXItYnVzaW5lc3Mv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrcE3pN4CcX7YfQ27CKTC2cpz9HZM4x1sTgc-QA6uftuhhD5zWIVaRcVKWlKynKmAgb7tN5SshKKKRLyK7exOWNhCGX3PE2uIn07eBRFcnaPu7mA",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How To Develop An AI Implementation Strategy For Your Business"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vdGlwcGluZy1jdWx0dXJlLXJlc3RhdXJhbnQtc2VydmVycy11YmVyLWRyaXZlcnMtZ2l2aW5nLWZld2VyLXRpcHMtMjAyNC020gFsaHR0cHM6Ly93d3cuYnVzaW5lc3NpbnNpZGVyLmNvbS90aXBwaW5nLWN1bHR1cmUtcmVzdGF1cmFudC1zZXJ2ZXJzLXViZXItZHJpdmVycy1naXZpbmctZmV3ZXItdGlwcy0yMDI0LTY_YW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8eIPe3bSeVWI88j5ARSHxu13OhoHfaC2tVzweOriYg_iH0Ex3U58KvmnbAjLdBdwmdpXOAH7Znq8ocJyJS-gRfYWyhfXxTTgmnalzG6RfI_dlBQ",
                "source": "Business Insider",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.businessinsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New survey results suggest some Americans are sick of tipping culture"
            },
            {
                "link": "https://news.google.com/articles/CBMieWh0dHBzOi8vd3d3Lm5vdGVib29rY2hlY2submV0L1Rlc2xhLU1vZGVsLVktSnVuaXBlci1yZWxlYXNlLW5vdC11cmdlbnQtYXMtRWxvbi1NdXNrLWNsYWltcy1yb2xsaW5nLXVwZ3JhZGVzLjg0NTY2Ni4wLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB7m7xykWeGkjM2XJ-xTbrE2XPXnuGm4PUl8eLLG6cZLL7iOp5L2FaaShLq0T5AozSFCVMIV7hOMKf4SzVXpH346UD1y8U5H7GzJucAibD7NUQRg",
                "source": "Notebookcheck.net",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.notebookcheck.net&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tesla Model Y Juniper release not urgent as Elon Musk claims rolling upgrades"
            },
            {
                "link": "https://news.google.com/articles/CBMifWh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTA2LTA5L25ldy15b3JrLWZlZC1pcy1sb3Npbmctc3RyZWV0LWNyZWQtYXMtc2VuaW9yLW9mZmljaWFscy1leGl0LXVuZGVyLXdpbGxpYW1z0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdpiqLJZ6MVjWLtqFxgluOGyxlRKs9PmVA0gTmOmOOWYXGZKffUWhNQSGbDIUEEo-X_pBOZ8Wv1t3MFWg1FOKGDXZD2OzEK0cQkij6Sc_2X1a85g",
                "source": "Bloomberg",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloomberg.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New York Fed Is Losing Talent and 'Street Cred' Under John Williams"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3d3LmtndW45LmNvbS9kb250LXdhc3RlLXlvdXItbW9uZXkvaG93LXRvLXN1cGVyY29vbC15b3VyLWhvbWUtZm9yLWNoaWxseS1haXItYW5kLWVuZXJneS1zYXZpbmdz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSBIzrgBa1xoB_S-lpmL1-UqlOrXRy1_aLUUZxg6Xm4V7HbWmIwocO0dswWZahvHs",
                "source": "KGUN 9 Tucson News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.kgun9.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How to 'supercool' your home for chilly air and energy savings"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vamVmZi1iZXpvcy1wcml2YXRlLWpldC1waWxhdHVzLXBjLTI0LWluc2lkZS11bmlxdWUtdG9pbGV0LTIwMjQtNtIBZGh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vamVmZi1iZXpvcy1wcml2YXRlLWpldC1waWxhdHVzLXBjLTI0LWluc2lkZS11bmlxdWUtdG9pbGV0LTIwMjQtNj9hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTy5pSAyT3_Fxw887gQCX2lVB3ivYXrGRH_ImbIcpO9htlP2ha4vXDVQsaI64RDHGHr8rG4p2WO15TmooL9y0YGaf6qA5l_ezcvsjk9",
                "source": "Business Insider",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.businessinsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Photos: Jeff Bezos owns $10 million private jet with unique toilet"
            },
            {
                "link": "https://news.google.com/articles/CBMiR2h0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vYW5hdC1hc2hrZW5hemktY2ZvLWNhcmVlci1nb29nbGUtMjAyNC020gFLaHR0cHM6Ly93d3cuYnVzaW5lc3NpbnNpZGVyLmNvbS9hbmF0LWFzaGtlbmF6aS1jZm8tY2FyZWVyLWdvb2dsZS0yMDI0LTY_YW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZL1g3xpqSEEED0LYbKRTaHhXHYohqN-jwdywYpHX-QqWlLJz--TyBWylvMeaeUjZ9lIrBBuOlJeyMQBODX3DoU0zDa_EDi5IpTc7TUisfUh_WZw",
                "source": "Business Insider",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.businessinsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Career of Anat Ashkenazi, former Eli Lilly executive turned Google CFO"
            },
            {
                "link": "https://news.google.com/articles/CBMidmh0dHBzOi8vZm9ydHVuZS5jb20vMjAyNC8wNi8wOS9lY29ub21pYy1vdXRsb29rLWZlZC1pbnRlcmVzdC1yYXRlLWN1dC1mb21jLW1lZXRpbmctZmluYW5jaWFsLWNvbmRpdGlvbnMtamVyb21lLXBvd2VsbC_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHR1YliWNglUEPJSGdYtQU03WCSW_IhnScrAHTIlnN6UAZIJ2VwmTh2iYihbJw_Ziro0gzMv-96pJl-FGX0tICsF71Soz6DmHqLRnhjhsBcrPmA",
                "source": "Fortune",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fortune.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "It really might be different this time as the Fed puzzles over why high rates aren't hitting the economy harder"
            },
            {
                "link": "https://news.google.com/articles/CBMiS2h0dHBzOi8vYml0Y29pbmlzdC5jb20vYml0Y29pbi1wcmljZS10LXN0YXktYWZsb2F0LWhlcmUtdGhlLWxldmVsLXRvLXdhdGNoL9IBT2h0dHBzOi8vYml0Y29pbmlzdC5jb20vYml0Y29pbi1wcmljZS10LXN0YXktYWZsb2F0LWhlcmUtdGhlLWxldmVsLXRvLXdhdGNoL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oXoBTvpd3dKf28iajCLluKEke7kpt2WMxOzNikQy4Y8qqKBJpu2ppxNY19SlWH9q6XxVO8X2W9vVDr_-fZ8s-irmI-JbFc9kz8tKUzNj_TBQHw",
                "source": "Bitcoinist",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://bitcoinist.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bitcoin Price To Stay Afloat At $67,000? Here’s The Level To Watch | Bitcoinist.com"
            },
            {
                "link": "https://news.google.com/articles/CBMicmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTA2LTA5L2JpZy10ZWNoLWlzLWRyaXZpbmctdGhlLXMtcC1yYWxseS10aGUtcmVzdC1oYXZlLXRvLXN0ZXAtdXAtc29vbtIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6REYaa02i14VSUJRqZKrxD67ZaKk-iu1P5w88guyEbhZy6bqgNYnSq7nTuhaspFyyo38ASUdNVw8lAWfWy0C0Gqv4nFDW27rf83AiJkOlvofTQA",
                "source": "Bloomberg",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloomberg.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Big Tech Is Driving the S&P Rally. The Rest Have to Step Up Soon"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vYWJjN25ld3MuY29tL3Bvc3QvY2FsdHJhaW4tc2VydmljZS1iZXR3ZWVuLXNhbi1mcmFuY2lzY28tc2FuLWpvc2Utc3VzcGVuZGVkLzE0OTI1NzA0L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtXA4WuHjCSM6cw_bUPYM-bKDFPrd7NotHvQwH0JXK6R5aAfL30zXpWqFROdVWxiFNr538wurM0Au1lt9bZq81gtILTCxQsdrGE_YTXrh6xiVReA",
                "source": "KGO-TV",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abc7news.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Caltrain service between San Francisco and San Jose suspended this weekend"
            },
            {
                "link": "https://news.google.com/articles/CBMiTWh0dHBzOi8vd3d3Lndzai5jb20vdXMtbmV3cy9sYXcvam9zaHVhLXdyaWdodC1hZmZhaXItcmV2ZW5nZS1icmVha3VwLTBjNzVmOTE20gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNctxSvATBSEaJ70YcNs8aOh3ymVU94hMY77k08lQ8SngWwKDwos5CPwISRQH7Lk2SfcwfXghYZgFlb9w99SGfgGvCb8PK65owIQDzeW4EL0Sq-g",
                "source": "The Wall Street Journal",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.wsj.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Hubris, Revenge and a Breakup Brought Down Big Tech's Proudest Ally"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vYnVzaW5lc3MvYW1hem9uL2FtYXpvbi1pcy10aW5rZXJpbmctd2l0aC1ncm9jZXJ5LWJ1c2luZXNzLXNvbWUtYXJlLXVuc3VyZS1pdHMtd29ya2luZy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkhvmMzzhNL7q9iPCnfHkpCwHkFBgmL6Xkv8275i1VCA8qUByope3QejoACDphY7BJro-Bd_LWgWEctDgoxGoHxqSPgYFyjUOmzDiKVAav1fKr_Q",
                "source": "The Seattle Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.seattletimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Amazon is tinkering with grocery business. Some are unsure it's working"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vd2NjZnRlY2guY29tL252aWRpYS1jb21wdXRleC0yMDI0LXJlY2FwLXJ1YmluLWdwdS1hcmNoaXRlY3R1cmUtdW52ZWlsZWQtaHVnZS1ydHgtYWktcGMtZGV2ZWxvcG1lbnRzL9IBcGh0dHBzOi8vd2NjZnRlY2guY29tL252aWRpYS1jb21wdXRleC0yMDI0LXJlY2FwLXJ1YmluLWdwdS1hcmNoaXRlY3R1cmUtdW52ZWlsZWQtaHVnZS1ydHgtYWktcGMtZGV2ZWxvcG1lbnRzL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08YXnU0PGExmDRPjweqBFQ6mOyU60kR-yv87KBzKh_bk0LBse1ggb5iWabio2rNgblQrhLDig52_taSgr7VMQSkyOllvzTh_c8cL5kZDUxkGjHA",
                "source": "Wccftech",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://wccftech.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NVIDIA Computex 2024 Recap : Rubin GPU Architecture Unveiled Along With Huge RTX AI PC Developments"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vd3d3LmNuZXQuY29tL3JvYWRzaG93L25ld3MvcmVhY3Rpb25zLXRvLXJpdmlhbnMtbmV3LXIxdC10cnVjay1wcmFpc2UtcmFuZ2UtcG93ZXItdGhlLWN5YmVydHJ1Y2staS13YW50ZWQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3JKo1yZIHWgSy6sItP6GCI-OSONtqWLFrlRnJsGwuooQU5NhCzcNdxoApYE3FuwA19fx3Cy7y1oT7ViZxHwpWxYVJd2NmkSP1dqUyz2s8MjYuw",
                "source": "CNET",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.cnet.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Reactions to Rivian's New R1T Truck Praise Range, Power: 'The Cybertruck I Wanted'"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LnRpcHJhbmtzLmNvbS9uZXdzL2FsbC1leWVzLW9uLWFwcGxlLXN0b2NrLWFoZWFkLW9mLXd3ZGMtaGVyZXMtd2hhdC1kYW5pZWwtaXZlcy1leHBlY3Rz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgLKr-UoVTutKeRqo4G_tsxftc68X9cQY6DDR2alPX0Cd4u7-CFHmPoAYP6pRtKP9h2bhPbijF7iVq8FnO1cp6yqkxUQPNSA5Wne6VlBM8aja31A",
                "source": "TipRanks",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.tipranks.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "All Eyes on Apple Stock Ahead of WWDC; Here's What Daniel Ives Expects - TipRanks.com"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmtjdHY1LmNvbS8yMDI0LzA2LzA5L2Fub3RoZXItY291bnRyeS1jbHViLXBsYXphLXJlc3RhdXJhbnQtY2xvc2VzLWl0cy1kb29ycy1vdmVybmlnaHQv0gFxaHR0cHM6Ly93d3cua2N0djUuY29tLzIwMjQvMDYvMDkvYW5vdGhlci1jb3VudHJ5LWNsdWItcGxhemEtcmVzdGF1cmFudC1jbG9zZXMtaXRzLWRvb3JzLW92ZXJuaWdodC8_b3V0cHV0VHlwZT1hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsPxFBUf1N_snca1sHBftSaBVHbNu6cKL5GxAZtZaG3sZkP8DBZs_hjPXiAVatGgjusgHzakKCGyiKzjLGL8f8XXOBeJTXz-Lnxn4LcRedSK6SA",
                "source": "KCTV 5",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.kctv5.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Another Country Club Plaza restaurant closes its doors overnight"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vbGl2ZWFuZGxldHNmbHkuY29tL2ktc3Bva2UtdG8tYS12ZXRlcmFuLWFhLWZsaWdodC1hdHRlbmRhbnQtd2h5LWEtc3RyaWtlLWlzLWNsb3Nlci10aGFuLWV2ZXIv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSq3UdmC6Kx5izmePxFUhXYXpnEkJWugFzVducHDHocoyM0puWwhd_AtjCRfsRAZxbNgcGYJ6KieWeekVg2GR1t-zHMbX9HVlPzT-dZyiJtK__Jtg",
                "source": "Live and Let's Fly",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://liveandletsfly.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "I Spoke To A Veteran AA Flight Attendant: Why A Strike Is Closer Than Ever"
            },
            {
                "link": "https://news.google.com/articles/CBMid2h0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tZWRpYS9zdXBlci1jb21tdXRlci10b3V0cy00LXN0YXRlLWxvbmctY29tbXV0ZS1ueWMtbWFraW5nLW1hbmhhdHRhbi1tb25leS1sb3ctbGl2aW5nLWNvc3Rz0gF7aHR0cHM6Ly93d3cuZm94YnVzaW5lc3MuY29tL21lZGlhL3N1cGVyLWNvbW11dGVyLXRvdXRzLTQtc3RhdGUtbG9uZy1jb21tdXRlLW55Yy1tYWtpbmctbWFuaGF0dGFuLW1vbmV5LWxvdy1saXZpbmctY29zdHMuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKW_ZQBobKeWItopj6dL44CDMQCYb5cm_rfcL7gAxraCVUItpTF0QvpuG3rwO7TwhrgF0JPejGL8v7ye5_OZ9iK0Vflg3iW9xsutgJKK3qIs8Asw",
                "source": "Fox Business",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.foxbusiness.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Super commuter touts 4-state-long commute to NYC: I'm making 'Manhattan money' with low living costs"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vd3d3LmNic25ld3MuY29tL2xvc2FuZ2VsZXMvbmV3cy9nb2xkLW51Z2dldC13b3J0aC1tb3JlLXRoYW4tODBrLXN0b2xlbi1mcm9tLWxvbmctYmVhY2gtY29sbGVjdGlibGVzLXNob3cv0gF1aHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL2xvc2FuZ2VsZXMvbmV3cy9nb2xkLW51Z2dldC13b3J0aC1tb3JlLXRoYW4tODBrLXN0b2xlbi1mcm9tLWxvbmctYmVhY2gtY29sbGVjdGlibGVzLXNob3cv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTstkiYIziqF3VYtzEtpbXCUwryPqJvRW9kMtgHqTcRpnDZmxj69BOU1a4x5Z10lJ3hzMHlUrONfMOw8dT-82OLP1MJNWTz-H5yRxq8LcubvRkTHg",
                "source": "CBS Los Angeles",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Gold Rush-era gold nugget worth more than $80k stolen from Long Beach collectibles show"
            },
            {
                "link": "https://news.google.com/articles/CBMiTmh0dHBzOi8vY29pbnRlbGVncmFwaC5jb20vbmV3cy9ibmItdG9uLWZpbC1pbmotY2FuLWdvLWhpZ2hlci1iaXRjb2luLXByaWNlLTY5a9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF0lr9d9z9x5ACTj1gjBaQEiuiydelQqDZfIgAHxk7P0_9ignA7BjH3SicciyiDQU",
                "source": "Cointelegraph",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://cointelegraph.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "BNB, TON, FIL, and INJ can go much higher if Bitcoin price flips $69K"
            }
        ],
        "Entertainment": [
            {
                "link": "https://news.google.com/articles/CBMiWmh0dHBzOi8vd3d3LnRoZWdsb2JlYW5kbWFpbC5jb20vbGlmZS9ob3Jvc2NvcGVzL2FydGljbGUteW91ci1kYWlseS1ob3Jvc2NvcGUtanVuZS0xMC0yMDI0L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEsSkM3k8RVel0YbXJogiGIjHAUKLAOPkhShVGBuUD5jhJ_ncHKq4iG35-0l2RP96mk9SY38iP26wuVUsaeuVanoxLg3XYimRgvBsWnzTv_Aebg",
                "source": "The Globe and Mail",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.theglobeandmail.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Your daily horoscope: June 10, 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3d3LnRtei5jb20vMjAyNC8wNi8xMC9yb2JlcnQtc2hpbm4tZGFuY2luZy1kZXZpbC1uZXRmbGl4LWN1bHQtaW52ZXN0aWdhdGVkLWNyaW1lcy1jYXNlcy1jbG9zZWQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2jwpUV2j41e8f3-JXYrU_5ytOtMWI_Gsjz679m5WPhuXoRVpPbGfiTTUX9RWUa4F9IUqp8ZsXb61kEnY-UWUgo3qDgZi1Pk-vy0QyIMLmDcD4ig",
                "source": "TMZ",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.tmz.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Dancing for the Devil' Alleged Villain Was Investigated by Cops, Cases Closed"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay90dnNob3diaXovYXJ0aWNsZS0xMzUxMTk2NS9KdWxpYS1Mb3Vpcy1EcmV5ZnVzLUplcnJ5LVNlaW5mZWxkLWNvbWVkeS5odG1s0gFpaHR0cHM6Ly93d3cuZGFpbHltYWlsLmNvLnVrL3R2c2hvd2Jpei9hcnRpY2xlLTEzNTExOTY1L2FtcC9KdWxpYS1Mb3Vpcy1EcmV5ZnVzLUplcnJ5LVNlaW5mZWxkLWNvbWVkeS5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVTxMkGpmAv0-bdIjORkEW2zbE-BvUM28w7J7S1y73lwtpLafz-IN0TgdfaszaVNNpOH4V0fNH2vweU8h25U0Vf_DaAvwtYSe2AqmAoLhEpoKC0g",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Julia Louis-Dreyfus calls Jerry Seinfeld's comments about comedy turning too politically correct due to extrem"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vZXcuY29tL2JhZC1ib3lzLTQtcmV2aXZlcy1ib3gtb2ZmaWNlLXdpdGgtd2lsbC1zbWl0aC1yZXR1cm4tdG8tdGhlYXRlcnMtODY2MDYyNNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxJ-Ef7V7uUXWvh5GpgaDIgKUpQsH6RUIfL7--_a6DViSmN_T1VCO72dZGX7KdehB4lsFLB1H0dHMRUVWJq_QPz3MUPGqV-VpngH4nc5gJoThhkA",
                "source": "Entertainment Weekly News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://ew.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Bad Boys 4' revives box office with Will Smith's return to theaters"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LnRtei5jb20vMjAyNC8wNi8wOC9qZW5uaWZlci1sb3Blei1iZW4tYWZmbGVjay1zZWxsLW1hcml0YWwtaG9tZS1iZXZlcmx5LWhpbGxzLWRpdm9yY2Uv0gFiaHR0cHM6Ly9hbXAudG16LmNvbS8yMDI0LzA2LzA4L2plbm5pZmVyLWxvcGV6LWJlbi1hZmZsZWNrLXNlbGwtbWFyaXRhbC1ob21lLWJldmVybHktaGlsbHMtZGl2b3JjZS8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIMNHjYYTh_9t7e2q0ZTsAp0xeKw8Xf_VYiBBJPiH97iYutrVAaHgkjvSjwnYys1wC3arw3Pu_sms_5spXp7rN0DXlI2IAxj30qXTMCjsKPSeXKw",
                "source": "TMZ",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.tmz.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Jennifer Lopez, Ben Affleck Selling Marital Home, Divorce Imminent"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vdmFyaWV0eS5jb20vMjAyNC9tdXNpYy9uZXdzL3RheWxvci1zd2lmdC1oZWxwcy1mYW4tZWRpbmJ1cmdoLWVyYXMtdG91ci1zaG93LTEyMzYwMzAxNTkv0gFjaHR0cHM6Ly92YXJpZXR5LmNvbS8yMDI0L211c2ljL25ld3MvdGF5bG9yLXN3aWZ0LWhlbHBzLWZhbi1lZGluYnVyZ2gtZXJhcy10b3VyLXNob3ctMTIzNjAzMDE1OS9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQ-kaSpDHN-7uPBsZGmSA1Rml9Fl_QN8nOuuzd6_TUEBT0KqsTnPT_ncARjG8WOAgkfdmy1CPaY-7_0lYcB-ecLrpCMCHo4wdIlIy7miv6Vcm8BA",
                "source": "Variety",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://variety.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Taylor Swift Stops Mid-Song to Help a Fan in Distress at Edinburgh Eras Tour Show"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd3d3LnRoZW5ld3MuY29tLnBrL2xhdGVzdC8xMTk4ODU4LXJ5YW4tc2VhY3Jlc3QtaG9ub3Vycy1wYXQtc2FqYWstYWZ0ZXItd2hlZWwtb2YtZm9ydHVuZS1leGl00gFiaHR0cHM6Ly93d3cudGhlbmV3cy5jb20ucGsvYW1wLzExOTg4NTgtcnlhbi1zZWFjcmVzdC1ob25vdXJzLXBhdC1zYWphay1hZnRlci13aGVlbC1vZi1mb3J0dW5lLWV4aXQ?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpTb62iHwWkgllX9NknMoZPicQ2aAPOJ4oQOZNwuIc5GIgUoPuLoUih0GnAiiFRwYBtZ2Ro_N-FgKwoMDVFXKfOa6t15KGOpcHCpMh2J1e9KkLw",
                "source": "The News International",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.thenews.com.pk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ryan Seacrest honours Pat Sajak after Wheel of Fortune exit"
            },
            {
                "link": "https://news.google.com/articles/CBMiSmh0dHBzOi8vY29sbGlkZXIuY29tL2Z1cmlvc2EtYS1tYWQtbWF4LXNhZ2EtZ2xvYmFsLWJveC1vZmZpY2UtMTQ0LW1pbGxpb24v0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK4kOcQd0iF4KP2fdjOSZkC6LzT6LRhzUG6xqCai6ETz3AEQrkfHvxCDcNYp-tUBwLfwnppKXkR656yY_rYgVM77D-Jq6_PjjcNnrnAYYQzzugg",
                "source": "Collider",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://collider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Furiosa - A Mad Max Saga' Global Box Office Is Spinning Its Wheels"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3Jlc3RsZXRhbGsuY29tL25ld3Mvd3dlLWNhcm1lbG8taGF5ZXMtZ2lybGZyaWVuZC1rZWxhbmktam9yZGFuLWNoYW1waW9uc2hpcC13aW4v0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb2434G7ZN-f_77nMlwiDy27-agGPzq_opm6YVzxvgF-1BwSyxLLadLxzBD9xt9-4l0Z0-BhdCfCGk51eduefTaNH0cYWNmRw7LM7wQxKL1WyY8A",
                "source": "https://wrestletalk.com/",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://wrestletalk.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "WWE's Carmelo Hayes Congratulates Real-Life Girlfriend Kelani Jordan On Championship Win"
            },
            {
                "link": "https://news.google.com/articles/CBMiVmh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvanVsaWEtbG91aXMtZHJleWZ1cy1vbi10dWVzZGF5LWFuZC1wb2RjYXN0LXdpc2VyLXRoYW4tbWUv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcHo_K6lQn5TXfsFESdy2ORqfmQEyE8BGHvMdk4W4Rv2msxxT98yRZDK29m7-68a7NvYA8YfGdNckJY1pSQknSBiUUQLzum-nKgtxuw1GcUzToFg",
                "source": "CBS News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Julia Louis-Dreyfus on \"Tuesday\" and podcast \"Wiser Than Me\""
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vd3Jlc3RsaW5naGVhZGxpbmVzLmNvbS9jbS1wdW5rLW11bHRpcGxlLXRvcC10bmEtZXhlY3V0aXZlcy1iYWNrc3RhZ2UtYXQtd3dlLW54dC1iYXR0bGVncm91bmQtMjAyNC_SAW5odHRwczovL3dyZXN0bGluZ2hlYWRsaW5lcy5jb20vY20tcHVuay1tdWx0aXBsZS10b3AtdG5hLWV4ZWN1dGl2ZXMtYmFja3N0YWdlLWF0LXd3ZS1ueHQtYmF0dGxlZ3JvdW5kLTIwMjQvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYyhV_JG4MNvIHtXHs6Ya9jBCCao8qMpp-ENRaDZEyf6k3OR04EyrA643cmSeu5HJeLRUjtWl0R4FG7S_g2E_0rgalfe74R34nFWTczGz7ARiiLQ",
                "source": "Wrestling Headlines",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://wrestlingheadlines.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "CM Punk, Multiple Top TNA Executives Backstage At WWE NXT Battleground 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jcmdnazd4MGs3bG_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYVoD2l7o_dS8uM14DmENuCOtbfwFDxTXzx6RFyyOqU-zRDZ-np8oE_qZYAFyW5nI",
                "source": "BBC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Billie Eilish: 'I was ghosted. It was insane'"
            },
            {
                "link": "https://news.google.com/articles/CBMicmh0dHBzOi8vd3d3LmluZGlld2lyZS5jb20vbmV3cy9mZXN0aXZhbHMvZ2VlbmEtZGF2aXMtY2FsbHMtZGVpLWludGlhdGl2ZXMtaW5oZXJlbnRseS1ub3QtY29udHJvdmVyc2lhbC0xMjM1MDE0MTM5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGmqHL8k26TGZikWZI45SZrntPXYxOL8ZM5_liK8kwnm-EUAl-Kfx5CsQJwCekP3S10CXIX2Zn-QngCvKBhDIoP4O2zCCR-0NBZt2phr85q8DY2Q",
                "source": "IndieWire",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.indiewire.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Geena Davis Calls DEI Initiatives 'Inherently Not Controversial'"
            },
            {
                "link": "https://news.google.com/articles/CBMiRGh0dHBzOi8vd3d3LnRoZWN1dC5jb20vYXJ0aWNsZS93aHkta3lsaWUta2VsY2UtZG9lc250LWxpa2UtZmFtZS5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6TJCpHuWcIDEZ7fNTsgXgbuGU-12sWWazJWYLmef8sm7kYQNPdEHCVN55nYTm_fCYu6NzgI8MNzMOJQgbHidzPu_MnwXiEtp3qya9sHjoM42Ew",
                "source": "The Cut",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.thecut.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Why Kylie Kelce Doesn't Like Fame"
            },
            {
                "link": "https://news.google.com/articles/CBMiiQFodHRwczovL3d3dy5jYWdlc2lkZXNlYXRzLmNvbS93d2UvMjAyNC82LzkvMjQxNzUwMTcvcm94YW5uZS1wZXJlei1yZXRhaW5zLW54dC13b21lbnMtdGl0bGUtYWdhaW5zdC10bmEta25vY2tvdXRzLWNoYW1waW9uLWF0LWJhdHRsZWdyb3VuZNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHmjdzgBfVkjq9gH4LbaGl1UGM3CHt3Jz0gB7Mqd3FXKN5ehnlMDTSaFtntFuJ_7Yv39bUJok_Qt6bQwVmN9pu5zTLU39NnBi3Bcd04Ymmt16-FA",
                "source": "Cageside Seats",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.cagesideseats.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Perez retains NXT women's title against TNA Knockout's Champion at Battleground"
            },
            {
                "link": "https://news.google.com/articles/CBMidWh0dHBzOi8vd3d3LmVvbmxpbmUuY29tL25ld3MvMTQwMzI4OC9oZWlkaS1rbHVtLWNlbGVicmF0ZXMtd2l0aC1oZXItYW5kLXNlYWxzLXNvbi1oZW5yeS1hdC1oaXMtaGlnaC1zY2hvb2wtZ3JhZHVhdGlvbtIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvEQd7Gh9LCCkpV26kjpQ-kP6mAhAAIV9QxzHZCCUpcTAL6kc9d7NqiS14ujExVGqDE4-bgARQ3jm15yW9aDYaFbkzqX-GOcSOTFEL0efY6xjM5g",
                "source": "E! NEWS",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.eonline.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Heidi Klum Celebrates With Her and Seal's Son Henry at His Graduation"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vdmFyaWV0eS5jb20vMjAyNC90di9yZXZpZXdzL3ByZXN1bWVkLWlubm9jZW50LXJldmlldy1qYWtlLWd5bGxlbmhhYWwtMTIzNjAyODc2Ni_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaCHGEN8LhiJElezn75pFB2pr7VH4lANkcG4BtWL3BaSQtXkdwB9tO09ed39XMaiRog4553KXRPkzqJrwS97XxtYz4c27rdpaL36qNIhraJirZFg",
                "source": "Variety",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://variety.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Presumed Innocent' Review: Jake Gyllenhaal Thriller Is Exceptional"
            },
            {
                "link": "https://news.google.com/articles/CBMikQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9nZW1pbmktZGFpbHktaG9yb3Njb3BlLXRvZGF5LWp1bmUtMTAtMjAyNC1wcmVkaWN0cy1hLXByb2R1Y3RpdmUtbG92ZS1saWZlLTEwMTcxNzk1NTc2ODA2NS5odG1s0gGVAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL2dlbWluaS1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLWEtcHJvZHVjdGl2ZS1sb3ZlLWxpZmUtMTAxNzE3OTU1NzY4MDY1LWFtcC5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLXsB9DMWAUWe6pf8zkFyFCp0-b7DrGNFRhVW5r3FsnJITaIkxn8MyvYJAn5TMXwbyUyOGOo1JT1XlS6kisn8VL4wDIN3hDHCEJn23X-mllHIk9g",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Gemini Daily Horoscope Today, June 10, 2024 predicts a productive love life"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmluZGlld2lyZS5jb20vZmVhdHVyZXMvY3JhZnQvbmV0ZmxpeC1oaXQtbWFuLWdsZW4tcG93ZWxsLWhhaXItY29zdHVtZS1tYWtldXAtdHJhbnNmb3JtYXRpb25zLTEyMzUwMTM1OTYv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXFstPZ4KHa54ofzJZ28vmCGfr_5wmd6lbGc35Fou1WOhSR5xJpmeiYU2sGAw2s1NkwINeFMSBaQ5C9OqxwzcTzq4sox5UyPWxPgdCQhalZeNEeA",
                "source": "IndieWire",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.indiewire.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Netflix 'Hit Man': Glen Powell's Hair, Costume, Makeup Transformations"
            },
            {
                "link": "https://news.google.com/articles/CBMihgFodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2h1Z2htY2ludHlyZS8yMDI0LzA2LzA4L3RheWxvci1zd2lmdHMtMTk4OS10YXlsb3JzLXZlcnNpb24tYW5kLWxvdmVyLXJldHVybi10by10aGUtdG9wLTEwLXNpbXVsdGFuZW91c2x5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYeXShk-MpZ_DagT6AI5sclmCUS2atF-ZxU3L7QloxzYIPDBQqpXbfd17fB4mbG0mlZGc5efHZ6fUyAA_6cTqLOFpsS3txbyT4iL1tCHo_FW29DQ",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Taylor Swift's '1989 (Taylor's Version)' And 'Lover' Return To The Top 10 Simultaneously"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vd3d3Lm5ld3MxMC5jb20vbmV3cy9kaXNuZXlsYW5kLWVtcGxveWVlLWRpZXMtYWZ0ZXItZmFsbGluZy1vZmYtZ29sZi1jYXJ0LWF0LXRoZW1lLXBhcmsv0gFjaHR0cHM6Ly93d3cubmV3czEwLmNvbS9uZXdzL2Rpc25leWxhbmQtZW1wbG95ZWUtZGllcy1hZnRlci1mYWxsaW5nLW9mZi1nb2xmLWNhcnQtYXQtdGhlbWUtcGFyay9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8JLe6nITtXimTDmlKMFGL9L2NByw65Yk3tbV-P1F47sZw8zY6YRKp7ePgFPR2rCEMeNS6y562XqirBcByjv0pJpDnFUrloWSRg8_8liVGrVD5Mg",
                "source": "NEWS10 ABC",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.news10.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Disneyland employee dies after falling off golf cart at theme park"
            },
            {
                "link": "https://news.google.com/articles/CBMikQFodHRwczovL3d3dy5mcmVlcC5jb20vc3RvcnkvbmV3cy9sb2NhbC9taWNoaWdhbi9kZXRyb2l0LzIwMjQvMDYvMDgvZGV0cm9pdC1wb2xpY2UtY2hpZWYtcHJpZGUtY3JpbWUtbWljaGlnYW4tY2VudHJhbC1zdGF0aW9uLW9wZW5pbmcvNzQwMjg4NDcwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVXAaiAIeFrnrJdTnqOf6xGWCS_d5qoSD6Jn0aTKaw76gpSf18a7xq2a-KVlg7CFeA9e6vYAkAvScHg_xBf20XUM8nVGQGbRNbB7duD9_CWH6bxA",
                "source": "Detroit Free Press",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.freep.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Detroit police chief: Pride in city deters crime at Michigan Central Station grand opening"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOS9lbnRlcnRhaW5tZW50L3RoZS1kYXktYWZ0ZXItYWJjLW1vdmllLWNlYy9pbmRleC5odG1s0gFMaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNi8wOS9lbnRlcnRhaW5tZW50L3RoZS1kYXktYWZ0ZXItYWJjLW1vdmllLWNlYw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU1oG5lEPgKYGTfA6XRiGKyPd7oK4xh5bkGVrSezXp82gybQCHaM42-d_pgIES0s3hgSk95_WHq8CIuyarxckxZPl7NZ1OOBnuyeod3uCO-W_pug",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "This TV movie from the 1980s helped change the course of the Cold War. Here’s how ‘The Day After’ got made"
            },
            {
                "link": "https://news.google.com/articles/CBMikQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS90YXVydXMtZGFpbHktaG9yb3Njb3BlLXRvZGF5LWp1bmUtMTAtMjAyNC1wcmVkaWN0cy1hZHZlbnR1cm91cy1hY3Rpdml0aWVzLTEwMTcxNzk1NTc2MjUzNi5odG1s0gGVAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL3RhdXJ1cy1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLWFkdmVudHVyb3VzLWFjdGl2aXRpZXMtMTAxNzE3OTU1NzYyNTM2LWFtcC5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStL8QY_O9Dg0IB8DvJhdSMdYdEAUiUWIqpzrUjGK1NcIaWNj5DVHUdxdqeRH-eLViiVB79cANWgfJRw_hrCjTUkIcxNWVaMTArVNG36lSP4z9fVQ",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Taurus Daily Horoscope Today, June 10, 2024 predicts adventurous activities"
            },
            {
                "link": "https://news.google.com/articles/CBMiggFodHRwczovL3d3dy5jYWdlc2lkZXNlYXRzLmNvbS8yMDI0LzYvMTAvMjQxNzUwMTgvcnVtb3Itcm91bmR1cC1qdW5lLTEwLTIwMjQtcmljb2NoZXQtbGVhdmluZy13d2Utam9lLWhlbmRyeS1oeXBlLXBlbnRhLXVuaGFwcGluZXNz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT18MDIiUBp3CiJmOeF9x-W0__k4WVRNJlQ2IJx3B6-O-UVRjjzoZCXvRgL1pkRBdc0icKqE49tv-TQRaUO8tJFztn_6oIx0cFnTab2C06OIHQ6zg",
                "source": "Cageside Seats",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.cagesideseats.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Rumor Roundup: Ricochet leaving WWE, Joe Hendry hype, Penta unhappiness, more!"
            },
            {
                "link": "https://news.google.com/articles/CBMiigFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9zY29ycGlvLWRhaWx5LWhvcm9zY29wZS10b2RheS1qdW5lLTEwLTIwMjQtcHJlZGljdHMtYS1yb21hbnRpYy1kYXktMTAxNzE3OTU1ODA4NjY3Lmh0bWzSAY4BaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2FzdHJvbG9neS9ob3Jvc2NvcGUvc2NvcnBpby1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLWEtcm9tYW50aWMtZGF5LTEwMTcxNzk1NTgwODY2Ny1hbXAuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAoDDdeehFkXFS43jsKE1cgS4v-iw6WGYvHzvIPiCpI27eS5XT59T-uTqmiXQuQVNbuTMPXWaqQsjUPhDofLJWQt3Y0yx5PrHCblhtNggAEZAvQ",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scorpio Daily Horoscope Today, June 10, 2024 predicts a romantic day"
            },
            {
                "link": "https://news.google.com/articles/CBMikQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9sZW8tZGFpbHktaG9yb3Njb3BlLXRvZGF5LWp1bmUtMTAtMjAyNC1wcmVkaWN0cy1yZXNvbHV0aW9uLW9mLXBhc3QtaXNzdWVzLTEwMTcxNzk1NTc4MzIzNy5odG1s0gGVAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL2xlby1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLXJlc29sdXRpb24tb2YtcGFzdC1pc3N1ZXMtMTAxNzE3OTU1NzgzMjM3LWFtcC5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXVmk6h3Cf5IoKfXL5lDsxhWykVOKhGQ5vMqNLZUzwrVupyJpTxfvsNjEcRk6EQzErg6Jsib0a2kyfXD4xTHawK389-cYkKIfCuQxNEYjvi6n_qw",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Leo Daily Horoscope Today, June 10, 2024 predicts resolution of past issues"
            },
            {
                "link": "https://news.google.com/articles/CBMicmh0dHBzOi8vbm9kcS5jb20vbmV3cy9yZXN1bHRzLW9mLXNoYXluYS1iYXN6bGVyLXZzLWxvbGEtdmljZS1pbi1hbi11bmRlcmdyb3VuZC1tYXRjaC1hdC13d2Utbnh0LWJhdHRsZWdyb3VuZC0yMDI0L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTiUiKBtSgHrYOTHg-qA-r5cUb1KZ57xk9RSL2wIHMyMYo0xSP0B6Bnu3IjZg6EHGCjQFrBAwsumpHbK8hv4ogI_mYgu-0JuK0ERfzMRn_0Uirlxg",
                "source": "NoDQ.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://nodq.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Results of Shayna Baszler vs. Lola Vice in an Underground match at WWE NXT Battleground 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMie2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9lbnRlcnRhaW5tZW50L3R2LzIwMjQvMDYvMDkva2VsbHktY2xhcmtzb24tYW1lcmljYW4taWRvbC1rYXR5LXBlcnJ5LXJlcGxhY2VtZW50Lzc0MDM4OTQzMDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuxuOf33Kw6AXNlqj8LCR-2U-tCmuVItVP_Nj-ut9rzpBcHMJZJ7yQBYIhJagjx4PG-u_6MGxz7l2pdKKDG_m8JclPDFkN_mvloXmvm7XZgNdTYA",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kelly Clarkson says she's not replacing Katy Perry on 'American Idol'"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2RpZGR5LWhvd2FyZC11bml2ZXJzaXR5LWRlZ3JlZS1yZXNjaW5kZWQtNmQ4YTJkZjk1ZmFhMDBkMzYxNDlkMzRjNmQ0YzUxZTHSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPh2W6nFvPbr0AcBqvXUJF3Lsbp1fYpsojcp3E9ik3ZlCa2SaLp9goy9RpDcmtZqMQpgsvgeFvbKtnOyMjHTTmOqnAIEP7hm1zrawWmx-_E0UKA",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Howard University cuts ties with Sean 'Diddy' Combs after video of attack on Cassie"
            },
            {
                "link": "https://news.google.com/articles/CBMiiwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9saWJyYS1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLXNtYXJ0LWludmVzdG1lbnRzLTEwMTcxNzk1NTc5NzQ3OC5odG1s0gGPAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL2xpYnJhLWRhaWx5LWhvcm9zY29wZS10b2RheS1qdW5lLTEwLTIwMjQtcHJlZGljdHMtc21hcnQtaW52ZXN0bWVudHMtMTAxNzE3OTU1Nzk3NDc4LWFtcC5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSanYBaVMHdg_hG0n9dS6ar4CYNTqvZdOxEL28ohMo3_JImAiuRGzCWFWqBYIY5uErNlAjRkkqEZFt01m13gIYckrrNZuZA7xrxyGQ2LX0MkP8fcA",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Libra Daily Horoscope Today, June 10, 2024 predicts smart investments"
            },
            {
                "link": "https://news.google.com/articles/CBMiXmh0dHBzOi8vd3d3LnRtei5jb20vMjAyNC8wNi8wOS9tZWdhbi10aGVlLXN0YWxsaW9uLWNyeWluZy1jb25jZXJ0LW9uc3RhZ2UtZmxvcmlkYS1haS1zZXgtdGFwZS_SAV5odHRwczovL2FtcC50bXouY29tLzIwMjQvMDYvMDkvbWVnYW4tdGhlZS1zdGFsbGlvbi1jcnlpbmctY29uY2VydC1vbnN0YWdlLWZsb3JpZGEtYWktc2V4LXRhcGUv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGpUzzLQFIOuXCbzed7zdYVm7wkEGHfn3VaWMY0J91VKvudwUjpQjkiA697tALRLyKUWlFZR5nL2jaobasU1PPEh3UAb6yHoZQTE-JPaXI7KxvA",
                "source": "TMZ",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.tmz.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Megan Thee Stallion Breaks Down in Tears During Tampa Concert"
            },
            {
                "link": "https://news.google.com/articles/CBMijAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS92aXJnby1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLW5ldHdvcmtpbmctc3VjY2Vzcy0xMDE3MTc5NTU3OTAzNjUuaHRtbNIBkAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS92aXJnby1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLW5ldHdvcmtpbmctc3VjY2Vzcy0xMDE3MTc5NTU3OTAzNjUtYW1wLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnCswXITFjzRRPmaCyZwAJXuEulvR3bVQxITO6t0-Kcq7BQz5A3B1wLYwJhrBQIN7yd9S8VMvFP_mozNFga5y6rBsn1J3SubJ12fjkwyZH80fFZg",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Virgo Daily Horoscope Today, June 10, 2024 predicts networking success"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9lbnRlcnRhaW5tZW50L211c2ljLzIwMjQvMDYvMDcvcm9nZXItZGFsdHJleS1pbnRlcnZpZXcvNzQwMDUzNDcwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD96yKzQwB80CmVSgYWQcXRLi4ctxMuLKD6v4sm6CheqMA7FAUpUvaH0U2tLTBR1cISWhqVqqFi04YxudPdSwlUHaSkeAOdLKZRGlP56Kq_EY57A",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Roger Daltrey gives his blunt, honest opinions as he readies solo tour"
            },
            {
                "link": "https://news.google.com/articles/CBMijgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9jYXByaWNvcm4tZGFpbHktaG9yb3Njb3BlLXRvZGF5LWp1bmUtMTAtMjAyNC1wcmVkaWN0cy1yZXNwZWN0LWFuZC1jYXJlLTEwMTcxNzk1NTgyMjQ0OS5odG1s0gGSAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL2NhcHJpY29ybi1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVuZS0xMC0yMDI0LXByZWRpY3RzLXJlc3BlY3QtYW5kLWNhcmUtMTAxNzE3OTU1ODIyNDQ5LWFtcC5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRf-BqboxcerjKFMmAO-uCPxqO3uci7PGMxCK7DjBuZCW12zN4LA0uv9YcCFbTHUoiWFwj2usI0cHPGNbIIE_sFAaD2TFLaQcHDrRQ45YpaSsQy8Q",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Capricorn Daily Horoscope Today, June 10, 2024 predicts respect and care"
            },
            {
                "link": "https://news.google.com/articles/CBMifmh0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNi8wOS9lbnRlcnRhaW5tZW50L2FyaWFuYS1ncmFuZGVzLWV4LWh1c2JhbmQtZGFsdG9uLWdvbWV6LWdvZXMtaW5zdGFncmFtLW9mZmljaWFsLXdpdGgtbWFpa2EtbW9ucm9lL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRx7dVZZKLhlSXql8l1onJ4CH4uZ0we7kN_z2LgIcitpgQ1-NpBJW_jfJWouCeNwjkUqOKtE5cHmqKSmFFIRnRZH41To7JDpReBX8QiSOdttuY4g",
                "source": "Page Six",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://pagesix.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ariana Grande's ex-husband, Dalton Gomez, goes Instagram-official with Maika Monroe"
            },
            {
                "link": "https://news.google.com/articles/CBMiSmh0dHBzOi8vd3d3LnZvZ3VlLmluL2hvcm9zY29wZS9wcm9kdWN0L3Bpc2Nlcy1ob3Jvc2NvcGUtdG9kYXktanVuZS05LTIwMjQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJIGjZsPQzf5YQZ3-wuFwrlS7fBsU6ibCcBjJExFRYVVnyG786Bkho54kB4ZFIM5HL6pmJml93zEKmJF4smNcQc3ncotoxTnHurp_1w85lzj5mbA",
                "source": "VOGUE India",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.vogue.in&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Pisces Horoscope Today: June 9, 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3LnJpbmdzaWRlbmV3cy5jb20vMjAyNC8wNi8wOS9leC1hZXctc3Rhci1vZmZpY2lhbGx5LWFkZGVkLXRvLXd3ZS1yb3N0ZXIv0gFTaHR0cHM6Ly93d3cucmluZ3NpZGVuZXdzLmNvbS8yMDI0LzA2LzA5L2V4LWFldy1zdGFyLW9mZmljaWFsbHktYWRkZWQtdG8td3dlLXJvc3Rlci8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaVGXYcTLNw8gJb0zxcQue0eyK7Hh-O8dgV640jV-bvDZcUGj2K-QJjQa5BJYAOpYqVmZULSHbz9sMtcr6h91AdGq3Syt0EUsB3CD38v1yhCrskQ",
                "source": "Ringside News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.ringsidenews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ex-AEW Star Officially Added to WWE Roster"
            },
            {
                "link": "https://news.google.com/articles/CBMiP2h0dHBzOi8vd2R3bnQuY29tLzIwMjQvMDYvZmlyc3QtbG9vay1hdC1jb21tdW5pY29yZS1oYWxsLWVwY290L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_xeiBnkNjl3a7MqJyG85ULrDH-jFzMNr7lvTnI89kvrepT3IT39Rk_l_zarxAsWSPtWd9zE8DqxRvYm4P5K0mwTm82ve_rfDN88AK8WLCMmKkzw",
                "source": "WDW News Today",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://wdwnt.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "PHOTOS, VIDEO: Tour CommuniCore Hall and Mickey & Friends Meet and Greet at EPCOT"
            },
            {
                "link": "https://news.google.com/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jajc3cjFrbTVta2_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY2o3N3Ixa201bWtvLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyWV4UzfWMeeR2IohgBZAl85HszJ-qE5XCbbSMeLy6vycvaFCRHhwWkw_pbsaV0X5g-PCkbXoTmcQe6-1lE_Ei321dGqh7xFfagasWsGQSYVFdRw",
                "source": "BBC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Duke and Duchess of Westminster 'touched' by Chester wedding wishes"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3Lmh1ZmZwb3N0LmNvbS9lbnRyeS9tZWdoYW4tbWNjYWluLWplbm5pZmVyLWxvcGV6LWRlZXBseS11bnBsZWFzYW50LW9uLXRoZS12aWV3X25fNjY2NWZhMzhlNGIwZDg2YTA3YTI4ODcw0gF4aHR0cHM6Ly93d3cuaHVmZnBvc3QuY29tL2VudHJ5L21lZ2hhbi1tY2NhaW4tamVubmlmZXItbG9wZXotZGVlcGx5LXVucGxlYXNhbnQtb24tdGhlLXZpZXdfbl82NjY1ZmEzOGU0YjBkODZhMDdhMjg4NzAvYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOZL0-4cuB112UVr0AUpB0BT0c9FewoXyjWgOKHXwkpVd5OmLe7Of9P12Fy01Be9BWjAG-B6T_xbSrdGcFzwi1l1S_pIKBOsJt9h_R_4hUHmc-iQ",
                "source": "HuffPost",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.huffpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Meghan McCain Slams Jennifer Lopez For Being 'Deeply Unpleasant' On 'The View'"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTM1MTE4NjkvTmV3LVlvcmstY29va2llLWluZmx1ZW5jZXItSW5zdGFncmFtLWJyaWRlLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQM9kkDYAl8V5gOGKQVE2aabNd9FfRW93WnMrnKlo-2q80LE0AaTIHYXEnAIF_iMOz7CEfLqxvSsaxBcAchY-B9UKo-UgGD96C6y4XC-fRbnErig",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New York cookie shop owner shuts down 'influencer'"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vdmFyaWV0eS5jb20vMjAyNC90di9uZXdzL25pY2hvbGFzLWdhbGl0emluZS1sZW8td29vZGFsbC1zZXgtc2NlbmVzLWF1ZGl0aW9ucy0xMjM2MDIxMTE1L9IBZGh0dHBzOi8vdmFyaWV0eS5jb20vMjAyNC90di9uZXdzL25pY2hvbGFzLWdhbGl0emluZS1sZW8td29vZGFsbC1zZXgtc2NlbmVzLWF1ZGl0aW9ucy0xMjM2MDIxMTE1L2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7BtRHueScl-kCQbbOQxi-6_gkW9azyhfDKgxgA8-v2PBJ8kxS9oGJRbFV77hNa_6QLJPsytYXPxFfe8GtoyYpgDO0vk3w1a91Sz6fF_bAwbvRA",
                "source": "Variety",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://variety.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Nicholas Galitzine and Leo Woodall on Auditioning for the Same Roles, Intimidating Co-Stars and Family Members Watching Their Sex Scenes"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3Lmdvb2Rtb3JuaW5nYW1lcmljYS5jb20vY3VsdHVyZS9zdG9yeS9wZW5uLWJhZGdsZXktYXJpYW5hLWdyYW5kZS1ib3ktbWluZS1yb2xlLWhleS0xMTA5NjcyOTLSAWtodHRwczovL3d3dy5nb29kbW9ybmluZ2FtZXJpY2EuY29tL2FtcC9jdWx0dXJlL3N0b3J5L3Blbm4tYmFkZ2xleS1hcmlhbmEtZ3JhbmRlLWJveS1taW5lLXJvbGUtaGV5LTExMDk2NzI5Mg?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiptFInCFhq-qYAWhGeyswzQogDApmAjSDcvL2da7qkex3ApX4tEkiXNjC52wmKuxyEQZ1MAHWJV5khly-JrB2CVYHFtC_ZKoGr4iX5mphK8MdKg",
                "source": "Good Morning America",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.goodmorningamerica.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Penn Badgley thanks Ariana Grande for 'the boy is mine' role"
            },
            {
                "link": "https://news.google.com/articles/CBMib2h0dHBzOi8vd3d3LmVvbmxpbmUuY29tL25ld3MvMTQwMzI5NC9iYWQtYnVubnktYW5kLWRhbmNlci1nZXQtc3R1Y2staW4tbmF1Z2h0eS13YXJkcm9iZS1tYWxmdW5jdGlvbi1kdXJpbmctc2hvd9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfOnYZt1P78TTH9Da_Xy3i7g95WWem6GDpJ5f7K1cn0NZV16SnPgoC44o-_uAdr1VrvqfmjqHr5-XPDbHcDXDX2JStAJ8mJ1jFYRQKl2aGlgZidQ",
                "source": "E! NEWS",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.eonline.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bad Bunny and Dancer Get Stuck in Naughty Wardrobe Malfunction During Show - E! Online"
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vdHZsaW5lLmNvbS9yYXRpbmdzL2RheXRpbWUtZW1teXMtYmlnZ2VzdC1hdWRpZW5jZS1zaW5jZS0yMDIwLWNicy12aWV3ZXJzLTEyMzUyNTU3OTYv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdvm05WMXfWTy2HK48AqDa_rSBFjXD5QL6JOJch55uB1osqJN3cgdHQAcvuh4pHPdsq92FirFfGsn_m-eWLvAM",
                "source": "TVLine",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://tvline.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Daytime Emmys Audience Grows 39 Percent, Hits 4-Year High"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyNC8wNi8wOS9ueC1zMS00OTk2MzI0L2Jvd2VuLXlhbmctdGluYS1mZXktd2lsZC1jYXJkLXBvZGNhc3Qtc25sLWxhcy1jdWx0dXJpc3Rhc9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9c9OqLwFMAe6-AAAZ6MWRK9-hFgVIFOuE8dojS5QiA6a6TOiy-l3da7wZ4-GNGJrjQPgfnb02UVhXSzLELgB-G7tKs745H_1-iA0AxyAjoMdi7Q",
                "source": "NPR",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.npr.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bowen Yang invited Tina Fey onto his podcast. He's still dwelling on what she said"
            },
            {
                "link": "https://news.google.com/articles/CBMieWh0dHBzOi8vd3d3LnNhbG9uLmNvbS8yMDI0LzA2LzA4L3RoZS1hY29seXRlLWJhaXQtYW5kLXN3aXRjaC1hbmdlcmVkLXNvbWUtYnV0LW1hbnktbW9yZS1rZXB0LXdhdGNoaW5nLXRoYXRzLXdoeS1pdC13b3Jrcy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFYg9hRgLuAEAnpxuIyQytRNIvcs24ZvuwkL89H4_GxS3DCdXdlQ6o218V9h1Cer6m6KNx-tOZV1b8-5Gm7Mf4Kir2FFUFxOYbvRs6-PIykl_M0Q",
                "source": "Salon",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.salon.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "\"The Acolyte\" bait and switch angered some, but many more kept watching. That's why it works"
            },
            {
                "link": "https://news.google.com/articles/CBMibmh0dHBzOi8vd3d3LnRoZW5ld3MuY29tLnBrL2xhdGVzdC8xMTk4ODU3LWtlbHNlYS1iYWxsZXJpbmktaXMtZXhjaXRlZC10by1qb2luLXRoZS12b2ljZS1hcy1uZXctc2Vhc29uLTI3LWNvYWNo0gFraHR0cHM6Ly93d3cudGhlbmV3cy5jb20ucGsvYW1wLzExOTg4NTcta2Vsc2VhLWJhbGxlcmluaS1pcy1leGNpdGVkLXRvLWpvaW4tdGhlLXZvaWNlLWFzLW5ldy1zZWFzb24tMjctY29hY2g?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHW3hPywRXxhA7py0ya1DvVUk8n3wmoYnCay4n32vFpzjCm0DxlUzAJovrcbee-kH7-P2dVDOgQ8g2PopgDq8OCzdYftwqVtdfpFPedScshnLpIQ",
                "source": "The News International",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.thenews.com.pk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kelsea Ballerini is excited to Join The Voice as New Season 27 Coach"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vYXdmdWxhbm5vdW5jaW5nLmNvbS9uYmEvYXVzdGluLXJpdmVycy1jYWxscy1jbGlwcGVkLWNhc3RpbmctcmlkaWN1bG91cy5odG1s0gFWaHR0cDovL2FtcC5hd2Z1bGFubm91bmNpbmcuY29tL25iYS9hdXN0aW4tcml2ZXJzLWNhbGxzLWNsaXBwZWQtY2FzdGluZy1yaWRpY3Vsb3VzLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpKYnfKe3X06GIkhlVXYRn4QdXdnuLzhQ-7tXh57eozahi1aifeBdX8nyRYM3687X1kU0m4AW3jb4rdnaJfllIN20J50drhtyX3sp-KfwLwTT2Bw",
                "source": "Awful Announcing",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://awfulannouncing.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Austin Rivers calls ‘Clipped’ casting ‘ridiculous’: ‘Who the hell is that guy?’"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3Lmdlby50di9sYXRlc3QvNTQ4NTE4LXJveWFsLWV4cGVydC1leHByZXNzZXMtY29uY2VybnMtYWJvdXQta2F0ZS1taWRkbGV0b25zLWhlYWx0aNIBWmh0dHBzOi8vd3d3Lmdlby50di9hbXAvNTQ4NTE4LXJveWFsLWV4cGVydC1leHByZXNzZXMtY29uY2VybnMtYWJvdXQta2F0ZS1taWRkbGV0b25zLWhlYWx0aA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNXtF-G_mOWthkJO6SQyRVdfxxmzUoxtXwwvB_XROMSpmBFblV7_8lKni6c6TJ4hXroPRvFEhDMS1iSvi5O4xWCNygSMH8heaFEqCUGwVIiMLZAA",
                "source": "Geo News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.geo.tv&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Royal expert expresses concerns about Kate Middletons health"
            },
            {
                "link": "https://news.google.com/articles/CBMiR2h0dHBzOi8vd3d3LnZ1bHR1cmUuY29tL2FydGljbGUvZG9jdG9yLXdoby1maXJzdC1nYXkta2lzcy02MC15ZWFycy5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3UdeSI6-Pzny7D9BFTlZRkGxHozOI1pNMTAOJUwDn99GkbRvDb_8aUnRfk9D70TDE8OE4kA66u5mgvakg5H8dRhGWKPnXO64k5L7_GQeqi3SJ9w",
                "source": "Vulture",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.vulture.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Doctor Who Has His First Gay Kiss Ever After 60 Years"
            },
            {
                "link": "https://news.google.com/articles/CBMikgFodHRwczovL3d3dy51c2F0b2RheS5jb20vc3RvcnkvZW50ZXJ0YWlubWVudC9jZWxlYnJpdGllcy8yMDI0LzA2LzA5L2xpdHRsZS1ob3VzZS1vbi10aGUtcHJhaXJpZS1taWNoYWVsLWxhbmRvbi1jYW5jZXItZGF1Z2h0ZXItbGVzbGllLzc0MDM1Mzg2MDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPFCDz8-2exVVxii75WMet5xBvlFHgpYUf99VLLlBqvFcjzJl0xF2jDXtUgr5fVg8qQjOrHHsm1n3KpXWtkI9w3r-H8UTXs3yDqzGtynDh4sO0cg",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Little House' star Michael Landon resisted doctors before cancer"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvZ3JpZmZpbi1kdW5uZS1vbi1oaXMtbWVtb2lyLXRoZS1mcmlkYXktYWZ0ZXJub29uLWNsdWIv0gFXaHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL25ld3MvZ3JpZmZpbi1kdW5uZS1vbi1oaXMtbWVtb2lyLXRoZS1mcmlkYXktYWZ0ZXJub29uLWNsdWIv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToLGp-0x3NBDg4U7GzkdxEWx1f-hu78gzR2lu7dOQwdblxxDG3kG2ovqrjCOcGvpSuPB0ZDcsQRA7R92J7PLgHuOOZYpP6UOtDIrOgDHDBuR8PBg",
                "source": "CBS News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "\"The Friday Afternoon Club\": Griffin Dunne on a literary family's legacy"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3LmJ1enpmZWVkLmNvbS9teWNoYWx0aG9tcHNvbi9zdXJpLWNydWlzZS10b20tY3J1aXNlLWthdGllLWhvbG1lcy1jb2xsZWdl0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyVTfz9mB8xDzGFOAFUv9DXJI8XLvGKcY3YuaaT6w4T0vLlPgv6nWa4tkYmY_2_ENBort2nvA4wWJ_3J8hVf8vdZ49k22AB8E0GWN3QigNlSVuuA",
                "source": "BuzzFeed",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.buzzfeed.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Suri Cruise Seemingly Reveals She's Headed To College"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNi8wOS9zdHlsZS9iaWFuY2EtY2Vuc29yaS1jb3ZlcnMtdXAtaW4tZmxvd3ktZHJlc3MtYXQtYWlycG9ydC13aXRoLWthbnllLXdlc3Qv0gFsaHR0cHM6Ly9wYWdlc2l4LmNvbS8yMDI0LzA2LzA5L3N0eWxlL2JpYW5jYS1jZW5zb3JpLWNvdmVycy11cC1pbi1mbG93eS1kcmVzcy1hdC1haXJwb3J0LXdpdGgta2FueWUtd2VzdC9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBL10JkT5PssJYBh1Gsj4b777Hylg8R-rlzidIsnahCwTsQ9pOjprevr-lz0GGD8SeedpbZFqGGDA3ehmqZayL1-oNbIiIogmsPfQq4tmhfFHxAg",
                "source": "Page Six",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://pagesix.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bianca Censori covers up in flowy dress while arriving at airport in Japan with Kanye West"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vd3d3LmZveG5ld3MuY29tL3RlY2gvcmVhbC1zdG9yeS1iZWhpbmQtY3JlZXB5LWhlYWQtc3dhcHBpbmctb3BlcmF0aW9ucy1yb2JvdGljLXN1cmdlb25z0gFjaHR0cHM6Ly93d3cuZm94bmV3cy5jb20vdGVjaC9yZWFsLXN0b3J5LWJlaGluZC1jcmVlcHktaGVhZC1zd2FwcGluZy1vcGVyYXRpb25zLXJvYm90aWMtc3VyZ2VvbnMuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJPJoInVWmZe9bbxk1h0DnPdfVkaxwdEig6VSrXRWBHcCJDFh9nq2b-eZ742uzu0vsmvDRE6HYzmEHRHs4fK6wnKV91r5Q5gnm7Mt8PNswuNsDmw",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The real story behind the creepy head-swapping operations by robotic surgeons"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vb2ttYWdhemluZS5jb20vcC9kb25hbGQtdHJ1bXAtd29yc3QtcHVibGljLXNwZWFrZXJzLWV2ZXItbG9yZC1vZi10aGUtcmluZ3MtaWFuLW1ja2VsbGVuL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgCCSKycg7dGchtwk73MV5HenaiqhD-DvqqSY_3L_7k5vkFB6ORgOc2Ng3_JjIQzOPimHJD5vuwpyesCyetg0CHC5vLHUTuoGThQjLhvDS4yB_w",
                "source": "OK!",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://okmagazine.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Donald Trump Is One of the 'Worst Public Speakers There Has Ever Been,' 'Lord Of The Rings' Star Ian McKellen Claims"
            },
            {
                "link": "https://news.google.com/articles/CBMiVGh0dHBzOi8vd3d3LnlhaG9vLmNvbS9lbnRlcnRhaW5tZW50L3RpbS1tY2dyYXdzLWRhdWdodGVyLWF1ZHJleS1wb3Nlcy0yMDM1MzA5MzMuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNhycvAhA_8nNWaN4AZa3Llws4evIW7LpNPXqWuzXuFJ4PI2bTZPJaOPWpr5ngVniJjvSH_jd0tpyiFmSbn25JBUMHHmnExwbcTC6PJm6fKwV1aA",
                "source": "Yahoo Entertainment",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tim McGraw's Daughter Audrey Poses for Sultry Photos in Risqué Outfit"
            },
            {
                "link": "https://news.google.com/articles/CBMieWh0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNi8wOS9lbnRlcnRhaW5tZW50L3NlZS12YWxlcmllLWJlcnRpbmVsbGktYW5kLWJveWZyaWVuZC1taWtlLWdvb2Rub3VnaC1hdHRlbXB0LXRvLWJlLWNvb2wta2lkcy_SAX1odHRwczovL3BhZ2VzaXguY29tLzIwMjQvMDYvMDkvZW50ZXJ0YWlubWVudC9zZWUtdmFsZXJpZS1iZXJ0aW5lbGxpLWFuZC1ib3lmcmllbmQtbWlrZS1nb29kbm91Z2gtYXR0ZW1wdC10by1iZS1jb29sLWtpZHMvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbo0k4TlBLGRAf0wd_5bULWV0Xpn1Ir5YMFG4QRNFAczAlTWD6aVHwhrr7wljHjQLW4CylKft2Gr8HLodcbYvBUggqpEdN0EDxIhO4vxizj2sCZA",
                "source": "Page Six",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://pagesix.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Valerie Bertinelli, 63, and boyfriend Mike Goodnough, 53, attempt to be 'cool kids' with transformation video"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LmZveG5ld3MuY29tL2VudGVydGFpbm1lbnQvZnVsbC1ob3VzZS1zdGFyLWRhdmUtY291bGllci1hZG1pdHMtdW5jbGUtam9leXMtbmFtZS1zdG9uZXItam9rZdIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLcDwUuUg05M6dizbyirpKqmu6QbFWtpRBeUAGwoGTIvi4jBpKPpcGqGrJEphbeqbnJ1gEABr3yGw8mGGyd053F86Wry2C97SuUQTh8piKHoCQxg",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Full House' star Dave Coulier admits Uncle Joey's name was a stoner joke"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9saWZlL2hvcm9zY29wZXMvMjAyNC8wNi8wOS9ob3Jvc2NvcGVzLXRvZGF5Lzc0MDM0OTE3MDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7vLvo2QCi16IBJ_ouMuYvCDtHMiXeGD0jxXO_eJvP_uGzKEj5zsjm3yI5uZ3b28memUL9LYACowj8AGfb_4XnHGPO4rEfyt6eikwYYNoFZ87KCQ",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Horoscopes Today, June 9, 2024"
            }
        ],
        "Health": [
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LndjdmIuY29tL2FydGljbGUvbGlmZXN0eWxlLWNoYW5nZXMtaW1wcm92ZS1hbHpoZWltZXJzLXN5bXB0b21zLXN0dWR5LzYxMDI1MjE00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOvc6H2hv7u3pG3Uu9n58MBfDmuA0-aELfgTpkN-lulUbfsmFfhaMhiiXjUsenUkPY4PDwmlIHmutwPwHsV4AZ",
                "source": "WCVB Boston",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.wcvb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'A study to give us hope:' Lifestyle changes improve Alzheimer's symptoms for some"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vYnJpbmdtZXRoZW5ld3MuY29tL21pbm5lc290YS1uZXdzL21pbm5lc290YS1yZWNvcmRzLWZpcnN0LWNhc2Utb2YtaDVuMS1iaXJkLWZsdS1pbi1kYWlyeS1oZXJk0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfXiOvkyY_7Iwt9ELONXjuZZNP0qaJ0ZISsRYT9gd50WxgmiRI7I5YxDgpjxxhh-hMJGDlZnvkw4Pwt1uJmLzR33m4NBPTW7wmXRTdgBWKJ6wtqw",
                "source": "Bring Me The News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://bringmethenews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Minnesota records first case of H5N1 bird flu in dairy herd"
            },
            {
                "link": "https://news.google.com/articles/CBMiVGh0dHBzOi8vd3d3LnlhaG9vLmNvbS9saWZlc3R5bGUvZmluYXN0ZXJpZGUteW91bmdlci1tZW4tc29hcnMtZG9jdG9ycy0xMzAwMDAxNDYuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzFrPC7sOOFNNHOY2QCtNz8AkrxxvqgyW0e5f6PiHMQi-VPVJHSa-t9tR7kdE1hPi1UA3HqbPc6eWo8gjFAgDOs28pxlBcnucQx1t3FIlU--zGPQ",
                "source": "Yahoo Life",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "As finasteride use by younger men soars, some doctors caution about rare side effects"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS93YXJuaW5nLXBvcHVsYXItc3VnYXItZnJlZS1zd2VldGVuZXItbGlua2VkLXRvLWhlYXJ0LWF0dGFja3MtYW5kLXN0cm9rZXMv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDT12PXmJEBtrgZ1e68lfRIJ0pW-YvfNdV1ATlTRT_XoGvsWXnDD1d-lLmiihOq1acSjBGfDjAu1ScV2i6YhmneocJsH_fDqNGX9B6YWUMtMiWXQ",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Warning: Popular Sugar-Free Sweetener Linked to Heart Attacks and Strokes"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS90ZWNobm9sb2d5LzIwMjQvMDYvMDkvaG9tZS1oZWFsdGgtdGVzdHMtZG9jdG9ycy1mZGEv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ni2_qKWjiEmurioKSkTOWiAxTqmFnfIHxGQMBtPSgjx0YRozu1yx0saslO0XsblmUV4sX0fni8jc8Hur7wERigLyxxAs5F9qiWImOJLawIe59g",
                "source": "The Washington Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.washingtonpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Doctors couldn’t help, so they turned to unregulated home health tests"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3LmtldHYuY29tL2FydGljbGUvYmFjdGVyaWFsLWluZmVjdGlvbi1jbG9zZXMtbmVicmFza2EtaHVtYW5lLXNvY2lldHkvNjEwNTAyNznSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRM4e10WUD2ySFQh1IMU5nhwcaTgyOpGiC0xOQc9st4aQnFfcdOInNJBo61INYTJxw",
                "source": "KETV Omaha",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.ketv.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Nebraska Humane Society on emergency-only schedule due to potential bacterial infection"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzL2hlYWx0aC8yMDI0LzA2LzA4L25ldy1jb3ZpZC12YXJpYW50LWtwLTMvNzQwMjg4MDcwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjBIq0TixZ4Z6d5VgcmQfXMmleXCy1EfidOnGo8tiqxdwsf8J5JEn9fK2JSmeqvZD0QB1KiIEZakB6sCN2zX9iZYQrP5GFmcc5-IypeMr5MMBbvg",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New COVID variant KP.3 is on the rise: Here's what to know"
            },
            {
                "link": "https://news.google.com/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jazc3azgwbmx3cm_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY2s3N2s4MG5sd3JvLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0sspr8RNpVhzGZmuisGqIOw_8sFoIQmxGszED_G7dTNZEBtWgmIbpVhUnHeS5akcaJ16CbOoj3iu_CssOi4avaNDUyT8DYdObPXFSG-BU4r-B3Q",
                "source": "BBC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Prostate cancer: Glowing dye used to help find invisible cells"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vdGhlc2hhZGVyb29tLmNvbS9maXJzdC1jYXNlLW9mLXRyYW5zbWl0dGVkLWZ1bmdhbC1pbmZlY3Rpb24tcmVwb3J0ZWQtaW4tdGhlLXUtcy_SAVxodHRwczovL3RoZXNoYWRlcm9vbS5jb20vZmlyc3QtY2FzZS1vZi10cmFuc21pdHRlZC1mdW5nYWwtaW5mZWN0aW9uLXJlcG9ydGVkLWluLXRoZS11LXMvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdTW1kypW6-WcVfhQcuQIFj9IEMt6nuZXbPlh0jDGzYPeZVBlto9ysTh6ZNaWtdXKKNmG2jFeXGzzEJbbwzd5HiXAx0lnq8fTmYaI7L4ADXuyEpQ",
                "source": "The Shade Room",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://theshaderoom.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Sexually Transmitted Fungal Infection: First Case Reported U.S."
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L2xpZmVzdHlsZS9tYW4tbG9zZXMtNDUtcG91bmRzLWluLTMtbW9udGhzLXRoYW5rcy10by1uZXctc3VyZ2VyeS1vcHRpb24v0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcvte2YX7W8miwWIA1joqiB7dRayN7aiOhm7vQvXx-mNRAEVM7rvu1dtEnboJAKA5l1D4udYDYeDsRo6r9R15TnWst54f6dGa5NujPHoZE-Ea3GA",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Man loses 45 pounds in 3 months thanks to new surgery option"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vd3d3Lndpb25ld3MuY29tL3RyZW5kaW5nL21hbnMtZm9yY2VmdWwtc25lZXplLWV4cGxvZGVzLWNvbG9uLW91dC1vZi1ib2R5LW9uLWJyZWFrZmFzdC10YWJsZS03MzAxNjDSAW5odHRwczovL3d3dy53aW9uZXdzLmNvbS90cmVuZGluZy9tYW5zLWZvcmNlZnVsLXNuZWV6ZS1leHBsb2Rlcy1jb2xvbi1vdXQtb2YtYm9keS1vbi1icmVha2Zhc3QtdGFibGUtNzMwMTYwL2FtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjy1dlCo51csX0sioKjjn5wnUuR2MtqY05yylPdJWIe8z-U1LBNU4JZtJPLRds5fnwj3ytMIxNVpTG9keDfFO3-iCE_Na99DeoVZk2EDVDzW9YQ",
                "source": "WION",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.wionews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Man`s `forceful` sneeze explodes colon out of body while on breakfast table"
            },
            {
                "link": "https://news.google.com/articles/CBMiqwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vbGlmZXN0eWxlL2hlYWx0aC9zb2RpdW0taW50YWtlLWFuZC1lY3plbWEtcmlzay1lYXRpbmctdG9vLW11Y2gtc2FsdC1jb3VsZC1yYWlzZS1jaGFuY2VzLW9mLXNraW4taW5mbGFtbWF0aW9uLXNheXMtc3R1ZHktMTAxNzE3OTQ0MjUzMDQ3Lmh0bWzSAa8BaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2xpZmVzdHlsZS9oZWFsdGgvc29kaXVtLWludGFrZS1hbmQtZWN6ZW1hLXJpc2stZWF0aW5nLXRvby1tdWNoLXNhbHQtY291bGQtcmFpc2UtY2hhbmNlcy1vZi1za2luLWluZmxhbW1hdGlvbi1zYXlzLXN0dWR5LTEwMTcxNzk0NDI1MzA0Ny1hbXAuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDH18qddFSX3E8mZ2DqqdFDHR5BI-Bh-7yEfM7IwTXSnxrxyestAi4FsWPRRCVyLgdgFKWdrNnsrv8RtQIsi9c6H3mecNGTVMFML15S0MKd14elg",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Sodium intake and eczema risk: Eating too much salt could raise chances of skin inflammation, says study"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3LmZveG5ld3MuY29tL2hlYWx0aC9hc2stZG9jdG9yLWhvdy1wcmV2ZW50LXNjYXJyaW5nLWJ1Zy1iaXRlcy1wb2lzb24taXZ50gFXaHR0cHM6Ly93d3cuZm94bmV3cy5jb20vaGVhbHRoL2Fzay1kb2N0b3ItaG93LXByZXZlbnQtc2NhcnJpbmctYnVnLWJpdGVzLXBvaXNvbi1pdnkuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOTUzA8ZQ4hkgKx8yYpsSGKRvxhr6MEi_TOIiM0cxppVJm-PRM3jAd1etKKBUZ8WD6xjVCOpWUWKWzoaTnHnGUYo_xHeo8NpECmqSNNIBHJney5g",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ask a doctor: ‘How can I prevent scarring from bug bites and poison ivy?’"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL2hlYWx0aC9oZWFsdGgtbmV3cy9ibWktZmxhd3MtYm9keS1yb3VuZG5lc3MtaW5kZXgtYmV0dGVyLXJjbmExNTU4OTjSAStodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC9yY25hMTU1ODk4?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaipGP8_5HRX-NFNiBQ2rvEemHkxmbMFvaBY00ccVsYqb_Fg56M_zjhxnF3Wu27xmnjq8XYu5JGDkfa00nSpMpSO03nip5qNoXFD4avnUkIWboKg",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "BMI has its flaws. Is the ‘body roundness index’ any better?"
            },
            {
                "link": "https://news.google.com/articles/CBMijQFodHRwczovL3d3dy55YWhvby5jb20vbGlmZXN0eWxlL2VhdC1ibHVlYmVycmllcy1hZG9wdC1hLW1lZGl0ZXJyYW5lYW4tZGlldC10aGluZ3MtdG8tZG8tdGhpcy13ZWVrLWZvci15b3VyLWhlYWx0aC1hbmQtd2VsbG5lc3MtMDkwMTAwODMwLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfqZlKv-s7CiDqFIv9auee1fFASLt2e1oVZma6ujtuz4hzBkU64W5uAE1yFdMPCaH--tftOPlq6PeBGpwKY3Nq_7dcKvUkBS8VZnERGOaifclIw",
                "source": "Yahoo Life",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Eat blueberries, adopt a Mediterranean diet. Things to do this week for your health and wellness."
            },
            {
                "link": "https://news.google.com/articles/CBMiNmh0dHBzOi8vd3d3LmJ1enpmZWVkLmNvbS9hbmlrYW5heWFrL3NpZ25zLWxpdmVyLWRhbWFnZdIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3zFMKv2sFyAfW8jK5I11rwEX3sSbVz08AbLIWWULMtCCEoaX9QA8b8x_OsDaEGOLouSwF7wKqOwrchgPRVh2C_TY-pWnAVNb86pdhtliHj7vVnw",
                "source": "BuzzFeed",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.buzzfeed.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "These Are The 5 Biggest Early Warning Signs Of Liver Damage"
            },
            {
                "link": "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LnVuaWxhZC5jb20vbmV3cy9oZWFsdGgvdGV4YXMtcmFuY2hlci1ob3NwaXRhbGlzZWQtZGlzZWFzZS1lYXRpbmctZGVhZC1sYW1iLTI2MDYyNC0yMDI0MDYwONIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsoxkP88skDiesJCEW6Uj6vUVKxmS_xBH0bx6sOU2khMnMMDYna02IICVw6_b0pF2zDlz0iDbTAIICuIyTL9nGjfWr7cg2FCDpwO-8IDHOGVXx3Q",
                "source": "UNILAD",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.unilad.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Man catches terrifying disease 'from Biblical times' after eating contaminated lamb"
            },
            {
                "link": "https://news.google.com/articles/CBMieGh0dHBzOi8vd3d3LnBzeXBvc3Qub3JnL25ldy1zdHVkeS1jbGFpbXMtYW50aWRlcHJlc3NhbnQtd2l0aGRyYXdhbC1pcy1sZXNzLWNvbW1vbi10aGFuLXRob3VnaHQtYnV0LXRoZXJlcy1hLWJpZy1wcm9ibGVtL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrL8_pPnj-n7-PVa4ohFXpB2eh4vvIUEKhQIqSbwN6QkGSsebUY8LzMaVCQBtZyCqEVuCkJYDAVmGjjI9Gh_UjfHy-5UsMKBRdojmrw7g71LgCfg",
                "source": "PsyPost",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.psypost.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New study claims antidepressant withdrawal is less common than thought. But there's a big problem"
            },
            {
                "link": "https://news.google.com/articles/CBMieGh0dHBzOi8vd3d3LnByZXZlbnRpb24uY29tL2hlYWx0aC9tZW1vcnkvYTYxMDQwNzU4L3BvbWVncmFuYXRlcy1tYXktaW1wcm92ZS1tZW1vcnktbG9zcy10cmVhdC1hbHpoZWltZXItcy1kaXNlYXNlLXN0dWR5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCjcNU5eFwqwGkfYGlzc65Gc2TdBrVQ1YhmErBL6EcBo_6TqQRTNk1_GJzJCoYV27znR1yuxc9Tg51HCmxz7NE4Tn5LO_MDCZCrb2z4tfSu-87qA",
                "source": "Prevention Magazine",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.prevention.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Study: Pomegranates Improve Memory and Help Treat Alzheimer's"
            },
            {
                "link": "https://news.google.com/articles/CBMieGh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9tYXlvLWNsaW5pYy1zdHVkeS1yZXZlYWxzLXN0YXJ0bGluZy1jb25uZWN0aW9uLWJldHdlZW4tZW5lcmd5LWRyaW5rcy1hbmQtc3VkZGVuLWNhcmRpYWMtYXJyZXN0L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJpn8OR1rOWn9xn0SrRalnJv1_b9B75m4RCdXz4cr3Iton7HpNGaOkic06cPokW6UR0foJ1awbMxj2hwENZW7MLM2KY3oLLMzHlXEdcZ3LBtYzLQ",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mayo Clinic Study Reveals Startling Connection Between Energy Drinks and Sudden Cardiac Arrest"
            },
            {
                "link": "https://news.google.com/articles/CBMiR2h0dHBzOi8vd3d3LnlhaG9vLmNvbS9uZXdzL2NvbW1vbi1kaWV0LW1heS1saW5rZWQtcmlzaW5nLTE0MDAwMDg0My5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4Y9QUCYp4As7XpaM6PZXffdEfUBIj2hsGJ9qG7_QoPmKPQPEtRi2Vtgl5y5xo4ZFg8R6wTCicYPmoIV6YiTnG8T34WG_vFfp7hTePmLOdxEtcpQ",
                "source": "Yahoo! Voices",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Common Diet May Be Linked to Rising Cancer Rates in Young People"
            },
            {
                "link": "https://news.google.com/articles/CBMiSWh0dHBzOi8vd3d3Lm1lZGljYWxuZXdzdG9kYXkuY29tL2FydGljbGVzL2Nhbi1zdGF0aW5zLWhlbHAtcHJldmVudC1jYW5jZXLSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTfQF0syJnmP-AZ-BAGZ9CC12Vihz738fj0_zpUAUlpxjE54pS1EbzmCO33Sn7oDTmchbKjE02Tlg2FwcY4QbOSJgeLRKutOpzXZ6LlgXAEe5CDQ",
                "source": "Medical News Today",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.medicalnewstoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Statins may help prevent some forms of cancer, study finds"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vd3d3LnRlbGVncmFwaGhlcmFsZC5jb20vbmV3cy90cmktc3RhdGUvYXJ0aWNsZV83ZDQyODhkOC0yMDliLTExZWYtYjkyYy03NzJiYjYwYzk3Y2UuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJZHWa1NZRLVy2yBH6NV2VjWtViXkORq8E2M3T-BxYdtw1QrZIK40SvpfEb-O3A-2-w1kuZ33RFvUTFk1Qt-JSxeuWTsBsMVtIrrHYbYbzh8wZAA",
                "source": "telegraphherald.com",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.telegraphherald.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Mountain of pebbles': Experts say Iowa's high cancer rates likely result from numerous factors"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L2xpZmVzdHlsZS9ob3ctanVzdC1vbmUtaGlnaC1pbnRlbnNpdHktd29ya291dC1jYW4tbGVhZC10by13ZWlnaHQtZ2Fpbi_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYh-c-9SQ9rv0ygeNssvo-Zbw-x7rTkoHWfE8IyAMoyrlEimMEc1YC6XqBvFux5ORbHxV42YV2ooDFAtMi0XOpj-LUJ9_jWftwkez3ptRL10IH1A",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How just one high-intensity workout can lead to weight gain: study"
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvZ3JybHNjaWVudGlzdC8yMDI0LzA2LzA5L3NpbXBseS1sb29raW5nLWF0LXRoZS1uYXR1cmFsLXdvcmxkLWNhbi1pbXByb3ZlLXdlbGwtYmVpbmcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2_DxsaVy6JuGFPjo5HNQOTFfNNUKT3bZaeVOs4k6zNVNnQKgA9ilIbPBivwrmM_7XqK82ZO2e6mw81MP9SAWKTgDPTYbnDXB6t7Uo_YrbwIP4Lg",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Simply Looking At The Natural World Can Improve Well-Being"
            },
            {
                "link": "https://news.google.com/articles/CBMiS2h0dHBzOi8vd3d3LmluZHkxMDAuY29tL3NjaWVuY2UtdGVjaC9iYW5qYXUtdHJpYmUtc2VhLW5vbWFkLWdlbmUtMjY2ODQ4NTcyMNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ga0b6Pjj3PMfvmlUEQU39STASAlUAzg2lxqcTn_GiPc-AMYTwNHzEGbvqN8SgLVA9oydAifVGpFN3A6R-dQjJFhKgHVCrpcJpK-tCC2PtMc8EA",
                "source": "indy100",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.indy100.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mutated tribe can swim to bottom of ocean after developing 'sea nomad gene'"
            },
            {
                "link": "https://news.google.com/articles/CBMiS2h0dHBzOi8vbWVkaWNhbHhwcmVzcy5jb20vbmV3cy8yMDI0LTA2LWdpcmwtYXVzdHJhbGlhLXN0cnVjay1oNW4xLWJpcmQuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrr0jFMiNq4bHYAERr_BgdbH6b6ti0t5go4iFtPYH7atL6Skgl0Ki8_Aj9yDP5ZhA7RDiZYUpqi2J5pGMsu5W3qKmOXBjSmD9Ca2wtxFNs89ITxg",
                "source": "Medical Xpress",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://medicalxpress.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Girl in Australia, 2, struck with H5N1 bird flu: WHO"
            },
            {
                "link": "https://news.google.com/articles/CBMiRWh0dHBzOi8vd3d3LmVhdGluZ3dlbGwuY29tL2Jlc3QtdGltZS10by1kcmluay1hLXByb3RlaW4tc2hha2UtODY1OTc2M9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThn13aqGGHqSWUpaR0h5WmrKtMZVQtQQwwZvMDH6_kXK-4QYWdJzY-EtRXVISWLGjnZ5uxMw0K6xsQP8G1AQ-ej6JgKx0I4zmxSW4BmPNhhOGWoQ",
                "source": "EatingWell",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.eatingwell.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The Best Time to Drink a Protein Shake for Maximum Benefits, According to a Sports Dietitian"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3Lmh1ZmZwb3N0LmNvbS9lbnRyeS9wcm9kdWN0cy1mb3ItaGFpci1sb3NzLWRlcm1hdG9sb2dpc3QtdWRfbF82NjVhMjM1M2U0YjA4ZjlmYTE0MGFlMDLSAWVodHRwczovL3d3dy5odWZmcG9zdC5jb20vZW50cnkvcHJvZHVjdHMtZm9yLWhhaXItbG9zcy1kZXJtYXRvbG9naXN0LXVkX2xfNjY1YTIzNTNlNGIwOGY5ZmExNDBhZTAyL2FtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJo9xMFW-5LlnAqU9Q6B1Xhyu51xW-jRlvZCLLySFKS0Cu-xqnONeIbDJS8D418rnU7VDNytlSvxIsaZe5HUzfQztZVpc_SzxbA5Fk8QZFlTnlA",
                "source": "HuffPost",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.huffpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The Over-The-Counter Products Dermatologists Recommend To Combat Thinning Hair"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9oZWFsdGgvYXJ0aWNsZS0xMzQ4MjAzNy9kb2N0b3Itc2hhcmVzLXJlYWxpdHktY29sb24tY2FuY2VyLWNsaW5pYy1pbmN1cmFibGUuaHRtbNIBcGh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9oZWFsdGgvYXJ0aWNsZS0xMzQ4MjAzNy9hbXAvZG9jdG9yLXNoYXJlcy1yZWFsaXR5LWNvbG9uLWNhbmNlci1jbGluaWMtaW5jdXJhYmxlLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYJjE77h6tDRv8xNgyZtnQ3m0wo_iKpB4E0O0_YnXGRzjTJulGQHlq0Kis06BIfGyh-Q8BA4A56jOfEbWV_7Q9ZkenaL36Oe2u-HFLWGBE3VC7kQ",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Doctor shares harrowing reality of working in a clinic where 70 percent of young patients have incurable colon"
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOC9oZWFsdGgvdmlvbGVudC1kcmVhbXMtcGFya2luc29ucy1kZW1lbnRpYS13ZWxsbmVzcy9pbmRleC5odG1s0gFVaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNi8wOC9oZWFsdGgvdmlvbGVudC1kcmVhbXMtcGFya2luc29ucy1kZW1lbnRpYS13ZWxsbmVzcw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCMiFqmG024dnRXYXdh6szrREuNdB1Kbwb7KWRm5wv1NoluetXMe6x-tKO5t-z8x9o_3SegfKHF5O9XhYma284_bjS1b7cAcoT2gpawYH6CpvF9w",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "He was the first person to be diagnosed with a new sleep disorder. It led to a scientific breakthrough"
            },
            {
                "link": "https://news.google.com/articles/CBMiSGh0dHBzOi8vd3d3LnlhaG9vLmNvbS9saWZlc3R5bGUvNy1iZXN0LWhpZ2gtcHJvdGVpbi1mb29kcy0xMTAwMDAwMzUuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmQqFWmYxcHQzj0EFu_BENkRsVlPBwgR-0Q-wMxsw75MKChbOiqz6O2gdVXfXZsnmTWb1nWjeAXU9TWbkjtFGEGIlsjQGa_mDLqzOoHNJgOF83Zw",
                "source": "Yahoo Life",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The 7 Best High-Protein Foods to Eat for Breakfast, According to Dietitians"
            },
            {
                "link": "https://news.google.com/articles/CBMiOGh0dHBzOi8vd3d3LmJhcnJvbnMuY29tL2FydGljbGVzL2hvdy1tYW55LXN0ZXBzLWY2NmNhYzYy0gE8aHR0cHM6Ly93d3cuYmFycm9ucy5jb20vYW1wL2FydGljbGVzL2hvdy1tYW55LXN0ZXBzLWY2NmNhYzYy?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8M0f9QANltbFFPh-d1Yv6LK09AnnWfqMv_V8v03CPcJIENczus1rLBMMBSTatCD6bg366keTg_jstnzNy6uoo8H75NqpmNTCQyMjpVz_xS7L6EA",
                "source": "Barron's",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.barrons.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How Many Steps Do You Need for Maximum Health Benefits?"
            },
            {
                "link": "https://news.google.com/articles/CBMigAFodHRwczovL2ZveDguY29tL25ld3MveW91ci1mYXZvcml0ZS1kcmluay1jYW4tY2F1c2UtYnJlYXN0LWNhbmNlci1idXQtbW9zdC13b21lbi1pbi10aGUtdXMtYXJlbnQtYXdhcmUtb2YtYWxjb2hvbHMtaGVhbHRoLXJpc2tzL9IBhAFodHRwczovL2ZveDguY29tL25ld3MveW91ci1mYXZvcml0ZS1kcmluay1jYW4tY2F1c2UtYnJlYXN0LWNhbmNlci1idXQtbW9zdC13b21lbi1pbi10aGUtdXMtYXJlbnQtYXdhcmUtb2YtYWxjb2hvbHMtaGVhbHRoLXJpc2tzL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzfawDnKPjSsFCf8ihEA_D_P1nt82LgzpKCbbDxK933PVWl_eUE7FUY2p4GoUiAAx_yIL39WDuIOBsKn0TQ6toNmXPCxhkpcqZQCxNP0MDPBNxjw",
                "source": "WJW FOX 8 News Cleveland",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://fox8.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Your favorite drink can cause breast cancer – but most women in the US aren’t aware of alcohol’s health risks"
            },
            {
                "link": "https://news.google.com/articles/CBMilwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2RlLXN0cmVzcy83LWRhaWx5LWhhYml0cy10aGF0LWhlbHAta2VlcC10aGUtbWluZC15b3VuZy1hbmQtc2hhcnAvcGhvdG9zdG9yeS8xMTA3OTU2MTcuY21z0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTD4RFPQ5tKvmVR8BBxvGZwR6-rvBe0SQbLMZJykGEIDvOQUQRdKn-_28REmo88laujRiBOisOBBAGbD8VBYLTqHzbu8Xdhlft0S2FK",
                "source": "The Times of India",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://timesofindia.indiatimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "7 daily habits that help keep the mind young and sharp"
            },
            {
                "link": "https://news.google.com/articles/CBMiiwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vbGlmZXN0eWxlL2hlYWx0aC9tb3N0LWNvbW1vbi1jYW5jZXJzLWluLW1lbi04LWxpZmVzdHlsZS1hbmQtZml0bmVzcy10aXBzLXRvLXJlZHVjZS1yaXNrLTEwMTcxNzkzMTY4ODM3NC5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTanbWFBCEprvfzG5F_ub84SUe9p6VirWGL7LYKnXTUKGV42WRWX8-AAEj2nwvHlGH0bd0HWBoYpS_XUDf7SFCGpXm5eXiSyEEem5CjSaOXpBwvEg",
                "source": "Hindustan Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.hindustantimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Most common cancers in men: 8 lifestyle and fitness tips to reduce risk"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvZGVyZWstc3RlZnVyZWFjLW11bHRpcGxlLXNjbGVyb3Npcy1leGVyY2lzZS10cmVhdG1lbnQtbWFyYXRob25zL9IBYWh0dHBzOi8vd3d3LmNic25ld3MuY29tL2FtcC9uZXdzL2RlcmVrLXN0ZWZ1cmVhYy1tdWx0aXBsZS1zY2xlcm9zaXMtZXhlcmNpc2UtdHJlYXRtZW50LW1hcmF0aG9ucy8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyHGkSFgnr5ImIV1FpB8Mpgk1ozbg6NHUJut14JjZA5D598dPodePQ7EHjbD5RLGFjmPdaLomtzc9ZTaB2ao-wCmJ09gK4xkuOFioGdwRHpB1D-w",
                "source": "CBS News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "After being diagnosed with MS, he started running marathons. It's helping reverse the disease's progression."
            },
            {
                "link": "https://news.google.com/articles/CBMiTWh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9oZXJlcy13aHktZGVtYW5kLW96ZW1waWMtd2Vnb3Z5LTEzMDAwMDE5OS5odG1s0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0UOIPck0cYrTnInoJMtfqxTujZGYCKSHXdWqkLaC0DJ5Db17GAnlRdej-DbwasOPn_B3P5lx5TZs_iETQHXNmTwu1iCkLSkPPRwhCm3y9q60I9Q",
                "source": "Yahoo Finance",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://finance.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Here's Why Demand for Ozempic and Wegovy Could Soar Even Higher"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vaW50ZXJlc3RpbmdlbmdpbmVlcmluZy5jb20vc2NpZW5jZS9taWNyb3BsYXN0aWNzLWluLWh1bWFuLXNlbWVuLXNwZXJtLXJpc2vSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtRn7OepEsmmRWrbSTgXJlMuNELPGI7djswXs31uUJfyD391Hinojwgq4GAz_yQW-aRhx1o3SIOuay1f2g1T1Ip6HP8g3eQ-AQg9VbNhS7L6lTYg",
                "source": "Interesting Engineering",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://interestingengineering.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Microplastics in every human semen, sperm motility at risk: Study"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vbGVhcm5pbmdlbmdsaXNoLnZvYW5ld3MuY29tL2EvcmVzZWFyY2hlcnMtc3R1ZHktZ2VudGxlci1jYW5jZXItdHJlYXRtZW50cy0vNzY0Mjc3MS5odG1s0gFhaHR0cHM6Ly9sZWFybmluZ2VuZ2xpc2gudm9hbmV3cy5jb20vYW1wL3Jlc2VhcmNoZXJzLXN0dWR5LWdlbnRsZXItY2FuY2VyLXRyZWF0bWVudHMtLzc2NDI3NzEuaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjyjYDD-1aLpT0i9uX7p8nwqFl2V4vDJA8_nEs_jj7LVX4-Ub6dgPu2TZyQ3SU-7awZrGz8bOa8WkifhDWv5yB3FvYu4AhuFK4U0WqImMllJQx6w",
                "source": "VOA Learning English",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://learningenglish.voanews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Researchers Study Gentler Cancer Treatments"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmxhZGJpYmxlLmNvbS9uZXdzL2hlYWx0aC9pbmZsYW1tYXRvcnktYm93ZWwtZGlzZWFzZS1pYmQtY2F1c2Utc3ltcHRvbXMtMDUzODQ1LTIwMjQwNjA50gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfUGAoRzTTZ5noWYyW62LwK1akyQvydUVcbbNkbcOfZS1-riIg-m56uDQwRO--5Mn42hW3cNkO334Z0XK02SV4F2xJMgnbCx3shN12oBHUa9HLcw",
                "source": "LADbible",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.ladbible.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Symptoms of inflammatory bowel disease after scientists make major breakthrough in cause of it"
            },
            {
                "link": "https://news.google.com/articles/CBMijAFodHRwczovL3d3dy5pbmMuY29tL2JpbGwtbXVycGh5LWpyL3dhbnQtYS1iZXR0ZXItYnJhaW4tbmV1cm9zY2llbmNlLXNheXMtMS1zaW1wbGUtaGFiaXQtaW1wcm92ZXMtY29nbml0aW9uLWhlbHBzLXlvdS1saXZlLWJldHRlci1sb25nZXIuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWemXj-G6Ci0w5bKaeVbsulwUTHhyzjAejJX6aLhlHLgnbiA4RCGzrR7LquxjSAowr4rKBHlmYW9knA_Igg_8kEgTjx8a3dxIAkT7EydbMwYh4Aw",
                "source": "Inc.",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.inc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Want a Better Brain? Neuroscience Says Learning to Manage Stress Improves Cognition and Helps You Live Better Longer"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9oZWFsdGgvMjAyNC8wNi8wOC9hbXB1dGF0aW9uLXByb3N0aGVzZXMtbGltYnMtY2l2aWwtd2FyL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKY0U6t6cgeOAX7f_oNAdAGnuREmgHR_6uBNz4fWWc2Y3YhWdgDwJdxFL9AbqK3O3HwJ_kjRBLTdFNW_Yu0uaESSHwDUZ0vur1K2sSWUlZHSIiA",
                "source": "The Washington Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.washingtonpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Iron hands and other prostheses have been around for hundreds of years"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vd3d3Lmdvb2RuZXdzbmV0d29yay5vcmcvZWRpYmxlLWNhcmJvbi1iZWFkcy1jYW4tcmVkdWNlLWNpcnJob3Npcy1saXZlci1kaXNlYXNlLWJ5LXJlc3RvcmluZy1ndXQtbWljcm9iaW9tZS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfmUYXTQQGHsrRPC_M3zmj4OTyHdRdWcgxHH9LQ6TJDx6GXB9jhB5srCF4l9bfgjdQWKBPkFww8e6ePJkGnQ1P-LX4HUcPLDQ2VS35UxAHSJK-gg",
                "source": "Good News Network",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.goodnewsnetwork.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Edible Carbon Beads Can Reduce Cirrhosis Liver Disease By Restoring Gut Microbiome"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9saWZlL2hlYWx0aC13ZWxsbmVzcy8yMDI0LzA2LzA5L3doYXQtaXMtYS10dW1vci83MzcyODcyODAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLQD2mfis_zEAWbpoPNj8jdcnFUmuTW-uzUVu4aJTwr_ybrBVVWz8Fj5orXX_HxD2khYTpKSwiVb3r9cS3ncvKkfGLxk6JOXGz-bDGEI6cC6Otg",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "What is a tumor? What you need to know about cancer and diagnosis"
            },
            {
                "link": "https://news.google.com/articles/CBMiXmh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9oZWFsdGgvYXJ0aWNsZS0xMzUwMjAwOS9taW5vci1jb25kaXRpb25zLW5ldmVyLWlnbm9yZS1uZXdib3JuLmh0bWzSAWJodHRwczovL3d3dy5kYWlseW1haWwuY28udWsvaGVhbHRoL2FydGljbGUtMTM1MDIwMDkvYW1wL21pbm9yLWNvbmRpdGlvbnMtbmV2ZXItaWdub3JlLW5ld2Jvcm4uaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpXH5fktraRFHhse1yxcG6AwA7I89PG9SuHST58j1sIkgC_rhN1QlgCUnd7GznQTjovTDs-b8QS7OzuQO0ydKWgcA0GjKqyxeSB4h_CrSdsezExg",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Minor conditions you should never ignore in your newborn baby, according to experts"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vY2hyb25pYy1pbnNvbW5pYS1saW5rZWQtdG8tdWx0cmEtcHJvY2Vzc2VkLWZvb2RzLXN0dWR5LWZpbmRz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiE_k2IDc50Ix33mMbSw65aIAZCd1NE-v52j8OXkIT0oCTLuc-g0rutH6HxfZTd--5r5Hrlrs6XPpBz6JvyEbZYeey1tMGqbmInFrrBftWfgHoog",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Chronic Insomnia Linked to Ultra-Processed Foods, Study Finds"
            },
            {
                "link": "https://news.google.com/articles/CBMiaWh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9saWZlL2hlYWx0aC13ZWxsbmVzcy8yMDI0LzA2LzA4L2FyZS1zdHJhd2JlcnJpZXMtZ29vZC1mb3IteW91LzczNzExNzkyMDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKfsxBjI2ccYboW_PioBUQGiUQ7rSZ1F3bM7CkedrLxjh6lQItOeN3_H6ozhlBaIjngs2-XQbKxbjuEzDpkhKroYNQhwbbUD7_WRAOQeMloPP2bw",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Are strawberries good for you? Vitamins, calories and benefits"
            },
            {
                "link": "https://news.google.com/articles/CBMinAFodHRwczovL3d3dy5hdWd1c3RhY2hyb25pY2xlLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3RoZS1uZXdzLWFuZC1mYXJtZXIvMjAyNC8wNi8wOC9yYWJpZC1mb3gtYml0ZXMtd29tYW4tc2Vjb25kLWNhc2Utb2YtcmFiaWVzLWluLWFyZWEtaW4tYS1tb250aC83MzkyMjU2MjAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFF8tOj7bR3owEr4qLFTsAOydROVvgHZjDDDaPHDAoNrlZ_wd6I5a2gCtBMZreVUU",
                "source": "The Augusta Chronicle",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.augustachronicle.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Woman bitten by rabid fox, second positive case of rabies in area in a month"
            },
            {
                "link": "https://news.google.com/articles/CBMihQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL3dlYi1zdG9yaWVzLzgtb2J2aW91cy1zaWducy1vZi1pcm9uLWRlZmljaWVuY3kvcGhvdG9zdG9yeS8xMTA3MDI2OTQuY21z0gGFAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3Mvd2ViLXN0b3JpZXMvOC1vYnZpb3VzLXNpZ25zLW9mLWlyb24tZGVmaWNpZW5jeS9waG90b3N0b3J5LzExMDcwMjY5NC5jbXM?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMXu8BsTugHo8uaJIFqO3eJTziRe0FQoC9EtNkwRiacMgOnZpraHcAeplJRyWTZDIOh46UjMSKGw-5MokOt5l4Xhj2S0EpLDdhKVMj0kBHcswVA",
                "source": "The Times of India",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://timesofindia.indiatimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "8 obvious signs of iron deficiency"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3d3LnRlbGVncmFwaC5jby51ay9oZWFsdGgtZml0bmVzcy93ZWxsYmVpbmcvc2xlZXAvYWRoZC1zbGVlcC1wcm9ibGVtcy1jb21wbGV0ZS1ndWlkZS10cmVhdG1lbnQv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuZOVcJSGNtNOzjL3F6aoYax-fGu_jKTvdTkwuDGQ-f4d6WS2ED3807Cl4EQ0E0kfUkJ9YsC2X9nUNpNO8B-wGp0HJvGmw6Xm2oRum8fyN9fH1PA",
                "source": "The Telegraph",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.telegraph.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "ADHD and sleep problems: the complete guide"
            },
            {
                "link": "https://news.google.com/articles/CBMiRmh0dHBzOi8vd3d3LmFvbC5jb20vc2lsbHktc291bmRzLXNoZWVwLWhheWZldmVyLWFsbGVyZ3ktMTIwMDAwMDM3Lmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yQpR3hMM5Z0IAmy4dE7e8Lp9y2vLeOkBU74y06uCZN2PEzUlJXhmEDq0BnCK6NA",
                "source": "AOL",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.aol.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Silly Sounds of 'Sheep With Hayfever' Has Allergy Sufferers Feeling Seen"
            },
            {
                "link": "https://news.google.com/articles/CBMiSGh0dHBzOi8vc2xhdGUuY29tL2FkdmljZS8yMDI0LzA2L2RlYXItcHJ1ZGVuY2UtY3J1c2gtY2FsbGluZy1wb2xpY2UuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVdd5F6SGfI0O1jykoi2oRWYJ8b4uVHJjdEAqWDKWHsbni4QNaTQ3arrvt7hvQKY5ZeRy1irAUl90jJDw2rg0SwgPPR0gXqkus8cHMA5UewfkTXw",
                "source": "Slate",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://slate.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Dear Prudence: My secret crush found out, and he's threatening to call the police."
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3Lm1lZGljYWxuZXdzdG9kYXkuY29tL2FydGljbGVzL2Nhbi1lYXRpbmctY2hpbGktcGVwcGVycy1pbmNyZWFzZS1vYmVzaXR5LXJpc2vSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBj3r7sDfbQiY52bQw3Vx98EPQB0yQTl96WnRM5GejuYr_RIveDcQL8AZsF9LOdIvjDQ8_zjBjuebmcFv6Fhv6Nc7T_MpsufrA90Fc9Lco0-JlCA",
                "source": "Medical News Today",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.medicalnewstoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Obesity: Does eating chili peppers increase or decrease risk?"
            },
            {
                "link": "https://news.google.com/articles/CBMiQ2h0dHBzOi8vbXltb2Rlcm5tZXQuY29tL2RhdmlkLXJ1bXNleS1tYXAtY29sbGVjdGlvbi1vbmxpbmUtYXJjaGl2ZS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGV9TfagZ8bi2DpuZjuMrA3FrV1Hs-0BHNRoT8fdz2PmDPOCSROfnJ5vX94vj0UWSFKIKzth4RwqMZp8gt-YBD",
                "source": "My Modern Met",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://mymodernmet.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Explore and Download 131,000 Maps from Vast Online Archive"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3LmRhaWx5a29zLmNvbS9zdG9yaWVzLzIwMjQvNi84LzIyNDU0OTIvLU15LWZvdXItbW9udGgtaG9zcGl0YWwtc2FnYS1maW5hbGx5LWNvbWluZy10by1hbi1lbmTSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXO9Vhi4snZ0pNToJq9mvW0oJjOn4n95Vfg7EBVu5_c3yoHRRxE_13wb30gbkrowRmARggn9B0yK-9A8l7Bb2p",
                "source": "Daily Kos",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.dailykos.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "My four month hospital saga finally coming to an end"
            },
            {
                "link": "https://news.google.com/articles/CBMiUWh0dHBzOi8vY2VsZWJ3ZWxsLmNvbS9icm9va2UtYnVya2UtaW4tdHdvLXBpZWNlLXdvcmtvdXQtZ2Vhci1maW5kcy1oZXItZmVlbC1nb29kL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGDRsiqmzX13WxWEnJt3MSKM-MOhIVWJNNEJRsVkI9fkTa2XH_CuaVyg9rsPi3K60N36m9Vhy_YwV93F1su78viip_SwaeoywRIq__N5NdVrNYZA",
                "source": "Celebwell",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://celebwell.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Brooke Burke in Two-Piece Workout Gear Finds Her \"Feel Good\""
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vd3d3LnRoZS1zdW4uY29tL2hlYWx0aC8xMTU3NTk5MC9naG9zdC1wb29zLW1lYW5pbmctdHJ1dGgtY29uc3RpcGF0aW9uLXBpbGVzLWhlYWx0aHkv0gFgaHR0cHM6Ly93d3cudGhlLXN1bi5jb20vaGVhbHRoLzExNTc1OTkwL2dob3N0LXBvb3MtbWVhbmluZy10cnV0aC1jb25zdGlwYXRpb24tcGlsZXMtaGVhbHRoeS9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ95waTTIaDAVYIH0VTji24sDTCipMHJi4nYrZunDelDaw5L8yEVss_s4l3-ZNkdqcmAv4mE2EG5OPB4bIm2OHp9idCRCZPEE4sqHgbWJzAC5Eh9g",
                "source": "The US Sun",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.the-sun.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "The truth about ‘ghost poos’ and how they’re a sign you’re either mega healthy or at risk of swollen veins..."
            },
            {
                "link": "https://news.google.com/articles/CBMicWh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9zY2llbnRpc3RzLWRpc2NvdmVyLW5hdHVyYWxseS1vY2N1cnJpbmctZ3V0LW1vbGVjdWxlLXRoYXQtY2FuLXByZXZlbnQtYW5kLXRyZWF0LXRoZS1mbHUv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5fpwTzJKLdMtZIRp6_mGlNd4tMzeTjK3Bh1s_peIqL4E9WeB7JLcPZVDSWbeNpThlYXijl1pWJDGs5-rnHipLjUi4ElGPU1zrLIXBHENOmAVuw",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scientists Discover Naturally Occurring Gut Molecule That Can Prevent and Treat the Flu"
            },
            {
                "link": "https://news.google.com/articles/CBMiOGh0dHBzOi8vd3d3Lmpwb3N0LmNvbS9oZWFsdGgtYW5kLXdlbGxuZXNzL2FydGljbGUtODA1NDY20gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQz4IeBPdvwX-BSwP4Wozy3VkCcwYPl5rqgJBQNlx7r-hW7y_uXymW9lt8ZsQ9eBOj94ADwVqxj9UHZMZfZuYN0A9aBUFp6sTc5GDF1FHjb4rymxw",
                "source": "The Jerusalem Post",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.jpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "UK study finds viagra may prevent dementia, decrease risk of strokes"
            },
            {
                "link": "https://news.google.com/articles/CBMilQFodHRwczovL3d3dy55YWhvby5jb20vbGlmZXN0eWxlL21kbWEtanV1bC1hbmQtYS1jYXJkaW92YXNjdWxhci1kaXNlYXNlLXN0dWR5LTMtaGVhbHRoLXN0b3JpZXMteW91LW1heS1oYXZlLW1pc3NlZC0tYW5kLXdoeS10aGV5LW1hdHRlci0wOTAwNDExNjQuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTr1NPInOy2GHtWWBAZhPqL2Y7bcNdhPWREcT0UG4e5CICWVIM3QfApvw6tZE3n-DJ7k3ZEnUEo2VVLGmT3qHK0vbSH9V7Iv9FUfuLEGN2B2dVk9A",
                "source": "Yahoo Life",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "MDMA, Juul and a cardiovascular disease study. 3 health stories you may have missed — and why they matter"
            },
            {
                "link": "https://news.google.com/articles/CBMiRWh0dHBzOi8vbmV1cm9zY2llbmNlbmV3cy5jb20vYWRoZC1jb2duaXRpb24tcHN5Y2hvcGhhcm1hY29sb2d5LTI2Mjc2L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJbEdH-HlNDv2lbpWnirwUt3NAMMq8MHWtbrtPd5qWhfe6lKXsVzkMkYnlGQiph00gN6k8V6O-Ghy4t4j-k3mRLIOvSPAJlQnV7tSMxdNE-gzcQ",
                "source": "Neuroscience News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://neurosciencenews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "ADHD Medications Improve Long-Term Cognitive Function"
            },
            {
                "link": "https://news.google.com/articles/CBMiY2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTM1MDk3NjMvUGFya2luc29ucy1kaXNlYXNlLXRldGFudXMtamFicy1uZXctcmVzZWFyY2guaHRtbNIBZ2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTM1MDk3NjMvYW1wL1BhcmtpbnNvbnMtZGlzZWFzZS10ZXRhbnVzLWphYnMtbmV3LXJlc2VhcmNoLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEwXqbMixzdvJusbr-5izYV_oVU8T-AmD4lyIrz9mzt4_E-FnuyO2ajUTg8c4Tq4J_XFZMmHJTxSqObdOjyJ90RhK_1TqfYq4-pK414CZ0pm46Q",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Parkinson's disease could be treated with tetanus jabs - after new research found those who had the shot were"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vd3d3LnNhbG9uLmNvbS8yMDI0LzA2LzA5L2JpcmQtZmx1LWhhcy1kb3plbnMtb2YtY2F0cy1hY3Jvc3MtdGhlLXdvcmxkLWlzLXlvdXIta2l0dHktYXQtcmlzay_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTie2hPwUIyX6PvOmN2j5X5XZu54qO6em4cPY8IFnlNu_ZRVRT3SJeP78_dfR6-uW8b2l4w73SveZnkQdC0aZokfq_lfmW0g9YpUUNKba5kFcAR7Q",
                "source": "Salon",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.salon.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bird flu has killed dozens of cats across the world. Is your kitty at risk?"
            },
            {
                "link": "https://news.google.com/articles/CBMiOWh0dHBzOi8vd3d3LnluZXRuZXdzLmNvbS9oZWFsdGhfc2NpZW5jZS9hcnRpY2xlL3NqN3loZ3pzYdIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS53BcnKEACJHzLOpLHnQv3Vef2g9rYZgtnn1oNUCIWJ_JwWpPzuA3bINoDVAbgO5OQ7mwAlv8AiXozLNPluR3s",
                "source": "Ynetnews",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.ynetnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Beneath the skin: the intricacies of tattooing"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9oZWFsdGgvYXJ0aWNsZS0xMzQ5NDg3NS91cy12YWNhdGlvbi1iZWFjaGVzLWZsZXNoLWVhdGluZy1iYWN0ZXJpYS13YXRlci5odG1s0gFsaHR0cHM6Ly93d3cuZGFpbHltYWlsLmNvLnVrL2hlYWx0aC9hcnRpY2xlLTEzNDk0ODc1L2FtcC91cy12YWNhdGlvbi1iZWFjaGVzLWZsZXNoLWVhdGluZy1iYWN0ZXJpYS13YXRlci5odG1s?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kda8M35pBWeADknB4JFSO4gb08EbdwilvIRAJtnSFvMcmtGlDiv_cAiHiNw6xoaI1t4qV3hWsu_mUDIo3ThEGuWUlX0dWpihdybUED_qHKJQqA",
                "source": "Daily Mail",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.dailymail.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mapped: The US beaches where deadly, flesh-eating bacteria lurk in the water- is your vacation spot safe?"
            }
        ],
        "Science": [
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyNC8wNi8wOS93aWxsaWFtLWFuZGVycy1hc3Ryb25hdXQtd2hvLXRvb2stdGhlLWZhbW91cy1lYXJ0aHJpc2UtcGhvdG8tZGllcy1hdC05MC_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLzSS_MGUqIOL6od3JbWY0HdGgerqiTlAlv3-clW2zcQYRCKXnG4wJaC3hQBo5YL0v6gPApIlv8GnU7aVUQxRq8bPFqjF2hnmzizYeQKOi9srEFw",
                "source": "TechCrunch",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://techcrunch.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "William Anders, astronaut who took the famous ‘Earthrise’ photo, dies at 90"
            },
            {
                "link": "https://news.google.com/articles/CBMia2h0dHBzOi8vZW4uc29mdG9uaWMuY29tL2FydGljbGVzL2JydXRhbC1zbG93LW1vdGlvbi1jYW1lcmEtb2YtdGhlLXRha2VvZmYtb2YtdGhlLXNwYWNleC1zdGFyc2hpcC1zcGFjZWNyYWZ00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0fJ3FRa-0wfBBdvwF7mNO6Yyr6rAAHU8fTiIawK4UfFcjFc0NmIqIagg9yYHjs1B9eOjqhAHUWOnaAdj0-klI3wCzvvGymqQHhBdDmGGzZljiQ",
                "source": "Softonic EN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://en.softonic.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Epic slow-motion footage of the SpaceX Starship liftoff"
            },
            {
                "link": "https://news.google.com/articles/CBMiXmh0dHBzOi8vd3d3Lm5vb3poYXdrLmNvbS92YW5kZW5iZXJnLXNmYi1zZWVzLXRoaXJkLWxhdW5jaC1vZi13ZWVrLXdpdGgtc3BhY2V4LXJvY2tldHMtbGlmdG9mZi_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-ElXEKcwwKJ1i4l2KP605zjUdq-4hrUsZf97JzqGRfPjalY5OerZsONlBBFRoXFtv_EHsq_YjUAM6c4a9iZpHr6a9GMhlg7qKxUsmtXP3LmgxuQ",
                "source": "Noozhawk",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.noozhawk.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Vandenberg SFB Sees Third Launch of Week with SpaceX Rocket's Liftoff | Local News"
            },
            {
                "link": "https://news.google.com/articles/CBMifWh0dHBzOi8vd3d3LmtzbC5jb20vYXJ0aWNsZS81MTAzMjAyMi8zLWJveXMtZm91bmQtYS10LXJleC1mb3NzaWwtaW4tbm9ydGgtZGFrb3RhLW5vdy1hLWRlbnZlci1tdXNldW0td29ya3MtdG8tZnVsbHktcmV2ZWFsLWl00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtTKRswFpc6yoK6Xz9njf6ldzc1uAlSVX22rA_6H7xiAjmdA9XPoj0kF0CFVL9t1lIXu-y1lktwLCkUJftrUVBS7lNfKXqiDpyZmTiPzsTN35EMQ",
                "source": "KSL.com",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.ksl.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "3 boys found a T. rex fossil in North Dakota. Now a Denver museum works to fully reveal it"
            },
            {
                "link": "https://news.google.com/articles/CBMiOGh0dHBzOi8vZnV0dXJpc20uY29tL3RoZS1ieXRlL3NjaWVudGlzdHMtcmVmcmVlemUtYXJjdGlj0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SiQmLIW7uxWqv7Q3wnRCCAKuC-ClY9dgIc9SXaWwYpEDp1XGthzoMNskCX96EgB2b2uPnBfZc30zn3LZgWdVoMfz70snbRsyTVUjphJrxY61Ng",
                "source": "Futurism",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://futurism.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scientists Working on Desperate Plan to Refreeze Arctic"
            },
            {
                "link": "https://news.google.com/articles/CBMiPWh0dHBzOi8vd3d3LnNwYWNlLmNvbS9lc2EtYXJpYW5lLTYtcm9ja2V0LWZpcnN0LWxhdW5jaC1qdWx5LTnSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqFe8WXpQMZJt6gPWyui4gF-Stnyg51grGe9uUGFOSzRCZxlFcPg55WOv7PmTB7zW8UVqZFAQ9t2ep8PpBls9mB1NJR9BkJ4rwbROJcFz_5uycfQ",
                "source": "Space.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.space.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "At long last: Europe's new Ariane 6 rocket set to debut on July 9"
            },
            {
                "link": "https://news.google.com/articles/CBMijgFodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL21hcnlyb2Vsb2Zmcy8yMDI0LzA2LzA5L25vcnRoZXJuLWxpZ2h0cy1jb3VsZC1iZS12aXNpYmxlLWFnYWluLXRvbmlnaHQtaW4tcGFydHMtb2YtdXMtaG93LXRvLXNlZS1hdXJvcmEtYm9yZWFsaXMv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkUaMZhxHIhrzLrerXr-QyQ7LmMuOzADLbbdOV1vETuyv8u9P--Fekk0EJHXnjeETCLWlU9DJfEb5OQW4ZV9PMdtFuGXdt4UI0914KjOGF5Qyt-Q",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tonight's Updated Aurora Borealis Forecast: Here's Where The Northern Lights Might Be Seen"
            },
            {
                "link": "https://news.google.com/articles/CBMiSGh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LW1ldGhvZC1tdWx0aS1yb2JvdC10ZWFtcy1hdXRvbm9tb3VzbHkuaHRtbNIBR2h0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LW1ldGhvZC1tdWx0aS1yb2JvdC10ZWFtcy1hdXRvbm9tb3VzbHkuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxRPhFr3ySa-r6adUoXgEpysMz45QUbIiBCDglUvCKIDG02ulvsmPTLfwwAT6Vfgvi4mHvx2BS1fMkbrh_af4fCpN97gE0FFpznXkKn3Syu3kThg",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "New method could allow multi-robot teams to autonomously and reliably explore other planets"
            },
            {
                "link": "https://news.google.com/articles/CBMiVmh0dHBzOi8vd3d3LmxhZGJpYmxlLmNvbS9uZXdzL3NjaWVuY2Uvbm92YS1leHBsb3Npb24tdC1jb3JvbmEtYm9yZWFsaXMtMjAxNTkyLTIwMjQwNjA50gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOmIFkqz7zstvEvEe1bmmU-UbD0Df-NJDS2H2qY5XhCv5Tsl_HiDYdw6jaJFIDCFLSD5OiEjHfOhlHUcIrIXQB-g-ScvrrewdBNgeNPPZwjMoX4A",
                "source": "LADbible",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.ladbible.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Once-in-a-lifetime star 'explosion' set to light up the sky could happen any moment from now"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9saWZlLWJleW9uZC1lYXJ0aC13ZWJicy1zcGVjdHJvc2NvcGljLWh1bnQtZm9yLWVhcnRoLWxpa2UtcGxhbmV0cy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQC1BJHisU7GU4e8VYF0dIh060RPCAafvlC-GCr4K3SQ2sFKJwXNATSgepeqcDH8HiZu9ha9m1RRTro9dklSAn5xDZSG-hvBcXMIF2S4921rlUIYQ",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Life Beyond Earth: Webb's Spectroscopic Hunt for Earth-Like Planets"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3Lm5kdHYuY29tL3NjaWVuY2UvbXlzdGVyaW91cy1ob2xlLW9uLW1hcnMtY291bGQtc2hlbHRlci1odW1hbnMtZHVyaW5nLWNyZXdlZC1taXNzaW9uLTU4NTIyNjfSAW1odHRwczovL3d3dy5uZHR2LmNvbS9zY2llbmNlL215c3RlcmlvdXMtaG9sZS1vbi1tYXJzLWNvdWxkLXNoZWx0ZXItaHVtYW5zLWR1cmluZy1jcmV3ZWQtbWlzc2lvbi01ODUyMjY3L2FtcC8x?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6dYW4N8cyTFUZLDnreS4aC1NNZOcoMuV2RfhDZz55BvCcQvdVvrzEV8ft0DYYycll8B1KOfAHgG6cUqFLuRW8cWo2hzMTumsqVWpksKuOMNkcw",
                "source": "NDTV",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.ndtv.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mysterious Hole On Mars Could Shelter Humans During Crewed Mission"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3Lm5ld3N3ZWVrLmNvbS9tYWpvci1hcmNoYWVvbG9naWNhbC1kZXZlbG9wbWVudC1oZWxwLXJld3JpdGUtZWFybHktaHVtYW4taGlzdG9yeS0xOTA5Nzgy0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_IxcmWZIXeX6YIz8BJ3comEJ0fLz1q-1B0ux0OOc9IsMoKjjiwc0bv4U0jsz_kdyP0VBYO7g2e4hK5mpbPVW4ditZC0BaSUMdKtB8kQwd85Y-1Q",
                "source": "Newsweek",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.newsweek.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Major' Archaeological Development May Help Rewrite Early Human History"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmNvdXJpZXItam91cm5hbC5jb20vc3RvcnkvbmV3cy8yMDI0LzA2LzA0L2Z1bGwtbW9vbi1qdW5lLTIwMjQtd2hlbi1zdHJhd2JlcnJ5LW1vb24ta2VudHVja3kvNzM5NTUwMjYwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN_qmkpifBXEFXB6Iq0g8OQ0RX1_qzlyvZQPT1PoB86l_tCq-ajaJlY8u50-W7NbSlVwdq9XH3TH_SmIBLxl2VRT1BDzH1M4qwQ83nmxp3uWnZmA",
                "source": "Courier Journal",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.courier-journal.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Full moon June 2024: When to see the Strawberry Moon in Kentucky"
            },
            {
                "link": "https://news.google.com/articles/CBMid2h0dHBzOi8vY293Ym95c3RhdGVkYWlseS5jb20vMjAyNC8wNi8wOS93eW9taW5nLXJvY2staG91bmRzLWdvaW5nLW51dHMtb3Zlci1vbmUtb2YtYS1raW5kLTItNS1iaWxsaW9uLXllYXItb2xkLWJvdWxkZXIv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7cmwoR8Lu7yOm67JUYJS4NdmMLi5XWcpr-Ef24HMwfo8ZRDrtlqzB-FtcA8aqTw",
                "source": "Cowboy State Daily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cowboystatedaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Wyoming Rock Hounds Going Nuts Over One-Of-A-Kind 2.5 Billion-Year-Old Boulder"
            },
            {
                "link": "https://news.google.com/articles/CBMiO2h0dHBzOi8vd3d3LnNwYWNlLmNvbS9zdGVsbGFyLWRyZWFtcy0xMDAtdGVsZXNjb3Blcy1wcm9qZWN00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxMGoEpuToJP57ab0yl9O8Nj8VQ-wCHoBBGpGEa66YGfQvEkbHgSYRVhMJjvrWclgppW1aoI--Lz5BICVn8A7rr9pxFgS0hAz3PbhCGzxw5qcM9w",
                "source": "Space.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.space.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Stellar Dreams' project gifting 100 telescopes to 100 families (exclusive)"
            },
            {
                "link": "https://news.google.com/articles/CBMiO2h0dHBzOi8vd3d3LnNwYWNlLmNvbS9heGlvbS1zcGFjZS1hcnRlbWlzLTMtaW50ZWdyYXRlZC10ZXN00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWnIMffY9kYNUCSlvNOkMduyLeuAwwK7ucoIdUyRL65qL1MzqjiKyIZXJxkJ7DU4gzaKD0H2Yw_5BksPCRxj6MQXYq3noi8m_YSp_cwFOWUdii6A",
                "source": "Space.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.space.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Astronauts test SpaceX Starship hardware and spacesuits for Artemis 3 moon mission (photos)"
            },
            {
                "link": "https://news.google.com/articles/CBMiP2h0dHBzOi8vZnV0dXJpc20uY29tL3RoZS1ieXRlL3NpZ25hbC1zcGFjZS1yZXBlYXRpbmctZXZlcnktaG91ctIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgkMCsQKH1cVJWInumk3Va3AY8s01o4V59cz-AIbAC9xDWwVzelCUutUGCOjUJueks01gR1agyQZAUZGajhzQNxA6lkCc0ecyeo87JOMvajmhrlA",
                "source": "Futurism",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://futurism.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scientists Intrigued by Signal From Space Repeating Every Hour"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vbmFzYS1wbGFubmluZy1jdXR0aW5nLWVkZ2Utc3BhY2UtdGVsZXNjb3BlLXRvLWZpbmQtYWxpZW4td29ybGRzLWxpa2UtZWFydGjSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQon24-eCkKlI1VxkZnHdSKFv0A6IyExJgMu_4IbHqM3JksowRJkNdwF4FXvwXIxlYTH9O-Dm9flnlEl0A77rNuMBt4JwkEHW_e0I-dngSfirTQWw",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NASA Planning Cutting-Edge Space Telescope to Find Alien Worlds Like Earth"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9teXN0ZXJpb3VzLXVua25vd24tZGVlcC1zZWEtY3JlYXR1cmVzLWRpc2NvdmVyZWQtb24tYWJ5c3NhbC1leHBlZGl0aW9uL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTxsv-2RXqKH51-V40PbEBTvrALmLfi_kaQWa9lUEPMoG89DJ3WUZ6QkDBWhrAWtwIDVd8DDBI2rSKnuE8yDMHvGscmeiZLbcsYRaC",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mysterious Unknown Deep-Sea Creatures Discovered on Abyssal Expedition"
            },
            {
                "link": "https://news.google.com/articles/CBMiO2h0dHBzOi8vd3d3LnNwYWNlLmNvbS9hcnJva290aC1zcGFjZS1zbm93bWFuLXJlZC1odWUtc3VnYXJz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTVLZABLjdWHcFSEBgHyK5GwQZiyV6qEuRR0eIsuV_i8heTYlAObKQdCM_2S-XsqvP-ckZzpg-gvjxb99vrP7Eoul",
                "source": "Space.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.space.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Arrokoth the 'space snowman' probably tastes like sweet soap"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vYmlndGhpbmsuY29tL3N0YXJ0cy13aXRoLWEtYmFuZy9zdGFydHMtd2l0aC1hLWJhbmctcG9kY2FzdC0xMDYtdGhlLXRyb3VibGVzb21lLWh1bnQtZm9yLXBsYW5ldC1uaW5lL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLoyZ1-6ToCh5a1pZ69EjE5cYhEXlVT5YdGJn6Waj6HKlsf-yULLiUXVP1AfBKyK_DjgrpNOcIb0DkrVIqcAMsohnSt6p0UHcFSLmnZTkvh53BQA",
                "source": "Big Think",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://bigthink.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Starts With A Bang podcast #106 - the troublesome hunt for Planet Nine"
            },
            {
                "link": "https://news.google.com/articles/CBMiTWh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LW5hc2EtaW50ZXJzdGVsbGFyLXByb2JlLWhlbGlvc3BoZXJlLXJlZ2lvbi5odG1s0gFMaHR0cHM6Ly9waHlzLm9yZy9uZXdzLzIwMjQtMDYtbmFzYS1pbnRlcnN0ZWxsYXItcHJvYmUtaGVsaW9zcGhlcmUtcmVnaW9uLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpxrjL-6WNrdr7hfvKNVU21KY5ulzDztkmvwfec9pViWKWxkl73b4Me61ANVAXDJEstjKzKQH1Ha0sxX0dkRNW2vOaJWP7FFjSzWvTDUMu_qE6ww",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NASA considering an interstellar probe to study the heliosphere, the region of space influenced by the sun"
            },
            {
                "link": "https://news.google.com/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jeHd3amxyazFtbG_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3h3d2pscmsxbWxvLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7gxV_VvUgCzKBIw8f0qBXDU0bgagFRJsLBo9opGgvLK--450aiSzLUMgrcqib6otsH_2f58FoxZw4-mr3RYIQgnmpRra-xkmE_jpDC7agdrMZlw",
                "source": "BBC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Who owns the Moon? A new space race means it could be up for grabs"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vdGlueS1vdmVybG9va2VkLWNyZWF0dXJlcy1tYXktaGF2ZS10cmlnZ2VyZWQtZXhwbG9zaW9uLW9mLWxpZmUtb24tZWFydGjSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2-FLpnAswmM6Ck0dLqzsNJxAfYHRlvvql36I_tcAD1lC0nFuLD1ddV_vhHvMlEovfGzyci7BjDjmlOOPwH6aTWG0uC5PyjyzptlKeK3D9nzfH6Q",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tiny Overlooked Creatures May Have Triggered Explosion of Life on Earth"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vbGVhcm5pbmdlbmdsaXNoLnZvYW5ld3MuY29tL2Evd29ybGQtcy1sYXJnZXN0LWNhbWVyYS1mb3ItYXN0cm9ub215LXJlYWNoZXMtY2hpbGVhbi1tb3VudGFpbnRvcC83NjQ1ODcxLmh0bWzSAXVodHRwczovL2xlYXJuaW5nZW5nbGlzaC52b2FuZXdzLmNvbS9hbXAvd29ybGQtcy1sYXJnZXN0LWNhbWVyYS1mb3ItYXN0cm9ub215LXJlYWNoZXMtY2hpbGVhbi1tb3VudGFpbnRvcC83NjQ1ODcxLmh0bWw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1p-EnbIdAqv8WTEnMD183e770l6kytpoAvovVG3Nqleweq6HMSEYmrpcqlFNHY7f6vz2wmyh5lRuLRsOyBD89K8_tDvz_TEDztRlHFUZXOgy86g",
                "source": "VOA Learning English",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://learningenglish.voanews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "World’s Largest Camera for Astronomy Reaches Chilean Mountaintop"
            },
            {
                "link": "https://news.google.com/articles/CBMiiAFodHRwczovL3d3dy5saXZlc2NpZW5jZS5jb20vc3BhY2UvYXN0cm9ub215L3NwYWNlLXBob3RvLW9mLXRoZS13ZWVrLWphbWVzLXdlYmItYW5kLWNoYW5kcmEtdGVsZXNjb3Blcy1zcG90LWEtbGlnaHRob3VzZS1wb2ludGVkLWF0LWVhcnRo0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjMdWcHxPwoFt-OWm28tud7npsm08ZoR7w5HpxEIZ9AfS2o90DKtGfMZ4VGwrGTdjJ429QfepjjMcqVSGFJCYvVyC9P2lQ0MTlOf7eQh--8HnBng",
                "source": "Livescience.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.livescience.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Space photo of the week: James Webb and Chandra telescopes spot a 'lighthouse' pointed at Earth"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LmV4cHJlc3MuY28udWsvbmV3cy9zY2llbmNlLzE5MDg0OTgvc2liZXJpYS1ydXNzaWEtYmF0YWdhaWthLWNyYXRlci1wZXJtYWZyb3N00gFdaHR0cHM6Ly93d3cuZXhwcmVzcy5jby51ay9uZXdzL3NjaWVuY2UvMTkwODQ5OC9zaWJlcmlhLXJ1c3NpYS1iYXRhZ2Fpa2EtY3JhdGVyLXBlcm1hZnJvc3QvYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdIwj2fpD8I04s42XuFd56b2JxMO29bzXBKbG6KjTTVwOhhuDLNJlhzdBMLa88v5cXSRZGDWV8UwHPhxH3KfFFkW97MMrVAx46S6mcAB_8Owo23A",
                "source": "Express",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.express.co.uk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scientists make terrifying discovery over 'Gateway to Hell' crater visible from space"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vbG9zdC1hZ2Utb2YtbW9ub3RyZW1lcy1yZXZlYWxlZC1ieS1mb3NzaWxzLWZyb20tMTAwLW1pbGxpb24teWVhcnMtYWdv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_dsRj_o57C_IWvjtFcet07ZgasImbCWWez4ViaebVTeJ-RKJkwMj2FHyAg57QmaT23p7QTgVm0HQF1VkS4Ob_1zKFHbq0uZo29Xnyqzge0O0HbQ",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Lost Age of Monotremes Revealed by Fossils From 100 Million Years Ago"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9iZXlvbmQtZWluc3RlaW4tZ3JvdW5kYnJlYWtpbmctbWFwLW9mLXRoZS11bml2ZXJzZS1yZWRlZmluZXMtY29zbWljLW1vZGVscy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWwYw7N2FqE5qZtLAjfapQ_L2utjOoJWy-VIbkWhXbc-SdoKof4Jabz6xx0FYydf2nfliv0wueeMTjxh2yabWdR2rVGxoTtHzsmfjpkmcUJ031Kw",
                "source": "SciTechDaily",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://scitechdaily.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Beyond Einstein: Groundbreaking Map of the Universe Redefines Cosmic Models"
            },
            {
                "link": "https://news.google.com/articles/CBMiT2h0dHBzOi8vd3d3LnRoZS1zdW4uY29tL3RlY2gvMTE1ODA2MDIvYW1lcmljYW4tcHJvZmVzc29yLWRpc2NvdmVyLW5ldy1kaW5vc2F1ci_SAVNodHRwczovL3d3dy50aGUtc3VuLmNvbS90ZWNoLzExNTgwNjAyL2FtZXJpY2FuLXByb2Zlc3Nvci1kaXNjb3Zlci1uZXctZGlub3NhdXIvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi55VyzY8onSQbPWcMo8w0AEDNNU0s8iMjUA9kJmYpH3IOzVPm2TEVV-ybrn7ldrrlqugWCD43WkZ-rvEswS5l_d6XGBFDS6CrIOzI9gpZ02Uq1g",
                "source": "The US Sun",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.the-sun.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "American professor discovers massive new long-necked dinosaur that lived 210MILLION-years-ago while..."
            },
            {
                "link": "https://news.google.com/articles/CBMiPGh0dHBzOi8vbmV1cm9zY2llbmNlbmV3cy5jb20vb3Jjby1vbGZhY3Rpb24tYXBvcHRvc2lzLTI2MjcwL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwnYERF5FXbYqTZOqLg6a6R5kYO0pNxr9fc9Et1qs7qF_aqXe0hajnKOVGiCMPyVGKLaECc0C3c92PHU9_Yu5abKdIZDocB84riWuPc8YZ3ikfJA",
                "source": "Neuroscience News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://neurosciencenews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Key Protein Essential for Smell and Survival Identified"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vc2NpZW50aXN0cy1oYXZlLWRpc2NvdmVyZWQtYS1uZXctd2F5LXRvLWxvb2staW5zaWRlLWNyeXN0YWxz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-IiZyRfd-gCSU9z-fAwi6SoA9VKKkd38wRX0FOZialqvqFzBQz-qEyowmXU6kPaaAkKEassoWA9zkiPF3fLHGlWoO7vyHXQPXCVSrTzIjmlu8g",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scientists Have Discovered a New Way to Look Inside Crystals"
            },
            {
                "link": "https://news.google.com/articles/CBMipgFodHRwczovL3JldHJhY3Rpb253YXRjaC5jb20vMjAyNC8wNi8wOC93ZWVrZW5kLXJlYWRzLW1ham9yLWFsemhlaW1lcnMtcGFwZXItc2xhdGVkLWZvci1yZXRyYWN0aW9uLXJlc2VhcmNoLWRvZy1icmVlZGVyLXBsZWFkcy1ndWlsdHktYmlvbWVkaWNhbC1yZXRyYWN0aW9ucy1xdWFkcnVwbGUv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-8J-Anl32fFK6wivSGd7UgkGuXwfyN7aiarnryQrtCVATMf1A03BOc0kfRi7Rf2pAXm5Y8p0_z0l8iN3v8dnkT664Fm4pzG4Y7zlk9mkfhdQI7g",
                "source": "Retraction Watch",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://retractionwatch.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Weekend reads: Major Alzheimer's paper slated for retraction; research dog breeder pleads guilty; biomedical retractions quadruple"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tZWRpYS9hbWVyaWNhbi1pbmdlbnVpdHktdGFraW5nLXVzLW5ldy1mcm9udGllci1zcGFjZS1mb3JtZXItbmFzYS1leGVj0gFmaHR0cHM6Ly93d3cuZm94YnVzaW5lc3MuY29tL21lZGlhL2FtZXJpY2FuLWluZ2VudWl0eS10YWtpbmctdXMtbmV3LWZyb250aWVyLXNwYWNlLWZvcm1lci1uYXNhLWV4ZWMuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTPP2l2tTrw17XoWl_YJK6rdfJxRd8-i2Yz5M6s09vqnie1JpFAwXYEJuqMbHGYmQq4ObZt6FX8uK9wnqJ68nh6_g9m8aczV4Qp3RcH2wfAbWQ5w",
                "source": "Fox Business",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.foxbusiness.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "American ingenuity taking US to new frontier in space: Former NASA exec"
            },
            {
                "link": "https://news.google.com/articles/CBMijgFodHRwczovL3d3dy5saXZlc2NpZW5jZS5jb20vcGh5c2ljcy1tYXRoZW1hdGljcy9kYXJrLW1hdHRlci9lYXJ0aHMtdXBwZXItYXRtb3NwaGVyZS1jb3VsZC1ob2xkLWEtbWlzc2luZy1waWVjZS1vZi10aGUtdW5pdmVyc2UtbmV3LXN0dWR5LWhpbnRz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz4cZ54YQEi55nSHQDmu3TGTn43Mu2jUlgjbGJlMrgPFkSJc8lsutYafYyu9TQOHLHtIJnsDQ4T-mEsVvu--X8ejTOxbAYWt-gHrdkvFRIJOCUg",
                "source": "Livescience.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.livescience.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Earth's upper atmosphere could hold a missing piece of the universe, new study hints"
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vYnJhaW4tY2VsbHMtbWF5LWFjdHVhbGx5LXRyeS10by1wcmVkaWN0LXRoZS1mdXR1cmUtZHVyaW5nLXNsZWVw0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgSaqYg1ES3KNeMeXh5c0enGePi8hRADCM60VjuNc1z2vXXTH5kiDO9Dyhxt0JHSyEUGwXTI339T__uYKF8kzlOVEyHQ5AoT-FMPGXBmBG3QVUYw",
                "source": "ScienceAlert",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sciencealert.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Brain Cells May Actually Try to Predict The Future During Sleep"
            },
            {
                "link": "https://news.google.com/articles/CBMiQmh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LWZyZXNoLWtleS1jb25kaXRpb25zLWxpZmUtZWFydGguaHRtbNIBQWh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LWZyZXNoLWtleS1jb25kaXRpb25zLWxpZmUtZWFydGguYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBQpQqYsp_eSlXz5HDtf16OM1MeBIhoqOaYG-_FSpO7pwGuaKOUqsKSzTiVaCYvU1OLcFsdmh_q5p_p2hqRLEP4NH0brZCMEEIkJs-_dt3OuIztw",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Study finds fresh water and key conditions for life appeared on Earth a half-billion years earlier than thought"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vd3d3LmVhcnRoLmNvbS9uZXdzL2N1cnZhdHVyZS1wcm9wdWxzaW9uLXdhcnAtZHJpdmUta3Jhc25pa292LXR1YmUtZnV0dXJlLWludGVyZ2FsYWN0aWMtc3BhY2UtdHJhdmVsL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4jsdOmeB71bk3bEcpVZkJRh_HmeXkBFbcJ-rCjOdqBxx78cRwLiBHdaz8HznK4ZAUELXdin_qmSptOdAzgWwI",
                "source": "Earth.com",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.earth.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Curvature propulsion and the future of intergalactic space travel"
            },
            {
                "link": "https://news.google.com/articles/CBMiSmh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LXNhdHVyZGF5LWNpdGF0aW9ucy1kb2dzLWV2b2x1dGlvbi1icm93bi5odG1s0gFJaHR0cHM6Ly9waHlzLm9yZy9uZXdzLzIwMjQtMDYtc2F0dXJkYXktY2l0YXRpb25zLWRvZ3MtZXZvbHV0aW9uLWJyb3duLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdQbJfuOha_5f9Uo5dESKelOjevB1upliuy_KFi9qHNlw_T4MjPfJdPJ_O83NzxQjnWuvKLonDjmWIIJ-RNF3awp7MdBqZQlGQPlQhCjZAub4E1g",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Saturday Citations: Praising dogs; the evolution of brown fat; how SSRIs relieve depression. Plus: Boeing's Starliner"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vc2xhdGUuY29tL2FkdmljZS8yMDI0LzA2L2JhY2t5YXJkLXNxdWlycmVscy1zb24tdGFtZS1wYXJlbnRpbmctYWR2aWNlLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThieY80Y-tkdjF4bBFHg6Qbphm-2c8NOc9x22z_F_lyytkHgIGjChBI4WwdMz_vter-V_0ysMwFPyWwyRGZoi6sJ8Gr2TG0PHxM0ms1aoOsm73A",
                "source": "Slate",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://slate.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Parenting advice: My son set out to tame the local squirrels. It's led to a rift I didn't expect."
            },
            {
                "link": "https://news.google.com/articles/CBMiRWh0dHBzOi8vd3d3LnNjaS5uZXdzL3BhbGVvbnRvbG9neS9wYWNoeXN0cm9waGV1cy1yaGFldGljdXMtMTI5OTUuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyE-SuOETyDbSbYrrS64RdVbIpB9d9knMV95tk_mnLsbzkjKgzzmxNwo_xKmwlMPbhqIx00RciKyD3ATYO-fV1cEOVYhKKhJC9ZjIWLy7wpODqSg",
                "source": "Sci.News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.sci.news&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Enigmatic Triassic Thalattosaur Was Able to Move on Land, Paleontologists Say"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vcGh5cy5vcmcvbmV3cy8yMDI0LTA2LW5vbnJlY2lwcm9jYWwtcXVhbnR1bS1iYXR0ZXJpZXMtcmVtYXJrYWJsZS1jYXBhY2l0aWVzLmh0bWzSAVdodHRwczovL3BoeXMub3JnL25ld3MvMjAyNC0wNi1ub25yZWNpcHJvY2FsLXF1YW50dW0tYmF0dGVyaWVzLXJlbWFya2FibGUtY2FwYWNpdGllcy5hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBsCIN_1prmAI-tXucq9xGPnLL4Ld0b9dZqLU0NMdC8ZPWfeRa4OvKpSfXwWj7LvuJ9wRNBoeMfk67vGiiovmKX83S4yQPiuEuVm1gVdMRaYVHJQ",
                "source": "Phys.org",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://phys.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Nonreciprocal quantum batteries exhibit remarkable capacities and efficiency"
            },
            {
                "link": "https://news.google.com/articles/CBMiMmh0dHBzOi8vd3d3LmFyYWJuZXdzLmNvbS9ub2RlLzI1MjY1NjEvc2F1ZGktYXJhYmlh0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsTPGaDYkBaGaGQC6aTBR-RxLrQEQhUiS_dC-Wi-KVMNXLIXnEBVhRjScuCl6tdsZdS-2nyJJM40JmhnA6tdH",
                "source": "Arab News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.arabnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Living rocks' off Saudi Arabia's Sheybarah Island offer glimpse of how life on Earth began"
            },
            {
                "link": "https://news.google.com/articles/CBMiOmh0dHBzOi8vd3d3LmxpdmluZ2V0Yy5jb20vYWR2aWNlL2xhdmVuZGVyLWNvbXBhbmlvbi1wbGFudHPSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3fPgzUFJ-IKnAGH-yUMmrQ0Sioh1IKkcndLKVQ6Ofbx0LRV1s8S_4Dt-EO9Q3-JU-KR__XiMTQbVYTX4j_F8kOEO4Qhr6fwiGGzOwkJ8RtBxxYw",
                "source": "LivingEtc",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.livingetc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Lavender Companion Plants — 5 Picks Garden Experts Love"
            }
        ],
        "Sports": [
            {
                "link": "https://news.google.com/articles/CBMijQFodHRwczovL3Nwb3J0cy55YWhvby5jb20vbGl2ZS9jZWx0aWNzLXZzLW1hdmVyaWNrcy1uYmEtZmluYWxzLWdhbWUtMi1zY29yZS1saXZlLXVwZGF0ZXMtY2hhbm5lbC1zdHJlYW0taG93LXRvLXdhdGNoLWhpZ2hsaWdodHMtMjI1NzM2MzAzLmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncXOHtWZ5JsRM-8GIld1jW6XxNq7UzrWNNBOt3TKBXUWhL_gsWbwB6uiht9dWjg41FQmj0aF95xNnK0pPsr_-LdzKlpRXJvsqoFSIZRsLECWYjw",
                "source": "Yahoo Sports",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://sports.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NBA Finals: Jrue Holiday takes center stage as Celtics fend off late Mavericks rally for 2-0 series lead"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvY2FpdGxpbi1jbGFyay1yZWFjdGlvbi1yZXByZXNlbnQtdGVhbS11c2Etb2x5bXBpY3Mtc29tZS1kYXktcm9zdGVyLXNudWIv0gFpaHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL25ld3MvY2FpdGxpbi1jbGFyay1yZWFjdGlvbi1yZXByZXNlbnQtdGVhbS11c2Etb2x5bXBpY3Mtc29tZS1kYXktcm9zdGVyLXNudWIv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIMxlVTPDLhnjdHJSgoG5cctzb89pn06sk57oZBS6gdVYIm7zWT_-DDWeHG3gKSHHChjx9sT1W-YMJuVBe8wUKuYkAdo7wKd8eOENC39FA_JR2kw",
                "source": "CBS News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Caitlin Clark speaks out after Paris Olympics roster snub: \"Just gives you something to work for\""
            },
            {
                "link": "https://news.google.com/articles/CBMiXmh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3Nwb3J0cy9sYWtlcnMtbWFkZS1jb21wZWxsaW5nLWNhc2UtdGFrZS1oZWFkLWNvYWNoLWpvYi1kYW4taHVybGV5LXNheXPSAWJodHRwczovL3d3dy5mb3huZXdzLmNvbS9zcG9ydHMvbGFrZXJzLW1hZGUtY29tcGVsbGluZy1jYXNlLXRha2UtaGVhZC1jb2FjaC1qb2ItZGFuLWh1cmxleS1zYXlzLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoxnlhl_boIwa-bbi54PXRx0fX6Vbl4rs1cM3s3WIuW0WTTwHvq-RIF0KOrO2GsbtSyLAG4NPOk9o85mavgLiNHo8fe6ewZjPrHXrLwA43Ihd3HA",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Lakers made 'compelling case' to take head coach job, Dan Hurley says"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3Nwb3J0cy9kYXJyZW4td2FsbGVyLXJldmVhbHMtbmVhci1kZWF0aC1leHBlcmllbmNlLWluLWdpYW50cy1yZXRpcmVtZW50LXZpZGVvL9IBcGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3Nwb3J0cy9kYXJyZW4td2FsbGVyLXJldmVhbHMtbmVhci1kZWF0aC1leHBlcmllbmNlLWluLWdpYW50cy1yZXRpcmVtZW50LXZpZGVvL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLWwgNTfCucvSvkmBf_unuPW3CksLJjL5yyAFIqsnfs8DCmWZzvZWSFq3uFWYpB7Ms9TyE4nJuRVsnClzEGMjHO-O-sQZ1WuSvjdk9fCuND4Yzhw",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Darren Waller reveals near-death experience from last season in Giants retirement video"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmVzcG4uY29tL25iYS9zdG9yeS9fL2lkLzQwMzE3Njg4L2RvbmNpYy1wb3N0cy10cmlwbGUtZG91YmxlLXRha2VzLWJsYW1lLW1hdmVyaWNrcy1sb3Nz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSI26Uy-SELxsO6ZZYA886YRl14TIjBsndWD2-gtBsNlvSyg6RGz3DP580qcfKIVMJB3wr8y8RXjun5VjdmD9E5",
                "source": "ESPN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.espn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Doncic posts triple-double, takes blame for Mavericks' loss"
            },
            {
                "link": "https://news.google.com/articles/CBMiUmh0dHBzOi8vd3d3Lm1sYi5jb20vbmV3cy9zdGV2ZS1jb2hlbi1kaXNjdXNzZXMtc3RhdGUtb2YtbWV0cy1iZWZvcmUtdHJhZGUtZGVhZGxpbmXSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmOinnaE2x-_OY82NwS3EczTz2cSDYkpJmPEb_Sdtde2_iY52tqIEmf8zxMY6pq8eBv_NxG54VdxNdhEUzvsG",
                "source": "MLB.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.mlb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Steve Cohen discusses state of Mets before Trade Deadline"
            },
            {
                "link": "https://news.google.com/articles/CBMiTmh0dHBzOi8vd3d3LnRoZS1yYWNlLmNvbS9mb3JtdWxhLTEvd2lubmVycy1sb3NlcnMtZjEtMjAyNC1jYW5hZGlhbi1ncmFuZC1wcml4L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-X0MOVjQGJRWBvUmBRC_ebqR9CGg7byKW-Tp0g5uQpBsU5kXyvw0D3p9WWlDS51pi3EznIsa3AzBVvg_KdHvZDVTzEJ1vrl-_G4qbFvWBeHzcQ",
                "source": "The Race",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.the-race.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Winners and losers from F1's 2024 Canadian Grand Prix"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vd3d3Lm5iY3Nwb3J0cy5jb20vZ29sZi9uZXdzL3Njb3R0aWUtc2NoZWZmbGVyLWFkZHMtbWVtb3JpYWwtdG8taGlzLXJlbWFya2FibGUtdmljdG9yeS1saXN0LWluLTIwMjTSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRg1ougHctqlMF_2PH4Y05F4alBjDTjjVbci7TE2sWK4AZgGqpscQ6hwM-Da8CtRVGApNH2I5UQXjiKPKK6g3Dl",
                "source": "NBC Sports",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcsports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Scottie Scheffler adds Memorial to his remarkable victory list in 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOS9zcG9ydC90MjAtY3JpY2tldC13b3JsZC1jdXAtcGFraXN0YW4taW5kaWEtc3B0LWludGwvaW5kZXguaHRtbNIBVmh0dHBzOi8vYW1wLmNubi5jb20vY25uLzIwMjQvMDYvMDkvc3BvcnQvdDIwLWNyaWNrZXQtd29ybGQtY3VwLXBha2lzdGFuLWluZGlhLXNwdC1pbnRs?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQoskqSTxoosfToTCk20a7RuoylJMtxnyTKntorwfhu1xItGE_DaCf02lFw-wKl8GTonvgkvhLts9j9W9-Jy7KuA5dK-GELJWGz9imjcF5vnKvfQ",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Pakistan succumbs to heartbreaking defeat against archrival India in T20 Cricket World Cup"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9zcG9ydHMvMjAyNC8wNi8wOS9jYXJsb3MtYWxjYXJhei1hbGV4YW5kZXItenZlcmV2LWZyZW5jaC1vcGVuL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_lM7dusyLEJ04Sqz3_V6h1BC8zwfnkoxPcsyS-SpUGSTriAAmea1X_QhUPiP9ZBCEpoxxT9YOZNoLgeiaglEIKTjqwGT9LjGMpekxQbRTizEDug",
                "source": "The Washington Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.washingtonpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Carlos Alcaraz outlasts Alexander Zverev at French Open for third Slam title"
            },
            {
                "link": "https://news.google.com/articles/CBMifGh0dHBzOi8vd3d3LmVzcG5jcmljaW5mby5jb20vc3RvcnkvaWNjLW1lbi1zLXQyMC13b3JsZC1jdXAtMjAyNC1nYXJ5LWtpcnN0ZW4tYmVtb2Fucy1wYWtpc3Rhbi1zLXBvb3ItZGVjaXNpb24tbWFraW5nLTE0Mzc4NjnSAYkBaHR0cHM6Ly93d3cuZXNwbmNyaWNpbmZvLmNvbS9zdG9yeS9pY2MtbWVuLXMtdDIwLXdvcmxkLWN1cC0yMDI0LWdhcnkta2lyc3Rlbi1iZW1vYW5zLXBha2lzdGFuLXMtcG9vci1kZWNpc2lvbi1tYWtpbmctMTQzNzg2OT9wbGF0Zm9ybT1hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6G78gFKv2T1CNh9M8KJix8PMAvGBmy8ARARjqavmtu8kjKLwHt7dan4dG8xGMqKz_QxuuoSRuc5NkNUWKZ9r-5OxovCVzGGYJtYtTiUG1bUgTA",
                "source": "ESPNcricinfo",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.espncricinfo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kirsten bemoans Pakistan's 'poor decision-making'"
            },
            {
                "link": "https://news.google.com/articles/CBMiogFodHRwczovL3d3dy5jb3VyaWVyLWpvdXJuYWwuY29tL3N0b3J5L3Nwb3J0cy9jb2xsZWdlL2tlbnR1Y2t5LzIwMjQvMDYvMDkva2VudHVja3ktb3JlZ29uLXN0YXRlLXNjb3JlLXVwZGF0ZXMtbmNhYS1iYXNlYmFsbC10b3VybmFtZW50LXN1cGVyLXJlZ2lvbmFscy83Mzk1NjIwMDAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRC0rwSuhP0-CXgtwWzRQQn41gtYx1MnrefslOuB0LCOxHvo9bqypNa0JSKAMMdi1bwFPB-SnTmoQaaEix9SaZusVbVhiL-6vrlZ3a9qKC6-xmDLg",
                "source": "Courier Journal",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.courier-journal.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kentucky vs Oregon State score updates: NCAA super regional Game 2"
            },
            {
                "link": "https://news.google.com/articles/CBMicGh0dHBzOi8vd3d3Lm1hc3NsaXZlLmNvbS9jZWx0aWNzLzIwMjQvMDYva3Jpc3RhcHMtcG9yemluZ2lzLXNoYXJlcy1wcm9taXNpbmctaW5qdXJ5LXVwZGF0ZS1hZnRlci1lYXJseS1leGl0Lmh0bWzSAX9odHRwczovL3d3dy5tYXNzbGl2ZS5jb20vY2VsdGljcy8yMDI0LzA2L2tyaXN0YXBzLXBvcnppbmdpcy1zaGFyZXMtcHJvbWlzaW5nLWluanVyeS11cGRhdGUtYWZ0ZXItZWFybHktZXhpdC5odG1sP291dHB1dFR5cGU9YW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE2CBIF9kKmWkmvN-fSURBl_8dB9xYLTn4HsCD6b7HWdn8oYh97MVPKeEpVujOzLFB6VO8EjCE0v_g7SoYWqJogdUf1xH4PGWblPb5iQXhmpM8UQ",
                "source": "MassLive.com",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.masslive.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Kristaps Porzingis shares promising injury update after early exit"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vd3d3Lm5iY3Nwb3J0cy5jb20vbmFzY2FyL25ld3Mvd2hhdC1kcml2ZXJzLXNhaWQtYWZ0ZXItbmFzY2FyLWN1cC1yYWNlLWF0LXNvbm9tYS1yYWNld2F50gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6PxhZ7k7pcLQ7IhBwAMiTU_hmtkNslYLs0m86c8rA9NOieGMdEAtMqt1UhOXI1EMvn4hRqczGJzj0Cpar6ZI",
                "source": "NBC Sports",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcsports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "What drivers said after NASCAR Cup race at Sonoma Raceway"
            },
            {
                "link": "https://news.google.com/articles/CBMidWh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3Mvc3BvcnRzL2NoaWVmcy1yYXNoZWUtcmljZS1zYXlzLWZvY3VzLW1hdHVyZS1ncm93LWZpcnN0LXB1YmxpYy1jb21tZW50cy1oaWdoLXMtcmNuYTE1NjIzONIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNTYyMzg?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEbm4aQf3x4fAhXLdhgF0OFm7v0keyeuu5i-jhKaKzd-Q8iy5EiLcPiqENRaVrngoxCdJa4N_aT1aTqfS104F3ZH-SUX8QxN0uFmk2Vp1F0hogww",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Chiefs' Rashee Rice says his focus is to 'mature and grow' in first public comments following high-speed car crash"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LmxhdGltZXMuY29tL3Nwb3J0cy9kb2RnZXJzL3N0b3J5LzIwMjQtMDYtMDkvZG9kZ2Vycy1sb3NlLWFhcm9uLWp1ZGdlLW5ldy15b3JrLXlhbmtlZXPSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQw1XnRlGP43wXbyZraMya1ngWbsJXpvR6Zs_a5lkeVIlsbdEgNKZaM8woprgnuJJzeKvhZhlVhFUEjqV12Xtw6Ih84Yut4NMVekUUHsDZCS5-Wmw",
                "source": "Los Angeles Times",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.latimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Dodgers series vs. Yankees a showcase of talent and imperfections"
            },
            {
                "link": "https://news.google.com/articles/CBMiI2h0dHBzOi8vY2xlbXNvbnRpZ2Vycy5jb20vY3UyNDYwOTEv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSACbtydgDOqt2fOsmN619BFH5Stm0nrF633hVLJU0MqqZZx1pC-j9KqslGMW3FATDKmDe0f_DG5XSeEXVYjppU",
                "source": "Clemson Tigers",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://clemsontigers.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "No. 13 Florida Downs No. 3 Tigers 11-10 In 13 Innings To Win Clemson Super Regional"
            },
            {
                "link": "https://news.google.com/articles/CBMilwFodHRwczovL3d3dy5uYmNzcG9ydHMuY29tL25mbC9wcm9mb290YmFsbHRhbGsvcnVtb3ItbWlsbC9uZXdzL3dhZGUtcGhpbGxpcHMtbGVhZHMtYnJhaG1hcy10by11ZmwtdGl0bGUtZ2FtZS13aXRoLWEtd2luLW92ZXItdGhlLWJhdHRsZWhhd2tzLWluLXN0LWxvdWlz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKG0hxC2y2p337wANCiRhdQ3xjrW7Ybsa73sY0WN9m63O3veCQ0fNvElATw5Y4kvupIqPNuqWfS-QesC6NMWAJ",
                "source": "NBC Sports",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcsports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Wade Phillips leads Brahmas to UFL title game, with a win over the Battlehawks in St. Louis"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vMjQ3c3BvcnRzLmNvbS9jb2xsZWdlL2Zsb3JpZGEtc3RhdGUvbG9uZ2Zvcm1hcnRpY2xlL3RvcC1wZXJmb3JtZXJzLWZyb20tZmxvcmlkYS1zdGF0ZXMtZWxpdGUtY2FtcC0yMzI3MDQwMTEv0gF4aHR0cHM6Ly8yNDdzcG9ydHMuY29tL2NvbGxlZ2UvZmxvcmlkYS1zdGF0ZS9sb25nZm9ybWFydGljbGUvdG9wLXBlcmZvcm1lcnMtZnJvbS1mbG9yaWRhLXN0YXRlcy1lbGl0ZS1jYW1wLTIzMjcwNDAxMS9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTaWasI-nmr-AhhJ5AvbVSp7B-shmQjkivaJOxFyaPOADooaDr90A6mdVXCd5HgreAKo-140a7O8EYnazxZ9buZuNSW-DAy51FO-lMDxWxGOZQCdw",
                "source": "247Sports",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://247sports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Top performers from Florida State's Elite Camp"
            },
            {
                "link": "https://news.google.com/articles/CBMirgFodHRwczovL3d3dy5rbm94bmV3cy5jb20vc3Rvcnkvc3BvcnRzL2NvbGxlZ2UvdW5pdmVyc2l0eS1vZi10ZW5uZXNzZWUvb3RoZXItc3BvcnRzLzIwMjQvMDYvMDkvdGVubmVzc2VlLWJhc2ViYWxsLXdlYXRoZXItZGVsYXktZXZhbnN2aWxsZS1rbm94dmlsbGUtbmNhYS1yZWdpb25hbC83MzMwODUyOTAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSSx8go_4UEEFlbc14FQdWn2JrzOwjSv0ZzGkVwjgyhQaKWM8wkL0ZgRD5BUubQX6vECSCnmHp2bahXepLyxb_ha_n2j5ebwVbDuuDGocK9A5LEQ",
                "source": "Knoxville News Sentinel",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.knoxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tennessee baseball vs Evansville weather updates: Vols' Game 3 delayed"
            },
            {
                "link": "https://news.google.com/articles/CBMigwFodHRwczovL3d3dy51c2F0b2RheS5jb20vc3Rvcnkvc3BvcnRzL2JveGluZy8yMDI0LzA2LzA5L3J5YW4tZ2FyY2lhLWluY3JlZGlibGUtc3RyZXNzLWhvc3BpdGFsLWFycmVzdC1mZWxvbnktdmFuZGFsaXNtLzc0MDM4NzMzMDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdAjBHTo4AZGI1g71zCRG7WFhD-mYIdwqTY6Oq7KAK2oKtoMfuvo7f21W4LiFpUxQs4z1EA5wFew22jqqU1SRHyk2cFrs3EWdBWGBvtQoq0i5vCA",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ryan Garcia cites incredible stress after arrest for felony vandalism"
            },
            {
                "link": "https://news.google.com/articles/CBMihwFodHRwczovL3Nwb3J0cy55YWhvby5jb20vMjAyNC1uYmEtZmluYWxzLWpheXNvbi10YXR1bS1pcy1mb2N1c2VkLW9uLXdoYXRldmVyLWl0LXRha2VzLXRvLWhlbHAtY2VsdGljcy13aW4tbGlrZS1pdC1vci1ub3QtMDUzOTA4MTU2Lmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJnOLWmQSH-DbksrBtF67Q8vEFebuesv41CPRQ8ZCVu4XgWHaaLYdqNycypHXoE8hN8bnEIuELysF19EnqZXbHv20YGL8zuNF60fbRBElySqCObQ",
                "source": "Yahoo Sports",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://sports.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "2024 NBA Finals: Jayson Tatum is focused on 'whatever it takes' to help Celtics win, like it or not"
            },
            {
                "link": "https://news.google.com/articles/CBMia2h0dHBzOi8vd3d3LmJsb29kaG9yc2UuY29tL2hvcnNlLXJhY2luZy9hcnRpY2xlcy8yNzc0OTUvb3JvdXJrZS1zaGlmdC10by1zYXJhdG9nYS1icm91Z2h0LWVuZXJneS10by1iZWxtb2500gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbMVGFTZ0s5VMBR13lBz5FMjgNz2hulbwwIYDHxGneZtC4l00z0nuXjK9CPUb5Vxg-ExRhO8N_kPy-gZRUiD8n",
                "source": "BloodHorse.com",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloodhorse.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "O'Rourke: Shift to Saratoga Brought Energy to Belmont"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3LmVzcG4uY29tL25obC9zdG9yeS9fL2lkLzQwMzEzODc4L29pbGVycy1jb25maWRlbnQtc29sdmUtcGFudGhlcnMtc2VyZ2VpLWJvYnJvdnNredIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm7LBvsQK7DOFijYxQuWwserR6C6SqVpc6UgDU9yeuob8eP19aAeU532Pj2uhyNMs",
                "source": "ESPN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.espn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Oilers confident they can solve Panthers' Sergei Bobrovsky"
            },
            {
                "link": "https://news.google.com/articles/CBMib2h0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3Nwb3J0cy9jb250cm92ZXJzeS1lcnVwdHMtYWZ0ZXItcXVlc3Rpb25hYmxlLXVmYy1zdG9wcGFnZS10by1jYW5ub25pZXItdnMtaW1hdm92L9IBc2h0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3Nwb3J0cy9jb250cm92ZXJzeS1lcnVwdHMtYWZ0ZXItcXVlc3Rpb25hYmxlLXVmYy1zdG9wcGFnZS10by1jYW5ub25pZXItdnMtaW1hdm92L2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbOQJDeUvuHomeUC5-TysFiFYSvsRga7bv4Jchp1lLjRvlZ8J7dplUGJS_H-WtsEGzi016wyivHxwlUuufckBEl3J3QxshALlLYujrEMBDo_6MBA",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Controversy erupts after questionable UFC stoppage: 'Worst in recent memory'"
            },
            {
                "link": "https://news.google.com/articles/CBMiTmh0dHBzOi8vd3d3Lm1sYi5jb20vbmV3cy9odXJzdG9uLXdhbGRyZXAtbWFrZXMtbWFqb3ItbGVhZ3VlLWRlYnV0LXZzLW5hdGlvbmFsc9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1JDXdp-0kUK-Q0LqUNXjOgTW-yJBy-nuoOdhShoiKLHFdqEYXWGUxDCPyZXAaJiggpgcobmlC2jl9ebFHwxOY",
                "source": "MLB.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.mlb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Hurston Waldrep makes Major League debut vs. Nationals"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3Lm1sc3NvY2Nlci5jb20vbmV3cy9jYW5hZGEtYmF0dGxlLWZyYW5jZS10by1kcmF3LWluLWNvcGEtYW1lcmljYS10dW5lLXVw0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSH99D_vlYkeyfT9ASHxrWR0ZGvMdD62ZnTzj0rcQvqNYrSy7NeSfVTr7OMXPkFPCVzmFC7-ydEpJdmuw_20xCi",
                "source": "MLSsoccer.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.mlssoccer.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Canada battle France to impressive draw in Copa América tune-up | MLSSoccer.com"
            },
            {
                "link": "https://news.google.com/articles/CBMijwFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25iYS9uZXdzL25iYS1maW5hbHMtaWYtbWF2ZXJpY2tzLWNhbnQta2VlcC1qYXlzb24tdGF0dW0tYW5kLWpheWxlbi1icm93bi1pbi1mcm9udC1vZi10aGVtLWNlbHRpY3MtYXJlLXNpdHRpbmctcHJldHR5L9IBkwFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25iYS9uZXdzL25iYS1maW5hbHMtaWYtbWF2ZXJpY2tzLWNhbnQta2VlcC1qYXlzb24tdGF0dW0tYW5kLWpheWxlbi1icm93bi1pbi1mcm9udC1vZi10aGVtLWNlbHRpY3MtYXJlLXNpdHRpbmctcHJldHR5L2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNldRiY07AtTPQcLXqgawFZY3MjL97n0F6mFMBLxUbP_WnTz5wbUZAW9tSDX9bryllfEwsAroJn0SC_0YCIy8y-UUgh6NrZD9EA_jVPSxGU9QdPg",
                "source": "CBS Sports",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cbssports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NBA Finals: If Mavericks can't keep Jayson Tatum and Jaylen Brown in front of them, Celtics are sitting pretty"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vdGhlY2xlbXNvbmluc2lkZXIuY29tLzIwMjQvMDYvMDkvdW1waXJlcy1sb3NlLWNvbnRyb2wtYXQtZW5kLW9mLWNsZW1zb24tZmxvcmlkYS1nYW1lL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRaqUdtn_tiszb8iCp8JfSu7K-SQoHJjlXZS_CP_8ACs3XT8SKGeXbU-hukA1T9f2QSYy2OEFfzjcrtfgod4GZAaLzHB4NAzdq7t97cEunWEgJg",
                "source": "The Clemson Insider",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://theclemsoninsider.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Umpires Lose Control at end of Clemson-Florida Game"
            },
            {
                "link": "https://news.google.com/articles/CBMicGh0dHBzOi8vd3d3Lm5iY3Nwb3J0c2JheWFyZWEuY29tL21sYi9zYW4tZnJhbmNpc2NvLWdpYW50cy9rZWF0b24td2lubi1zdHJ1Z2dsZXMtc2VhcmNoLXBpdGNoaW5nLWFuc3dlcnMvMTc0MjkwMC_SAXZodHRwczovL3d3dy5uYmNzcG9ydHNiYXlhcmVhLmNvbS9tbGIvc2FuLWZyYW5jaXNjby1naWFudHMva2VhdG9uLXdpbm4tc3RydWdnbGVzLXNlYXJjaC1waXRjaGluZy1hbnN3ZXJzLzE3NDI5MDAvP2FtcD0x?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0XT0bDOvG8sUkGLFgFCXXzoY6YWFchHuEO5qzyLNaeVYYDDwdg7IBcRwElpDsoCyjjeN_8D0BrGRM5bfsP64WvwmOmWjMQmBYYwppN4zRSES-cw",
                "source": "NBC Sports Bay Area",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nbcsportsbayarea.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Giants searching for pitching answers as Winn's struggles continue"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd3d3Lm5iY3Nwb3J0cy5jb20vb2x5bXBpY3MvbmV3cy9zeWRuZXktbWNsYXVnaGxpbi1sZXZyb25lLTQwMC1tZXRlcnMtbmV3LXlvcmstY2l0eS1ncmFuZC1wcml40gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBvFcylfC6iNpD4ZopjFfAxlp4IcG_h7OCSr3NY_7tNFoo_Vwkef13F4ZDvBQx4KS_9Vb5lfEUM8ojI6Vcg0yX",
                "source": "NBC Sports",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcsports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Sydney McLaughlin-Levrone runs third-fastest 400m in U.S. history at NYC Grand Prix"
            },
            {
                "link": "https://news.google.com/articles/CBMia2h0dHBzOi8vc3BvcnRzLm15bm9ydGh3ZXN0LmNvbS8xNzc2ODA3L3NlYXR0bGUtbWFyaW5lcnMtdHktZnJhbmNlLWluanVyZWQtbGlzdC1hbWlkLWZsdXJyeS1vZi1yb3N0ZXItbW92ZXMv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8W_-7VMMNPM6i5ILR7XOy-O7_M81qHV4G2WIq5pwD-rbU-6dX-OveWrrBcp9X3jq-ecoeZOHN-LOjgNFK7Bn_I4jc5n4Q1uioz_7cwSfCx_IvvQ",
                "source": "Seattle Sports",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://sports.mynorthwest.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Seattle Mariners place Ty France on IL amid flurry of roster moves"
            },
            {
                "link": "https://news.google.com/articles/CBMipgFodHRwczovL3d3dy5iZWFjb25qb3VybmFsLmNvbS9zdG9yeS9zcG9ydHMvaGlnaC1zY2hvb2wvMjAyNC8wNi8wOS9vaHNhYS1zdGF0ZS1iYXNlYmFsbC1zY29yZS10d2luc2J1cmctbGl2ZS11cGRhdGVzLXZzLW1hc29uLWhpZ2gtc2Nob29sLWNhbmFsLXBhcmstYWtyb24vNzQwMjEwMjEwMDcv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_T_jxnjxCfRfWGV0jUDmD9XafkHuzr9N1kQEeV-Ajk3GHsgq4fbGliXyuBVPCRMfdmYpHgS83sHQihN9dLqBrq0jr8Uo7O-3ffJrKjHXNE2s87A",
                "source": "Akron Beacon Journal",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.beaconjournal.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ohio high school baseball score updates | Mason beats Twinsburg in OHSAA state finals"
            },
            {
                "link": "https://news.google.com/articles/CBMiUWh0dHBzOi8vc3BvcnRzLnlhaG9vLmNvbS9ncmVnZy1iZXJoYWx0ZXJzLXVzbW50LXNlYXQtaXMtcHJlaGVhdGluZy0xNjIzMTg4ODkuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvWwhXLF9q8ns8dj9kzXC6BJeY8NocQyfIq8vJmg6c6CGXhowd8okTnRVKbpqidKofviK-rjl1fhpAk5rsnAubw8XM5ClgAQ4Pf8CjuJLb_bAIw",
                "source": "Yahoo Sports",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://sports.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Gregg Berhalter's USMNT seat is preheating"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vd3d3Lm1sYi5jb20vbmV3cy9nZXJyaXQtY29sZS1tYWtlcy1zZWNvbmQtcmVoYWItc3RhcnQtZm9yLWRvdWJsZS1hLXNvbWVyc2V00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4eozU2PhWNNFVsQ5n34QHLq-4Z8-KymOAJbqEIFuyUDk-ySzk688pCA_kF3oqWcTUaTokH33vXC47M8clvq_v",
                "source": "MLB.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.mlb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Gerrit Cole makes second rehab start for Double-A Somerset"
            },
            {
                "link": "https://news.google.com/articles/CBMiiAFodHRwczovL3d3dy5uYmNzcG9ydHNwaGlsYWRlbHBoaWEuY29tL21sYi9waGlsYWRlbHBoaWEtcGhpbGxpZXMvcGhpbGxpZXMtbmV3cy9qb3NlLWFsdmFyYWRvLXBoaWxsaWVzLWxvc2UtbWV0cy1sb25kb24tZGF2aWQtZGFobC81ODk2MjAv0gGOAWh0dHBzOi8vd3d3Lm5iY3Nwb3J0c3BoaWxhZGVscGhpYS5jb20vbWxiL3BoaWxhZGVscGhpYS1waGlsbGllcy9waGlsbGllcy1uZXdzL2pvc2UtYWx2YXJhZG8tcGhpbGxpZXMtbG9zZS1tZXRzLWxvbmRvbi1kYXZpZC1kYWhsLzU4OTYyMC8_YW1wPTE?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnQEHDKF9on-ldJLTmCJhXOnHxl2OEBip0nbs6YPPw0RKFbmDoGyTw4A8Rka-EKSjI64BGumabOIRcf1Y_cIhO7f5GrgeaW7cuY-6uQKK2yfEY_Q",
                "source": "NBC Sports Philadelphia",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.nbcsportsphiladelphia.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Alvarado wilder than he's been in years as Phillies leave London with a loss"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vd3d3LmVzcG4uY29tL3duYmEvc3RvcnkvXy9pZC80MDMxNTAxMi9saWJlcnR5LWNsaW5jaC1ob21lY291cnQtY29tbWlzc2lvbmVyLWN1cC10aXRsZS1nYW1l0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGqED9C4f0jau1o_8H8aVn4E-m4fbxRpir0_t9ySAeJ3BtLG9OuIXmITjwYGt3Q3U",
                "source": "ESPN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.espn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Liberty clinch home court for Commissioner's Cup title game"
            },
            {
                "link": "https://news.google.com/articles/CBMiWmh0dHBzOi8vd3d3Lm1sYi5jb20vbmV3cy9jaGFzZS11dGxleS1icnljZS1oYXJwZXItam9pbi1hY3Rvci1mb3ItbG9uZG9uLXNlcmllcy1maXJzdC1waXRjaNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9FSnNhaRiRxMjrlkxXn-ZKFB_bAcTOVrfnqutuvqTvHPhiyjqxuL3T01D0aSWP-0b3ATDrCPZ8KdrQpHn7JfI",
                "source": "MLB.com",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.mlb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Chase Utley, Bryce Harper join actor for London Series first pitch"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vcmFjZXIuY29tLzIwMjQvMDYvMDkvcGVuc2tlLXBlcmZlY3QtcG93ZXItZW5kcy13aW5sZXNzLWRyb3VnaHQtYXQtcm9hZC1hbWVyaWNhL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5stmSy0HuXomuXghFqjv3kZYjr5YDbrOgcuYSMKkzZmkb26_m1NKEWTVHWL_jfu1LSrzBgy95o08VK9TsukxEwtPDQpYVjbk-9JKymaHzB1oPeQ",
                "source": "RACER",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://racer.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Penske Perfect Power ends winless drought at Road America"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3LnRydWVibHVlbGEuY29tLzIwMjQvNi85LzI0MTc0NTEzL3R5bGVyLWdsYXNub3ctbHVpcy1naWwtZG9kZ2Vycy15YW5rZWVzLWVzcG7SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlAqd-Sx4SEm2Y4ErjMfL2rGfZB-_recvjHg36Nxxc_HBiKKg7DdlPdOQBS8sFB-27b-8HpqSeVLtpi5EEPdlBDSiteizL6rjNVJSHNNR_3_6E2g",
                "source": "True Blue LA",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.truebluela.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tyler Glasnow & Luis Gil, a fantastic pitching matchup on Sunday"
            },
            {
                "link": "https://news.google.com/articles/CBMisAFodHRwczovL3d3dy5wZ2F0b3VyLmNvbS9hcnRpY2xlL25ld3MvYmV0dGluZy1kZnMvMjAyNC8wNi8wOS9wb2ludHMtcGF5b3V0cy1zY290dGllLXNjaGVmZmxlci10aGUtbWVtb3JpYWwtdG91cm5hbWVudC1wcmVzZW50ZWQtYnktd29ya2RheS03MDAtZmVkZXhjdXAtcG9pbnRzLW11aXJmaWVsZC12aWxsYWdlMdIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNwXnY1nGT9oJKNdXC6kY6KqNvK1LvfFf_QeZdM_pmo4Z28xIVTRQCvUrgoFlgS4",
                "source": "PGA TOUR",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.pgatour.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Points & Payouts: Scottie Scheffler takes home $4M, 700 FedExCup points at the Memorial Tournament presented by Workday - PGA TOUR"
            },
            {
                "link": "https://news.google.com/articles/CBMigAFodHRwczovL2F1LnNwb3J0cy55YWhvby5jb20vaWdhLXN3aWF0ZWstc3R1bnMtd2l0aC1ydXRobGVzcy1hY3QtaW4tZnJlbmNoLW9wZW4tZmluYWwtYXMtcmFmYS1uYWRhbC1kZXRhaWwtZW1lcmdlcy0wMzI1MDY1NjIuaHRtbNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPG8cEzkvd1Bw9laitOCBERjaD0Jlsmt4ecJbwYPab4zAJ1U_RuUfaT686ZbD_RtMH1NNBxZXSj40FEvPJVSLN_LB8zOSXXGJ1NpI6STu8INU7g",
                "source": "Yahoo Sport Australia",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://au.sports.yahoo.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Rafa Nadal detail emerges amid 'ruthless' Iga Swiatek act in French Open final"
            },
            {
                "link": "https://news.google.com/articles/CBMiTmh0dHBzOi8vc255LnR2L2FydGljbGVzL21ldHMtdnMtcGhpbGxpZXMtaW4tbG9uZG9uLWhvdy10by13YXRjaC1vbi1qdW5lLTktMjAyNNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtT4h4ZcElU-aUjXkoHsyLPHjg-Unw2tBvNLPF2R5Oli_XrWayi0vULfWET0gRrjih_7cRtvA63yB4AD-HXVN0",
                "source": "sny.tv",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://sny.tv&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Mets vs. Phillies in London: How to watch on June 9, 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMiXGh0dHBzOi8vZ29oZWVscy5jb20vbmV3cy8yMDI0LzYvOS9vbWFoYS1ib3VuZC1iYXNlYmFsbC1hZHZhbmNlcy10by0xMnRoLWNvbGxlZ2Utd29ybGQtc2VyaWVz0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0uyS1turxjQdsSlsxXpAqxP_TLTah6fNJlFJu20W0XBDsjOiwavNDRu9hmY1Z3SQ",
                "source": "UNC Athletics",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://goheels.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "OMAHA BOUND! Baseball Advances To 12th College World Series"
            },
            {
                "link": "https://news.google.com/articles/CBMiU2h0dHBzOi8vcmFjZXIuY29tLzIwMjQvMDYvMDkvcm9hZC1hbWVyaWNhLWFncmVlcy1tdWx0aS15ZWFyLWV4dGVuc2lvbi13aXRoLWluZHljYXIv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1gpMSJ0vGu7T6z-NAUNvU8epLsM0wsabtHNLb0-AOhKHeX1T44kfXrA_jiKaOMr6j3YFzfBCIjZG0kPpXYyv8b9Zmekpoyat8cJ0dIJ6qnMrJPA",
                "source": "RACER",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://racer.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Road America agrees multi-year extension with IndyCar"
            },
            {
                "link": "https://news.google.com/articles/CBMigAFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25iYS9uZXdzL2NoZXQtd2Fsa2VyLWRpZXMtYXQtODQtYmFza2V0YmFsbC1oYWxsLW9mLWZhbWVyLXdhcy1zZXZlbi10aW1lLW5iYS1hbGwtc3Rhci13aXRoLTc2ZXJzLWJ1bGxzL9IBhAFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25iYS9uZXdzL2NoZXQtd2Fsa2VyLWRpZXMtYXQtODQtYmFza2V0YmFsbC1oYWxsLW9mLWZhbWVyLXdhcy1zZXZlbi10aW1lLW5iYS1hbGwtc3Rhci13aXRoLTc2ZXJzLWJ1bGxzL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRd9IbNoROD3mIK1eKQqaQjAfmmB0gUdw2Foe-CJSJB_Xzsjylu0DU6TegpPJG-sVmU2qI-mRDOU-zo6ja9lV4r-P82cpPqgbyHqJasEMjIzVmGg",
                "source": "CBS Sports",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cbssports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Chet Walker dies at 84: Basketball Hall of Famer was seven-time NBA All-Star with 76ers, Bulls"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vd3d3LmZveHNwb3J0cy5jb20vc3Rvcmllcy9uYmEvamF5bGVuLWJyb3duLWJvc3Rvbi1jZWx0aWNzLWFnYWluc3Qtd29ybGQtY3JpdGljaXNtLW1hZGUtbWUtd2hvLWktYW3SAWpodHRwczovL2FtcC5mb3hzcG9ydHMuY29tL3N0b3JpZXMvbmJhL2pheWxlbi1icm93bi1ib3N0b24tY2VsdGljcy1hZ2FpbnN0LXdvcmxkLWNyaXRpY2lzbS1tYWRlLW1lLXdoby1pLWFt?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2RfKawBBb-lyn4lpEfkj2N0gPZBnyWAzT9WRAqUTIw_GYrJ9YhCpMXIHifoLbMz3bCcrNJELBhTvH3srj1iPFq-oS07VM1DAtuLaF7jI9hS_eWw",
                "source": "FOX Sports",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxsports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Jaylen Brown against the world: Criticism 'made me who I am'"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvY29jby1nYXVmZi13aW5zLWZpcnN0LWdyYW5kLXNsYW0tZG91Ymxlcy10aXRsZS1mcmVuY2gtb3Blbi_SAVxodHRwczovL3d3dy5jYnNuZXdzLmNvbS9hbXAvbmV3cy9jb2NvLWdhdWZmLXdpbnMtZmlyc3QtZ3JhbmQtc2xhbS1kb3VibGVzLXRpdGxlLWZyZW5jaC1vcGVuLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kGkkJSX0ZECkjx6IVBLYWQOeYTsWEWnV8GqKbAklMm0oWj7ePpMYWMv-I-lvDMM5KcOzrUgHB13tCOjbQTlJ_deDz6pPI8i4H42tVrvlKf4TJA",
                "source": "CBS News",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Coco Gauff wins first Grand Slam doubles title at the French Open"
            },
            {
                "link": "https://news.google.com/articles/CBMiT2h0dHBzOi8vd3d3LmNic25ld3MuY29tL2Jvc3Rvbi9uZXdzL3NhdmFubmFoLWJhbmFuYXMtZmVud2F5LXBhcmstcGFydHktYW5pbWFscy_SAVNodHRwczovL3d3dy5jYnNuZXdzLmNvbS9hbXAvYm9zdG9uL25ld3Mvc2F2YW5uYWgtYmFuYW5hcy1mZW53YXktcGFyay1wYXJ0eS1hbmltYWxzLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5B1BAgFPu6_dZZ49KGYsZF_c58WJwpk9kUR3SfwcceNxX8S1NJ9HucVgNs34seXs_iW6LYflInTZvZ5eRkRBS8Nr-ZhTnl8ga-07f4tt1sbfqA",
                "source": "CBS Boston",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Savannah Bananas players say \"it's unreal\" to play sold out game at Fenway Park"
            },
            {
                "link": "https://news.google.com/articles/CBMifGh0dHBzOi8vd3d3LmNic3Nwb3J0cy5jb20vbmJhL25ld3MvbHVrYS1kb25jaWMtaW5qdXJ5LW5ld3MtbWF2cy1zdGFyLXdpbGwtcGxheS10aHJvdWdoLWNoZXN0LWNvbnR1c2lvbi1pbi1uYmEtZmluYWxzLWdhbWUtMi_SAYABaHR0cHM6Ly93d3cuY2Jzc3BvcnRzLmNvbS9uYmEvbmV3cy9sdWthLWRvbmNpYy1pbmp1cnktbmV3cy1tYXZzLXN0YXItd2lsbC1wbGF5LXRocm91Z2gtY2hlc3QtY29udHVzaW9uLWluLW5iYS1maW5hbHMtZ2FtZS0yL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6yXqvI4EHTA4tWamCN-wrrq-Tu_Ag-3Zw5BjY4A3w0Q1_KivuWU1CUz9VxiBIr_CFPEOU82GVRCL8_5rIGdTdq5yACgM7CD7WNw6JU2L0JUNNNA",
                "source": "CBS Sports",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cbssports.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Luka Doncic injury news: Mavs star will play through chest contusion in NBA Finals Game 2"
            },
            {
                "link": "https://news.google.com/articles/CBMifmh0dHBzOi8vd3d3LnNpLmNvbS9mYW5uYXRpb24vbmJhL2Zhc3RicmVhay9uYmEtY2hhbXBpb24tY2FsbHMtb3V0LWt5cmllLWlydmluZy1rZW5kcmljay1wZXJraW5zLWdhbWUtMi1tYXZzLWNlbHRpY3MtbmJhLWZpbmFsc9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0ouHC3IcE7HpXvEAp8u1A0tUbDw6kBmI-rQ2-RZ5EOOlgKAXJG0463uAayRazvP_ZbgqPswybUJdtvNI88dP30zvN6KCFuluV3aLgzobvEcP-Og",
                "source": "Sports Illustrated",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.si.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NBA Champion Calls Out Kyrie Irving During Mavs-Celtics Game"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3LndjdmIuY29tL2FydGljbGUvY2VsZWJyaXRpZXMtYm9zdG9uLWNlbHRpY3MtMjAyNC1uYmEtZmluYWxzLWdhbWUtMi82MTA1MTI0MNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwY6ZLuqMs7hvPkdTnsk1QZIGwZOI_TjWATW-wo4Kt7t4DFJNooTRqwzxC2gqqYQgEgFk4w6j5JbaIvmRUFTdr",
                "source": "WCVB Boston",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.wcvb.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Celtics legend Pierce among celebrities at Game 2 of NBA Finals"
            },
            {
                "link": "https://news.google.com/articles/CBMirAFodHRwczovL3d3dy5vZGRzY2hlY2tlci5jb20vdXMvcGlja3MtcGFybGF5cy9iYXNrZXRiYWxsL25iYS8yMDI0MDYwOS1ib3N0b24tY2VsdGljcy12cy1kYWxsYXMtbWF2ZXJpY2tzLXByZWRpY3Rpb24tcGljay1hZ2FpbnN0LXRoZS1zcHJlYWQtbGF0ZXN0LW9kZHMtZm9yLW5iYS1maW5hbHMtZ2FtZS0y0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGKBUK5GpcYK3qAj_ZupVGeImvFutmf18MdU7W9bGG87lblMB35lDlfhKe2EooDZoJCcLZhi5kDe2Ncre_7ujASEkdcRAUsssRFY-5_blo_HMBPw",
                "source": "OddsChecker",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.oddschecker.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Boston Celtics vs. Dallas Mavericks Prediction, Pick Against the Spread, Latest Odds for NBA Finals Game 2"
            },
            {
                "link": "https://news.google.com/articles/CBMiiQFodHRwczovL3d3dy5ib3N0b25nbG9iZS5jb20vMjAyNC8wNi8wOS9zcG9ydHMvaXRzLWRlcnJpY2std2hpdGUtZGVsaXZlcmluZy15ZXQtYWdhaW4tY2x1dGNoLW90aGVyLW9ic2VydmF0aW9ucy1ib3N0b25zLTEwNS05OC13aW4tZ2FtZS0yL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFqMCWrmrdLYsF7rbZ7OBAQjPqNZz4Nf6_hfB0LI-FemsPuiSr-h9ARJ_Cn8tk1o",
                "source": "The Boston Globe",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.bostonglobe.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Celtics-Mavericks takeaways: Derrick White, Jrue Holiday deliver"
            }
        ],
        "Technology": [
            {
                "link": "https://news.google.com/articles/CBMidmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTA2LTEwL2FwcGxlLXd3ZGMtZXZlbnQtd2lsbC1zaG93LXdoZXRoZXItaXQtY2FuLWJlLWEtZm9yY2UtaW4tYWktaW5kdXN0cnnSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuCBdA07d3RC_5Nys7QLo5Zcpt_i7OZwHySiJSuQEWTXeO86QVU3bhTD-cWr46ODcLCBwYq3kDTpxCRpeRk5LW_hQTbAgawyp592HDNcbGzfr-nA",
                "source": "Bloomberg",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bloomberg.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Apple WWDC Event Will Show Whether It Can Be a Force in AI Industry"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvbWljcm9zb2Z0LXVudmVpbHMtYWxsLWRpZ2l0YWwteGJveC1jb25zb2xlcy1kb29tLXRpdGxlLWdhbWVzLXNob3djYXNlLTIwMjQtMDYtMDkv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2fsg6jWdGaCVZVFlACnfABIKIuIz6vAoLUL1BRc_dTrt0Luk5qJx95URC54w0GcWTJTlBy_dCoITWvJnXZd6S18v7AQ-xDBz676ScjwKEAOe9fA",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Microsoft unveils all-digital Xbox consoles, 'Doom' title at Games Showcase"
            },
            {
                "link": "https://news.google.com/articles/CBMifGh0dHBzOi8vd3d3LmVuZ2FkZ2V0LmNvbS9oYWxmd2F5LXRvLWRhd24taXMtYS1zdXJwcmlzaW5nbHktdGVuc2UtYml0ZS1zaXplZC1zdXJ2aXZhbC1ob3Jyb3ItZ2FtZS1mb3ItcGxheWRhdGUtMjIwMDMzODk5Lmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYf2vmcVILbmBD2ckUTJ1yEXV3cbCpVe-Zzoqt8msZXi4Lfszp2QD8h1oz61YoWsbZacRPmFohjrUhjGW0uGFqzRcS970xkkJCkHGlxP897QdtPw",
                "source": "Engadget",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.engadget.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Halfway to Dawn is a surprisingly tense, bite-sized survival horror game for Playdate"
            },
            {
                "link": "https://news.google.com/articles/CBMif2h0dHBzOi8vd3d3LnRvbXNndWlkZS5jb20vY29tcHV0aW5nL3dpbmRvd3Mtb3BlcmF0aW5nLXN5c3RlbXMvd2luZG93cy1yZWNhbGwtaG93LWl0LXdvcmtzLWhvdy10by10dXJuLWl0LW9mZi1hbmQtd2h5LXlvdS1zaG91bGTSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9gpPGTaFAOG7o-1C6ZxN6EQVepXoWM_bLXRYMfgUKUSAdPFORD-iXe61XJiODJf-ckKFxfi_euzrVgOPXX8v164F-CsGTawGikaH926-TAqVK8A",
                "source": "Tom's Guide",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.tomsguide.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Windows Recall: How it works, how to turn it off and why you should"
            },
            {
                "link": "https://news.google.com/articles/CBMiY2h0dHBzOi8vd3d3Lm5pbnRlbmRvbGlmZS5jb20vbmV3cy8yMDI0LzA2L2Jsb2NrLW1lZXRzLWJsb2NrLWluLW5ldy1taW5lY3JhZnQteC10ZXRyaXMtY29sbGFib3JhdGlvbtIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHx8Ot8Fl4qgeY4uLxagOZtRobLX6Pu_EwQzhPjgPXwyCc-0kGZxDDf0PoQcUFc0yfjP2TbCA1CRgs6OVtsGvWb2YopqvWRkmwg5Z",
                "source": "Nintendo Life",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nintendolife.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Block Meets Block In New Minecraft X Tetris Collaboration"
            },
            {
                "link": "https://news.google.com/articles/CBMiVGh0dHBzOi8vd3d3LnRoZXZlcmdlLmNvbS8yMDI0LzYvOS8yNDE2OTAxNi9hcHBsZS1pcGFkLXByby1pcGFkb3MtMTgtd3dkYy1haS1mZWF0dXJlc9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhtTznMNm972KvjVNiMJ6kPELU7iSxLQmV5GEMuylu6LIvrG4l2_zS3PWkPNiUqjlOLneTJnOKUjzxHFXFIZFpYVEgOX1x96SvaRFbGwl1-r7JHA",
                "source": "The Verge",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.theverge.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "At WWDC 2024, Apple needs to give the iPad better software."
            },
            {
                "link": "https://news.google.com/articles/CBMitwFodHRwczovL3d3dy5nYW1lc3JhZGFyLmNvbS9nYW1lcy9mcHMveGJveC1vd25zLXRoZS1kb29tLXRoZS1kYXJrLWFnZXMtc3R1ZGlvLWJ1dC1waGlsLXNwZW5jZXItc2F5cy10aGUtZnBzLWlzLWNvbWluZy10by1wczUtYmVjYXVzZS1kb29tLWlzLWEtZnJhbmNoaXNlLXRoYXQtZXZlcnlvbmUtZGVzZXJ2ZXMtdG8tcGxheS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlQ9Y4mr_SYCyDvtJd9Jtj2BX_edTu4W4XygNloVOtV0i9U2TNmYEUva3-dGdvbb0IJH_17YKbXc8Ir1owA8hw9pE4",
                "source": "Gamesradar",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.gamesradar.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Xbox owns the Doom: The Dark Ages studio, but Phil Spencer says the FPS is coming to PS5 because Doom is \"a franchise that everyone deserves to play\""
            },
            {
                "link": "https://news.google.com/articles/CBMikgFodHRwczovL3d3dy5yb2NrcGFwZXJzaG90Z3VuLmNvbS9kaWFibG8tNC12ZXNzZWwtb2YtaGF0cmVkLWdldHMtb2N0b2Jlci1yZWxlYXNlLWRhdGUtcGx1cy10cmFpbGVyLXdoaWNoLWktcmVmdXNlLXRvLXdhdGNoLWJlY2F1c2UtaXQtc291bmRzLWhvcnJpZNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq2ughUaHbSOKQwV-auYkxY1Ey2QbO7p35ZhjoQAICxEcs8KLqC9n3qNS0LpZHgVyn3GG_V0as97QXi8i42zRB0jtFHZZK3n3r80s7RSdaEouxw",
                "source": "Rock Paper Shotgun",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.rockpapershotgun.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Diablo 4 Vessel Of Hatred gets October release date plus trailer which I refuse to watch because it sounds horrid"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvcGF1bHRhc3NpLzIwMjQvMDYvMDkvc3RhcmZpZWxkLWRpYWJsby00LWV4cGFuc2lvbnMtYm90aC1sb29rLWV4Y2VsbGVudC1pbi1uZXctdHJhaWxlcnMv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNgaLpBzC0hIRWFfjrqYUKZmp-ojjz6SgAtGvAC4U2wkT_jGW18_wAdsvSnKs66gf8jH9zboDlKT93zOmpA9f6_RoMXyi68a9nqA7jRy2YEKSXA",
                "source": "Forbes",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.forbes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Starfield,' 'Diablo 4' Expansions Both Look Excellent In New Trailers"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LnRoZXZlcmdlLmNvbS8yNDE3MzU4Ny9mYWxsb3V0LTc2LXNreWxpbmUtdmFsbGV5LWV4cGFuc2lvbi10cmFpbGVyLWRhdGUtcGxheWFibGUtZ2hvdWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjbUJ4ZrQQb4WaxBxnUS2shU-xUVzu96lUu5TAM9sZDZroxzTAAEsyYTzDDAY8j0p4BqcAp8zxEm2Khz6u2TxLAwgTf5lvHC9l3mmYoe3YUErwZw",
                "source": "The Verge",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.theverge.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Fallout 76's first map expansion is coming soon — and next year, you can play as a ghoul"
            },
            {
                "link": "https://news.google.com/articles/CBMidmh0dHBzOi8vOXRvNW1hYy5jb20vMjAyNC8wNi8wOS9yZXBvcnQtaW9zLTE4LXdpbGwtdGludC1hcHAtaWNvbnMtaW4tZGFyay1tb2RlLWFsbG93LXVzZXJzLXRvLWxvY2stYXBwcy1iZWhpbmQtZmFjZS1pZC_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5dhs8C_6XhjZBV8Nw5VJYHRBp94NiqIXY0WCLz4hFDDunATILoSfTIW0t3H3zmx11J7xddeA3kESPFfEEB-ger2vN_3a2mr4Zxd32cy3mxvTaQ",
                "source": "9to5Mac",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://9to5mac.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Report: iOS 18 will tint iPhone app icons in dark mode, allow users to lock apps behind Face ID"
            },
            {
                "link": "https://news.google.com/articles/CBMicGh0dHBzOi8vd3d3LmJsZWVwaW5nY29tcHV0ZXIuY29tL25ld3Mvc2VjdXJpdHkvbWFsaWNpb3VzLXZzY29kZS1leHRlbnNpb25zLXdpdGgtbWlsbGlvbnMtb2YtaW5zdGFsbHMtZGlzY292ZXJlZC_SAXRodHRwczovL3d3dy5ibGVlcGluZ2NvbXB1dGVyLmNvbS9uZXdzL3NlY3VyaXR5L21hbGljaW91cy12c2NvZGUtZXh0ZW5zaW9ucy13aXRoLW1pbGxpb25zLW9mLWluc3RhbGxzLWRpc2NvdmVyZWQvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaktyBI_a7fcWU4GIWeUwC9qlrHdEiLX-xcsyQgQkiXWtT43Er_jcj33LfrwXts8g_m9syOxJufFlRRZX1erfvxNzp57FkEf6J1FE0x1GKJyopxQ",
                "source": "BleepingComputer",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.bleepingcomputer.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Malicious VSCode extensions with millions of installs discovered"
            },
            {
                "link": "https://news.google.com/articles/CBMiemh0dHBzOi8vd3d3LmdhbWVpbmZvcm1lci5jb20veGJveC1zaG93Y2FzZS8yMDI0LzA2LzA5L2xhdGVzdC1tZXRhbC1nZWFyLXNvbGlkLWRlbHRhLXNuYWtlLWVhdGVyLXRyYWlsZXItc2hvd3MtYWxsLWdhbWVwbGF50gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYi2FThK3NzVhatoIou8wTo-2HLhotOy2zolgiNXuTVwEaOiICwN-yT1DV1pPFXdhIuh1x-_9YudbCproTQbcE",
                "source": "Game Informer",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.gameinformer.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Latest Metal Gear Solid Delta: Snake Eater Trailer Shows All Gameplay"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3LnB1cmV4Ym94LmNvbS9mZWF0dXJlcy9wb2xsLWhvdy13b3VsZC15b3UtZ3JhZGUtdGhlLXhib3gtZ2FtZXMtc2hvd2Nhc2UtMjAyNNIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkgda27hyGMlPO_BFMN9cQjGbQINE8Zx3oY86MP3vOuuzocwEt_AKLrlBZZlXVp8DWnu15L3wnRxwtgs3EtpvHoOfKiyDb2D7BPcBm5phhtp1maw",
                "source": "Pure Xbox",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.purexbox.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Poll: How Would You Grade The Xbox Games Showcase 2024?"
            }
        ],
        "US": [
            {
                "link": "https://news.google.com/articles/CBMia2h0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzEwL3VzLW5ld3Mvcm9kZW8tYnVsbC1wYXJ0eS1idXMtZXNjYXBlcy1zaXN0ZXJzLXJvZGVvLXNob3ctaW4tb3JlZ29uLWluanVyaW5nLTMv0gFvaHR0cHM6Ly9ueXBvc3QuY29tLzIwMjQvMDYvMTAvdXMtbmV3cy9yb2Rlby1idWxsLXBhcnR5LWJ1cy1lc2NhcGVzLXNpc3RlcnMtcm9kZW8tc2hvdy1pbi1vcmVnb24taW5qdXJpbmctMy9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4SrWG_9COrm8JFHmpY86rwHEWnq9jjEJy1-4Ps5D9PFjTNMG9W5kzSIr3URjtu9NY_DrD3cQvWQVjz2ctfJJPQqFf2RsUIEObr3kypVk-4NBrtw",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Rodeo bull 'Party Bus' escapes Oregon arena, tosses woman in red as crowd runs for their lives: video"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzL25hdGlvbi8yMDI0LzA2LzA5L3RldG9uLXBhc3Mtcm9hZC1jb2xsYXBzZS83NDAzNTUyOTAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVUzqJVLx90MkWqPdrXdlF-oHCEgj225GYMPAox3c3Cw6ZtNpj3BNNT_0NLpM8AIZPgJUr7a5unB_nUsVl3bXZQCBL1kW22eiJmkLK",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Teton pass mudslide: Officials unsure when it will reopen"
            },
            {
                "link": "https://news.google.com/articles/CBMiggFodHRwczovL3d3dy5teXBhbmhhbmRsZS5jb20vbmV3cy9sb2NhbC1uZXdzL3dhbHRvbi1jb3VudHkvdHdvLWFsYWJhbWEtdGVlbnMtb25lLXdvbWFuLXJlY292ZXJpbmctYWZ0ZXItd2FsdG9uLWNvdW50eS1zaGFyay1hdHRhY2sv0gGGAWh0dHBzOi8vd3d3Lm15cGFuaGFuZGxlLmNvbS9uZXdzL2xvY2FsLW5ld3Mvd2FsdG9uLWNvdW50eS90d28tYWxhYmFtYS10ZWVucy1vbmUtd29tYW4tcmVjb3ZlcmluZy1hZnRlci13YWx0b24tY291bnR5LXNoYXJrLWF0dGFjay9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2jo7JxtVtdeIHf0_uq8DVLKt7nk1ROPHtnDEj8KNmNIHRUWZ-CVs-ATjiBBgkk5FoxCzlVFDZvSna53K2Jh5U9whnE_AC-XRrLMIJlemragapBw",
                "source": "WMBB - mypanhandle.com",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.mypanhandle.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Two Alabama teens, one woman recovering after Walton County shark attack"
            },
            {
                "link": "https://news.google.com/articles/CBMifGh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3VzL2JvcmRlci1wYXRyb2wtbWVtby1pbnN0cnVjdHMtYWdlbnRzLXJlbGVhc2UtbWlncmFudHMtZnJvbS1uZWFybHktYWxsLWVhc3Rlcm4taGVtaXNwaGVyZS1jb3VudHJpZXPSAYABaHR0cHM6Ly93d3cuZm94bmV3cy5jb20vdXMvYm9yZGVyLXBhdHJvbC1tZW1vLWluc3RydWN0cy1hZ2VudHMtcmVsZWFzZS1taWdyYW50cy1mcm9tLW5lYXJseS1hbGwtZWFzdGVybi1oZW1pc3BoZXJlLWNvdW50cmllcy5hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcmJu5xR_YU6BOTnFyedBoTnn4sC9Iz78yuXyiYXtchMKCz2OsXQq_FyiwFygt8WOcGwi1elNMgHo-ITlGVd6z2CnIDm0336nIR6bwYapdZPvn9A",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Border Patrol memo instructs agents to release migrants from nearly all Eastern Hemisphere countries"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2RvbmFsZC10cnVtcC1uZXZhZGEtcmFsbHktaGVhdC1sYXMtdmVnYXMtOTBiMGM3NjZiOWJmYzQxYjM3MDk1MzgzNGI3MGY3YznSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXfoDXhsuunsajeWflS3fKZk5Ev6gNzTTemq1Fg5MSqNetRAgtPX7eKVcYu5ovJGJRKWeRKR7HemfZisREHwQnSr-0RnDcYT8gF5N2eyX6-kMUw",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Trump complains about his teleprompters at a scorching Las Vegas rally"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOS9wb2xpdGljcy92aWRlby9odW50ZXItYmlkZW4tdHJpYWwtb2Rkcy10YWtpbmctc3RhbmQtZGlndmlk0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7N9eLVsfrQDVrXOWUS96jIuS_hXQVj97aPIEBMK3JoeSjaO9E7E3kscCGIEqkGuanrpYIwT7oOqLPtIxruciuZjxmCLRUQQPNxGeRxVSa70nywg",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Criminal defense lawyer gives these odds for Hunter Biden taking the stand"
            },
            {
                "link": "https://news.google.com/articles/CBMiiwFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vd29ybGQvYXJ0aWNsZS8yMDI0L2p1bi8xMC91a3JhaW5lLXdhci1icmllZmluZy11a3JhaW5pYW4taW50ZWxsaWdlbmNlLXN0cmlrZXMtc3UtNTctd2FycGxhbmUtZGVlcC1pbnNpZGUtcnVzc2lh0gGLAWh0dHBzOi8vYW1wLnRoZWd1YXJkaWFuLmNvbS93b3JsZC9hcnRpY2xlLzIwMjQvanVuLzEwL3VrcmFpbmUtd2FyLWJyaWVmaW5nLXVrcmFpbmlhbi1pbnRlbGxpZ2VuY2Utc3RyaWtlcy1zdS01Ny13YXJwbGFuZS1kZWVwLWluc2lkZS1ydXNzaWE?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnXwgkEoPWDPm-p9VKfDfMoI58sQwYqQiBM1D5MsYjkV8j0LKk0rveSXOP84WXe6AEOToRR-j8YhuXGlb03PFZIJqyjP2iczOliNoyPoUDF0RvcA",
                "source": "The Guardian",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.theguardian.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Ukraine war briefing: Ukrainian intelligence ‘strikes Su-57 warplane deep inside Russia’"
            },
            {
                "link": "https://news.google.com/articles/CBMiX2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9kYy1tZC12YS8yMDI0LzA2LzA5L2dhemEtcHJvdGVzdC13aGl0ZS1ob3VzZS12YW5kYWxpc20tZ3JhZmZpdGkv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCf-EbqyXVEi79sLOkZILOP7DjuT2fK4-eJlgA9oz1R_OFsO5ecxKlEUls-ivzlaCJVTHEsa3LxwXQlAENtxOPABElX57RW9SeuvTMXSqUKpz0Sw",
                "source": "The Washington Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.washingtonpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Statues in Lafayette Square vandalized during Gaza cease-fire protest"
            },
            {
                "link": "https://news.google.com/articles/CBMiVWh0dHBzOi8vd3d3Lm5ld3N3ZWVrLmNvbS9kb25hbGQtdHJ1bXBzLXByb2JhdGlvbi1pbnRlcnZpZXctZXZlcnl0aGluZy13ZS1rbm93LTE5MTAyMjLSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUEREJjpDMxDPTQ0lAxNQ2h1eIiB0FoOjHzGb4wBO55kKjuMLf9jMhHCIzYONaQWDLOsSU0t2aQPUwfeDFyINKJgyqc8alQnUTKovk7AN4PBTU6Q",
                "source": "Newsweek",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.newsweek.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Donald Trump's Probation Interview: Everything We Know"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvdXMtbmV3cy8xMC1pbmp1cmVkLXNob290aW5nLXdpc2NvbnNpbi1yb29mdG9wLXBhcnR5LXJjbmExNTYyNTTSAStodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC9yY25hMTU2MjU0?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDD9lsNv-iz1cvgaB4TacfPt_vqVNmbAK7SLiKbzhfP0_wKttoZ5p6cRxacx0RRpvtqZnEPrDpOHlfFPM4ITFaico1S0P-3zLT8E2upoCZ59fyrg",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "10 injured in shooting at Wisconsin rooftop party"
            },
            {
                "link": "https://news.google.com/articles/CBMiW2h0dHBzOi8vd3d3LnNmZ2F0ZS5jb20vYmF5YXJlYS9hcnRpY2xlL29uZS1raWxsZWQtc3RhYmJlZC1icmF3bC1sYWtlLWJlcnJ5ZXNzYS0xOTUwNTUzOS5waHDSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXkYdjMGRXHix4wW8yZ32cOjgMJpqgrOOeOZNXZi9Ji7Skvpqv4DIFXIdqZqjKE08BsmHdWyNuPPjqxtcDgs-4rcr0ZD28oKEQK4uJuzYbOvOd5A",
                "source": "SFGATE",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.sfgate.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "One killed, several stabbed in brawl at Bay Area lake"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3VzLW5ld3MvaG93LXBvd2VyLXBsYXllcnMtZnJvbS1sZWZ0LXRvLXJpZ2h0LXN0b3BwZWQtbnljLWNvbmdlc3Rpb24tcHJpY2luZy_SAW5odHRwczovL255cG9zdC5jb20vMjAyNC8wNi8wOS91cy1uZXdzL2hvdy1wb3dlci1wbGF5ZXJzLWZyb20tbGVmdC10by1yaWdodC1zdG9wcGVkLW55Yy1jb25nZXN0aW9uLXByaWNpbmcvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHdmb6ArqpSUTwjIjY9hETcepbfQGK68uCTKD2kSdoz1JNpToHEBcTgCv-Hkfi5wg0GyeSKgpetRUYtxEVE9tld0EK9JPlwSZaXsB_CVichOnXow",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How powerful forces 'from left to right' came together to stop NYC's controversial congestion pricing"
            },
            {
                "link": "https://news.google.com/articles/CBMibGh0dHBzOi8vYWJjbmV3cy5nby5jb20vUG9saXRpY3MvdHJ1bXAtZW5kb3JzZXMtc2FtLWJyb3duLW5ldmFkYS1yZXB1YmxpY2FuLXNlbmF0ZS1wcmltYXJ5L3N0b3J5P2lkPTExMDk3MjM2N9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMrOzH5pwS89atQh_VuiiXFNvc3__vlL3L0nYXcIp0FTxG0SDazXxvujXngj-Iy9NMSYCHT_TtXRDifo2dnRtS",
                "source": "ABC News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abcnews.go.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Trump endorses Sam Brown in Nevada Republican Senate primary"
            },
            {
                "link": "https://news.google.com/articles/CBMiYmh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2pvZS1iaWRlbi1kb25hbGQtdHJ1bXAtZWxlY3Rpb24tZnJhbmNlLTQ1MTI3NTk4MWU1NzgxNjNjNTFiNWEyNTYyYWU2Njk00gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXpvJhIuFWl8EVLmhyHcc24dhveLV1NRRqzQXXG5j5lBioE51S2JvB2mucCIknW1YFF3eW1HntdIVnlwDsA71FPSF8ZHaSuFT7HkUdiqI-NpTUQ",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Biden visits World War I cemetery in France that Trump skipped"
            },
            {
                "link": "https://news.google.com/articles/CBMibWh0dHBzOi8vYWJjbmV3cy5nby5jb20vVVMvd2lyZVN0b3J5L25hdGlvbmFsLXdlYXRoZXItc2VydmljZS1mb3JlY2FzdHMtc3dlbHRlcmluZy1oZWF0LXdlZWstcGhvZW5peC0xMTA5Njg2ODHSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrlKdOzxLa9y8_Q1QW62m7EWmVqBDDLY0pzMvBZq2mM_90OkZeLcd-V9bSyclLQIZKjjhvseY657ZXGo3zaG3I",
                "source": "ABC News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abcnews.go.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "NWS forecasts more sweltering heat this week for Phoenix and Las Vegas areas"
            },
            {
                "link": "https://news.google.com/articles/CBMiamh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3VzLW5ld3MvcHVlcnRvLXJpY2FuLWRheS1wYXJhZGUtZGVzY2VuZHMtb24tbnljcy1maWZ0aC1hdmVudWUtZm9yLTY3dGgteWVhci_SAW5odHRwczovL255cG9zdC5jb20vMjAyNC8wNi8wOS91cy1uZXdzL3B1ZXJ0by1yaWNhbi1kYXktcGFyYWRlLWRlc2NlbmRzLW9uLW55Y3MtZmlmdGgtYXZlbnVlLWZvci02N3RoLXllYXIvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWGsO3ruZP-7xuGqQobRJib5ONbu8MrM41DKEaBWNBbY_Sl7sXjKB2kYNLJ6lMyaOx9_9KEmhE-yozQJiytgyoka0ZsrgMQ3Hq_72Q1F659KuJOw",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Puerto Rican Day Parade descends on NYC's Fifth Avenue for 67th year"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3LmNic25ld3MuY29tL21pbm5lc290YS9uZXdzL21hbi1pbmp1cmVkLWluLW1hc3Mtc2hvb3RpbmctaW4tbWlubmVhcG9saXMtZGllcy_SAVxodHRwczovL3d3dy5jYnNuZXdzLmNvbS9hbXAvbWlubmVzb3RhL25ld3MvbWFuLWluanVyZWQtaW4tbWFzcy1zaG9vdGluZy1pbi1taW5uZWFwb2xpcy1kaWVzLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0smEipn23O7jB-69z6VP_XWAlKCSS4W3b5Vv2srup_I9LSiklHXpx8tu9KXUhHuCD6uJJ-tN6W4gW4WQXiZdDyBpZuJJOXwLEeNcsh6_Ifu1qg",
                "source": "CBS Minnesota",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Man injured in mass shooting in Minneapolis dies"
            },
            {
                "link": "https://news.google.com/articles/CBMidmh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvdXMtbmV3cy92aXJnaW5pYS13b21hbi13YW50ZWQtdHJpcGxlLWtpbGxpbmctcm9vbW1hdGVzLW5hYmJlZC1oaWdoLXNwZWVkLWNoYXNlLXJjbmExNTYyMDjSAStodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC9yY25hMTU2MjA4?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2fctJ8PZPObTrIQQHuFm5KkBuKyZ7APGnVbKSWJ-6VRL11_ZbRuxK_TD3VvZU13pMV8Nc_i24QyV2VSxWSoVuaqPevKZsaUmqtRUpt7AwYn28Q",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Virginia woman wanted in triple killing of roommates nabbed after high-speed chase"
            },
            {
                "link": "https://news.google.com/articles/CBMiN2h0dHBzOi8vd3d3LnNhY2JlZS5jb20vbmV3cy9sb2NhbC9hcnRpY2xlMjg5MTA1MDE5Lmh0bWzSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlF37bgIZYq-w-46IkEcRcbH_5xuzdFE7W8HnRVxzvYGXYjiUuB9l14Lg7MR2RZhkWl3arQSSxz4sw7554OJ7qYR1BchPtOpWRdWDk_YWEMt9BkQ",
                "source": "Sacramento Bee",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.sacbee.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Thousands join ‘Let Us Worship’ rally during Sacramento Pride"
            },
            {
                "link": "https://news.google.com/articles/CBMibWh0dHBzOi8va3RsYS5jb20vbmV3cy9sb2NhbC1uZXdzL2UtYmlrZS1yaWRlcnMtaW4tc291dGhlcm4tY2FsaWZvcm5pYS10b3JtZW50LW5pZ2h0bGlmZS1jcm93ZC13aXRoLWZpcmV3b3Jrcy_SAXFodHRwczovL2t0bGEuY29tL25ld3MvbG9jYWwtbmV3cy9lLWJpa2UtcmlkZXJzLWluLXNvdXRoZXJuLWNhbGlmb3JuaWEtdG9ybWVudC1uaWdodGxpZmUtY3Jvd2Qtd2l0aC1maXJld29ya3MvYW1wLw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1SsK0ScefvYXH6Xzg54rYnrBTKC-HNB_19vaopNctC0R26ElNVArw8DMrwBoL_PuqVQFXxOOubM6IFV4ozDIMSNk1fS6jpZE2_WRlmIIo8Isc9w",
                "source": "KTLA Los Angeles",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://ktla.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "E-bike riders in Southern California torment crowd with fireworks"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vYWJjbmV3cy5nby5jb20vVVMvd2lyZVN0b3J5L3NhY3JhbWVudG8tbWFzcy1zaG9vdGluZy1zdXNwZWN0LWRpZXMtamFpbC1jZWxsLXBvbGljZS0xMTA5NjE2MTPSAWhodHRwczovL2FiY25ld3MuZ28uY29tL2FtcC9VUy93aXJlU3Rvcnkvc2FjcmFtZW50by1tYXNzLXNob290aW5nLXN1c3BlY3QtZGllcy1qYWlsLWNlbGwtcG9saWNlLTExMDk2MTYxMw?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKklrEVP-lsW3Lkhzr84_iZ5mfjEE3NinZgLS5VXt6hLh6M_1-dmAFsAG0pVCtX6RUHaEM9w-jmXpwKjh1ktjubHb1REAfxGZW2ZSkjOgkhsV6dA",
                "source": "ABC News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abcnews.go.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Sacramento mass shooting suspect dies in jail cell, police and attorney say"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vd3d3Lndpc24uY29tL2FydGljbGUvbWFycXVldHRlLXVuaXZlcnNpdHktcHJlc2lkZW50LW1pY2hhZWwtbG92ZWxsLWRpZXMvNjEwNTA3NzPSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIvB0qHyHZExdZ0ZBCf2MLKhhA9lZFlqftCklTXDo_a63oaBjrbHD9N11-kmKfDAA2Tp3nGZvhn-KhR9Wd57id",
                "source": "WISN Milwaukee",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.wisn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Marquette University president dies - Milwaukee"
            },
            {
                "link": "https://news.google.com/articles/CBMiZGh0dHBzOi8vd3d3LmtjY2kuY29tL2FydGljbGUvbHVrZS10cnVlc2RlbGwtZm91cnRoLXZpY3RpbS1vZi1ydXJhbC1saW5uLWNvdW50eS1tdXJkZXJzLWRpZXMvNjEwNTEyMzLSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2ca3RqYCr8pSTGCIISe6Z9SmtnCuaFyVSl_mTbgBXwKCuCjQnB4Riy_GRvxFzEnPJkgkwJkHoZ8psQwoTPpg3",
                "source": "KCCI Des Moines",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.kcci.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Iowa crime: Fourth victim in rural Linn County deadly assault dies"
            },
            {
                "link": "https://news.google.com/articles/CBMiWmh0dHBzOi8vd3d3LmZveHdlYXRoZXIuY29tL3dlYXRoZXItbmV3cy90cm9waWNhbC1tb2lzdHVyZS1zdXJnaW5nLWZsb3JpZGEtbWVhbnMtcmFpbnktd2Vla9IBXmh0dHBzOi8vd3d3LmZveHdlYXRoZXIuY29tL3dlYXRoZXItbmV3cy90cm9waWNhbC1tb2lzdHVyZS1zdXJnaW5nLWZsb3JpZGEtbWVhbnMtcmFpbnktd2Vlay5hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiQC6lWNGIF8T3WOFmsuBZk0EO-tSuwrtV3BuP5_EhRoWrTugwTVuPCkrBVPAQ0heP52nRR-6tjTuRdnl3p-KvuqsiS96iJ50gowwRcHBb69-xOA",
                "source": "Fox Weather",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxweather.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Tropical moisture surging into Florida means rainy week ahead with flooding potential"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmNic25ld3MuY29tL2NvbG9yYWRvL25ld3Mvc2V2ZXJlLXN0b3Jtcy1mb3JlY2FzdC1zdW5kYXktYWxvbmctaW50ZXJzdGF0ZS0yNS1jb3JyaWRvci1jb2xvcmFkby1tb3VudGFpbnMv0gF4aHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL2NvbG9yYWRvL25ld3Mvc2V2ZXJlLXN0b3Jtcy1mb3JlY2FzdC1zdW5kYXktYWxvbmctaW50ZXJzdGF0ZS0yNS1jb3JyaWRvci1jb2xvcmFkby1tb3VudGFpbnMv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR41mgMFNLKeetFnGIGFdrkwsHxPQemRw87VlTM8R_6wcln7fccVT9qut0cw12VF3Iw0UddyKujfBBFmBazLIbm0e6TmNTWJS5vgoXbUwXhs7jMeA",
                "source": "CBS Colardo",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cbsnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Severe storms forecast Sunday along Interstate 25 corridor, Colorado mountains"
            },
            {
                "link": "https://news.google.com/articles/CBMiWGh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL255Yy1zdG9uZXdhbGwtc3Vid2F5LXN0YXRpb24tOWY5MjkwMDc2NmZmNzY3YTdjY2Y0N2Y0MjRlYWE3N2LSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS58_x43pjKR7bBg-dmD5nis1GP_yo97x3AeE451oAl7z6jmmo7sSPnduZ4kPZAkjrbusp8nLXh8inBUQR7h1EQtIbq",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Bill would rename NYC subway stop after Stonewall, a landmark in LGBTQ+ rights movement"
            },
            {
                "link": "https://news.google.com/articles/CBMiS2h0dHBzOi8vYWJjNy5jb20vcG9zdC9zaG9vdGluZy1jb21wdG9uLXBvb2wtcGFydHktbGVhdmVzLTEtZGVhZC01LzE0OTI2NjA4L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1PrFebQmlrvOzkf_ugvGnMdJUFZ81Gr13MsYSFVBkDNbSAutK2Pgj4qcbhrcm_SX3BA_GYwkMyul1R5nJM0DzgzZwzwhv-z4uOQ5jmjsMmUHsdw",
                "source": "KABC-TV",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://abc7.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Shooting at Compton pool party leaves 1 dead, 5 injured; suspect at large"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOS91cy91cy1jb2FzdC1ndWFyZC1zaGlwLWxha2Utc3VwZXJpb3ItdW5kZXJ3YXRlci1kYW1hZ2UvaW5kZXguaHRtbNIBWWh0dHBzOi8vYW1wLmNubi5jb20vY25uLzIwMjQvMDYvMDkvdXMvdXMtY29hc3QtZ3VhcmQtc2hpcC1sYWtlLXN1cGVyaW9yLXVuZGVyd2F0ZXItZGFtYWdl?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2a3eGk-kLcD6fqj867yMob2n0gcy_8oiFYk-Na5kS0iCn_9xTw4ayp3gB7w9aIxlIDZ-SXFBqhUxeXyAHmCYUxGBoke6MgR4xLJtZnFbCD1BDrw",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Investigation underway after ship collides with underwater object, takes on water in Lake Superior, US Coast Guard says"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vd3dkLmNvbS9mYXNoaW9uLW5ld3MvZmFzaGlvbi1zY29vcHMvZ2FsbGVyeS9qaWxsLWJpZGVuLXN0YXRlLWRpbm5lci1pbi1mcmFuY2UtcGhvdG9zLTEyMzY0MjU4NjEv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ35kaFpYR81lS3G39qbVHa2GTzXjLKQlW0lckxVpMrIVFtTD9iE1ADXarkonPsBpl8iYrz8xv1f8IyqB4xA8vSXLZfza7dQrsrseH_LtO9TEztjg",
                "source": "WWD",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://wwd.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Jill Biden's State Dinner Dress in France Dazzles + Stars [PHOTOS]"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd2dudHYuY29tL25ld3MvY2hpY2Fnb2NyaW1lL292ZXItMzAtcGVvcGxlLXNob3QtNS1mYXRhbGx5LWFjcm9zcy1jaGljYWdvLWluLXdlZWtlbmQtdmlvbGVuY2Uv0gFpaHR0cHM6Ly93Z250di5jb20vbmV3cy9jaGljYWdvY3JpbWUvb3Zlci0zMC1wZW9wbGUtc2hvdC01LWZhdGFsbHktYWNyb3NzLWNoaWNhZ28taW4td2Vla2VuZC12aW9sZW5jZS9hbXAv?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxI0RJz5NrGseyjfc7usmKMDAgwca7IplcdNMJW8QTMLbsN5KVKBLQ09-IqkaSwGFNx0gRVDvYofoX2DhJN6UPFh6MNLacTqfF-siDxcwB62YhQ",
                "source": "WGN TV Chicago",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://wgntv.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Over 30 people shot, 7 fatally, across Chicago in weekend violence"
            },
            {
                "link": "https://news.google.com/articles/CBMidmh0dHBzOi8vd3d3Lmtpbmc1LmNvbS9hcnRpY2xlL25ld3MvbG9jYWwvbWFuLWhvc3BpdGFsaXplZC1kcm93bmluZy1sYWtlLXVuaW9uLzI4MS01ZGM1YjQ2OS1jZTVlLTQ1ZWUtODVmZi0yNmM5OGUwYTgwYjPSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtbIcyLaKqmjNOiS5wlGc_AySvmDH2Tk38A5phJJJ_npeyXa8w-8zXTh1LreUc3fQfJ4HjVpCkuagpJuR4p0jgHfNjHpT0r76iX5vBIqA7PdSClA",
                "source": "KING5.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.king5.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Three rescue swimmers pull man from Lake Union after drowning"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vY29udHJhY29zdGEubmV3cy8yMDI0LzA2LzA5L2ZpcmVmaWdodGVycy1iYXR0bGluZy12ZWdldGF0aW9uLWZpcmUtaW4tcGl0dHNidXJnL9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmnKiVyZXAPNIp4fMAZBEGl2nKTI_p1NTFvnO4-0ACcMcH-2F0L4EUFBtfiQV0P9fXQgRortSkUGEYT7iy-2KPAEM5",
                "source": "Contra Costa News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://contracosta.news&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Firefighters Battling Vegetation Fire in Pittsburg"
            },
            {
                "link": "https://news.google.com/articles/CBMigwFodHRwczovL3d3dy51c2F0b2RheS5jb20vc3Rvcnkvb3Bpbmlvbi9jb2x1bW5pc3QvMjAyNC8wNi8wOS9yZXB1YmxpY2Fucy1yaWdodC1jb250cmFjZXB0aW9uLWFjdC1iaXJ0aC1jb250cm9sLWVsZWN0aW9uLzczOTk3NTIxMDA3L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdjtpRCFrfApQOW-gBmTSycm8vZQK27xu1u0cbk6w5ryjXQSjlPWb325H4AQbKp5j4gwanK7lPdTjClowavXZvnAQpoIP8Jtx3WWQ4WZZb2RM4pw",
                "source": "USA TODAY",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.usatoday.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Republicans rejected Right to Contraception Act. Why? To control women"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vYWJjNy5jb20vcG9zdC9iZXlvbmMtZ2F2ZS1jb25jZXJ0LXRpY2tldHMtc3VwcmVtZS1jb3VydC1qdXN0aWNlLWtldGFuamkvMTQ5MjkwMjYv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv_icWfCwsV-S9N5A81YqUvGnxB9zoRXIj5LmgOUTboKoLb6l5leJUdrvL35q_J7uNEIkqBXhuv4VESqFsmVldsDOyjUVsiwSv5w4Emh28MNt1-w",
                "source": "KABC-TV",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://abc7.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Beyoncé gave concert tickets to Supreme Court Justice Ketanji Brown Jackson: Financial disclosure"
            },
            {
                "link": "https://news.google.com/articles/CBMiXWh0dHBzOi8vd3d3Lmt5My5jb20vMjAyNC8wNi8wOS9vdmVybmlnaHQtc3Rvcm1zLWxlYXZlLWZsb29kZWQtcm9hZHMtbWFueS1hcmVhcy1hY3Jvc3Mtb3phcmtzL9IBbGh0dHBzOi8vd3d3Lmt5My5jb20vMjAyNC8wNi8wOS9vdmVybmlnaHQtc3Rvcm1zLWxlYXZlLWZsb29kZWQtcm9hZHMtbWFueS1hcmVhcy1hY3Jvc3Mtb3phcmtzLz9vdXRwdXRUeXBlPWFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_vAxp9GTcpd5vGQEnLqnCdDS-yhUTK4a5WmI2qDiKBHIml9FiyzAqMNRMN3j2xNHUsJKIO211aAAGbqCjDnKSjoGhUahj8kghUifZ_TwvVmmt6w",
                "source": "KY3",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.ky3.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Overnight storms leave flooded roads in many areas across the Ozarks"
            },
            {
                "link": "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tYXJrZXRzL2FpcmJuYi1yZW50ZXJzLXR1cm5lZC1zcXVhdHRlcnMtcmVmdXNlLXZhY2F0ZS1wcm9wZXJ0eS11bmxlc3MtZXZpY3RlZC1jb3VydC1kb2Nz0gF4aHR0cHM6Ly93d3cuZm94YnVzaW5lc3MuY29tL21hcmtldHMvYWlyYm5iLXJlbnRlcnMtdHVybmVkLXNxdWF0dGVycy1yZWZ1c2UtdmFjYXRlLXByb3BlcnR5LXVubGVzcy1ldmljdGVkLWNvdXJ0LWRvY3MuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm8VT3jv1eeeR664eYUDm7e9PWgULmVyeg3hv72NYqiIA_a1grMSoNknv-VT5t-OqiuFSLsgZ2eSIWa-yswa9sZ84MsA1E1b6Uzq7QUjN-WqFTw",
                "source": "Fox Business",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.foxbusiness.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Airbnb renters-turned-squatters refuse to vacate property unless evicted: court docs"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8va3ZpYS5jb20vbmV3cy90b3Atc3Rvcmllcy8yMDI0LzA2LzA5L3RyYWZmaWMtYWxlcnQtbGFuZXMtY2xvc2VkLWF0LWFtZXJpY2FzLXNvdXRoLWFuZC16YXJhZ296YS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQew-Ry0CGs4KYeVb2fgdkCCBeVwMQkVf1tXEX4f9MPXQsBGwioJOa0Xv5x6BhaeASW-M1sn-VpQskW7ecH-fIPa6xFt49RJXorhSoLEs4hjrchJA",
                "source": "KVIA",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://kvia.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "TRAFFIC ALERT: One person dies, one injured after crash at Loop 375 and South Zaragoza"
            },
            {
                "link": "https://news.google.com/articles/CBMie2h0dHBzOi8vd3d3Lmtub3BuZXdzMi5jb20vMjAyNC8wNi8wOS9taXNzLWRvdWdsYXMtY291bnR5LW1pc3MtbGluY29sbnMtdGVlbi1jcm93bmVkLW1pc3MtbmVicmFza2EtbWlzcy1uZWJyYXNrYXMtdGVlbi0yMDI0L9IBigFodHRwczovL3d3dy5rbm9wbmV3czIuY29tLzIwMjQvMDYvMDkvbWlzcy1kb3VnbGFzLWNvdW50eS1taXNzLWxpbmNvbG5zLXRlZW4tY3Jvd25lZC1taXNzLW5lYnJhc2thLW1pc3MtbmVicmFza2FzLXRlZW4tMjAyNC8_b3V0cHV0VHlwZT1hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-0D5QE-7C873Nm5TTZfiil3RrmFIXfiglpHix2V98qEHfQXcqMq19Lb8GK-9_yUBGNsU5pBVs0qPUmn4do5FS5ZXGZNHJUSWWzsgXhrtNWljdgQ",
                "source": "KNOP",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.knopnews2.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Miss Douglas County and Miss Lincoln’s Teen crowned Miss Nebraska and Miss Nebraska’s Teen 2024"
            },
            {
                "link": "https://news.google.com/articles/CBMif2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL3BvbGl0aWNzLzIwMjQtZWxlY3Rpb24vZ2VvcmdpYS1yZXB1YmxpY2FuLWNvbnZpY3RlZC1qYW4tNi1yaW90LXdhbGtzLXRlbGV2aXNlZC1jb25ncmVzc2lvbmFsLXJjbmExNTYyNjTSAStodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC9yY25hMTU2MjY0?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjMHaPdPaOySn8bu51cDG_3YK-BpIuGom-E0gXXrUukXFf3K2lP1rDTho0twQbhbTU-IhyNbQb9xg6xUYfXkC9ls0fVpz7BpO9KZRxP_t_sb3YA",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Georgia Republican convicted in Jan. 6 riot walks out during televised congressional primary debate"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8va3RsYS5jb20vbmV3cy9sb2NhbC1uZXdzL2RvbmFsZC10cnVtcC12aXNpdHMtbmV3cG9ydC1iZWFjaC1vbi1jYW1wYWlnbi1mdW5kcmFpc2luZy10b3VyL9IBZGh0dHBzOi8va3RsYS5jb20vbmV3cy9sb2NhbC1uZXdzL2RvbmFsZC10cnVtcC12aXNpdHMtbmV3cG9ydC1iZWFjaC1vbi1jYW1wYWlnbi1mdW5kcmFpc2luZy10b3VyL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7JYgiqopOQUZTu6HcovhdQIvRdvKLNMY6RpMNyD_KmrugzaNphrijjMMccFnRyFwezA4kmlJRdGPhTVBzOYv7dxNfBxO79Fz-EouNlER19nEW_A",
                "source": "KTLA Los Angeles",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://ktla.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Donald Trump visits Newport Beach on campaign fundraising tour"
            },
            {
                "link": "https://news.google.com/articles/CBMiVWh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93b3JsZC8yMDI0LzA2LzA5L2QtZGF5LXdlZGRpbmctbm9ybWFuZHktaGFyb2xkLXRlcmVucy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT__au82EJKMnfkbmWIzKS2gTlDiWMqPRMD62HQTb_xRampFGNq2ZtIHP4HHmpRip03AhucA5TPKGMiQLyNSXrm9IlDdN4f05wmZXGzI_OCaXMtg",
                "source": "The Washington Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.washingtonpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "100-year-old U.S. vet marries bride, 96, at D-Day event in France"
            },
            {
                "link": "https://news.google.com/articles/CBMiRGh0dHBzOi8vd3RvcC5jb20vZGMvMjAyNC8wNi9jYXBpdGFsLXByaWRlcy10ZXN0LXJ1bi1mb3Itd29ybGQtcHJpZGUv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK0StD96C4fYgVd6fw4MLGmnUK8wEbFAqcChitHsjiX21bNJ-fLfGUAKEW4_KgGw0",
                "source": "WTOP",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://wtop.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Capital Pride’s test run for World Pride"
            },
            {
                "link": "https://news.google.com/articles/CBMiTGh0dHBzOi8vc2ZzdGFuZGFyZC5jb20vMjAyNC8wNi8wOC92aWdpbC1ob25vcnMtZG9sb3Jlcy1wYXJrLXNob290aW5nLXZpY3RpbS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRibjz4cE-oaJNARNGtP4L8zwIQtVHTgE5XPWlnZfDeK4vaSK_mAt6lCs5s4Xsq_KPPARBbfLEImB7qbm11RdJi8azOCgM0JOTnjzL-IzLLOTeIeQ",
                "source": "The San Francisco Standard",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://sfstandard.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Dolores Park shooting: Victim remembered as kind, ambitious"
            },
            {
                "link": "https://news.google.com/articles/CBMiggFodHRwczovL3d3dy5tc25iYy5jb20vYXltYW4tbW9oeWVsZGluL3dhdGNoL3RydW1wLWFuZC1hbGxpZXMtZGVtYW5kLW1pc3RyaWFsLWJhc2VkLW9uLWRlYnVua2VkLXBvc3QtYnktZmFjZWJvb2stdHJvbGwtMjEyNTkzMjIxNjk30gE2aHR0cHM6Ly93d3cubXNuYmMuY29tL21zbmJjL2FtcC12aWRlby9tbXZvMjEyNTkzMjIxNjk3?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSd-19FXURXDx5uUTt-iGUGaNIHxG_AsDo-bPNPzt3TQOGht8KH2TL719BnQXeqDztnWKd35ro6nYVOr9b_5pg5YNhZl1BIYDTW1Ki2LPw_MpAWkQ",
                "source": "MSNBC",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.msnbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Trump and allies demand mistrial based on debunked post by Facebook troll"
            },
            {
                "link": "https://news.google.com/articles/CBMiXmh0dHBzOi8vd3d3Lmh1ZmZwb3N0LmNvbS9lbnRyeS9sZW9uYXJkLXBlbHRpZXItcGFyb2xlLWhlYXJpbmctYmlkZW5fbl82NjYzN2MyZGU0YjA5MTEwNWYzYWI2YzXSAWJodHRwczovL3d3dy5odWZmcG9zdC5jb20vZW50cnkvbGVvbmFyZC1wZWx0aWVyLXBhcm9sZS1oZWFyaW5nLWJpZGVuX25fNjY2MzdjMmRlNGIwOTExMDVmM2FiNmM1L2FtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyR5fDTlccacs7avAD8lDEo8kB4EDaXMoX6dVZoZdnFYCISL0BEU9LY-zfkC6oN7QYqURC51tN7QMK88uTbyv0hAcZ334ey8W0qvuSbQ9Srn0TEQ",
                "source": "HuffPost",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.huffpost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Leonard Peltier Is Getting What May Be His Last Chance At Freedom"
            },
            {
                "link": "https://news.google.com/articles/CBMiqAFodHRwczovL3d3dy5kZXRyb2l0bmV3cy5jb20vc3RvcnkvbmV3cy9wb2xpdGljcy8yMDI0LzA2LzA4L3ZpY2UtcHJlc2lkZW50LWthbWFsYS1oYXJyaXMtbW91cm5zLXBhbGVzdGluaWFucy1raWxsZWQtaW4taXNyYWVsaS1ob3N0YWdlLXJlc2N1ZS1kZXRyb2l0LXNwZWVjaC83NDAxNjkzOTAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuFMinGwHQGobZywhec9J4it7NNKKS7DeG5NApKqV5OfyzhcU6B24hFTxdba-rgx11zkIr5KgTiHG97ZVQR3NlBI7INfVDQXnos4HLaTrymEnQlw",
                "source": "Detroit News",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.detroitnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Harris mourns Palestinians killed in Israeli hostage rescue during Detroit speech"
            },
            {
                "link": "https://news.google.com/articles/CBMiwAFodHRwczovL3d3dy53a3ljLmNvbS9hcnRpY2xlL25ld3MvbG9jYWwvbGFrZS1jb3VudHkvbGFrZS1jb3VudHktY2h1cmNoLWZlc3RpdmFsLXNodXQtZG93bi1lYXJseS1udW1lcm91cy1hbHRlcmNhdGlvbnMtYnJlYWstb3V0LXlvdXRocy1zdC1nYWJyaWVsLXBhcmlzaC85NS0yMDM4YjgwNC0yZTQ4LTQ0NmMtOWQ4NC03OTJmNGE2ZWE5OGbSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT04Rdv4BPjbyHQ9Lrjy6b-43MfpIPrBILM898Pj4iNJnWJe5dxuSh9Z3l_QSZu6U2wMIDPblu8HDFIy0Yl5ix-oeTTqCSo3jd6vkDEO3zY4HxfYg",
                "source": "WKYC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.wkyc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Numerous altercations' at St. Gabriel Parish Festival in Concord"
            },
            {
                "link": "https://news.google.com/articles/CBMiaWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvaG91c2UvNDcxMjU2NC1qYW1lcy1jbHlidXJuLXdvbnQtYXR0ZW5kLWJlbmphbWluLW5ldGFueWFodS1hZGRyZXNzLWNvbmdyZXNzL9IBbWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvaG91c2UvNDcxMjU2NC1qYW1lcy1jbHlidXJuLXdvbnQtYXR0ZW5kLWJlbmphbWluLW5ldGFueWFodS1hZGRyZXNzLWNvbmdyZXNzL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqbu_SjpzuRKrAxUI_8XmFMh1Cytz3LEQQEV7Ch2-GJb05LfyQCxaMFKcqB15TtuQEBpB7vON3GZUUDEHPoTuFg9MIEGhFcxP-WT2HLrD295xOGA",
                "source": "The Hill",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://thehill.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Clyburn says he won’t attend Netanyahu’s address to Congress"
            },
            {
                "link": "https://news.google.com/articles/CBMia2h0dHBzOi8vd3d3Lm5ld3N3ZWVrLmNvbS9qdXN0aWNlLXNhbXVlbC1hbGl0by1tYXktaGF2ZS1tYWRlLWdyYXZlLW1vdmUtbGV0dGVyLWNvbmdyZXNzLWhhcnJ5LWxpdG1hbi0xOTEwMTg20gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_kS1EBNUUE7aRGD-fO1SGxZcGD6gCBJkQb9hcby3pJtpx5Ab1JMRFeOsBGaK-9DUkvhIkE9kA34G8B62NIBYRMFySOiSKuunQYRRYJTGAsjgoMg",
                "source": "Newsweek",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.newsweek.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Samuel Alito May Have Made 'Grave' Move in Letter to Congress—Legal Analyst"
            },
            {
                "link": "https://news.google.com/articles/CBMiZWh0dHBzOi8vd3d3LmZveDE5LmNvbS8yMDI0LzA2LzA5L3N1c3BlY3QtY3VzdG9keS1hZnRlci1ob21lLWJyZWFrLWluLWF0dGVtcHQtb2ZmLWR1dHktZGVwdXR5LXJlYWRpbmcv0gF0aHR0cHM6Ly93d3cuZm94MTkuY29tLzIwMjQvMDYvMDkvc3VzcGVjdC1jdXN0b2R5LWFmdGVyLWhvbWUtYnJlYWstaW4tYXR0ZW1wdC1vZmYtZHV0eS1kZXB1dHktcmVhZGluZy8_b3V0cHV0VHlwZT1hbXA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBVCo879TnroA7B50CnzxXTppP2nRC0Nogv3XgmoaXzpyDZSL_k_o06CI1NfsHr4PdnIY8Uug9kkcKMLDMFrgTFXQhPBxJrw5Lft16Jg7RUjVxw",
                "source": "FOX19",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.fox19.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Suspect in custody after home break-in attempt of off-duty deputy in Reading"
            },
            {
                "link": "https://news.google.com/articles/CBMic2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMDkvc291dGgtZGFrb3RhLWdvdi1rcmlzdGktbm9lbS1zYXlzLXRydW1wLWNob29zaW5nLWEtd29tYW4tdnAtd291bGQtaGVscC1oaW0td2luLmh0bWzSAXdodHRwczovL3d3dy5jbmJjLmNvbS9hbXAvMjAyNC8wNi8wOS9zb3V0aC1kYWtvdGEtZ292LWtyaXN0aS1ub2VtLXNheXMtdHJ1bXAtY2hvb3NpbmctYS13b21hbi12cC13b3VsZC1oZWxwLWhpbS13aW4uaHRtbA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtuo9zWqe0gFtVRDArgneX1BaaJ-DaY25Y9ZbPlFz8ZBgCdwvH6fhZX6r6seZRDH_sjLxfItpJAziPgDXjCHgBa0rbYcVQPZLE2gAhqpPOcwrFw",
                "source": "CNBC",
                "source_icon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.cnbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "South Dakota Gov. Kristi Noem says Trump choosing a woman VP would help him win"
            },
            {
                "link": "https://news.google.com/articles/CBMijgFodHRwczovL3d3dy5mb3huZXdzLmNvbS9lbnRlcnRhaW5tZW50L3N0YXItd2Fycy1zdGFyLWNhcnJpZS1maXNoZXJzLWZyaWVuZC1ncmlmZmluLWR1bm5lLW1ha2VzLXN0dW5uaW5nLWNsYWltLWFib3V0LWhvdy1zaGUtbG9zdC1oZXItdmlyZ2luaXR50gGSAWh0dHBzOi8vd3d3LmZveG5ld3MuY29tL2VudGVydGFpbm1lbnQvc3Rhci13YXJzLXN0YXItY2FycmllLWZpc2hlcnMtZnJpZW5kLWdyaWZmaW4tZHVubmUtbWFrZXMtc3R1bm5pbmctY2xhaW0tYWJvdXQtaG93LXNoZS1sb3N0LWhlci12aXJnaW5pdHkuYW1w?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyrKYdFdyjAi8t-w3quRfDlhFCOl5kJ6BIL6m423tKBV-laAucBcAhaUMonS90Ct-_12429-sFNmxULvW9eueI7NsWsqd4ckUb5eHAcgqGTqn85Q",
                "source": "Fox News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.foxnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "'Star Wars' star Carrie Fisher’s friend Griffin Dunne makes stunning claim about how she lost her virginity"
            },
            {
                "link": "https://news.google.com/articles/CBMiYGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3VzLW5ld3MvdGhpcy1wb3NzaWJsZS10cnVtcC12cC1waWNrLWNvdWxkLXNwZWxsLXRoZS1lbmQtZm9yLWJpZGVuL9IBZGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA2LzA5L3VzLW5ld3MvdGhpcy1wb3NzaWJsZS10cnVtcC12cC1waWNrLWNvdWxkLXNwZWxsLXRoZS1lbmQtZm9yLWJpZGVuL2FtcC8?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ3WhrNw8VNiKrPTWXyWrQirXFn3z3YYaHFGDITlM4SLHv0P3TRWCKadJOdMguXTNdxEKv-R7RxF3ykgmI327_mmuRagPV6FhIm_B431fR_3TiSQ",
                "source": "New York Post",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nypost.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Dems 'fear' this possible Trump VP pick who 'could spell the end for Biden'"
            }
        ],
        "World": [
            {
                "link": "https://news.google.com/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jODAwOWUyejR4bG_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzgwMDllMno0eGxvLmFtcA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLalhK7nAlQIp77WNsoE4990xCuj0KmIJg2IveRCgZp-xwTh5sPnhIl5AEAK6NlgrBuALOqvjJ43hEONBUX8RIS3SggwOBwPjIfStraZREn1wezQ",
                "source": "BBC.com",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Emmanuel Macron gambles on snap France election after European defeat"
            },
            {
                "link": "https://news.google.com/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2lzcmFlbC1jZW50cmlzdC1taW5pc3Rlci1nYW50ei1xdWl0cy1uZXRhbnlhaHUtZ292ZXJubWVudC0yMDI0LTA2LTA5L9IBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQh9Hhzllgq8pxhnKXfGfjaRP3PJQXYhR6eZ1eA37kHcnlzq50H8t8T1P0A5T0FMXp4teGk7vEKRe05iLalP0NTa6TSYY1BTE8a4eAxNeVbfyw8BQ",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Israel's centrist minister Benny Gantz quits Netanyahu government"
            },
            {
                "link": "https://news.google.com/articles/CBMibWh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2lzcmFlbC1wYWxlc3RpbmlhbnMtaGFtYXMtd2FyLWhvc3RhZ2VzLWNhc3VhbHRpZXMtMTQ1OGY1YTFkZmU3YmQ0ZDkwODIzMWJiNzA5MGE1NTnSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-KxFLAOFjlc_W0WLhuEhppyn06FbJB_GlvD1bKSf4sNZV5SaKYohNAmUE27Bn3n3E0j3sEKlJ0yymj2Df344AdDReHKh9vSce4YEKmrn4_jbBIQ",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "How an Israeli raid freed 4 hostages and killed at least 274 Palestinians in Gaza"
            },
            {
                "link": "https://news.google.com/articles/CBMiWmh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyNC8wNi8wOS9ueC1zMS00OTk3Njc4L2luZGlhLXByaW1lLW1pbmlzdGVyLW5hcmVuZHJhLW1vZGktdGhpcmQtdGVybdIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6l1_wC8pw7aMV9cEIMrrFboiDhg9qecZytQwLECEWodHIon1iF3cLjpECdEz08IrlHHtvAqLajERXiIvHl3T0Nmh2Lk3einOXhEOQhiMq4nndKA",
                "source": "NPR",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.npr.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "India's Narendra Modi is sworn in for a 3rd term as prime minister"
            },
            {
                "link": "https://news.google.com/articles/CBMiVWh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNi8wOS9hc2lhL25vcnRoLWtvcmVhLWJhbGxvb25zLXJlc3BvbnNlLWludGwtaG5rL2luZGV4Lmh0bWzSAU5odHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDI0LzA2LzA5L2FzaWEvbm9ydGgta29yZWEtYmFsbG9vbnMtcmVzcG9uc2UtaW50bC1obms?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlXv8kIjZmYJdBH068hRRoI1Rb69-VOkP4YYjc4qJIHsS4f272BmPi-svDWvjtgYQ",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "North Korea sends another wave of trash balloons into South Korea"
            },
            {
                "link": "https://news.google.com/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9pdGFseXMtcG0tbWVsb25pLXNvbGlkaWZpZXMtdG9wLXNwb3QtZXUtdm90ZS1leGl0LXBvbGwtMjAyNC0wNi0wOS_SAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTlcESMt8wgieKBlYxGw_4MeqmATdJIclxfm1AvZ4xnJFFQotorFmIx8KK5k1iXMpswJiGaTyARohUvZetKp-s_N6EyhDAIVBnUNFc1yFumBnVEg",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Italy's PM Meloni comes out on top in EU vote, strengthening her hand"
            },
            {
                "link": "https://news.google.com/articles/CBMiWWh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL3BpZXItYWlkLXVzLWdhemEtaXNyYWVsLXBhdXNlLTcwMjgzYzg2ZGE0NzU5MWNkNWJjOGI5YzE5NmQ2ZGZm0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShUdWOwkuKeRZoC5nKLdoysSrQSKSmOWWIP_3do7W-EGI63_TSGP8NuE5rh_iztETYec-GOnqVZmscuasXtlwx28PZlqFJb-sxG8hvAKz6sUic2Q",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "UN food agency pauses its aid work at US pier in Gaza over security concerns, in latest setback"
            },
            {
                "link": "https://news.google.com/articles/CBMieWh0dHBzOi8vd3d3LmV1cm9uZXdzLmNvbS9teS1ldXJvcGUvMjAyNC8wNi8xMC9odW5nYXJ5LW5ld2NvbWVyLXBldGVyLW1hZ3lhci1zaGFrZXMtb3JiYW5zLWhvbGQtb24tcG93ZXItZWFybHktcmVzdWx0cy1zYXnSAQA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbSlshWFQVHSFaqNPWnSCphOqSBwfVcPh7udcGejwbdd04UjJEyaihQ7baDHQjvKJUfLdIeuz6Dkr5m60qN4X73LOCUINDlvBYIRohux3-lvlkKg",
                "source": "Euronews",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.euronews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Hungary: Newcomer Peter Magyar shakes Orban's hold on power"
            },
            {
                "link": "https://news.google.com/articles/CBMiaGh0dHBzOi8vYWJjbmV3cy5nby5jb20vSGVhbHRoL3dpcmVTdG9yeS9ib2R5LW1pc3NpbmctYnJpdGlzaC10di1wcmVzZW50ZXItbWljaGFlbC1tb3NsZXktZm91bmQtMTEwOTY3MDQ10gFsaHR0cHM6Ly9hYmNuZXdzLmdvLmNvbS9hbXAvSGVhbHRoL3dpcmVTdG9yeS9ib2R5LW1pc3NpbmctYnJpdGlzaC10di1wcmVzZW50ZXItbWljaGFlbC1tb3NsZXktZm91bmQtMTEwOTY3MDQ1?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjaXRx3gZ96WRnlhJAJET6iK4qQvsv6LIziwzK7NKTpCmG3vmfIQWScwemcvytm6QS9b50zqemlG1ieFyQpjWHcxUU23dLkl3v91Ul26U3o9m1WA",
                "source": "ABC News",
                "source_icon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://abcnews.go.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Body of missing British TV presenter Michael Mosley found on Greek island"
            },
            {
                "link": "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3Mvd29ybGQvaGFpdGktbmV3LXByaW1lLW1pbmlzdGVyLWdhcnJ5LWNvbmlsbGUtaG9zcGl0YWxpemVkLXJjbmExNTYxOTnSAStodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC9yY25hMTU2MTk5?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROlaM-ZG3rJm2FgZW0Ow_5qDI3l5z6tWZ2LRnc9QcVSHe895uugyMEVTKfmlX-YIHxHvLxpWz3175aTss38FU2QK5NpjsQvL9UUGRLb95I-HwCzA",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Haiti's new prime minister discharged after spending night in hospital"
            },
            {
                "link": "https://news.google.com/articles/CBMiWmh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3Mvd29ybGQvaXJhbi1hcHByb3Zlcy02LWNhbmRpZGF0ZXMtcHJlc2lkZW50aWFsLXJhY2UtcmNuYTE1NjIxNNIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNTYyMTQ?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVuU2gw1U5V1GQLG1FQCRC9e20AmWxMUaqNU1S8F-3PShSzp0aj5NeIROZlDh0gGc2pbicr6_ip6cCNi9IQRcazHL7nynFMBEiYXwG0hic_t9mEA",
                "source": "NBC News",
                "source_icon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.nbcnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Iran approves 6 candidates for presidential race, but again blocks Ahmadinejad"
            },
            {
                "link": "https://news.google.com/articles/CBMicmh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2V1cm9wZWFuLXBhcmxpYW1lbnQtZWxlY3Rpb24tZ2VybWFueS1hZmQtZmFyLXJpZ2h0LWNkdS02ZmNjNDU2NDE2MDMzZWY5NDQwZjIxMmZjYTRmNzgxONIBAA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLZZtyfPBMCW1Tp4QxfGc8ajaQyBE_HK7evnvxWaXmUvAgQ1Ca582A-AUq51d-FPdnXMt7fgC3NpH1Q2KXxddPOBLCyZ7Bs5qsGEhonAtlpklUiA",
                "source": "The Associated Press",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://apnews.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "German far right gains as governing parties decline, but conservatives lead in European election"
            },
            {
                "link": "https://news.google.com/articles/CBMihQFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS93b3JsZC9taWRkbGUtZWFzdC9pc3JhZWwtcG91bmRzLWNlbnRyYWwtZ2F6YS1wYWxlc3Rpbmlhbi1kZWF0aC10b2xsLWhvc3RhZ2UtcmVzY3VlLXJhaWQtcmlzZXMtMjc0LTIwMjQtMDYtMDkv0gEA?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFogYBxmvTzdpKW6DmET8HaUQ4zPDW8JbotESgCrjSApt3LIMRWn0AUIBIZXYiRl5HyA0vYEZnmRf2wVNxyopzYLQEBbFullao4DzMsLXPveSFeQ",
                "source": "Reuters",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "Israel keeps pounding central Gaza as Palestinian death toll in hostage rescue raid rises to 274"
            },
            {
                "link": "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3LmNubi5jb20vZXVyb3BlL2xpdmUtbmV3cy9ldXJvcGVhbi1lbGVjdGlvbi1yZXN1bHRzLTA2LTA5LTI0LWludGwvaW5kZXguaHRtbNIBUGh0dHBzOi8vYW1wLmNubi5jb20vY25uL2V1cm9wZS9saXZlLW5ld3MvZXVyb3BlYW4tZWxlY3Rpb24tcmVzdWx0cy0wNi0wOS0yNC1pbnRs?hl=en-US&gl=US&ceid=US%3Aen",
                "og": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTh4A2kT-9NUNqEXHRjXggFLhn_Mai8nW6OHcOze0VdVEQVXoaXDGwJBAnyLIlOwuSODTcVJifk9x_1R4PsIV1FY4aOsDLIMCSIiy3wz7obJj4N0g",
                "source": "CNN",
                "source_icon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.cnn.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "title": "News on the European election results 2024"
            }
        ]
    })
})
const server = http.createServer(requestListener)

server.listen(PORT,host,()=>{
    console.log(`server is running on http://${host}:${PORT}`);
})