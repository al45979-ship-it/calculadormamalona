body{
    background-color: #d9d9d9;
    font-family: Arial, Helvetica, sans-serif;
}

.calculadora{
    width: 280px;
    margin: 60px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 8px gray;
    text-align: center;
}

h2{
    margin-bottom: 15px;
}

#pantalla{
    width: 95%;
    height: 40px;
    font-size: 20px;
    text-align: right;
    margin-bottom: 15px;
}

.botones{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
}

button{
    height: 45px;
    font-size: 18px;
    cursor: pointer;
}

.limpiar{
    grid-column: span 4;
    background: crimson;
    color: white;
}
