const pythonCompiler = require('../compilers/python');

test('Python Hello World', done => {
    pythonCompiler('print("Hello, World!")', (error, stdout, stderr) => {
        expect(stdout).toBe('Hello, World!\n');
        done();
    });
});
