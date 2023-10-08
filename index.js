let img = document.querySelector('img');
let search = document.querySelector('i');
let namea = document.getElementById('name');
let officialname = document.getElementById('officialname');
let currencies = document.getElementById('currencies');
let err = document.getElementById('err');
let currenci_namea = document.getElementById('currenci-name');
let capital = document.getElementById('capital');
let region = document.getElementById('region');
let languages = document.getElementById('languages');
let borders = document.getElementById('borders');
let area = document.getElementById('area');
let population = document.getElementById('population');
let content = document.getElementById('content');

// console.log(final_url);
search.addEventListener('click', (e) => {
  let n = document.querySelector('input').value;
  const final_url = `https://restcountries.com/v3.1/name/${n}?fullText=true`;

  fetch(final_url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let ans = data[0];

      if (ans) {
        err.style.display = 'none';
        content.style.display = 'block';
        // console.log(Object.keys(ans.currencies)[0]);
        currencies.innerText = Object.keys(ans.currencies)[0];
        // console.log(ans.name.common);
        namea.innerText = ans.name.common;
        // console.log(ans.name.official);
        officialname.innerText = ans.name.official;
        // console.log(ans.currencies[Object.keys(ans.currencies)].name);
        currenci_namea.innerText =
          ans.currencies[Object.keys(ans.currencies)].name;
        // console.log(ans.capital[0]);
        capital.innerText = ans.capital[0];
        // console.log(ans.region);
        region.innerText = ans.region;
        // console.log(Object.values(ans.languages).toString().split(',').join(','));
        languages.innerText = Object.values(ans.languages)
          .toString()
          .split(',')
          .join(',');
        // console.log(Array.from(ans.borders).join(','));
        borders.innerText = Array.from(ans.borders).join(',');
        // console.log(ans.area);
        area.innerText = ans.area;
        // console.log(ans.flags.svg);
        img.src = ans.flags.svg;
        // console.log(ans.population);
        population.innerText = ans.population;
      } else {
        content.style.display = 'none';
        err.style.display = 'block';
        err.innerText = `${n} Not a valid country name`;
      }
    })
    .catch((e) => {
      console.log(e);
    });
});
