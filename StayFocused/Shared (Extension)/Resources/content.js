/*let content = document.getElementById('contents')

content.remove()


const container = Object.assign(document.createElement('div'), {
	style: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	}
})

const button = document.createElement('button')
button.innerText = 'Show hidden content'

button.addEventListener('click', () => {
	container.replaceWith(content)
})

container.append(button)

content.replaceWith(container)
*/

// Funktion, um den Inhalt der YouTube-Website zu ersetzen
function replaceContent() {
  const content = document.getElementById('contents'); // Den Inhalt mit der ID 'contents' erhalten
  const container = document.createElement('div'); // Container-Element erstellen
  container.style.display = 'flex'; // Flexbox-Stil für den Container setzen
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.padding = '16px'; // Mehr Padding für den Button
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.backgroundColor = '#101010'; // Grauer Hintergrund für den Container
  container.style.color = 'white'; // Weiße Schriftfarbe für den Container

  const button = document.createElement('button'); // Button-Element erstellen
  button.innerText = 'Show hidden content'; // Text für den Button setzen
  button.style.fontSize = '24px'; // Größere Schriftgröße für den Button
  button.style.padding = '16px'; // Mehr Padding für den Button
  button.style.backgroundColor = '#272727'; // Grauer Hintergrund für den Button
  button.style.color = 'white'; // Weiße Schriftfarbe für den Button
  button.style.border = 'none'; // Kein Rahmen für den Button
  button.style.cursor = 'pointer'; // Zeiger-Cursor für den Button
  button.style.borderRadius = '8px'; // Abrundung der Ecken des Buttons
  button.style.transition = 'background-color 0.3s ease-in-out'; // Übergang für die Hintergrundfarbe hinzufügen

	
  // Hinzufügen von Event-Listenern für das Hover-Event des Buttons
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#404040'; // Hintergrundfarbe des Buttons bei Hover auf #636363 ändern
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#272727'; // Hintergrundfarbe des Buttons bei Hover wieder auf grau ändern
  });

	
	
	
	
	
	
  button.addEventListener('click', () => {
	// Event-Listener für den Button, der den Inhalt wieder anzeigt
	container.replaceWith(content); // Container mit dem Inhalt ersetzen
  });

  container.appendChild(button); // Button zum Container hinzufügen
  content.replaceWith(container); // Inhalt mit dem Container ersetzen
}

replaceContent(); // Funktion aufrufen, um den Inhalt zu ersetzen
