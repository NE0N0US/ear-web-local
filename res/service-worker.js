'use strict';

const
	STATIC_CACHE_NAME = 'ear-static',

	STATIC_CACHE_URLS = [
		'./favicon.ico',
		'./global.css',
		'./index.html',
		'./',
		'./MainControl_cleffa.html',
		'./MainControl_cleffa',
		'./MainControl_corsola.html',
		'./MainControl_corsola',
		'./MainControl_crobat.html',
		'./MainControl_crobat',
		'./MainControl_donphan.html',
		'./MainControl_donphan',
		'./MainControl_elekid.html',
		'./MainControl_elekid',
		'./MainControl_espeon.html',
		'./MainControl_espeon',
		'./MainControl_flaaffy.html',
		'./MainControl_flaaffy',
		'./MainControl_girafarig.html',
		'./MainControl_girafarig',
		'./MainControl_gligar.html',
		'./MainControl_gligar',
		'./MainControl_hoothoot.html',
		'./MainControl_hoothoot',
		'./MainControl_nothing_connected.html',
		'./MainControl_nothing_connected',
		'./MainControl_one.html',
		'./MainControl_one',
		'./MainControl_sticks.html',
		'./MainControl_sticks',
		'./MainControl_two.html',
		'./MainControl_two',
		'./MainControl_twos.html',
		'./MainControl_twos',
		'./manifest.json',
		'./service-worker.js',
		'./assets/anc_off_icon.svg',
		'./assets/anc_on_icon.svg',
		'./assets/anc_transparent_icon.svg',
		'./assets/arrow_right.svg',
		'./assets/b170_black_left.webp',
		'./assets/b170_grey_left.webp',
		'./assets/b179_black_case.webp',
		'./assets/b179_black_duo.webp',
		'./assets/b179_black_left.webp',
		'./assets/b179_black_right.webp',
		'./assets/b179_green_case.webp',
		'./assets/b179_green_duo.webp',
		'./assets/b179_green_left.webp',
		'./assets/b179_green_right.webp',
		'./assets/b179_orange_case.webp',
		'./assets/b179_orange_duo.webp',
		'./assets/b179_orange_left.webp',
		'./assets/b179_orange_right.webp',
		'./assets/b184_blue_case.webp',
		'./assets/b184_blue_duo.webp',
		'./assets/b184_blue_left.webp',
		'./assets/b184_blue_right.webp',
		'./assets/b184_white_case.webp',
		'./assets/b184_white_duo.webp',
		'./assets/b184_white_left.webp',
		'./assets/b184_white_right.webp',
		'./assets/b185_black_case.webp',
		'./assets/b185_black_duo.webp',
		'./assets/b185_black_left.webp',
		'./assets/b185_black_right.webp',
		'./assets/b185_orange_case.webp',
		'./assets/b185_orange_duo.webp',
		'./assets/b185_orange_left.webp',
		'./assets/b185_orange_right.webp',
		'./assets/b185_white_case.webp',
		'./assets/b185_white_duo.webp',
		'./assets/b185_white_left.webp',
		'./assets/b185_white_right.webp',
		'./assets/back.svg',
		'./assets/crobat_black.webp',
		'./assets/crobat_orange.webp',
		'./assets/crobat_white.webp',
		'./assets/donphan_black_case.webp',
		'./assets/donphan_black_left.webp',
		'./assets/donphan_black_right.webp',
		'./assets/donphan_orange_case.webp',
		'./assets/donphan_orange_left.webp',
		'./assets/donphan_orange_right.webp',
		'./assets/donphan_white_case.webp',
		'./assets/donphan_white_left.webp',
		'./assets/donphan_white_right.webp',
		'./assets/ear_bass_enhance_off.svg',
		'./assets/ear_bass_enhance_on.svg',
		'./assets/ear_color_black_case.webp',
		'./assets/ear_color_black_left.webp',
		'./assets/ear_color_black_right.webp',
		'./assets/ear_color_white_case.webp',
		'./assets/ear_color_white_left.webp',
		'./assets/ear_color_white_right.webp',
		'./assets/ear_color_yellow_case.webp',
		'./assets/ear_color_yellow_left.webp',
		'./assets/ear_color_yellow_right.webp',
		'./assets/ear_corsola_black_case.webp',
		'./assets/ear_corsola_black_left.webp',
		'./assets/ear_corsola_black_right.webp',
		'./assets/ear_corsola_orange_case.webp',
		'./assets/ear_corsola_orange_left.webp',
		'./assets/ear_corsola_orange_right.webp',
		'./assets/ear_corsola_white_case.webp',
		'./assets/ear_corsola_white_left.webp',
		'./assets/ear_corsola_white_right.webp',
		'./assets/ear_one_black_case.webp',
		'./assets/ear_one_black_duo.webp',
		'./assets/ear_one_black_left.webp',
		'./assets/ear_one_black_right.webp',
		'./assets/ear_one_white_case.webp',
		'./assets/ear_one_white_duo.webp',
		'./assets/ear_one_white_left.webp',
		'./assets/ear_one_white_right.webp',
		'./assets/ear_stick_case_full.webp',
		'./assets/ear_stick_case_none.webp',
		'./assets/ear_stick_left.webp',
		'./assets/ear_stick_right.webp',
		'./assets/ear_stick_test_introduce.webp',
		'./assets/ear_stick_white_duo.webp',
		'./assets/ear_two_black_case.webp',
		'./assets/ear_two_black_duo.webp',
		'./assets/ear_two_black_left.webp',
		'./assets/ear_two_black_right.webp',
		'./assets/ear_two_white_case.webp',
		'./assets/ear_two_white_duo.webp',
		'./assets/ear_two_white_left.webp',
		'./assets/ear_two_white_right.webp',
		'./assets/ear_twos_black_case.webp',
		'./assets/ear_twos_black_left.webp',
		'./assets/ear_twos_black_right.webp',
		'./assets/ear_twos_white_case.webp',
		'./assets/ear_twos_white_left.webp',
		'./assets/ear_twos_white_right.webp',
		'./assets/espeon_black_case.webp',
		'./assets/espeon_black_left.webp',
		'./assets/espeon_black_right.webp',
		'./assets/espeon_blue_case.webp',
		'./assets/espeon_blue_left.webp',
		'./assets/espeon_blue_right.webp',
		'./assets/espeon_orange_case.webp',
		'./assets/espeon_orange_left.webp',
		'./assets/espeon_orange_right.webp',
		'./assets/espeon_white_case.webp',
		'./assets/espeon_white_left.webp',
		'./assets/espeon_white_right.webp',
		'./assets/flaffy_white_case.webp',
		'./assets/flaffy_white_left.webp',
		'./assets/flaffy_white_right.webp',
		'./assets/gradient_image.webp',
		'./assets/Image_1280x1020-4_cfd24e41-e162-4bf8-8833-0ac601b6954b_1472x.webp',
		'./assets/left-arrow-svgrepo-com.svg',
		'./assets/loading.svg',
		'./assets/LOGO.webp',
		'./assets/nothing_connected.webp',
		'./assets/nothing_connected2.webp',
		'./assets/off_black.webp',
		'./assets/off_white.webp',
		'./assets/on_black.webp',
		'./assets/on_white.webp',
		'./assets/transparent_black.webp',
		'./assets/transparent_white.webp',
		'./fonts/lettera_monoll_light.otf',
		'./fonts/lettera_monoll_medium.otf',
		'./fonts/lettera_monoll_regular.otf',
		'./fonts/manrope_medium.otf',
		'./fonts/manrope_regular.otf',
		'./fonts/manrope_semi_bold.otf',
		'./fonts/ndot_55.otf',
		'./fonts/ndot_55_bold.otf',
		'./fonts/ndot_57.otf',
		'./fonts/roboto_light.ttf',
		'./fonts/roboto_medium.ttf',
		'./fonts/roboto_medium_numbers.ttf',
		'./fonts/roboto_regular.ttf',
		'./fonts/semi_mono_medium_trial.otf',
		'./fonts/space_grotesk_bold.ttf',
		'./fonts/space_grotesk_light.ttf',
		'./fonts/space_grotesk_medium.ttf',
		'./fonts/space_grotesk_regular.ttf',
		'./fonts/space_grotesk_semibold.ttf',
		'./fonts/SpaceGrotesk-Light.otf',
		'./icons/1024x1024.png',
		'./icons/128x128.png',
		'./icons/16x16.png',
		'./icons/24x24.png',
		'./icons/256x256.png',
		'./icons/32x32.png',
		'./icons/48x48.png',
		'./icons/512x512.png',
		'./icons/64x64.png',
		'./js/bluetooth_socket.js',
		'./js/cleffa.js',
		'./js/control.js',
		'./js/corsola.js',
		'./js/crobat.js',
		'./js/donphan.js',
		'./js/ear_config_file.json',
		'./js/elekid.js',
		'./js/eq_cleffa.js',
		'./js/eq_corsola.js',
		'./js/eq_crobat.js',
		'./js/eq_donphan.js',
		'./js/eq_espeon.js',
		'./js/eq_one.js',
		'./js/eq_sticks.js',
		'./js/eq_two.js',
		'./js/espeon.js',
		'./js/flaaffy.js',
		'./js/nothing_connected.js',
		'./js/one.js',
		'./js/sticks.js',
		'./js/transitions.js',
		'./js/two.js',
		'./js/twos.js',
		'./js/versionUtils.js',
		'./js/external/Chart.js',
		'./js/external/chartjs-plugin-dragdata.min.js',
		'./js/external/tailwind.js'
	].map(resolveUrl),

	debug = console.debug.bind(console)

function resolveUrl(requestOrUrl){
	const url = new URL(requestOrUrl?.url ?? requestOrUrl, self.registration.scope)
	url.hash = ''
	return url.href
}

async function cacheStaticUrls(){
	try{
		await caches.delete(STATIC_CACHE_NAME)
		await (await caches.open(STATIC_CACHE_NAME)).addAll(STATIC_CACHE_URLS)
		debug('Installed or updated service worker')
	}
	catch(error){
		debug('Error installing or updating service worker', error)
		throw error
	}
}

async function fetchThroughCache(requestOrUrl, clientId){
	const
		url = resolveUrl(requestOrUrl),
		urlStatic = STATIC_CACHE_URLS.includes(url),
		clientUrl = (await self.clients.get(clientId))?.url,
		cacheParam = clientUrl ? new URLSearchParams((new URL(clientUrl).hash || '#').slice(1)).get('cache') : '',
		useCache = (url.startsWith('https://') || url.startsWith('http://')) &&
			(requestOrUrl?.method.toUpperCase() ?? 'GET') === 'GET' && urlStatic,
		cacheStatic = urlStatic && useCache,
		onlyCache = !urlStatic && cacheParam === 'only' && useCache
	try{
		const
			cache = !useCache || await caches.open(STATIC_CACHE_NAME),
			cachedResponse = (!useCache || await cache.match(url)) ?? true
		try{
			const response = !navigator.onLine && cachedResponse !== true || onlyCache || await fetch(requestOrUrl)
			if(useCache){
				if(response !== true && (response.ok || response.status === 0))
					try{
						await cache.put(url, response.clone())
						if(cacheStatic)
							debug('Cached ' + url)
					}
					catch(error){
						if(cacheStatic)
							debug('Error caching ' + url, error)
						throw error
					}
				else if(cachedResponse !== true){
					if(cacheStatic)
						debug('Using cache of ' + url)
					return cachedResponse
				}
			}
			if(onlyCache)
				throw new TypeError('Error getting cache of ' + url)
			return response
		}
		catch(error){
			if(cachedResponse !== true){
				if(cacheStatic)
					debug('Using cache of ' + url)
				return cachedResponse
			}
			else{
				if(cacheStatic)
					debug('Error getting ' + url, error)
				throw error
			}
		}
	}
	catch(error){
		if(cacheStatic)
			debug('Error getting ' + url, error)
		throw error
	}
}

self.addEventListener('install', event => event.waitUntil(cacheStaticUrls()))

self.addEventListener('fetch', event => event.respondWith(fetchThroughCache(event.request, event.clientId)))