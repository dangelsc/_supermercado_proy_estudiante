angular.module('super_venta',[])
    .controller('ventas',function($scope){
        $scope.carrito=[];
        $scope.ejemplo="este dato desde codigo"
        $scope.total=0;
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
        function sumarProductos(){
            $scope.total=0;
            for(i=0;i<$scope.carrito.length;i++){
                $scope.total+=$scope.carrito[i].cant*$scope.carrito[i].precio;
            }
        }
        $scope.agregar=function(){
            $scope.carrito.push({
                producto:$scope.producto,
                precio:$scope.producto.precio,
                cant:$scope.cant
            });
            sumarProductos();

        }
        var productoBorrar;
        $scope.confirmar=function(item){
            productoBorrar=item;
            Toast.fire({
                icon: 'warning',
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
              })
        }
        $scope.confirmadoBorrar=function(){
            $scope.carrito.splice($scope.carrito.indexOf(productoBorrar),1);
            sumarProductos();
        }
        
    })