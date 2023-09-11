//mTube
//minimalist youtube
//
//Fleserig73
document.body.style.cssText = "display:block !important";

if (window.location.pathname == "/") {
	document.body.innerHTML = `
  <div class="black"></div>
  <div class="bg"></div>
    <div class="home">
      <div class="searchBar">
        <input class="input" type="text" placeholder="Search" value="" />
        <button class="btn" type="submit">
          <svg width="24" height="24" viewBox="0 0 6.35 6.35"><g><circle style="fill:none;stroke:#e1e1e1;stroke-width:.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" cx="2.2611964" cy="2.5666258" r="1.6128712"/><path style="fill:none;stroke:#e1e1e1;stroke-width:.600001;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 3.5209838,3.806709 5.1979555,5.4671622"/></g></svg>
        </svg>
        </button>
      </div>
    </div>
  `;
	const input = document.getElementsByClassName("input")[0];
	const btn = document.getElementsByClassName("btn")[0];
	input.addEventListener("keypress",
		function(e) {
			if (e.key === "Enter") {
				window.location.href = `https://www.youtube.com/results?search_query=${input.value}`;
			}
		});
	btn.addEventListener("click",
		function(e) {
			window.location.href = `https://www.youtube.com/results?search_query=${input.value}`;
		});
}