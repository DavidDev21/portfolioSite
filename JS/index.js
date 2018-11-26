// javascript file for index.html

function scrollToSection(sectionID)
{
	var section = document.getElementById(sectionID);
	section.scrollIntoView({block: "start", behavior: "smooth"});
}