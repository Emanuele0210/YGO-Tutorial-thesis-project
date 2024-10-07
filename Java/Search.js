class Site_topics{
    constructor(name,categories,img_topics,description,url){
        this.name = name;
        this.categories =categories;
        this.img_topics = img_topics;
        this.description = description;
        this.url =url;
    }
}
const List_topics = [
    new Site_topics("Yubel","Deck Tutorial","","Learn the secrets of the Yubel deck",""),
    new Site_topics("Goti","Deck Tutorial","","Learn the secrets of the Goti deck",""),
    new Site_topics("Sky Striker","Deck Tutorial","","Learn the secrets of the Sky Striker deck",""),
    new Site_topics("Memento","Deck Tutorial","","Learn the secrets of the Memento deck",""),
    new Site_topics("Vaalmonica","Deck Tutorial","","Learn the secrets of the Vaalmonica deck",""),
    new Site_topics("Volcanic","Deck Tutorial","","Learn the secrets of the Volcanic deck",""),
    new Site_topics("Dinomorphia","Deck Tutorial","","Learn the secrets of the Dinomorphia deck",""),
    new Site_topics("Exosister","Deck Tutorial","","Learn the secrets of the Exosister deck",""),
    new Site_topics("Ritual Beast","Deck Tutorial","","Learn the secrets of the Ritual Beast deck",""),
    new Site_topics("Vanquish Soul","Deck Tutorial","","Learn the secrets of the Vanquish Soul deck",""),
];

function Search_display_results(Input_search){
    const Results_search = document.getElementById("Results_search");
    Results_search.innerHTML = "";

    const Topics_search = List_topics.filter(Topics_filter);

    function Topics_filter(subject){
        var Id_category = subject.categories.toLowerCase().includes(Input_search);
        var Id_name = subject.name.toLowerCase().includes(Input_search);
        return Id_category || Id_name;
    }

    Topics_search.sort(function(a,b){
        if(a.categories > b.categories){
            return 1;
        }
        if(a.categories < b.categories){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        return 0;
    });


    Topics_search.forEach(Topic_forEach);
    function Topic_forEach(subject){
        const List = document.createElement("li");
        const Link = document.createElement("a");
        const Link_desription = document.createElement("p");

        Results_search.appendChild(List);
        List.appendChild(Link);
        List.appendChild(Link_desription);

        Link.textContent = subject.name;
        Link_desription.textContent = subject.description;
    }
}

Search_display_results("");

document.getElementById("Search_input").addEventListener("input", function(){
    const Input_search = this.value.toLowerCase();
    Search_display_results(Input_search);
});
