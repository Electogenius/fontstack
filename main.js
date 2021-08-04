
let lorem=document.getElementById("lorem").innerHTML.replace(/<\/?div>/g,"")
function toEl(c) {
	if(typeof c=="string")c=c.split(" ")
	let el = document.createElement("span")
	c.forEach((e, nd) => {
		let h = document.createElement("span"),
			t = e.replace(/#|\./, "")
		h.style.fontFamily = t
		h.innerText = lorem.split(/[\s\n]+/).slice(1)[nd] + " "
		if (/#/g.test(e)) h.style.fontStyle = "italic"
		if (/\./g.test(e)) h.style.fontWeight = "1000"
		if (e == Number(e)) {
			h.innerHTML = Number(e)
			h.style.paddingRight="0.5rem"
			h.style.fontFamily="system-ui,sans-serif"
			h.style.color="#e42"
		}
		el.appendChild(h)
	})
	return el
}
function gen(text) {
	return text.split("").map(e=>e.charCodeAt()).join(" serif .courier #menlo ")+" serif .courier .menlo"
}
let t = toEl(gen("Hello, world"))
, funs = [
	n => { //"peek"
		return `ss[cst][ss[cst].length-1]=ss[cst][ss[cst].length-(1+${n})]`
	}
]
document.getElementById("test").innerHTML = t.innerHTML
run(t)
function run(code) {
	let ss = [[0]],
		cs = code.childNodes,
		op="",
		cst=0
	for (var nd = 0; nd < cs.length; nd++) {
		let e=cs[nd]
		let f = e.style.fontFamily,
			b = e.style.fontWeight == "1000",
			it = e.style.fontStyle == "italic"
		l = (e=-1) => num(cs[nd + e])
		if (!(e.innerText == Number(e.innerText))) {
			if (it) {
				if (f == "menlo") ss[cst].push(0)
				if (f == "courier") ss[cst].pop()
				if (f == "serif") ss[cst][ss[cst].length - 1]++
				if (f == "sans-serif") ss[cst][ss[cst].length - 1]--
				if (f == "cursive") ss[cst][ss[cst].length - 1] *= 2
				if (f == "fantasy") ss[cst][ss[cst].length - 1] /= 2
			}
			if (!(b||it)) {
				if (f == "menlo") ss[cst].push(l())
				if (f == "courier") ss[cst].shift()
				if (f == "serif") ss[cst][ss[cst].length - 1] += l()
				if (f == "sans-serif") ss[cst][ss[cst].length - 1] -= l()
				if (f == "cursive") ss[cst][ss[cst].length - 1] *= l()
				if (f == "fantasy") ss[cst][ss[cst].length - 1] /= l()
			}
			if (b) {
				if(f=="menlo"){
					console.log(op)
				}
				if(f=="courier"){
					op+=String.fromCharCode(ss[cst][ss[cst].length-1])
				}
				if(f=="serif"){
					cst++
				}
				if (f == "sans-serif") {
					cst--
				}
				if(f=="cursive"){
					if(ss[cst][ss[cst].length-1]){
						nd+=l()
					}
				}
				if(f=="fantasy"){
					eval((funs[l()] || function(){return""}).call(l(1),l(2),l(3)))
				}
			}
		}
	}
	return ss
}
function num(el) {
	if(!el)return 0
	return Number(el.innerHTML) || 0
}