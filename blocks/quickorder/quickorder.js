function getTableHeaders() {
    return [
        'Product Code',
        'Product Description',
        'Availability',
        'Quantity',
        'Price'
    ];
}

function createQuickOrderTable() {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.className = 'quickorder-table';

    tableBody.append(createRow())
    table.appendChild(createTableHeader());
    table.appendChild(tableBody)

    return table;
}

function createActions() {
    let actionsContainer = document.createElement('div');
    let addRowButton = document.createElement('button');
    let addToCartButton = document.createElement('button');

    addRowButton.innerText = 'Add Row';
    addToCartButton.innerText = 'Add To basket';

    addRowButton.className = 'btn add-row';
    addToCartButton.className = 'btn add-to-cart'

    addRowButton.addEventListener('click', addRow);
    addToCartButton.addEventListener('click', addToCart)

    actionsContainer.append(addRowButton);
    actionsContainer.append(addToCartButton);

    return actionsContainer;
}

function createTableHeader() {
    let tableHeader = document.createElement('thead');
    tableHeader.insertRow();
    getTableHeaders().forEach((name) => {
        let heading = document.createElement('th');
        heading.innerHTML = name;
        tableHeader.childNodes[0].append(heading);
    });

    return tableHeader;
}

function createRow() {
    let row = document.createElement('tr');
    row.append(document.createElement('td').appendChild(document.createElement('input')));
    row.append(document.createElement('td'));
    row.append(document.createElement('td'));
    row.append(document.createElement('td').appendChild(document.createElement('input')));
    row.append(document.createElement('td'));

    return row;
}

function addRow() {
    let tableBody = document.querySelector('.quickorder-table tbody');
    tableBody.append(createRow());
}

function addToCart() {
    debugger;
}

export default async function decorate(block) {
    const quickOrderTable = createQuickOrderTable();
    const actions = createActions();

    block.append(quickOrderTable);
    block.append(actions);
}