(function() {var implementors = {};
implementors['libc'] = [];implementors['socket_addr'] = [];implementors['mio'] = [];implementors['hyper'] = [];implementors['igd'] = [];implementors['crust'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()