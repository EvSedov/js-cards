const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});

function dragstart (e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
};

function dragend (e) {
  e.target.className = 'item';
};

function dragenter (e) {
  e.target.classList.add('hovered');
};

function dragleave (e) {
  e.target.classList.remove('hovered');
};

function dragover (e) {
  e.preventDefault();
};

function dragdrop (e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
};