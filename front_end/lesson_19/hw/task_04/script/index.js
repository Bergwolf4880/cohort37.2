// Для домашки в навигационным меню, сделать чтобы пункты меню добавлялись из JS из массива 
// (и сами пункты названия, и ссылки куда они должны вести), а не прописывались в HTML.

const navbarData =
  [
    {
      title: 'Microsoft 365',
      link: 'https://www.microsoft.com/de-de/microsoft-365'
    },
    {
      title: 'Teams',
      link: 'https://www.microsoft.com/de-de/microsoft-teams/group-chat-software'
    },
    {
      title: 'Copilot',
      link: 'https://copilot.microsoft.com/'
    },
    {
      title: 'Windows',
      link: 'https://www.microsoft.com/de-de/windows/?r=1'
    },
    {
      title: 'Surfaces',
      link: 'https://www.microsoft.com/en-us/surface'
    }
  ];

const navbar= document.querySelector('.container');



const navbarButtons = (array) => {

  const temp = array.map(element => {
    const newButton = document.createElement('a');
    newButton.classList.add('item')
    newButton.textContent = element.title;
    newButton.href = element.link;
    return newButton;
  })
  navbar.append(...temp);
};


navbarButtons(navbarData);
