import data_base from './data_base.js'
import { createCssIcon, createHtmlIcon, createJavaIcon, createSqlIcon, createReactNativeIcon } from './toolsIcon.js'

const renderize = {
    trainingPage(){
        const section = document.querySelector('#training_section')
    
        /*TITLE OF SECTION*/
        const h2 = document.createElement('h2')
        h2.textContent = 'Formações'
    
        /*UL OF SECTION*/
        const training_onWeb = document.createElement('ul')
        training_onWeb.id = 'training_onWeb'
    
        const ulTitle = document.createElement('h3')
        ulTitle.textContent = 'Formações disponíveis por link'
    
        /*LI OF UL*/
        const back_end = document.createElement('li')
        back_end.classList.add('back_end')
        const front_end = document.createElement('li')
        front_end.classList.add('front_end')
        const database = document.createElement('li')
        database.classList.add('database')
    
        back_end.append(titleOfColumn('Back-End'))
        front_end.append(titleOfColumn('Front-End'))
        database.append(titleOfColumn('Banco de Dados'))
        const certificates = data_base.certificates

        certificates.forEach(certificate => {
            let ul
            
            if(certificate.link){
                ul = training_onWeb
            }
    
            const a = document.createElement('a')
            a.textContent = certificate.name
            a.setAttribute('href', certificate.link)
            a.setAttribute('target', '_blank')
    
            switch (certificate.column){
                case 'back':
                    back_end.append(a)
                    break;
                case 'front':
                    front_end.append(a)
                    break;
                case 'database':
                    database.append(a)
            }
    
            // const icon = document.createElement('div')
            // icon.classList.add('training_icon')
            // icon.classList.add(certificate.icon)
            // a.append(icon)
            const iconMap = {
                html: createHtmlIcon,
                css: createCssIcon,
                java: createJavaIcon,
                sql: createSqlIcon,
                reactNative: createReactNativeIcon
            };
            const icon = document.createElement('div')
            icon.classList.add('training_icon')
            const thisIcon = certificate.icon;
            if (iconMap[thisIcon]) {
                icon.innerHTML = iconMap[thisIcon]();
                a.append(icon);
            }

        })
    
        training_onWeb.append(ulTitle, back_end, add_hr(), front_end, add_hr(), database)
    
        section.append(training_onWeb)
    
        function titleOfColumn(title) {
            const titleofColumn = document.createElement('h4')
            titleofColumn.textContent = title
            return titleofColumn
        }
        function add_hr() {
            const hr = document.createElement('hr')
            return hr
        }
    },
    projectPage(){
        const section = document.querySelector('#project_section')
        const ul__front_end = document.createElement('ul')
        ul__front_end.id = 'projects__front_end'

        const projects = data_base.projects
        projects.forEach(project => {
            const li = document.createElement('li')
            const png = document.createElement('img')
            png.setAttribute('src', project.img)
            png.setAttribute('alt', project.name)

            const github = buildIcon('github', 'GitHub', project.github)
            const vercel = buildIcon('vercel', 'Vercel', project.vercel)

            li.append(png, github, vercel)
            ul__front_end.append(li)
        })
        section.append(ul__front_end)
    }

}

function buildIcon(name, text, link){
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')
    a.setAttribute('href', link)
    a.id = `link_${name}`
    const icon = document.createElement('img')
    icon.setAttribute('src', `../img/${name}_logo.png`)
    icon.setAttribute('alt', `link ${name}`)
    const text_link = document.createElement('p')
    text_link.textContent = text
    a.append(icon, text_link)
    return a
}
export default renderize