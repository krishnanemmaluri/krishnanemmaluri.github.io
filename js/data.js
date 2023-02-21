//JavaScript
var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.action.zoom,
    siblingSeparation: 50,
    template: 'hugo',
    mode: 'dark',
    miniMap: true,    
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
        field_2: "linkedin",
        field_3: "facebook",
        field_4: "surname"
    }
});

FamilyTree.miniMap.colors = ["#FFCA28", "#F57C00", "#039be5", "#757575"];
FamilyTree.miniMap.selectorBackgroundColor = "#0F0F0F";
FamilyTree.miniMap.focusStroke = "#039BE5";
FamilyTree.miniMap.opacity = 0.2;
FamilyTree.miniMap.border = '1px solid #0D0D0D';
FamilyTree.miniMap.width = 200;
FamilyTree.miniMap.height = 100;
FamilyTree.miniMap.padding = 10;
FamilyTree.miniMap.position = {
  top: 'padding',
  left: 'padding',
  right: undefined,
  bottom: undefined
};

chart.load([
    {id: 1, title: 'Ancestor / Progenitor', name: 'Gadhapani Nemmaluri', gender: 'male', },
    {id: 2, mid: 1, title: 'Late', name: 'Sarabhanna ', gender: 'male', },
    {id: 3, mid: 1, title: 'Late', name: 'Pattenna ', gender: 'male', },
    {id: 4, mid: 2, title: 'Late', name: 'Gadhapani ', gender: 'male', },
    {id: 5, mid: 4, title: 'Late', name: 'Uppayya ', gender: 'male', },
    {id: 6, mid: 4, title: 'Late', name: 'Subbanna ', gender: 'male', },
    {id: 7, mid: 4, title: 'Late', name: 'Sankarappa ', gender: 'male', },
    {id: 8, mid: 4, title: 'Late', name: 'Mallayya ', gender: 'male', },
    {id: 9, mid: 4, title: 'Late', name: 'Veeranna ', gender: 'male', },
    {id: 10, mid: 5, title: 'Late', name: 'Mallayya ', gender: 'male', },
    {id: 11, mid: 5, title: 'Late', name: 'Bulli Ramayya ', gender: 'male', },
    {id: 12, mid: 11, title: 'Late', name: 'Vigneswarudu ', gender: 'male', },
    {id: 13, mid: 11, title: 'Late', name: 'Venkata Subbarao ', gender: 'male', },
    {id: 14, mid: 11, title: 'Late', name: 'Satyanarayana ', gender: 'male', },
    {id: 15, pids: [16], mid: 14, title: 'Late', name: 'Seetarama Murthy', gender: 'male', },
    {id: 16, pids: [15], title: 'Late', name: 'Unknown', gender: 'female', },
    {id: 17, pids: [18], mid: 14, title: 'Late', name: 'Satyanarayana Murthy', gender: 'male', },
    {id: 18, pids: [17], title: 'Late', name: 'Satyavathi', gender: 'female', linkedin: 'abc', },
    {id: 19, pids: [17], name: 'Sree Lakshmi', gender: 'female', },
    {id: 20, pids: [21], mid: 15, fid: 16, name: 'Bhagavan', gender: 'male', },
    {id: 21, pids: [20], title: 'Late', name: 'Baby', gender: 'female', },
    {id: 22, pids: [23], mid: 15, fid: 16, name: 'Subrahmanyam', gender: 'male', facebook: 'def'},
    {id: 23, pids: [22], name: 'Name Here with maiden name', gender: 'female', },
    {id: 24, mid: 15, fid: 16, name: 'Venkata Subbalakshmi Narsamma', gender: 'female', },
    {id: 25, pids: [26], mid: 17, fid: 18, name: 'Suryanarayana', gender: 'male', location: 'Hyderabad', },
    {id: 26, pids: [25], name: 'Satyavathi', gender: 'female', },
    {id: 27, pids: [28], name: 'Baburao Duggirala', gender: 'male', },
    {id: 28, pids: [27], mid: 17, fid: 18, name: 'Janaki', gender: 'female', },
    {id: 29, pids: [30], name: 'Raghavarao Kadiyala', gender: 'male', },
    {id: 30, pids: [29], mid: 17, fid: 18, title: 'Late', name: 'Kamala', gender: 'female', },
    {id: 31, pids: [32], mid: 17, fid: 18, title: 'Late', name: 'Nataraju', gender: 'male', location: 'Tadepalligudem', },
    {id: 32, pids: [31], name: 'Lakshmi (Chivukula)', gender: 'female', phone: '123', },
    {id: 33, pids: [34], name: 'Sastry Akella', gender: 'male', },
    {id: 34, pids: [33], mid: 17, fid: 18, name: 'Sreedevi', gender: 'female', },
    {id: 35, mid: 17, fid: 18, title: 'Late', name: 'Tirupati Lakshmi Prasad', gender: 'male', },
    {id: 36, pids: [37], name: 'Kamesh Kalaga', gender: 'male', },
    {id: 37, pids: [36], mid: 17, fid: 19, name: 'Sailaja', gender: 'female', },
    {id: 38, pids: [39], name: 'Venkataraman', gender: 'male', },
    {id: 39, pids: [38], mid: 17, fid: 19, name: 'Jayanthi', gender: 'female', },
    {id: 40, pids: [41], mid: 17, fid: 19, name: 'Taraka Rama Sastry', gender: 'male', },
    {id: 41, pids: [40], name: 'Unknown', gender: 'female', }
]);
