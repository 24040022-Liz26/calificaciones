document.addEventListener('DOMContentLoaded', () => {
    const btnCalculate = document.getElementById('btn-calculate');
    const btnClear = document.getElementById('btn-clear');
    
    const inputs = {
        unidad1: document.getElementById('unidad1'),
        unidad2: document.getElementById('unidad2'),
        unidad3: document.getElementById('unidad3'),
        nombre: document.getElementById('nombre')
    };
    
    const results = {
        promedio: document.getElementById('promedio'),
        estatus: document.getElementById('estatus')
    };

    btnCalculate.addEventListener('click', () => {
        const u1 = parseFloat(inputs.unidad1.value) || 0;
        const u2 = parseFloat(inputs.unidad2.value) || 0;
        const u3 = parseFloat(inputs.unidad3.value) || 0;
        
        const promedioValue = (u1 + u2 + u3) / 3;
        results.promedio.value = promedioValue.toFixed(2);
        
        if (promedioValue >= 6) {
            results.estatus.value = 'Aprobado';
            results.estatus.style.color = '#10b981'; // Green
        } else {
            results.estatus.value = 'Reprobado';
            results.estatus.style.color = '#ef4444'; // Red
        }

        // feedback animation
        results.promedio.style.animation = 'none';
        results.promedio.offsetHeight; // trigger reflow
        results.promedio.style.animation = 'fadeIn 0.5s ease-out';
    });

    btnClear.addEventListener('click', () => {
        // Since it's a type="reset" button, main inputs clear automatically.
        // We just clear the result fields.
        setTimeout(() => {
            results.promedio.value = '';
            results.estatus.value = '';
            results.estatus.style.color = 'inherit';
        }, 10);
    });
});
