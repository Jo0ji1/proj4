document.getElementById('cadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    function check(f, fn, err, msg) {
      const v = document.getElementById(f).value.trim();
      const el = document.getElementById(err);
      if (!fn(v)) { el.textContent = msg; valid = false; }
      else          { el.textContent = ''; }
    }
    const isNotEmpty = v => v !== '';
    const isEmail    = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isCPF      = v => /^(\d{3}\.\d{3}\.\d{3}\-\d{2}|\d{11})$/.test(v);
    const isTel      = v => /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/.test(v);
    const isCEP      = v => /^\d{5}\-?\d{3}$/.test(v);
    const isNum      = v => /^\d+$/.test(v);
  
    check('nome',       isNotEmpty, 'err-nome', 'Informe seu nome.');
    check('email',      isEmail,    'err-email','E-mail inválido.');
    check('cpf',        isCPF,      'err-cpf',  'CPF inválido.');
    check('idade',      isNum,      'err-idade','Idade inválida.');
    check('telefone',   isTel,      'err-tel',  'Telefone inválido.');
    check('cep',        isCEP,      'err-cep',  'CEP inválido.');
    check('logradouro', isNotEmpty, 'err-log',  'Informe logradouro.');
    check('bairro',     isNotEmpty, 'err-bai',  'Informe bairro.');
    check('cidade',     isNotEmpty, 'err-cid',  'Informe cidade.');
    check('estado',     isNotEmpty, 'err-est',  'Informe estado.');
  
    if (valid) {
      alert('Formulário enviado com sucesso!');
      this.reset();
    }
  });
  