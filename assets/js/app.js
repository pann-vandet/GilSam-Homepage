const lists = document.querySelector(".list-wrapper");
const list_item = [{
        data_time: "2020-02-06 00:27:13",
        name: "실험",
        address: "백제대로 567",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 1
    },
    {
        data_time: "2020-02-05 21:34:25",
        name: "팔복동",
        address: "전북 전주시 덕진구 팔복동",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 2
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "실험",
        address: "백제대로 567",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 3
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "인후1동",
        address: "전북 전주시 덕진구 인후동1가 766-9",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 4
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "진북동",
        address: "전북 전주시 덕진구 진북동",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 5
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "전주한옥마을",
        address: "전북 전주시 완산구 풍남동3가 기린대로 99",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 6
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암33",
        address: "전북 전주시 덕진구 금암2동 33",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 7
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암교3233",
        address: "전북 전주시 덕진구 금암1동 2214433",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 8
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암교3233",
        address: "전북 전주시 덕진구 금암1동 2214433",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 9
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암교3233",
        address: "전북 전주시 덕진구 금암1동 2214433",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 10
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암교3233",
        address: "전북 전주시 덕진구 금암1동 2214433",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 11
    },
    {
        data_time: "2020-02-06 00:27:13",
        name: "금암교3233",
        address: "전북 전주시 덕진구 금암1동 2214433",
        lat: 35.84271765749724,
        long: 127.13377161651677,
        id: 12
    }
];


const showLists = () => {

    let output = "";

    list_item.forEach(

        ({ data_time, name, address, lat, long, id }) =>

        (output += `

					<tr>
						<td>${data_time}</td>
						<td>${name}</td>
						<td>${address}</td>
						<td>
							<span>lat:</span><span>${lat}</span><br>
                        	<span>log:</span><span>${long}</span></td>
						<td class="text-center"> 
						  <button type="button" id="${id}" class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class="fa fa-eye"> </i></button>
                          <button type="button" id="${id}" class="btn btn-info btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class="fa fa-info-circle"> </i></button>
                          <a href="edit_form.html" type="button" id="${id}" class="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class="fa fa-edit"> </i></a>
                          <a href="#" type="button" id="${id}" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class="fa fa-trash"></i> </i></a>
						</td>
				`)

    );

    lists.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showLists);