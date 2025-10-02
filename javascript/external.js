var webmaps =
[

  ["Open Street Map", "https://www.openstreetmap.org", "Open street map is a basic program utilized to route plan and develop simple diagrams. it is community driven, mapping source that utilizes local sources to reliably update the update the map."],

  ["Waze", "https://www.waze.com/live-map", "Waze uses user input data and other methods to provide services like route planning, and updates on things like police and traffic along the desired route. Real time updating with other map sources and tracking of mobile applications to track traffic density while allowing navigation."]
];


function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";

    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
document.write(welcome());


function webmap_table()
  {
    document.write("<table width=100%>");
    for (var row=0; row < webmaps.length; row++)
      {
        document.write("<tr>");

        for (var column=0; column < webmaps[0].length; column++)
          {
            if (column == 2)
            {
              document.write("<br>" + webmaps[row][column] + "<p> </p>");
            }
            else {
              document.write(webmaps[row][column] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                // &nbsp was my last resort to getting as spacing between the inputs.

            }

          }
        document.write("</tr>");
      }
    document.write("</table>");
    return "";
}
