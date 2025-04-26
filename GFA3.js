 var input;
      do {
        input = prompt("Please enter a number:");
      } while (isNaN(input) || input.trim() === "");

      const num = parseInt(input);
      const outputDiv = document.getElementById("output");

      var result = `<p>Number inputted: ${num}</p>`;

		if (num % 2 !== 0) 
		{
				for (var x = num; x >= 1; x--) 
				{
					for (var y = 1; y <= num; y++) 
					{
						result += x + " ";
					}
					result += "<br>";
				}
		} 
		else 
		{
			for (var x = num; x >= 1; x--) 
			{
				for (var y = 1; y <= x; y++) 
				{
					result += x + " ";
				}
				result += "<br>";
			}
		}

outputDiv.innerHTML = result;

let contacts = [];

function DisplayShow() 
{
    document.getElementById("nameslist").innerHTML = contacts.join(" ");
}

function add() 
{
    var input = document.getElementById("name");
    var name = input.value.trim();
    if (name === "") 
    {
        return;
    }
    if (contacts.length === 7) 
    {
        contacts.shift();
    }

    contacts.push(name);
    input.value = "";
    DisplayShow();
}

function remove() 
{
    contacts.pop();
    DisplayShow();
}

DisplayShow();