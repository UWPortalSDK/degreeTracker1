angular.module('portalApp')
    .controller('degreeTracker1Ctrl', ['$scope', 'pouchService', '$rootScope', function($scope, pouchService, $rootScope) {
        // I wanna either move this to another file or store it in a database.......(same with courses)
        // Majors/Minors/Courses
        var selected = false;

        // handle boundary case: check if couch has any data for this widget
        if (typeof pouchService.widgetData['degreeTracker1'] != 'undefined') {
            // data exist: assume first document in the array has our data
            selected = pouchService.widgetData['degreeTracker1'][0].value;
        } else {
            // data does not exist: initialize service data to an empty array
            // so we can $watch it
            pouchService.widgetData['degreeTracker1'] = [];
        }

        // store data in a variable, so we don't have to re-type the whole thing again
        // note: have to do it here, in case it was previously undefined
        $scope.data = pouchService.widgetData['degreeTracker1'];

        var CS_135 = {
            title: 'CS 135',
            description: 'An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion. Historical context.',
            checkbox: {
                value: selected
            }
        };
        var CS_136 = {
            title: 'CS 136',
            description: 'This course builds on the techniques and patterns learned in CS 135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.',
            checkbox: {
                value: selected
            }
        };
        var CS_240 = {
            title: 'CS 240',
            description: 'Introduction to widely used and effective methods of data organization, focusing on data structures, their algorithms, and the performance of these algorithms. Specific topics include priority queues, sorting, dictionaries, data structures for text processing.',
            checkbox: {
                value: selected
            }
        };
        var CS_241 = {
            title: 'CS 241',
            description: 'The relationship between high-level languages and the computer architecture that underlies their implementation, including basic machine architecture, assemblers, specification and translation of programming languages, linkers and loaders, block-structured languages, parameter passing mechanisms, and comparison of programming languages.',
            checkbox: {
                value: selected
            }
        };
        var CS_245 = {
            title: 'CS 245',
            description: 'Propositional and predicate logic. Soundness and completeness and theirimplications. Unprovability of formulae in certain systems. Undecidability of problems in computation, including the halting problem. Reasoning about programs. Correctness proofs for both recursive and iterative program constructions.',
            checkbox: {
                value: selected
            }
        };
        var CS_246 = {
            title: 'CS 246',
            description: 'Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.',
            checkbox: {
                value: selected
            }
        };
        var CS_251 = {
            title: 'CS 251',
            description: 'Overview of computer organization and performance. Basics of digital logic design. Combinational and sequential elements. Data representation and manipulation. Basics of processor design. Pipelining. Memory hierarchies. Multiprocessors.',
            checkbox: {
                value: selected
            }
        };
        var CS_341 = {
            title: 'CS 341',
            description: 'The study of efficient algorithms and effective algorithm design techniques. Program design with emphasis on pragmatic and mathematical aspects of program efficiency. Topics include divide and conquer algorithms, recurrences, greedy algorithms, dynamic programming, graph search and backtrack, problems without algorithms, NP-completeness and its implications.',
            checkbox: {
                value: selected
            }
        };
        var CS_350 = {
            title: 'CS 350',
            description: 'An introduction to the fundamentals of operating system function, design, and implementation. Topics include concurrency, synchronization, processes, threads, scheduling, memory management, file systems, device management, and security.',
            checkbox: {
                value: selected
            }
        };
        var STAT_230 = {
            title: 'STAT 230',
            description: 'This course provides an introduction to probability models including sample spaces, mutually exclusive and independent events, conditional probability and Bayes\' Theorem. The named distributions (Discrete Uniform, Hypergeometric, Binomial, Negative Binomial, Geometric, Poisson, Continuous Uniform, Exponential, Normal (Gaussian), and Multinomial) are used to model real phenomena. Discrete and continuous univariate random variables and their distributions are discussed. Joint probability functions, marginal probability functions, and conditional probability functions of two or more discrete random variables and functions of random variables are also discussed. Students learn how to calculate and interpret means, variances and covariances particularly for the named distributions. The Central Limit Theorem is used to approximate probabilities.',
            checkbox: {
                value: selected
            }
        };
        var STAT_231 = {
            title: 'STAT 231',
            description: 'This course provides a systematic approach to empirical problem solving which will enable students to critically assess the sampling protocol and conclusions of an empirical study including the possible sources of error in the study and whether evidence of a causal relationship can be reasonably concluded. The connection between the attributes of a population and the parameters in the named distributions covered in STAT 230 will be emphasized. Numerical and graphical techniques for summarizing data and checking the fit of a statistical model will be discussed. The method of maximum likelihood will be used to obtain point and interval estimates for the parameters of interest as well as testing hypotheses. The interpretation of confidence intervals and p-values will be emphasized. The Chi-squared and t distributions will be introduced and used to construct confidence intervals and tests of hypotheses including likelihood ratio tests. Contingency tables and Gaussian response models including the two sample Gaussian and simple linear regression will be used as examples.',

            checkbox: {
                value: selected
            }
        };
        var CO_250 = {
            title: 'CO 250',
            description: 'A broad introduction to the field of optimization, discussing applications and solution techniques. Mathematical models for real life applications; algorithms; aspects of computational complexity; geometry; linear programming duality, focusing on the development of algorithms.',
            checkbox: {
                value: selected
            }
        };
        var MATH_135 = {
            title: 'Math 135',
            description: 'An introduction to the language of mathematics and proof techniques through a study of the basic algebraic systems of mathematics: the integers, the integers modulo n, the rational numbers, the real numbers, the complex numbers and polynomials.',
            checkbox: {
                value: selected
            }
        };
        var MATH_136 = {
            title: 'Math 136',
            description: 'Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations and matrix representations. Determinants, eigenvalues and diagonalization, applications. ',
            checkbox: {
                value: selected
            }
        };
        var MATH_137 = {
            title: 'Math 137',
            description: 'Absolute values and inequalities. Sequences and their limits. Introduction to series. Limits of functions and continuity. The Intermediate Value Theorem and approximate solutions to equations. Derivatives, linear approximation and Newton\'s method. The Mean Value Theorem and error bounds. Applications of the Mean Value Theorem, Taylor polynomials and Taylor\'s Theorem, Big-O Notation, Suitable topics are illustrated using computer software.',
            checkbox: {
                value: selected
            }
        };
        var MATH_138 = {
            title: 'Math 138',
            description: 'Introduction to the Riemann Integral and approximations. Antiderivatives and the Fundamental Theorem of Calculus. Change of variables, Methods of integration. Applications of the integral. Improper integrals. Linear and separable differential equations and applications. Tests for convergence for series. Binomial Series, Functions defined as power series and Taylor series. Vector (parametric) curves in R2. Suitable topics are illustrated using computer software. ',
            checkbox: {
                value: selected
            }
        };
        var MATH_239 = {
            title: 'Math 239',
            description: 'Introduction to graph theory: colourings, matchings, connectivity, planarity. Introduction to combinatorial analysis: generating series, recurrence relations, binary strings, plane trees.',
            checkbox: {
                value: selected
            }
        };

        var CS_Major = {
            title: 'Computer Science (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [MATH_135, MATH_136, MATH_137, MATH_138, CS_135, CS_136, MATH_239, CS_240, CS_241, CS_245, CS_246, CS_251, STAT_230, STAT_231, CS_341, CS_350],
            checkbox: {
                value: !selected
            }
        };
        var CO_Minor = {
            title: 'Combinatorics and Optimization (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [CS_135, CS_136, MATH_239],
            checkbox: {
                value: selected
            }
        };
        var PMATH_Minor = {
            title: 'Pure Mathematics (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [MATH_136, MATH_135, MATH_137, MATH_239, CO_250],
            checkbox: {
                value: selected
            }
        };
        

        // SHOW VIEWS
        $scope.portalHelpers.showView('degreeTracker1Main.html', 1);

        $scope.showDetails = function(item) {
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('degreeTracker1Details.html', 2);
        };

        $scope.showDetailDetails = function(course) {
            $scope.detailDetailsItem = course;
            $scope.portalHelpers.showView('degreeTracker1DetailDetails.html', 3);
        };

        $scope.goToConfig = function() {
            $scope.portalHelpers.showView('degreeTracker1Config.html', 2);
        };

        //Functions
        // handle checkbox change
        $scope.checkboxChanged = function(list) {
            // try to get the doc from pouch
            // need to do this to get accurate revision (doc may have changed on another client)
            $rootScope.pouchDbLocal.get('degreeTracker1-checkboxValue').then(
                function(doc) {
                    // doc found: set the value to checkbox state and save
                    doc.value = $scope.checkbox.value;
                    $rootScope.pouchDbLocal.put(doc).then(function(succ) {
                        console.log('put success: ', succ);
                    }, function(fail) {
                        console.log('put fail: ', fail);
                    });
                },
                function(err) {
                    if (err.status == 404) {
                        // doc not found: create it and save with current checkbox state
                        $rootScope.pouchDbLocal.put({
                            _id: 'degreeTracker1-checkboxValue',
                            widget: 'degreeTracker1',
                            value: $scope.checkbox.value
                        }).then(function(succ) {
                            console.log('put success: ', succ);
                        }, function(fail) {
                            console.log('put fail: ', fail);
                        });
                    }
                }
            );
            $scope.init();
        };

        /*function compare(a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        }*/

        // watch for changes in data: this allows us to handle changes made on another client
        $scope.$watch('data', function() {
            if ($scope.data.length === 0)
                return;

            // update checkbox state
            $scope.checkbox.value = $scope.data[0].value;
        }, true);

        //Variables    
        $scope.allPlans = [CS_Major, CO_Minor, PMATH_Minor];
        $scope.myPlans = [];

        $scope.numCoursesRequired = 0;
        $scope.numCoreCourses = 0;
        $scope.numMinorCourses = 0;
        $scope.numCoreTaken = 0;
        $scope.numMinorTaken = 0;
        $scope.first = 0;
        $scope.second = 0;
        $scope.third = 0;

        $scope.init = function() {
            $scope.numCoursesRequired = 0;
            $scope.numCoreCourses = 0;
            $scope.numMinorCourses = 0;
            $scope.numCoreTaken = 0;
            $scope.numMinorTaken = 0;
            $scope.myPlans.splice(0, $scope.myPlans.length);
            for (var x = 0; x < $scope.allPlans.length; x++) {
                if ($scope.allPlans[x].checkbox.value) {
                    $scope.myPlans.push($scope.allPlans[x]);
                }
            }
            for (var i = 0; i < $scope.myPlans.length; i++) {
                $scope.numCoursesRequired += $scope.myPlans[i].requirements.length;
                if ($scope.myPlans[i].title.search("(Major)") != -1) {
                    $scope.numCoreCourses += $scope.myPlans[i].requirements.length;
                    for (var j = 0; j < $scope.myPlans[i].requirements.length; j++) {
                        if ($scope.myPlans[i].requirements[j].checkbox.value) {
                            $scope.numCoreTaken += 1;
                        }
                    }
                }
                if ($scope.myPlans[i].title.search("(Minor)") != -1) {
                    $scope.numMinorCourses += $scope.myPlans[i].requirements.length;
                    for (var k = 0; k < $scope.myPlans[i].requirements.length; k++) {
                        if ($scope.myPlans[i].requirements[k].checkbox.value) {
                            $scope.numMinorTaken += 1;
                        }
                    }
                }
            }
            $scope.first = ($scope.numCoreCourses === 0) ? 0 : $scope.numCoreTaken / $scope.numCoreCourses * ($scope.numCoreCourses / $scope.numCoursesRequired) * 100;
            $scope.second = ($scope.numMinorCourses === 0) ? 0 : $scope.numMinorTaken / $scope.numMinorCourses * ($scope.numMinorCourses / $scope.numCoursesRequired) * 100;
            $scope.third = 100 - $scope.first - $scope.second;
        };
    }]);